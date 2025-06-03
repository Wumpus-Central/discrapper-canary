n.d(t, {
    Z: () => _,
    p: () => S
}),
    n(539854),
    n(388685),
    n(361932),
    n(187205);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(442837),
    a = n(481060),
    c = n(434650),
    u = n(377171),
    d = n(768943),
    h = n(175006),
    p = n(982183),
    f = n(388032),
    g = n(381231);
function m(e) {
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
            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let O = () => {
        let e = (0, s.e7)([d.Z], () => d.Z.getSavedMessageCount());
        return (0, i.useMemo)(() => {
            let t = [p.V5.ALL, p.V5.MENTIONS];
            return ((0, h.Z)() || e > 0) && t.push(p.V5.BOOKMARKS), t.push(p.V5.ANNOUNCEMENTS), t;
        }, [e]);
    },
    v = {
        [p.V5.ALL]: !1,
        [p.V5.BOOKMARKS]: !1,
        [p.V5.MENTIONS]: !1,
        [p.V5.ANNOUNCEMENTS]: !1
    };
function _(e) {
    let { selectedFilter: t, setSelectedFilter: n } = e,
        l = p.by,
        s = O(),
        [c, u] = (0, i.useState)(v),
        d = s.filter((e) => !c[e]);
    return (0, r.jsxs)('div', {
        className: g.filters,
        children: [
            (0, r.jsx)(a.njP, {
                look: 'grey',
                orientation: 'horizontal',
                onItemSelect: n,
                selectedItem: t,
                className: g.tabBar,
                children: s.flatMap((e) =>
                    (0, r.jsx)(
                        a.njP.Item,
                        {
                            id: e,
                            'aria-label': e,
                            className: o()(g.filterButton, { [g.selected]: t === e }),
                            disableItemStyles: !0,
                            children: (0, r.jsx)(C, {
                                setIsVisible: (t) => {
                                    u((n) => b(m({}, n), { [e]: t }));
                                },
                                children: l[e]
                            })
                        },
                        e
                    )
                )
            }),
            (0, r.jsx)(j, {
                setSelectedFilter: n,
                hiddenFilters: d,
                selectedFilter: t
            })
        ]
    });
}
function C(e) {
    let { children: t, setIsVisible: n } = e,
        i = (0, c.O)(n);
    return (0, r.jsx)('span', {
        ref: i,
        children: t
    });
}
function j(e) {
    let { setSelectedFilter: t, hiddenFilters: n, selectedFilter: l } = e,
        o = (0, i.useRef)(null),
        [s, c] = (0, i.useState)(!1),
        [d, h] = (0, i.useState)(!1),
        f = p.by;
    return 0 === n.length
        ? null
        : (0, r.jsx)(a.yRy, {
              position: 'bottom',
              align: 'left',
              shouldShow: s,
              targetElementRef: o,
              onRequestClose: () => c(!1),
              onRequestOpen: () => c(!0),
              renderPopout: (e) => {
                  var { closePopout: i } = e,
                      o = y(e, ['closePopout']);
                  return (0, r.jsx)(
                      a.v2r,
                      b(
                          m(
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
                                      a.sNh,
                                      {
                                          id: e,
                                          action: () => t((t) => (t === e ? p.V5.ALL : e)),
                                          label: f[e],
                                          dontCloseOnAction: !0,
                                          icon: e === l ? (0, r.jsx)(a.dz2, { size: 'sm' }) : void 0
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
                          innerRef: o,
                          onMouseEnter: () => h(!0),
                          onMouseLeave: () => h(!1),
                          children: (0, r.jsx)(a.xhG, {
                              className: g.moreButtonIcon,
                              size: 'xxs',
                              color: d || s ? u.Z.INTERACTIVE_HOVER : u.Z.INTERACTIVE_NORMAL
                          })
                      })
                  )
          });
}
function S(e) {
    let { selectedFilter: t, setSelectedFilter: n, className: l } = e,
        o = O(),
        s = (0, i.useRef)(null),
        [c, d] = (0, i.useState)(!1),
        [h, g] = (0, i.useState)(!1),
        v = p.by;
    return 0 === o.length
        ? null
        : (0, r.jsx)(a.yRy, {
              position: 'bottom',
              align: 'left',
              shouldShow: c,
              targetElementRef: s,
              onRequestClose: () => d(!1),
              onRequestOpen: () => d(!0),
              autoInvert: !1,
              renderPopout: (e) => {
                  var { closePopout: i } = e,
                      l = y(e, ['closePopout']);
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
                              children: o.map((e) =>
                                  (0, r.jsx)(
                                      a.sNh,
                                      {
                                          id: e,
                                          action: () => n((t) => (t === e ? p.V5.ALL : e)),
                                          label: v[e],
                                          dontCloseOnAction: !0,
                                          icon: e === t ? (0, r.jsx)(a.dz2, { size: 'sm' }) : void 0
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
                      align: 'left',
                      position: 'bottom',
                      forceOpen: h,
                      shouldShow: h && !c,
                      text: f.intl.string(f.t['+B9e19']),
                      children: () =>
                          (0, r.jsx)(
                              a.P3F,
                              b(m({}, e), {
                                  className: l,
                                  innerRef: s,
                                  onClick: (t) => {
                                      e.onClick(t);
                                  },
                                  onMouseEnter: () => {
                                      var t;
                                      g(!0), null == (t = e.onMouseEnter) || t.call(e);
                                  },
                                  onMouseLeave: () => {
                                      g(!1);
                                  },
                                  children: (0, r.jsx)(a.gXV, {
                                      size: 'xs',
                                      color: h || c ? u.Z.INTERACTIVE_HOVER : u.Z.INTERACTIVE_NORMAL
                                  })
                              })
                          )
                  })
          });
}
