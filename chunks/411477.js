i.d(e, { Z: () => d });
var n = i(54381);
i(473749);
var a = i(120356),
    r = i.n(a),
    o = i(481060),
    l = i(436774),
    s = i(619598);
function d(t) {
    let { text: e, className: i, button: a, reducedRightPadding: d = !1 } = t;
    return (0, n.jsxs)("div", {
        className: r()(d ? s.noticeWithoutRightPadding : s.noticeWithRightPadding, i),
        children: [
            (0, n.jsxs)("div", {
                className: s.noticeLeft,
                children: [
                    (0, n.jsx)(o.SrA, {
                        size: "md",
                        className: s.icon,
                        color: l.JX.PREMIUM_TIER_2,
                    }),
                    (0, n.jsx)(o.Text, {
                        className: s.text,
                        variant: "text-md/normal",
                        color: "header-primary",
                        children: e,
                    }),
                ],
            }),
            a,
        ],
    });
}
