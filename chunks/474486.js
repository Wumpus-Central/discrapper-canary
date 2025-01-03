s.d(t, {
    A7: function () {
        return S;
    },
    CI: function () {
        return y;
    },
    dX: function () {
        return P;
    },
    j$: function () {
        return r;
    },
    lH: function () {
        return R;
    }
});
var n,
    r,
    i = s(200651),
    a = s(192379),
    o = s(990547),
    l = s(704215),
    c = s(481060),
    u = s(774078),
    d = s(213609),
    p = s(605236),
    f = s(765585),
    x = s(703656),
    g = s(706454),
    C = s(74538),
    _ = s(924540),
    m = s(119269),
    h = s(938736),
    v = s(227140),
    L = s(981631),
    A = s(921944),
    E = s(388032),
    j = s(762042);
let O = 'url(#dark-purple-gradient)';
function T(e) {
    return e.toLocaleString(g.default.locale, {
        minimumIntegerDigits: 2,
        useGrouping: !1
    });
}
((n = r || (r = {})).REFERRAL_PROGRAM = 'referral_program'), (n.TRIAL_FOR_ALL = 'trial_for_all');
let b = () =>
        (0, i.jsxs)('div', {
            className: j.coachtipContent,
            children: [
                (0, i.jsx)(c.Heading, {
                    variant: 'heading-sm/bold',
                    children: E.intl.string(E.t.USo4s7)
                }),
                (0, i.jsx)(c.Text, {
                    variant: 'text-xs/normal',
                    children: E.intl.format(E.t.AGKQq6, { numReferrals: 3 })
                })
            ]
        }),
    I = () =>
        (0, i.jsx)('svg', {
            width: '15',
            height: '15',
            viewBox: '0 0 15 15',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: (0, i.jsx)('path', {
                d: 'M10.8079 11.6918C11.052 11.9359 11.4477 11.9359 11.6918 11.6918C11.9359 11.4477 11.9359 11.052 11.6918 10.8079L8.38384 7.49996L11.6918 4.19201C11.9359 3.94793 11.9359 3.5522 11.6918 3.30813C11.4477 3.06405 11.052 3.06405 10.8079 3.30813L7.49996 6.61607L4.19194 3.30806C3.94786 3.06398 3.55214 3.06398 3.30806 3.30806C3.06398 3.55214 3.06398 3.94786 3.30806 4.19194L6.61608 7.49996L3.30806 10.808C3.06398 11.0521 3.06398 11.4478 3.30806 11.6919C3.55214 11.9359 3.94786 11.9359 4.19194 11.6919L7.49996 8.38384L10.8079 11.6918Z',
                fill: 'white'
            })
        }),
    N = () => (0, p.EW)(l.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR, { dismissAction: A.L.TAKE_ACTION }),
    S = (e) => {
        let { children: t } = e;
        return (0, i.jsx)(c.Popout, {
            shouldShow: !0,
            renderPopout: () =>
                (0, i.jsx)(f.Z, {
                    artClassName: j.coachmarkArt,
                    dismissIconClassName: j.exitIcon,
                    onDismissIconClick: N,
                    dismissIcon: (0, i.jsx)(I, {}),
                    headerClassName: j.incentiveCoachtipContent,
                    contentClassName: j.incentiveCoachtipContainer,
                    pointerClassName: j.incentiveTooltipPointer,
                    onTryFeature: () => {
                        (0, x.uL)(L.Z5c.NITRO_HOME), N();
                    },
                    art: (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(m.ZP, {
                            staticPercentage: 100,
                            iconClassName: j.incentiveIcon,
                            showAnimations: !1,
                            progressCircleVariation: m.Qo.NITRO_LOGO,
                            ellipseOpacity: 1,
                            circleColor: O,
                            circleStroke: O,
                            progressCircleStrokeSize: 4
                        })
                    }),
                    position: 'right',
                    align: 'top',
                    tryItText: E.intl.string(E.t.RzWDqa),
                    header: E.intl.formatToPlainString(E.t.md2GU1, { discountRate: h.Nq }),
                    hideDismissButton: !0,
                    body: E.intl.formatToPlainString(E.t.mxPPxc, { discountRate: h.Nq }),
                    dismissibleContent: l.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR,
                    maxWidth: 320
                }),
            children: t
        });
    },
    y = (e) => {
        let t,
            { children: s, variant: n, trialOffer: r, isHovered: a } = e,
            l = 'referral_program' === n;
        return (
            (0, d.Z)(
                {
                    type: o.ImpressionTypes.VIEW,
                    name: o.ImpressionNames.TRIAL_FOR_ALL_COACHTIP
                },
                { disableTrack: !a || l },
                [a, l]
            ),
            (t = l
                ? (0, i.jsxs)('div', {
                      className: j.coachTipContainer,
                      children: [
                          (0, i.jsx)('div', {
                              className: j.iconContainer,
                              children: (0, i.jsx)(m.ZP, {
                                  staticPercentage: 100,
                                  iconClassName: j.icon,
                                  showAnimations: !0,
                                  progressCircleVariation: m.Qo.NITRO_LOGO,
                                  ellipseOpacity: 1,
                                  customAnimationClassName: j.customCircleAnimation,
                                  circleColor: 'url(#purple-gradient)'
                              })
                          }),
                          (0, i.jsx)(b, {})
                      ]
                  })
                : (0, i.jsxs)('div', {
                      className: j.t4ACoachTipContainer,
                      children: [
                          (0, i.jsx)('div', {
                              className: j.t4ACoachtipArtOuterContainer,
                              children: (0, i.jsx)(w, {})
                          }),
                          (0, i.jsx)(B, { trialExpiration: (null == r ? void 0 : r.expires_at) != null ? Date.parse(r.expires_at) : void 0 })
                      ]
                  })),
            (0, i.jsx)(c.Tooltip, {
                text: t,
                position: 'right',
                'aria-label': l ? E.intl.string(E.t.USo4s7) : E.intl.string(E.t.Kkcmj4),
                tooltipClassName: l ? j.marketingBadgeTooltip : j.t4AMarketingBadgeTooltip,
                allowOverflow: !0,
                tooltipContentClassName: j.tooltipContent,
                children: (e) =>
                    (0, i.jsx)('div', {
                        ...e,
                        children: s
                    })
            })
        );
    },
    R = (e) => {
        let { isSelected: t, onSelect: s } = e;
        return (
            a.useEffect(() => {
                t && s();
            }, [t, s]),
            (0, i.jsx)(v.Z, { copy: E.intl.string(E.t.y2b7CA) })
        );
    },
    w = () =>
        (0, i.jsx)('div', {
            className: j.t4ACoachtipArtInnerContainer,
            children: (0, i.jsx)('img', {
                src: 'https://cdn.discordapp.com/assets/content/49060ae409d6cf2fa9b58ad200d60c7f3f68b0927ef57df90b5b9c06c8d1bbe7.png',
                alt: ''
            })
        }),
    B = (e) => {
        let { trialExpiration: t } = e,
            s = (0, u.Z)(null != t ? t : Date.parse('2024-11-22T08:00:00Z'), 1000);
        return (0, i.jsxs)('div', {
            className: j.t4aCoachtipContent,
            children: [
                (0, i.jsx)(c.Heading, {
                    variant: 'heading-sm/bold',
                    children: E.intl.string(E.t.Kkcmj4)
                }),
                (0, i.jsx)(c.Text, {
                    variant: 'text-xs/normal',
                    children:
                        s.days > 0
                            ? E.intl.formatToPlainString(E.t.G1Ldn5, { days: s.days })
                            : E.intl.formatToPlainString(E.t.h982oq, {
                                  hours: T(s.hours),
                                  minutes: T(s.minutes),
                                  seconds: T(s.seconds)
                              })
                })
            ]
        });
    },
    P = (e) => {
        var t, s;
        let { isSelected: n, trialOffer: r, q4MarketingEnabled: o } = e,
            c = (0, p.wE)(l.z.TRIAL_FOR_ALL_MARKETING_PAGE_BADGE),
            u = null === (t = r.subscription_trial) || void 0 === t ? void 0 : t.interval,
            d = null === (s = r.subscription_trial) || void 0 === s ? void 0 : s.interval_count,
            f = (0, C.a5)({
                intervalType: null !== u ? u : void 0,
                intervalCount: null !== d ? d : void 0
            });
        return (
            a.useEffect(() => {
                n && !c && (0, p.EW)(l.z.TRIAL_FOR_ALL_MARKETING_PAGE_BADGE, { dismissAction: A.L.TAKE_ACTION });
            }, [n, c]),
            (0, i.jsx)(_._y, {
                ackedClassName: j.trialAckedBadge,
                className: j.trialBadgeBackground,
                isTabSelected: n,
                badgeCopy: o ? E.intl.string(E.t.OS9KPj) : f,
                offerExpiresAt: c ? r.expires_at : void 0
            })
        );
    };
