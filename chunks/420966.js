n.d(t, {
    V: function () {
        return x;
    },
    Z: function () {
        return p;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    s = n(239091),
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
    let { guild: t, role: x, selectedSection: p, setSelectedSection: f } = e,
        C = r.useCallback(
            (e) => {
                f(e);
            },
            [f]
        ),
        v = (0, l.e7)(
            [d.Z],
            () => {
                var e;
                return null === (e = d.Z.getRoleMemberCount(t.id)) || void 0 === e ? void 0 : e[x.id];
            },
            [x.id, t.id]
        ),
        _ = (0, o.pM)(t.id, x.id),
        N = (0, u.Z)(x);
    r.useEffect(() => {
        _ && f(m.ZI.PERMISSIONS);
    }, [_, f]);
    let I = (0, c.useHasGuildRoleItems)(t, x);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: g.titleContainer,
                children: [
                    (0, i.jsx)(a.Text, {
                        className: g.titleText,
                        color: 'header-primary',
                        variant: 'text-md/semibold',
                        children: h.intl.format(h.t.BUdGkJ, { roleName: x.name })
                    }),
                    I
                        ? (0, i.jsx)(a.Clickable, {
                              className: g.menu,
                              onClick: function (e) {
                                  (0, s.jW)(e, async () => {
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
                              children: (0, i.jsx)(a.MoreHorizontalIcon, {
                                  size: 'md',
                                  color: 'currentColor'
                              })
                          })
                        : null
                ]
            }),
            null != N
                ? (0, i.jsx)(a.HelpMessage, {
                      messageType: a.HelpMessageTypes.WARNING,
                      children: N
                  })
                : null,
            (0, i.jsxs)(a.TabBar, {
                className: g.tabBar,
                'aria-label': h.intl.string(h.t['+1H47u']),
                selectedItem: p,
                type: 'top',
                look: 'brand',
                onItemSelect: C,
                children: [
                    (0, i.jsx)(a.TabBar.Item, {
                        className: g.tabBarItem,
                        id: m.ZI.DISPLAY,
                        disabled: _,
                        children: h.intl.string(h.t.hmdom5)
                    }),
                    (0, i.jsx)(a.TabBar.Item, {
                        className: g.tabBarItem,
                        id: m.ZI.PERMISSIONS,
                        children: h.intl.string(h.t.WIDE1N)
                    }),
                    (0, i.jsx)(a.TabBar.Item, {
                        className: g.tabBarItem,
                        id: m.ZI.VERIFICATIONS,
                        disabled: _,
                        children: h.intl.string(h.t['5//Mur'])
                    }),
                    (0, i.jsx)(a.TabBar.Item, {
                        className: g.tabBarItem,
                        id: m.ZI.MEMBERS,
                        disabled: _,
                        children: _ ? h.intl.string(h.t['kg//+/']) : h.intl.formatToPlainString(h.t.bHnZWV, { numMembers: String(v) })
                    })
                ]
            })
        ]
    });
}
