"use strict";
n.d(t, { A: () => h });
var i = n(627968),
    s = n(64700),
    l = n(934551),
    r = n(397927),
    a = n(145331),
    o = n(670455),
    c = n(985018),
    d = n(508134);
function u(e) {
    let { rating: t, onClick: n } = e,
        a = t === o.P0.BAD ? l.ThumbsDownIcon : l.ThumbsUpIcon,
        c = s.useCallback(() => {
            n(t);
        }, [n, t]);
    return (0, i.jsx)(r.DUT, {
        onClick: c,
        className: d.zc,
        children: (0, i.jsx)(a, { size: "md", color: "currentColor", className: d.Kk }),
    });
}
let h = function (e) {
    let { searchContext: t, dismissFeedbackEntrypoint: l } = e;
    s.useEffect(() => {
        (0, a.J$)({ searchContext: t });
    }, [t]);
    let h = s.useCallback(
        (e) => {
            l(),
                (0, r.mMO)(async () => {
                    let { default: s } = await n.e("66536").then(n.bind(n, 306088));
                    return (n) => (0, i.jsx)(s, { ...n, searchContext: t, rating: e });
                });
        },
        [l, t],
    );
    return (0, i.jsxs)("div", {
        className: d.kL,
        children: [
            (0, i.jsx)(r.Text, {
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
