n.d(t, { Z: () => p }), n(47120);
var r,
    i = n(442837),
    o = n(570140),
    a = n(581883);
function s(e, t, n) {
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
let l = new Set();
function c() {
    let e = a.Z.getGuildFolders();
    if (null == e) return !1;
    let t = !1;
    for (let n of l) e.some((e) => e.folderId === n) || ((l = new Set(l)).delete(n), (t = !0));
    return t;
}
function u(e) {
    let { folderId: t } = e;
    (l = new Set(l)).has(t) ? l.delete(t) : l.add(t);
}
function d(e) {
    let { folderId: t, expanded: n } = e;
    (l = new Set(l)), n ? l.add(t) : l.has(t) && l.delete(t);
}
function f() {
    if (0 === l.size) return !1;
    l = new Set();
}
class _ extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        null != e && (l = new Set(e.expandedFolders)), this.waitFor(a.Z);
    }
    getState() {
        return { expandedFolders: Array.from(l) };
    }
    getExpandedFolders() {
        return l;
    }
    isFolderExpanded(e) {
        return l.has(e);
    }
}
s(_, 'displayName', 'ExpandedGuildFolderStore'), s(_, 'persistKey', 'ExpandedGuildFolderStore');
let p = new _(o.Z, {
    TOGGLE_GUILD_FOLDER_EXPAND: u,
    SET_GUILD_FOLDER_EXPANDED: d,
    USER_SETTINGS_PROTO_UPDATE: c,
    GUILD_FOLDER_COLLAPSE: f
});
