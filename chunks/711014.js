"use strict";
let i;
n.d(t, { Ay: () => V }), n(321073);
var r = n(812729),
    a = n.n(r),
    s = n(284009),
    l = n.n(s),
    o = n(212455),
    d = n(263715),
    c = n(857071),
    u = n(617617),
    _ = n(583613),
    E = n(403362),
    A = n(383394),
    h = n(919638),
    I = n(696451),
    f = n(71393),
    p = n(536802),
    T = n(543465),
    m = n(287809);
let g = new d.zF();
function S(e) {
    switch (e.type) {
        case d.PJ.FOLDER:
            return {
                folderId: e.id,
                folderName: e.name,
                folderColor: e.color,
                expanded: e.expanded,
                guildIds: e.children.map((e) => e.id),
            };
        case d.PJ.GUILD:
            return { folderId: void 0, guildIds: [e.id] };
        default:
            throw Error("[SortedGuildStore] Unexpected guilds tree node type.");
    }
}
function N(e, t) {
    let n = g;
    if (((g = new d.zF()), 0 === e.length && t.length > 0)) for (let e of t) g.addNode((0, d.EL)(e));
    else
        for (let t of e)
            if (0 !== t.guildIds.length)
                if (null == t.folderId) g.addNode((0, d.EL)(t.guildIds[0]));
                else {
                    let e = (0, d.xW)(t, void 0, A.A.isFolderExpanded(t.folderId));
                    for (let n of (g.addNode(e), t.guildIds)) g.addNode((0, d.EL)(n), e);
                }
    for (let e of g.allNodes())
        e.type === d.PJ.GUILD &&
            (c.A.isLurking(e.id) ||
                I.Ay.isCurrentUserGuest(e.id) ||
                (null == f.A.getGuild(e.id) && !h.A.isUnavailable(e.id))) &&
            g.removeNode(e);
    for (let e of Object.values(g.nodes)) e.type === d.PJ.FOLDER && 0 === e.children.length && g.removeNode(e);
    for (let e of f.A.getGuildIds()) {
        let t, n;
        (t = e),
            null != g.nodes[t] ||
                c.A.isLurking(e) ||
                I.Ay.isCurrentUserGuest(e) ||
                ((n = e), g.addNode((0, d.EL)(n), g.root, !1));
    }
    g.version = n.version;
    let i = a()(n, g);
    return i ? (g = n) : (g.version = n.version + 1), !i;
}
function C() {
    return N(u.A.getGuildFolders() ?? [], u.A.settings.guildFolders?.guildPositions ?? []);
}
function O() {
    let e = u.A.getGuildFolders();
    return !(null != i && a()(i, e)) && N((i = e) ?? [], u.A.settings.guildFolders?.guildPositions ?? []);
}
function R(e) {
    let { sourceId: t, targetId: n, moveToBelow: i, combine: r } = e,
        a = g.getNode(t),
        s = g.getNode(n);
    if (null == a || null == s) return !1;
    if (
        (l()(
            !(r && a.type === d.PJ.FOLDER),
            `[SORTED GUILDS] Can't combine a folder ${a.id} with another guilds list item`,
        ),
        l()(
            !(r && null != s.parentId),
            `[SORTED GUILDS] Can't combine with a guild ${s.id} that's already inside of a folder`,
        ),
        l()(
            a.type !== d.PJ.FOLDER || null == s.parentId,
            `[SORTED GUILDS] Can't move a folder ${a.id} to inside of another folder ${s.parentId}`,
        ),
        r)
    ) {
        let e = s.type !== d.PJ.FOLDER ? g.convertToFolder(s) : s;
        g.moveInto(a, e, i);
    } else g.moveNextTo(a, s, i);
}
function L(e) {
    let { sourceIds: t, name: n } = e,
        i = t.shift();
    if (null == i) return !1;
    let r = g.getNode(i);
    if (null == r) return !1;
    let a = g.convertToFolder(r);
    (a.name = n),
        t.forEach((e) => {
            let t = g.getNode(e);
            null != t && g.moveInto(t, a, !0);
        });
}
function y(e) {
    let { targetId: t, sourceIds: n, ...i } = e,
        r = g.getNode(t);
    if (null == r || r.type !== d.PJ.FOLDER) return !1;
    let a = "" === i.name ? void 0 : i.name;
    if (a !== r.name) {
        let e = g.cloneNode(r);
        l()(e.id === r.id, "[SORTED GUILDS] Replacement folder node must have same id."),
            (e.name = a),
            g.replaceNode(r, e);
    }
    let s = g.getNode(t);
    if (null == s) return !1;
    let o = s.children.map((e) => e.id).filter(E.Vq),
        c = new Set(o),
        u = new Set(n),
        _ = new Set([...o].filter((e) => !u.has(e)));
    n
        .filter((e) => !c.has(e))
        .forEach((e) => {
            let t = g.getNode(e);
            null != t && g.moveInto(t, s, !0);
        }),
        _.forEach((e) => {
            let t = g.getNode(e);
            null != t && g.moveNextTo(t, s, !0);
        });
}
function D(e) {
    let { targetId: t } = e,
        n = g.getNode(t);
    if (null == n || n.type !== d.PJ.FOLDER) return !1;
    n.children
        .map((e) => e.id)
        .filter(E.Vq)
        .forEach((e) => {
            let t = g.getNode(e);
            null != t && g.moveNextTo(t, n, !0);
        });
}
function v(e) {
    let { guildId: t, joinedAt: n, user: i } = e,
        r = m.default.getCurrentUser(),
        a = f.A.getGuild(t);
    if (r?.id !== i.id || null == a) return !1;
    let s = "string" == typeof n ? new Date(n) : n;
    return s !== a.joinedAt && null != s && C();
}
function b(e) {
    let { folderId: t } = e,
        n = g.getNode(t),
        i = A.A.isFolderExpanded(t);
    if (null == n || n.type !== d.PJ.FOLDER || n.expanded === i) return !1;
    U(n, i);
}
function M(e) {
    let { folderId: t, expanded: n } = e,
        i = g.getNode(t);
    if (null == i || i.type !== d.PJ.FOLDER || i.expanded === n) return !1;
    U(i, n);
}
function P() {
    for (let e of g.allNodes()) e.type === d.PJ.FOLDER && e.expanded && U(e, !1);
}
function U(e, t) {
    let n = g.cloneNode(e);
    l()(n.id === e.id, "[SORTED GUILDS] setNodeExpanded: Replacement folder node must have same id."),
        (n.expanded = t),
        g.replaceNode(e, n);
}
let w = (0, _.L_)((e, t) => e.sortedGuildNodes().map((e) => e.id)),
    G = (0, _.L_)((e, t) => e.getRoots().map(S)),
    x = (0, _.L_)((e, t) => {
        let n = [];
        return (
            !(function e(t) {
                switch (t.type) {
                    case d.PJ.FOLDER:
                    case d.PJ.GUILD:
                        n.push(t);
                }
                for (let n of t.children) e(n);
            })(e.root),
            n
        );
    }),
    k = (0, _.L_)((e, t) => e.root.children.map(S));
class F extends p.A {
    static displayName = "SortedGuildStore";
    static LATEST_SNAPSHOT_VERSION = 2;
    constructor() {
        super({
            CONNECTION_OPEN: C,
            OVERLAY_INITIALIZE: C,
            CACHE_LOADED: () => this.loadCache(),
            GUILD_CREATE: C,
            GUILD_DELETE: C,
            GUILD_MEMBER_ADD: v,
            USER_SETTINGS_PROTO_UPDATE: O,
            GUILD_MOVE_BY_ID: R,
            GUILD_FOLDER_CREATE_LOCAL: L,
            GUILD_FOLDER_EDIT_LOCAL: y,
            GUILD_FOLDER_DELETE_LOCAL: D,
            TOGGLE_GUILD_FOLDER_EXPAND: b,
            SET_GUILD_FOLDER_EXPANDED: M,
            GUILD_FOLDER_COLLAPSE: P,
        });
    }
    initialize() {
        this.waitFor(f.A, T.Ay, u.A, h.A, c.A, A.A, o.A);
    }
    getGuildsTree() {
        return g;
    }
    getGuildFolders() {
        return G(g, g.version);
    }
    getGuildFolderById(e) {
        return this.getGuildFolders().find((t) => t.folderId === e);
    }
    getFlattenedGuildIds() {
        return w(g, g.version);
    }
    getFlattenedGuildFolderList() {
        return x(g, g.version);
    }
    getCompatibleGuildFolders() {
        return k(g, g.version);
    }
    getFastListGuildFolders() {
        return g.getRoots();
    }
    loadCache = () => {
        let e = this.readSnapshot(F.LATEST_SNAPSHOT_VERSION),
            t = e?.tree;
        if (null != t)
            for (let e of ((g = new d.zF()).loadSnapshot(t), g.allNodes()))
                e.type === d.PJ.FOLDER && (e.expanded = A.A.isFolderExpanded(e.id));
    };
    takeSnapshot() {
        return { version: F.LATEST_SNAPSHOT_VERSION, data: { tree: g.getSnapshot() } };
    }
}
let V = new F();
