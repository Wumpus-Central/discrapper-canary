let i;
var a = r(411104);
var o = r(47120);
var s = r(653041);
var l = r(348327),
    u = r.n(l),
    c = r(512722),
    d = r.n(c),
    f = r(937111),
    p = r(727258),
    h = r(41776),
    _ = r(581883),
    m = r(251625),
    g = r(823379),
    E = r(664915),
    v = r(486472),
    y = r(271383),
    b = r(430824),
    I = r(412788),
    T = r(9156),
    S = r(594174);
function A(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let C = new p.g8();
function N(e, n) {
    for (let r in b.Z.getGuilds()) e(r) && !h.Z.isLurking(r) && !y.ZP.isCurrentUserGuest(r) && n(r);
}
function R(e) {
    switch (e.type) {
        case p.eD.FOLDER:
            return {
                folderId: e.id,
                folderName: e.name,
                folderColor: e.color,
                expanded: e.expanded,
                guildIds: e.children.map((e) => e.id)
            };
        case p.eD.GUILD:
            return {
                folderId: void 0,
                guildIds: [e.id]
            };
        default:
            throw Error('[SortedGuildStore] Unexpected guilds tree node type.');
    }
}
function O(e, n) {
    let r = C;
    if (((C = new p.g8()), 0 === e.length && n.length > 0)) for (let e of n) C.addNode((0, p.Mg)(e));
    else
        for (let n of e)
            if (0 !== n.guildIds.length) {
                if (null == n.folderId) C.addNode((0, p.Mg)(n.guildIds[0]));
                else {
                    let e = (0, p.qQ)(n, void 0, E.Z.isFolderExpanded(n.folderId));
                    for (let r of (C.addNode(e), n.guildIds)) C.addNode((0, p.Mg)(r), e);
                }
            }
    for (let e of C.allNodes()) e.type === p.eD.GUILD && (h.Z.isLurking(e.id) || y.ZP.isCurrentUserGuest(e.id) || (null == b.Z.getGuild(e.id) && !v.Z.isUnavailable(e.id))) && C.removeNode(e);
    for (let e of Object.values(C.nodes)) e.type === p.eD.FOLDER && 0 === e.children.length && C.removeNode(e);
    N(
        (e) => null == C.nodes[e],
        (e) => C.addNode((0, p.Mg)(e), C.root, !1)
    ),
        (C.version = r.version);
    let i = u()(r, C);
    return i ? (C = r) : (C.version = r.version + 1), !i;
}
function D() {
    var e, n, r;
    return O(null !== (n = _.Z.getGuildFolders()) && void 0 !== n ? n : [], null !== (r = null === (e = _.Z.settings.guildFolders) || void 0 === e ? void 0 : e.guildPositions) && void 0 !== r ? r : []);
}
function L() {
    var e, n;
    let r = _.Z.getGuildFolders();
    return !(null != i && u()(i, r)) && O(null != (i = r) ? i : [], null !== (n = null === (e = _.Z.settings.guildFolders) || void 0 === e ? void 0 : e.guildPositions) && void 0 !== n ? n : []);
}
function x(e) {
    let { sourceId: n, targetId: r, moveToBelow: i, combine: a } = e,
        o = C.getNode(n),
        s = C.getNode(r);
    if (null == o || null == s) return !1;
    if ((d()(!(a && o.type === p.eD.FOLDER), "[SORTED GUILDS] Can't combine a folder ".concat(o.id, ' with another guilds list item')), d()(!(a && null != s.parentId), "[SORTED GUILDS] Can't combine with a guild ".concat(s.id, " that's already inside of a folder")), d()(!(o.type === p.eD.FOLDER && null != s.parentId), "[SORTED GUILDS] Can't move a folder ".concat(o.id, ' to inside of another folder ').concat(s.parentId)), a)) {
        let e = s.type !== p.eD.FOLDER ? C.convertToFolder(s) : s;
        C.moveInto(o, e, i);
    } else C.moveNextTo(o, s, i);
}
function w(e) {
    let { sourceIds: n, name: r } = e,
        i = n.shift();
    if (null == i) return !1;
    let a = C.getNode(i);
    if (null == a) return !1;
    let o = C.convertToFolder(a);
    (o.name = r),
        n.forEach((e) => {
            let n = C.getNode(e);
            null != n && C.moveInto(n, o, !0);
        });
}
function P(e) {
    let { targetId: n, sourceIds: r, ...i } = e,
        a = C.getNode(n);
    if (null == a || a.type !== p.eD.FOLDER) return !1;
    let o = '' === i.name ? void 0 : i.name;
    if (o !== a.name) {
        let e = C.cloneNode(a);
        d()(e.id === a.id, '[SORTED GUILDS] Replacement folder node must have same id.'), (e.name = o), C.replaceNode(a, e);
    }
    let s = C.getNode(n);
    if (null == s) return !1;
    let l = s.children.map((e) => e.id).filter(g.lm),
        u = new Set(l),
        c = new Set(r),
        f = new Set([...l].filter((e) => !c.has(e)));
    r
        .filter((e) => !u.has(e))
        .forEach((e) => {
            let n = C.getNode(e);
            null != n && C.moveInto(n, s, !0);
        }),
        f.forEach((e) => {
            let n = C.getNode(e);
            null != n && C.moveNextTo(n, s, !0);
        });
}
function M(e) {
    let { targetId: n } = e,
        r = C.getNode(n);
    if (null == r || r.type !== p.eD.FOLDER) return !1;
    r.children
        .map((e) => e.id)
        .filter(g.lm)
        .forEach((e) => {
            let n = C.getNode(e);
            null != n && C.moveNextTo(n, r, !0);
        });
}
function k(e) {
    let { guildId: n, joinedAt: r, user: i } = e,
        a = S.default.getCurrentUser(),
        o = b.Z.getGuild(n);
    if ((null == a ? void 0 : a.id) !== i.id || null == o) return !1;
    let s = 'string' == typeof r ? new Date(r) : r;
    return s !== o.joinedAt && null != s && D();
}
function U(e) {
    let { folderId: n } = e,
        r = C.getNode(n),
        i = E.Z.isFolderExpanded(n);
    if (null == r || r.type !== p.eD.FOLDER || r.expanded === i) return !1;
    Z(r, i);
}
function B(e) {
    let { folderId: n, expanded: r } = e,
        i = C.getNode(n);
    if (null == i || i.type !== p.eD.FOLDER || i.expanded === r) return !1;
    Z(i, r);
}
function G() {
    for (let e of C.allNodes()) e.type === p.eD.FOLDER && e.expanded && Z(e, !1);
}
function Z(e, n) {
    let r = C.cloneNode(e);
    d()(r.id === e.id, '[SORTED GUILDS] setNodeExpanded: Replacement folder node must have same id.'), (r.expanded = n), C.replaceNode(e, r);
}
let F = (0, m.oH)((e, n) => e.sortedGuildNodes().map((e) => e.id)),
    V = (0, m.oH)((e, n) => e.getRoots().map(R)),
    j = (0, m.oH)((e, n) => {
        let r = [];
        function i(e) {
            switch (e.type) {
                case p.eD.FOLDER:
                case p.eD.GUILD:
                    r.push(e);
            }
            for (let n of e.children) i(n);
        }
        return i(e.root), r;
    }),
    H = (0, m.oH)((e, n) => e.root.children.map(R));
class Y extends I.Z {
    initialize() {
        this.waitFor(b.Z, T.ZP, _.Z, v.Z, h.Z, E.Z, f.Z);
    }
    getGuildsTree() {
        return C;
    }
    getGuildFolders() {
        return V(C, C.version);
    }
    getGuildFolderById(e) {
        return this.getGuildFolders().find((n) => n.folderId === e);
    }
    getFlattenedGuildIds() {
        return F(C, C.version);
    }
    getFlattenedGuildFolderList() {
        return j(C, C.version);
    }
    getCompatibleGuildFolders() {
        return H(C, C.version);
    }
    getFastListGuildFolders() {
        return C.getRoots();
    }
    takeSnapshot() {
        return {
            version: Y.LATEST_SNAPSHOT_VERSION,
            data: { tree: C.getSnapshot() }
        };
    }
    constructor() {
        super({
            CONNECTION_OPEN: D,
            OVERLAY_INITIALIZE: D,
            CACHE_LOADED: () => this.loadCache(),
            GUILD_CREATE: D,
            GUILD_DELETE: D,
            GUILD_MEMBER_ADD: k,
            USER_SETTINGS_PROTO_UPDATE: L,
            GUILD_MOVE_BY_ID: x,
            GUILD_FOLDER_CREATE_LOCAL: w,
            GUILD_FOLDER_EDIT_LOCAL: P,
            GUILD_FOLDER_DELETE_LOCAL: M,
            TOGGLE_GUILD_FOLDER_EXPAND: U,
            SET_GUILD_FOLDER_EXPANDED: B,
            GUILD_FOLDER_COLLAPSE: G
        }),
            A(this, 'loadCache', () => {
                let e = this.readSnapshot(Y.LATEST_SNAPSHOT_VERSION),
                    n = null == e ? void 0 : e.tree;
                if (null != n) for (let e of ((C = new p.g8()).loadSnapshot(n), C.allNodes())) e.type === p.eD.FOLDER && (e.expanded = E.Z.isFolderExpanded(e.id));
            });
    }
}
A(Y, 'displayName', 'SortedGuildStore'), A(Y, 'LATEST_SNAPSHOT_VERSION', 2), (n.ZP = new Y());
