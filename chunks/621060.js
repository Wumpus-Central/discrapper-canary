n.d(t, {
    ZP: () => j,
    v0: () => b,
}),
    n(388685),
    n(539854),
    n(642613);
var a,
    r = n(951288),
    l = n(647438),
    i = n(120356),
    s = n.n(i),
    o = n(93582),
    c = n(755721),
    d = n(481060),
    u = n(393238),
    m = n(424625),
    h = n(823379),
    p = n(246992),
    x = n(451429),
    b =
        (((a = {}).NONE = ""),
        (a.DISMISSIBLE_CONTENT = "Dismissible Content"),
        (a.EXPERIMENTS = "Experiments"),
        (a.EVENTS = "Events"),
        (a.PREMIUM = "Premium"),
        (a.BILLING = "Billing"),
        (a.USERS = "Users"),
        (a.GUILDS = "Guilds"),
        (a.UI = "UI"),
        (a.GAMES = "Games"),
        (a.AUDIO_VIDEO = "Audio / Video"),
        (a.DEVELOPMENT = "Development"),
        a);
let f = [
        "Experiments",
        "Dismissible Content",
        "Events",
        "Premium",
        "Billing",
        "Users",
        "Guilds",
        "UI",
        "Games",
        "Audio / Video",
        "Development",
    ],
    g = l.forwardRef(function (e, t) {
        let { id: n, selected: a, onClick: l, children: i } = e;
        return (0, r.jsx)(d.P3F, {
            className: s()(x.tabItem, { [x.selected]: a }),
            "data-tab-id": n,
            innerRef: t,
            onClick: l,
            children: i,
        });
    });
function v(e) {
    let { tabs: t, selectedTabId: n, onSelectTab: a } = e,
        i = l.useRef(new Map()),
        [s, b] = l.useState(() => new Set()),
        { ref: v, width: j } = (0, u.ZP)(),
        _ = l.useRef(null);
    l.useEffect(() => {
        var e, a, r, l;
        if (null == j) return;
        let s = new Set(),
            o = null != j ? j : 0;
        for (let c of ((o -=
            null != (a = null == (e = i.current.get(n)) ? void 0 : e.getBoundingClientRect().width) ? a : 0),
        t))
            c.id !== n &&
                (o -=
                    null != (l = null == (r = i.current.get(c.id)) ? void 0 : r.getBoundingClientRect().width)
                        ? l
                        : 0) < 0 &&
                s.add(c.id);
        b(s);
    }, [t, j, v, n]);
    let y = l.useCallback(
        (e) => {
            var n, l;
            let { closePopout: i } = e,
                s = t.filter((e) => null == e.group),
                c = {};
            for (let e of t) null != e.group && (null != c[(n = e.group)] || (c[n] = []), c[e.group].push(e));
            for (let e of f)
                null == (l = c[e]) ||
                    l.sort((e, t) => {
                        var n, a;
                        return (null != (n = (0, o.q)(e.name)) ? n : "").localeCompare(
                            null != (a = (0, o.q)(t.name)) ? a : "",
                        );
                    });
            return (0, r.jsxs)(d.v2r, {
                navId: "devtools-overflow",
                variant: "fixed",
                onClose: i,
                "aria-label": "Overflowed DevTools Tabs",
                onSelect: i,
                children: [
                    s.map((e) => {
                        let { id: t, name: n } = e;
                        return (0, r.jsx)(
                            d.sNh,
                            {
                                id: t,
                                label: n,
                                action: () => a(t),
                            },
                            t,
                        );
                    }),
                    f.map((e) =>
                        (0, r.jsx)(
                            d.kSQ,
                            {
                                label: e,
                                children: c[e].map((e) => {
                                    let { id: t, name: n } = e;
                                    return (0, r.jsx)(
                                        d.sNh,
                                        {
                                            id: t,
                                            label: n,
                                            action: () => a(t),
                                        },
                                        t,
                                    );
                                }),
                            },
                            e,
                        ),
                    ),
                ],
            });
        },
        [t, a],
    );
    return (0, r.jsxs)("div", {
        className: x.tabBarContainer,
        children: [
            (0, r.jsxs)("div", {
                className: x.tabBar,
                ref: v,
                children: [
                    t
                        .map((e) => {
                            let { id: t, name: l } = e;
                            if (!s.has(t))
                                return (0, r.jsx)(
                                    g,
                                    {
                                        id: t,
                                        selected: n === t,
                                        onClick: n !== t ? () => a(t) : void 0,
                                        children: l,
                                    },
                                    t,
                                );
                        })
                        .filter(h.lm),
                    (0, r.jsx)("div", {
                        className: x.tabMeasurer,
                        children: t.map((e) => {
                            let { id: t, name: l } = e;
                            return (0, r.jsx)(
                                g,
                                {
                                    id: t,
                                    selected: n === t,
                                    ref: (e) => {
                                        i.current.set(t, e);
                                    },
                                    onClick: n !== t ? () => a(t) : void 0,
                                    children: l,
                                },
                                t,
                            );
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: x.menu,
                children:
                    s.size > 0 &&
                    (0, r.jsx)(d.yRy, {
                        targetElementRef: _,
                        layerContext: p.O$,
                        renderPopout: y,
                        position: "bottom",
                        align: "right",
                        spacing: 0,
                        children: (e) => {
                            var t, n;
                            return (0, r.jsx)(
                                c.zx,
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
                                        buttonRef: _,
                                        className: x.overflowChevron,
                                        size: c.zx.Sizes.ICON,
                                        look: c.zx.Looks.BLANK,
                                        children: (0, r.jsx)(m.Z, {
                                            className: x.__invalid_overflowIcon,
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
    var n, a, i;
    let { tabs: s, initialSelectedTabId: o, onChangeTab: c } = e,
        [d, u] = l.useState(null != o ? o : null == (n = s[0]) ? void 0 : n.id);
    return {
        TabBar: l.useCallback(
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
        renderSelectedTab: null != (i = null == (a = s.find((e) => e.id === d)) ? void 0 : a.render) ? i : () => null,
        selectedTabId: d,
    };
}
