n.d(t, { l: () => z }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    l = n(366594),
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
    v = n(594174),
    b = n(626135),
    y = n(111361),
    j = n(74538),
    C = n(743498),
    x = n(967021),
    I = n(709706),
    O = n(378441),
    E = n(799143),
    N = n(358820),
    S = n(448697),
    P = n(946196),
    w = n(365831),
    T = n(639539),
    L = n(627325),
    k = n(981631),
    Z = n(354459),
    A = n(474936),
    D = n(722565),
    F = n(388032),
    M = n(130802);
function R(e) {
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
function z(e) {
    let { onSettingsButtonClick: t, wide: n, showOutputDevices: a = !1 } = e,
        [z, U] = i.useState(''),
        { analyticsLocations: W, newestAnalyticsLocation: V } = (0, m.ZP)(_.Z.VOICE_FILTER_POPOUT),
        H = i.useRef(null),
        G = (0, u.Z)({
            minDimension: 400,
            maxDimension: 600,
            resizableDomNodeRef: H,
            onElementResize: (e, t) => {},
            onElementResizeEnd: (e) => {},
            orientation: u.y.VERTICAL_TOP
        });
    (0, F.useSyncMessages)(D.messagesLoader);
    let Y = (0, s.e7)([v.default], () => (0, y.I5)(v.default.getCurrentUser())),
        q = (0, s.e7)([I.Z], () => I.Z.getCatalogUpdateTime()),
        [X, K] = i.useState(!1),
        [J, Q] = i.useState(!1),
        { activeVoice: $ } = (0, O.o)(),
        ee = (0, x.vi)({
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
                bottom: '' !== z ? 'translateY(75px)' : 'translateY(50px)',
                opacity: +('' === z)
            },
            config: {
                tension: 280,
                friction: 24,
                duration: 200
            }
        }),
        ei = i.useRef(null);
    (0, d.ZP)(() => {
        (0, N.r5)(), ee && (0, C.jG)(), b.default.track(k.rMx.VOICE_FILTER_PICKER_OPENED, { active_voice_filter_id: null != $ ? $ : null });
    });
    let ea = i.useCallback(() => U(''), [U]),
        eo = i.useRef(null);
    return (0, r.jsx)(m.Gt, {
        value: W,
        children: (0, r.jsxs)('div', {
            ref: H,
            className: o()(M.voiceFiltersPopout, { [M.wide]: n }),
            style: { height: 500 },
            children: [
                (0, r.jsx)('div', {
                    className: M.resizeHandle,
                    onMouseDown: G,
                    children: (0, r.jsx)('div', { className: M.resizePill })
                }),
                (0, r.jsx)(c.E1j, {
                    size: c.E1j.Sizes.MEDIUM,
                    placeholder: F.intl.string(F.t.hHCZJS),
                    className: M.voiceFiltersHeader,
                    autoFocus: !0,
                    onChange: U,
                    query: z,
                    onClear: ea
                }),
                (0, r.jsx)(L.w, {
                    query: z,
                    columns: n ? 5 : 4,
                    handleScroll: (e) => {
                        let t = ei.current;
                        if (null == t || (K(e > 0), J)) return;
                        let { height: n, totalHeight: r } = t.getListDimensions();
                        e < r - n || (Q(!0), b.default.track(k.rMx.VOICE_FILTER_PICKER_SCROLLED));
                    },
                    voiceListRef: ei
                }),
                !Y &&
                    (0, r.jsxs)(l.animated.div, {
                        style: B(R({}, er), { display: er.opacity.to((e) => (0 === e ? 'none' : 'block')) }),
                        className: M.upsellCountdownContainer,
                        children: [
                            null != q &&
                                (0, r.jsx)(l.animated.div, {
                                    style: et,
                                    children: (0, r.jsx)(T.J, {
                                        catalogUpdateTime: q,
                                        isScrolled: X
                                    })
                                }),
                            (0, r.jsx)('div', {
                                className: M.upsellContainer,
                                children: (0, r.jsx)(l.animated.div, {
                                    style: {
                                        y: en.y,
                                        opacity: en.y.to((e) => +(50 !== e))
                                    },
                                    children: (0, r.jsx)(g.p, {
                                        showUpsell: !0,
                                        text: F.intl.format(F.t['XMDm8/'], {
                                            nitroTierName: (0, j.Px)(A.p9.TIER_2),
                                            onClick: () => (0, h.i)()
                                        }),
                                        button: F.intl.string(F.t.cRCCJy),
                                        buttonAnalyticsObject: { section: k.jXE.VOICE_FILTERS_FLOATING_UPSELL },
                                        showShadow: !1,
                                        position: 'inline',
                                        className: M.upsell,
                                        buttonSize: 'sm',
                                        useLockIcon: !0,
                                        buttonStyles: M.subscribeButton
                                    })
                                })
                            })
                        ]
                    }),
                (0, r.jsx)(P.l, {}),
                (0, r.jsx)(w.y, {}),
                (0, r.jsx)(S.R, {}),
                (0, r.jsxs)('div', {
                    className: o()(M.voiceFiltersFooter, { [M.hasActiveVoice]: null != $ }),
                    children: [
                        (0, r.jsx)(E.Y, {}),
                        a && (0, r.jsx)(E.a, {}),
                        (0, r.jsx)(c.yRy, {
                            targetElementRef: eo,
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
                                    onInteraction: (0, p.u)('AudioDeviceMenu', V, { entrypoint: Z.A5.THREE_DOT }),
                                    minimal: !0
                                }),
                            children: (e) =>
                                (0, r.jsx)(
                                    c.zxk,
                                    B(R({}, e), {
                                        buttonRef: eo,
                                        size: c.zxk.Sizes.MIN,
                                        look: c.zxk.Looks.BLANK,
                                        grow: !1,
                                        className: M.voiceFiltersFooterButton,
                                        innerClassName: M.voiceFiltersFooterButtonInner,
                                        onClick: (t) => {
                                            var n;
                                            b.default.track(k.rMx.VOICE_FILTER_VOICE_SETTINGS_CLICKED, { active_voice_filter_id: null != $ ? $ : null }), null == (n = e.onClick) || n.call(e, t);
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
