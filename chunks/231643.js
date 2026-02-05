n.d(t, { Ay: () => b, BW: () => _, fu: () => g });
var a,
    s = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    o = n(421380),
    d = n(397927),
    c = n(765671),
    u = n(61780),
    m = n(403362),
    h = n(867041),
    x = n(786574),
    p = n(661251),
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
let _ = [
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
    f = i.forwardRef(function (e, t) {
        let { id: n, selected: a, onClick: i, children: l } = e;
        return (0, s.jsx)(d.DUT, {
            className: r()(p.V3, { [p.wH]: a }),
            "data-tab-id": n,
            innerRef: t,
            onClick: i,
            children: l,
        });
    });
function v(e) {
    let { tabs: t, selectedTabId: n, onSelectTab: a } = e,
        l = i.useRef(new Map()),
        [r, g] = i.useState(() => new Set()),
        { ref: _, width: v } = (0, c.Ay)(),
        b = i.useRef(null),
        j = (0, x.N)(t, a);
    i.useEffect(() => {
        if (null == v) return;
        let e = new Set(),
            a = v ?? 0;
        for (let s of ((a -= l.current.get(n)?.getBoundingClientRect().width ?? 0), t))
            s.id !== n && (a -= l.current.get(s.id)?.getBoundingClientRect().width ?? 0) < 0 && e.add(s.id);
        g(e);
    }, [t, v, _, n]);
    let A = i.useCallback(
        (e) => {
            let { closePopout: t } = e;
            return (0, s.jsx)(d.W1t, {
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
    return (0, s.jsxs)("div", {
        className: p.Mv,
        children: [
            (0, s.jsxs)("div", {
                className: p.$H,
                ref: _,
                children: [
                    t
                        .map((e) => {
                            let { id: t, name: i } = e;
                            if (!r.has(t))
                                return (0, s.jsx)(
                                    f,
                                    { id: t, selected: n === t, onClick: n !== t ? () => a(t) : void 0, children: i },
                                    t,
                                );
                        })
                        .filter(m.Vq),
                    (0, s.jsx)("div", {
                        className: p.g,
                        children: t.map((e) => {
                            let { id: t, name: i } = e;
                            return (0, s.jsx)(
                                f,
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
            (0, s.jsx)("div", {
                className: p.MK,
                children:
                    r.size > 0 &&
                    (0, s.jsx)(d.YNO, {
                        targetElementRef: b,
                        layerContext: h.He,
                        renderPopout: A,
                        position: "bottom",
                        align: "right",
                        autoInvert: !1,
                        spacing: 0,
                        children: (e) =>
                            (0, s.jsx)(o.$n, {
                                ...e,
                                buttonRef: b,
                                className: p.Iq,
                                size: o.$n.Sizes.ICON,
                                look: o.$n.Looks.BLANK,
                                children: (0, s.jsx)(u.A, {
                                    className: p.__invalid_overflowIcon,
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
        [r, o] = i.useState(a ?? n[0]?.id);
    return {
        TabBar: i.useCallback(
            () =>
                (0, s.jsx)(v, {
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
