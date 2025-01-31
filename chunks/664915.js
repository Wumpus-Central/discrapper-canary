n.d(t, { Z: () => p }), n(47120);
var i,
    r = n(442837),
    a = n(570140),
    s = n(581883);
function o(e, t, n) {
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
function u() {
    let e = s.Z.getGuildFolders();
    if (null == e) return !1;
    let t = !1;
    for (let n of l) e.some((e) => e.folderId === n) || ((l = new Set(l)).delete(n), (t = !0));
    return t;
}
function c(e) {
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
class _ extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        null != e && (l = new Set(e.expandedFolders)), this.waitFor(s.Z);
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
o(_, 'displayName', 'ExpandedGuildFolderStore'), o(_, 'persistKey', 'ExpandedGuildFolderStore');
let p = new _(a.Z, {
    TOGGLE_GUILD_FOLDER_EXPAND: c,
    SET_GUILD_FOLDER_EXPANDED: d,
    USER_SETTINGS_PROTO_UPDATE: u,
    GUILD_FOLDER_COLLAPSE: f
});
