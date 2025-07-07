(n.d(t, {
    Z: () => j,
    p: () => x
}),
    n(539854),
    n(388685),
    n(361932),
    n(187205));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(434650),
    u = n(377171),
    d = n(551556),
    h = n(768943),
    p = n(175006),
    f = n(538397),
    g = n(982183),
    m = n(388032),
    b = n(381231);
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function O(e, t) {
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
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
let v = () => {
        let e = (0, a.e7)([h.Z], () => h.Z.getSavedMessageCount());
        return (0, i.useMemo)(() => {
            let t = [g.V5.ALL, g.V5.MENTIONS];
            return (((0, p.Z)() || e > 0) && t.push(g.V5.BOOKMARKS), t.push(g.V5.ANNOUNCEMENTS), t);
        }, [e]);
    },
    C = {
        [g.V5.ALL]: !1,
        [g.V5.BOOKMARKS]: !1,
        [g.V5.MENTIONS]: !1,
        [g.V5.ANNOUNCEMENTS]: !1
    };
function j(e) {
    let { selectedFilter: t, setSelectedFilter: n } = e,
        l = g.by,
        a = v(),
        [c, u] = (0, i.useState)(C),
        d = a.filter((e) => !c[e]);
    return (0, r.jsxs)('div', {
        className: b.filters,
        children: [
            (0, r.jsx)(s.njP, {
                look: 'grey',
                orientation: 'horizontal',
                onItemSelect: n,
                selectedItem: t,
                className: b.tabBar,
                children: a.flatMap((e) =>
                    (0, r.jsx)(
                        s.njP.Item,
                        {
                            id: e,
                            'aria-label': e,
                            className: o()(b.filterButton, { [b.selected]: t === e }),
                            disableItemStyles: !0,
                            children: (0, r.jsx)(E, {
                                setIsVisible: (t) => {
                                    u((n) => O(_({}, n), { [e]: t }));
                                },
                                children: l[e]
                            })
                        },
                        e
                    )
                )
            }),
            (0, r.jsx)(S, {
                setSelectedFilter: n,
                hiddenFilters: d,
                selectedFilter: t
            })
        ]
    });
}
function E(e) {
    let { children: t, setIsVisible: n } = e,
        i = (0, c.O)(n);
    return (0, r.jsx)('span', {
        ref: i,
        children: t
    });
}
function S(e) {
    let { setSelectedFilter: t, hiddenFilters: n, selectedFilter: l } = e,
        o = (0, i.useRef)(null),
        [a, c] = (0, i.useState)(!1),
        [d, h] = (0, i.useState)(!1),
        p = g.by;
    return 0 === n.length
        ? null
        : (0, r.jsx)(s.yRy, {
              position: 'bottom',
              align: 'left',
              shouldShow: a,
              targetElementRef: o,
              onRequestClose: () => c(!1),
              onRequestOpen: () => c(!0),
              renderPopout: (e) => {
                  var { closePopout: i } = e,
                      o = y(e, ['closePopout']);
                  return (0, r.jsx)(
                      s.v2r,
                      O(
                          _(
                              {
                                  onSelect: () => {},
                                  navId: 'notifications-sidebar-filters',
                                  'aria-label': 'Notifications Sidebar Filters'
                              },
                              o
                          ),
                          {
                              onClose: () => i(),
                              children: n.map((e) =>
                                  (0, r.jsx)(
                                      s.sNh,
                                      {
                                          id: e,
                                          action: () => {
                                              (t((t) => (t === e ? g.V5.ALL : e)),
                                                  (0, f.RZ)({
                                                      section: e,
                                                      enabled: !0
                                                  }));
                                          },
                                          label: p[e],
                                          dontCloseOnAction: !0,
                                          className: b.filterMenuItem,
                                          icon: e === l ? (0, r.jsx)(I, {}) : void 0
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
                      s.P3F,
                      O(_({}, e), {
                          className: b.filterButton,
                          innerRef: o,
                          onMouseEnter: () => h(!0),
                          onMouseLeave: () => h(!1),
                          children: (0, r.jsx)(s.xhG, {
                              className: b.moreButtonIcon,
                              size: 'xxs',
                              color: d || a ? u.Z.INTERACTIVE_HOVER : u.Z.INTERACTIVE_NORMAL
                          })
                      })
                  )
          });
}
function x(e) {
    let { selectedFilter: t, setSelectedFilter: n, className: l } = e,
        o = v(),
        a = (0, i.useRef)(null),
        [c, d] = (0, i.useState)(!1),
        [h, p] = (0, i.useState)(!1),
        C = g.by;
    return 0 === o.length
        ? null
        : (0, r.jsx)(s.yRy, {
              position: 'bottom',
              align: 'left',
              shouldShow: c,
              targetElementRef: a,
              onRequestClose: () => d(!1),
              onRequestOpen: () => d(!0),
              autoInvert: !1,
              renderPopout: (e) => {
                  var { closePopout: i } = e,
                      l = y(e, ['closePopout']);
                  return (0, r.jsx)(
                      s.v2r,
                      O(
                          _(
                              {
                                  onSelect: () => {},
                                  navId: 'notifications-sidebar-filters',
                                  'aria-label': 'Notifications Sidebar Filters'
                              },
                              l
                          ),
                          {
                              onClose: () => i(),
                              children: o.map((e) =>
                                  (0, r.jsx)(
                                      s.sNh,
                                      {
                                          id: e,
                                          action: () => {
                                              (n((t) => (t === e ? g.V5.ALL : e)),
                                                  (0, f.RZ)({
                                                      section: e,
                                                      enabled: !0
                                                  }));
                                          },
                                          label: C[e],
                                          dontCloseOnAction: !0,
                                          className: b.filterMenuItem,
                                          icon: e === t ? (0, r.jsx)(I, {}) : void 0
                                      },
                                      e
                                  )
                              )
                          }
                      )
                  );
              },
              children: (e) =>
                  (0, r.jsx)(s.ua7, {
                      position: 'bottom',
                      forceOpen: h,
                      shouldShow: h && !c,
                      text: m.intl.string(m.t.UdhTtr),
                      children: () =>
                          (0, r.jsx)(
                              s.P3F,
                              O(_({}, e), {
                                  className: l,
                                  innerRef: a,
                                  onClick: (t) => {
                                      e.onClick(t);
                                  },
                                  onMouseEnter: () => {
                                      var t;
                                      (p(!0), null == (t = e.onMouseEnter) || t.call(e));
                                  },
                                  onMouseLeave: () => {
                                      p(!1);
                                  },
                                  children: (0, r.jsx)(s.gXV, {
                                      size: 'xs',
                                      color: h || c ? u.Z.INTERACTIVE_HOVER : u.Z.INTERACTIVE_NORMAL
                                  })
                              })
                          )
                  })
          });
}
let I = () =>
    (0, r.jsx)(d.Z, {
        width: 20,
        height: 20,
        backgroundColor: ''.concat(u.Z.BG_BRAND, ' !important')
    });
