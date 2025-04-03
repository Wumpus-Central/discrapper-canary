let r;
n.d(t, { ZP: () => H }), n(411104), n(47120), n(653041);
var i = n(348327),
    o = n.n(i),
    a = n(512722),
    s = n.n(a),
    l = n(937111),
    c = n(727258),
    u = n(41776),
    d = n(581883),
    f = n(251625),
    _ = n(823379),
    p = n(664915),
    h = n(486472),
    m = n(271383),
    g = n(430824),
    E = n(412788),
    b = n(9156),
    y = n(594174);
function v(e, t, n) {
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
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = I(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let S = new c.g8();
function T(e, t) {
    for (let n in g.Z.getGuilds()) !e(n) || u.Z.isLurking(n) || m.ZP.isCurrentUserGuest(n) || t(n);
}
function N(e) {
    switch (e.type) {
        case c.eD.FOLDER:
            return {
                folderId: e.id,
                folderName: e.name,
                folderColor: e.color,
                expanded: e.expanded,
                guildIds: e.children.map((e) => e.id)
            };
        case c.eD.GUILD:
            return {
                folderId: void 0,
                guildIds: [e.id]
            };
        default:
            throw Error('[SortedGuildStore] Unexpected guilds tree node type.');
    }
}
function A(e, t) {
    let n = S;
    if (((S = new c.g8()), 0 === e.length && t.length > 0)) for (let e of t) S.addNode((0, c.Mg)(e));
    else
        for (let t of e)
            if (0 !== t.guildIds.length)
                if (null == t.folderId) S.addNode((0, c.Mg)(t.guildIds[0]));
                else {
                    let e = (0, c.qQ)(t, void 0, p.Z.isFolderExpanded(t.folderId));
                    for (let n of (S.addNode(e), t.guildIds)) S.addNode((0, c.Mg)(n), e);
                }
    for (let e of S.allNodes()) e.type === c.eD.GUILD && (u.Z.isLurking(e.id) || m.ZP.isCurrentUserGuest(e.id) || (null == g.Z.getGuild(e.id) && !h.Z.isUnavailable(e.id))) && S.removeNode(e);
    for (let e of Object.values(S.nodes)) e.type === c.eD.FOLDER && 0 === e.children.length && S.removeNode(e);
    T(
        (e) => null == S.nodes[e],
        (e) => S.addNode((0, c.Mg)(e), S.root, !1)
    ),
        (S.version = n.version);
    let r = o()(n, S);
    return r ? (S = n) : (S.version = n.version + 1), !r;
}
function C() {
    var e, t, n;
    return A(null != (t = d.Z.getGuildFolders()) ? t : [], null != (n = null == (e = d.Z.settings.guildFolders) ? void 0 : e.guildPositions) ? n : []);
}
function R() {
    var e, t;
    let n = d.Z.getGuildFolders();
    return !(null != r && o()(r, n)) && A(null != (r = n) ? r : [], null != (t = null == (e = d.Z.settings.guildFolders) ? void 0 : e.guildPositions) ? t : []);
}
function P(e) {
    let { sourceId: t, targetId: n, moveToBelow: r, combine: i } = e,
        o = S.getNode(t),
        a = S.getNode(n);
    if (null == o || null == a) return !1;
    if ((s()(!(i && o.type === c.eD.FOLDER), "[SORTED GUILDS] Can't combine a folder ".concat(o.id, ' with another guilds list item')), s()(!(i && null != a.parentId), "[SORTED GUILDS] Can't combine with a guild ".concat(a.id, " that's already inside of a folder")), s()(o.type !== c.eD.FOLDER || null == a.parentId, "[SORTED GUILDS] Can't move a folder ".concat(o.id, ' to inside of another folder ').concat(a.parentId)), i)) {
        let e = a.type !== c.eD.FOLDER ? S.convertToFolder(a) : a;
        S.moveInto(o, e, r);
    } else S.moveNextTo(o, a, r);
}
function w(e) {
    let { sourceIds: t, name: n } = e,
        r = t.shift();
    if (null == r) return !1;
    let i = S.getNode(r);
    if (null == i) return !1;
    let o = S.convertToFolder(i);
    (o.name = n),
        t.forEach((e) => {
            let t = S.getNode(e);
            null != t && S.moveInto(t, o, !0);
        });
}
function D(e) {
    var { targetId: t, sourceIds: n } = e,
        r = O(e, ['targetId', 'sourceIds']);
    let i = S.getNode(t);
    if (null == i || i.type !== c.eD.FOLDER) return !1;
    let o = '' === r.name ? void 0 : r.name;
    if (o !== i.name) {
        let e = S.cloneNode(i);
        s()(e.id === i.id, '[SORTED GUILDS] Replacement folder node must have same id.'), (e.name = o), S.replaceNode(i, e);
    }
    let a = S.getNode(t);
    if (null == a) return !1;
    let l = a.children.map((e) => e.id).filter(_.lm),
        u = new Set(l),
        d = new Set(n),
        f = new Set([...l].filter((e) => !d.has(e)));
    n
        .filter((e) => !u.has(e))
        .forEach((e) => {
            let t = S.getNode(e);
            null != t && S.moveInto(t, a, !0);
        }),
        f.forEach((e) => {
            let t = S.getNode(e);
            null != t && S.moveNextTo(t, a, !0);
        });
}
function L(e) {
    let { targetId: t } = e,
        n = S.getNode(t);
    if (null == n || n.type !== c.eD.FOLDER) return !1;
    n.children
        .map((e) => e.id)
        .filter(_.lm)
        .forEach((e) => {
            let t = S.getNode(e);
            null != t && S.moveNextTo(t, n, !0);
        });
}
function x(e) {
    let { guildId: t, joinedAt: n, user: r } = e,
        i = y.default.getCurrentUser(),
        o = g.Z.getGuild(t);
    if ((null == i ? void 0 : i.id) !== r.id || null == o) return !1;
    let a = 'string' == typeof n ? new Date(n) : n;
    return a !== o.joinedAt && null != a && C();
}
function M(e) {
    let { folderId: t } = e,
        n = S.getNode(t),
        r = p.Z.isFolderExpanded(t);
    if (null == n || n.type !== c.eD.FOLDER || n.expanded === r) return !1;
    U(n, r);
}
function k(e) {
    let { folderId: t, expanded: n } = e,
        r = S.getNode(t);
    if (null == r || r.type !== c.eD.FOLDER || r.expanded === n) return !1;
    U(r, n);
}
function j() {
    for (let e of S.allNodes()) e.type === c.eD.FOLDER && e.expanded && U(e, !1);
}
function U(e, t) {
    let n = S.cloneNode(e);
    s()(n.id === e.id, '[SORTED GUILDS] setNodeExpanded: Replacement folder node must have same id.'), (n.expanded = t), S.replaceNode(e, n);
}
let G = (0, f.oH)((e, t) => e.sortedGuildNodes().map((e) => e.id)),
    B = (0, f.oH)((e, t) => e.getRoots().map(N)),
    F = (0, f.oH)((e, t) => {
        let n = [];
        function r(e) {
            switch (e.type) {
                case c.eD.FOLDER:
                case c.eD.GUILD:
                    n.push(e);
            }
            for (let t of e.children) r(t);
        }
        return r(e.root), n;
    }),
    V = (0, f.oH)((e, t) => e.root.children.map(N));
class Z extends E.Z {
    initialize() {
        this.waitFor(g.Z, b.ZP, d.Z, h.Z, u.Z, p.Z, l.Z);
    }
    getGuildsTree() {
        return S;
    }
    getGuildFolders() {
        return B(S, S.version);
    }
    getGuildFolderById(e) {
        return this.getGuildFolders().find((t) => t.folderId === e);
    }
    getFlattenedGuildIds() {
        return G(S, S.version);
    }
    getFlattenedGuildFolderList() {
        return F(S, S.version);
    }
    getCompatibleGuildFolders() {
        return V(S, S.version);
    }
    getFastListGuildFolders() {
        return S.getRoots();
    }
    takeSnapshot() {
        return {
            version: Z.LATEST_SNAPSHOT_VERSION,
            data: { tree: S.getSnapshot() }
        };
    }
    constructor() {
        super({
            CONNECTION_OPEN: C,
            OVERLAY_INITIALIZE: C,
            CACHE_LOADED: () => this.loadCache(),
            GUILD_CREATE: C,
            GUILD_DELETE: C,
            GUILD_MEMBER_ADD: x,
            USER_SETTINGS_PROTO_UPDATE: R,
            GUILD_MOVE_BY_ID: P,
            GUILD_FOLDER_CREATE_LOCAL: w,
            GUILD_FOLDER_EDIT_LOCAL: D,
            GUILD_FOLDER_DELETE_LOCAL: L,
            TOGGLE_GUILD_FOLDER_EXPAND: M,
            SET_GUILD_FOLDER_EXPANDED: k,
            GUILD_FOLDER_COLLAPSE: j
        }),
            v(this, 'loadCache', () => {
                let e = this.readSnapshot(Z.LATEST_SNAPSHOT_VERSION),
                    t = null == e ? void 0 : e.tree;
                if (null != t) for (let e of ((S = new c.g8()).loadSnapshot(t), S.allNodes())) e.type === c.eD.FOLDER && (e.expanded = p.Z.isFolderExpanded(e.id));
            });
    }
}
v(Z, 'displayName', 'SortedGuildStore'), v(Z, 'LATEST_SNAPSHOT_VERSION', 2);
let H = new Z();
