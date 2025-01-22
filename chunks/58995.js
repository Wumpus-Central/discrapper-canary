var i = r(47120);
var a = r(653041);
var o = r(200651),
    s = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(442837),
    d = r(704215),
    f = r(996146),
    p = r(481060),
    h = r(100527),
    _ = r(906732),
    m = r(605236),
    g = r(243778),
    E = r(963249),
    v = r(599659),
    y = r(282925),
    b = r(819640),
    I = r(594174),
    T = r(70956),
    S = r(709054),
    A = r(51144),
    C = r(443603),
    N = r(981631),
    R = r(921944),
    O = r(388032),
    D = r(145695),
    L = r(553796);
let x = T.Z.Millis.DAYS_30;
function w(e) {
    let { animatedIconComponent: n, hovered: i, isCoachmarkDismissed: a } = e,
        s = !a || i;
    return (0, o.jsxs)('div', {
        className: D.iconContainer,
        children: [
            (0, o.jsx)('div', {
                className: u()(D.decorativeLayer, { [D.decorativeLayerActive]: s }),
                style: { zIndex: 3 },
                children: (0, o.jsx)(p.LottieAnimation, {
                    shouldAnimate: s,
                    importData: () => r.e('39298').then(r.t.bind(r, 324952, 19))
                })
            }),
            (0, o.jsx)('div', {
                className: u()(D.giftIconButton, { [D.giftIconButtonActive]: s }),
                style: { zIndex: 2 },
                children: (0, o.jsx)(n, { color: 'currentColor' })
            }),
            (0, o.jsx)('div', {
                className: u()(D.decorativeLayer, { [D.decorativeLayerActive]: s }),
                style: { zIndex: 1 },
                children: (0, o.jsx)(p.LottieAnimation, {
                    shouldAnimate: s,
                    importData: () => r.e('58889').then(r.t.bind(r, 593162, 19))
                })
            })
        ]
    });
}
function P(e) {
    let { disabled: n, channel: r } = e,
        { analyticsLocations: i } = (0, _.ZP)(h.Z.GIFT_BUTTON),
        [a, l] = s.useState(!1),
        u = (0, c.e7)([b.Z], () => !(null === b.Z || void 0 === b.Z ? void 0 : b.Z.hasLayers())),
        p = (0, c.e7)([I.default], () => I.default.getCurrentUser()),
        T = null != p ? S.default.age(p.id) : 0,
        P = !n && u && T >= x,
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
                page: r.isPrivate() ? N.ZY5.DM_CHANNEL : N.ZY5.GUILD_CHANNEL,
                section: N.jXE.CHANNEL_TEXT_AREA,
                object: N.qAy.NITROWEEN_BUTTON_ICON,
                objectType: N.Qqv.GIFT
            }
        });
    };
    return (0, o.jsxs)('div', {
        className: D.container,
        onMouseEnter: () => {
            !a && l(!0);
        },
        onMouseLeave: () => {
            l(!1);
        },
        children: [
            G &&
                (0, o.jsx)(y.Z, {
                    onComplete: () => l(!1),
                    onCheckItOutClick: H,
                    markAsDismissed: B
                }),
            (0, o.jsx)(C.Z, {
                innerClassName: L.button,
                'aria-label': O.intl.string(O.t.Z1RnTk),
                isActive: !1,
                onClick: () => {
                    j(), l(!1), (0, m.EW)(d.z.NITROWEEN_ANIMATED_GIFTING_ICON, { dismissAction: R.L.TAKE_ACTION }), H();
                },
                ...V,
                children: (0, o.jsx)(w, {
                    animatedIconComponent: F,
                    hovered: a,
                    isCoachmarkDismissed: !G
                })
            })
        ]
    });
}
n.Z = s.memo(P);
