n.d(t, { A: () => r });
var l = n(17928),
    i = n(228366);
let s = new Set();
class a extends l.Ay.PersistedStore {
    static displayName = "RecentlyActiveCollapseStore";
    static persistKey = "RecentlyActiveCollapseStore";
    initialize(e) {
        s.clear(), e?.guilds.forEach((e) => s.add(e));
    }
    isCollapsed(e) {
        return s.has(e);
    }
    getState() {
        return { guilds: s };
    }
}
let r = new a(i.h, {
    SET_RECENTLY_ACTIVE_COLLAPSED: function (e) {
        let { guildId: t, collapsed: n } = e;
        n ? s.add(t) : s.delete(t);
    },
});
