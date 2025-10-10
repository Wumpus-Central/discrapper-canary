n.d(t, { Z: () => g });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(692547),
    o = n(481060),
    s = n(153867),
    c = n(906732),
    u = n(705262),
    d = n(210887),
    p = n(981631),
    f = n(388032),
    h = n(932720);
let g = function () {
    let { analyticsLocations: e } = (0, c.ZP)(),
        t = (0, l.e7)([d.Z], () => d.Z.theme),
        n = i.useRef(null);
    i.useEffect(() => {
        null == n.current && (n.current = t);
    }, [t]);
    let g = (0, o.dQu)(a.Z.colors.BACKGROUND_BASE_LOW, p.BRd.LIGHT),
        m = (0, o.dQu)(a.Z.colors.BACKGROUND_BASE_LOW, p.BRd.DARKER),
        b = (0, o.dQu)(a.Z.colors.BACKGROUND_BASE_LOW, p.BRd.MIDNIGHT),
        _ = i.useMemo(
            () => [
                {
                    theme: p.BRd.LIGHT,
                    label: f.t.K2sFfn,
                    color: g.hex(),
                },
                {
                    theme: p.BRd.DARKER,
                    label: f.t.b8Cei4,
                    color: m.hex(),
                },
                {
                    theme: p.BRd.MIDNIGHT,
                    label: f.t.Do4ZJy,
                    color: b.hex(),
                },
            ],
            [g, m, b],
        ),
        O = i.useCallback(
            (t) => {
                (0, u.Yk)({
                    isPersisted: !0,
                    analyticsLocations: e,
                    themeName: "default ".concat(t),
                }),
                    (0, s.ZI)({ theme: t });
            },
            [e],
        ),
        E = i.useCallback(() => {
            null != n.current && O(n.current);
        }, [O]);
    return (0, r.jsx)("div", {
        className: h.themeSection,
        children: (0, r.jsxs)("div", {
            className: h.themeSelector,
            children: [
                _.map((e) =>
                    (0, r.jsxs)(
                        "button",
                        {
                            type: "button",
                            className: h.themeOption,
                            onClick: () => O(e.theme),
                            "aria-label": f.intl.string(e.label),
                            children: [
                                (0, r.jsx)("div", {
                                    className: ""
                                        .concat(h.themeCircle, " ")
                                        .concat(t === e.theme ? h.themeCircleSelected : ""),
                                    style: { backgroundColor: e.color },
                                }),
                                (0, r.jsx)("span", {
                                    className: h.themeLabel,
                                    children: f.intl.string(e.label),
                                }),
                            ],
                        },
                        e.theme,
                    ),
                ),
                (0, r.jsx)(o.hU, {
                    onClick: E,
                    "aria-label": f.intl.string(f.t.yBZMsb),
                    icon: o.DuK,
                    variant: "secondary",
                }),
            ],
        }),
    });
};
