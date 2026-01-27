n.d(t, {
    A: () => d,
}),
    n(896048);
var i,
    s = n(311907),
    r = n(73153);

function l(e, t, n) {
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
let o = new Set();
class a extends (i = s.Ay.PersistedStore) {
    initialize(e) {
        o.clear(), null == e || e.guilds.forEach((e) => o.add(e));
    }
    isCollapsed(e) {
        return o.has(e);
    }
    getState() {
        return {
            guilds: o,
        };
    }
}
l(a, "displayName", "RecentlyActiveCollapseStore"), l(a, "persistKey", "RecentlyActiveCollapseStore");
let d = new a(r.h, {
    SET_RECENTLY_ACTIVE_COLLAPSED: function (e) {
        let { guildId: t, collapsed: n } = e;
        n ? o.add(t) : o.delete(t);
    },
});
