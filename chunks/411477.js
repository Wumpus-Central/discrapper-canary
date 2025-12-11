n.d(t, { Z: () => c });
var o = n(54381);
n(473749);
var i = n(120356),
    r = n.n(i),
    a = n(481060),
    l = n(436774),
    s = n(991150);
function c(e) {
    let { text: t, className: n, button: i, reducedRightPadding: c = !1 } = e;
    return (0, o.jsxs)("div", {
        className: r()(c ? s.noticeWithoutRightPadding : s.noticeWithRightPadding, n),
        children: [
            (0, o.jsxs)("div", {
                className: s.noticeLeft,
                children: [
                    (0, o.jsx)(a.SrA, {
                        size: "md",
                        className: s.icon,
                        color: l.JX.PREMIUM_TIER_2,
                    }),
                    (0, o.jsx)(a.Text, {
                        className: s.text,
                        variant: "text-md/normal",
                        color: "text-strong",
                        children: t,
                    }),
                ],
            }),
            i,
        ],
    });
}
