var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    a = n(481060),
    l = n(927359),
    o = n(74538),
    c = n(474936),
    d = n(388032),
    u = n(461538);
function m(e) {
    let { showChargingUpState: t, rowValueText: n, endsAt: s, fractionalState: l, activationDate: o } = e,
        m = t ? d.intl.string(d.t['hT6i//']) : d.intl.string(d.t['3G0CTE']),
        g = t ? (void 0 === o ? null : d.intl.format(d.t['0Vwb/v'], { activateDate: o })) : l === c.a$.FP_SUB_PAUSED ? d.intl.format(d.t.MMvaIC, { resumeDate: s.toDate() }) : null,
        h = r()({
            [u.fractionalUnactivatedPill]: t,
            [u.fractionalTimeRemainingPill]: !t
        }),
        p = r()({
            [u.fractionalUnactivatedPillText]: t,
            [u.fractionalTimeRemainingPillText]: !t
        }),
        x = r()({ [u.fractionalTimeRemainingRowHeader]: !t });
    return (0, i.jsxs)('div', {
        className: u.fractionalTimeRemainingRow,
        children: [
            (0, i.jsxs)('div', {
                className: u.fractionalTimeRemainingRowDetails,
                children: [
                    (0, i.jsx)(a.Heading, {
                        variant: 'heading-md/semibold',
                        className: x,
                        children: m
                    }),
                    null !== g &&
                        (0, i.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            children: g
                        })
                ]
            }),
            (0, i.jsx)('div', {
                className: u.fractionalTimeRemainingPillWrapper,
                children: (0, i.jsx)('div', {
                    className: h,
                    children: (0, i.jsx)(a.Text, {
                        variant: 'text-sm/semibold',
                        className: p,
                        children: n
                    })
                })
            })
        ]
    });
}
t.Z = function (e) {
    var t;
    let { fractionalPremiumInfo: n, className: s, activationDate: c } = e,
        g = (0, o.Am)(n),
        h = g.length > 0,
        p = (0, l.Z)(n.endsAt, l.a.SHORT_TIME),
        x = h ? g : p;
    return (0, i.jsx)('div', {
        children: (0, i.jsxs)('div', {
            className: r()(s, u.fractionalPremiumAccountCredit),
            children: [
                (0, i.jsx)('div', {
                    className: u.accountCreditsContainer,
                    children:
                        ((t = g),
                        (0, i.jsxs)('div', {
                            className: u.accountCreditRow,
                            children: [
                                (0, i.jsx)('div', {
                                    className: u.iconBackgroundFractional,
                                    children: (0, i.jsx)(a.NitroWheelIcon, {
                                        size: 'md',
                                        color: 'white',
                                        className: u.iconFractional
                                    })
                                }),
                                (0, i.jsx)('div', {
                                    className: u.rowDetails,
                                    children: (0, i.jsx)(a.Heading, {
                                        variant: 'heading-md/semibold',
                                        children: d.intl.string(d.t.DFMPWV)
                                    })
                                }),
                                (0, i.jsx)(a.Text, {
                                    className: u.rowCreditCount,
                                    variant: 'text-md/semibold',
                                    children: t.length > 0 ? t : d.intl.string(d.t['B66Z+f'])
                                })
                            ]
                        }))
                }),
                (0, i.jsx)(m, {
                    showChargingUpState: h,
                    rowValueText: x,
                    endsAt: n.endsAt,
                    fractionalState: n.fractionalState,
                    activationDate: c
                })
            ]
        })
    });
};
