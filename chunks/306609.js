(n.d(t, { l: () => W }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(855659),
    s = n(442837),
    c = n(481060),
    u = n(493773),
    d = n(347469),
    f = n(40851),
    p = n(100527),
    m = n(906732),
    g = n(659580),
    h = n(795318),
    b = n(670863),
    v = n(53691),
    _ = n(457165),
    y = n(131951),
    O = n(594174),
    S = n(626135),
    I = n(111361),
    j = n(74538),
    x = n(743498),
    E = n(967021),
    P = n(709706),
    C = n(378441),
    T = n(358820),
    N = n(448697),
    A = n(946196),
    w = n(365831),
    D = n(639539),
    Z = n(627325),
    L = n(981631),
    M = n(354459),
    k = n(474936),
    U = n(65154),
    R = n(48500),
    V = n(388032),
    F = n(130802);
function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function B(e, t) {
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
    let { onSettingsButtonClick: t, wide: n, showOutputDevices: l = !1, showSearchBar: W = !0 } = e,
        [H, Y] = i.useState(''),
        { analyticsLocations: z, newestAnalyticsLocation: J } = (0, m.ZP)(p.Z.VOICE_FILTER_POPOUT),
        K = i.useRef(null),
        q = (0, d.Z)({
            minDimension: 400,
            maxDimension: 600,
            resizableDomNodeRef: K,
            onElementResize: (e, t) => {},
            onElementResizeEnd: (e) => {},
            orientation: d.y.VERTICAL_TOP
        });
    (0, V.useSyncMessages)(R.messagesLoader);
    let X = (0, s.e7)([O.default], () => (0, I.I5)(O.default.getCurrentUser())),
        Q = (0, s.e7)([P.Z], () => P.Z.getCatalogUpdateTime()),
        [$, ee] = i.useState(!1),
        [et, en] = i.useState(!1),
        { activeVoice: er } = (0, C.o)(),
        ei = (0, E.HM)({
            location: z[0],
            autoTrackExposure: !0
        }),
        el = (0, c.q_F)({
            transform: $ ? 'translateY(-8px) scale('.concat(0.96, ')') : 'translateY(0px) scale(1)',
            config: {
                duration: 150,
                mass: 1,
                stiffness: 711.1,
                damping: 40
            }
        }),
        ea = (0, c.q_F)({
            y: 50 * !$,
            config: {
                duration: 150,
                mass: 1,
                stiffness: 711.1,
                damping: 40
            }
        }),
        eo = (0, c.q_F)({
            to: {
                bottom: '' !== H ? 'translateY(75px)' : 'translateY(50px)',
                opacity: +('' === H)
            },
            config: {
                tension: 280,
                friction: 24,
                duration: 200
            }
        }),
        es = i.useRef(null);
    (0, u.ZP)(() => {
        ((0, T.r5)(), ei && (0, x.jG)(), S.default.track(L.rMx.VOICE_FILTER_PICKER_OPENED, { active_voice_filter_id: null != er ? er : null }));
    });
    let ec = i.useCallback(() => Y(''), [Y]),
        eu = i.useRef(null),
        ed = (0, f.bp)() !== L.IlC.OVERLAY;
    return (0, r.jsx)(m.Gt, {
        value: z,
        children: (0, r.jsxs)('div', {
            ref: K,
            className: a()(F.voiceFiltersPopout, {
                [F.wide]: n,
                [F.notResizable]: !ed
            }),
            style: { height: 500 },
            children: [
                ed &&
                    (0, r.jsx)('div', {
                        className: F.resizeHandle,
                        onMouseDown: q,
                        children: (0, r.jsx)('div', { className: F.resizePill })
                    }),
                W &&
                    (0, r.jsx)(c.E1j, {
                        size: c.E1j.Sizes.MEDIUM,
                        placeholder: V.intl.string(V.t.hHCZJS),
                        className: F.voiceFiltersHeader,
                        autoFocus: !0,
                        onChange: Y,
                        query: H,
                        onClear: ec
                    }),
                (0, r.jsx)(Z.w, {
                    query: H,
                    columns: n ? 5 : 4,
                    handleScroll: (e) => {
                        let t = es.current;
                        if (null == t || (ee(e > 0), et)) return;
                        let { height: n, totalHeight: r } = t.getListDimensions();
                        e < r - n || (en(!0), S.default.track(L.rMx.VOICE_FILTER_PICKER_SCROLLED));
                    },
                    voiceListRef: es
                }),
                !X &&
                    (0, r.jsxs)(o.animated.div, {
                        style: B(G({}, eo), { display: eo.opacity.to((e) => (0 === e ? 'none' : 'block')) }),
                        className: F.upsellCountdownContainer,
                        children: [
                            null != Q &&
                                (0, r.jsx)(o.animated.div, {
                                    style: el,
                                    children: (0, r.jsx)(D.J, {
                                        catalogUpdateTime: Q,
                                        isScrolled: $
                                    })
                                }),
                            (0, r.jsx)('div', {
                                className: F.upsellContainer,
                                children: (0, r.jsx)(o.animated.div, {
                                    style: {
                                        y: ea.y,
                                        opacity: ea.y.to((e) => +(50 !== e))
                                    },
                                    children: (0, r.jsx)(v.p, {
                                        showUpsell: !0,
                                        text: V.intl.format(V.t['XMDm8/'], {
                                            nitroTierName: (0, j.Px)(k.p9.TIER_2),
                                            onClick: () => (0, _.i)()
                                        }),
                                        button: V.intl.string(V.t.cRCCJy),
                                        buttonAnalyticsObject: { section: L.jXE.VOICE_FILTERS_FLOATING_UPSELL },
                                        showShadow: !1,
                                        position: 'inline',
                                        className: F.upsell,
                                        buttonSize: 'sm',
                                        useLockIcon: !0,
                                        buttonStyles: F.subscribeButton
                                    })
                                })
                            })
                        ]
                    }),
                (0, r.jsx)(A.l, {}),
                (0, r.jsx)(N.R, {}),
                (0, r.jsx)(w.y, {}),
                (0, r.jsxs)('div', {
                    className: a()(F.voiceFiltersFooter, { [F.hasActiveVoice]: null != er }),
                    children: [
                        (0, r.jsx)(b.j, {
                            deviceType: U.h7.AUDIO_INPUT,
                            location: 'VoiceFiltersPopout',
                            onOpen: () => {
                                var e;
                                S.default.track(L.rMx.VOICE_FILTER_MIC_SELECTOR_OPENED, { active_voice_filter_id: null != (e = y.Z.getActiveVoiceFilter()) ? e : null });
                            },
                            popoutPosition: 'top'
                        }),
                        l &&
                            (0, r.jsx)(b.j, {
                                deviceType: U.h7.AUDIO_OUTPUT,
                                location: 'VoiceFiltersPopout',
                                popoutPosition: 'top'
                            }),
                        (0, r.jsx)(c.yRy, {
                            targetElementRef: eu,
                            position: 'top',
                            align: 'right',
                            renderPopout: () =>
                                (0, r.jsx)(g.default, {
                                    renderInputModes: !0,
                                    renderInputVolume: !0,
                                    renderInputDevices: !0,
                                    renderOutputDevices: l,
                                    renderOutputVolume: l,
                                    onClose: t,
                                    onInteraction: (0, h.u)('AudioDeviceMenu', J, { entrypoint: M.A5.THREE_DOT }),
                                    minimal: !0
                                }),
                            children: (e) =>
                                (0, r.jsx)(
                                    c.hU,
                                    B(G({ variant: 'secondary' }, e), {
                                        buttonRef: eu,
                                        icon: c.Huf,
                                        onClick: (t) => {
                                            var n;
                                            (S.default.track(L.rMx.VOICE_FILTER_VOICE_SETTINGS_CLICKED, { active_voice_filter_id: null != er ? er : null }), null == (n = e.onClick) || n.call(e, t));
                                        },
                                        'aria-label': V.intl.string(V.t['ClGM/P'])
                                    })
                                )
                        })
                    ]
                })
            ]
        })
    });
}
