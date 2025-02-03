let i;
n.d(t, { ZP: () => V }), n(411104), n(47120), n(653041);
var r = n(348327),
    a = n.n(r),
    s = n(512722),
    o = n.n(s),
    l = n(937111),
    u = n(727258),
    c = n(41776),
    d = n(581883),
    f = n(251625),
    _ = n(823379),
    p = n(664915),
    h = n(486472),
    m = n(271383),
    g = n(430824),
    E = n(412788),
    v = n(9156),
    y = n(594174);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let b = new u.g8();
function T(e, t) {
    for (let n in g.Z.getGuilds()) !e(n) || c.Z.isLurking(n) || m.ZP.isCurrentUserGuest(n) || t(n);
}
function S(e) {
    switch (e.type) {
        case u.eD.FOLDER:
            return {
                folderId: e.id,
                folderName: e.name,
                folderColor: e.color,
                expanded: e.expanded,
                guildIds: e.children.map((e) => e.id)
            };
        case u.eD.GUILD:
            return {
                folderId: void 0,
                guildIds: [e.id]
            };
        default:
            throw Error('[SortedGuildStore] Unexpected guilds tree node type.');
    }
}
function A(e, t) {
    let n = b;
    if (((b = new u.g8()), 0 === e.length && t.length > 0)) for (let e of t) b.addNode((0, u.Mg)(e));
    else
        for (let t of e)
            if (0 !== t.guildIds.length) {
                if (null == t.folderId) b.addNode((0, u.Mg)(t.guildIds[0]));
                else {
                    let e = (0, u.qQ)(t, void 0, p.Z.isFolderExpanded(t.folderId));
                    for (let n of (b.addNode(e), t.guildIds)) b.addNode((0, u.Mg)(n), e);
                }
            }
    for (let e of b.allNodes()) e.type === u.eD.GUILD && (c.Z.isLurking(e.id) || m.ZP.isCurrentUserGuest(e.id) || (null == g.Z.getGuild(e.id) && !h.Z.isUnavailable(e.id))) && b.removeNode(e);
    for (let e of Object.values(b.nodes)) e.type === u.eD.FOLDER && 0 === e.children.length && b.removeNode(e);
    T(
        (e) => null == b.nodes[e],
        (e) => b.addNode((0, u.Mg)(e), b.root, !1)
    ),
        (b.version = n.version);
    let i = a()(n, b);
    return i ? (b = n) : (b.version = n.version + 1), !i;
}
function N() {
    var e, t, n;
    return A(null !== (t = d.Z.getGuildFolders()) && void 0 !== t ? t : [], null !== (n = null === (e = d.Z.settings.guildFolders) || void 0 === e ? void 0 : e.guildPositions) && void 0 !== n ? n : []);
}
function C() {
    var e, t;
    let n = d.Z.getGuildFolders();
    return !(null != i && a()(i, n)) && A(null != (i = n) ? i : [], null !== (t = null === (e = d.Z.settings.guildFolders) || void 0 === e ? void 0 : e.guildPositions) && void 0 !== t ? t : []);
}
function R(e) {
    let { sourceId: t, targetId: n, moveToBelow: i, combine: r } = e,
        a = b.getNode(t),
        s = b.getNode(n);
    if (null == a || null == s) return !1;
    if ((o()(!(r && a.type === u.eD.FOLDER), "[SORTED GUILDS] Can't combine a folder ".concat(a.id, ' with another guilds list item')), o()(!(r && null != s.parentId), "[SORTED GUILDS] Can't combine with a guild ".concat(s.id, " that's already inside of a folder")), o()(!(a.type === u.eD.FOLDER && null != s.parentId), "[SORTED GUILDS] Can't move a folder ".concat(a.id, ' to inside of another folder ').concat(s.parentId)), r)) {
        let e = s.type !== u.eD.FOLDER ? b.convertToFolder(s) : s;
        b.moveInto(a, e, i);
    } else b.moveNextTo(a, s, i);
}
function O(e) {
    let { sourceIds: t, name: n } = e,
        i = t.shift();
    if (null == i) return !1;
    let r = b.getNode(i);
    if (null == r) return !1;
    let a = b.convertToFolder(r);
    (a.name = n),
        t.forEach((e) => {
            let t = b.getNode(e);
            null != t && b.moveInto(t, a, !0);
        });
}
function D(e) {
    let { targetId: t, sourceIds: n, ...i } = e,
        r = b.getNode(t);
    if (null == r || r.type !== u.eD.FOLDER) return !1;
    let a = '' === i.name ? void 0 : i.name;
    if (a !== r.name) {
        let e = b.cloneNode(r);
        o()(e.id === r.id, '[SORTED GUILDS] Replacement folder node must have same id.'), (e.name = a), b.replaceNode(r, e);
    }
    let s = b.getNode(t);
    if (null == s) return !1;
    let l = s.children.map((e) => e.id).filter(_.lm),
        c = new Set(l),
        d = new Set(n),
        f = new Set([...l].filter((e) => !d.has(e)));
    n
        .filter((e) => !c.has(e))
        .forEach((e) => {
            let t = b.getNode(e);
            null != t && b.moveInto(t, s, !0);
        }),
        f.forEach((e) => {
            let t = b.getNode(e);
            null != t && b.moveNextTo(t, s, !0);
        });
}
function x(e) {
    let { targetId: t } = e,
        n = b.getNode(t);
    if (null == n || n.type !== u.eD.FOLDER) return !1;
    n.children
        .map((e) => e.id)
        .filter(_.lm)
        .forEach((e) => {
            let t = b.getNode(e);
            null != t && b.moveNextTo(t, n, !0);
        });
}
function L(e) {
    let { guildId: t, joinedAt: n, user: i } = e,
        r = y.default.getCurrentUser(),
        a = g.Z.getGuild(t);
    if ((null == r ? void 0 : r.id) !== i.id || null == a) return !1;
    let s = 'string' == typeof n ? new Date(n) : n;
    return s !== a.joinedAt && null != s && N();
}
function P(e) {
    let { folderId: t } = e,
        n = b.getNode(t),
        i = p.Z.isFolderExpanded(t);
    if (null == n || n.type !== u.eD.FOLDER || n.expanded === i) return !1;
    k(n, i);
}
function w(e) {
    let { folderId: t, expanded: n } = e,
        i = b.getNode(t);
    if (null == i || i.type !== u.eD.FOLDER || i.expanded === n) return !1;
    k(i, n);
}
function M() {
    for (let e of b.allNodes()) e.type === u.eD.FOLDER && e.expanded && k(e, !1);
}
function k(e, t) {
    let n = b.cloneNode(e);
    o()(n.id === e.id, '[SORTED GUILDS] setNodeExpanded: Replacement folder node must have same id.'), (n.expanded = t), b.replaceNode(e, n);
}
let U = (0, f.oH)((e, t) => e.sortedGuildNodes().map((e) => e.id)),
    G = (0, f.oH)((e, t) => e.getRoots().map(S)),
    B = (0, f.oH)((e, t) => {
        let n = [];
        function i(e) {
            switch (e.type) {
                case u.eD.FOLDER:
                case u.eD.GUILD:
                    n.push(e);
            }
            for (let t of e.children) i(t);
        }
        return i(e.root), n;
    }),
    Z = (0, f.oH)((e, t) => e.root.children.map(S));
class F extends E.Z {
    initialize() {
        this.waitFor(g.Z, v.ZP, d.Z, h.Z, c.Z, p.Z, l.Z);
    }
    getGuildsTree() {
        return b;
    }
    getGuildFolders() {
        return G(b, b.version);
    }
    getGuildFolderById(e) {
        return this.getGuildFolders().find((t) => t.folderId === e);
    }
    getFlattenedGuildIds() {
        return U(b, b.version);
    }
    getFlattenedGuildFolderList() {
        return B(b, b.version);
    }
    getCompatibleGuildFolders() {
        return Z(b, b.version);
    }
    getFastListGuildFolders() {
        return b.getRoots();
    }
    takeSnapshot() {
        return {
            version: F.LATEST_SNAPSHOT_VERSION,
            data: { tree: b.getSnapshot() }
        };
    }
    constructor() {
        super({
            CONNECTION_OPEN: N,
            OVERLAY_INITIALIZE: N,
            CACHE_LOADED: () => this.loadCache(),
            GUILD_CREATE: N,
            GUILD_DELETE: N,
            GUILD_MEMBER_ADD: L,
            USER_SETTINGS_PROTO_UPDATE: C,
            GUILD_MOVE_BY_ID: R,
            GUILD_FOLDER_CREATE_LOCAL: O,
            GUILD_FOLDER_EDIT_LOCAL: D,
            GUILD_FOLDER_DELETE_LOCAL: x,
            TOGGLE_GUILD_FOLDER_EXPAND: P,
            SET_GUILD_FOLDER_EXPANDED: w,
            GUILD_FOLDER_COLLAPSE: M
        }),
            I(this, 'loadCache', () => {
                let e = this.readSnapshot(F.LATEST_SNAPSHOT_VERSION),
                    t = null == e ? void 0 : e.tree;
                if (null != t) for (let e of ((b = new u.g8()).loadSnapshot(t), b.allNodes())) e.type === u.eD.FOLDER && (e.expanded = p.Z.isFolderExpanded(e.id));
            });
    }
}
I(F, 'displayName', 'SortedGuildStore'), I(F, 'LATEST_SNAPSHOT_VERSION', 2);
let V = new F();
