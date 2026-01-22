n.d(t, {
    Ay: () => j,
    BW: () => b,
    fu: () => x,
}),
    n(896048);
var a,
    l = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    o = n(421380),
    c = n(397927),
    d = n(765671),
    u = n(61780),
    m = n(403362),
    p = n(867041),
    h = n(786574),
    f = n(661251),
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
        let { id: n, selected: a, onClick: i, children: r } = e;
        return (0, l.jsx)(c.DUT, {
            className: s()(f.V3, { [f.wH]: a }),
            "data-tab-id": n,
            innerRef: t,
            onClick: i,
            children: r,
        });
    });
function v(e) {
    let { tabs: t, selectedTabId: n, onSelectTab: a } = e,
        r = i.useRef(new Map()),
        [s, x] = i.useState(() => new Set()),
        { ref: b, width: v } = (0, d.Ay)(),
        j = i.useRef(null),
        y = (0, h.N)(t, a);
    i.useEffect(() => {
        var e, a, l, i;
        if (null == v) return;
        let s = new Set(),
            o = null != v ? v : 0;
        for (let c of ((o -=
            null != (e = null == (a = r.current.get(n)) ? void 0 : a.getBoundingClientRect().width) ? e : 0),
        t))
            c.id !== n &&
                (o -=
                    null != (l = null == (i = r.current.get(c.id)) ? void 0 : i.getBoundingClientRect().width)
                        ? l
                        : 0) < 0 &&
                s.add(c.id);
        x(s);
    }, [t, v, b, n]);
    let _ = i.useCallback(
        (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(c.W1t, {
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
    return (0, l.jsxs)("div", {
        className: f.Mv,
        children: [
            (0, l.jsxs)("div", {
                className: f.$H,
                ref: b,
                children: [
                    t
                        .map((e) => {
                            let { id: t, name: i } = e;
                            if (!s.has(t))
                                return (0, l.jsx)(
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
                        .filter(m.Vq),
                    (0, l.jsx)("div", {
                        className: f.g,
                        children: t.map((e) => {
                            let { id: t, name: i } = e;
                            return (0, l.jsx)(
                                g,
                                {
                                    id: t,
                                    selected: n === t,
                                    ref: (e) => {
                                        r.current.set(t, e);
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
            (0, l.jsx)("div", {
                className: f.MK,
                children:
                    s.size > 0 &&
                    (0, l.jsx)(c.YNO, {
                        targetElementRef: j,
                        layerContext: p.He,
                        renderPopout: _,
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
                                        className: f.Iq,
                                        size: o.$n.Sizes.ICON,
                                        look: o.$n.Looks.BLANK,
                                        children: (0, l.jsx)(u.A, {
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
    var n, a, r;
    let { tabs: s, initialSelectedTabId: o, onChangeTab: c } = e,
        [d, u] = i.useState(null != o ? o : null == (a = s[0]) ? void 0 : a.id);
    return {
        TabBar: i.useCallback(
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
        renderSelectedTab: null != (n = null == (r = s.find((e) => e.id === d)) ? void 0 : r.render) ? n : () => null,
        selectedTabId: d,
    };
}
