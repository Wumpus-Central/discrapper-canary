s.d(t, { A: () => m });
var n = s(627968),
    a = s(64700),
    l = s(148795),
    r = s(53788),
    i = s(939249),
    o = s(192308),
    c = s(834730),
    u = s(145331),
    d = s(670455),
    h = s(985018),
    g = s(491709);
function p(e) {
    let { rating: t, onClick: s } = e,
        o = t === d.P0.BAD ? l.d : r.G,
        c = a.useCallback(() => {
            s(t);
        }, [s, t]);
    return (0, n.jsx)(i.D, {
        onClick: c,
        className: g.zc,
        children: (0, n.jsx)(o, { size: "md", color: "currentColor", className: g.Kk }),
    });
}
let m = function (e) {
    let { searchContext: t, dismissFeedbackEntrypoint: l } = e;
    a.useEffect(() => {
        (0, u.J$)({ searchContext: t });
    }, [t]);
    let r = a.useCallback(
        (e) => {
            l(),
                (0, o.openModalLazy)(async () => {
                    let { default: a } = await s.e("66536").then(s.bind(s, 306088));
                    return (s) => (0, n.jsx)(a, { ...s, searchContext: t, rating: e });
                });
        },
        [l, t],
    );
    return (0, n.jsxs)("div", {
        className: g.kL,
        children: [
            (0, n.jsx)(c.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: h.intl.string(h.t["I+4OJC"]),
            }),
            (0, n.jsxs)("div", {
                className: g.Pt,
                children: [
                    (0, n.jsx)(p, { rating: d.P0.GOOD, onClick: r }),
                    (0, n.jsx)(p, { rating: d.P0.BAD, onClick: r }),
                ],
            }),
        ],
    });
};
