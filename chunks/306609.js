(n.d(t, { l: () => Y }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(264738),
    s = n(442837),
    c = n(755721),
    u = n(481060),
    d = n(493773),
    p = n(347469),
    f = n(40851),
    m = n(100527),
    g = n(906732),
    b = n(659580),
    _ = n(795318),
    v = n(53691),
    h = n(457165),
    y = n(594174),
    O = n(626135),
    j = n(111361),
    S = n(74538),
    x = n(743498),
    I = n(967021),
    P = n(709706),
    C = n(378441),
    E = n(799143),
    w = n(358820),
    T = n(448697),
    N = n(946196),
    Z = n(365831),
    A = n(639539),
    D = n(627325),
    L = n(981631),
    k = n(354459),
    M = n(474936),
    R = n(48500),
    F = n(388032),
    U = n(130802);
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
function Y(e) {
    let { onSettingsButtonClick: t, wide: n, showOutputDevices: l = !1, showSearchBar: Y = !0 } = e,
        [z, W] = i.useState(''),
        { analyticsLocations: H, newestAnalyticsLocation: G } = (0, g.ZP)(m.Z.VOICE_FILTER_POPOUT),
        J = i.useRef(null),
        X = (0, p.Z)({
            minDimension: 400,
            maxDimension: 600,
            resizableDomNodeRef: J,
            onElementResize: (e, t) => {},
            onElementResizeEnd: (e) => {},
            orientation: p.y.VERTICAL_TOP
        });
    (0, F.useSyncMessages)(R.messagesLoader);
    let q = (0, s.e7)([y.default], () => (0, j.I5)(y.default.getCurrentUser())),
        K = (0, s.e7)([P.Z], () => P.Z.getCatalogUpdateTime()),
        [Q, $] = i.useState(!1),
        [ee, et] = i.useState(!1),
        { activeVoice: en } = (0, C.o)(),
        er = (0, I.HM)({
            location: H[0],
            autoTrackExposure: !0
        }),
        ei = (0, u.q_F)({
            transform: Q ? 'translateY(-8px) scale('.concat(0.96, ')') : 'translateY(0px) scale(1)',
            config: {
                duration: 150,
                mass: 1,
                stiffness: 711.1,
                damping: 40
            }
        }),
        el = (0, u.q_F)({
            y: 50 * !Q,
            config: {
                duration: 150,
                mass: 1,
                stiffness: 711.1,
                damping: 40
            }
        }),
        eo = (0, u.q_F)({
            to: {
                bottom: '' !== z ? 'translateY(75px)' : 'translateY(50px)',
                opacity: +('' === z)
            },
            config: {
                tension: 280,
                friction: 24,
                duration: 200
            }
        }),
        ea = i.useRef(null);
    (0, d.ZP)(() => {
        ((0, w.r5)(), er && (0, x.jG)(), O.default.track(L.rMx.VOICE_FILTER_PICKER_OPENED, { active_voice_filter_id: null != en ? en : null }));
    });
    let es = i.useCallback(() => W(''), [W]),
        ec = i.useRef(null),
        eu = (0, f.bp)() !== L.IlC.OVERLAY;
    return (0, r.jsx)(g.Gt, {
        value: H,
        children: (0, r.jsxs)('div', {
            ref: J,
            className: o()(U.voiceFiltersPopout, {
                [U.wide]: n,
                [U.notResizable]: !eu
            }),
            style: { height: 500 },
            children: [
                eu &&
                    (0, r.jsx)('div', {
                        className: U.resizeHandle,
                        onMouseDown: X,
                        children: (0, r.jsx)('div', { className: U.resizePill })
                    }),
                Y &&
                    (0, r.jsx)(u.E1j, {
                        size: u.E1j.Sizes.MEDIUM,
                        placeholder: F.intl.string(F.t.hHCZJS),
                        className: U.voiceFiltersHeader,
                        autoFocus: !0,
                        onChange: W,
                        query: z,
                        onClear: es
                    }),
                (0, r.jsx)(D.w, {
                    query: z,
                    columns: n ? 5 : 4,
                    handleScroll: (e) => {
                        let t = ea.current;
                        if (null == t || ($(e > 0), ee)) return;
                        let { height: n, totalHeight: r } = t.getListDimensions();
                        e < r - n || (et(!0), O.default.track(L.rMx.VOICE_FILTER_PICKER_SCROLLED));
                    },
                    voiceListRef: ea
                }),
                !q &&
                    (0, r.jsxs)(a.animated.div, {
                        style: B(V({}, eo), { display: eo.opacity.to((e) => (0 === e ? 'none' : 'block')) }),
                        className: U.upsellCountdownContainer,
                        children: [
                            null != K &&
                                (0, r.jsx)(a.animated.div, {
                                    style: ei,
                                    children: (0, r.jsx)(A.J, {
                                        catalogUpdateTime: K,
                                        isScrolled: Q
                                    })
                                }),
                            (0, r.jsx)('div', {
                                className: U.upsellContainer,
                                children: (0, r.jsx)(a.animated.div, {
                                    style: {
                                        y: el.y,
                                        opacity: el.y.to((e) => +(50 !== e))
                                    },
                                    children: (0, r.jsx)(v.p, {
                                        showUpsell: !0,
                                        text: F.intl.format(F.t['XMDm8/'], {
                                            nitroTierName: (0, S.Px)(M.p9.TIER_2),
                                            onClick: () => (0, h.i)()
                                        }),
                                        button: F.intl.string(F.t.cRCCJy),
                                        buttonAnalyticsObject: { section: L.jXE.VOICE_FILTERS_FLOATING_UPSELL },
                                        showShadow: !1,
                                        position: 'inline',
                                        className: U.upsell,
                                        buttonSize: 'sm',
                                        useLockIcon: !0,
                                        buttonStyles: U.subscribeButton
                                    })
                                })
                            })
                        ]
                    }),
                (0, r.jsx)(N.l, {}),
                (0, r.jsx)(T.R, {}),
                (0, r.jsx)(Z.y, {}),
                (0, r.jsxs)('div', {
                    className: o()(U.voiceFiltersFooter, { [U.hasActiveVoice]: null != en }),
                    children: [
                        (0, r.jsx)(E.Y, {}),
                        l && (0, r.jsx)(E.a, {}),
                        (0, r.jsx)(u.yRy, {
                            targetElementRef: ec,
                            position: 'top',
                            align: 'right',
                            renderPopout: () =>
                                (0, r.jsx)(b.default, {
                                    renderInputModes: !0,
                                    renderInputVolume: !0,
                                    renderInputDevices: !0,
                                    renderOutputDevices: l,
                                    renderOutputVolume: l,
                                    onClose: t,
                                    onInteraction: (0, _.u)('AudioDeviceMenu', G, { entrypoint: k.A5.THREE_DOT }),
                                    minimal: !0
                                }),
                            children: (e) =>
                                (0, r.jsx)(
                                    c.zx,
                                    B(V({}, e), {
                                        buttonRef: ec,
                                        size: c.zx.Sizes.MIN,
                                        look: c.zx.Looks.BLANK,
                                        grow: !1,
                                        className: U.voiceFiltersFooterButton,
                                        innerClassName: U.voiceFiltersFooterButtonInner,
                                        onClick: (t) => {
                                            var n;
                                            (O.default.track(L.rMx.VOICE_FILTER_VOICE_SETTINGS_CLICKED, { active_voice_filter_id: null != en ? en : null }), null == (n = e.onClick) || n.call(e, t));
                                        },
                                        children: (0, r.jsx)(u.Huf, {
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
