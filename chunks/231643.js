n.d(t, {
    Ay: () => j,
    BW: () => f,
    fu: () => g,
}),
    n(896048);
var a,
    l = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    o = n(421380),
    c = n(397927),
    d = n(765671),
    u = n(61780),
    m = n(403362),
    p = n(867041),
    h = n(786574),
    x = n(661251),
    g =
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
let f = [
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
    b = r.forwardRef(function (e, t) {
        let { id: n, selected: a, onClick: r, children: i } = e;
        return (0, l.jsx)(c.DUT, {
            className: s()(x.V3, {
                [x.wH]: a,
            }),
            "data-tab-id": n,
            innerRef: t,
            onClick: r,
            children: i,
        });
    });

function v(e) {
    let { tabs: t, selectedTabId: n, onSelectTab: a } = e,
        i = r.useRef(new Map()),
        [s, g] = r.useState(() => new Set()),
        { ref: f, width: v } = (0, d.Ay)(),
        j = r.useRef(null),
        _ = (0, h.N)(t, a);
    r.useEffect(() => {
        var e, a, l, r;
        if (null == v) return;
        let s = new Set(),
            o = null != v ? v : 0;
        for (let c of ((o -=
            null != (e = null == (a = i.current.get(n)) ? void 0 : a.getBoundingClientRect().width) ? e : 0),
        t))
            c.id !== n &&
                (o -=
                    null != (l = null == (r = i.current.get(c.id)) ? void 0 : r.getBoundingClientRect().width)
                        ? l
                        : 0) < 0 &&
                s.add(c.id);
        g(s);
    }, [t, v, f, n]);
    let y = r.useCallback(
        (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(c.W1t, {
                "data-menu-migrated": !0,
                navId: "devtools-overflow",
                variant: "fixed",
                onClose: t,
                "aria-label": "Overflowed DevTools Tabs",
                onSelect: t,
                children: _,
            });
        },
        [_],
    );
    return (0, l.jsxs)("div", {
        className: x.Mv,
        children: [
            (0, l.jsxs)("div", {
                className: x.$H,
                ref: f,
                children: [
                    t
                        .map((e) => {
                            let { id: t, name: r } = e;
                            if (!s.has(t))
                                return (0, l.jsx)(
                                    b,
                                    {
                                        id: t,
                                        selected: n === t,
                                        onClick: n !== t ? () => a(t) : void 0,
                                        children: r,
                                    },
                                    t,
                                );
                        })
                        .filter(m.Vq),
                    (0, l.jsx)("div", {
                        className: x.g,
                        children: t.map((e) => {
                            let { id: t, name: r } = e;
                            return (0, l.jsx)(
                                b,
                                {
                                    id: t,
                                    selected: n === t,
                                    ref: (e) => {
                                        i.current.set(t, e);
                                    },
                                    onClick: n !== t ? () => a(t) : void 0,
                                    children: r,
                                },
                                t,
                            );
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: x.MK,
                children:
                    s.size > 0 &&
                    (0, l.jsx)(c.YNO, {
                        targetElementRef: j,
                        layerContext: p.He,
                        renderPopout: y,
                        position: "bottom",
                        align: "right",
                        autoInvert: !1,
                        spacing: 0,
                        children: (e) => {
                            var t, n;
                            return (0, l.jsx)(
                                o.$n,
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
                                        className: x.Iq,
                                        size: o.$n.Sizes.ICON,
                                        look: o.$n.Looks.BLANK,
                                        children: (0, l.jsx)(u.A, {
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
        [d, u] = r.useState(null != o ? o : null == (a = s[0]) ? void 0 : a.id);
    return {
        TabBar: r.useCallback(
            () =>
                (0, l.jsx)(v, {
                    tabs: s,
                    selectedTabId: d,
                    onSelectTab: (e) => {
                        u(e), null == c || c(e);
                    },
                }),
            [d, u, c, ...t],
        ),
        renderSelectedTab: null != (n = null == (i = s.find((e) => e.id === d)) ? void 0 : i.render) ? n : () => null,
        selectedTabId: d,
    };
}
