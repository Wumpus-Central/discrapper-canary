n.d(t, { l: () => Z }), n(47120);
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
    let { onSettingsButtonClick: t, wide: n, showOutputDevices: a = !1 } = e,
        [Z, k] = i.useState(''),
        { analyticsLocations: R } = (0, m.ZP)(p.Z.VOICE_FILTER_POPOUT),
        L = i.useRef(null),
        D = (0, u.Z)({
            minDimension: 400,
            maxDimension: 600,
            resizableDomNodeRef: L,
            onElementResize: (e, t) => {},
            onElementResizeEnd: (e) => {},
            orientation: u.y.VERTICAL_TOP
        }),
        M = (0, s.e7)([_.default], () => (0, v.I5)(_.default.getCurrentUser())),
        W = (0, s.e7)([x.Z], () => x.Z.getCatalogUpdateTime()),
        [F, U] = i.useState(!1),
        [B, G] = i.useState(!1),
        { activeVoice: H } = (0, O.o)(),
        V = (0, c.q_F)({
            transform: F ? 'translateY(-'.concat(8, 'px) scale(').concat(0.96, ')') : 'translateY(0px) scale(1)',
            config: { duration: 200 }
        }),
        z = (0, c.q_F)({
            transform: F ? 'translateY(0px)' : 'translateY('.concat(50, 'px)'),
            config: { duration: 200 }
        }),
        K = i.useRef(null);
    return (
        (0, d.ZP)(() => {
            (0, j.r5)(), b.default.track(P.rMx.VOICE_FILTER_PICKER_OPENED, { active_voice_filter_id: null != H ? H : null });
        }),
        (0, r.jsx)(m.Gt, {
            value: R,
            children: (0, r.jsxs)('div', {
                ref: L,
                className: o()(w.voiceFiltersPopout, { [w.wide]: n }),
                style: { height: 500 },
                children: [
                    (0, r.jsx)('div', {
                        className: w.resizeHandle,
                        onMouseDown: D,
                        children: (0, r.jsx)('div', { className: w.resizePill })
                    }),
                    (0, r.jsx)(c.E1j, {
                        size: c.E1j.Sizes.MEDIUM,
                        placeholder: A.NW.string(A.t.hHCZJS),
                        className: w.voiceFiltersHeader,
                        autoFocus: !0,
                        onChange: k,
                        query: Z,
                        onClear: () => k('')
                    }),
                    (0, r.jsx)(S.w, {
                        query: Z,
                        columns: n ? 5 : 4,
                        handleScroll: (e) => {
                            let t = K.current;
                            if (null == t || (U(e > 0), B)) return;
                            let { height: n, totalHeight: r } = t.getListDimensions();
                            e < r - n || (G(!0), b.default.track(P.rMx.VOICE_FILTER_PICKER_SCROLLED));
                        },
                        voiceListRef: K
                    }),
                    !M &&
                        (0, r.jsxs)('div', {
                            className: w.upsellCountdownContainer,
                            children: [
                                null != W &&
                                    (0, r.jsx)(l.animated.div, {
                                        style: V,
                                        children: (0, r.jsx)(I.J, {
                                            catalogUpdateTime: W,
                                            isScrolled: F
                                        })
                                    }),
                                (0, r.jsx)('div', {
                                    className: w.upsellContainer,
                                    children: (0, r.jsx)(l.animated.div, {
                                        style: z,
                                        children: (0, r.jsx)(h.p, {
                                            showUpsell: !0,
                                            text: A.NW.format(A.t['XMDm8/'], {
                                                nitroTierName: (0, y.Px)(T.p9.TIER_2),
                                                onClick: () => (0, g.i)()
                                            }),
                                            button: A.NW.string(A.t.YScQSE),
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
                    (0, r.jsx)(N.R, {}),
                    (0, r.jsx)(C.y, {}),
                    (0, r.jsxs)('div', {
                        className: o()(w.voiceFiltersFooter, { [w.hasActiveVoice]: null != H }),
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
                                    children: (e) => {
                                        var t, n;
                                        return (0, r.jsx)(
                                            c.zxk,
                                            ((t = (function (e) {
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
                                            })({}, e)),
                                            (n = n =
                                                {
                                                    size: c.zxk.Sizes.MIN,
                                                    look: c.zxk.Looks.BLANK,
                                                    grow: !1,
                                                    className: w.voiceFiltersFooterButton,
                                                    innerClassName: w.voiceFiltersFooterButtonInner,
                                                    onClick: (t) => {
                                                        var n;
                                                        b.default.track(P.rMx.VOICE_FILTER_VOICE_SETTINGS_CLICKED, { active_voice_filter_id: null != H ? H : null }), null === (n = e.onClick) || void 0 === n || n.call(e, t);
                                                    },
                                                    children: (0, r.jsx)(c.Huf, {
                                                        size: 'custom',
                                                        width: 20,
                                                        height: 20
                                                    })
                                                }),
                                            Object.getOwnPropertyDescriptors
                                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                                : (function (e, t) {
                                                      var n = Object.keys(e);
                                                      if (Object.getOwnPropertySymbols) {
                                                          var r = Object.getOwnPropertySymbols(e);
                                                          n.push.apply(n, r);
                                                      }
                                                      return n;
                                                  })(Object(n)).forEach(function (e) {
                                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                                  }),
                                            t)
                                        );
                                    }
                                })
                        ]
                    })
                ]
            })
        })
    );
}
