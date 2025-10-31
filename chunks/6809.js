n.d(t, { Z: () => h });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(692547),
    s = n(481060),
    o = n(153867),
    c = n(906732),
    u = n(705262),
    d = n(210887),
    p = n(981631),
    f = n(388032),
    m = n(932720);
let h = function () {
    let { analyticsLocations: e } = (0, c.ZP)(),
        t = (0, l.e7)([d.Z], () => d.Z.theme),
        n = i.useRef(null);
    i.useEffect(() => {
        null == n.current && (n.current = t);
    }, [t]);
    let h = (0, s.dQu)(a.Z.colors.BACKGROUND_BASE_LOW, p.BRd.LIGHT),
        g = (0, s.dQu)(a.Z.colors.BACKGROUND_BASE_LOW, p.BRd.DARKER),
        _ = (0, s.dQu)(a.Z.colors.BACKGROUND_BASE_LOW, p.BRd.MIDNIGHT),
        b = i.useMemo(
            () => [
                {
                    theme: p.BRd.LIGHT,
                    label: f.t.K2sFfo,
                    color: h.hex(),
                },
                {
                    theme: p.BRd.DARKER,
                    label: f.t.b8Cei3,
                    color: g.hex(),
                },
                {
                    theme: p.BRd.MIDNIGHT,
                    label: f.t.Do4ZJx,
                    color: _.hex(),
                },
            ],
            [h, g, _],
        ),
        E = i.useCallback(
            (t) => {
                (0, u.Yk)({
                    isPersisted: !0,
                    analyticsLocations: e,
                    themeName: "default ".concat(t),
                }),
                    (0, o.ZI)({ theme: t });
            },
            [e],
        ),
        O = i.useCallback(() => {
            null != n.current && E(n.current);
        }, [E]);
    return (0, r.jsx)("div", {
        className: m.themeSection,
        children: (0, r.jsxs)("div", {
            className: m.themeSelector,
            children: [
                b.map((e) =>
                    (0, r.jsxs)(
                        "button",
                        {
                            type: "button",
                            className: m.themeOption,
                            onClick: () => E(e.theme),
                            "aria-label": f.intl.string(e.label),
                            children: [
                                (0, r.jsx)("div", {
                                    className: ""
                                        .concat(m.themeCircle, " ")
                                        .concat(t === e.theme ? m.themeCircleSelected : ""),
                                    style: { backgroundColor: e.color },
                                }),
                                (0, r.jsx)("span", {
                                    className: m.themeLabel,
                                    children: f.intl.string(e.label),
                                }),
                            ],
                        },
                        e.theme,
                    ),
                ),
                (0, r.jsx)(s.hU, {
                    onClick: O,
                    "aria-label": f.intl.string(f.t.yBZMsQ),
                    icon: s.DuK,
                    variant: "secondary",
                }),
            ],
        }),
    });
};
