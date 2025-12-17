let r;
n.d(t, { ZP: () => H }), n(388685), n(415506), n(539854);
var i = n(348327),
    a = n.n(i),
    o = n(512722),
    s = n.n(o),
    l = n(937111),
    c = n(727258),
    u = n(41776),
    d = n(581883),
    f = n(251625),
    p = n(823379),
    _ = n(664915),
    m = n(486472),
    h = n(271383),
    g = n(430824),
    E = n(750041),
    b = n(9156),
    y = n(594174);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = S(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let I = new c.g8();
function T(e, t) {
    for (let n of g.Z.getGuildIds()) !e(n) || u.Z.isLurking(n) || h.ZP.isCurrentUserGuest(n) || t(n);
}
function C(e) {
    switch (e.type) {
        case c.eD.FOLDER:
            return {
                folderId: e.id,
                folderName: e.name,
                folderColor: e.color,
                expanded: e.expanded,
                guildIds: e.children.map((e) => e.id),
            };
        case c.eD.GUILD:
            return {
                folderId: void 0,
                guildIds: [e.id],
            };
        default:
            throw Error("[SortedGuildStore] Unexpected guilds tree node type.");
    }
}
function A(e, t) {
    let n = I;
    if (((I = new c.g8()), 0 === e.length && t.length > 0)) for (let e of t) I.addNode((0, c.Mg)(e));
    else
        for (let t of e)
            if (0 !== t.guildIds.length)
                if (null == t.folderId) I.addNode((0, c.Mg)(t.guildIds[0]));
                else {
                    let e = (0, c.qQ)(t, void 0, _.Z.isFolderExpanded(t.folderId));
                    for (let n of (I.addNode(e), t.guildIds)) I.addNode((0, c.Mg)(n), e);
                }
    for (let e of I.allNodes())
        e.type === c.eD.GUILD &&
            (u.Z.isLurking(e.id) ||
                h.ZP.isCurrentUserGuest(e.id) ||
                (null == g.Z.getGuild(e.id) && !m.Z.isUnavailable(e.id))) &&
            I.removeNode(e);
    for (let e of Object.values(I.nodes)) e.type === c.eD.FOLDER && 0 === e.children.length && I.removeNode(e);
    T(
        (e) => null == I.nodes[e],
        (e) => I.addNode((0, c.Mg)(e), I.root, !1),
    ),
        (I.version = n.version);
    let r = a()(n, I);
    return r ? (I = n) : (I.version = n.version + 1), !r;
}
function N() {
    var e, t, n;
    return A(
        null != (t = d.Z.getGuildFolders()) ? t : [],
        null != (n = null == (e = d.Z.settings.guildFolders) ? void 0 : e.guildPositions) ? n : [],
    );
}
function P() {
    var e, t;
    let n = d.Z.getGuildFolders();
    return (
        !(null != r && a()(r, n)) &&
        A(
            null != (r = n) ? r : [],
            null != (t = null == (e = d.Z.settings.guildFolders) ? void 0 : e.guildPositions) ? t : [],
        )
    );
}
function R(e) {
    let { sourceId: t, targetId: n, moveToBelow: r, combine: i } = e,
        a = I.getNode(t),
        o = I.getNode(n);
    if (null == a || null == o) return !1;
    if (
        (s()(
            !(i && a.type === c.eD.FOLDER),
            "[SORTED GUILDS] Can't combine a folder ".concat(a.id, " with another guilds list item"),
        ),
        s()(
            !(i && null != o.parentId),
            "[SORTED GUILDS] Can't combine with a guild ".concat(o.id, " that's already inside of a folder"),
        ),
        s()(
            a.type !== c.eD.FOLDER || null == o.parentId,
            "[SORTED GUILDS] Can't move a folder ".concat(a.id, " to inside of another folder ").concat(o.parentId),
        ),
        i)
    ) {
        let e = o.type !== c.eD.FOLDER ? I.convertToFolder(o) : o;
        I.moveInto(a, e, r);
    } else I.moveNextTo(a, o, r);
}
function w(e) {
    let { sourceIds: t, name: n } = e,
        r = t.shift();
    if (null == r) return !1;
    let i = I.getNode(r);
    if (null == i) return !1;
    let a = I.convertToFolder(i);
    (a.name = n),
        t.forEach((e) => {
            let t = I.getNode(e);
            null != t && I.moveInto(t, a, !0);
        });
}
function D(e) {
    var { targetId: t, sourceIds: n } = e,
        r = v(e, ["targetId", "sourceIds"]);
    let i = I.getNode(t);
    if (null == i || i.type !== c.eD.FOLDER) return !1;
    let a = "" === r.name ? void 0 : r.name;
    if (a !== i.name) {
        let e = I.cloneNode(i);
        s()(e.id === i.id, "[SORTED GUILDS] Replacement folder node must have same id."),
            (e.name = a),
            I.replaceNode(i, e);
    }
    let o = I.getNode(t);
    if (null == o) return !1;
    let l = o.children.map((e) => e.id).filter(p.lm),
        u = new Set(l),
        d = new Set(n),
        f = new Set([...l].filter((e) => !d.has(e)));
    n
        .filter((e) => !u.has(e))
        .forEach((e) => {
            let t = I.getNode(e);
            null != t && I.moveInto(t, o, !0);
        }),
        f.forEach((e) => {
            let t = I.getNode(e);
            null != t && I.moveNextTo(t, o, !0);
        });
}
function x(e) {
    let { targetId: t } = e,
        n = I.getNode(t);
    if (null == n || n.type !== c.eD.FOLDER) return !1;
    n.children
        .map((e) => e.id)
        .filter(p.lm)
        .forEach((e) => {
            let t = I.getNode(e);
            null != t && I.moveNextTo(t, n, !0);
        });
}
function L(e) {
    let { guildId: t, joinedAt: n, user: r } = e,
        i = y.default.getCurrentUser(),
        a = g.Z.getGuild(t);
    if ((null == i ? void 0 : i.id) !== r.id || null == a) return !1;
    let o = "string" == typeof n ? new Date(n) : n;
    return o !== a.joinedAt && null != o && N();
}
function j(e) {
    let { folderId: t } = e,
        n = I.getNode(t),
        r = _.Z.isFolderExpanded(t);
    if (null == n || n.type !== c.eD.FOLDER || n.expanded === r) return !1;
    U(n, r);
}
function M(e) {
    let { folderId: t, expanded: n } = e,
        r = I.getNode(t);
    if (null == r || r.type !== c.eD.FOLDER || r.expanded === n) return !1;
    U(r, n);
}
function k() {
    for (let e of I.allNodes()) e.type === c.eD.FOLDER && e.expanded && U(e, !1);
}
function U(e, t) {
    let n = I.cloneNode(e);
    s()(n.id === e.id, "[SORTED GUILDS] setNodeExpanded: Replacement folder node must have same id."),
        (n.expanded = t),
        I.replaceNode(e, n);
}
let G = (0, f.oH)((e, t) => e.sortedGuildNodes().map((e) => e.id)),
    Z = (0, f.oH)((e, t) => e.getRoots().map(C)),
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
    B = (0, f.oH)((e, t) => e.root.children.map(C));
class V extends E.Z {
    initialize() {
        this.waitFor(g.Z, b.ZP, d.Z, m.Z, u.Z, _.Z, l.Z);
    }
    getGuildsTree() {
        return I;
    }
    getGuildFolders() {
        return Z(I, I.version);
    }
    getGuildFolderById(e) {
        return this.getGuildFolders().find((t) => t.folderId === e);
    }
    getFlattenedGuildIds() {
        return G(I, I.version);
    }
    getFlattenedGuildFolderList() {
        return F(I, I.version);
    }
    getCompatibleGuildFolders() {
        return B(I, I.version);
    }
    getFastListGuildFolders() {
        return I.getRoots();
    }
    takeSnapshot() {
        return {
            version: V.LATEST_SNAPSHOT_VERSION,
            data: { tree: I.getSnapshot() },
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
            USER_SETTINGS_PROTO_UPDATE: P,
            GUILD_MOVE_BY_ID: R,
            GUILD_FOLDER_CREATE_LOCAL: w,
            GUILD_FOLDER_EDIT_LOCAL: D,
            GUILD_FOLDER_DELETE_LOCAL: x,
            TOGGLE_GUILD_FOLDER_EXPAND: j,
            SET_GUILD_FOLDER_EXPANDED: M,
            GUILD_FOLDER_COLLAPSE: k,
        }),
            O(this, "loadCache", () => {
                let e = this.readSnapshot(V.LATEST_SNAPSHOT_VERSION),
                    t = null == e ? void 0 : e.tree;
                if (null != t)
                    for (let e of ((I = new c.g8()).loadSnapshot(t), I.allNodes()))
                        e.type === c.eD.FOLDER && (e.expanded = _.Z.isFolderExpanded(e.id));
            });
    }
}
O(V, "displayName", "SortedGuildStore"), O(V, "LATEST_SNAPSHOT_VERSION", 2);
let H = new V();
