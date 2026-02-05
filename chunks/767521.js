n.d(t, { A: () => m });
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(827734),
    s = n(397927),
    o = n(817281),
    d = n(688810),
    c = n(692798),
    u = n(544028),
    A = n(652215),
    h = n(985018),
    _ = n(882773);
let m = function () {
    let { analyticsLocations: e } = (0, d.Ay)(),
        t = (0, a.bG)([u.A], () => u.A.theme),
        n = r.useRef(null);
    r.useEffect(() => {
        null == n.current && (n.current = t);
    }, [t]);
    let m = (0, s.rdh)(l.A.colors.BACKGROUND_BASE_LOW, A.NJ8.LIGHT),
        p = (0, s.rdh)(l.A.colors.BACKGROUND_BASE_LOW, A.NJ8.DARKER),
        g = (0, s.rdh)(l.A.colors.BACKGROUND_BASE_LOW, A.NJ8.MIDNIGHT),
        E = r.useMemo(
            () => [
                { theme: A.NJ8.LIGHT, label: h.t.K2sFfo, color: m.hex() },
                { theme: A.NJ8.DARKER, label: h.t.b8Cei3, color: p.hex() },
                { theme: A.NJ8.MIDNIGHT, label: h.t.Do4ZJx, color: g.hex() },
            ],
            [m, p, g],
        ),
        f = r.useCallback(
            (t) => {
                (0, c.X8)({ isPersisted: !0, analyticsLocations: e, themeName: `default ${t}` }),
                    (0, o.u_)({ theme: t });
            },
            [e],
        ),
        I = r.useCallback(() => {
            null != n.current && f(n.current);
        }, [f]);
    return (0, i.jsx)("div", {
        className: _.N,
        children: (0, i.jsxs)("div", {
            className: _.t7,
            children: [
                E.map((e) =>
                    (0, i.jsxs)(
                        "button",
                        {
                            type: "button",
                            className: _.Du,
                            onClick: () => f(e.theme),
                            "aria-label": h.intl.string(e.label),
                            children: [
                                (0, i.jsx)("div", {
                                    className: `${_.WT} ${t === e.theme ? _.TA : ""}`,
                                    style: { backgroundColor: e.color },
                                }),
                                (0, i.jsx)("span", { className: _.i, children: h.intl.string(e.label) }),
                            ],
                        },
                        e.theme,
                    ),
                ),
                (0, i.jsx)(s.K0, {
                    onClick: I,
                    "aria-label": h.intl.string(h.t.yBZMsQ),
                    icon: s.fNY,
                    variant: "secondary",
                }),
            ],
        }),
    });
};
