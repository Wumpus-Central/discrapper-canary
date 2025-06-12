n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(639119),
    l = n(474936),
    c = n(388032),
    u = n(856045);
let d = (e) => {
    let { isTier2: t, discountAmount: n } = e,
        i = (0, s.N)(),
        d = null != i && i.trial_id === l.a7,
        _ = c.intl.string(c.t.IBYG5e);
    return (
        void 0 !== n ? (_ = c.intl.formatToPlainString(c.t.iiLbvr, { percent: n })) : d && (_ = c.intl.string(c.t.gtNqJS)),
        (0, r.jsx)('div', {
            className: a()(u.badgeContainer, t ? u.tier2 : u.tier0),
            children: (0, r.jsx)(o.Text, {
                variant: 'text-xxs/bold',
                className: u.badgeText,
                children: _
            })
        })
    );
};
