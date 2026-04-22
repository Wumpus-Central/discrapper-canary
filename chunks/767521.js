s.d(t, { A: () => b });
var n = s(627968),
    l = s(64700),
    a = s(311907),
    r = s(827734),
    i = s(602853),
    o = s(408278),
    c = s(663417),
    u = s(817281),
    d = s(688810),
    m = s(692798),
    _ = s(544028),
    h = s(652215),
    x = s(985018),
    f = s(398876);
let b = function () {
    let { analyticsLocations: e } = (0, d.Ay)(),
        t = (0, a.bG)([_.A], () => _.A.theme),
        s = l.useRef(null);
    l.useEffect(() => {
        null == s.current && (s.current = t);
    }, [t]);
    let b = (0, i.r)(r.A.colors.BACKGROUND_BASE_LOW, h.NJ8.LIGHT),
        p = (0, i.r)(r.A.colors.BACKGROUND_BASE_LOW, h.NJ8.DARKER),
        A = (0, i.r)(r.A.colors.BACKGROUND_BASE_LOW, h.NJ8.MIDNIGHT),
        g = l.useMemo(
            () => [
                { theme: h.NJ8.LIGHT, label: x.t.K2sFfo, color: b.hex() },
                { theme: h.NJ8.DARKER, label: x.t.b8Cei3, color: p.hex() },
                { theme: h.NJ8.MIDNIGHT, label: x.t.Do4ZJx, color: A.hex() },
            ],
            [b, p, A],
        ),
        E = l.useCallback(
            (t) => {
                (0, m.X8)({ isPersisted: !0, analyticsLocations: e, themeName: `default ${t}` }),
                    (0, u.u_)({ theme: t });
            },
            [e],
        ),
        C = l.useCallback(() => {
            null != s.current && E(s.current);
        }, [E]);
    return (0, n.jsx)("div", {
        className: f.N,
        children: (0, n.jsxs)("div", {
            className: f.t7,
            children: [
                g.map((e) =>
                    (0, n.jsxs)(
                        "button",
                        {
                            type: "button",
                            className: f.Du,
                            onClick: () => E(e.theme),
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
                    onClick: C,
                    "aria-label": x.intl.string(x.t.yBZMsQ),
                    icon: c.f,
                    variant: "secondary",
                }),
            ],
        }),
    });
};
