n.d(t, {
    V: () => x,
    Z: () => p
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(239091),
    o = n(605436),
    c = n(741247),
    d = n(243730),
    u = n(852898),
    m = n(203377),
    h = n(388032),
    g = n(132902);
function x() {
    let [e, t] = r.useState(!0);
    return {
        scrolledToTop: e,
        handleScroll: function (e) {
            t(0 === e.currentTarget.scrollTop);
        }
    };
}
function p(e) {
    let { guild: t, role: x, selectedSection: p, setSelectedSection: _ } = e,
        C = r.useCallback(
            (e) => {
                _(e);
            },
            [_]
        ),
        f = (0, l.e7)(
            [d.Z],
            () => {
                var e;
                return null === (e = d.Z.getRoleMemberCount(t.id)) || void 0 === e ? void 0 : e[x.id];
            },
            [x.id, t.id]
        ),
        v = (0, o.pM)(t.id, x.id),
        N = (0, u.Z)(x);
    r.useEffect(() => {
        v && _(m.ZI.PERMISSIONS);
    }, [v, _]);
    let j = (0, c.e)(t, x);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: g.titleContainer,
                children: [
                    (0, i.jsx)(s.Text, {
                        className: g.titleText,
                        color: 'header-primary',
                        variant: 'text-md/semibold',
                        children: h.intl.format(h.t.BUdGkJ, { roleName: x.name })
                    }),
                    j
                        ? (0, i.jsx)(s.P3F, {
                              className: g.menu,
                              onClick: function (e) {
                                  (0, a.jW)(e, async () => {
                                      let { default: e } = await Promise.resolve().then(n.bind(n, 741247));
                                      return (n) =>
                                          (0, i.jsx)(e, {
                                              ...n,
                                              guild: t,
                                              role: x
                                          });
                                  });
                              },
                              'aria-label': h.intl.string(h.t.PdRCRk),
                              children: (0, i.jsx)(s.xhG, {
                                  size: 'md',
                                  color: 'currentColor'
                              })
                          })
                        : null
                ]
            }),
            null != N
                ? (0, i.jsx)(s.Wn, {
                      messageType: s.QYI.WARNING,
                      children: N
                  })
                : null,
            (0, i.jsxs)(s.njP, {
                className: g.tabBar,
                'aria-label': h.intl.string(h.t['+1H47u']),
                selectedItem: p,
                type: 'top',
                look: 'brand',
                onItemSelect: C,
                children: [
                    (0, i.jsx)(s.njP.Item, {
                        className: g.tabBarItem,
                        id: m.ZI.DISPLAY,
                        disabled: v,
                        children: h.intl.string(h.t.hmdom5)
                    }),
                    (0, i.jsx)(s.njP.Item, {
                        className: g.tabBarItem,
                        id: m.ZI.PERMISSIONS,
                        children: h.intl.string(h.t.WIDE1N)
                    }),
                    (0, i.jsx)(s.njP.Item, {
                        className: g.tabBarItem,
                        id: m.ZI.VERIFICATIONS,
                        disabled: v,
                        children: h.intl.string(h.t['5//Mur'])
                    }),
                    (0, i.jsx)(s.njP.Item, {
                        className: g.tabBarItem,
                        id: m.ZI.MEMBERS,
                        disabled: v,
                        children: v ? h.intl.string(h.t['kg//+/']) : h.intl.formatToPlainString(h.t.bHnZWV, { numMembers: String(f) })
                    })
                ]
            })
        ]
    });
}
