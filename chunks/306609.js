n.d(t, { l: () => R }), n(388685);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(200100),
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
    P = n(946196),
    S = n(365831),
    w = n(639539),
    T = n(627325),
    L = n(981631),
    k = n(354459),
    Z = n(474936),
    D = n(287244),
    A = n(388032),
    W = n(146375);
function F(e) {
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
function R(e) {
    let { onSettingsButtonClick: t, wide: n, showOutputDevices: a = !1 } = e,
        [R, B] = i.useState(''),
        { analyticsLocations: z, newestAnalyticsLocation: U } = (0, m.ZP)(_.Z.VOICE_FILTER_POPOUT),
        V = i.useRef(null),
        H = (0, u.Z)({
            minDimension: 400,
            maxDimension: 600,
            resizableDomNodeRef: V,
            onElementResize: (e, t) => {},
            onElementResizeEnd: (e) => {},
            orientation: u.y.VERTICAL_TOP
        });
    (0, A.j1)(D.M);
    let G = (0, s.e7)([b.default], () => (0, x.I5)(b.default.getCurrentUser())),
        Y = (0, s.e7)([C.Z], () => C.Z.getCatalogUpdateTime()),
        [q, X] = i.useState(!1),
        [K, J] = i.useState(!1),
        { activeVoice: Q } = (0, I.o)(),
        $ = (0, c.q_F)({
            transform: q ? 'translateY(-8px) scale('.concat(0.96, ')') : 'translateY(0px) scale(1)',
            config: {
                duration: 150,
                mass: 1,
                stiffness: 711.1,
                damping: 40
            }
        }),
        ee = (0, c.q_F)({
            transform: q ? 'translateY(0px)' : 'translateY(50px)',
            config: {
                duration: 150,
                mass: 1,
                stiffness: 711.1,
                damping: 40
            }
        }),
        et = (0, c.q_F)({
            to: {
                bottom: '' !== R ? 'translateY(75px)' : 'translateY(50px)',
                opacity: +('' === R)
            },
            config: {
                tension: 280,
                friction: 24,
                duration: 200
            }
        }),
        en = i.useRef(null);
    (0, d.ZP)(() => {
        (0, O.r5)(), y.default.track(L.rMx.VOICE_FILTER_PICKER_OPENED, { active_voice_filter_id: null != Q ? Q : null });
    });
    let { simplifiedSettingsEnabled: er } = (0, v.Z)({ location: 'VoiceFiltersPopout' }),
        ei = i.useCallback(() => B(''), [B]);
    return (0, r.jsx)(m.Gt, {
        value: z,
        children: (0, r.jsxs)('div', {
            ref: V,
            className: o()(W.voiceFiltersPopout, { [W.wide]: n }),
            style: { height: 500 },
            children: [
                (0, r.jsx)('div', {
                    className: W.resizeHandle,
                    onMouseDown: H,
                    children: (0, r.jsx)('div', { className: W.resizePill })
                }),
                (0, r.jsx)(c.E1j, {
                    size: c.E1j.Sizes.MEDIUM,
                    placeholder: A.NW.string(A.t.hHCZJS),
                    className: W.voiceFiltersHeader,
                    autoFocus: !0,
                    onChange: B,
                    query: R,
                    onClear: ei
                }),
                (0, r.jsx)(T.w, {
                    query: R,
                    columns: n ? 5 : 4,
                    handleScroll: (e) => {
                        let t = en.current;
                        if (null == t || (X(e > 0), K)) return;
                        let { height: n, totalHeight: r } = t.getListDimensions();
                        e < r - n || (J(!0), y.default.track(L.rMx.VOICE_FILTER_PICKER_SCROLLED));
                    },
                    voiceListRef: en
                }),
                !G &&
                    (0, r.jsxs)(l.animated.div, {
                        style: M(F({}, et), { display: et.opacity.to((e) => (0 === e ? 'none' : 'block')) }),
                        className: W.upsellCountdownContainer,
                        children: [
                            null != Y &&
                                (0, r.jsx)(l.animated.div, {
                                    style: $,
                                    children: (0, r.jsx)(w.J, {
                                        catalogUpdateTime: Y,
                                        isScrolled: q
                                    })
                                }),
                            (0, r.jsx)('div', {
                                className: W.upsellContainer,
                                children: (0, r.jsx)(l.animated.div, {
                                    style: ee,
                                    children: (0, r.jsx)(g.p, {
                                        showUpsell: !0,
                                        text: A.NW.format(A.t['XMDm8/'], {
                                            nitroTierName: (0, j.Px)(Z.p9.TIER_2),
                                            onClick: () => (0, h.i)()
                                        }),
                                        button: A.NW.string(A.t.cRCCJy),
                                        buttonAnalyticsObject: { section: L.jXE.VOICE_FILTERS_FLOATING_UPSELL },
                                        showShadow: !1,
                                        position: 'inline',
                                        className: W.upsell,
                                        buttonSize: 'sm',
                                        useLockIcon: !0,
                                        buttonStyles: W.subscribeButton
                                    })
                                })
                            })
                        ]
                    }),
                (0, r.jsx)(P.l, {}),
                (0, r.jsx)(S.y, {}),
                (0, r.jsx)(E.R, {}),
                (0, r.jsxs)('div', {
                    className: o()(W.voiceFiltersFooter, { [W.hasActiveVoice]: null != Q }),
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
                                    onInteraction: (0, p.u)('AudioDeviceMenu', U, { entrypoint: k.A5.THREE_DOT }),
                                    simplified: er
                                }),
                            children: (e) =>
                                (0, r.jsx)(
                                    c.zxk,
                                    M(F({}, e), {
                                        size: c.zxk.Sizes.MIN,
                                        look: c.zxk.Looks.BLANK,
                                        grow: !1,
                                        className: W.voiceFiltersFooterButton,
                                        innerClassName: W.voiceFiltersFooterButtonInner,
                                        onClick: (t) => {
                                            var n;
                                            y.default.track(L.rMx.VOICE_FILTER_VOICE_SETTINGS_CLICKED, { active_voice_filter_id: null != Q ? Q : null }), null == (n = e.onClick) || n.call(e, t);
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
