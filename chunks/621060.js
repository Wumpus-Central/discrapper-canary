n.d(t, {
    ZP: () => v,
    v0: () => h
}),
    n(388685),
    n(539854),
    n(642613);
var a,
    r = n(200651),
    l = n(192379),
    i = n(120356),
    s = n.n(i),
    o = n(93582),
    c = n(481060),
    d = n(424625),
    u = n(823379),
    m = n(246992),
    x = n(482479),
    h = (((a = {}).NONE = ''), (a.EXPERIMENTS = 'Experiments'), (a.EVENTS = 'Events'), (a.PREMIUM = 'Premium'), (a.BILLING = 'Billing'), (a.USERS = 'Users'), (a.GUILDS = 'Guilds'), (a.UI = 'UI'), (a.GAMES = 'Games'), (a.AUDIO_VIDEO = 'Audio / Video'), (a.DEVELOPMENT = 'Development'), a);
let p = ['Experiments', 'Events', 'Premium', 'Billing', 'Users', 'Guilds', 'UI', 'Games', 'Audio / Video', 'Development'],
    b = l.forwardRef(function (e, t) {
        let { id: n, selected: a, onClick: l, children: i } = e;
        return (0, r.jsx)(c.P3F, {
            className: s()(x.tabItem, { [x.selected]: a }),
            'data-tab-id': n,
            innerRef: t,
            onClick: l,
            children: i
        });
    });
function f(e) {
    let { tabs: t, selectedTabId: n, onSelectTab: a } = e,
        i = l.useRef(null),
        s = l.useRef(0),
        h = l.useRef(new Map()),
        [f, v] = l.useState([]),
        j = l.useCallback(() => {
            var e, a, r, l;
            if (null == i.current) return;
            let o = [],
                c = i.current.getBoundingClientRect().width;
            if (c !== s.current) {
                for (let i of ((s.current = c), (c -= null != (a = null == (e = h.current.get(n)) ? void 0 : e.width) ? a : 0), t)) i.id !== n && (c -= null != (l = null == (r = h.current.get(i.id)) ? void 0 : r.width) ? l : 0) < 0 && o.push(i.id);
                v(o);
            }
        }, [t, n]),
        g = l.useRef(null);
    l.useEffect(
        () => (
            (g.current = new ResizeObserver(() => j())),
            null != i.current && g.current.observe(i.current),
            () => {
                var e;
                null == (e = g.current) || e.disconnect();
            }
        ),
        [j]
    );
    let _ = l.useCallback(
        (e) => {
            var n, l, i;
            let { closePopout: s } = e,
                d = t.filter((e) => null == e.group),
                u = {};
            for (let e of t) null != e.group && (null != u[(n = e.group)] || (u[n] = []), u[e.group].push(e));
            for (let e of p)
                null == (i = u[e]) ||
                    i.sort((e, t) => {
                        var n, a;
                        return (null != (n = (0, o.q)(e.name)) ? n : '').localeCompare(null != (a = (0, o.q)(t.name)) ? a : '');
                    });
            return (0, r.jsxs)(c.v2r, {
                navId: 'devtools-overflow',
                variant: 'fixed',
                onClose: s,
                'aria-label': 'Overflowed DevTools Tabs',
                onSelect: s,
                children: [
                    d.map((e) => {
                        let { id: t, name: n } = e;
                        return (0, r.jsx)(
                            c.sNh,
                            {
                                id: t,
                                label: n,
                                action: () => a(t)
                            },
                            t
                        );
                    }),
                    p.map((e) =>
                        (0, r.jsx)(
                            c.kSQ,
                            {
                                label: e,
                                children: u[e].map((e) => {
                                    let { id: t, name: n } = e;
                                    return (0, r.jsx)(
                                        c.sNh,
                                        {
                                            id: t,
                                            label: n,
                                            action: () => a(t)
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
        [t, a]
    );
    return (0, r.jsxs)('div', {
        className: x.tabBarContainer,
        children: [
            (0, r.jsx)('div', {
                className: x.tabBar,
                ref: i,
                children: t
                    .map((e) => {
                        let { id: t, name: l } = e;
                        if (!f.includes(t))
                            return (0, r.jsx)(
                                b,
                                {
                                    id: t,
                                    selected: n === t,
                                    ref: (e) => {
                                        var n, a, r;
                                        let l = null != (a = null == (n = h.current.get(t)) ? void 0 : n.width) ? a : 0;
                                        h.current.set(t, {
                                            node: e,
                                            width: null != (r = null == e ? void 0 : e.getBoundingClientRect().width) ? r : l
                                        });
                                    },
                                    onClick: n !== t ? () => a(t) : void 0,
                                    children: l
                                },
                                t
                            );
                    })
                    .filter(u.lm)
            }),
            (0, r.jsx)('div', {
                className: x.menu,
                children:
                    f.length > 0 &&
                    (0, r.jsx)(c.yRy, {
                        layerContext: m.O$,
                        renderPopout: _,
                        position: 'bottom',
                        align: 'right',
                        spacing: 0,
                        children: (e) => {
                            var t, n;
                            return (0, r.jsx)(
                                c.zxk,
                                ((t = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            a = Object.keys(n);
                                        'function' == typeof Object.getOwnPropertySymbols &&
                                            (a = a.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                })
                                            )),
                                            a.forEach(function (t) {
                                                var a;
                                                (a = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: a,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = a);
                                            });
                                    }
                                    return e;
                                })({}, e)),
                                (n = n =
                                    {
                                        className: x.overflowChevron,
                                        size: c.zxk.Sizes.ICON,
                                        look: c.zxk.Looks.BLANK,
                                        children: (0, r.jsx)(d.Z, {
                                            className: x.__invalid_overflowIcon,
                                            width: 16,
                                            height: 16
                                        })
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var a = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, a);
                                          }
                                          return n;
                                      })(Object(n)).forEach(function (e) {
                                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                      }),
                                t)
                            );
                        }
                    })
            })
        ]
    });
}
function v(e, t) {
    var n, a, i;
    let { tabs: s, initialSelectedTabId: o, onChangeTab: c } = e,
        [d, u] = l.useState(null != o ? o : null == (n = s[0]) ? void 0 : n.id);
    return {
        TabBar: l.useCallback(
            () =>
                (0, r.jsx)(f, {
                    tabs: s,
                    selectedTabId: d,
                    onSelectTab: (e) => {
                        u(e), null == c || c(e);
                    }
                }),
            [d, u, c, ...t]
        ),
        renderSelectedTab: null != (i = null == (a = s.find((e) => e.id === d)) ? void 0 : a.render) ? i : () => null,
        selectedTabId: d
    };
}
