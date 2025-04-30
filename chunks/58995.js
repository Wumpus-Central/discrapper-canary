n.d(t, { Z: () => k }), n(388685), n(539854);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(704215),
    c = n(996146),
    u = n(481060),
    d = n(100527),
    f = n(906732),
    _ = n(605236),
    p = n(243778),
    h = n(963249),
    m = n(599659),
    g = n(282925),
    E = n(819640),
    b = n(594174),
    y = n(70956),
    O = n(709054),
    v = n(51144),
    I = n(443603),
    S = n(981631),
    T = n(921944),
    A = n(388032),
    N = n(870751),
    C = n(302195);
function R(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function P(e) {
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
                R(e, t, n[t]);
            });
    }
    return e;
}
function w(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let L = y.Z.Millis.DAYS_30;
function x(e) {
    let { animatedIconComponent: t, hovered: i, isCoachmarkDismissed: a } = e,
        s = !a || i;
    return (0, r.jsxs)('div', {
        className: N.iconContainer,
        children: [
            (0, r.jsx)('div', {
                className: o()(N.decorativeLayer, { [N.decorativeLayerActive]: s }),
                style: { zIndex: 3 },
                children: (0, r.jsx)(u.Fmz, {
                    shouldAnimate: s,
                    importData: () => n.e('39298').then(n.t.bind(n, 324952, 19))
                })
            }),
            (0, r.jsx)('div', {
                className: o()(N.giftIconButton, { [N.giftIconButtonActive]: s }),
                style: { zIndex: 2 },
                children: (0, r.jsx)(t, { color: 'currentColor' })
            }),
            (0, r.jsx)('div', {
                className: o()(N.decorativeLayer, { [N.decorativeLayerActive]: s }),
                style: { zIndex: 1 },
                children: (0, r.jsx)(u.Fmz, {
                    shouldAnimate: s,
                    importData: () => n.e('58889').then(n.t.bind(n, 593162, 19))
                })
            })
        ]
    });
}
function M(e) {
    let { disabled: t, channel: n } = e,
        { analyticsLocations: a } = (0, f.ZP)(d.Z.GIFT_BUTTON),
        [o, u] = i.useState(!1),
        y = (0, s.e7)([E.Z], () => !(null === E.Z || void 0 === E.Z ? void 0 : E.Z.hasLayers())),
        R = (0, s.e7)([b.default], () => b.default.getCurrentUser()),
        w = null != R ? O.default.age(R.id) : 0,
        M = !t && y && w >= L,
        { enabled: k } = m.O.useExperiment({ location: 'gift-button' }),
        j = [];
    k && M && j.push(l.z.NITROWEEN_COACHMARKS);
    let [U, G] = (0, p.US)(j),
        B = null != U,
        V = (0, v.Ft)(n),
        { Component: F, events: Z, play: H } = (0, c.$)();
    if (t) return null;
    let Y = () => {
        (0, h.Z)({
            isGift: !0,
            giftRecipient: null == V ? void 0 : V,
            giftMessage: A.intl.string(A.t['rX/m/f']),
            initialPlanId: null,
            analyticsLocations: a,
            analyticsObject: {
                page: n.isPrivate() ? S.ZY5.DM_CHANNEL : S.ZY5.GUILD_CHANNEL,
                section: S.jXE.CHANNEL_TEXT_AREA,
                object: S.qAy.NITROWEEN_BUTTON_ICON,
                objectType: S.Qqv.GIFT
            }
        });
    };
    return (0, r.jsxs)('div', {
        className: N.container,
        onMouseEnter: () => {
            o || u(!0);
        },
        onMouseLeave: () => {
            u(!1);
        },
        children: [
            B &&
                (0, r.jsx)(g.Z, {
                    onComplete: () => u(!1),
                    onCheckItOutClick: Y,
                    markAsDismissed: G
                }),
            (0, r.jsx)(
                I.Z,
                D(
                    P(
                        {
                            innerClassName: C.button,
                            'aria-label': A.intl.string(A.t.Z1RnTk),
                            isActive: !1,
                            onClick: () => {
                                H(), u(!1), (0, _.EW)(l.z.NITROWEEN_ANIMATED_GIFTING_ICON, { dismissAction: T.L.TAKE_ACTION }), Y();
                            }
                        },
                        Z
                    ),
                    {
                        children: (0, r.jsx)(x, {
                            animatedIconComponent: F,
                            hovered: o,
                            isCoachmarkDismissed: !B
                        })
                    }
                )
            )
        ]
    });
}
let k = i.memo(M);
