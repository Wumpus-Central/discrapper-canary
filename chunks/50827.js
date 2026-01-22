n.d(t, { A: () => u }), n(896048);
var r,
    i = n(311907),
    a = n(73153);
function s(e, t, n) {
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
function l(e) {
    let { guildId: t, collapsed: n } = e;
    n ? o.add(t) : o.delete(t);
}
class c extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        o.clear(), null == e || e.guilds.forEach((e) => o.add(e));
    }
    isCollapsed(e) {
        return o.has(e);
    }
    getState() {
        return { guilds: o };
    }
}
s(c, "displayName", "RecentlyActiveCollapseStore"), s(c, "persistKey", "RecentlyActiveCollapseStore");
let u = new c(a.h, { SET_RECENTLY_ACTIVE_COLLAPSED: l });
