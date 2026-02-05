"use strict";
let r;
n.d(t, { Ay: () => B }), n(321073);
var i = n(812729),
    a = n.n(i),
    s = n(284009),
    o = n.n(s),
    l = n(212455),
    u = n(263715),
    c = n(857071),
    d = n(617617),
    _ = n(583613),
    f = n(403362),
    p = n(383394),
    h = n(919638),
    m = n(696451),
    g = n(71393),
    E = n(536802),
    A = n(543465),
    I = n(287809);
let T = new u.zF();
function y(e, t) {
    for (let n of g.A.getGuildIds()) !e(n) || c.A.isLurking(n) || m.Ay.isCurrentUserGuest(n) || t(n);
}
function S(e) {
    switch (e.type) {
        case u.PJ.FOLDER:
            return {
                folderId: e.id,
                folderName: e.name,
                folderColor: e.color,
                expanded: e.expanded,
                guildIds: e.children.map((e) => e.id),
            };
        case u.PJ.GUILD:
            return { folderId: void 0, guildIds: [e.id] };
        default:
            throw Error("[SortedGuildStore] Unexpected guilds tree node type.");
    }
}
function v(e, t) {
    let n = T;
    if (((T = new u.zF()), 0 === e.length && t.length > 0)) for (let e of t) T.addNode((0, u.EL)(e));
    else
        for (let t of e)
            if (0 !== t.guildIds.length)
                if (null == t.folderId) T.addNode((0, u.EL)(t.guildIds[0]));
                else {
                    let e = (0, u.xW)(t, void 0, p.A.isFolderExpanded(t.folderId));
                    for (let n of (T.addNode(e), t.guildIds)) T.addNode((0, u.EL)(n), e);
                }
    for (let e of T.allNodes())
        e.type === u.PJ.GUILD &&
            (c.A.isLurking(e.id) ||
                m.Ay.isCurrentUserGuest(e.id) ||
                (null == g.A.getGuild(e.id) && !h.A.isUnavailable(e.id))) &&
            T.removeNode(e);
    for (let e of Object.values(T.nodes)) e.type === u.PJ.FOLDER && 0 === e.children.length && T.removeNode(e);
    y(
        (e) => null == T.nodes[e],
        (e) => T.addNode((0, u.EL)(e), T.root, !1),
    ),
        (T.version = n.version);
    let r = a()(n, T);
    return r ? (T = n) : (T.version = n.version + 1), !r;
}
function C() {
    return v(d.A.getGuildFolders() ?? [], d.A.settings.guildFolders?.guildPositions ?? []);
}
function b() {
    let e = d.A.getGuildFolders();
    return !(null != r && a()(r, e)) && v((r = e) ?? [], d.A.settings.guildFolders?.guildPositions ?? []);
}
function N(e) {
    let { sourceId: t, targetId: n, moveToBelow: r, combine: i } = e,
        a = T.getNode(t),
        s = T.getNode(n);
    if (null == a || null == s) return !1;
    if (
        (o()(
            !(i && a.type === u.PJ.FOLDER),
            `[SORTED GUILDS] Can't combine a folder ${a.id} with another guilds list item`,
        ),
        o()(
            !(i && null != s.parentId),
            `[SORTED GUILDS] Can't combine with a guild ${s.id} that's already inside of a folder`,
        ),
        o()(
            a.type !== u.PJ.FOLDER || null == s.parentId,
            `[SORTED GUILDS] Can't move a folder ${a.id} to inside of another folder ${s.parentId}`,
        ),
        i)
    ) {
        let e = s.type !== u.PJ.FOLDER ? T.convertToFolder(s) : s;
        T.moveInto(a, e, r);
    } else T.moveNextTo(a, s, r);
}
function R(e) {
    let { sourceIds: t, name: n } = e,
        r = t.shift();
    if (null == r) return !1;
    let i = T.getNode(r);
    if (null == i) return !1;
    let a = T.convertToFolder(i);
    (a.name = n),
        t.forEach((e) => {
            let t = T.getNode(e);
            null != t && T.moveInto(t, a, !0);
        });
}
function O(e) {
    let { targetId: t, sourceIds: n, ...r } = e,
        i = T.getNode(t);
    if (null == i || i.type !== u.PJ.FOLDER) return !1;
    let a = "" === r.name ? void 0 : r.name;
    if (a !== i.name) {
        let e = T.cloneNode(i);
        o()(e.id === i.id, "[SORTED GUILDS] Replacement folder node must have same id."),
            (e.name = a),
            T.replaceNode(i, e);
    }
    let s = T.getNode(t);
    if (null == s) return !1;
    let l = s.children.map((e) => e.id).filter(f.Vq),
        c = new Set(l),
        d = new Set(n),
        _ = new Set([...l].filter((e) => !d.has(e)));
    n
        .filter((e) => !c.has(e))
        .forEach((e) => {
            let t = T.getNode(e);
            null != t && T.moveInto(t, s, !0);
        }),
        _.forEach((e) => {
            let t = T.getNode(e);
            null != t && T.moveNextTo(t, s, !0);
        });
}
function D(e) {
    let { targetId: t } = e,
        n = T.getNode(t);
    if (null == n || n.type !== u.PJ.FOLDER) return !1;
    n.children
        .map((e) => e.id)
        .filter(f.Vq)
        .forEach((e) => {
            let t = T.getNode(e);
            null != t && T.moveNextTo(t, n, !0);
        });
}
function L(e) {
    let { guildId: t, joinedAt: n, user: r } = e,
        i = I.default.getCurrentUser(),
        a = g.A.getGuild(t);
    if (i?.id !== r.id || null == a) return !1;
    let s = "string" == typeof n ? new Date(n) : n;
    return s !== a.joinedAt && null != s && C();
}
function w(e) {
    let { folderId: t } = e,
        n = T.getNode(t),
        r = p.A.isFolderExpanded(t);
    if (null == n || n.type !== u.PJ.FOLDER || n.expanded === r) return !1;
    M(n, r);
}
function x(e) {
    let { folderId: t, expanded: n } = e,
        r = T.getNode(t);
    if (null == r || r.type !== u.PJ.FOLDER || r.expanded === n) return !1;
    M(r, n);
}
function P() {
    for (let e of T.allNodes()) e.type === u.PJ.FOLDER && e.expanded && M(e, !1);
}
function M(e, t) {
    let n = T.cloneNode(e);
    o()(n.id === e.id, "[SORTED GUILDS] setNodeExpanded: Replacement folder node must have same id."),
        (n.expanded = t),
        T.replaceNode(e, n);
}
let k = (0, _.L_)((e, t) => e.sortedGuildNodes().map((e) => e.id)),
    U = (0, _.L_)((e, t) => e.getRoots().map(S)),
    G = (0, _.L_)((e, t) => {
        let n = [];
        function r(e) {
            switch (e.type) {
                case u.PJ.FOLDER:
                case u.PJ.GUILD:
                    n.push(e);
            }
            for (let t of e.children) r(t);
        }
        return r(e.root), n;
    }),
    V = (0, _.L_)((e, t) => e.root.children.map(S));
class F extends E.A {
    static displayName = "SortedGuildStore";
    static LATEST_SNAPSHOT_VERSION = 2;
    constructor() {
        super({
            CONNECTION_OPEN: C,
            OVERLAY_INITIALIZE: C,
            CACHE_LOADED: () => this.loadCache(),
            GUILD_CREATE: C,
            GUILD_DELETE: C,
            GUILD_MEMBER_ADD: L,
            USER_SETTINGS_PROTO_UPDATE: b,
            GUILD_MOVE_BY_ID: N,
            GUILD_FOLDER_CREATE_LOCAL: R,
            GUILD_FOLDER_EDIT_LOCAL: O,
            GUILD_FOLDER_DELETE_LOCAL: D,
            TOGGLE_GUILD_FOLDER_EXPAND: w,
            SET_GUILD_FOLDER_EXPANDED: x,
            GUILD_FOLDER_COLLAPSE: P,
        });
    }
    initialize() {
        this.waitFor(g.A, A.Ay, d.A, h.A, c.A, p.A, l.A);
    }
    getGuildsTree() {
        return T;
    }
    getGuildFolders() {
        return U(T, T.version);
    }
    getGuildFolderById(e) {
        return this.getGuildFolders().find((t) => t.folderId === e);
    }
    getFlattenedGuildIds() {
        return k(T, T.version);
    }
    getFlattenedGuildFolderList() {
        return G(T, T.version);
    }
    getCompatibleGuildFolders() {
        return V(T, T.version);
    }
    getFastListGuildFolders() {
        return T.getRoots();
    }
    loadCache = () => {
        let e = this.readSnapshot(F.LATEST_SNAPSHOT_VERSION),
            t = e?.tree;
        if (null != t)
            for (let e of ((T = new u.zF()).loadSnapshot(t), T.allNodes()))
                e.type === u.PJ.FOLDER && (e.expanded = p.A.isFolderExpanded(e.id));
    };
    takeSnapshot() {
        return { version: F.LATEST_SNAPSHOT_VERSION, data: { tree: T.getSnapshot() } };
    }
}
let B = new F();
