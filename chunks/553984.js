(n.d(t, {
    Z: () => C,
    p: () => E
}),
    n(539854),
    n(388685),
    n(361932),
    n(187205));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(434650),
    c = n(377171),
    u = n(804932),
    d = n(725739),
    h = n(370774),
    p = n(982183),
    f = n(388032),
    g = n(381231);
function m(e) {
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
function b(e, t) {
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
function _(e, t) {
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
let O = () => {
        let e = (0, h.ux)();
        return (0, i.useMemo)(() => {
            let t = [p.V5.ALL, p.V5.MENTIONS];
            return (e && t.push(p.V5.BOOKMARKS), t.push(p.V5.ANNOUNCEMENTS), t);
        }, [e]);
    },
    y = {
        [p.V5.ALL]: !1,
        [p.V5.BOOKMARKS]: !1,
        [p.V5.MENTIONS]: !1,
        [p.V5.ANNOUNCEMENTS]: !1
    };
function C() {
    let e = p.by,
        t = O(),
        [n, l] = (0, i.useState)(y),
        s = t.filter((e) => !n[e]),
        { selectedFilter: c, setSelectedFilter: u } = (0, d.Z)();
    return (0, r.jsxs)('div', {
        className: g.filters,
        children: [
            (0, r.jsx)(a.njP, {
                look: 'grey',
                orientation: 'horizontal',
                onItemSelect: u,
                selectedItem: c,
                className: g.tabBar,
                children: t.flatMap((t) =>
                    (0, r.jsx)(
                        a.njP.Item,
                        {
                            id: t,
                            'aria-label': t,
                            className: o()(g.filterButton, { [g.selected]: c === t }),
                            disableItemStyles: !0,
                            children: (0, r.jsx)(v, {
                                setIsVisible: (e) => {
                                    l((n) => b(m({}, n), { [t]: e }));
                                },
                                children: e[t]
                            })
                        },
                        t
                    )
                )
            }),
            (0, r.jsx)(j, { hiddenFilters: s })
        ]
    });
}
function v(e) {
    let { children: t, setIsVisible: n } = e,
        i = (0, s.O)(n);
    return (0, r.jsx)('span', {
        ref: i,
        children: t
    });
}
function j(e) {
    let { hiddenFilters: t } = e,
        n = (0, u.fJ)(),
        l = (0, i.useRef)(null),
        [o, s] = (0, i.useState)(!1),
        [h, f] = (0, i.useState)(!1),
        O = p.by,
        { selectedFilter: y, setSelectedFilter: C } = (0, d.Z)();
    return 0 === t.length
        ? null
        : (0, r.jsx)(a.yRy, {
              position: 'bottom',
              align: 'left',
              shouldShow: o,
              targetElementRef: l,
              onRequestClose: () => s(!1),
              onRequestOpen: () => s(!0),
              renderPopout: (e) => {
                  var { closePopout: i } = e,
                      l = _(e, ['closePopout']);
                  return (0, r.jsx)(
                      a.v2r,
                      b(
                          m(
                              {
                                  onSelect: () => {},
                                  navId: 'notifications-sidebar-filters',
                                  'aria-label': 'Notifications Sidebar Filters'
                              },
                              l
                          ),
                          {
                              onClose: () => i(),
                              children: t.map((e) =>
                                  (0, r.jsx)(
                                      a.sNh,
                                      {
                                          id: e,
                                          action: () => {
                                              (C(y === e ? p.V5.ALL : e),
                                                  (0, u.RZ)({
                                                      section: e,
                                                      enabled: !0,
                                                      viewId: n
                                                  }));
                                          },
                                          label: O[e],
                                          dontCloseOnAction: !0,
                                          className: g.filterMenuItem,
                                          icon: e === y ? (0, r.jsx)(S, {}) : void 0
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
                      a.P3F,
                      b(m({}, e), {
                          className: g.filterButton,
                          innerRef: l,
                          onMouseEnter: () => f(!0),
                          onMouseLeave: () => f(!1),
                          children: (0, r.jsx)(a.xhG, {
                              className: g.moreButtonIcon,
                              size: 'xxs',
                              color: h || o ? c.Z.INTERACTIVE_HOVER : c.Z.INTERACTIVE_NORMAL
                          })
                      })
                  )
          });
}
function E(e) {
    let { className: t } = e,
        n = (0, u.fJ)(),
        l = O(),
        s = (0, i.useRef)(null),
        [h, y] = (0, i.useState)(!1),
        [C, v] = (0, i.useState)(!1),
        j = p.by,
        { selectedFilter: E, setSelectedFilter: x } = (0, d.Z)();
    return 0 === l.length
        ? null
        : (0, r.jsx)(a.yRy, {
              position: 'bottom',
              align: 'left',
              shouldShow: h,
              targetElementRef: s,
              onRequestClose: () => y(!1),
              onRequestOpen: () => y(!0),
              autoInvert: !1,
              renderPopout: (e) => {
                  var { closePopout: t } = e,
                      i = _(e, ['closePopout']);
                  return (0, r.jsx)(
                      a.v2r,
                      b(
                          m(
                              {
                                  onSelect: () => {},
                                  navId: 'notifications-sidebar-filters',
                                  'aria-label': f.intl.string(f.t.UdhTtr)
                              },
                              i
                          ),
                          {
                              onClose: () => t(),
                              children: l.map((e) =>
                                  (0, r.jsx)(
                                      a.sNh,
                                      {
                                          id: e,
                                          action: () => {
                                              (x(E === e ? p.V5.ALL : e),
                                                  (0, u.RZ)({
                                                      section: e,
                                                      enabled: E !== e,
                                                      viewId: n
                                                  }));
                                          },
                                          label: j[e],
                                          dontCloseOnAction: !0,
                                          className: g.filterMenuItem,
                                          icon: e === E ? (0, r.jsx)(S, {}) : void 0
                                      },
                                      e
                                  )
                              )
                          }
                      )
                  );
              },
              children: (e) =>
                  (0, r.jsx)(a.ua7, {
                      position: 'bottom',
                      forceOpen: C,
                      shouldShow: C && !h,
                      text: f.intl.string(f.t.UdhTtr),
                      children: () =>
                          (0, r.jsx)(
                              a.P3F,
                              b(m({}, e), {
                                  className: o()(t, g.headerButton),
                                  innerRef: s,
                                  'aria-label': f.intl.string(f.t.UdhTtr),
                                  onClick: (t) => {
                                      e.onClick(t);
                                  },
                                  onMouseEnter: () => {
                                      var t;
                                      (v(!0), null == (t = e.onMouseEnter) || t.call(e));
                                  },
                                  onMouseLeave: () => {
                                      v(!1);
                                  },
                                  children: (0, r.jsx)(a.gXV, {
                                      size: 'xs',
                                      color: C || h ? c.Z.INTERACTIVE_HOVER : c.Z.INTERACTIVE_NORMAL
                                  })
                              })
                          )
                  })
          });
}
let S = () =>
    (0, r.jsx)(a.owK, {
        size: 'refresh_sm',
        color: ''.concat(c.Z.BG_BRAND, ' !important'),
        secondaryColor: c.Z.WHITE
    });
