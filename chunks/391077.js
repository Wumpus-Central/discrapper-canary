n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    r = n(481060),
    a = n(927359),
    o = n(74538),
    c = n(474936),
    d = n(388032),
    u = n(724077);
function h(e) {
    let { showChargingUpState: t, rowValueText: n, endsAt: s, fractionalState: a, activationDate: o } = e,
        h = t ? d.intl.string(d.t['hT6i//']) : d.intl.string(d.t['3G0CTE']),
        m = t ? (void 0 === o ? null : d.intl.format(d.t['0Vwb/v'], { activateDate: o })) : a === c.a$.FP_SUB_PAUSED ? d.intl.format(d.t.MMvaIC, { resumeDate: s.toDate() }) : null,
        g = l()({
            [u.fractionalUnactivatedPill]: t,
            [u.fractionalTimeRemainingPill]: !t
        }),
        x = l()({
            [u.fractionalUnactivatedPillText]: t,
            [u.fractionalTimeRemainingPillText]: !t
        }),
        _ = l()({ [u.fractionalTimeRemainingRowHeader]: !t });
    return (0, i.jsxs)('div', {
        className: u.fractionalTimeRemainingRow,
        children: [
            (0, i.jsxs)('div', {
                className: u.fractionalTimeRemainingRowDetails,
                children: [
                    (0, i.jsx)(r.X6q, {
                        variant: 'heading-md/semibold',
                        className: _,
                        children: h
                    }),
                    null !== m &&
                        (0, i.jsx)(r.Text, {
                            variant: 'text-sm/normal',
                            children: m
                        })
                ]
            }),
            (0, i.jsx)('div', {
                className: u.fractionalTimeRemainingPillWrapper,
                children: (0, i.jsx)('div', {
                    className: g,
                    children: (0, i.jsx)(r.Text, {
                        variant: 'text-sm/semibold',
                        className: x,
                        children: n
                    })
                })
            })
        ]
    });
}
let m = function (e) {
    let { fractionalPremiumInfo: t, className: n, activationDate: s } = e,
        c = (0, o.Am)(t),
        m = c.length > 0,
        g = (0, a.Z)(t.endsAt, a.a.SHORT_TIME),
        x = m ? c : g;
    return (0, i.jsx)('div', {
        children: (0, i.jsxs)('div', {
            className: l()(n, u.fractionalPremiumAccountCredit),
            children: [
                (0, i.jsx)('div', {
                    className: u.accountCreditsContainer,
                    children: (0, i.jsxs)('div', {
                        className: u.accountCreditRow,
                        children: [
                            (0, i.jsx)('div', {
                                className: u.iconBackgroundFractional,
                                children: (0, i.jsx)(r.SrA, {
                                    size: 'md',
                                    color: 'white',
                                    className: u.iconFractional
                                })
                            }),
                            (0, i.jsx)('div', {
                                className: u.rowDetails,
                                children: (0, i.jsx)(r.X6q, {
                                    variant: 'heading-md/semibold',
                                    children: d.intl.string(d.t.DFMPWV)
                                })
                            }),
                            (0, i.jsx)(r.Text, {
                                className: u.rowCreditCount,
                                variant: 'text-md/semibold',
                                children: c.length > 0 ? c : d.intl.string(d.t['B66Z+f'])
                            })
                        ]
                    })
                }),
                (0, i.jsx)(h, {
                    showChargingUpState: m,
                    rowValueText: x,
                    endsAt: t.endsAt,
                    fractionalState: t.fractionalState,
                    activationDate: s
                })
            ]
        })
    });
};
