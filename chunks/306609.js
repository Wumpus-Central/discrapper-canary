n.d(t, { l: () => D }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(642128),
    s = n(442837),
    c = n(481060),
    d = n(493773),
    u = n(347469),
    p = n(100527),
    m = n(906732),
    f = n(659580),
    h = n(795318),
    g = n(53691),
    _ = n(166335),
    b = n(594174),
    v = n(626135),
    y = n(111361),
    x = n(74538),
    O = n(709706),
    E = n(378441),
    j = n(799143),
    N = n(358820),
    C = n(448697),
    I = n(365831),
    S = n(639539),
    P = n(627325),
    T = n(981631),
    A = n(354459),
    w = n(474936),
    Z = n(388032),
    k = n(848980);
function R(e) {
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
function L(e, t) {
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
function D(e) {
    let { onSettingsButtonClick: t, wide: n, showOutputDevices: a = !1 } = e,
        [D, M] = i.useState(''),
        { analyticsLocations: W } = (0, m.ZP)(p.Z.VOICE_FILTER_POPOUT),
        F = i.useRef(null),
        U = (0, u.Z)({
            minDimension: 400,
            maxDimension: 600,
            resizableDomNodeRef: F,
            onElementResize: (e, t) => {},
            onElementResizeEnd: (e) => {},
            orientation: u.y.VERTICAL_TOP
        }),
        B = (0, s.e7)([b.default], () => (0, y.I5)(b.default.getCurrentUser())),
        G = (0, s.e7)([O.Z], () => O.Z.getCatalogUpdateTime()),
        [H, V] = i.useState(!1),
        [z, K] = i.useState(!1),
        { activeVoice: Y } = (0, E.o)(),
        X = (0, c.q_F)({
            transform: H ? 'translateY(-$8px) scale('.concat(0.96, ')') : 'translateY(0px) scale(1)',
            config: {
                duration: 150,
                mass: 1,
                stiffness: 711.1,
                damping: 40
            }
        }),
        q = (0, c.q_F)({
            transform: H ? 'translateY(0px)' : 'translateY(50px)',
            config: {
                duration: 150,
                mass: 1,
                stiffness: 711.1,
                damping: 40
            }
        }),
        Q = (0, c.q_F)({
            to: {
                bottom: '' !== D ? 'translateY(75px)' : 'translateY(50px)',
                opacity: +('' === D)
            },
            config: {
                tension: 280,
                friction: 24,
                duration: 200
            }
        }),
        J = i.useRef(null);
    (0, d.ZP)(() => {
        (0, N.r5)(), v.default.track(T.rMx.VOICE_FILTER_PICKER_OPENED, { active_voice_filter_id: null != Y ? Y : null });
    });
    let $ = i.useCallback(() => M(''), [M]);
    return (0, r.jsx)(m.Gt, {
        value: W,
        children: (0, r.jsxs)('div', {
            ref: F,
            className: o()(k.voiceFiltersPopout, { [k.wide]: n }),
            style: { height: 500 },
            children: [
                (0, r.jsx)('div', {
                    className: k.resizeHandle,
                    onMouseDown: U,
                    children: (0, r.jsx)('div', { className: k.resizePill })
                }),
                (0, r.jsx)(c.E1j, {
                    size: c.E1j.Sizes.MEDIUM,
                    placeholder: Z.NW.string(Z.t.hHCZJS),
                    className: k.voiceFiltersHeader,
                    autoFocus: !0,
                    onChange: M,
                    query: D,
                    onClear: $
                }),
                (0, r.jsx)(P.w, {
                    query: D,
                    columns: n ? 5 : 4,
                    handleScroll: (e) => {
                        let t = J.current;
                        if (null == t || (V(e > 0), z)) return;
                        let { height: n, totalHeight: r } = t.getListDimensions();
                        e < r - n || (K(!0), v.default.track(T.rMx.VOICE_FILTER_PICKER_SCROLLED));
                    },
                    voiceListRef: J
                }),
                !B &&
                    (0, r.jsxs)(l.animated.div, {
                        style: L(R({}, Q), { display: Q.opacity.to((e) => (0 === e ? 'none' : 'block')) }),
                        className: k.upsellCountdownContainer,
                        children: [
                            null != G &&
                                (0, r.jsx)(l.animated.div, {
                                    style: X,
                                    children: (0, r.jsx)(S.J, {
                                        catalogUpdateTime: G,
                                        isScrolled: H
                                    })
                                }),
                            (0, r.jsx)('div', {
                                className: k.upsellContainer,
                                children: (0, r.jsx)(l.animated.div, {
                                    style: q,
                                    children: (0, r.jsx)(g.p, {
                                        showUpsell: !0,
                                        text: Z.NW.format(Z.t['XMDm8/'], {
                                            nitroTierName: (0, x.Px)(w.p9.TIER_2),
                                            onClick: () => (0, _.i)()
                                        }),
                                        button: Z.NW.string(Z.t.cRCCJy),
                                        buttonAnalyticsObject: { section: T.jXE.VOICE_FILTERS_FLOATING_UPSELL },
                                        showShadow: !1,
                                        position: 'inline',
                                        className: k.upsell,
                                        buttonSize: 'sm',
                                        useLockIcon: !0,
                                        buttonStyles: k.subscribeButton
                                    })
                                })
                            })
                        ]
                    }),
                (0, r.jsx)(I.y, {}),
                (0, r.jsx)(C.R, {}),
                (0, r.jsxs)('div', {
                    className: o()(k.voiceFiltersFooter, { [k.hasActiveVoice]: null != Y }),
                    children: [
                        (0, r.jsx)(j.Y, {}),
                        a && (0, r.jsx)(j.a, {}),
                        null != t &&
                            (0, r.jsx)(c.yRy, {
                                position: 'top',
                                renderPopout: () =>
                                    (0, r.jsx)(f.default, {
                                        renderInputModes: !0,
                                        renderInputVolume: !0,
                                        onClose: t,
                                        onInteraction: (0, h.u)('AudioDeviceMenu', 'VoiceFiltersPopout', { entrypoint: A.A5.THREE_DOT })
                                    }),
                                children: (e) =>
                                    (0, r.jsx)(
                                        c.zxk,
                                        L(R({}, e), {
                                            size: c.zxk.Sizes.MIN,
                                            look: c.zxk.Looks.BLANK,
                                            grow: !1,
                                            className: k.voiceFiltersFooterButton,
                                            innerClassName: k.voiceFiltersFooterButtonInner,
                                            onClick: (t) => {
                                                var n;
                                                v.default.track(T.rMx.VOICE_FILTER_VOICE_SETTINGS_CLICKED, { active_voice_filter_id: null != Y ? Y : null }), null === (n = e.onClick) || void 0 === n || n.call(e, t);
                                            },
                                            children: (0, r.jsx)(c.Huf, {
                                                size: 'custom',
                                                width: 20,
                                                height: 20
                                            })
                                        })
                                    )
                            })
                    ]
                })
            ]
        })
    });
}
