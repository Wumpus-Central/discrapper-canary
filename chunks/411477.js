n.d(e, { Z: () => d });
var i = n(255367);
n(73800);
var o = n(120356),
    a = n.n(o),
    r = n(481060),
    l = n(436774),
    s = n(237844);
function d(t) {
    let { text: e, className: n, button: o, reducedRightPadding: d = !1 } = t;
    return (0, i.jsxs)('div', {
        className: a()(d ? s.noticeWithoutRightPadding : s.noticeWithRightPadding, n),
        children: [
            (0, i.jsxs)('div', {
                className: s.noticeLeft,
                children: [
                    (0, i.jsx)(r.SrA, {
                        size: 'md',
                        className: s.icon,
                        color: l.JX.PREMIUM_TIER_2
                    }),
                    (0, i.jsx)(r.Text, {
                        className: s.text,
                        variant: 'text-md/normal',
                        color: 'header-primary',
                        children: e
                    })
                ]
            }),
            o
        ]
    });
}
