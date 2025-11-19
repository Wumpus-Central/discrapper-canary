n.d(t, { Z: () => s });
var i = n(54381);
n(473749);
var a = n(120356),
    r = n.n(a),
    o = n(481060),
    l = n(436774),
    c = n(279798);
function s(e) {
    let { text: t, className: n, button: a, reducedRightPadding: s = !1 } = e;
    return (0, i.jsxs)("div", {
        className: r()(s ? c.noticeWithoutRightPadding : c.noticeWithRightPadding, n),
        children: [
            (0, i.jsxs)("div", {
                className: c.noticeLeft,
                children: [
                    (0, i.jsx)(o.SrA, {
                        size: "md",
                        className: c.icon,
                        color: l.JX.PREMIUM_TIER_2,
                    }),
                    (0, i.jsx)(o.Text, {
                        className: c.text,
                        variant: "text-md/normal",
                        color: "header-primary",
                        children: t,
                    }),
                ],
            }),
            a,
        ],
    });
}
