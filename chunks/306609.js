n.d(t, { l: () => F }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(642128),
    s = n(442837),
    c = n(481060),
    d = n(493773),
    u = n(347469),
    _ = n(100527),
    m = n(906732),
    f = n(659580),
    p = n(795318),
    g = n(53691),
    h = n(457165),
    v = n(221241),
    b = n(594174),
    y = n(626135),
    x = n(111361),
    j = n(74538),
    C = n(709706),
    I = n(378441),
    N = n(799143),
    O = n(358820),
    E = n(448697),
    P = n(365831),
    S = n(639539),
    w = n(627325),
    T = n(981631),
    L = n(354459),
    k = n(474936),
    Z = n(722565),
    D = n(388032),
    A = n(130802);
function W(e) {
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
function M(e, t) {
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
function F(e) {
    let { onSettingsButtonClick: t, wide: n, showOutputDevices: a = !1 } = e,
        [F, R] = i.useState(''),
        { analyticsLocations: B, newestAnalyticsLocation: z } = (0, m.ZP)(_.Z.VOICE_FILTER_POPOUT),
        U = i.useRef(null),
        V = (0, u.Z)({
            minDimension: 400,
            maxDimension: 600,
            resizableDomNodeRef: U,
            onElementResize: (e, t) => {},
            onElementResizeEnd: (e) => {},
            orientation: u.y.VERTICAL_TOP
        });
    (0, D.j1)(Z.M);
    let H = (0, s.e7)([b.default], () => (0, x.I5)(b.default.getCurrentUser())),
        G = (0, s.e7)([C.Z], () => C.Z.getCatalogUpdateTime()),
        [Y, q] = i.useState(!1),
        [X, K] = i.useState(!1),
        { activeVoice: J } = (0, I.o)(),
        Q = (0, c.q_F)({
            transform: Y ? 'translateY(-8px) scale('.concat(0.96, ')') : 'translateY(0px) scale(1)',
            config: {
                duration: 150,
                mass: 1,
                stiffness: 711.1,
                damping: 40
            }
        }),
        $ = (0, c.q_F)({
            transform: Y ? 'translateY(0px)' : 'translateY(50px)',
            config: {
                duration: 150,
                mass: 1,
                stiffness: 711.1,
                damping: 40
            }
        }),
        ee = (0, c.q_F)({
            to: {
                bottom: '' !== F ? 'translateY(75px)' : 'translateY(50px)',
                opacity: +('' === F)
            },
            config: {
                tension: 280,
                friction: 24,
                duration: 200
            }
        }),
        et = i.useRef(null);
    (0, d.ZP)(() => {
        (0, O.r5)(), y.default.track(T.rMx.VOICE_FILTER_PICKER_OPENED, { active_voice_filter_id: null != J ? J : null });
    });
    let { simplifiedSettingsEnabled: en } = (0, v.Z)({ location: 'VoiceFiltersPopout' }),
        er = i.useCallback(() => R(''), [R]);
    return (0, r.jsx)(m.Gt, {
        value: B,
        children: (0, r.jsxs)('div', {
            ref: U,
            className: o()(A.voiceFiltersPopout, { [A.wide]: n }),
            style: { height: 500 },
            children: [
                (0, r.jsx)('div', {
                    className: A.resizeHandle,
                    onMouseDown: V,
                    children: (0, r.jsx)('div', { className: A.resizePill })
                }),
                (0, r.jsx)(c.E1j, {
                    size: c.E1j.Sizes.MEDIUM,
                    placeholder: D.NW.string(D.t.hHCZJS),
                    className: A.voiceFiltersHeader,
                    autoFocus: !0,
                    onChange: R,
                    query: F,
                    onClear: er
                }),
                (0, r.jsx)(w.w, {
                    query: F,
                    columns: n ? 5 : 4,
                    handleScroll: (e) => {
                        let t = et.current;
                        if (null == t || (q(e > 0), X)) return;
                        let { height: n, totalHeight: r } = t.getListDimensions();
                        e < r - n || (K(!0), y.default.track(T.rMx.VOICE_FILTER_PICKER_SCROLLED));
                    },
                    voiceListRef: et
                }),
                !H &&
                    (0, r.jsxs)(l.animated.div, {
                        style: M(W({}, ee), { display: ee.opacity.to((e) => (0 === e ? 'none' : 'block')) }),
                        className: A.upsellCountdownContainer,
                        children: [
                            null != G &&
                                (0, r.jsx)(l.animated.div, {
                                    style: Q,
                                    children: (0, r.jsx)(S.J, {
                                        catalogUpdateTime: G,
                                        isScrolled: Y
                                    })
                                }),
                            (0, r.jsx)('div', {
                                className: A.upsellContainer,
                                children: (0, r.jsx)(l.animated.div, {
                                    style: $,
                                    children: (0, r.jsx)(g.p, {
                                        showUpsell: !0,
                                        text: D.NW.format(D.t['XMDm8/'], {
                                            nitroTierName: (0, j.Px)(k.p9.TIER_2),
                                            onClick: () => (0, h.i)()
                                        }),
                                        button: D.NW.string(D.t.cRCCJy),
                                        buttonAnalyticsObject: { section: T.jXE.VOICE_FILTERS_FLOATING_UPSELL },
                                        showShadow: !1,
                                        position: 'inline',
                                        className: A.upsell,
                                        buttonSize: 'sm',
                                        useLockIcon: !0,
                                        buttonStyles: A.subscribeButton
                                    })
                                })
                            })
                        ]
                    }),
                (0, r.jsx)(P.y, {}),
                (0, r.jsx)(E.R, {}),
                (0, r.jsxs)('div', {
                    className: o()(A.voiceFiltersFooter, { [A.hasActiveVoice]: null != J }),
                    children: [
                        (0, r.jsx)(N.Y, {}),
                        a && (0, r.jsx)(N.a, {}),
                        (0, r.jsx)(c.yRy, {
                            position: 'top',
                            align: 'right',
                            renderPopout: () =>
                                (0, r.jsx)(f.default, {
                                    renderInputModes: !0,
                                    renderInputVolume: !0,
                                    renderInputDevices: !0,
                                    renderOutputDevices: a,
                                    renderOutputVolume: a,
                                    onClose: t,
                                    onInteraction: (0, p.u)('AudioDeviceMenu', z, { entrypoint: L.A5.THREE_DOT }),
                                    simplified: en
                                }),
                            children: (e) =>
                                (0, r.jsx)(
                                    c.zxk,
                                    M(W({}, e), {
                                        size: c.zxk.Sizes.MIN,
                                        look: c.zxk.Looks.BLANK,
                                        grow: !1,
                                        className: A.voiceFiltersFooterButton,
                                        innerClassName: A.voiceFiltersFooterButtonInner,
                                        onClick: (t) => {
                                            var n;
                                            y.default.track(T.rMx.VOICE_FILTER_VOICE_SETTINGS_CLICKED, { active_voice_filter_id: null != J ? J : null }), null == (n = e.onClick) || n.call(e, t);
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
