n.d(t, {
    CI: () => E,
    Du: () => N,
    lH: () => w,
    s: () => T
}),
    n(953529);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    o = n(704215),
    l = n(481060),
    a = n(607070),
    c = n(605236),
    u = n(765585),
    d = n(703656),
    f = n(821629),
    p = n(780525),
    g = n(119269),
    b = n(227140),
    m = n(171346),
    h = n(981631),
    v = n(921944),
    _ = n(388032),
    O = n(742116),
    y = n(482668),
    j = n(21504);
function x(e) {
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
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = () =>
        (0, r.jsxs)('div', {
            className: O.coachtipContent,
            children: [
                (0, r.jsx)(l.X6q, {
                    variant: 'heading-sm/bold',
                    children: _.intl.string(_.t.USo4s7)
                }),
                (0, r.jsx)(l.Text, {
                    variant: 'text-xs/normal',
                    children: _.intl.format(_.t.AGKQq6, { numReferrals: 3 })
                })
            ]
        }),
    P = () =>
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
    E = (e) => {
        let { children: t } = e,
            n = (0, r.jsxs)('div', {
                className: O.coachTipContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: O.iconContainer,
                        children: (0, r.jsx)(g.ZP, {
                            staticPercentage: 100,
                            iconClassName: O.icon,
                            showAnimations: !0,
                            progressCircleVariation: g.Qo.NITRO_LOGO,
                            ellipseOpacity: 1,
                            customAnimationClassName: O.customCircleAnimation,
                            circleColor: 'url(#purple-gradient)'
                        })
                    }),
                    (0, r.jsx)(S, {})
                ]
            });
        return (0, r.jsx)(l.ua7, {
            text: n,
            position: 'right',
            'aria-label': _.intl.string(_.t.USo4s7),
            tooltipClassName: O.marketingBadgeTooltip,
            allowOverflow: !0,
            tooltipContentClassName: O.tooltipContent,
            children: (e) => (0, r.jsx)('div', C(x({}, e), { children: t }))
        });
    },
    w = (e) => {
        let { isSelected: t, onSelect: n } = e;
        return (
            i.useEffect(() => {
                t && n();
            }, [t, n]),
            (0, r.jsx)(b.Z, { copy: _.intl.string(_.t.y2b7CA) })
        );
    },
    N = () => {
        let e = (0, r.jsx)(l.Text, {
            variant: 'text-sm/bold',
            children: (0, r.jsx)(f.Z, { endDate: new Date(p.Lk) })
        });
        return (0, r.jsx)(l.ua7, {
            text: e,
            position: 'top',
            'aria-label': _.intl.string(_.t.fzn5eH),
            tooltipClassName: null,
            allowOverflow: !0,
            tooltipContentClassName: null,
            children: (e) =>
                (0, r.jsx)(
                    'div',
                    C(x({}, e), {
                        children: (0, r.jsx)(m.Z, {
                            copy: _.intl.string(_.t.OS9KPj),
                            className: O.greyedOut
                        })
                    })
                )
        });
    },
    T = (e) => {
        let { children: t, description: n } = e,
            i = (0, s.e7)([a.Z], () => a.Z.useReducedMotion),
            f = () => {
                (0, c.EW)(o.z.Q1_2025_MARKETING_MOMENT_REMINDER_COACHMARK, { dismissAction: v.L.TAKE_ACTION }), (0, d.uL)(h.Z5c.NITRO_HOME);
            },
            p = () => {
                (0, c.EW)(o.z.Q1_2025_MARKETING_MOMENT_REMINDER_COACHMARK, { dismissAction: v.L.TAKE_ACTION });
            },
            g = i ? j.Z : y.Z;
        return (0, r.jsx)(l.yRy, {
            shouldShow: !0,
            onRequestClose: p,
            renderPopout: () =>
                (0, r.jsx)(u.Z, {
                    onClose: p,
                    dismissIconClassName: O.exitIcon,
                    onDismissIconClick: p,
                    dismissIcon: (0, r.jsx)(P, {}),
                    artClassName: O.collectibleDecoReminderCoachmarkArtContainer,
                    headerClassName: O.collectibleDecoReminderCoachmarkHeader,
                    contentClassName: O.collectibleDecoReminderCoachmarkContent,
                    pointerClassName: O.collectibleDecoReminderCoachmarkPointer,
                    onTryFeature: f,
                    position: 'right',
                    align: 'top',
                    isPremiumFeature: !0,
                    tryItText: _.intl.string(_.t.RzWDqa),
                    header: _.intl.string(_.t['hJ/u+f']),
                    hideDismissButton: !0,
                    art: (0, r.jsx)('img', {
                        src: g,
                        alt: '',
                        className: O.collectibleDecoReminderCoachmarkArt
                    }),
                    body: n,
                    dismissibleContent: o.z.Q1_2025_MARKETING_MOMENT_REMINDER_COACHMARK,
                    maxWidth: 320
                }),
            children: t
        });
    };
