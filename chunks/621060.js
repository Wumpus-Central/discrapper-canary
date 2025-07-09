(a.d(t, {
    ZP: () => g,
    v0: () => b
}),
    a(388685),
    a(539854),
    a(642613));
var n,
    r = a(255367),
    l = a(73800),
    i = a(120356),
    s = a.n(i),
    o = a(93582),
    c = a(755721),
    d = a(481060),
    u = a(393238),
    m = a(424625),
    x = a(823379),
    p = a(246992),
    h = a(616257),
    b = (((n = {}).NONE = ''), (n.EXPERIMENTS = 'Experiments'), (n.EVENTS = 'Events'), (n.PREMIUM = 'Premium'), (n.BILLING = 'Billing'), (n.USERS = 'Users'), (n.GUILDS = 'Guilds'), (n.UI = 'UI'), (n.GAMES = 'Games'), (n.AUDIO_VIDEO = 'Audio / Video'), (n.DEVELOPMENT = 'Development'), n);
let f = ['Experiments', 'Events', 'Premium', 'Billing', 'Users', 'Guilds', 'UI', 'Games', 'Audio / Video', 'Development'],
    v = l.forwardRef(function (e, t) {
        let { id: a, selected: n, onClick: l, children: i } = e;
        return (0, r.jsx)(d.P3F, {
            className: s()(h.tabItem, { [h.selected]: n }),
            'data-tab-id': a,
            innerRef: t,
            onClick: l,
            children: i
        });
    });
function j(e) {
    let { tabs: t, selectedTabId: a, onSelectTab: n } = e,
        i = l.useRef(new Map()),
        [s, b] = l.useState(() => new Set()),
        { ref: j, width: g } = (0, u.ZP)(),
        _ = l.useRef(null);
    l.useEffect(() => {
        var e, n, r, l;
        if (null == g) return;
        let s = new Set(),
            o = null != g ? g : 0;
        for (let c of ((o -= null != (n = null == (e = i.current.get(a)) ? void 0 : e.getBoundingClientRect().width) ? n : 0), t)) c.id !== a && (o -= null != (l = null == (r = i.current.get(c.id)) ? void 0 : r.getBoundingClientRect().width) ? l : 0) < 0 && s.add(c.id);
        b(s);
    }, [t, g, j, a]);
    let y = l.useCallback(
        (e) => {
            var a, l, i;
            let { closePopout: s } = e,
                c = t.filter((e) => null == e.group),
                u = {};
            for (let e of t) null != e.group && (null != u[(a = e.group)] || (u[a] = []), u[e.group].push(e));
            for (let e of f)
                null == (i = u[e]) ||
                    i.sort((e, t) => {
                        var a, n;
                        return (null != (a = (0, o.q)(e.name)) ? a : '').localeCompare(null != (n = (0, o.q)(t.name)) ? n : '');
                    });
            return (0, r.jsxs)(d.v2r, {
                navId: 'devtools-overflow',
                variant: 'fixed',
                onClose: s,
                'aria-label': 'Overflowed DevTools Tabs',
                onSelect: s,
                children: [
                    c.map((e) => {
                        let { id: t, name: a } = e;
                        return (0, r.jsx)(
                            d.sNh,
                            {
                                id: t,
                                label: a,
                                action: () => n(t)
                            },
                            t
                        );
                    }),
                    f.map((e) =>
                        (0, r.jsx)(
                            d.kSQ,
                            {
                                label: e,
                                children: u[e].map((e) => {
                                    let { id: t, name: a } = e;
                                    return (0, r.jsx)(
                                        d.sNh,
                                        {
                                            id: t,
                                            label: a,
                                            action: () => n(t)
                                        },
                                        t
                                    );
                                })
                            },
                            e
                        )
                    )
                ]
            });
        },
        [t, n]
    );
    return (0, r.jsxs)('div', {
        className: h.tabBarContainer,
        children: [
            (0, r.jsxs)('div', {
                className: h.tabBar,
                ref: j,
                children: [
                    t
                        .map((e) => {
                            let { id: t, name: l } = e;
                            if (!s.has(t))
                                return (0, r.jsx)(
                                    v,
                                    {
                                        id: t,
                                        selected: a === t,
                                        onClick: a !== t ? () => n(t) : void 0,
                                        children: l
                                    },
                                    t
                                );
                        })
                        .filter(x.lm),
                    (0, r.jsx)('div', {
                        className: h.tabMeasurer,
                        children: t.map((e) => {
                            let { id: t, name: l } = e;
                            return (0, r.jsx)(
                                v,
                                {
                                    id: t,
                                    selected: a === t,
                                    ref: (e) => {
                                        i.current.set(t, e);
                                    },
                                    onClick: a !== t ? () => n(t) : void 0,
                                    children: l
                                },
                                t
                            );
                        })
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: h.menu,
                children:
                    s.size > 0 &&
                    (0, r.jsx)(d.yRy, {
                        targetElementRef: _,
                        layerContext: p.O$,
                        renderPopout: y,
                        position: 'bottom',
                        align: 'right',
                        spacing: 0,
                        children: (e) => {
                            var t, a;
                            return (0, r.jsx)(
                                c.zx,
                                ((t = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var a = null != arguments[t] ? arguments[t] : {},
                                            n = Object.keys(a);
                                        ('function' == typeof Object.getOwnPropertySymbols &&
                                            (n = n.concat(
                                                Object.getOwnPropertySymbols(a).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(a, e).enumerable;
                                                })
                                            )),
                                            n.forEach(function (t) {
                                                var n;
                                                ((n = a[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: n,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = n));
                                            }));
                                    }
                                    return e;
                                })({}, e)),
                                (a = a =
                                    {
                                        buttonRef: _,
                                        className: h.overflowChevron,
                                        size: c.zx.Sizes.ICON,
                                        look: c.zx.Looks.BLANK,
                                        children: (0, r.jsx)(m.Z, {
                                            className: h.__invalid_overflowIcon,
                                            width: 16,
                                            height: 16
                                        })
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
                                    : (function (e, t) {
                                          var a = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var n = Object.getOwnPropertySymbols(e);
                                              a.push.apply(a, n);
                                          }
                                          return a;
                                      })(Object(a)).forEach(function (e) {
                                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e));
                                      }),
                                t)
                            );
                        }
                    })
            })
        ]
    });
}
function g(e, t) {
    var a, n, i;
    let { tabs: s, initialSelectedTabId: o, onChangeTab: c } = e,
        [d, u] = l.useState(null != o ? o : null == (a = s[0]) ? void 0 : a.id);
    return {
        TabBar: l.useCallback(
            () =>
                (0, r.jsx)(j, {
                    tabs: s,
                    selectedTabId: d,
                    onSelectTab: (e) => {
                        (u(e), null == c || c(e));
                    }
                }),
            [d, u, c, ...t]
        ),
        renderSelectedTab: null != (i = null == (n = s.find((e) => e.id === d)) ? void 0 : n.render) ? i : () => null,
        selectedTabId: d
    };
}
