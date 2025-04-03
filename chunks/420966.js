n.d(t, {
    V: () => h,
    Z: () => f
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(239091),
    o = n(605436),
    c = n(741247),
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
    let { guild: t, role: h, selectedSection: f, setSelectedSection: b } = e,
        x = i.useCallback(
            (e) => {
                b(e);
            },
            [b]
        ),
        j = (0, s.e7)(
            [d.Z],
            () => {
                var e;
                return null == (e = d.Z.getRoleMemberCount(t.id)) ? void 0 : e[h.id];
            },
            [h.id, t.id]
        ),
        N = (0, o.pM)(t.id, h.id),
        _ = (0, u.Z)(h);
    i.useEffect(() => {
        N && b(m.ZI.PERMISSIONS);
    }, [N, b]);
    let v = (0, c.e)(t, h);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: p.titleContainer,
                children: [
                    (0, r.jsx)(a.Text, {
                        className: p.titleText,
                        color: 'header-primary',
                        variant: 'text-md/semibold',
                        children: g.NW.format(g.t.BUdGkJ, { roleName: h.name })
                    }),
                    v
                        ? (0, r.jsx)(a.P3F, {
                              className: p.menu,
                              onClick: function (e) {
                                  (0, l.jW)(e, async () => {
                                      let { default: e } = await Promise.resolve().then(n.bind(n, 741247));
                                      return (n) => {
                                          var i, s;
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
                                              (s = s =
                                                  {
                                                      guild: t,
                                                      role: h
                                                  }),
                                              Object.getOwnPropertyDescriptors
                                                  ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s))
                                                  : (function (e, t) {
                                                        var n = Object.keys(e);
                                                        if (Object.getOwnPropertySymbols) {
                                                            var r = Object.getOwnPropertySymbols(e);
                                                            n.push.apply(n, r);
                                                        }
                                                        return n;
                                                    })(Object(s)).forEach(function (e) {
                                                        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e));
                                                    }),
                                              i)
                                          );
                                      };
                                  });
                              },
                              'aria-label': g.NW.string(g.t.PdRCRk),
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
                'aria-label': g.NW.string(g.t['+1H47u']),
                selectedItem: f,
                type: 'top',
                look: 'brand',
                onItemSelect: x,
                children: [
                    (0, r.jsx)(a.njP.Item, {
                        className: p.tabBarItem,
                        id: m.ZI.DISPLAY,
                        disabled: N,
                        children: g.NW.string(g.t.hmdom5)
                    }),
                    (0, r.jsx)(a.njP.Item, {
                        className: p.tabBarItem,
                        id: m.ZI.PERMISSIONS,
                        children: g.NW.string(g.t.WIDE1N)
                    }),
                    (0, r.jsx)(a.njP.Item, {
                        className: p.tabBarItem,
                        id: m.ZI.VERIFICATIONS,
                        disabled: N,
                        children: g.NW.string(g.t['5//Mur'])
                    }),
                    (0, r.jsx)(a.njP.Item, {
                        className: p.tabBarItem,
                        id: m.ZI.MEMBERS,
                        disabled: N,
                        children: N ? g.NW.string(g.t['kg//+/']) : g.NW.formatToPlainString(g.t.bHnZWV, { numMembers: String(j) })
                    })
                ]
            })
        ]
    });
}
