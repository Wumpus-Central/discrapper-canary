(n.d(t, {
    Z: () => j,
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
    p = n(804932),
    f = n(725739),
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
        let e = (0, a.e7)([d.Z], () => d.Z.getSavedMessageCount());
        return (0, i.useMemo)(() => {
            let t = [g.V5.ALL, g.V5.MENTIONS];
            return (((0, h.Z)() || e > 0) && t.push(g.V5.BOOKMARKS), t.push(g.V5.ANNOUNCEMENTS), t);
        }, [e]);
    },
    C = {
        [g.V5.ALL]: !1,
        [g.V5.BOOKMARKS]: !1,
        [g.V5.MENTIONS]: !1,
        [g.V5.ANNOUNCEMENTS]: !1
    };
function j() {
    let e = g.by,
        t = v(),
        [n, l] = (0, i.useState)(C),
        a = t.filter((e) => !n[e]),
        { selectedFilter: c, setSelectedFilter: u } = (0, f.Z)();
    return (0, r.jsxs)('div', {
        className: b.filters,
        children: [
            (0, r.jsx)(s.njP, {
                look: 'grey',
                orientation: 'horizontal',
                onItemSelect: u,
                selectedItem: c,
                className: b.tabBar,
                children: t.flatMap((t) =>
                    (0, r.jsx)(
                        s.njP.Item,
                        {
                            id: t,
                            'aria-label': t,
                            className: o()(b.filterButton, { [b.selected]: c === t }),
                            disableItemStyles: !0,
                            children: (0, r.jsx)(E, {
                                setIsVisible: (e) => {
                                    l((n) => O(_({}, n), { [t]: e }));
                                },
                                children: e[t]
                            })
                        },
                        t
                    )
                )
            }),
            (0, r.jsx)(x, { hiddenFilters: a })
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
function x(e) {
    let { hiddenFilters: t } = e,
        n = (0, i.useRef)(null),
        [l, o] = (0, i.useState)(!1),
        [a, c] = (0, i.useState)(!1),
        d = g.by,
        { selectedFilter: h, setSelectedFilter: m } = (0, f.Z)();
    return 0 === t.length
        ? null
        : (0, r.jsx)(s.yRy, {
              position: 'bottom',
              align: 'left',
              shouldShow: l,
              targetElementRef: n,
              onRequestClose: () => o(!1),
              onRequestOpen: () => o(!0),
              renderPopout: (e) => {
                  var { closePopout: n } = e,
                      i = y(e, ['closePopout']);
                  return (0, r.jsx)(
                      s.v2r,
                      O(
                          _(
                              {
                                  onSelect: () => {},
                                  navId: 'notifications-sidebar-filters',
                                  'aria-label': 'Notifications Sidebar Filters'
                              },
                              i
                          ),
                          {
                              onClose: () => n(),
                              children: t.map((e) =>
                                  (0, r.jsx)(
                                      s.sNh,
                                      {
                                          id: e,
                                          action: () => {
                                              (m(h === e ? g.V5.ALL : e),
                                                  (0, p.RZ)({
                                                      section: e,
                                                      enabled: !0
                                                  }));
                                          },
                                          label: d[e],
                                          dontCloseOnAction: !0,
                                          className: b.filterMenuItem,
                                          icon: e === h ? (0, r.jsx)(I, {}) : void 0
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
                          innerRef: n,
                          onMouseEnter: () => c(!0),
                          onMouseLeave: () => c(!1),
                          children: (0, r.jsx)(s.xhG, {
                              className: b.moreButtonIcon,
                              size: 'xxs',
                              color: a || l ? u.Z.INTERACTIVE_HOVER : u.Z.INTERACTIVE_NORMAL
                          })
                      })
                  )
          });
}
function S(e) {
    let { className: t } = e,
        n = v(),
        l = (0, i.useRef)(null),
        [a, c] = (0, i.useState)(!1),
        [d, h] = (0, i.useState)(!1),
        C = g.by,
        { selectedFilter: j, setSelectedFilter: E } = (0, f.Z)();
    return 0 === n.length
        ? null
        : (0, r.jsx)(s.yRy, {
              position: 'bottom',
              align: 'left',
              shouldShow: a,
              targetElementRef: l,
              onRequestClose: () => c(!1),
              onRequestOpen: () => c(!0),
              autoInvert: !1,
              renderPopout: (e) => {
                  var { closePopout: t } = e,
                      i = y(e, ['closePopout']);
                  return (0, r.jsx)(
                      s.v2r,
                      O(
                          _(
                              {
                                  onSelect: () => {},
                                  navId: 'notifications-sidebar-filters',
                                  'aria-label': 'Notifications Sidebar Filters'
                              },
                              i
                          ),
                          {
                              onClose: () => t(),
                              children: n.map((e) =>
                                  (0, r.jsx)(
                                      s.sNh,
                                      {
                                          id: e,
                                          action: () => {
                                              (E(j === e ? g.V5.ALL : e),
                                                  (0, p.RZ)({
                                                      section: e,
                                                      enabled: !0
                                                  }));
                                          },
                                          label: C[e],
                                          dontCloseOnAction: !0,
                                          className: b.filterMenuItem,
                                          icon: e === j ? (0, r.jsx)(I, {}) : void 0
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
                      forceOpen: d,
                      shouldShow: d && !a,
                      text: m.intl.string(m.t.UdhTtr),
                      children: () =>
                          (0, r.jsx)(
                              s.P3F,
                              O(_({}, e), {
                                  className: o()(t, b.headerButton),
                                  innerRef: l,
                                  onClick: (t) => {
                                      e.onClick(t);
                                  },
                                  onMouseEnter: () => {
                                      var t;
                                      (h(!0), null == (t = e.onMouseEnter) || t.call(e));
                                  },
                                  onMouseLeave: () => {
                                      h(!1);
                                  },
                                  children: (0, r.jsx)(s.gXV, {
                                      size: 'xs',
                                      color: d || a ? u.Z.INTERACTIVE_HOVER : u.Z.INTERACTIVE_NORMAL
                                  })
                              })
                          )
                  })
          });
}
let I = () =>
    (0, r.jsx)(s.owK, {
        size: 'refresh_sm',
        color: ''.concat(u.Z.BG_BRAND, ' !important'),
        secondaryColor: u.Z.WHITE
    });
