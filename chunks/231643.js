a.d(t, { Ay: () => A, BW: () => _, fu: () => b });
var n,
    l = a(627968),
    i = a(64700),
    s = a(503698),
    r = a.n(s),
    o = a(862482),
    d = a(939249),
    c = a(861672),
    u = a(265872),
    m = a(765671),
    h = a(61780),
    p = a(403362),
    x = a(867041),
    g = a(786574),
    v = a(505206),
    b =
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
let _ = [
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
    f = i.forwardRef(function (e, t) {
        let { id: a, selected: n, onClick: i, children: s } = e;
        return (0, l.jsx)(d.D, {
            className: r()(v.V3, { [v.wH]: n }),
            "data-tab-id": a,
            innerRef: t,
            onClick: i,
            children: s,
        });
    });
function j(e) {
    let { tabs: t, selectedTabId: a, onSelectTab: n } = e,
        s = i.useRef(new Map()),
        [r, d] = i.useState(() => new Set()),
        { ref: b, width: _ } = (0, m.Ay)(),
        j = i.useRef(null),
        A = (0, g.N)(t, n);
    i.useEffect(() => {
        if (null == _) return;
        let e = new Set(),
            n = _ ?? 0;
        for (let l of ((n -= s.current.get(a)?.getBoundingClientRect().width ?? 0), t))
            l.id !== a && (n -= s.current.get(l.id)?.getBoundingClientRect().width ?? 0) < 0 && e.add(l.id);
        d(e);
    }, [t, _, b, a]);
    let y = i.useCallback(
        (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(c.W, {
                "data-menu-migrated": !0,
                navId: "devtools-overflow",
                variant: "fixed",
                onClose: t,
                "aria-label": "Overflowed DevTools Tabs",
                onSelect: t,
                children: A,
            });
        },
        [A],
    );
    return (0, l.jsxs)("div", {
        className: v.Mv,
        children: [
            (0, l.jsxs)("div", {
                className: v.$H,
                ref: b,
                children: [
                    t
                        .map((e) => {
                            let { id: t, name: i } = e;
                            if (!r.has(t))
                                return (0, l.jsx)(
                                    f,
                                    { id: t, selected: a === t, onClick: a !== t ? () => n(t) : void 0, children: i },
                                    t,
                                );
                        })
                        .filter(p.Vq),
                    (0, l.jsx)("div", {
                        className: v.g,
                        children: t.map((e) => {
                            let { id: t, name: i } = e;
                            return (0, l.jsx)(
                                f,
                                {
                                    id: t,
                                    selected: a === t,
                                    ref: (e) => {
                                        s.current.set(t, e);
                                    },
                                    onClick: a !== t ? () => n(t) : void 0,
                                    children: i,
                                },
                                t,
                            );
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: v.MK,
                children:
                    r.size > 0 &&
                    (0, l.jsx)(u.Y, {
                        targetElementRef: j,
                        layerContext: x.He,
                        renderPopout: y,
                        position: "bottom",
                        align: "right",
                        autoInvert: !1,
                        spacing: 0,
                        children: (e) =>
                            (0, l.jsx)(o.$n, {
                                ...e,
                                buttonRef: j,
                                className: v.Iq,
                                size: o.$n.Sizes.ICON,
                                look: o.$n.Looks.BLANK,
                                children: (0, l.jsx)(h.A, {
                                    className: v.__invalid_overflowIcon,
                                    width: 16,
                                    height: 16,
                                }),
                            }),
                    }),
            }),
        ],
    });
}
function A(e, t) {
    let { tabs: a, initialSelectedTabId: n, onChangeTab: s } = e,
        [r, o] = i.useState(n ?? a[0]?.id);
    return {
        TabBar: i.useCallback(
            () =>
                (0, l.jsx)(j, {
                    tabs: a,
                    selectedTabId: r,
                    onSelectTab: (e) => {
                        o(e), s?.(e);
                    },
                }),
            [r, o, s, ...t],
        ),
        renderSelectedTab: a.find((e) => e.id === r)?.render ?? (() => null),
        selectedTabId: r,
    };
}
