(n.d(t, {
    V: () => h,
    Z: () => f
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    s = n(239091),
    o = n(741247),
    c = n(345162),
    d = n(243730),
    u = n(852898),
    m = n(203377),
    g = n(388032),
    p = n(793944);
function h() {
    let [e, t] = i.useState(!0);
    return {
        scrolledToTop: e,
        handleScroll: function (e) {
            t(0 === e.currentTarget.scrollTop);
        }
    };
}
function f(e) {
    let { guild: t, role: h, selectedSection: f, setSelectedSection: x } = e,
        b = i.useCallback(
            (e) => {
                x(e);
            },
            [x]
        ),
        j = (0, l.e7)(
            [d.Z],
            () => {
                var e;
                return null == (e = d.Z.getRoleMemberCount(t.id)) ? void 0 : e[h.id];
            },
            [h.id, t.id]
        ),
        v = (0, c.fI)(h),
        _ = (0, u.Z)(t.id, h);
    i.useEffect(() => {
        v && x(m.ZI.PERMISSIONS);
    }, [v, x]);
    let O = (0, o.e)(t, h);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: p.titleContainer,
                children: [
                    (0, r.jsx)(a.Text, {
                        className: p.titleText,
                        color: 'header-primary',
                        variant: 'text-md/semibold',
                        children: g.intl.format(g.t.BUdGkJ, { roleName: h.name })
                    }),
                    O
                        ? (0, r.jsx)(a.P3F, {
                              className: p.menu,
                              onClick: function (e) {
                                  (0, s.jW)(e, async () => {
                                      let { default: e } = await Promise.resolve().then(n.bind(n, 741247));
                                      return (n) => {
                                          var i, l;
                                          return (0, r.jsx)(
                                              e,
                                              ((i = (function (e) {
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
                                              })({}, n)),
                                              (l = l =
                                                  {
                                                      guild: t,
                                                      role: h
                                                  }),
                                              Object.getOwnPropertyDescriptors
                                                  ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                                  : (function (e, t) {
                                                        var n = Object.keys(e);
                                                        if (Object.getOwnPropertySymbols) {
                                                            var r = Object.getOwnPropertySymbols(e);
                                                            n.push.apply(n, r);
                                                        }
                                                        return n;
                                                    })(Object(l)).forEach(function (e) {
                                                        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                                    }),
                                              i)
                                          );
                                      };
                                  });
                              },
                              'aria-label': g.intl.string(g.t.PdRCRk),
                              children: (0, r.jsx)(a.xhG, {
                                  size: 'md',
                                  color: 'currentColor'
                              })
                          })
                        : null
                ]
            }),
            null != _
                ? (0, r.jsx)(a.Wn, {
                      messageType: a.QYI.WARNING,
                      children: _
                  })
                : null,
            (0, r.jsxs)(a.njP, {
                className: p.tabBar,
                'aria-label': g.intl.string(g.t['+1H47u']),
                selectedItem: f,
                type: 'top',
                look: 'brand',
                onItemSelect: b,
                children: [
                    (0, r.jsx)(a.njP.Item, {
                        className: p.tabBarItem,
                        id: m.ZI.DISPLAY,
                        disabled: v,
                        children: g.intl.string(g.t.hmdom5)
                    }),
                    (0, r.jsx)(a.njP.Item, {
                        className: p.tabBarItem,
                        id: m.ZI.PERMISSIONS,
                        children: g.intl.string(g.t.WIDE1N)
                    }),
                    (0, r.jsx)(a.njP.Item, {
                        className: p.tabBarItem,
                        id: m.ZI.VERIFICATIONS,
                        disabled: v,
                        children: g.intl.string(g.t['5//Mur'])
                    }),
                    (0, r.jsx)(a.njP.Item, {
                        className: p.tabBarItem,
                        id: m.ZI.MEMBERS,
                        disabled: v,
                        children: v ? g.intl.string(g.t['kg//+/']) : g.intl.formatToPlainString(g.t.bHnZWV, { numMembers: String(j) })
                    })
                ]
            })
        ]
    });
}
