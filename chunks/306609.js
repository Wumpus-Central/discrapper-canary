n.d(t, { l: () => W }), n(47120);
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
    b = n(221241),
    v = n(594174),
    y = n(626135),
    x = n(111361),
    O = n(74538),
    E = n(709706),
    j = n(378441),
    N = n(799143),
    C = n(358820),
    I = n(448697),
    S = n(365831),
    T = n(639539),
    P = n(627325),
    A = n(981631),
    w = n(354459),
    Z = n(474936),
    k = n(613153),
    R = n(388032),
    D = n(422111);
function L(e) {
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
function W(e) {
    let { onSettingsButtonClick: t, wide: n, showOutputDevices: a = !1 } = e,
        [W, F] = i.useState(''),
        { analyticsLocations: U, newestAnalyticsLocation: B } = (0, m.ZP)(p.Z.VOICE_FILTER_POPOUT),
        G = i.useRef(null),
        H = (0, u.Z)({
            minDimension: 400,
            maxDimension: 600,
            resizableDomNodeRef: G,
            onElementResize: (e, t) => {},
            onElementResizeEnd: (e) => {},
            orientation: u.y.VERTICAL_TOP
        });
    (0, R.j1)(k.M);
    let V = (0, s.e7)([v.default], () => (0, x.I5)(v.default.getCurrentUser())),
        z = (0, s.e7)([E.Z], () => E.Z.getCatalogUpdateTime()),
        [K, Y] = i.useState(!1),
        [X, q] = i.useState(!1),
        { activeVoice: Q } = (0, j.o)(),
        J = (0, c.q_F)({
            transform: K ? 'translateY(-$8px) scale('.concat(0.96, ')') : 'translateY(0px) scale(1)',
            config: {
                duration: 150,
                mass: 1,
                stiffness: 711.1,
                damping: 40
            }
        }),
        $ = (0, c.q_F)({
            transform: K ? 'translateY(0px)' : 'translateY(50px)',
            config: {
                duration: 150,
                mass: 1,
                stiffness: 711.1,
                damping: 40
            }
        }),
        ee = (0, c.q_F)({
            to: {
                bottom: '' !== W ? 'translateY(75px)' : 'translateY(50px)',
                opacity: +('' === W)
            },
            config: {
                tension: 280,
                friction: 24,
                duration: 200
            }
        }),
        et = i.useRef(null);
    (0, d.ZP)(() => {
        (0, C.r5)(), y.default.track(A.rMx.VOICE_FILTER_PICKER_OPENED, { active_voice_filter_id: null != Q ? Q : null });
    });
    let { simplifiedSettingsEnabled: en } = (0, b.Z)({ location: 'VoiceFiltersPopout' }),
        er = i.useCallback(() => F(''), [F]);
    return (0, r.jsx)(m.Gt, {
        value: U,
        children: (0, r.jsxs)('div', {
            ref: G,
            className: o()(D.voiceFiltersPopout, { [D.wide]: n }),
            style: { height: 500 },
            children: [
                (0, r.jsx)('div', {
                    className: D.resizeHandle,
                    onMouseDown: H,
                    children: (0, r.jsx)('div', { className: D.resizePill })
                }),
                (0, r.jsx)(c.E1j, {
                    size: c.E1j.Sizes.MEDIUM,
                    placeholder: R.NW.string(R.t.hHCZJS),
                    className: D.voiceFiltersHeader,
                    autoFocus: !0,
                    onChange: F,
                    query: W,
                    onClear: er
                }),
                (0, r.jsx)(P.w, {
                    query: W,
                    columns: n ? 5 : 4,
                    handleScroll: (e) => {
                        let t = et.current;
                        if (null == t || (Y(e > 0), X)) return;
                        let { height: n, totalHeight: r } = t.getListDimensions();
                        e < r - n || (q(!0), y.default.track(A.rMx.VOICE_FILTER_PICKER_SCROLLED));
                    },
                    voiceListRef: et
                }),
                !V &&
                    (0, r.jsxs)(l.animated.div, {
                        style: M(L({}, ee), { display: ee.opacity.to((e) => (0 === e ? 'none' : 'block')) }),
                        className: D.upsellCountdownContainer,
                        children: [
                            null != z &&
                                (0, r.jsx)(l.animated.div, {
                                    style: J,
                                    children: (0, r.jsx)(T.J, {
                                        catalogUpdateTime: z,
                                        isScrolled: K
                                    })
                                }),
                            (0, r.jsx)('div', {
                                className: D.upsellContainer,
                                children: (0, r.jsx)(l.animated.div, {
                                    style: $,
                                    children: (0, r.jsx)(g.p, {
                                        showUpsell: !0,
                                        text: R.NW.format(R.t['XMDm8/'], {
                                            nitroTierName: (0, O.Px)(Z.p9.TIER_2),
                                            onClick: () => (0, _.i)()
                                        }),
                                        button: R.NW.string(R.t.cRCCJy),
                                        buttonAnalyticsObject: { section: A.jXE.VOICE_FILTERS_FLOATING_UPSELL },
                                        showShadow: !1,
                                        position: 'inline',
                                        className: D.upsell,
                                        buttonSize: 'sm',
                                        useLockIcon: !0,
                                        buttonStyles: D.subscribeButton
                                    })
                                })
                            })
                        ]
                    }),
                (0, r.jsx)(S.y, {}),
                (0, r.jsx)(I.R, {}),
                (0, r.jsxs)('div', {
                    className: o()(D.voiceFiltersFooter, { [D.hasActiveVoice]: null != Q }),
                    children: [
                        (0, r.jsx)(N.Y, {}),
                        a && (0, r.jsx)(N.a, {}),
                        (0, r.jsx)(c.yRy, {
                            position: 'top',
                            renderPopout: () =>
                                (0, r.jsx)(f.default, {
                                    renderInputModes: !0,
                                    renderInputVolume: !0,
                                    renderInputDevices: !0,
                                    renderOutputDevices: a,
                                    renderOutputVolume: a,
                                    onClose: t,
                                    onInteraction: (0, h.u)('AudioDeviceMenu', B, { entrypoint: w.A5.THREE_DOT }),
                                    simplified: en
                                }),
                            children: (e) =>
                                (0, r.jsx)(
                                    c.zxk,
                                    M(L({}, e), {
                                        size: c.zxk.Sizes.MIN,
                                        look: c.zxk.Looks.BLANK,
                                        grow: !1,
                                        className: D.voiceFiltersFooterButton,
                                        innerClassName: D.voiceFiltersFooterButtonInner,
                                        onClick: (t) => {
                                            var n;
                                            y.default.track(A.rMx.VOICE_FILTER_VOICE_SETTINGS_CLICKED, { active_voice_filter_id: null != Q ? Q : null }), null === (n = e.onClick) || void 0 === n || n.call(e, t);
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
