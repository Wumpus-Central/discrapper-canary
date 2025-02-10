n.d(t, { Z: () => x }), n(47120), n(653041);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(704215),
    u = n(996146),
    c = n(481060),
    d = n(100527),
    f = n(906732),
    _ = n(605236),
    p = n(243778),
    h = n(963249),
    m = n(599659),
    g = n(282925),
    E = n(819640),
    v = n(594174),
    y = n(70956),
    I = n(709054),
    T = n(51144),
    b = n(443603),
    S = n(981631),
    A = n(921944),
    N = n(388032),
    C = n(974090),
    R = n(446016);
let O = y.Z.Millis.DAYS_30;
function D(e) {
    let { animatedIconComponent: t, hovered: r, isCoachmarkDismissed: a } = e,
        o = !a || r;
    return (0, i.jsxs)('div', {
        className: C.iconContainer,
        children: [
            (0, i.jsx)('div', {
                className: s()(C.decorativeLayer, { [C.decorativeLayerActive]: o }),
                style: { zIndex: 3 },
                children: (0, i.jsx)(c.Fmz, {
                    shouldAnimate: o,
                    importData: () => n.e('39298').then(n.t.bind(n, 324952, 19))
                })
            }),
            (0, i.jsx)('div', {
                className: s()(C.giftIconButton, { [C.giftIconButtonActive]: o }),
                style: { zIndex: 2 },
                children: (0, i.jsx)(t, { color: 'currentColor' })
            }),
            (0, i.jsx)('div', {
                className: s()(C.decorativeLayer, { [C.decorativeLayerActive]: o }),
                style: { zIndex: 1 },
                children: (0, i.jsx)(c.Fmz, {
                    shouldAnimate: o,
                    importData: () => n.e('58889').then(n.t.bind(n, 593162, 19))
                })
            })
        ]
    });
}
function L(e) {
    let { disabled: t, channel: n } = e,
        { analyticsLocations: a } = (0, f.ZP)(d.Z.GIFT_BUTTON),
        [s, c] = r.useState(!1),
        y = (0, o.e7)([E.Z], () => !(null === E.Z || void 0 === E.Z ? void 0 : E.Z.hasLayers())),
        L = (0, o.e7)([v.default], () => v.default.getCurrentUser()),
        x = null != L ? I.default.age(L.id) : 0,
        P = !t && y && x >= O,
        { enabled: w } = m.O.useExperiment({ location: 'gift-button' }),
        M = [];
    w && P && M.push(l.z.NITROWEEN_COACHMARKS);
    let [k, U] = (0, p.US)(M),
        G = null != k,
        B = (0, T.Ft)(n),
        { Component: Z, events: F, play: V } = (0, u.$)();
    if (t) return null;
    let j = () => {
        (0, h.Z)({
            isGift: !0,
            giftRecipient: null == B ? void 0 : B,
            giftMessage: N.intl.string(N.t['rX/m/f']),
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
    return (0, i.jsxs)('div', {
        className: C.container,
        onMouseEnter: () => {
            s || c(!0);
        },
        onMouseLeave: () => {
            c(!1);
        },
        children: [
            G &&
                (0, i.jsx)(g.Z, {
                    onComplete: () => c(!1),
                    onCheckItOutClick: j,
                    markAsDismissed: U
                }),
            (0, i.jsx)(b.Z, {
                innerClassName: R.button,
                'aria-label': N.intl.string(N.t.Z1RnTk),
                isActive: !1,
                onClick: () => {
                    V(), c(!1), (0, _.EW)(l.z.NITROWEEN_ANIMATED_GIFTING_ICON, { dismissAction: A.L.TAKE_ACTION }), j();
                },
                ...F,
                children: (0, i.jsx)(D, {
                    animatedIconComponent: Z,
                    hovered: s,
                    isCoachmarkDismissed: !G
                })
            })
        ]
    });
}
let x = r.memo(L);
