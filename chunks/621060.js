n.d(t, {
    ZP: () => j,
    Zj: () => b,
    v0: () => x,
}),
    n(388685);
var a,
    r = n(54381),
    i = n(473749),
    l = n(120356),
    s = n.n(l),
    o = n(755721),
    c = n(481060),
    d = n(393238),
    u = n(424625),
    m = n(823379),
    p = n(246992),
    h = n(252899),
    f = n(663618),
    x =
        (((a = {}).NONE = ""),
        (a.DCF = "DCF"),
        (a.EXPERIMENTS = "Experiments"),
        (a.EVENTS = "Events"),
        (a.PREMIUM = "Premium"),
        (a.QUESTS = "Quests"),
        (a.BILLING = "Billing"),
        (a.USERS = "Users"),
        (a.GUILDS = "Guilds"),
        (a.UI = "UI"),
        (a.GAMES = "Games"),
        (a.AUDIO_VIDEO = "Audio / Video"),
        (a.DEVELOPMENT = "Development"),
        (a.BOOSTING = "Boosting"),
        a);
let b = [
        "Experiments",
        "DCF",
        "Events",
        "Premium",
        "Quests",
        "Billing",
        "Users",
        "Guilds",
        "UI",
        "Games",
        "Boosting",
        "Audio / Video",
        "Development",
    ],
    g = i.forwardRef(function (e, t) {
        let { id: n, selected: a, onClick: i, children: l } = e;
        return (0, r.jsx)(c.P3F, {
            className: s()(f.tabItem, { [f.selected]: a }),
            "data-tab-id": n,
            innerRef: t,
            onClick: i,
            children: l,
        });
    });
function v(e) {
    let { tabs: t, selectedTabId: n, onSelectTab: a } = e,
        l = i.useRef(new Map()),
        [s, x] = i.useState(() => new Set()),
        { ref: b, width: v } = (0, d.ZP)(),
        j = i.useRef(null),
        y = (0, h.F)(t, a);
    i.useEffect(() => {
        var e, a, r, i;
        if (null == v) return;
        let s = new Set(),
            o = null != v ? v : 0;
        for (let c of ((o -=
            null != (a = null == (e = l.current.get(n)) ? void 0 : e.getBoundingClientRect().width) ? a : 0),
        t))
            c.id !== n &&
                (o -=
                    null != (i = null == (r = l.current.get(c.id)) ? void 0 : r.getBoundingClientRect().width)
                        ? i
                        : 0) < 0 &&
                s.add(c.id);
        x(s);
    }, [t, v, b, n]);
    let C = i.useCallback(
        (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(c.v2r, {
                navId: "devtools-overflow",
                variant: "fixed",
                onClose: t,
                "aria-label": "Overflowed DevTools Tabs",
                onSelect: t,
                children: y,
            });
        },
        [y],
    );
    return (0, r.jsxs)("div", {
        className: f.tabBarContainer,
        children: [
            (0, r.jsxs)("div", {
                className: f.tabBar,
                ref: b,
                children: [
                    t
                        .map((e) => {
                            let { id: t, name: i } = e;
                            if (!s.has(t))
                                return (0, r.jsx)(
                                    g,
                                    {
                                        id: t,
                                        selected: n === t,
                                        onClick: n !== t ? () => a(t) : void 0,
                                        children: i,
                                    },
                                    t,
                                );
                        })
                        .filter(m.lm),
                    (0, r.jsx)("div", {
                        className: f.tabMeasurer,
                        children: t.map((e) => {
                            let { id: t, name: i } = e;
                            return (0, r.jsx)(
                                g,
                                {
                                    id: t,
                                    selected: n === t,
                                    ref: (e) => {
                                        l.current.set(t, e);
                                    },
                                    onClick: n !== t ? () => a(t) : void 0,
                                    children: i,
                                },
                                t,
                            );
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: f.menu,
                children:
                    s.size > 0 &&
                    (0, r.jsx)(c.yRy, {
                        targetElementRef: j,
                        layerContext: p.O$,
                        renderPopout: C,
                        position: "bottom",
                        align: "right",
                        autoInvert: !1,
                        spacing: 0,
                        children: (e) => {
                            var t, n;
                            return (0, r.jsx)(
                                o.zx,
                                ((t = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            a = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (a = a.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            a.forEach(function (t) {
                                                var a;
                                                (a = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: a,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = a);
                                            });
                                    }
                                    return e;
                                })({}, e)),
                                (n = n =
                                    {
                                        buttonRef: j,
                                        className: f.overflowChevron,
                                        size: o.zx.Sizes.ICON,
                                        look: o.zx.Looks.BLANK,
                                        children: (0, r.jsx)(u.Z, {
                                            className: f.__invalid_overflowIcon,
                                            width: 16,
                                            height: 16,
                                        }),
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
                                t),
                            );
                        },
                    }),
            }),
        ],
    });
}
function j(e, t) {
    var n, a, l;
    let { tabs: s, initialSelectedTabId: o, onChangeTab: c } = e,
        [d, u] = i.useState(null != o ? o : null == (n = s[0]) ? void 0 : n.id);
    return {
        TabBar: i.useCallback(
            () =>
                (0, r.jsx)(v, {
                    tabs: s,
                    selectedTabId: d,
                    onSelectTab: (e) => {
                        u(e), null == c || c(e);
                    },
                }),
            [d, u, c, ...t],
        ),
        renderSelectedTab: null != (l = null == (a = s.find((e) => e.id === d)) ? void 0 : a.render) ? l : () => null,
        selectedTabId: d,
    };
}
