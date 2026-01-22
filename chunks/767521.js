n.d(t, {
    A: () => A,
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(827734),
    s = n(397927),
    o = n(817281),
    c = n(688810),
    u = n(692798),
    d = n(544028),
    p = n(652215),
    f = n(985018),
    h = n(882773);
let A = function () {
    let { analyticsLocations: e } = (0, c.Ay)(),
        t = (0, l.bG)([d.A], () => d.A.theme),
        n = i.useRef(null);
    i.useEffect(() => {
        null == n.current && (n.current = t);
    }, [t]);
    let A = (0, s.rdh)(a.A.colors.BACKGROUND_BASE_LOW, p.NJ8.LIGHT),
        g = (0, s.rdh)(a.A.colors.BACKGROUND_BASE_LOW, p.NJ8.DARKER),
        m = (0, s.rdh)(a.A.colors.BACKGROUND_BASE_LOW, p.NJ8.MIDNIGHT),
        b = i.useMemo(
            () => [
                {
                    theme: p.NJ8.LIGHT,
                    label: f.t.K2sFfo,
                    color: A.hex(),
                },
                {
                    theme: p.NJ8.DARKER,
                    label: f.t.b8Cei3,
                    color: g.hex(),
                },
                {
                    theme: p.NJ8.MIDNIGHT,
                    label: f.t.Do4ZJx,
                    color: m.hex(),
                },
            ],
            [A, g, m],
        ),
        _ = i.useCallback(
            (t) => {
                (0, u.X8)({
                    isPersisted: !0,
                    analyticsLocations: e,
                    themeName: "default ".concat(t),
                }),
                    (0, o.u_)({
                        theme: t,
                    });
            },
            [e],
        ),
        E = i.useCallback(() => {
            null != n.current && _(n.current);
        }, [_]);
    return (0, r.jsx)("div", {
        className: h.N,
        children: (0, r.jsxs)("div", {
            className: h.t7,
            children: [
                b.map((e) =>
                    (0, r.jsxs)(
                        "button",
                        {
                            type: "button",
                            className: h.Du,
                            onClick: () => _(e.theme),
                            "aria-label": f.intl.string(e.label),
                            children: [
                                (0, r.jsx)("div", {
                                    className: "".concat(h.WT, " ").concat(t === e.theme ? h.TA : ""),
                                    style: {
                                        backgroundColor: e.color,
                                    },
                                }),
                                (0, r.jsx)("span", {
                                    className: h.i,
                                    children: f.intl.string(e.label),
                                }),
                            ],
                        },
                        e.theme,
                    ),
                ),
                (0, r.jsx)(s.K0, {
                    onClick: E,
                    "aria-label": f.intl.string(f.t.yBZMsQ),
                    icon: s.fNY,
                    variant: "secondary",
                }),
            ],
        }),
    });
};
