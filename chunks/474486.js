r.d(t, {
    CI: () => w,
    Du: () => _,
    lH: () => P,
    s: () => C
}),
    r(953529);
var n = r(200651),
    i = r(192379),
    s = r(442837),
    o = r(704215),
    l = r(481060),
    a = r(607070),
    c = r(605236),
    h = r(765585),
    v = r(703656),
    u = r(821629),
    f = r(780525),
    p = r(119269),
    d = r(227140),
    b = r(171346),
    Z = r(981631),
    M = r(921944),
    g = r(388032),
    j = r(742116),
    O = r(482668),
    y = r(21504);
function m(e) {
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
function H(e, t) {
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
let V = () =>
        (0, n.jsxs)('div', {
            className: j.coachtipContent,
            children: [
                (0, n.jsx)(l.X6q, {
                    variant: 'heading-sm/bold',
                    children: g.intl.string(g.t.USo4s7)
                }),
                (0, n.jsx)(l.Text, {
                    variant: 'text-xs/normal',
                    children: g.intl.format(g.t.AGKQq6, { numReferrals: 3 })
                })
            ]
        }),
    x = () =>
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
    w = (e) => {
        let { children: t } = e,
            r = (0, n.jsxs)('div', {
                className: j.coachTipContainer,
                children: [
                    (0, n.jsx)('div', {
                        className: j.iconContainer,
                        children: (0, n.jsx)(p.ZP, {
                            staticPercentage: 100,
                            iconClassName: j.icon,
                            showAnimations: !0,
                            progressCircleVariation: p.Qo.NITRO_LOGO,
                            ellipseOpacity: 1,
                            customAnimationClassName: j.customCircleAnimation,
                            circleColor: 'url(#purple-gradient)'
                        })
                    }),
                    (0, n.jsx)(V, {})
                ]
            });
        return (0, n.jsx)(l.ua7, {
            text: r,
            position: 'right',
            'aria-label': g.intl.string(g.t.USo4s7),
            tooltipClassName: j.marketingBadgeTooltip,
            allowOverflow: !0,
            tooltipContentClassName: j.tooltipContent,
            children: (e) => (0, n.jsx)('div', H(m({}, e), { children: t }))
        });
    },
    P = (e) => {
        let { isSelected: t, onSelect: r } = e;
        return (
            i.useEffect(() => {
                t && r();
            }, [t, r]),
            (0, n.jsx)(d.Z, { copy: g.intl.string(g.t.y2b7CA) })
        );
    },
    _ = () => {
        let e = (0, n.jsx)(l.Text, {
            variant: 'text-sm/bold',
            children: (0, n.jsx)(u.Z, { endDate: new Date(f.Lk) })
        });
        return (0, n.jsx)(l.ua7, {
            text: e,
            position: 'top',
            'aria-label': g.intl.string(g.t.fzn5eH),
            tooltipClassName: null,
            allowOverflow: !0,
            tooltipContentClassName: null,
            children: (e) =>
                (0, n.jsx)(
                    'div',
                    H(m({}, e), {
                        children: (0, n.jsx)(b.Z, {
                            copy: g.intl.string(g.t.OS9KPj),
                            className: j.greyedOut
                        })
                    })
                )
        });
    },
    C = (e) => {
        let { children: t, description: r } = e,
            i = (0, s.e7)([a.Z], () => a.Z.useReducedMotion),
            u = () => {
                (0, c.EW)(o.z.Q1_2025_MARKETING_MOMENT_REMINDER_COACHMARK, { dismissAction: M.L.TAKE_ACTION }), (0, v.uL)(Z.Z5c.NITRO_HOME);
            },
            f = () => {
                (0, c.EW)(o.z.Q1_2025_MARKETING_MOMENT_REMINDER_COACHMARK, { dismissAction: M.L.TAKE_ACTION });
            },
            p = i ? y.Z : O.Z;
        return (0, n.jsx)(l.yRy, {
            shouldShow: !0,
            onRequestClose: f,
            renderPopout: () =>
                (0, n.jsx)(h.Z, {
                    onClose: f,
                    dismissIconClassName: j.exitIcon,
                    onDismissIconClick: f,
                    dismissIcon: (0, n.jsx)(x, {}),
                    artClassName: j.collectibleDecoReminderCoachmarkArtContainer,
                    headerClassName: j.collectibleDecoReminderCoachmarkHeader,
                    contentClassName: j.collectibleDecoReminderCoachmarkContent,
                    pointerClassName: j.collectibleDecoReminderCoachmarkPointer,
                    onTryFeature: u,
                    position: 'right',
                    align: 'top',
                    isPremiumFeature: !0,
                    tryItText: g.intl.string(g.t.RzWDqa),
                    header: g.intl.string(g.t['hJ/u+f']),
                    hideDismissButton: !0,
                    art: (0, n.jsx)('img', {
                        src: p,
                        alt: '',
                        className: j.collectibleDecoReminderCoachmarkArt
                    }),
                    body: r,
                    dismissibleContent: o.z.Q1_2025_MARKETING_MOMENT_REMINDER_COACHMARK,
                    maxWidth: 320
                }),
            children: t
        });
    };
