r.d(t, {
    A7: () => S,
    CI: () => E,
    Du: () => w,
    lH: () => N,
    s: () => T
}),
    r(266796);
var n = r(200651),
    s = r(192379),
    i = r(704215),
    o = r(481060),
    l = r(605236),
    a = r(765585),
    c = r(703656),
    u = r(821629),
    d = r(780525),
    p = r(119269),
    f = r(938736),
    b = r(227140),
    g = r(171346),
    O = r(981631),
    h = r(921944),
    m = r(388032),
    x = r(904892);
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let C = 'url(#dark-purple-gradient)',
    v = () =>
        (0, n.jsxs)('div', {
            className: x.coachtipContent,
            children: [
                (0, n.jsx)(o.X6q, {
                    variant: 'heading-sm/bold',
                    children: m.NW.string(m.t.USo4s7)
                }),
                (0, n.jsx)(o.Text, {
                    variant: 'text-xs/normal',
                    children: m.NW.format(m.t.AGKQq6, { numReferrals: 3 })
                })
            ]
        }),
    P = () =>
        (0, n.jsx)('svg', {
            width: '15',
            height: '15',
            viewBox: '0 0 15 15',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: (0, n.jsx)('path', {
                d: 'M10.8079 11.6918C11.052 11.9359 11.4477 11.9359 11.6918 11.6918C11.9359 11.4477 11.9359 11.052 11.6918 10.8079L8.38384 7.49996L11.6918 4.19201C11.9359 3.94793 11.9359 3.5522 11.6918 3.30813C11.4477 3.06405 11.052 3.06405 10.8079 3.30813L7.49996 6.61607L4.19194 3.30806C3.94786 3.06398 3.55214 3.06398 3.30806 3.30806C3.06398 3.55214 3.06398 3.94786 3.30806 4.19194L6.61608 7.49996L3.30806 10.808C3.06398 11.0521 3.06398 11.4478 3.30806 11.6919C3.55214 11.9359 3.94786 11.9359 4.19194 11.6919L7.49996 8.38384L10.8079 11.6918Z',
                fill: 'white'
            })
        }),
    _ = () => (0, l.EW)(i.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR, { dismissAction: h.L.TAKE_ACTION }),
    S = (e) => {
        let { children: t } = e;
        return (0, n.jsx)(o.yRy, {
            shouldShow: !0,
            renderPopout: () =>
                (0, n.jsx)(a.Z, {
                    artClassName: x.coachmarkArt,
                    dismissIconClassName: x.exitIcon,
                    onDismissIconClick: _,
                    dismissIcon: (0, n.jsx)(P, {}),
                    headerClassName: x.incentiveCoachtipContent,
                    contentClassName: x.incentiveCoachtipContainer,
                    pointerClassName: x.incentiveTooltipPointer,
                    onTryFeature: () => {
                        (0, c.uL)(O.Z5c.NITRO_HOME), _();
                    },
                    art: (0, n.jsx)(p.ZP, {
                        staticPercentage: 100,
                        iconClassName: x.incentiveIcon,
                        showAnimations: !1,
                        progressCircleVariation: p.Qo.NITRO_LOGO,
                        ellipseOpacity: 1,
                        circleColor: C,
                        circleStroke: C,
                        progressCircleStrokeSize: 4
                    }),
                    position: 'right',
                    align: 'top',
                    tryItText: m.NW.string(m.t.RzWDqa),
                    header: m.NW.formatToPlainString(m.t.md2GU1, { discountRate: f.Nq }),
                    hideDismissButton: !0,
                    body: m.NW.formatToPlainString(m.t.mxPPxc, { discountRate: f.Nq }),
                    dismissibleContent: i.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR,
                    maxWidth: 320
                }),
            children: t
        });
    },
    E = (e) => {
        let { children: t } = e,
            r = (0, n.jsxs)('div', {
                className: x.coachTipContainer,
                children: [
                    (0, n.jsx)('div', {
                        className: x.iconContainer,
                        children: (0, n.jsx)(p.ZP, {
                            staticPercentage: 100,
                            iconClassName: x.icon,
                            showAnimations: !0,
                            progressCircleVariation: p.Qo.NITRO_LOGO,
                            ellipseOpacity: 1,
                            customAnimationClassName: x.customCircleAnimation,
                            circleColor: 'url(#purple-gradient)'
                        })
                    }),
                    (0, n.jsx)(v, {})
                ]
            });
        return (0, n.jsx)(o.ua7, {
            text: r,
            position: 'right',
            'aria-label': m.NW.string(m.t.USo4s7),
            tooltipClassName: x.marketingBadgeTooltip,
            allowOverflow: !0,
            tooltipContentClassName: x.tooltipContent,
            children: (e) => (0, n.jsx)('div', y(j({}, e), { children: t }))
        });
    },
    N = (e) => {
        let { isSelected: t, onSelect: r } = e;
        return (
            s.useEffect(() => {
                t && r();
            }, [t, r]),
            (0, n.jsx)(b.Z, { copy: m.NW.string(m.t.y2b7CA) })
        );
    },
    w = () => {
        let e = (0, n.jsx)(o.Text, {
            variant: 'text-sm/bold',
            children: (0, n.jsx)(u.Z, { endDate: new Date(d.Lk) })
        });
        return (0, n.jsx)(o.ua7, {
            text: e,
            position: 'top',
            'aria-label': m.NW.string(m.t.fzn5eH),
            tooltipClassName: null,
            allowOverflow: !0,
            tooltipContentClassName: null,
            children: (e) =>
                (0, n.jsx)(
                    'div',
                    y(j({}, e), {
                        children: (0, n.jsx)(g.Z, {
                            copy: m.NW.string(m.t.OS9KPj),
                            className: x.greyedOut
                        })
                    })
                )
        });
    },
    T = (e) => {
        let { children: t, description: r } = e,
            s = () => {
                (0, l.EW)(i.z.Q1_2025_MARKETING_MOMENT_REMINDER_COACHMARK, { dismissAction: h.L.TAKE_ACTION }), (0, c.uL)(O.Z5c.NITRO_HOME);
            },
            u = () => {
                (0, l.EW)(i.z.Q1_2025_MARKETING_MOMENT_REMINDER_COACHMARK, { dismissAction: h.L.TAKE_ACTION });
            };
        return (0, n.jsx)(o.yRy, {
            shouldShow: !0,
            renderPopout: () =>
                (0, n.jsx)(a.Z, {
                    artClassName: x.coachmarkArt,
                    dismissIconClassName: x.exitIcon,
                    onDismissIconClick: u,
                    dismissIcon: (0, n.jsx)(P, {}),
                    headerClassName: x.collectibleDecoReminderCoachmarkHeader,
                    contentClassName: x.collectibleDecoReminderCoachmarkContent,
                    pointerClassName: x.collectibleDecoReminderCoachmarkPointer,
                    onTryFeature: s,
                    position: 'right',
                    align: 'top',
                    isPremiumFeature: !0,
                    tryItText: m.NW.string(m.t.RzWDqa),
                    header: m.NW.string(m.t['hJ/u+f']),
                    hideDismissButton: !0,
                    body: r,
                    dismissibleContent: i.z.Q1_2025_MARKETING_MOMENT_REMINDER_COACHMARK,
                    maxWidth: 320
                }),
            children: t
        });
    };
