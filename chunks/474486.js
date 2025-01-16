n.d(t, {
    A7: function () {
        return N;
    },
    CI: function () {
        return v;
    },
    lH: function () {
        return S;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(704215),
    a = n(481060),
    s = n(605236),
    o = n(765585),
    c = n(703656),
    d = n(119269),
    u = n(938736),
    h = n(227140),
    m = n(981631),
    p = n(921944),
    g = n(388032),
    f = n(762042);
let _ = 'url(#dark-purple-gradient)',
    E = () =>
        (0, i.jsxs)('div', {
            className: f.coachtipContent,
            children: [
                (0, i.jsx)(a.Heading, {
                    variant: 'heading-sm/bold',
                    children: g.intl.string(g.t.USo4s7)
                }),
                (0, i.jsx)(a.Text, {
                    variant: 'text-xs/normal',
                    children: g.intl.format(g.t.AGKQq6, { numReferrals: 3 })
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
    C = () => (0, s.EW)(l.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR, { dismissAction: p.L.TAKE_ACTION }),
    N = (e) => {
        let { children: t } = e;
        return (0, i.jsx)(a.Popout, {
            shouldShow: !0,
            renderPopout: () =>
                (0, i.jsx)(o.Z, {
                    artClassName: f.coachmarkArt,
                    dismissIconClassName: f.exitIcon,
                    onDismissIconClick: C,
                    dismissIcon: (0, i.jsx)(I, {}),
                    headerClassName: f.incentiveCoachtipContent,
                    contentClassName: f.incentiveCoachtipContainer,
                    pointerClassName: f.incentiveTooltipPointer,
                    onTryFeature: () => {
                        (0, c.uL)(m.Z5c.NITRO_HOME), C();
                    },
                    art: (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(d.ZP, {
                            staticPercentage: 100,
                            iconClassName: f.incentiveIcon,
                            showAnimations: !1,
                            progressCircleVariation: d.Qo.NITRO_LOGO,
                            ellipseOpacity: 1,
                            circleColor: _,
                            circleStroke: _,
                            progressCircleStrokeSize: 4
                        })
                    }),
                    position: 'right',
                    align: 'top',
                    tryItText: g.intl.string(g.t.RzWDqa),
                    header: g.intl.formatToPlainString(g.t.md2GU1, { discountRate: u.Nq }),
                    hideDismissButton: !0,
                    body: g.intl.formatToPlainString(g.t.mxPPxc, { discountRate: u.Nq }),
                    dismissibleContent: l.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR,
                    maxWidth: 320
                }),
            children: t
        });
    },
    v = (e) => {
        let { children: t } = e,
            n = (0, i.jsxs)('div', {
                className: f.coachTipContainer,
                children: [
                    (0, i.jsx)('div', {
                        className: f.iconContainer,
                        children: (0, i.jsx)(d.ZP, {
                            staticPercentage: 100,
                            iconClassName: f.icon,
                            showAnimations: !0,
                            progressCircleVariation: d.Qo.NITRO_LOGO,
                            ellipseOpacity: 1,
                            customAnimationClassName: f.customCircleAnimation,
                            circleColor: 'url(#purple-gradient)'
                        })
                    }),
                    (0, i.jsx)(E, {})
                ]
            });
        return (0, i.jsx)(a.Tooltip, {
            text: n,
            position: 'right',
            'aria-label': g.intl.string(g.t.USo4s7),
            tooltipClassName: f.marketingBadgeTooltip,
            allowOverflow: !0,
            tooltipContentClassName: f.tooltipContent,
            children: (e) =>
                (0, i.jsx)('div', {
                    ...e,
                    children: t
                })
        });
    },
    S = (e) => {
        let { isSelected: t, onSelect: n } = e;
        return (
            r.useEffect(() => {
                t && n();
            }, [t, n]),
            (0, i.jsx)(h.Z, { copy: g.intl.string(g.t.y2b7CA) })
        );
    };
