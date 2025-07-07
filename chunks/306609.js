(n.d(t, { l: () => B }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(451463),
    s = n(442837),
    c = n(481060),
    u = n(493773),
    d = n(347469),
    p = n(40851),
    f = n(100527),
    m = n(906732),
    g = n(659580),
    b = n(795318),
    _ = n(53691),
    v = n(457165),
    h = n(594174),
    y = n(626135),
    O = n(111361),
    j = n(74538),
    S = n(743498),
    x = n(967021),
    I = n(709706),
    P = n(378441),
    C = n(799143),
    E = n(358820),
    w = n(448697),
    T = n(946196),
    N = n(365831),
    Z = n(639539),
    A = n(627325),
    D = n(981631),
    k = n(354459),
    L = n(474936),
    M = n(48500),
    R = n(388032),
    F = n(130802);
function U(e) {
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
function V(e, t) {
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
        [Y, z] = i.useState(''),
        { analyticsLocations: W, newestAnalyticsLocation: H } = (0, m.ZP)(f.Z.VOICE_FILTER_POPOUT),
        G = i.useRef(null),
        J = (0, d.Z)({
            minDimension: 400,
            maxDimension: 600,
            resizableDomNodeRef: G,
            onElementResize: (e, t) => {},
            onElementResizeEnd: (e) => {},
            orientation: d.y.VERTICAL_TOP
        });
    (0, R.useSyncMessages)(M.messagesLoader);
    let X = (0, s.e7)([h.default], () => (0, O.I5)(h.default.getCurrentUser())),
        q = (0, s.e7)([I.Z], () => I.Z.getCatalogUpdateTime()),
        [K, Q] = i.useState(!1),
        [$, ee] = i.useState(!1),
        { activeVoice: et } = (0, P.o)(),
        en = (0, x.HM)({
            location: W[0],
            autoTrackExposure: !0
        }),
        er = (0, c.q_F)({
            transform: K ? 'translateY(-8px) scale('.concat(0.96, ')') : 'translateY(0px) scale(1)',
            config: {
                duration: 150,
                mass: 1,
                stiffness: 711.1,
                damping: 40
            }
        }),
        ei = (0, c.q_F)({
            y: 50 * !K,
            config: {
                duration: 150,
                mass: 1,
                stiffness: 711.1,
                damping: 40
            }
        }),
        el = (0, c.q_F)({
            to: {
                bottom: '' !== Y ? 'translateY(75px)' : 'translateY(50px)',
                opacity: +('' === Y)
            },
            config: {
                tension: 280,
                friction: 24,
                duration: 200
            }
        }),
        eo = i.useRef(null);
    (0, u.ZP)(() => {
        ((0, E.r5)(), en && (0, S.jG)(), y.default.track(D.rMx.VOICE_FILTER_PICKER_OPENED, { active_voice_filter_id: null != et ? et : null }));
    });
    let ea = i.useCallback(() => z(''), [z]),
        es = i.useRef(null),
        ec = (0, p.bp)() !== D.IlC.OVERLAY;
    return (0, r.jsx)(m.Gt, {
        value: W,
        children: (0, r.jsxs)('div', {
            ref: G,
            className: o()(F.voiceFiltersPopout, {
                [F.wide]: n,
                [F.notResizable]: !ec
            }),
            style: { height: 500 },
            children: [
                ec &&
                    (0, r.jsx)('div', {
                        className: F.resizeHandle,
                        onMouseDown: J,
                        children: (0, r.jsx)('div', { className: F.resizePill })
                    }),
                B &&
                    (0, r.jsx)(c.E1j, {
                        size: c.E1j.Sizes.MEDIUM,
                        placeholder: R.intl.string(R.t.hHCZJS),
                        className: F.voiceFiltersHeader,
                        autoFocus: !0,
                        onChange: z,
                        query: Y,
                        onClear: ea
                    }),
                (0, r.jsx)(A.w, {
                    query: Y,
                    columns: n ? 5 : 4,
                    handleScroll: (e) => {
                        let t = eo.current;
                        if (null == t || (Q(e > 0), $)) return;
                        let { height: n, totalHeight: r } = t.getListDimensions();
                        e < r - n || (ee(!0), y.default.track(D.rMx.VOICE_FILTER_PICKER_SCROLLED));
                    },
                    voiceListRef: eo
                }),
                !X &&
                    (0, r.jsxs)(a.animated.div, {
                        style: V(U({}, el), { display: el.opacity.to((e) => (0 === e ? 'none' : 'block')) }),
                        className: F.upsellCountdownContainer,
                        children: [
                            null != q &&
                                (0, r.jsx)(a.animated.div, {
                                    style: er,
                                    children: (0, r.jsx)(Z.J, {
                                        catalogUpdateTime: q,
                                        isScrolled: K
                                    })
                                }),
                            (0, r.jsx)('div', {
                                className: F.upsellContainer,
                                children: (0, r.jsx)(a.animated.div, {
                                    style: {
                                        y: ei.y,
                                        opacity: ei.y.to((e) => +(50 !== e))
                                    },
                                    children: (0, r.jsx)(_.p, {
                                        showUpsell: !0,
                                        text: R.intl.format(R.t['XMDm8/'], {
                                            nitroTierName: (0, j.Px)(L.p9.TIER_2),
                                            onClick: () => (0, v.i)()
                                        }),
                                        button: R.intl.string(R.t.cRCCJy),
                                        buttonAnalyticsObject: { section: D.jXE.VOICE_FILTERS_FLOATING_UPSELL },
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
                (0, r.jsx)(T.l, {}),
                (0, r.jsx)(w.R, {}),
                (0, r.jsx)(N.y, {}),
                (0, r.jsxs)('div', {
                    className: o()(F.voiceFiltersFooter, { [F.hasActiveVoice]: null != et }),
                    children: [
                        (0, r.jsx)(C.Y, {}),
                        l && (0, r.jsx)(C.a, {}),
                        (0, r.jsx)(c.yRy, {
                            targetElementRef: es,
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
                                    onInteraction: (0, b.u)('AudioDeviceMenu', H, { entrypoint: k.A5.THREE_DOT }),
                                    minimal: !0
                                }),
                            children: (e) =>
                                (0, r.jsx)(
                                    c.zxk,
                                    V(U({}, e), {
                                        buttonRef: es,
                                        size: c.zxk.Sizes.MIN,
                                        look: c.zxk.Looks.BLANK,
                                        grow: !1,
                                        className: F.voiceFiltersFooterButton,
                                        innerClassName: F.voiceFiltersFooterButtonInner,
                                        onClick: (t) => {
                                            var n;
                                            (y.default.track(D.rMx.VOICE_FILTER_VOICE_SETTINGS_CLICKED, { active_voice_filter_id: null != et ? et : null }), null == (n = e.onClick) || n.call(e, t));
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
