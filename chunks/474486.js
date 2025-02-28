r.d(t, {
    A7: () => T,
    CI: () => R,
    Du: () => A,
    lH: () => L,
    s: () => I
}),
    r(266796);
var n = r(200651),
    s = r(192379),
    i = r(442837),
    o = r(704215),
    l = r(481060),
    a = r(607070),
    c = r(605236),
    u = r(765585),
    d = r(703656),
    p = r(821629),
    f = r(780525),
    b = r(119269),
    g = r(938736),
    O = r(227140),
    m = r(171346),
    h = r(981631),
    x = r(921944),
    j = r(388032),
    y = r(924911),
    C = r(482668),
    v = r(21504);
function P(e) {
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
function _(e, t) {
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
let S = 'url(#dark-purple-gradient)',
    N = () =>
        (0, n.jsxs)('div', {
            className: y.coachtipContent,
            children: [
                (0, n.jsx)(l.X6q, {
                    variant: 'heading-sm/bold',
                    children: j.NW.string(j.t.USo4s7)
                }),
                (0, n.jsx)(l.Text, {
                    variant: 'text-xs/normal',
                    children: j.NW.format(j.t.AGKQq6, { numReferrals: 3 })
                })
            ]
        }),
    E = () =>
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
    w = () => (0, c.EW)(o.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR, { dismissAction: x.L.TAKE_ACTION }),
    T = (e) => {
        let { children: t } = e;
        return (0, n.jsx)(l.yRy, {
            shouldShow: !0,
            renderPopout: () =>
                (0, n.jsx)(u.Z, {
                    artClassName: y.coachmarkArt,
                    dismissIconClassName: y.exitIcon,
                    onDismissIconClick: w,
                    dismissIcon: (0, n.jsx)(E, {}),
                    headerClassName: y.incentiveCoachtipContent,
                    contentClassName: y.incentiveCoachtipContainer,
                    pointerClassName: y.incentiveTooltipPointer,
                    onTryFeature: () => {
                        (0, d.uL)(h.Z5c.NITRO_HOME), w();
                    },
                    art: (0, n.jsx)(b.ZP, {
                        staticPercentage: 100,
                        iconClassName: y.incentiveIcon,
                        showAnimations: !1,
                        progressCircleVariation: b.Qo.NITRO_LOGO,
                        ellipseOpacity: 1,
                        circleColor: S,
                        circleStroke: S,
                        progressCircleStrokeSize: 4
                    }),
                    position: 'right',
                    align: 'top',
                    tryItText: j.NW.string(j.t.RzWDqa),
                    header: j.NW.formatToPlainString(j.t.md2GU1, { discountRate: g.Nq }),
                    hideDismissButton: !0,
                    body: j.NW.formatToPlainString(j.t.mxPPxc, { discountRate: g.Nq }),
                    dismissibleContent: o.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR,
                    maxWidth: 320
                }),
            children: t
        });
    },
    R = (e) => {
        let { children: t } = e,
            r = (0, n.jsxs)('div', {
                className: y.coachTipContainer,
                children: [
                    (0, n.jsx)('div', {
                        className: y.iconContainer,
                        children: (0, n.jsx)(b.ZP, {
                            staticPercentage: 100,
                            iconClassName: y.icon,
                            showAnimations: !0,
                            progressCircleVariation: b.Qo.NITRO_LOGO,
                            ellipseOpacity: 1,
                            customAnimationClassName: y.customCircleAnimation,
                            circleColor: 'url(#purple-gradient)'
                        })
                    }),
                    (0, n.jsx)(N, {})
                ]
            });
        return (0, n.jsx)(l.ua7, {
            text: r,
            position: 'right',
            'aria-label': j.NW.string(j.t.USo4s7),
            tooltipClassName: y.marketingBadgeTooltip,
            allowOverflow: !0,
            tooltipContentClassName: y.tooltipContent,
            children: (e) => (0, n.jsx)('div', _(P({}, e), { children: t }))
        });
    },
    L = (e) => {
        let { isSelected: t, onSelect: r } = e;
        return (
            s.useEffect(() => {
                t && r();
            }, [t, r]),
            (0, n.jsx)(O.Z, { copy: j.NW.string(j.t.y2b7CA) })
        );
    },
    A = () => {
        let e = (0, n.jsx)(l.Text, {
            variant: 'text-sm/bold',
            children: (0, n.jsx)(p.Z, { endDate: new Date(f.Lk) })
        });
        return (0, n.jsx)(l.ua7, {
            text: e,
            position: 'top',
            'aria-label': j.NW.string(j.t.fzn5eH),
            tooltipClassName: null,
            allowOverflow: !0,
            tooltipContentClassName: null,
            children: (e) =>
                (0, n.jsx)(
                    'div',
                    _(P({}, e), {
                        children: (0, n.jsx)(m.Z, {
                            copy: j.NW.string(j.t.OS9KPj),
                            className: y.greyedOut
                        })
                    })
                )
        });
    },
    I = (e) => {
        let { children: t, description: r } = e,
            s = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
            p = () => {
                (0, c.EW)(o.z.Q1_2025_MARKETING_MOMENT_REMINDER_COACHMARK, { dismissAction: x.L.TAKE_ACTION }), (0, d.uL)(h.Z5c.NITRO_HOME);
            },
            f = () => {
                (0, c.EW)(o.z.Q1_2025_MARKETING_MOMENT_REMINDER_COACHMARK, { dismissAction: x.L.TAKE_ACTION });
            },
            b = s ? v.Z : C.Z;
        return (0, n.jsx)(l.yRy, {
            shouldShow: !0,
            onRequestClose: f,
            renderPopout: () =>
                (0, n.jsx)(u.Z, {
                    onClose: f,
                    dismissIconClassName: y.exitIcon,
                    onDismissIconClick: f,
                    dismissIcon: (0, n.jsx)(E, {}),
                    artClassName: y.collectibleDecoReminderCoachmarkArtContainer,
                    headerClassName: y.collectibleDecoReminderCoachmarkHeader,
                    contentClassName: y.collectibleDecoReminderCoachmarkContent,
                    pointerClassName: y.collectibleDecoReminderCoachmarkPointer,
                    onTryFeature: p,
                    position: 'right',
                    align: 'top',
                    isPremiumFeature: !0,
                    tryItText: j.NW.string(j.t.RzWDqa),
                    header: j.NW.string(j.t['hJ/u+f']),
                    hideDismissButton: !0,
                    art: (0, n.jsx)('img', {
                        src: b,
                        alt: '',
                        className: y.collectibleDecoReminderCoachmarkArt
                    }),
                    body: r,
                    dismissibleContent: o.z.Q1_2025_MARKETING_MOMENT_REMINDER_COACHMARK,
                    maxWidth: 320
                }),
            children: t
        });
    };
