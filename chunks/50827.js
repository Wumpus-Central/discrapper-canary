"use strict";
n.d(t, { A: () => a });
var s = n(311907),
    i = n(73153);
let r = new Set();
class l extends s.Ay.PersistedStore {
    static displayName = "RecentlyActiveCollapseStore";
    static persistKey = "RecentlyActiveCollapseStore";
    initialize(e) {
        r.clear(), e?.guilds.forEach((e) => r.add(e));
    }
    isCollapsed(e) {
        return r.has(e);
    }
    getState() {
        return { guilds: r };
    }
}
let a = new l(i.h, {
    SET_RECENTLY_ACTIVE_COLLAPSED: function (e) {
        let { guildId: t, collapsed: n } = e;
        n ? r.add(t) : r.delete(t);
    },
});
