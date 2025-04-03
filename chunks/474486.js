s.d(t, {
    CI: () => _,
    Du: () => N,
    lH: () => E,
    s: () => T
}),
    s(266796);
var r = s(200651),
    n = s(192379),
    i = s(442837),
    o = s(704215),
    l = s(481060),
    a = s(607070),
    c = s(605236),
    u = s(765585),
    d = s(703656),
    p = s(821629),
    f = s(780525),
    b = s(119269),
    g = s(227140),
    O = s(171346),
    x = s(981631),
    m = s(921944),
    h = s(388032),
    j = s(742116),
    y = s(482668),
    C = s(21504);
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var s = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(s);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(s).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(s, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = s[t]),
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
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var s = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      s.push.apply(s, r);
                  }
                  return s;
              })(Object(t)).forEach(function (s) {
                  Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s));
              }),
        e
    );
}
let S = () =>
        (0, r.jsxs)('div', {
            className: j.coachtipContent,
            children: [
                (0, r.jsx)(l.X6q, {
                    variant: 'heading-sm/bold',
                    children: h.NW.string(h.t.USo4s7)
                }),
                (0, r.jsx)(l.Text, {
                    variant: 'text-xs/normal',
                    children: h.NW.format(h.t.AGKQq6, { numReferrals: 3 })
                })
            ]
        }),
    w = () =>
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
    _ = (e) => {
        let { children: t } = e,
            s = (0, r.jsxs)('div', {
                className: j.coachTipContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: j.iconContainer,
                        children: (0, r.jsx)(b.ZP, {
                            staticPercentage: 100,
                            iconClassName: j.icon,
                            showAnimations: !0,
                            progressCircleVariation: b.Qo.NITRO_LOGO,
                            ellipseOpacity: 1,
                            customAnimationClassName: j.customCircleAnimation,
                            circleColor: 'url(#purple-gradient)'
                        })
                    }),
                    (0, r.jsx)(S, {})
                ]
            });
        return (0, r.jsx)(l.ua7, {
            text: s,
            position: 'right',
            'aria-label': h.NW.string(h.t.USo4s7),
            tooltipClassName: j.marketingBadgeTooltip,
            allowOverflow: !0,
            tooltipContentClassName: j.tooltipContent,
            children: (e) => (0, r.jsx)('div', P(v({}, e), { children: t }))
        });
    },
    E = (e) => {
        let { isSelected: t, onSelect: s } = e;
        return (
            n.useEffect(() => {
                t && s();
            }, [t, s]),
            (0, r.jsx)(g.Z, { copy: h.NW.string(h.t.y2b7CA) })
        );
    },
    N = () => {
        let e = (0, r.jsx)(l.Text, {
            variant: 'text-sm/bold',
            children: (0, r.jsx)(p.Z, { endDate: new Date(f.Lk) })
        });
        return (0, r.jsx)(l.ua7, {
            text: e,
            position: 'top',
            'aria-label': h.NW.string(h.t.fzn5eH),
            tooltipClassName: null,
            allowOverflow: !0,
            tooltipContentClassName: null,
            children: (e) =>
                (0, r.jsx)(
                    'div',
                    P(v({}, e), {
                        children: (0, r.jsx)(O.Z, {
                            copy: h.NW.string(h.t.OS9KPj),
                            className: j.greyedOut
                        })
                    })
                )
        });
    },
    T = (e) => {
        let { children: t, description: s } = e,
            n = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
            p = () => {
                (0, c.EW)(o.z.Q1_2025_MARKETING_MOMENT_REMINDER_COACHMARK, { dismissAction: m.L.TAKE_ACTION }), (0, d.uL)(x.Z5c.NITRO_HOME);
            },
            f = () => {
                (0, c.EW)(o.z.Q1_2025_MARKETING_MOMENT_REMINDER_COACHMARK, { dismissAction: m.L.TAKE_ACTION });
            },
            b = n ? C.Z : y.Z;
        return (0, r.jsx)(l.yRy, {
            shouldShow: !0,
            onRequestClose: f,
            renderPopout: () =>
                (0, r.jsx)(u.Z, {
                    onClose: f,
                    dismissIconClassName: j.exitIcon,
                    onDismissIconClick: f,
                    dismissIcon: (0, r.jsx)(w, {}),
                    artClassName: j.collectibleDecoReminderCoachmarkArtContainer,
                    headerClassName: j.collectibleDecoReminderCoachmarkHeader,
                    contentClassName: j.collectibleDecoReminderCoachmarkContent,
                    pointerClassName: j.collectibleDecoReminderCoachmarkPointer,
                    onTryFeature: p,
                    position: 'right',
                    align: 'top',
                    isPremiumFeature: !0,
                    tryItText: h.NW.string(h.t.RzWDqa),
                    header: h.NW.string(h.t['hJ/u+f']),
                    hideDismissButton: !0,
                    art: (0, r.jsx)('img', {
                        src: b,
                        alt: '',
                        className: j.collectibleDecoReminderCoachmarkArt
                    }),
                    body: s,
                    dismissibleContent: o.z.Q1_2025_MARKETING_MOMENT_REMINDER_COACHMARK,
                    maxWidth: 320
                }),
            children: t
        });
    };
