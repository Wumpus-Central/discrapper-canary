n.d(t, { Ay: () => b, BW: () => _, fu: () => g });
var a,
    i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    o = n(421380),
    d = n(397927),
    c = n(765671),
    u = n(61780),
    m = n(403362),
    h = n(867041),
    p = n(786574),
    x = n(661251),
    g =
        (((a = {}).NONE = ""),
        (a.DCF = "DCF"),
        (a.EXPERIMENTS = "Experiments"),
        (a.EVENTS = "Events"),
        (a.PREMIUM = "Premium"),
        (a.QUESTS = "Quests"),
        (a.BILLING = "Billing"),
        (a.SHOP = "Shop"),
        (a.USERS = "Users"),
        (a.GUILDS = "Guilds"),
        (a.UI = "UI"),
        (a.GAMES = "Games"),
        (a.AUDIO_VIDEO = "Audio / Video"),
        (a.DEVELOPMENT = "Development"),
        (a.BOOSTING = "Boosting"),
        a);
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
    f = s.forwardRef(function (e, t) {
        let { id: n, selected: a, onClick: s, children: l } = e;
        return (0, i.jsx)(d.DUT, {
            className: r()(x.V3, { [x.wH]: a }),
            "data-tab-id": n,
            innerRef: t,
            onClick: s,
            children: l,
        });
    });
function v(e) {
    let { tabs: t, selectedTabId: n, onSelectTab: a } = e,
        l = s.useRef(new Map()),
        [r, g] = s.useState(() => new Set()),
        { ref: _, width: v } = (0, c.Ay)(),
        b = s.useRef(null),
        j = (0, p.N)(t, a);
    s.useEffect(() => {
        if (null == v) return;
        let e = new Set(),
            a = v ?? 0;
        for (let i of ((a -= l.current.get(n)?.getBoundingClientRect().width ?? 0), t))
            i.id !== n && (a -= l.current.get(i.id)?.getBoundingClientRect().width ?? 0) < 0 && e.add(i.id);
        g(e);
    }, [t, v, _, n]);
    let A = s.useCallback(
        (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(d.W1t, {
                "data-menu-migrated": !0,
                navId: "devtools-overflow",
                variant: "fixed",
                onClose: t,
                "aria-label": "Overflowed DevTools Tabs",
                onSelect: t,
                children: j,
            });
        },
        [j],
    );
    return (0, i.jsxs)("div", {
        className: x.Mv,
        children: [
            (0, i.jsxs)("div", {
                className: x.$H,
                ref: _,
                children: [
                    t
                        .map((e) => {
                            let { id: t, name: s } = e;
                            if (!r.has(t))
                                return (0, i.jsx)(
                                    f,
                                    { id: t, selected: n === t, onClick: n !== t ? () => a(t) : void 0, children: s },
                                    t,
                                );
                        })
                        .filter(m.Vq),
                    (0, i.jsx)("div", {
                        className: x.g,
                        children: t.map((e) => {
                            let { id: t, name: s } = e;
                            return (0, i.jsx)(
                                f,
                                {
                                    id: t,
                                    selected: n === t,
                                    ref: (e) => {
                                        l.current.set(t, e);
                                    },
                                    onClick: n !== t ? () => a(t) : void 0,
                                    children: s,
                                },
                                t,
                            );
                        }),
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: x.MK,
                children:
                    r.size > 0 &&
                    (0, i.jsx)(d.YNO, {
                        targetElementRef: b,
                        layerContext: h.He,
                        renderPopout: A,
                        position: "bottom",
                        align: "right",
                        autoInvert: !1,
                        spacing: 0,
                        children: (e) =>
                            (0, i.jsx)(o.$n, {
                                ...e,
                                buttonRef: b,
                                className: x.Iq,
                                size: o.$n.Sizes.ICON,
                                look: o.$n.Looks.BLANK,
                                children: (0, i.jsx)(u.A, {
                                    className: x.__invalid_overflowIcon,
                                    width: 16,
                                    height: 16,
                                }),
                            }),
                    }),
            }),
        ],
    });
}
function b(e, t) {
    let { tabs: n, initialSelectedTabId: a, onChangeTab: l } = e,
        [r, o] = s.useState(a ?? n[0]?.id);
    return {
        TabBar: s.useCallback(
            () =>
                (0, i.jsx)(v, {
                    tabs: n,
                    selectedTabId: r,
                    onSelectTab: (e) => {
                        o(e), l?.(e);
                    },
                }),
            [r, o, l, ...t],
        ),
        renderSelectedTab: n.find((e) => e.id === r)?.render ?? (() => null),
        selectedTabId: r,
    };
}
