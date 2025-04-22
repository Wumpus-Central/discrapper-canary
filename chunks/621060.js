n.d(t, {
    ZP: () => g,
    v0: () => p
}),
    n(388685),
    n(539854),
    n(642613);
var a,
    r = n(200651),
    l = n(192379),
    i = n(120356),
    o = n.n(i),
    s = n(93582),
    c = n(481060),
    d = n(393238),
    u = n(424625),
    m = n(823379),
    x = n(246992),
    h = n(616257),
    p = (((a = {}).NONE = ''), (a.EXPERIMENTS = 'Experiments'), (a.EVENTS = 'Events'), (a.PREMIUM = 'Premium'), (a.BILLING = 'Billing'), (a.USERS = 'Users'), (a.GUILDS = 'Guilds'), (a.UI = 'UI'), (a.GAMES = 'Games'), (a.AUDIO_VIDEO = 'Audio / Video'), (a.DEVELOPMENT = 'Development'), a);
let b = ['Experiments', 'Events', 'Premium', 'Billing', 'Users', 'Guilds', 'UI', 'Games', 'Audio / Video', 'Development'],
    f = l.forwardRef(function (e, t) {
        let { id: n, selected: a, onClick: l, children: i } = e;
        return (0, r.jsx)(c.P3F, {
            className: o()(h.tabItem, { [h.selected]: a }),
            'data-tab-id': n,
            innerRef: t,
            onClick: l,
            children: i
        });
    });
function v(e) {
    let { tabs: t, selectedTabId: n, onSelectTab: a } = e,
        i = l.useRef(new Map()),
        [o, p] = l.useState(() => new Set()),
        { ref: v, width: g } = (0, d.ZP)();
    l.useEffect(() => {
        var e, a, r, l;
        if (null == g) return;
        let o = new Set(),
            s = null != g ? g : 0;
        for (let c of ((s -= null != (a = null == (e = i.current.get(n)) ? void 0 : e.getBoundingClientRect().width) ? a : 0), t)) c.id !== n && (s -= null != (l = null == (r = i.current.get(c.id)) ? void 0 : r.getBoundingClientRect().width) ? l : 0) < 0 && o.add(c.id);
        p(o);
    }, [t, g, v, n]);
    let j = l.useCallback(
        (e) => {
            var n, l, i;
            let { closePopout: o } = e,
                d = t.filter((e) => null == e.group),
                u = {};
            for (let e of t) null != e.group && (null != u[(n = e.group)] || (u[n] = []), u[e.group].push(e));
            for (let e of b)
                null == (i = u[e]) ||
                    i.sort((e, t) => {
                        var n, a;
                        return (null != (n = (0, s.q)(e.name)) ? n : '').localeCompare(null != (a = (0, s.q)(t.name)) ? a : '');
                    });
            return (0, r.jsxs)(c.v2r, {
                navId: 'devtools-overflow',
                variant: 'fixed',
                onClose: o,
                'aria-label': 'Overflowed DevTools Tabs',
                onSelect: o,
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
                    b.map((e) =>
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
        className: h.tabBarContainer,
        children: [
            (0, r.jsxs)('div', {
                className: h.tabBar,
                ref: v,
                children: [
                    t
                        .map((e) => {
                            let { id: t, name: l } = e;
                            if (!o.has(t))
                                return (0, r.jsx)(
                                    f,
                                    {
                                        id: t,
                                        selected: n === t,
                                        onClick: n !== t ? () => a(t) : void 0,
                                        children: l
                                    },
                                    t
                                );
                        })
                        .filter(m.lm),
                    (0, r.jsx)('div', {
                        className: h.tabMeasurer,
                        children: t.map((e) => {
                            let { id: t, name: l } = e;
                            return (0, r.jsx)(
                                f,
                                {
                                    id: t,
                                    selected: n === t,
                                    ref: (e) => {
                                        i.current.set(t, e);
                                    },
                                    onClick: n !== t ? () => a(t) : void 0,
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
                    o.size > 0 &&
                    (0, r.jsx)(c.yRy, {
                        layerContext: x.O$,
                        renderPopout: j,
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
                                        className: h.overflowChevron,
                                        size: c.zxk.Sizes.ICON,
                                        look: c.zxk.Looks.BLANK,
                                        children: (0, r.jsx)(u.Z, {
                                            className: h.__invalid_overflowIcon,
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
function g(e, t) {
    var n, a, i;
    let { tabs: o, initialSelectedTabId: s, onChangeTab: c } = e,
        [d, u] = l.useState(null != s ? s : null == (n = o[0]) ? void 0 : n.id);
    return {
        TabBar: l.useCallback(
            () =>
                (0, r.jsx)(v, {
                    tabs: o,
                    selectedTabId: d,
                    onSelectTab: (e) => {
                        u(e), null == c || c(e);
                    }
                }),
            [d, u, c, ...t]
        ),
        renderSelectedTab: null != (i = null == (a = o.find((e) => e.id === d)) ? void 0 : a.render) ? i : () => null,
        selectedTabId: d
    };
}
