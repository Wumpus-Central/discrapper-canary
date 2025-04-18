n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(481060),
    l = n(927359),
    o = n(74538),
    c = n(474936),
    d = n(388032),
    u = n(846706);
function m(e) {
    let { showChargingUpState: t, rowValueText: n, endsAt: i, fractionalState: l, activationDate: o } = e,
        m = t ? d.NW.string(d.t['hT6i//']) : d.NW.string(d.t['3G0CTE']),
        g = t ? (void 0 === o ? null : d.NW.format(d.t['0Vwb/v'], { activateDate: o })) : l === c.a$.FP_SUB_PAUSED ? d.NW.format(d.t.MMvaIC, { resumeDate: i.toDate() }) : null,
        p = s()({
            [u.fractionalUnactivatedPill]: t,
            [u.fractionalTimeRemainingPill]: !t
        }),
        h = s()({
            [u.fractionalUnactivatedPillText]: t,
            [u.fractionalTimeRemainingPillText]: !t
        }),
        f = s()({ [u.fractionalTimeRemainingRowHeader]: !t });
    return (0, r.jsxs)('div', {
        className: u.fractionalTimeRemainingRow,
        children: [
            (0, r.jsxs)('div', {
                className: u.fractionalTimeRemainingRowDetails,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: 'heading-md/semibold',
                        className: f,
                        children: m
                    }),
                    null !== g &&
                        (0, r.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            children: g
                        })
                ]
            }),
            (0, r.jsx)('div', {
                className: u.fractionalTimeRemainingPillWrapper,
                children: (0, r.jsx)('div', {
                    className: p,
                    children: (0, r.jsx)(a.Text, {
                        variant: 'text-sm/semibold',
                        className: h,
                        children: n
                    })
                })
            })
        ]
    });
}
let g = function (e) {
    let { fractionalPremiumInfo: t, className: n, activationDate: i } = e,
        c = (0, o.Am)(t),
        g = c.length > 0,
        p = (0, l.Z)(t.endsAt, l.a.SHORT_TIME),
        h = g ? c : p;
    return (0, r.jsx)('div', {
        children: (0, r.jsxs)('div', {
            className: s()(n, u.fractionalPremiumAccountCredit),
            children: [
                (0, r.jsx)('div', {
                    className: u.accountCreditsContainer,
                    children: (0, r.jsxs)('div', {
                        className: u.accountCreditRow,
                        children: [
                            (0, r.jsx)('div', {
                                className: u.iconBackgroundFractional,
                                children: (0, r.jsx)(a.SrA, {
                                    size: 'md',
                                    color: 'white',
                                    className: u.iconFractional
                                })
                            }),
                            (0, r.jsx)('div', {
                                className: u.rowDetails,
                                children: (0, r.jsx)(a.X6q, {
                                    variant: 'heading-md/semibold',
                                    children: d.NW.string(d.t.DFMPWV)
                                })
                            }),
                            (0, r.jsx)(a.Text, {
                                className: u.rowCreditCount,
                                variant: 'text-md/semibold',
                                children: c.length > 0 ? c : d.NW.string(d.t['B66Z+f'])
                            })
                        ]
                    })
                }),
                (0, r.jsx)(m, {
                    showChargingUpState: g,
                    rowValueText: h,
                    endsAt: t.endsAt,
                    fractionalState: t.fractionalState,
                    activationDate: i
                })
            ]
        })
    });
};
