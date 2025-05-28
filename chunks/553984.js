n.d(t, { Z: () => b }), n(539854), n(388685), n(361932), n(187205);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(481060),
    s = n(434650),
    a = n(377171),
    c = n(768943),
    u = n(175006),
    d = n(982183),
    h = n(381231);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = () => {
        let e = (0, l.e7)([c.Z], () => c.Z.getSavedMessageCount());
        return (0, i.useMemo)(() => {
            let t = [d.V5.ALL];
            return ((0, u.Z)() || e > 0) && t.push(d.V5.BOOKMARKS), t.push(d.V5.MENTIONS, d.V5.ANNOUNCEMENTS), t;
        }, [e]);
    },
    m = {
        [d.V5.ALL]: !1,
        [d.V5.BOOKMARKS]: !1,
        [d.V5.MENTIONS]: !1,
        [d.V5.ANNOUNCEMENTS]: !1
    };
function b(e) {
    let { selectedFilter: t, setSelectedFilter: n } = e,
        l = d.by,
        s = g(),
        [a, c] = (0, i.useState)(m),
        u = s.filter((e) => !a[e]);
    return (0, r.jsxs)('div', {
        className: h.filters,
        children: [
            (0, r.jsx)(o.njP, {
                look: 'grey',
                orientation: 'horizontal',
                onItemSelect: n,
                selectedItem: t,
                className: h.tabBar,
                children: s.flatMap((e) =>
                    (0, r.jsx)(
                        o.njP.Item,
                        {
                            id: e,
                            'aria-label': e,
                            children: (0, r.jsx)(y, {
                                setIsVisible: (t) => {
                                    c((n) => f(p({}, n), { [e]: t }));
                                },
                                children: l[e]
                            })
                        },
                        e
                    )
                )
            }),
            (0, r.jsx)(O, {
                setSelectedFilter: n,
                hiddenFilters: u,
                selectedFilter: t
            })
        ]
    });
}
function y(e) {
    let { children: t, setIsVisible: n } = e,
        i = (0, s.O)(n);
    return (0, r.jsx)('span', {
        ref: i,
        children: t
    });
}
function O(e) {
    let { setSelectedFilter: t, hiddenFilters: n, selectedFilter: l } = e,
        s = (0, i.useRef)(null),
        [c, u] = (0, i.useState)(!1),
        [g, m] = (0, i.useState)(!1),
        b = d.by;
    return 0 === n.length
        ? null
        : (0, r.jsx)(o.yRy, {
              position: 'bottom',
              align: 'left',
              shouldShow: c,
              targetElementRef: s,
              onRequestClose: () => u(!1),
              onRequestOpen: () => u(!0),
              renderPopout: (e) => {
                  var { closePopout: i } = e,
                      s = (function (e, t) {
                          if (null == e) return {};
                          var n,
                              r,
                              i = (function (e, t) {
                                  if (null == e) return {};
                                  var n,
                                      r,
                                      i = {},
                                      l = Object.keys(e);
                                  for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                  return i;
                              })(e, t);
                          if (Object.getOwnPropertySymbols) {
                              var l = Object.getOwnPropertySymbols(e);
                              for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                          }
                          return i;
                      })(e, ['closePopout']);
                  return (0, r.jsx)(
                      o.v2r,
                      f(
                          p(
                              {
                                  onSelect: () => {},
                                  navId: 'notifications-sidebar-filters',
                                  'aria-label': 'Notifications Sidebar Filters'
                              },
                              s
                          ),
                          {
                              onClose: () => i(),
                              children: n.map((e) =>
                                  (0, r.jsx)(
                                      o.sNh,
                                      {
                                          id: e,
                                          action: () => t(e),
                                          label: b[e],
                                          dontCloseOnAction: !0,
                                          icon: e === l ? (0, r.jsx)(o.dz2, { size: 'sm' }) : void 0
                                      },
                                      e
                                  )
                              )
                          }
                      )
                  );
              },
              children: (e) =>
                  (0, r.jsx)(
                      o.P3F,
                      f(p({}, e), {
                          className: h.moreButton,
                          innerRef: s,
                          onMouseEnter: () => m(!0),
                          onMouseLeave: () => m(!1),
                          children: (0, r.jsx)(o.xhG, {
                              className: h.moreButtonIcon,
                              color: g || c ? a.Z.INTERACTIVE_HOVER : a.Z.INTERACTIVE_NORMAL
                          })
                      })
                  )
          });
}
