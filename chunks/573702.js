n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(639119),
    a = n(947390),
    o = n(474936),
    s = n(388032),
    l = n(358794);
let c = (e) => {
    let { discountAmount: t } = e,
        n = (0, i.N)(),
        c = null != n && n.trial_id === o.a7,
        u = s.intl.string(s.t.IBYG5U);
    return (
        void 0 !== t
            ? (u = s.intl.formatToPlainString(s.t.iiLbvu, { percent: t }))
            : c && (u = s.intl.string(s.t.gtNqJQ)),
        (0, r.jsx)("div", {
            className: l.badgeContainer,
            children: (0, r.jsx)(a.E, { text: u }),
        })
    );
};
