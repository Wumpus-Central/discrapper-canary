n.d(t, { A: () => a });
var i = n(311907),
    s = n(73153);
let l = new Set();
class r extends i.Ay.PersistedStore {
    static displayName = "RecentlyActiveCollapseStore";
    static persistKey = "RecentlyActiveCollapseStore";
    initialize(e) {
        l.clear(), e?.guilds.forEach((e) => l.add(e));
    }
    isCollapsed(e) {
        return l.has(e);
    }
    getState() {
        return { guilds: l };
    }
}
let a = new r(s.h, {
    SET_RECENTLY_ACTIVE_COLLAPSED: function (e) {
        let { guildId: t, collapsed: n } = e;
        n ? l.add(t) : l.delete(t);
    },
});
