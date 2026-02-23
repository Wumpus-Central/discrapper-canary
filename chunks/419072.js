n.d(t, { A: () => I });
var l = n(311907),
    i = n(73153),
    r = n(914853),
    s = n(956753);
let a = new Set(Object.values(r.x)),
    u = {
        [r.x.FRIENDS]: { FAVORITES: !0, FRIEND_REQUESTS: !0, OFFLINE: !0 },
        [r.x.MESSAGES]: { FAVORITES: !0 },
        [r.x.VOICE]: {},
    },
    o = { ...u };
function d(e, t) {
    return !!(e === r.x.FRIENDS && t.startsWith("GROUP:")) || u[e]?.[t] === !0;
}
function c() {
    return (o = { ...u }), !0;
}
class h extends l.Ay.Store {
    static displayName = "FriendsWidgetCollapsibleStore";
    initialize() {
        o = { ...u };
    }
    getCollapsedSectionOverridesForTab(e) {
        return o[e];
    }
    isSectionCollapsedByDefault(e, t) {
        return d(e, t);
    }
}
let g = (e) => (0, s.v$)(e, "FriendsWidgetCollapsibleStore"),
    I = new h(
        i.h,
        __OVERLAY__
            ? {}
            : {
                  OVERLAY_FRIENDS_WIDGET_TOGGLE_SECTION_COLLAPSED: g(function (e) {
                      let t = e.tab;
                      if (!a.has(t)) return !1;
                      let n = (function (e) {
                          if ("string" != typeof e) return null;
                          let t = e.trim();
                          return "" === t ? null : t;
                      })(e.sectionKey);
                      if (null == n) return !1;
                      let l = o[t] ?? {},
                          i = l[n],
                          r = d(t, n),
                          s = { ...l, [n]: !(i ?? r) };
                      return (o = { ...o, [t]: s }), !0;
                  }),
                  FRIENDS_LIST_POPOUT_MOUNTED: g(c),
                  OVERLAY_INITIALIZE: g(c),
                  LOGOUT: g(c),
              },
    );
