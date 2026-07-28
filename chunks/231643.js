a.d(t, { Ay: () => C, BW: () => y, fu: () => b });
var n,
    l = a(477900),
    i = a(582128),
    s = a(503698),
    r = a.n(s),
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
    f = a(221694),
    b =
        (((n = {}).NONE = ""),
        (n.DCF = "DCF"),
        (n.EXPERIMENTS = "Experiments"),
        (n.EVENTS = "Events"),
        (n.PREMIUM = "Premium"),
        (n.QUESTS = "Quests"),
        (n.BILLING = "Billing"),
        (n.SHOP = "Shop"),
        (n.STOREFRONT = "Storefront"),
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
        "Storefront",
        "Users",
        "Guilds",
        "UI",
        "Games",
        "Boosting",
        "Audio / Video",
        "Development",
    ],
    E = i.forwardRef(function (e, t) {
        let { id: a, selected: n, onClick: i, children: s } = e;
        return (0, l.jsx)(d.D, {
            className: r()(f.V3, { [f.wH]: n }),
            "data-tab-id": a,
            innerRef: t,
            onClick: i,
            children: s,
        });
    });
function _(e) {
    let { tabs: t, selectedTabId: a, onSelectTab: n } = e,
        s = i.useRef(new Map()),
        [r, d] = i.useState(() => new Set()),
        { ref: b, width: y } = (0, h.Ay)(),
        _ = i.useRef(null),
        C = (0, j.N)(t, n),
        S = (0, x.A)();
    i.useEffect(() => {
        if (null == y) return;
        let e = new Set(),
            n = y ?? 0;
        for (let l of ((n -= s.current.get(a)?.getBoundingClientRect().width ?? 0), t))
            l.id !== a && (n -= s.current.get(l.id)?.getBoundingClientRect().width ?? 0) < 0 && e.add(l.id);
        d(e);
    }, [t, y, b, a]);
    let N = i.useCallback(
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
        className: f.Mv,
        children: [
            (0, l.jsxs)("div", {
                className: f.$H,
                ref: b,
                children: [
                    t
                        .map((e) => {
                            let { id: t, name: i } = e;
                            if (!r.has(t))
                                return (0, l.jsx)(
                                    E,
                                    { id: t, selected: a === t, onClick: a !== t ? () => n(t) : void 0, children: i },
                                    t,
                                );
                        })
                        .filter(g.Vq),
                    (0, l.jsx)("div", {
                        className: f.g,
                        children: t.map((e) => {
                            let { id: t, name: i } = e;
                            return (0, l.jsx)(
                                E,
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
                className: f.MK,
                children:
                    (r.size > 0 || null != S) &&
                    (0, l.jsx)(m.Y, {
                        targetElementRef: _,
                        layerContext: v.He,
                        renderPopout: N,
                        position: "bottom",
                        align: "right",
                        autoInvert: !1,
                        spacing: 0,
                        children: (e) =>
                            (0, l.jsx)(o.$n, {
                                ...e,
                                buttonRef: _,
                                className: f.Iq,
                                size: o.$n.Sizes.ICON,
                                look: o.$n.Looks.BLANK,
                                children: (0, l.jsx)(p.A, {
                                    className: f.__invalid_overflowIcon,
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
    let { tabs: a, initialSelectedTabId: n, onChangeTab: s } = e,
        [r, o] = i.useState(n ?? a[0]?.id);
    return {
        TabBar: i.useCallback(
            () =>
                (0, l.jsx)(_, {
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
