n.d(t, { l: () => V }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(386230),
    s = n(442837),
    c = n(481060),
    u = n(493773),
    d = n(347469),
    f = n(100527),
    p = n(906732),
    m = n(659580),
    g = n(795318),
    b = n(53691),
    _ = n(457165),
    h = n(594174),
    v = n(626135),
    y = n(111361),
    O = n(74538),
    j = n(743498),
    S = n(967021),
    x = n(709706),
    I = n(378441),
    P = n(799143),
    C = n(358820),
    E = n(448697),
    w = n(946196),
    T = n(365831),
    N = n(639539),
    Z = n(627325),
    A = n(981631),
    D = n(354459),
    L = n(474936),
    k = n(86010),
    M = n(388032),
    R = n(130802);
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
function U(e, t) {
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
function V(e) {
    let { onSettingsButtonClick: t, wide: n, showOutputDevices: l = !1 } = e,
        [V, B] = i.useState(''),
        { analyticsLocations: W, newestAnalyticsLocation: Y } = (0, p.ZP)(f.Z.VOICE_FILTER_POPOUT),
        z = i.useRef(null),
        G = (0, d.Z)({
            minDimension: 400,
            maxDimension: 600,
            resizableDomNodeRef: z,
            onElementResize: (e, t) => {},
            onElementResizeEnd: (e) => {},
            orientation: d.y.VERTICAL_TOP
        });
    (0, M.useSyncMessages)(k.messagesLoader);
    let H = (0, s.e7)([h.default], () => (0, y.I5)(h.default.getCurrentUser())),
        J = (0, s.e7)([x.Z], () => x.Z.getCatalogUpdateTime()),
        [X, q] = i.useState(!1),
        [K, Q] = i.useState(!1),
        { activeVoice: $ } = (0, I.o)(),
        ee = (0, S.HM)({
            location: W[0],
            autoTrackExposure: !0
        }),
        et = (0, c.q_F)({
            transform: X ? 'translateY(-8px) scale('.concat(0.96, ')') : 'translateY(0px) scale(1)',
            config: {
                duration: 150,
                mass: 1,
                stiffness: 711.1,
                damping: 40
            }
        }),
        en = (0, c.q_F)({
            y: 50 * !X,
            config: {
                duration: 150,
                mass: 1,
                stiffness: 711.1,
                damping: 40
            }
        }),
        er = (0, c.q_F)({
            to: {
                bottom: '' !== V ? 'translateY(75px)' : 'translateY(50px)',
                opacity: +('' === V)
            },
            config: {
                tension: 280,
                friction: 24,
                duration: 200
            }
        }),
        ei = i.useRef(null);
    (0, u.ZP)(() => {
        (0, C.r5)(), ee && (0, j.jG)(), v.default.track(A.rMx.VOICE_FILTER_PICKER_OPENED, { active_voice_filter_id: null != $ ? $ : null });
    });
    let el = i.useCallback(() => B(''), [B]),
        ea = i.useRef(null);
    return (0, r.jsx)(p.Gt, {
        value: W,
        children: (0, r.jsxs)('div', {
            ref: z,
            className: a()(R.voiceFiltersPopout, { [R.wide]: n }),
            style: { height: 500 },
            children: [
                (0, r.jsx)('div', {
                    className: R.resizeHandle,
                    onMouseDown: G,
                    children: (0, r.jsx)('div', { className: R.resizePill })
                }),
                (0, r.jsx)(c.E1j, {
                    size: c.E1j.Sizes.MEDIUM,
                    placeholder: M.intl.string(M.t.hHCZJS),
                    className: R.voiceFiltersHeader,
                    autoFocus: !0,
                    onChange: B,
                    query: V,
                    onClear: el
                }),
                (0, r.jsx)(Z.w, {
                    query: V,
                    columns: n ? 5 : 4,
                    handleScroll: (e) => {
                        let t = ei.current;
                        if (null == t || (q(e > 0), K)) return;
                        let { height: n, totalHeight: r } = t.getListDimensions();
                        e < r - n || (Q(!0), v.default.track(A.rMx.VOICE_FILTER_PICKER_SCROLLED));
                    },
                    voiceListRef: ei
                }),
                !H &&
                    (0, r.jsxs)(o.animated.div, {
                        style: U(F({}, er), { display: er.opacity.to((e) => (0 === e ? 'none' : 'block')) }),
                        className: R.upsellCountdownContainer,
                        children: [
                            null != J &&
                                (0, r.jsx)(o.animated.div, {
                                    style: et,
                                    children: (0, r.jsx)(N.J, {
                                        catalogUpdateTime: J,
                                        isScrolled: X
                                    })
                                }),
                            (0, r.jsx)('div', {
                                className: R.upsellContainer,
                                children: (0, r.jsx)(o.animated.div, {
                                    style: {
                                        y: en.y,
                                        opacity: en.y.to((e) => +(50 !== e))
                                    },
                                    children: (0, r.jsx)(b.p, {
                                        showUpsell: !0,
                                        text: M.intl.format(M.t['XMDm8/'], {
                                            nitroTierName: (0, O.Px)(L.p9.TIER_2),
                                            onClick: () => (0, _.i)()
                                        }),
                                        button: M.intl.string(M.t.cRCCJy),
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
                (0, r.jsx)(w.l, {}),
                (0, r.jsx)(E.R, {}),
                (0, r.jsx)(T.y, {}),
                (0, r.jsxs)('div', {
                    className: a()(R.voiceFiltersFooter, { [R.hasActiveVoice]: null != $ }),
                    children: [
                        (0, r.jsx)(P.Y, {}),
                        l && (0, r.jsx)(P.a, {}),
                        (0, r.jsx)(c.yRy, {
                            targetElementRef: ea,
                            position: 'top',
                            align: 'right',
                            renderPopout: () =>
                                (0, r.jsx)(m.default, {
                                    renderInputModes: !0,
                                    renderInputVolume: !0,
                                    renderInputDevices: !0,
                                    renderOutputDevices: l,
                                    renderOutputVolume: l,
                                    onClose: t,
                                    onInteraction: (0, g.u)('AudioDeviceMenu', Y, { entrypoint: D.A5.THREE_DOT }),
                                    minimal: !0
                                }),
                            children: (e) =>
                                (0, r.jsx)(
                                    c.zxk,
                                    U(F({}, e), {
                                        buttonRef: ea,
                                        size: c.zxk.Sizes.MIN,
                                        look: c.zxk.Looks.BLANK,
                                        grow: !1,
                                        className: R.voiceFiltersFooterButton,
                                        innerClassName: R.voiceFiltersFooterButtonInner,
                                        onClick: (t) => {
                                            var n;
                                            v.default.track(A.rMx.VOICE_FILTER_VOICE_SETTINGS_CLICKED, { active_voice_filter_id: null != $ ? $ : null }), null == (n = e.onClick) || n.call(e, t);
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
