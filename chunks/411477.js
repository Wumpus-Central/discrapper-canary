n.d(t, { Z: () => s });
var i = n(54381);
n(473749);
var a = n(120356),
    o = n.n(a),
    r = n(481060),
    l = n(436774),
    c = n(991150);
function s(e) {
    let { text: t, className: n, button: a, reducedRightPadding: s = !1 } = e;
    return (0, i.jsxs)("div", {
        className: o()(s ? c.noticeWithoutRightPadding : c.noticeWithRightPadding, n),
        children: [
            (0, i.jsxs)("div", {
                className: c.noticeLeft,
                children: [
                    (0, i.jsx)(r.SrA, {
                        size: "md",
                        className: c.icon,
                        color: l.JX.PREMIUM_TIER_2,
                    }),
                    (0, i.jsx)(r.Text, {
                        className: c.text,
                        variant: "text-md/normal",
                        color: "text-strong",
                        children: t,
                    }),
                ],
            }),
            a,
        ],
    });
}
