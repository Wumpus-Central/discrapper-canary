n.d(t, { l: () => R }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(642128),
    s = n(442837),
    c = n(481060),
    d = n(493773),
    u = n(347469),
    p = n(100527),
    m = n(906732),
    f = n(659580),
    h = n(53691),
    g = n(166335),
    _ = n(594174),
    b = n(626135),
    v = n(111361),
    y = n(74538),
    x = n(709706),
    O = n(378441),
    E = n(799143),
    j = n(358820),
    N = n(448697),
    C = n(365831),
    I = n(639539),
    S = n(627325),
    P = n(981631),
    T = n(474936),
    A = n(388032),
    w = n(848980);
function Z(e) {
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
function k(e, t) {
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
        [R, L] = i.useState(''),
        { analyticsLocations: D } = (0, m.ZP)(p.Z.VOICE_FILTER_POPOUT),
        M = i.useRef(null),
        W = (0, u.Z)({
            minDimension: 400,
            maxDimension: 600,
            resizableDomNodeRef: M,
            onElementResize: (e, t) => {},
            onElementResizeEnd: (e) => {},
            orientation: u.y.VERTICAL_TOP
        }),
        F = (0, s.e7)([_.default], () => (0, v.I5)(_.default.getCurrentUser())),
        U = (0, s.e7)([x.Z], () => x.Z.getCatalogUpdateTime()),
        [B, G] = i.useState(!1),
        [H, V] = i.useState(!1),
        { activeVoice: z } = (0, O.o)(),
        K = (0, c.q_F)({
            transform: B ? 'translateY(-$8px) scale('.concat(0.96, ')') : 'translateY(0px) scale(1)',
            config: {
                duration: 150,
                mass: 1,
                stiffness: 711.1,
                damping: 40
            }
        }),
        Y = (0, c.q_F)({
            transform: B ? 'translateY(0px)' : 'translateY(50px)',
            config: {
                duration: 150,
                mass: 1,
                stiffness: 711.1,
                damping: 40
            }
        }),
        X = (0, c.q_F)({
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
        q = i.useRef(null);
    return (
        (0, d.ZP)(() => {
            (0, j.r5)(), b.default.track(P.rMx.VOICE_FILTER_PICKER_OPENED, { active_voice_filter_id: null != z ? z : null });
        }),
        (0, r.jsx)(m.Gt, {
            value: D,
            children: (0, r.jsxs)('div', {
                ref: M,
                className: o()(w.voiceFiltersPopout, { [w.wide]: n }),
                style: { height: 500 },
                children: [
                    (0, r.jsx)('div', {
                        className: w.resizeHandle,
                        onMouseDown: W,
                        children: (0, r.jsx)('div', { className: w.resizePill })
                    }),
                    (0, r.jsx)(c.E1j, {
                        size: c.E1j.Sizes.MEDIUM,
                        placeholder: A.NW.string(A.t.hHCZJS),
                        className: w.voiceFiltersHeader,
                        autoFocus: !0,
                        onChange: L,
                        query: R,
                        onClear: () => L('')
                    }),
                    (0, r.jsx)(S.w, {
                        query: R,
                        columns: n ? 5 : 4,
                        handleScroll: (e) => {
                            let t = q.current;
                            if (null == t || (G(e > 0), H)) return;
                            let { height: n, totalHeight: r } = t.getListDimensions();
                            e < r - n || (V(!0), b.default.track(P.rMx.VOICE_FILTER_PICKER_SCROLLED));
                        },
                        voiceListRef: q
                    }),
                    !F &&
                        (0, r.jsxs)(l.animated.div, {
                            style: k(Z({}, X), { display: X.opacity.to((e) => (0 === e ? 'none' : 'block')) }),
                            className: w.upsellCountdownContainer,
                            children: [
                                null != U &&
                                    (0, r.jsx)(l.animated.div, {
                                        style: K,
                                        children: (0, r.jsx)(I.J, {
                                            catalogUpdateTime: U,
                                            isScrolled: B
                                        })
                                    }),
                                (0, r.jsx)('div', {
                                    className: w.upsellContainer,
                                    children: (0, r.jsx)(l.animated.div, {
                                        style: Y,
                                        children: (0, r.jsx)(h.p, {
                                            showUpsell: !0,
                                            text: A.NW.format(A.t['XMDm8/'], {
                                                nitroTierName: (0, y.Px)(T.p9.TIER_2),
                                                onClick: () => (0, g.i)()
                                            }),
                                            button: A.NW.string(A.t.cRCCJy),
                                            buttonAnalyticsObject: { section: P.jXE.VOICE_FILTERS_FLOATING_UPSELL },
                                            showShadow: !1,
                                            position: 'inline',
                                            className: w.upsell,
                                            buttonSize: 'sm',
                                            useLockIcon: !0,
                                            buttonStyles: w.subscribeButton
                                        })
                                    })
                                })
                            ]
                        }),
                    (0, r.jsx)(C.y, {}),
                    (0, r.jsx)(N.R, {}),
                    (0, r.jsxs)('div', {
                        className: o()(w.voiceFiltersFooter, { [w.hasActiveVoice]: null != z }),
                        children: [
                            (0, r.jsx)(E.Y, {}),
                            a && (0, r.jsx)(E.a, {}),
                            null != t &&
                                (0, r.jsx)(c.yRy, {
                                    position: 'top',
                                    renderPopout: () =>
                                        (0, r.jsx)(f.default, {
                                            renderInputModes: !0,
                                            renderInputVolume: !0,
                                            onClose: t
                                        }),
                                    children: (e) =>
                                        (0, r.jsx)(
                                            c.zxk,
                                            k(Z({}, e), {
                                                size: c.zxk.Sizes.MIN,
                                                look: c.zxk.Looks.BLANK,
                                                grow: !1,
                                                className: w.voiceFiltersFooterButton,
                                                innerClassName: w.voiceFiltersFooterButtonInner,
                                                onClick: (t) => {
                                                    var n;
                                                    b.default.track(P.rMx.VOICE_FILTER_VOICE_SETTINGS_CLICKED, { active_voice_filter_id: null != z ? z : null }), null === (n = e.onClick) || void 0 === n || n.call(e, t);
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
        })
    );
}
