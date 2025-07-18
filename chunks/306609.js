(n.d(t, { l: () => Y }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(104721),
    s = n(442837),
    c = n(481060),
    u = n(493773),
    d = n(347469),
    p = n(40851),
    f = n(100527),
    m = n(906732),
    g = n(659580),
    _ = n(795318),
    v = n(53691),
    b = n(457165),
    h = n(594174),
    y = n(626135),
    O = n(111361),
    j = n(74538),
    x = n(743498),
    S = n(967021),
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
    U = n(130802);
function F(e) {
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
function Y(e) {
    let { onSettingsButtonClick: t, wide: n, showOutputDevices: l = !1, showSearchBar: Y = !0 } = e,
        [W, B] = i.useState(''),
        { analyticsLocations: z, newestAnalyticsLocation: G } = (0, m.ZP)(f.Z.VOICE_FILTER_POPOUT),
        H = i.useRef(null),
        J = (0, d.Z)({
            minDimension: 400,
            maxDimension: 600,
            resizableDomNodeRef: H,
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
        en = (0, S.HM)({
            location: z[0],
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
                bottom: '' !== W ? 'translateY(75px)' : 'translateY(50px)',
                opacity: +('' === W)
            },
            config: {
                tension: 280,
                friction: 24,
                duration: 200
            }
        }),
        ea = i.useRef(null);
    (0, u.ZP)(() => {
        ((0, E.r5)(), en && (0, x.jG)(), y.default.track(D.rMx.VOICE_FILTER_PICKER_OPENED, { active_voice_filter_id: null != et ? et : null }));
    });
    let eo = i.useCallback(() => B(''), [B]),
        es = i.useRef(null),
        ec = (0, p.bp)() !== D.IlC.OVERLAY;
    return (0, r.jsx)(m.Gt, {
        value: z,
        children: (0, r.jsxs)('div', {
            ref: H,
            className: a()(U.voiceFiltersPopout, {
                [U.wide]: n,
                [U.notResizable]: !ec
            }),
            style: { height: 500 },
            children: [
                ec &&
                    (0, r.jsx)('div', {
                        className: U.resizeHandle,
                        onMouseDown: J,
                        children: (0, r.jsx)('div', { className: U.resizePill })
                    }),
                Y &&
                    (0, r.jsx)(c.E1j, {
                        size: c.E1j.Sizes.MEDIUM,
                        placeholder: R.intl.string(R.t.hHCZJS),
                        className: U.voiceFiltersHeader,
                        autoFocus: !0,
                        onChange: B,
                        query: W,
                        onClear: eo
                    }),
                (0, r.jsx)(A.w, {
                    query: W,
                    columns: n ? 5 : 4,
                    handleScroll: (e) => {
                        let t = ea.current;
                        if (null == t || (Q(e > 0), $)) return;
                        let { height: n, totalHeight: r } = t.getListDimensions();
                        e < r - n || (ee(!0), y.default.track(D.rMx.VOICE_FILTER_PICKER_SCROLLED));
                    },
                    voiceListRef: ea
                }),
                !X &&
                    (0, r.jsxs)(o.animated.div, {
                        style: V(F({}, el), { display: el.opacity.to((e) => (0 === e ? 'none' : 'block')) }),
                        className: U.upsellCountdownContainer,
                        children: [
                            null != q &&
                                (0, r.jsx)(o.animated.div, {
                                    style: er,
                                    children: (0, r.jsx)(Z.J, {
                                        catalogUpdateTime: q,
                                        isScrolled: K
                                    })
                                }),
                            (0, r.jsx)('div', {
                                className: U.upsellContainer,
                                children: (0, r.jsx)(o.animated.div, {
                                    style: {
                                        y: ei.y,
                                        opacity: ei.y.to((e) => +(50 !== e))
                                    },
                                    children: (0, r.jsx)(v.p, {
                                        showUpsell: !0,
                                        text: R.intl.format(R.t['XMDm8/'], {
                                            nitroTierName: (0, j.Px)(L.p9.TIER_2),
                                            onClick: () => (0, b.i)()
                                        }),
                                        button: R.intl.string(R.t.cRCCJy),
                                        buttonAnalyticsObject: { section: D.jXE.VOICE_FILTERS_FLOATING_UPSELL },
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
                (0, r.jsx)(T.l, {}),
                (0, r.jsx)(w.R, {}),
                (0, r.jsx)(N.y, {}),
                (0, r.jsxs)('div', {
                    className: a()(U.voiceFiltersFooter, { [U.hasActiveVoice]: null != et }),
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
                                    onInteraction: (0, _.u)('AudioDeviceMenu', G, { entrypoint: k.A5.THREE_DOT }),
                                    minimal: !0
                                }),
                            children: (e) =>
                                (0, r.jsx)(
                                    c.hU,
                                    V(F({ variant: 'secondary' }, e), {
                                        buttonRef: es,
                                        icon: c.Huf,
                                        onClick: (t) => {
                                            var n;
                                            (y.default.track(D.rMx.VOICE_FILTER_VOICE_SETTINGS_CLICKED, { active_voice_filter_id: null != et ? et : null }), null == (n = e.onClick) || n.call(e, t));
                                        },
                                        'aria-label': R.intl.string(R.t['ClGM/P'])
                                    })
                                )
                        })
                    ]
                })
            ]
        })
    });
}
