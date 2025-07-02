(n.d(t, {
    Z: () => C,
    p: () => S
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
    d = n(768943),
    h = n(175006),
    p = n(538397),
    f = n(982183),
    g = n(388032),
    m = n(381231);
function b(e) {
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
function _(e, t) {
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
function O(e, t) {
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
let y = () => {
        let e = (0, a.e7)([d.Z], () => d.Z.getSavedMessageCount());
        return (0, i.useMemo)(() => {
            let t = [f.V5.ALL, f.V5.MENTIONS];
            return (((0, h.Z)() || e > 0) && t.push(f.V5.BOOKMARKS), t.push(f.V5.ANNOUNCEMENTS), t);
        }, [e]);
    },
    v = {
        [f.V5.ALL]: !1,
        [f.V5.BOOKMARKS]: !1,
        [f.V5.MENTIONS]: !1,
        [f.V5.ANNOUNCEMENTS]: !1
    };
function C(e) {
    let { selectedFilter: t, setSelectedFilter: n } = e,
        l = f.by,
        a = y(),
        [c, u] = (0, i.useState)(v),
        d = a.filter((e) => !c[e]);
    return (0, r.jsxs)('div', {
        className: m.filters,
        children: [
            (0, r.jsx)(s.njP, {
                look: 'grey',
                orientation: 'horizontal',
                onItemSelect: n,
                selectedItem: t,
                className: m.tabBar,
                children: a.flatMap((e) =>
                    (0, r.jsx)(
                        s.njP.Item,
                        {
                            id: e,
                            'aria-label': e,
                            className: o()(m.filterButton, { [m.selected]: t === e }),
                            disableItemStyles: !0,
                            children: (0, r.jsx)(j, {
                                setIsVisible: (t) => {
                                    u((n) => _(b({}, n), { [e]: t }));
                                },
                                children: l[e]
                            })
                        },
                        e
                    )
                )
            }),
            (0, r.jsx)(E, {
                setSelectedFilter: n,
                hiddenFilters: d,
                selectedFilter: t
            })
        ]
    });
}
function j(e) {
    let { children: t, setIsVisible: n } = e,
        i = (0, c.O)(n);
    return (0, r.jsx)('span', {
        ref: i,
        children: t
    });
}
function E(e) {
    let { setSelectedFilter: t, hiddenFilters: n, selectedFilter: l } = e,
        o = (0, i.useRef)(null),
        [a, c] = (0, i.useState)(!1),
        [d, h] = (0, i.useState)(!1),
        g = f.by;
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
                      o = O(e, ['closePopout']);
                  return (0, r.jsx)(
                      s.v2r,
                      _(
                          b(
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
                                              (t((t) => (t === e ? f.V5.ALL : e)),
                                                  (0, p.RZ)({
                                                      section: e,
                                                      enabled: !0
                                                  }));
                                          },
                                          label: g[e],
                                          dontCloseOnAction: !0,
                                          icon: e === l ? (0, r.jsx)(s.dz2, { size: 'sm' }) : void 0
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
                      _(b({}, e), {
                          className: m.filterButton,
                          innerRef: o,
                          onMouseEnter: () => h(!0),
                          onMouseLeave: () => h(!1),
                          children: (0, r.jsx)(s.xhG, {
                              className: m.moreButtonIcon,
                              size: 'xxs',
                              color: d || a ? u.Z.INTERACTIVE_HOVER : u.Z.INTERACTIVE_NORMAL
                          })
                      })
                  )
          });
}
function S(e) {
    let { selectedFilter: t, setSelectedFilter: n, className: l } = e,
        o = y(),
        a = (0, i.useRef)(null),
        [c, d] = (0, i.useState)(!1),
        [h, m] = (0, i.useState)(!1),
        v = f.by;
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
                      l = O(e, ['closePopout']);
                  return (0, r.jsx)(
                      s.v2r,
                      _(
                          b(
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
                                              (n((t) => (t === e ? f.V5.ALL : e)),
                                                  (0, p.RZ)({
                                                      section: e,
                                                      enabled: !0
                                                  }));
                                          },
                                          label: v[e],
                                          dontCloseOnAction: !0,
                                          icon: e === t ? (0, r.jsx)(s.dz2, { size: 'sm' }) : void 0
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
                      text: g.intl.string(g.t.UdhTtr),
                      children: () =>
                          (0, r.jsx)(
                              s.P3F,
                              _(b({}, e), {
                                  className: l,
                                  innerRef: a,
                                  onClick: (t) => {
                                      e.onClick(t);
                                  },
                                  onMouseEnter: () => {
                                      var t;
                                      (m(!0), null == (t = e.onMouseEnter) || t.call(e));
                                  },
                                  onMouseLeave: () => {
                                      m(!1);
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
