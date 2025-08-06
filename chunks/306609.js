(n.d(t, { l: () => Q }), n(388685));
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(66546),
    l = n(442837),
    c = n(481060),
    u = n(493773),
    d = n(347469),
    f = n(40851),
    _ = n(100527),
    p = n(906732),
    h = n(659580),
    m = n(795318),
    g = n(670863),
    E = n(53691),
    b = n(457165),
    y = n(131951),
    O = n(594174),
    v = n(626135),
    I = n(111361),
    T = n(74538),
    S = n(743498),
    A = n(967021),
    N = n(709706),
    C = n(378441),
    R = n(358820),
    P = n(448697),
    w = n(946196),
    D = n(365831),
    L = n(639539),
    x = n(627325),
    M = n(981631),
    k = n(354459),
    j = n(474936),
    U = n(65154),
    G = n(48500),
    B = n(388032),
    Z = n(130802);
function F(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function V(e) {
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
                F(e, t, n[t]);
            }));
    }
    return e;
}
function H(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function Y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : H(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let W = 400,
    K = 500,
    z = 600,
    q = 4,
    X = 5;
function Q(e) {
    let { onSettingsButtonClick: t, wide: n, showOutputDevices: o = !1, showSearchBar: F = !0 } = e,
        [H, Q] = i.useState(''),
        { analyticsLocations: J, newestAnalyticsLocation: $ } = (0, p.ZP)(_.Z.VOICE_FILTER_POPOUT),
        ee = i.useRef(null),
        et = (0, d.Z)({
            minDimension: W,
            maxDimension: z,
            resizableDomNodeRef: ee,
            onElementResize: (e, t) => {},
            onElementResizeEnd: (e) => {},
            orientation: d.y.VERTICAL_TOP
        });
    (0, B.useSyncMessages)(G.messagesLoader);
    let en = (0, l.e7)([O.default], () => (0, I.I5)(O.default.getCurrentUser())),
        er = (0, l.e7)([N.Z], () => N.Z.getCatalogUpdateTime()),
        [ei, eo] = i.useState(!1),
        [ea, es] = i.useState(!1),
        { activeVoice: el } = (0, C.o)(),
        ec = (0, A.HM)({
            location: J[0],
            autoTrackExposure: !0
        }),
        eu = (0, c.q_F)({
            transform: ei ? 'translateY(-8px) scale('.concat(0.96, ')') : 'translateY(0px) scale(1)',
            config: {
                duration: 150,
                mass: 1,
                stiffness: 711.1,
                damping: 40
            }
        }),
        ed = (0, c.q_F)({
            y: 50 * !ei,
            config: {
                duration: 150,
                mass: 1,
                stiffness: 711.1,
                damping: 40
            }
        }),
        ef = (0, c.q_F)({
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
        e_ = i.useRef(null),
        ep = (e) => {
            let t = e_.current;
            if (null == t || (eo(e > 0), ea)) return;
            let { height: n, totalHeight: r } = t.getListDimensions();
            e < r - n || (es(!0), v.default.track(M.rMx.VOICE_FILTER_PICKER_SCROLLED));
        };
    (0, u.ZP)(() => {
        ((0, R.r5)(), ec && (0, S.jG)(), v.default.track(M.rMx.VOICE_FILTER_PICKER_OPENED, { active_voice_filter_id: null != el ? el : null }));
    });
    let eh = i.useCallback(() => Q(''), [Q]),
        em = i.useRef(null),
        eg = (0, f.bp)() !== M.IlC.OVERLAY;
    return (0, r.jsx)(p.Gt, {
        value: J,
        children: (0, r.jsxs)('div', {
            ref: ee,
            className: a()(Z.voiceFiltersPopout, {
                [Z.wide]: n,
                [Z.notResizable]: !eg
            }),
            style: { height: K },
            children: [
                eg &&
                    (0, r.jsx)('div', {
                        className: Z.resizeHandle,
                        onMouseDown: et,
                        children: (0, r.jsx)('div', { className: Z.resizePill })
                    }),
                F &&
                    (0, r.jsx)(c.E1j, {
                        placeholder: B.intl.string(B.t.hHCZJS),
                        className: Z.voiceFiltersHeader,
                        autoFocus: !0,
                        onChange: Q,
                        query: H,
                        onClear: eh
                    }),
                (0, r.jsx)(x.w, {
                    query: H,
                    columns: n ? X : q,
                    handleScroll: ep,
                    voiceListRef: e_
                }),
                !en &&
                    (0, r.jsxs)(s.animated.div, {
                        style: Y(V({}, ef), { display: ef.opacity.to((e) => (0 === e ? 'none' : 'block')) }),
                        className: Z.upsellCountdownContainer,
                        children: [
                            null != er &&
                                (0, r.jsx)(s.animated.div, {
                                    style: eu,
                                    children: (0, r.jsx)(L.J, {
                                        catalogUpdateTime: er,
                                        isScrolled: ei
                                    })
                                }),
                            (0, r.jsx)('div', {
                                className: Z.upsellContainer,
                                children: (0, r.jsx)(s.animated.div, {
                                    style: {
                                        y: ed.y,
                                        opacity: ed.y.to((e) => +(50 !== e))
                                    },
                                    children: (0, r.jsx)(E.p, {
                                        showUpsell: !0,
                                        text: B.intl.format(B.t['XMDm8/'], {
                                            nitroTierName: (0, T.Px)(j.p9.TIER_2),
                                            onClick: () => (0, b.i)()
                                        }),
                                        button: B.intl.string(B.t.cRCCJy),
                                        buttonAnalyticsObject: { section: M.jXE.VOICE_FILTERS_FLOATING_UPSELL },
                                        showShadow: !1,
                                        position: 'inline',
                                        className: Z.upsell,
                                        buttonSize: 'sm',
                                        useLockIcon: !0,
                                        buttonStyles: Z.subscribeButton
                                    })
                                })
                            })
                        ]
                    }),
                (0, r.jsx)(w.l, {}),
                (0, r.jsx)(P.R, {}),
                (0, r.jsx)(D.y, {}),
                (0, r.jsxs)('div', {
                    className: a()(Z.voiceFiltersFooter, { [Z.hasActiveVoice]: null != el }),
                    children: [
                        (0, r.jsx)(g.j, {
                            deviceType: U.h7.AUDIO_INPUT,
                            location: 'VoiceFiltersPopout',
                            onOpen: () => {
                                var e;
                                v.default.track(M.rMx.VOICE_FILTER_MIC_SELECTOR_OPENED, { active_voice_filter_id: null != (e = y.Z.getActiveVoiceFilter()) ? e : null });
                            },
                            popoutPosition: 'top'
                        }),
                        o &&
                            (0, r.jsx)(g.j, {
                                deviceType: U.h7.AUDIO_OUTPUT,
                                location: 'VoiceFiltersPopout',
                                popoutPosition: 'top'
                            }),
                        (0, r.jsx)(c.yRy, {
                            targetElementRef: em,
                            position: 'top',
                            align: 'right',
                            renderPopout: () =>
                                (0, r.jsx)(h.default, {
                                    renderInputModes: !0,
                                    renderInputVolume: !0,
                                    renderInputDevices: !0,
                                    renderOutputDevices: o,
                                    renderOutputVolume: o,
                                    onClose: t,
                                    onInteraction: (0, m.u)('AudioDeviceMenu', $, { entrypoint: k.A5.THREE_DOT }),
                                    minimal: !0
                                }),
                            children: (e) =>
                                (0, r.jsx)(
                                    c.hU,
                                    Y(V({ variant: 'secondary' }, e), {
                                        buttonRef: em,
                                        icon: c.Huf,
                                        onClick: (t) => {
                                            var n;
                                            (v.default.track(M.rMx.VOICE_FILTER_VOICE_SETTINGS_CLICKED, { active_voice_filter_id: null != el ? el : null }), null == (n = e.onClick) || n.call(e, t));
                                        },
                                        'aria-label': B.intl.string(B.t['ClGM/P'])
                                    })
                                )
                        })
                    ]
                })
            ]
        })
    });
}
