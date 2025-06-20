n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(639119),
    a = n(640698),
    o = n(474936),
    s = n(388032),
    l = n(856045);
let c = (e) => {
    let { discountAmount: t } = e,
        n = (0, i.N)(),
        c = null != n && n.trial_id === o.a7,
        u = s.intl.string(s.t.IBYG5e);
    return (
        void 0 !== t ? (u = s.intl.formatToPlainString(s.t.iiLbvr, { percent: t })) : c && (u = s.intl.string(s.t.gtNqJS)),
        (0, r.jsx)('div', {
            className: l.badgeContainer,
            children: (0, r.jsx)(a.F, { text: u })
        })
    );
};
