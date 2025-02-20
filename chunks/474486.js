n.d(t, {
    A7: () => N,
    CI: () => v,
    lH: () => y
});
var r = n(200651),
    i = n(192379),
    l = n(704215),
    o = n(481060),
    a = n(605236),
    s = n(765585),
    c = n(703656),
    u = n(119269),
    d = n(938736),
    p = n(227140),
    h = n(981631),
    f = n(921944),
    g = n(388032),
    m = n(904892);
let b = 'url(#dark-purple-gradient)',
    _ = () =>
        (0, r.jsxs)('div', {
            className: m.coachtipContent,
            children: [
                (0, r.jsx)(o.X6q, {
                    variant: 'heading-sm/bold',
                    children: g.NW.string(g.t.USo4s7)
                }),
                (0, r.jsx)(o.Text, {
                    variant: 'text-xs/normal',
                    children: g.NW.format(g.t.AGKQq6, { numReferrals: 3 })
                })
            ]
        }),
    E = () =>
        (0, r.jsx)('svg', {
            width: '15',
            height: '15',
            viewBox: '0 0 15 15',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: (0, r.jsx)('path', {
                d: 'M10.8079 11.6918C11.052 11.9359 11.4477 11.9359 11.6918 11.6918C11.9359 11.4477 11.9359 11.052 11.6918 10.8079L8.38384 7.49996L11.6918 4.19201C11.9359 3.94793 11.9359 3.5522 11.6918 3.30813C11.4477 3.06405 11.052 3.06405 10.8079 3.30813L7.49996 6.61607L4.19194 3.30806C3.94786 3.06398 3.55214 3.06398 3.30806 3.30806C3.06398 3.55214 3.06398 3.94786 3.30806 4.19194L6.61608 7.49996L3.30806 10.808C3.06398 11.0521 3.06398 11.4478 3.30806 11.6919C3.55214 11.9359 3.94786 11.9359 4.19194 11.6919L7.49996 8.38384L10.8079 11.6918Z',
                fill: 'white'
            })
        }),
    O = () => (0, a.EW)(l.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR, { dismissAction: f.L.TAKE_ACTION }),
    N = (e) => {
        let { children: t } = e;
        return (0, r.jsx)(o.yRy, {
            shouldShow: !0,
            renderPopout: () =>
                (0, r.jsx)(s.Z, {
                    artClassName: m.coachmarkArt,
                    dismissIconClassName: m.exitIcon,
                    onDismissIconClick: O,
                    dismissIcon: (0, r.jsx)(E, {}),
                    headerClassName: m.incentiveCoachtipContent,
                    contentClassName: m.incentiveCoachtipContainer,
                    pointerClassName: m.incentiveTooltipPointer,
                    onTryFeature: () => {
                        (0, c.uL)(h.Z5c.NITRO_HOME), O();
                    },
                    art: (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(u.ZP, {
                            staticPercentage: 100,
                            iconClassName: m.incentiveIcon,
                            showAnimations: !1,
                            progressCircleVariation: u.Qo.NITRO_LOGO,
                            ellipseOpacity: 1,
                            circleColor: b,
                            circleStroke: b,
                            progressCircleStrokeSize: 4
                        })
                    }),
                    position: 'right',
                    align: 'top',
                    tryItText: g.NW.string(g.t.RzWDqa),
                    header: g.NW.formatToPlainString(g.t.md2GU1, { discountRate: d.Nq }),
                    hideDismissButton: !0,
                    body: g.NW.formatToPlainString(g.t.mxPPxc, { discountRate: d.Nq }),
                    dismissibleContent: l.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR,
                    maxWidth: 320
                }),
            children: t
        });
    },
    v = (e) => {
        let { children: t } = e,
            n = (0, r.jsxs)('div', {
                className: m.coachTipContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: m.iconContainer,
                        children: (0, r.jsx)(u.ZP, {
                            staticPercentage: 100,
                            iconClassName: m.icon,
                            showAnimations: !0,
                            progressCircleVariation: u.Qo.NITRO_LOGO,
                            ellipseOpacity: 1,
                            customAnimationClassName: m.customCircleAnimation,
                            circleColor: 'url(#purple-gradient)'
                        })
                    }),
                    (0, r.jsx)(_, {})
                ]
            });
        return (0, r.jsx)(o.ua7, {
            text: n,
            position: 'right',
            'aria-label': g.NW.string(g.t.USo4s7),
            tooltipClassName: m.marketingBadgeTooltip,
            allowOverflow: !0,
            tooltipContentClassName: m.tooltipContent,
            children: (e) => {
                var n, i;
                return (0, r.jsx)(
                    'div',
                    ((n = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, e)),
                    (i = i = { children: t }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(i)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                          }),
                    n)
                );
            }
        });
    },
    y = (e) => {
        let { isSelected: t, onSelect: n } = e;
        return (
            i.useEffect(() => {
                t && n();
            }, [t, n]),
            (0, r.jsx)(p.Z, { copy: g.NW.string(g.t.y2b7CA) })
        );
    };
