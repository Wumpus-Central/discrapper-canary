s.d(t, { A: () => E });
var n = s(627968),
    l = s(64700),
    a = s(311907),
    r = s(827734),
    i = s(602853),
    o = s(408278),
    c = s(663417),
    u = s(817281),
    d = s(688810),
    _ = s(692798),
    m = s(544028),
    h = s(652215),
    x = s(985018),
    f = s(398876);
let E = function () {
    let { analyticsLocations: e } = (0, d.Ay)(),
        t = (0, a.bG)([m.A], () => m.A.theme),
        s = l.useRef(null);
    l.useEffect(() => {
        null == s.current && (s.current = t);
    }, [t]);
    let E = (0, i.r)(r.A.colors.BACKGROUND_BASE_LOW, h.NJ8.LIGHT),
        p = (0, i.r)(r.A.colors.BACKGROUND_BASE_LOW, h.NJ8.DARKER),
        g = (0, i.r)(r.A.colors.BACKGROUND_BASE_LOW, h.NJ8.MIDNIGHT),
        A = l.useMemo(
            () => [
                { theme: h.NJ8.LIGHT, label: x.t.K2sFfo, color: E.hex() },
                { theme: h.NJ8.DARKER, label: x.t.b8Cei3, color: p.hex() },
                { theme: h.NJ8.MIDNIGHT, label: x.t.Do4ZJx, color: g.hex() },
            ],
            [E, p, g],
        ),
        C = l.useCallback(
            (t) => {
                (0, _.X8)({ isPersisted: !0, analyticsLocations: e, themeName: `default ${t}` }),
                    (0, u.u_)({ theme: t });
            },
            [e],
        ),
        b = l.useCallback(() => {
            null != s.current && C(s.current);
        }, [C]);
    return (0, n.jsx)("div", {
        className: f.N,
        children: (0, n.jsxs)("div", {
            className: f.t7,
            children: [
                A.map((e) =>
                    (0, n.jsxs)(
                        "button",
                        {
                            type: "button",
                            className: f.Du,
                            onClick: () => C(e.theme),
                            "aria-label": x.intl.string(e.label),
                            children: [
                                (0, n.jsx)("div", {
                                    className: `${f.WT} ${t === e.theme ? f.TA : ""}`,
                                    style: { backgroundColor: e.color },
                                }),
                                (0, n.jsx)("span", { className: f.i, children: x.intl.string(e.label) }),
                            ],
                        },
                        e.theme,
                    ),
                ),
                (0, n.jsx)(o.K, {
                    onClick: b,
                    "aria-label": x.intl.string(x.t.yBZMsQ),
                    icon: c.f,
                    variant: "secondary",
                }),
            ],
        }),
    });
};
