n.d(t, { A: () => s });
var r = n(17928),
    i = n(228366),
    a = n(617617);
let l = new Set();
class o extends r.Ay.PersistedStore {
    static displayName = "ExpandedGuildFolderStore";
    static persistKey = "ExpandedGuildFolderStore";
    initialize(e) {
        null != e && (l = new Set(e.expandedFolders)), this.waitFor(a.A);
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
let s = new o(i.h, {
    TOGGLE_GUILD_FOLDER_EXPAND: function (e) {
        let { folderId: t } = e;
        (l = new Set(l)).has(t) ? l.delete(t) : l.add(t);
    },
    SET_GUILD_FOLDER_EXPANDED: function (e) {
        let { folderId: t, expanded: n } = e;
        (l = new Set(l)), n ? l.add(t) : l.has(t) && l.delete(t);
    },
    USER_SETTINGS_PROTO_UPDATE: function () {
        let e = a.A.getGuildFolders();
        if (null == e) return !1;
        let t = !1;
        for (let n of l) e.some((e) => e.folderId === n) || ((l = new Set(l)).delete(n), (t = !0));
        return t;
    },
    GUILD_FOLDER_COLLAPSE: function () {
        if (0 === l.size) return !1;
        l = new Set();
    },
});
