n.d(t, { l: () => U }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    l = n(683305),
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
    j = n(111361),
    x = n(74538),
    C = n(743498),
    I = n(967021),
    O = n(709706),
    E = n(378441),
    P = n(799143),
    N = n(358820),
    S = n(448697),
    w = n(946196),
    T = n(365831),
    L = n(639539),
    k = n(627325),
    Z = n(981631),
    D = n(354459),
    A = n(474936),
    F = n(722565),
    M = n(388032),
    R = n(130802);
function B(e) {
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
function z(e, t) {
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
function U(e) {
    let { onSettingsButtonClick: t, wide: n, showOutputDevices: a = !1 } = e,
        [U, W] = i.useState(''),
        { analyticsLocations: V, newestAnalyticsLocation: H } = (0, m.ZP)(_.Z.VOICE_FILTER_POPOUT),
        G = i.useRef(null),
        Y = (0, u.Z)({
            minDimension: 400,
            maxDimension: 600,
            resizableDomNodeRef: G,
            onElementResize: (e, t) => {},
            onElementResizeEnd: (e) => {},
            orientation: u.y.VERTICAL_TOP
        });
    (0, M.useSyncMessages)(F.messagesLoader);
    let q = (0, s.e7)([b.default], () => (0, j.I5)(b.default.getCurrentUser())),
        X = (0, s.e7)([O.Z], () => O.Z.getCatalogUpdateTime()),
        [K, J] = i.useState(!1),
        [Q, $] = i.useState(!1),
        { activeVoice: ee } = (0, E.o)(),
        et = (0, I.vi)({
            location: V[0],
            autoTrackExposure: !0
        }),
        en = (0, c.q_F)({
            transform: K ? 'translateY(-8px) scale('.concat(0.96, ')') : 'translateY(0px) scale(1)',
            config: {
                duration: 150,
                mass: 1,
                stiffness: 711.1,
                damping: 40
            }
        }),
        er = (0, c.q_F)({
            y: 50 * !K,
            config: {
                duration: 150,
                mass: 1,
                stiffness: 711.1,
                damping: 40
            }
        }),
        ei = (0, c.q_F)({
            to: {
                bottom: '' !== U ? 'translateY(75px)' : 'translateY(50px)',
                opacity: +('' === U)
            },
            config: {
                tension: 280,
                friction: 24,
                duration: 200
            }
        }),
        ea = i.useRef(null);
    (0, d.ZP)(() => {
        (0, N.r5)(), et && (0, C.jG)(), y.default.track(Z.rMx.VOICE_FILTER_PICKER_OPENED, { active_voice_filter_id: null != ee ? ee : null });
    });
    let { simplifiedSettingsEnabled: eo } = (0, v.Z)({ location: 'VoiceFiltersPopout' }),
        el = i.useCallback(() => W(''), [W]);
    return (0, r.jsx)(m.Gt, {
        value: V,
        children: (0, r.jsxs)('div', {
            ref: G,
            className: o()(R.voiceFiltersPopout, { [R.wide]: n }),
            style: { height: 500 },
            children: [
                (0, r.jsx)('div', {
                    className: R.resizeHandle,
                    onMouseDown: Y,
                    children: (0, r.jsx)('div', { className: R.resizePill })
                }),
                (0, r.jsx)(c.E1j, {
                    size: c.E1j.Sizes.MEDIUM,
                    placeholder: M.intl.string(M.t.hHCZJS),
                    className: R.voiceFiltersHeader,
                    autoFocus: !0,
                    onChange: W,
                    query: U,
                    onClear: el
                }),
                (0, r.jsx)(k.w, {
                    query: U,
                    columns: n ? 5 : 4,
                    handleScroll: (e) => {
                        let t = ea.current;
                        if (null == t || (J(e > 0), Q)) return;
                        let { height: n, totalHeight: r } = t.getListDimensions();
                        e < r - n || ($(!0), y.default.track(Z.rMx.VOICE_FILTER_PICKER_SCROLLED));
                    },
                    voiceListRef: ea
                }),
                !q &&
                    (0, r.jsxs)(l.animated.div, {
                        style: z(B({}, ei), { display: ei.opacity.to((e) => (0 === e ? 'none' : 'block')) }),
                        className: R.upsellCountdownContainer,
                        children: [
                            null != X &&
                                (0, r.jsx)(l.animated.div, {
                                    style: en,
                                    children: (0, r.jsx)(L.J, {
                                        catalogUpdateTime: X,
                                        isScrolled: K
                                    })
                                }),
                            (0, r.jsx)('div', {
                                className: R.upsellContainer,
                                children: (0, r.jsx)(l.animated.div, {
                                    style: {
                                        y: er.y,
                                        opacity: er.y.to((e) => +(50 !== e))
                                    },
                                    children: (0, r.jsx)(g.p, {
                                        showUpsell: !0,
                                        text: M.intl.format(M.t['XMDm8/'], {
                                            nitroTierName: (0, x.Px)(A.p9.TIER_2),
                                            onClick: () => (0, h.i)()
                                        }),
                                        button: M.intl.string(M.t.cRCCJy),
                                        buttonAnalyticsObject: { section: Z.jXE.VOICE_FILTERS_FLOATING_UPSELL },
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
                (0, r.jsx)(w.l, {}),
                (0, r.jsx)(T.y, {}),
                (0, r.jsx)(S.R, {}),
                (0, r.jsxs)('div', {
                    className: o()(R.voiceFiltersFooter, { [R.hasActiveVoice]: null != ee }),
                    children: [
                        (0, r.jsx)(P.Y, {}),
                        a && (0, r.jsx)(P.a, {}),
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
                                    onInteraction: (0, p.u)('AudioDeviceMenu', H, { entrypoint: D.A5.THREE_DOT }),
                                    simplified: eo
                                }),
                            children: (e) =>
                                (0, r.jsx)(
                                    c.zxk,
                                    z(B({}, e), {
                                        size: c.zxk.Sizes.MIN,
                                        look: c.zxk.Looks.BLANK,
                                        grow: !1,
                                        className: R.voiceFiltersFooterButton,
                                        innerClassName: R.voiceFiltersFooterButtonInner,
                                        onClick: (t) => {
                                            var n;
                                            y.default.track(Z.rMx.VOICE_FILTER_VOICE_SETTINGS_CLICKED, { active_voice_filter_id: null != ee ? ee : null }), null == (n = e.onClick) || n.call(e, t);
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
