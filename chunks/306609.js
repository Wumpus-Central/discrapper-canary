n.d(t, { l: () => M }), n(47120);
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
    f = n(682901),
    h = n(659580),
    g = n(795318),
    _ = n(53691),
    b = n(166335),
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
    P = n(639539),
    T = n(627325),
    A = n(981631),
    w = n(354459),
    Z = n(474936),
    k = n(388032),
    R = n(848980);
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
function D(e, t) {
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
function M(e) {
    let { onSettingsButtonClick: t, wide: n, showOutputDevices: a = !1 } = e,
        [M, W] = i.useState(''),
        { analyticsLocations: F } = (0, m.ZP)(p.Z.VOICE_FILTER_POPOUT),
        U = i.useRef(null),
        B = (0, u.Z)({
            minDimension: 400,
            maxDimension: 600,
            resizableDomNodeRef: U,
            onElementResize: (e, t) => {},
            onElementResizeEnd: (e) => {},
            orientation: u.y.VERTICAL_TOP
        }),
        G = (0, s.e7)([v.default], () => (0, x.I5)(v.default.getCurrentUser())),
        H = (0, s.e7)([E.Z], () => E.Z.getCatalogUpdateTime()),
        [V, z] = i.useState(!1),
        [K, Y] = i.useState(!1),
        { activeVoice: X } = (0, j.o)(),
        q = (0, c.q_F)({
            transform: V ? 'translateY(-$8px) scale('.concat(0.96, ')') : 'translateY(0px) scale(1)',
            config: {
                duration: 150,
                mass: 1,
                stiffness: 711.1,
                damping: 40
            }
        }),
        Q = (0, c.q_F)({
            transform: V ? 'translateY(0px)' : 'translateY(50px)',
            config: {
                duration: 150,
                mass: 1,
                stiffness: 711.1,
                damping: 40
            }
        }),
        J = (0, c.q_F)({
            to: {
                bottom: '' !== M ? 'translateY(75px)' : 'translateY(50px)',
                opacity: +('' === M)
            },
            config: {
                tension: 280,
                friction: 24,
                duration: 200
            }
        }),
        $ = i.useRef(null);
    (0, d.ZP)(() => {
        (0, C.r5)(), y.default.track(A.rMx.VOICE_FILTER_PICKER_OPENED, { active_voice_filter_id: null != X ? X : null });
    });
    let { enabled: ee } = (0, f.Z)({ location: 'VoiceFiltersPopout' }),
        et = i.useCallback(() => W(''), [W]);
    return (0, r.jsx)(m.Gt, {
        value: F,
        children: (0, r.jsxs)('div', {
            ref: U,
            className: o()(R.voiceFiltersPopout, { [R.wide]: n }),
            style: { height: 500 },
            children: [
                (0, r.jsx)('div', {
                    className: R.resizeHandle,
                    onMouseDown: B,
                    children: (0, r.jsx)('div', { className: R.resizePill })
                }),
                (0, r.jsx)(c.E1j, {
                    size: c.E1j.Sizes.MEDIUM,
                    placeholder: k.NW.string(k.t.hHCZJS),
                    className: R.voiceFiltersHeader,
                    autoFocus: !0,
                    onChange: W,
                    query: M,
                    onClear: et
                }),
                (0, r.jsx)(T.w, {
                    query: M,
                    columns: n ? 5 : 4,
                    handleScroll: (e) => {
                        let t = $.current;
                        if (null == t || (z(e > 0), K)) return;
                        let { height: n, totalHeight: r } = t.getListDimensions();
                        e < r - n || (Y(!0), y.default.track(A.rMx.VOICE_FILTER_PICKER_SCROLLED));
                    },
                    voiceListRef: $
                }),
                !G &&
                    (0, r.jsxs)(l.animated.div, {
                        style: D(L({}, J), { display: J.opacity.to((e) => (0 === e ? 'none' : 'block')) }),
                        className: R.upsellCountdownContainer,
                        children: [
                            null != H &&
                                (0, r.jsx)(l.animated.div, {
                                    style: q,
                                    children: (0, r.jsx)(P.J, {
                                        catalogUpdateTime: H,
                                        isScrolled: V
                                    })
                                }),
                            (0, r.jsx)('div', {
                                className: R.upsellContainer,
                                children: (0, r.jsx)(l.animated.div, {
                                    style: Q,
                                    children: (0, r.jsx)(_.p, {
                                        showUpsell: !0,
                                        text: k.NW.format(k.t['XMDm8/'], {
                                            nitroTierName: (0, O.Px)(Z.p9.TIER_2),
                                            onClick: () => (0, b.i)()
                                        }),
                                        button: k.NW.string(k.t.cRCCJy),
                                        buttonAnalyticsObject: { section: A.jXE.VOICE_FILTERS_FLOATING_UPSELL },
                                        showShadow: !1,
                                        position: 'inline',
                                        className: R.upsell,
                                        buttonSize: 'sm',
                                        useLockIcon: !0,
                                        buttonStyles: R.subscribeButton
                                    })
                                })
                            })
                        ]
                    }),
                (0, r.jsx)(S.y, {}),
                (0, r.jsx)(I.R, {}),
                (0, r.jsxs)('div', {
                    className: o()(R.voiceFiltersFooter, { [R.hasActiveVoice]: null != X }),
                    children: [
                        (0, r.jsx)(N.Y, {}),
                        a && (0, r.jsx)(N.a, {}),
                        (0, r.jsx)(c.yRy, {
                            position: 'top',
                            renderPopout: () =>
                                (0, r.jsx)(h.default, {
                                    renderInputModes: !0,
                                    renderInputVolume: !0,
                                    renderInputDevices: !0,
                                    renderOutputDevices: a,
                                    renderOutputVolume: a,
                                    onClose: t,
                                    onInteraction: (0, g.u)('AudioDeviceMenu', 'VoiceFiltersPopout', { entrypoint: w.A5.THREE_DOT }),
                                    simplified: ee
                                }),
                            children: (e) =>
                                (0, r.jsx)(
                                    c.zxk,
                                    D(L({}, e), {
                                        size: c.zxk.Sizes.MIN,
                                        look: c.zxk.Looks.BLANK,
                                        grow: !1,
                                        className: R.voiceFiltersFooterButton,
                                        innerClassName: R.voiceFiltersFooterButtonInner,
                                        onClick: (t) => {
                                            var n;
                                            y.default.track(A.rMx.VOICE_FILTER_VOICE_SETTINGS_CLICKED, { active_voice_filter_id: null != X ? X : null }), null === (n = e.onClick) || void 0 === n || n.call(e, t);
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
