(n.d(t, { l: () => B }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(652141),
    s = n(442837),
    c = n(481060),
    u = n(493773),
    d = n(347469),
    f = n(40851),
    p = n(100527),
    m = n(906732),
    g = n(659580),
    _ = n(795318),
    v = n(670863),
    h = n(53691),
    b = n(457165),
    y = n(131951),
    O = n(594174),
    j = n(626135),
    S = n(111361),
    x = n(74538),
    I = n(743498),
    P = n(967021),
    C = n(709706),
    E = n(378441),
    w = n(358820),
    T = n(448697),
    N = n(946196),
    Z = n(365831),
    A = n(639539),
    D = n(627325),
    k = n(981631),
    L = n(354459),
    M = n(474936),
    U = n(65154),
    R = n(48500),
    V = n(388032),
    F = n(130802);
function W(e) {
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
function Y(e, t) {
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
function B(e) {
    let { onSettingsButtonClick: t, wide: n, showOutputDevices: l = !1, showSearchBar: B = !0 } = e,
        [G, H] = i.useState(''),
        { analyticsLocations: z, newestAnalyticsLocation: J } = (0, m.ZP)(p.Z.VOICE_FILTER_POPOUT),
        X = i.useRef(null),
        q = (0, d.Z)({
            minDimension: 400,
            maxDimension: 600,
            resizableDomNodeRef: X,
            onElementResize: (e, t) => {},
            onElementResizeEnd: (e) => {},
            orientation: d.y.VERTICAL_TOP
        });
    (0, V.useSyncMessages)(R.messagesLoader);
    let K = (0, s.e7)([O.default], () => (0, S.I5)(O.default.getCurrentUser())),
        Q = (0, s.e7)([C.Z], () => C.Z.getCatalogUpdateTime()),
        [$, ee] = i.useState(!1),
        [et, en] = i.useState(!1),
        { activeVoice: er } = (0, E.o)(),
        ei = (0, P.HM)({
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
                bottom: '' !== G ? 'translateY(75px)' : 'translateY(50px)',
                opacity: +('' === G)
            },
            config: {
                tension: 280,
                friction: 24,
                duration: 200
            }
        }),
        es = i.useRef(null);
    (0, u.ZP)(() => {
        ((0, w.r5)(), ei && (0, I.jG)(), j.default.track(k.rMx.VOICE_FILTER_PICKER_OPENED, { active_voice_filter_id: null != er ? er : null }));
    });
    let ec = i.useCallback(() => H(''), [H]),
        eu = i.useRef(null),
        ed = (0, f.bp)() !== k.IlC.OVERLAY;
    return (0, r.jsx)(m.Gt, {
        value: z,
        children: (0, r.jsxs)('div', {
            ref: X,
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
                B &&
                    (0, r.jsx)(c.E1j, {
                        size: c.E1j.Sizes.MEDIUM,
                        placeholder: V.intl.string(V.t.hHCZJS),
                        className: F.voiceFiltersHeader,
                        autoFocus: !0,
                        onChange: H,
                        query: G,
                        onClear: ec
                    }),
                (0, r.jsx)(D.w, {
                    query: G,
                    columns: n ? 5 : 4,
                    handleScroll: (e) => {
                        let t = es.current;
                        if (null == t || (ee(e > 0), et)) return;
                        let { height: n, totalHeight: r } = t.getListDimensions();
                        e < r - n || (en(!0), j.default.track(k.rMx.VOICE_FILTER_PICKER_SCROLLED));
                    },
                    voiceListRef: es
                }),
                !K &&
                    (0, r.jsxs)(o.animated.div, {
                        style: Y(W({}, eo), { display: eo.opacity.to((e) => (0 === e ? 'none' : 'block')) }),
                        className: F.upsellCountdownContainer,
                        children: [
                            null != Q &&
                                (0, r.jsx)(o.animated.div, {
                                    style: el,
                                    children: (0, r.jsx)(A.J, {
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
                                    children: (0, r.jsx)(h.p, {
                                        showUpsell: !0,
                                        text: V.intl.format(V.t['XMDm8/'], {
                                            nitroTierName: (0, x.Px)(M.p9.TIER_2),
                                            onClick: () => (0, b.i)()
                                        }),
                                        button: V.intl.string(V.t.cRCCJy),
                                        buttonAnalyticsObject: { section: k.jXE.VOICE_FILTERS_FLOATING_UPSELL },
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
                (0, r.jsx)(N.l, {}),
                (0, r.jsx)(T.R, {}),
                (0, r.jsx)(Z.y, {}),
                (0, r.jsxs)('div', {
                    className: a()(F.voiceFiltersFooter, { [F.hasActiveVoice]: null != er }),
                    children: [
                        (0, r.jsx)(v.j, {
                            deviceType: U.h7.AUDIO_INPUT,
                            location: 'VoiceFiltersPopout',
                            onOpen: () => {
                                var e;
                                j.default.track(k.rMx.VOICE_FILTER_MIC_SELECTOR_OPENED, { active_voice_filter_id: null != (e = y.Z.getActiveVoiceFilter()) ? e : null });
                            },
                            popoutPosition: 'top'
                        }),
                        l &&
                            (0, r.jsx)(v.j, {
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
                                    onInteraction: (0, _.u)('AudioDeviceMenu', J, { entrypoint: L.A5.THREE_DOT }),
                                    minimal: !0
                                }),
                            children: (e) =>
                                (0, r.jsx)(
                                    c.hU,
                                    Y(W({ variant: 'secondary' }, e), {
                                        buttonRef: eu,
                                        icon: c.Huf,
                                        onClick: (t) => {
                                            var n;
                                            (j.default.track(k.rMx.VOICE_FILTER_VOICE_SETTINGS_CLICKED, { active_voice_filter_id: null != er ? er : null }), null == (n = e.onClick) || n.call(e, t));
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
