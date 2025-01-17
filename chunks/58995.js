var i = r(47120);
var a = r(653041);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(442837),
    d = r(704215),
    f = r(996146),
    _ = r(481060),
    h = r(100527),
    p = r(906732),
    m = r(605236),
    g = r(243778),
    E = r(963249),
    v = r(599659),
    I = r(282925),
    T = r(819640),
    b = r(594174),
    y = r(70956),
    S = r(709054),
    A = r(51144),
    N = r(443603),
    C = r(981631),
    R = r(921944),
    O = r(388032),
    D = r(145695),
    L = r(553796);
let x = y.Z.Millis.DAYS_30;
function w(e) {
    let { animatedIconComponent: n, hovered: i, isCoachmarkDismissed: a } = e,
        o = !a || i;
    return (0, s.jsxs)('div', {
        className: D.iconContainer,
        children: [
            (0, s.jsx)('div', {
                className: u()(D.decorativeLayer, { [D.decorativeLayerActive]: o }),
                style: { zIndex: 3 },
                children: (0, s.jsx)(_.LottieAnimation, {
                    shouldAnimate: o,
                    importData: () => r.e('39298').then(r.t.bind(r, 324952, 19))
                })
            }),
            (0, s.jsx)('div', {
                className: u()(D.giftIconButton, { [D.giftIconButtonActive]: o }),
                style: { zIndex: 2 },
                children: (0, s.jsx)(n, { color: 'currentColor' })
            }),
            (0, s.jsx)('div', {
                className: u()(D.decorativeLayer, { [D.decorativeLayerActive]: o }),
                style: { zIndex: 1 },
                children: (0, s.jsx)(_.LottieAnimation, {
                    shouldAnimate: o,
                    importData: () => r.e('58889').then(r.t.bind(r, 593162, 19))
                })
            })
        ]
    });
}
function P(e) {
    let { disabled: n, channel: r } = e,
        { analyticsLocations: i } = (0, p.ZP)(h.Z.GIFT_BUTTON),
        [a, l] = o.useState(!1),
        u = (0, c.e7)([T.Z], () => !(null === T.Z || void 0 === T.Z ? void 0 : T.Z.hasLayers())),
        _ = (0, c.e7)([b.default], () => b.default.getCurrentUser()),
        y = null != _ ? S.default.age(_.id) : 0,
        P = !n && u && y >= x,
        { enabled: M } = v.O.useExperiment({ location: 'gift-button' }),
        k = [];
    M && P && k.push(d.z.NITROWEEN_COACHMARKS);
    let [U, B] = (0, g.US)(k),
        G = null != U,
        Z = (0, A.Ft)(r),
        { Component: F, events: V, play: j } = (0, f.$)();
    if (n) return null;
    let H = () => {
        (0, E.Z)({
            isGift: !0,
            giftRecipient: null == Z ? void 0 : Z,
            giftMessage: O.intl.string(O.t['rX/m/f']),
            initialPlanId: null,
            analyticsLocations: i,
            analyticsObject: {
                page: r.isPrivate() ? C.ZY5.DM_CHANNEL : C.ZY5.GUILD_CHANNEL,
                section: C.jXE.CHANNEL_TEXT_AREA,
                object: C.qAy.NITROWEEN_BUTTON_ICON,
                objectType: C.Qqv.GIFT
            }
        });
    };
    return (0, s.jsxs)('div', {
        className: D.container,
        onMouseEnter: () => {
            !a && l(!0);
        },
        onMouseLeave: () => {
            l(!1);
        },
        children: [
            G &&
                (0, s.jsx)(I.Z, {
                    onComplete: () => l(!1),
                    onCheckItOutClick: H,
                    markAsDismissed: B
                }),
            (0, s.jsx)(N.Z, {
                innerClassName: L.button,
                'aria-label': O.intl.string(O.t.Z1RnTk),
                isActive: !1,
                onClick: () => {
                    j(), l(!1), (0, m.EW)(d.z.NITROWEEN_ANIMATED_GIFTING_ICON, { dismissAction: R.L.TAKE_ACTION }), H();
                },
                ...V,
                children: (0, s.jsx)(w, {
                    animatedIconComponent: F,
                    hovered: a,
                    isCoachmarkDismissed: !G
                })
            })
        ]
    });
}
n.Z = o.memo(P);
