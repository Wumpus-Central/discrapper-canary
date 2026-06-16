a.d(t, { Ay: () => C, BW: () => y, fu: () => f });
var n,
    l = a(627968),
    s = a(64700),
    i = a(503698),
    r = a.n(i),
    o = a(862482),
    d = a(939249),
    c = a(980707),
    u = a(477782),
    m = a(922016),
    h = a(765671),
    x = a(949091),
    p = a(61780),
    g = a(403362),
    v = a(867041),
    j = a(786574),
    b = a(505206),
    f =
        (((n = {}).NONE = ""),
        (n.DCF = "DCF"),
        (n.EXPERIMENTS = "Experiments"),
        (n.EVENTS = "Events"),
        (n.PREMIUM = "Premium"),
        (n.QUESTS = "Quests"),
        (n.BILLING = "Billing"),
        (n.SHOP = "Shop"),
        (n.USERS = "Users"),
        (n.GUILDS = "Guilds"),
        (n.UI = "UI"),
        (n.GAMES = "Games"),
        (n.AUDIO_VIDEO = "Audio / Video"),
        (n.DEVELOPMENT = "Development"),
        (n.BOOSTING = "Boosting"),
        n);
let y = [
        "Experiments",
        "DCF",
        "Events",
        "Premium",
        "Quests",
        "Billing",
        "Shop",
        "Users",
        "Guilds",
        "UI",
        "Games",
        "Boosting",
        "Audio / Video",
        "Development",
    ],
    _ = s.forwardRef(function (e, t) {
        let { id: a, selected: n, onClick: s, children: i } = e;
        return (0, l.jsx)(d.D, {
            className: r()(b.V3, { [b.wH]: n }),
            "data-tab-id": a,
            innerRef: t,
            onClick: s,
            children: i,
        });
    });
function E(e) {
    let { tabs: t, selectedTabId: a, onSelectTab: n } = e,
        i = s.useRef(new Map()),
        [r, d] = s.useState(() => new Set()),
        { ref: f, width: y } = (0, h.Ay)(),
        E = s.useRef(null),
        C = (0, j.N)(t, n),
        S = (0, x.A)();
    s.useEffect(() => {
        if (null == y) return;
        let e = new Set(),
            n = y ?? 0;
        for (let l of ((n -= i.current.get(a)?.getBoundingClientRect().width ?? 0), t))
            l.id !== a && (n -= i.current.get(l.id)?.getBoundingClientRect().width ?? 0) < 0 && e.add(l.id);
        d(e);
    }, [t, y, f, a]);
    let N = s.useCallback(
        (e) => {
            let { closePopout: t } = e;
            return (0, l.jsxs)(c.W, {
                "data-menu-migrated": !0,
                navId: "devtools-overflow",
                variant: "fixed",
                onClose: t,
                "aria-label": "Overflowed DevTools Tabs",
                onSelect: t,
                children: [C, null != S && (0, l.jsx)(u.rX, { "aria-label": "Playgrounds", children: S })],
            });
        },
        [C, S],
    );
    return (0, l.jsxs)("div", {
        className: b.Mv,
        children: [
            (0, l.jsxs)("div", {
                className: b.$H,
                ref: f,
                children: [
                    t
                        .map((e) => {
                            let { id: t, name: s } = e;
                            if (!r.has(t))
                                return (0, l.jsx)(
                                    _,
                                    { id: t, selected: a === t, onClick: a !== t ? () => n(t) : void 0, children: s },
                                    t,
                                );
                        })
                        .filter(g.Vq),
                    (0, l.jsx)("div", {
                        className: b.g,
                        children: t.map((e) => {
                            let { id: t, name: s } = e;
                            return (0, l.jsx)(
                                _,
                                {
                                    id: t,
                                    selected: a === t,
                                    ref: (e) => {
                                        i.current.set(t, e);
                                    },
                                    onClick: a !== t ? () => n(t) : void 0,
                                    children: s,
                                },
                                t,
                            );
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: b.MK,
                children:
                    (r.size > 0 || null != S) &&
                    (0, l.jsx)(m.Y, {
                        targetElementRef: E,
                        layerContext: v.He,
                        renderPopout: N,
                        position: "bottom",
                        align: "right",
                        autoInvert: !1,
                        spacing: 0,
                        children: (e) =>
                            (0, l.jsx)(o.$n, {
                                ...e,
                                buttonRef: E,
                                className: b.Iq,
                                size: o.$n.Sizes.ICON,
                                look: o.$n.Looks.BLANK,
                                children: (0, l.jsx)(p.A, {
                                    className: b.__invalid_overflowIcon,
                                    width: 16,
                                    height: 16,
                                }),
                            }),
                    }),
            }),
        ],
    });
}
function C(e, t) {
    let { tabs: a, initialSelectedTabId: n, onChangeTab: i } = e,
        [r, o] = s.useState(n ?? a[0]?.id);
    return {
        TabBar: s.useCallback(
            () =>
                (0, l.jsx)(E, {
                    tabs: a,
                    selectedTabId: r,
                    onSelectTab: (e) => {
                        o(e), i?.(e);
                    },
                }),
            [r, o, i, ...t],
        ),
        renderSelectedTab: a.find((e) => e.id === r)?.render ?? (() => null),
        selectedTabId: r,
    };
}
