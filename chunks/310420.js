n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    s = n(934551),
    a = n(397927),
    r = n(145331),
    o = n(670455),
    c = n(985018),
    d = n(356794);
function u(e) {
    let { rating: t, onClick: n } = e,
        r = t === o.P0.BAD ? s.ThumbsDownIcon : s.ThumbsUpIcon,
        c = l.useCallback(() => {
            n(t);
        }, [n, t]);
    return (0, i.jsx)(a.DUT, {
        onClick: c,
        className: d.zc,
        children: (0, i.jsx)(r, { size: "md", color: "currentColor", className: d.Kk }),
    });
}
let h = function (e) {
    let { searchContext: t, dismissFeedbackEntrypoint: s } = e;
    l.useEffect(() => {
        (0, r.J$)({ searchContext: t });
    }, [t]);
    let h = l.useCallback(
        (e) => {
            s(),
                (0, a.mMO)(async () => {
                    let { default: l } = await n.e("66536").then(n.bind(n, 306088));
                    return (n) => (0, i.jsx)(l, { ...n, searchContext: t, rating: e });
                });
        },
        [s, t],
    );
    return (0, i.jsxs)("div", {
        className: d.kL,
        children: [
            (0, i.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: c.intl.string(c.t["I+4OJC"]),
            }),
            (0, i.jsxs)("div", {
                className: d.Pt,
                children: [
                    (0, i.jsx)(u, { rating: o.P0.GOOD, onClick: h }),
                    (0, i.jsx)(u, { rating: o.P0.BAD, onClick: h }),
                ],
            }),
        ],
    });
};
