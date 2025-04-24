n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(481060),
    a = n(927359),
    o = n(74538),
    c = n(474936),
    d = n(388032),
    u = n(846706);
function m(e) {
    let { showChargingUpState: t, rowValueText: n, endsAt: r, fractionalState: a, activationDate: o } = e,
        m = t ? d.intl.string(d.t['hT6i//']) : d.intl.string(d.t['3G0CTE']),
        p = t ? (void 0 === o ? null : d.intl.format(d.t['0Vwb/v'], { activateDate: o })) : a === c.a$.FP_SUB_PAUSED ? d.intl.format(d.t.MMvaIC, { resumeDate: r.toDate() }) : null,
        g = s()({
            [u.fractionalUnactivatedPill]: t,
            [u.fractionalTimeRemainingPill]: !t
        }),
        h = s()({
            [u.fractionalUnactivatedPillText]: t,
            [u.fractionalTimeRemainingPillText]: !t
        }),
        f = s()({ [u.fractionalTimeRemainingRowHeader]: !t });
    return (0, i.jsxs)('div', {
        className: u.fractionalTimeRemainingRow,
        children: [
            (0, i.jsxs)('div', {
                className: u.fractionalTimeRemainingRowDetails,
                children: [
                    (0, i.jsx)(l.X6q, {
                        variant: 'heading-md/semibold',
                        className: f,
                        children: m
                    }),
                    null !== p &&
                        (0, i.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            children: p
                        })
                ]
            }),
            (0, i.jsx)('div', {
                className: u.fractionalTimeRemainingPillWrapper,
                children: (0, i.jsx)('div', {
                    className: g,
                    children: (0, i.jsx)(l.Text, {
                        variant: 'text-sm/semibold',
                        className: h,
                        children: n
                    })
                })
            })
        ]
    });
}
let p = function (e) {
    let { fractionalPremiumInfo: t, className: n, activationDate: r } = e,
        c = (0, o.Am)(t),
        p = c.length > 0,
        g = (0, a.Z)(t.endsAt, a.a.SHORT_TIME),
        h = p ? c : g;
    return (0, i.jsx)('div', {
        children: (0, i.jsxs)('div', {
            className: s()(n, u.fractionalPremiumAccountCredit),
            children: [
                (0, i.jsx)('div', {
                    className: u.accountCreditsContainer,
                    children: (0, i.jsxs)('div', {
                        className: u.accountCreditRow,
                        children: [
                            (0, i.jsx)('div', {
                                className: u.iconBackgroundFractional,
                                children: (0, i.jsx)(l.SrA, {
                                    size: 'md',
                                    color: 'white',
                                    className: u.iconFractional
                                })
                            }),
                            (0, i.jsx)('div', {
                                className: u.rowDetails,
                                children: (0, i.jsx)(l.X6q, {
                                    variant: 'heading-md/semibold',
                                    children: d.intl.string(d.t.DFMPWV)
                                })
                            }),
                            (0, i.jsx)(l.Text, {
                                className: u.rowCreditCount,
                                variant: 'text-md/semibold',
                                children: c.length > 0 ? c : d.intl.string(d.t['B66Z+f'])
                            })
                        ]
                    })
                }),
                (0, i.jsx)(m, {
                    showChargingUpState: p,
                    rowValueText: h,
                    endsAt: t.endsAt,
                    fractionalState: t.fractionalState,
                    activationDate: r
                })
            ]
        })
    });
};
