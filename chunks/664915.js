var i,
    a = r(47120);
var o = r(442837),
    s = r(570140),
    l = r(581883);
function u(e, n, r) {
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
let c = new Set();
function d() {
    let e = l.Z.getGuildFolders();
    if (null == e) return !1;
    let n = !1;
    for (let r of c) !e.some((e) => e.folderId === r) && ((c = new Set(c)).delete(r), (n = !0));
    return n;
}
function f(e) {
    let { folderId: n } = e;
    (c = new Set(c)).has(n) ? c.delete(n) : c.add(n);
}
function p(e) {
    let { folderId: n, expanded: r } = e;
    (c = new Set(c)), r ? c.add(n) : c.has(n) && c.delete(n);
}
function h() {
    if (0 === c.size) return !1;
    c = new Set();
}
class _ extends (i = o.ZP.PersistedStore) {
    initialize(e) {
        null != e && (c = new Set(e.expandedFolders)), this.waitFor(l.Z);
    }
    getState() {
        return { expandedFolders: Array.from(c) };
    }
    getExpandedFolders() {
        return c;
    }
    isFolderExpanded(e) {
        return c.has(e);
    }
}
u(_, 'displayName', 'ExpandedGuildFolderStore'),
    u(_, 'persistKey', 'ExpandedGuildFolderStore'),
    (n.Z = new _(s.Z, {
        TOGGLE_GUILD_FOLDER_EXPAND: f,
        SET_GUILD_FOLDER_EXPANDED: p,
        USER_SETTINGS_PROTO_UPDATE: d,
        GUILD_FOLDER_COLLAPSE: h
    }));
