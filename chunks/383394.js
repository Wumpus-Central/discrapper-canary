"use strict";
n.d(t, { A: () => _ });
var r = n(311907),
    i = n(73153),
    a = n(617617);
let s = new Set();
function o() {
    let e = a.A.getGuildFolders();
    if (null == e) return !1;
    let t = !1;
    for (let n of s) e.some((e) => e.folderId === n) || ((s = new Set(s)).delete(n), (t = !0));
    return t;
}
function l(e) {
    let { folderId: t } = e;
    (s = new Set(s)).has(t) ? s.delete(t) : s.add(t);
}
function u(e) {
    let { folderId: t, expanded: n } = e;
    (s = new Set(s)), n ? s.add(t) : s.has(t) && s.delete(t);
}
function c() {
    if (0 === s.size) return !1;
    s = new Set();
}
class d extends r.Ay.PersistedStore {
    static displayName = "ExpandedGuildFolderStore";
    static persistKey = "ExpandedGuildFolderStore";
    initialize(e) {
        null != e && (s = new Set(e.expandedFolders)), this.waitFor(a.A);
    }
    getState() {
        return { expandedFolders: Array.from(s) };
    }
    getExpandedFolders() {
        return s;
    }
    isFolderExpanded(e) {
        return s.has(e);
    }
}
let _ = new d(i.h, {
    TOGGLE_GUILD_FOLDER_EXPAND: l,
    SET_GUILD_FOLDER_EXPANDED: u,
    USER_SETTINGS_PROTO_UPDATE: o,
    GUILD_FOLDER_COLLAPSE: c,
});
