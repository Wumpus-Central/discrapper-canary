"use strict";
n.d(t, { A: () => l });
var i = n(17928),
    r = n(228366),
    s = n(617617);
let a = new Set();
class o extends i.Ay.PersistedStore {
    static displayName = "ExpandedGuildFolderStore";
    static persistKey = "ExpandedGuildFolderStore";
    initialize(e) {
        null != e && (a = new Set(e.expandedFolders)), this.waitFor(s.A);
    }
    getState() {
        return { expandedFolders: Array.from(a) };
    }
    getExpandedFolders() {
        return a;
    }
    isFolderExpanded(e) {
        return a.has(e);
    }
}
let l = new o(r.h, {
    TOGGLE_GUILD_FOLDER_EXPAND: function (e) {
        let { folderId: t } = e;
        (a = new Set(a)).has(t) ? a.delete(t) : a.add(t);
    },
    SET_GUILD_FOLDER_EXPANDED: function (e) {
        let { folderId: t, expanded: n } = e;
        (a = new Set(a)), n ? a.add(t) : a.has(t) && a.delete(t);
    },
    USER_SETTINGS_PROTO_UPDATE: function () {
        let e = s.A.getGuildFolders();
        if (null == e) return !1;
        let t = !1;
        for (let n of a) e.some((e) => e.folderId === n) || ((a = new Set(a)).delete(n), (t = !0));
        return t;
    },
    GUILD_FOLDER_COLLAPSE: function () {
        if (0 === a.size) return !1;
        a = new Set();
    },
});
