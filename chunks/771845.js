let i;
var a = r(411104);
var s = r(47120);
var o = r(653041);
var l = r(348327),
    u = r.n(l),
    c = r(512722),
    d = r.n(c),
    f = r(937111),
    _ = r(727258),
    h = r(41776),
    p = r(581883),
    m = r(251625),
    g = r(823379),
    E = r(664915),
    v = r(486472),
    I = r(271383),
    T = r(430824),
    b = r(412788),
    y = r(9156),
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
let N = new _.g8();
function C(e, n) {
    for (let r in T.Z.getGuilds()) e(r) && !h.Z.isLurking(r) && !I.ZP.isCurrentUserGuest(r) && n(r);
}
function R(e) {
    switch (e.type) {
        case _.eD.FOLDER:
            return {
                folderId: e.id,
                folderName: e.name,
                folderColor: e.color,
                expanded: e.expanded,
                guildIds: e.children.map((e) => e.id)
            };
        case _.eD.GUILD:
            return {
                folderId: void 0,
                guildIds: [e.id]
            };
        default:
            throw Error('[SortedGuildStore] Unexpected guilds tree node type.');
    }
}
function O(e, n) {
    let r = N;
    if (((N = new _.g8()), 0 === e.length && n.length > 0)) for (let e of n) N.addNode((0, _.Mg)(e));
    else
        for (let n of e)
            if (0 !== n.guildIds.length) {
                if (null == n.folderId) N.addNode((0, _.Mg)(n.guildIds[0]));
                else {
                    let e = (0, _.qQ)(n, void 0, E.Z.isFolderExpanded(n.folderId));
                    for (let r of (N.addNode(e), n.guildIds)) N.addNode((0, _.Mg)(r), e);
                }
            }
    for (let e of N.allNodes()) e.type === _.eD.GUILD && (h.Z.isLurking(e.id) || I.ZP.isCurrentUserGuest(e.id) || (null == T.Z.getGuild(e.id) && !v.Z.isUnavailable(e.id))) && N.removeNode(e);
    for (let e of Object.values(N.nodes)) e.type === _.eD.FOLDER && 0 === e.children.length && N.removeNode(e);
    C(
        (e) => null == N.nodes[e],
        (e) => N.addNode((0, _.Mg)(e), N.root, !1)
    ),
        (N.version = r.version);
    let i = u()(r, N);
    return i ? (N = r) : (N.version = r.version + 1), !i;
}
function D() {
    var e, n, r;
    return O(null !== (n = p.Z.getGuildFolders()) && void 0 !== n ? n : [], null !== (r = null === (e = p.Z.settings.guildFolders) || void 0 === e ? void 0 : e.guildPositions) && void 0 !== r ? r : []);
}
function L() {
    var e, n;
    let r = p.Z.getGuildFolders();
    return !(null != i && u()(i, r)) && O(null != (i = r) ? i : [], null !== (n = null === (e = p.Z.settings.guildFolders) || void 0 === e ? void 0 : e.guildPositions) && void 0 !== n ? n : []);
}
function x(e) {
    let { sourceId: n, targetId: r, moveToBelow: i, combine: a } = e,
        s = N.getNode(n),
        o = N.getNode(r);
    if (null == s || null == o) return !1;
    if ((d()(!(a && s.type === _.eD.FOLDER), "[SORTED GUILDS] Can't combine a folder ".concat(s.id, ' with another guilds list item')), d()(!(a && null != o.parentId), "[SORTED GUILDS] Can't combine with a guild ".concat(o.id, " that's already inside of a folder")), d()(!(s.type === _.eD.FOLDER && null != o.parentId), "[SORTED GUILDS] Can't move a folder ".concat(s.id, ' to inside of another folder ').concat(o.parentId)), a)) {
        let e = o.type !== _.eD.FOLDER ? N.convertToFolder(o) : o;
        N.moveInto(s, e, i);
    } else N.moveNextTo(s, o, i);
}
function w(e) {
    let { sourceIds: n, name: r } = e,
        i = n.shift();
    if (null == i) return !1;
    let a = N.getNode(i);
    if (null == a) return !1;
    let s = N.convertToFolder(a);
    (s.name = r),
        n.forEach((e) => {
            let n = N.getNode(e);
            null != n && N.moveInto(n, s, !0);
        });
}
function P(e) {
    let { targetId: n, sourceIds: r, ...i } = e,
        a = N.getNode(n);
    if (null == a || a.type !== _.eD.FOLDER) return !1;
    let s = '' === i.name ? void 0 : i.name;
    if (s !== a.name) {
        let e = N.cloneNode(a);
        d()(e.id === a.id, '[SORTED GUILDS] Replacement folder node must have same id.'), (e.name = s), N.replaceNode(a, e);
    }
    let o = N.getNode(n);
    if (null == o) return !1;
    let l = o.children.map((e) => e.id).filter(g.lm),
        u = new Set(l),
        c = new Set(r),
        f = new Set([...l].filter((e) => !c.has(e)));
    r
        .filter((e) => !u.has(e))
        .forEach((e) => {
            let n = N.getNode(e);
            null != n && N.moveInto(n, o, !0);
        }),
        f.forEach((e) => {
            let n = N.getNode(e);
            null != n && N.moveNextTo(n, o, !0);
        });
}
function M(e) {
    let { targetId: n } = e,
        r = N.getNode(n);
    if (null == r || r.type !== _.eD.FOLDER) return !1;
    r.children
        .map((e) => e.id)
        .filter(g.lm)
        .forEach((e) => {
            let n = N.getNode(e);
            null != n && N.moveNextTo(n, r, !0);
        });
}
function k(e) {
    let { guildId: n, joinedAt: r, user: i } = e,
        a = S.default.getCurrentUser(),
        s = T.Z.getGuild(n);
    if ((null == a ? void 0 : a.id) !== i.id || null == s) return !1;
    let o = 'string' == typeof r ? new Date(r) : r;
    return o !== s.joinedAt && null != o && D();
}
function U(e) {
    let { folderId: n } = e,
        r = N.getNode(n),
        i = E.Z.isFolderExpanded(n);
    if (null == r || r.type !== _.eD.FOLDER || r.expanded === i) return !1;
    Z(r, i);
}
function B(e) {
    let { folderId: n, expanded: r } = e,
        i = N.getNode(n);
    if (null == i || i.type !== _.eD.FOLDER || i.expanded === r) return !1;
    Z(i, r);
}
function G() {
    for (let e of N.allNodes()) e.type === _.eD.FOLDER && e.expanded && Z(e, !1);
}
function Z(e, n) {
    let r = N.cloneNode(e);
    d()(r.id === e.id, '[SORTED GUILDS] setNodeExpanded: Replacement folder node must have same id.'), (r.expanded = n), N.replaceNode(e, r);
}
let F = (0, m.oH)((e, n) => e.sortedGuildNodes().map((e) => e.id)),
    V = (0, m.oH)((e, n) => e.getRoots().map(R)),
    j = (0, m.oH)((e, n) => {
        let r = [];
        function i(e) {
            switch (e.type) {
                case _.eD.FOLDER:
                case _.eD.GUILD:
                    r.push(e);
            }
            for (let n of e.children) i(n);
        }
        return i(e.root), r;
    }),
    H = (0, m.oH)((e, n) => e.root.children.map(R));
class Y extends b.Z {
    initialize() {
        this.waitFor(T.Z, y.ZP, p.Z, v.Z, h.Z, E.Z, f.Z);
    }
    getGuildsTree() {
        return N;
    }
    getGuildFolders() {
        return V(N, N.version);
    }
    getGuildFolderById(e) {
        return this.getGuildFolders().find((n) => n.folderId === e);
    }
    getFlattenedGuildIds() {
        return F(N, N.version);
    }
    getFlattenedGuildFolderList() {
        return j(N, N.version);
    }
    getCompatibleGuildFolders() {
        return H(N, N.version);
    }
    getFastListGuildFolders() {
        return N.getRoots();
    }
    takeSnapshot() {
        return {
            version: Y.LATEST_SNAPSHOT_VERSION,
            data: { tree: N.getSnapshot() }
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
                if (null != n) for (let e of ((N = new _.g8()).loadSnapshot(n), N.allNodes())) e.type === _.eD.FOLDER && (e.expanded = E.Z.isFolderExpanded(e.id));
            });
    }
}
A(Y, 'displayName', 'SortedGuildStore'), A(Y, 'LATEST_SNAPSHOT_VERSION', 2), (n.ZP = new Y());
