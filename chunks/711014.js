"use strict";
let r;
n.d(t, { Ay: () => F }), n(321073);
var i = n(812729),
    s = n.n(i),
    a = n(284009),
    o = n.n(a),
    l = n(212455),
    u = n(263715),
    d = n(857071),
    c = n(617617),
    _ = n(583613),
    f = n(403362),
    E = n(383394),
    h = n(919638),
    p = n(696451),
    m = n(71393),
    g = n(536802),
    A = n(543465),
    I = n(287809);
let T = new u.zF();
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
function y(e, t) {
    let n = T;
    if (((T = new u.zF()), 0 === e.length && t.length > 0)) for (let e of t) T.addNode((0, u.EL)(e));
    else
        for (let t of e)
            if (0 !== t.guildIds.length)
                if (null == t.folderId) T.addNode((0, u.EL)(t.guildIds[0]));
                else {
                    let e = (0, u.xW)(t, void 0, E.A.isFolderExpanded(t.folderId));
                    for (let n of (T.addNode(e), t.guildIds)) T.addNode((0, u.EL)(n), e);
                }
    for (let e of T.allNodes())
        e.type === u.PJ.GUILD &&
            (d.A.isLurking(e.id) ||
                p.Ay.isCurrentUserGuest(e.id) ||
                (null == m.A.getGuild(e.id) && !h.A.isUnavailable(e.id))) &&
            T.removeNode(e);
    for (let e of Object.values(T.nodes)) e.type === u.PJ.FOLDER && 0 === e.children.length && T.removeNode(e);
    for (let e of m.A.getGuildIds()) {
        let t, n;
        (t = e),
            null != T.nodes[t] ||
                d.A.isLurking(e) ||
                p.Ay.isCurrentUserGuest(e) ||
                ((n = e), T.addNode((0, u.EL)(n), T.root, !1));
    }
    T.version = n.version;
    let r = s()(n, T);
    return r ? (T = n) : (T.version = n.version + 1), !r;
}
function N() {
    return y(c.A.getGuildFolders() ?? [], c.A.settings.guildFolders?.guildPositions ?? []);
}
function O() {
    let e = c.A.getGuildFolders();
    return !(null != r && s()(r, e)) && y((r = e) ?? [], c.A.settings.guildFolders?.guildPositions ?? []);
}
function R(e) {
    let { sourceId: t, targetId: n, moveToBelow: r, combine: i } = e,
        s = T.getNode(t),
        a = T.getNode(n);
    if (null == s || null == a) return !1;
    if (
        (o()(
            !(i && s.type === u.PJ.FOLDER),
            `[SORTED GUILDS] Can't combine a folder ${s.id} with another guilds list item`,
        ),
        o()(
            !(i && null != a.parentId),
            `[SORTED GUILDS] Can't combine with a guild ${a.id} that's already inside of a folder`,
        ),
        o()(
            s.type !== u.PJ.FOLDER || null == a.parentId,
            `[SORTED GUILDS] Can't move a folder ${s.id} to inside of another folder ${a.parentId}`,
        ),
        i)
    ) {
        let e = a.type !== u.PJ.FOLDER ? T.convertToFolder(a) : a;
        T.moveInto(s, e, r);
    } else T.moveNextTo(s, a, r);
}
function v(e) {
    let { sourceIds: t, name: n } = e,
        r = t.shift();
    if (null == r) return !1;
    let i = T.getNode(r);
    if (null == i) return !1;
    let s = T.convertToFolder(i);
    (s.name = n),
        t.forEach((e) => {
            let t = T.getNode(e);
            null != t && T.moveInto(t, s, !0);
        });
}
function C(e) {
    let { targetId: t, sourceIds: n, ...r } = e,
        i = T.getNode(t);
    if (null == i || i.type !== u.PJ.FOLDER) return !1;
    let s = "" === r.name ? void 0 : r.name;
    if (s !== i.name) {
        let e = T.cloneNode(i);
        o()(e.id === i.id, "[SORTED GUILDS] Replacement folder node must have same id."),
            (e.name = s),
            T.replaceNode(i, e);
    }
    let a = T.getNode(t);
    if (null == a) return !1;
    let l = a.children.map((e) => e.id).filter(f.Vq),
        d = new Set(l),
        c = new Set(n),
        _ = new Set([...l].filter((e) => !c.has(e)));
    n
        .filter((e) => !d.has(e))
        .forEach((e) => {
            let t = T.getNode(e);
            null != t && T.moveInto(t, a, !0);
        }),
        _.forEach((e) => {
            let t = T.getNode(e);
            null != t && T.moveNextTo(t, a, !0);
        });
}
function b(e) {
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
function D(e) {
    let { guildId: t, joinedAt: n, user: r } = e,
        i = I.default.getCurrentUser(),
        s = m.A.getGuild(t);
    if (i?.id !== r.id || null == s) return !1;
    let a = "string" == typeof n ? new Date(n) : n;
    return a !== s.joinedAt && null != a && N();
}
function L(e) {
    let { folderId: t } = e,
        n = T.getNode(t),
        r = E.A.isFolderExpanded(t);
    if (null == n || n.type !== u.PJ.FOLDER || n.expanded === r) return !1;
    P(n, r);
}
function w(e) {
    let { folderId: t, expanded: n } = e,
        r = T.getNode(t);
    if (null == r || r.type !== u.PJ.FOLDER || r.expanded === n) return !1;
    P(r, n);
}
function M() {
    for (let e of T.allNodes()) e.type === u.PJ.FOLDER && e.expanded && P(e, !1);
}
function P(e, t) {
    let n = T.cloneNode(e);
    o()(n.id === e.id, "[SORTED GUILDS] setNodeExpanded: Replacement folder node must have same id."),
        (n.expanded = t),
        T.replaceNode(e, n);
}
let U = (0, _.L_)((e, t) => e.sortedGuildNodes().map((e) => e.id)),
    k = (0, _.L_)((e, t) => e.getRoots().map(S)),
    x = (0, _.L_)((e, t) => {
        let n = [];
        return (
            !(function e(t) {
                switch (t.type) {
                    case u.PJ.FOLDER:
                    case u.PJ.GUILD:
                        n.push(t);
                }
                for (let n of t.children) e(n);
            })(e.root),
            n
        );
    }),
    G = (0, _.L_)((e, t) => e.root.children.map(S));
class V extends g.A {
    static displayName = "SortedGuildStore";
    static LATEST_SNAPSHOT_VERSION = 2;
    constructor() {
        super({
            CONNECTION_OPEN: N,
            OVERLAY_INITIALIZE: N,
            CACHE_LOADED: () => this.loadCache(),
            GUILD_CREATE: N,
            GUILD_DELETE: N,
            GUILD_MEMBER_ADD: D,
            USER_SETTINGS_PROTO_UPDATE: O,
            GUILD_MOVE_BY_ID: R,
            GUILD_FOLDER_CREATE_LOCAL: v,
            GUILD_FOLDER_EDIT_LOCAL: C,
            GUILD_FOLDER_DELETE_LOCAL: b,
            TOGGLE_GUILD_FOLDER_EXPAND: L,
            SET_GUILD_FOLDER_EXPANDED: w,
            GUILD_FOLDER_COLLAPSE: M,
        });
    }
    initialize() {
        this.waitFor(m.A, A.Ay, c.A, h.A, d.A, E.A, l.A);
    }
    getGuildsTree() {
        return T;
    }
    getGuildFolders() {
        return k(T, T.version);
    }
    getGuildFolderById(e) {
        return this.getGuildFolders().find((t) => t.folderId === e);
    }
    getFlattenedGuildIds() {
        return U(T, T.version);
    }
    getFlattenedGuildFolderList() {
        return x(T, T.version);
    }
    getCompatibleGuildFolders() {
        return G(T, T.version);
    }
    getFastListGuildFolders() {
        return T.getRoots();
    }
    loadCache = () => {
        let e = this.readSnapshot(V.LATEST_SNAPSHOT_VERSION),
            t = e?.tree;
        if (null != t)
            for (let e of ((T = new u.zF()).loadSnapshot(t), T.allNodes()))
                e.type === u.PJ.FOLDER && (e.expanded = E.A.isFolderExpanded(e.id));
    };
    takeSnapshot() {
        return { version: V.LATEST_SNAPSHOT_VERSION, data: { tree: T.getSnapshot() } };
    }
}
let F = new V();
