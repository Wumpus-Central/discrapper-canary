n.d(t, {
    V: () => f,
    Z: () => h
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(239091),
    o = n(605436),
    c = n(741247),
    u = n(243730),
    d = n(852898),
    m = n(203377),
    g = n(388032),
    p = n(793944);
function f() {
    let [e, t] = i.useState(!0);
    return {
        scrolledToTop: e,
        handleScroll: function (e) {
            t(0 === e.currentTarget.scrollTop);
        }
    };
}
function h(e) {
    let { guild: t, role: f, selectedSection: h, setSelectedSection: x } = e,
        b = i.useCallback(
            (e) => {
                x(e);
            },
            [x]
        ),
        j = (0, l.e7)(
            [u.Z],
            () => {
                var e;
                return null == (e = u.Z.getRoleMemberCount(t.id)) ? void 0 : e[f.id];
            },
            [f.id, t.id]
        ),
        _ = (0, o.pM)(t.id, f.id),
        v = (0, d.Z)(f);
    i.useEffect(() => {
        _ && x(m.ZI.PERMISSIONS);
    }, [_, x]);
    let O = (0, c.e)(t, f);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: p.titleContainer,
                children: [
                    (0, r.jsx)(s.Text, {
                        className: p.titleText,
                        color: 'header-primary',
                        variant: 'text-md/semibold',
                        children: g.intl.format(g.t.BUdGkJ, { roleName: f.name })
                    }),
                    O
                        ? (0, r.jsx)(s.P3F, {
                              className: p.menu,
                              onClick: function (e) {
                                  (0, a.jW)(e, async () => {
                                      let { default: e } = await Promise.resolve().then(n.bind(n, 741247));
                                      return (n) => {
                                          var i, l;
                                          return (0, r.jsx)(
                                              e,
                                              ((i = (function (e) {
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
                                              })({}, n)),
                                              (l = l =
                                                  {
                                                      guild: t,
                                                      role: f
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
                              children: (0, r.jsx)(s.xhG, {
                                  size: 'md',
                                  color: 'currentColor'
                              })
                          })
                        : null
                ]
            }),
            null != v
                ? (0, r.jsx)(s.Wn, {
                      messageType: s.QYI.WARNING,
                      children: v
                  })
                : null,
            (0, r.jsxs)(s.njP, {
                className: p.tabBar,
                'aria-label': g.intl.string(g.t['+1H47u']),
                selectedItem: h,
                type: 'top',
                look: 'brand',
                onItemSelect: b,
                children: [
                    (0, r.jsx)(s.njP.Item, {
                        className: p.tabBarItem,
                        id: m.ZI.DISPLAY,
                        disabled: _,
                        children: g.intl.string(g.t.hmdom5)
                    }),
                    (0, r.jsx)(s.njP.Item, {
                        className: p.tabBarItem,
                        id: m.ZI.PERMISSIONS,
                        children: g.intl.string(g.t.WIDE1N)
                    }),
                    (0, r.jsx)(s.njP.Item, {
                        className: p.tabBarItem,
                        id: m.ZI.VERIFICATIONS,
                        disabled: _,
                        children: g.intl.string(g.t['5//Mur'])
                    }),
                    (0, r.jsx)(s.njP.Item, {
                        className: p.tabBarItem,
                        id: m.ZI.MEMBERS,
                        disabled: _,
                        children: _ ? g.intl.string(g.t['kg//+/']) : g.intl.formatToPlainString(g.t.bHnZWV, { numMembers: String(j) })
                    })
                ]
            })
        ]
    });
}
