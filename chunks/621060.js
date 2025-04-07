n.d(t, {
    ZP: () => _,
    v0: () => h
}),
    n(388685),
    n(539854),
    n(642613);
var r,
    a = n(200651),
    l = n(192379),
    i = n(120356),
    o = n.n(i),
    s = n(93582),
    c = n(481060),
    d = n(424625),
    u = n(823379),
    m = n(246992),
    x = n(616257),
    h = (((r = {}).NONE = ''), (r.EXPERIMENTS = 'Experiments'), (r.EVENTS = 'Events'), (r.PREMIUM = 'Premium'), (r.BILLING = 'Billing'), (r.USERS = 'Users'), (r.GUILDS = 'Guilds'), (r.UI = 'UI'), (r.GAMES = 'Games'), (r.AUDIO_VIDEO = 'Audio / Video'), (r.DEVELOPMENT = 'Development'), r);
let p = ['Experiments', 'Events', 'Premium', 'Billing', 'Users', 'Guilds', 'UI', 'Games', 'Audio / Video', 'Development'],
    b = l.forwardRef(function (e, t) {
        let { id: n, selected: r, onClick: l, children: i } = e;
        return (0, a.jsx)(c.P3F, {
            className: o()(x.tabItem, { [x.selected]: r }),
            'data-tab-id': n,
            innerRef: t,
            onClick: l,
            children: i
        });
    });
function f(e) {
    let { tabs: t, selectedTabId: n, onSelectTab: r } = e,
        i = l.useRef(null),
        o = l.useRef(0),
        h = l.useRef(new Map()),
        [f, _] = l.useState([]),
        g = l.useCallback(() => {
            var e, r, a, l;
            if (null == i.current) return;
            let s = [],
                c = i.current.getBoundingClientRect().width;
            if (c !== o.current) {
                for (let i of ((o.current = c), (c -= null != (r = null == (e = h.current.get(n)) ? void 0 : e.width) ? r : 0), t)) i.id !== n && (c -= null != (l = null == (a = h.current.get(i.id)) ? void 0 : a.width) ? l : 0) < 0 && s.push(i.id);
                _(s);
            }
        }, [t, n]),
        v = l.useRef(null);
    l.useEffect(
        () => (
            (v.current = new ResizeObserver(() => g())),
            null != i.current && v.current.observe(i.current),
            () => {
                var e;
                null == (e = v.current) || e.disconnect();
            }
        ),
        [g]
    );
    let j = l.useCallback(
        (e) => {
            var n, l, i;
            let { closePopout: o } = e,
                d = t.filter((e) => null == e.group),
                u = {};
            for (let e of t) null != e.group && (null != u[(n = e.group)] || (u[n] = []), u[e.group].push(e));
            for (let e of p)
                null == (i = u[e]) ||
                    i.sort((e, t) => {
                        var n, r;
                        return (null != (n = (0, s.q)(e.name)) ? n : '').localeCompare(null != (r = (0, s.q)(t.name)) ? r : '');
                    });
            return (0, a.jsxs)(c.v2r, {
                navId: 'devtools-overflow',
                variant: 'fixed',
                onClose: o,
                'aria-label': 'Overflowed DevTools Tabs',
                onSelect: o,
                children: [
                    d.map((e) => {
                        let { id: t, name: n } = e;
                        return (0, a.jsx)(
                            c.sNh,
                            {
                                id: t,
                                label: n,
                                action: () => r(t)
                            },
                            t
                        );
                    }),
                    p.map((e) =>
                        (0, a.jsx)(
                            c.kSQ,
                            {
                                label: e,
                                children: u[e].map((e) => {
                                    let { id: t, name: n } = e;
                                    return (0, a.jsx)(
                                        c.sNh,
                                        {
                                            id: t,
                                            label: n,
                                            action: () => r(t)
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
        [t, r]
    );
    return (0, a.jsxs)('div', {
        className: x.tabBarContainer,
        children: [
            (0, a.jsx)('div', {
                className: x.tabBar,
                ref: i,
                children: t
                    .map((e) => {
                        let { id: t, name: l } = e;
                        if (!f.includes(t))
                            return (0, a.jsx)(
                                b,
                                {
                                    id: t,
                                    selected: n === t,
                                    ref: (e) => {
                                        var n, r, a;
                                        let l = null != (r = null == (n = h.current.get(t)) ? void 0 : n.width) ? r : 0;
                                        h.current.set(t, {
                                            node: e,
                                            width: null != (a = null == e ? void 0 : e.getBoundingClientRect().width) ? a : l
                                        });
                                    },
                                    onClick: n !== t ? () => r(t) : void 0,
                                    children: l
                                },
                                t
                            );
                    })
                    .filter(u.lm)
            }),
            (0, a.jsx)('div', {
                className: x.menu,
                children:
                    f.length > 0 &&
                    (0, a.jsx)(c.yRy, {
                        layerContext: m.O$,
                        renderPopout: j,
                        position: 'bottom',
                        align: 'right',
                        spacing: 0,
                        children: (e) => {
                            var t, n;
                            return (0, a.jsx)(
                                c.zxk,
                                ((t = (function (e) {
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
                                })({}, e)),
                                (n = n =
                                    {
                                        className: x.overflowChevron,
                                        size: c.zxk.Sizes.ICON,
                                        look: c.zxk.Looks.BLANK,
                                        children: (0, a.jsx)(d.Z, {
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
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
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
function _(e, t) {
    var n, r, i;
    let { tabs: o, initialSelectedTabId: s, onChangeTab: c } = e,
        [d, u] = l.useState(null != s ? s : null == (n = o[0]) ? void 0 : n.id);
    return {
        TabBar: l.useCallback(
            () =>
                (0, a.jsx)(f, {
                    tabs: o,
                    selectedTabId: d,
                    onSelectTab: (e) => {
                        u(e), null == c || c(e);
                    }
                }),
            [d, u, c, ...t]
        ),
        renderSelectedTab: null != (i = null == (r = o.find((e) => e.id === d)) ? void 0 : r.render) ? i : () => null,
        selectedTabId: d
    };
}
