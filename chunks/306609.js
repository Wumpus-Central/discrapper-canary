n.d(t, { l: () => M }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(642128),
    o = n(442837),
    c = n(481060),
    d = n(493773),
    u = n(347469),
    h = n(100527),
    p = n(906732),
    m = n(659580),
    f = n(53691),
    g = n(166335),
    _ = n(594174),
    C = n(626135),
    x = n(111361),
    v = n(74538),
    E = n(709706),
    I = n(378441),
    b = n(799143),
    Z = n(358820),
    N = n(448697),
    T = n(365831),
    S = n(639539),
    j = n(627325),
    y = n(981631),
    A = n(474936),
    P = n(388032),
    R = n(52419);
function M(e) {
    let { onSettingsButtonClick: t, wide: n, showOutputDevices: a = !1 } = e,
        [M, L] = l.useState(''),
        { analyticsLocations: k } = (0, p.ZP)(h.Z.VOICE_FILTER_POPOUT),
        O = l.useRef(null),
        D = (0, u.Z)({
            minDimension: 400,
            maxDimension: 600,
            resizableDomNodeRef: O,
            onElementResize: (e, t) => {},
            onElementResizeEnd: (e) => {},
            orientation: u.y.VERTICAL_TOP
        }),
        w = (0, o.e7)([_.default], () => (0, x.I5)(_.default.getCurrentUser())),
        U = (0, o.e7)([E.Z], () => E.Z.getCatalogUpdateTime()),
        [B, F] = l.useState(!1),
        [H, G] = l.useState(!1),
        { activeVoice: V } = (0, I.o)(),
        z = (0, c.q_F)({
            transform: B ? 'translateY(-'.concat(8, 'px) scale(').concat(0.96, ')') : 'translateY(0px) scale(1)',
            config: { duration: 200 }
        }),
        W = (0, c.q_F)({
            transform: B ? 'translateY(0px)' : 'translateY('.concat(50, 'px)'),
            config: { duration: 200 }
        }),
        Y = l.useRef(null);
    return (
        (0, d.ZP)(() => {
            (0, Z.r5)(), C.default.track(y.rMx.VOICE_FILTER_PICKER_OPENED, { active_voice_filter_id: null != V ? V : null });
        }),
        (0, i.jsx)(p.Gt, {
            value: k,
            children: (0, i.jsxs)('div', {
                ref: O,
                className: r()(R.voiceFiltersPopout, { [R.wide]: n }),
                style: { height: 500 },
                children: [
                    (0, i.jsx)('div', {
                        className: R.resizeHandle,
                        onMouseDown: D,
                        children: (0, i.jsx)('div', { className: R.resizePill })
                    }),
                    (0, i.jsx)(c.E1j, {
                        size: c.E1j.Sizes.MEDIUM,
                        placeholder: P.intl.string(P.t.hHCZJS),
                        className: R.voiceFiltersHeader,
                        autoFocus: !0,
                        onChange: L,
                        query: M,
                        onClear: () => L('')
                    }),
                    (0, i.jsx)(j.w, {
                        query: M,
                        columns: n ? 5 : 4,
                        handleScroll: (e) => {
                            let t = Y.current;
                            if (null == t || (F(e > 0), H)) return;
                            let { height: n, totalHeight: i } = t.getListDimensions();
                            e < i - n || (G(!0), C.default.track(y.rMx.VOICE_FILTER_PICKER_SCROLLED));
                        },
                        voiceListRef: Y
                    }),
                    !w &&
                        (0, i.jsxs)('div', {
                            className: R.upsellCountdownContainer,
                            children: [
                                null != U &&
                                    (0, i.jsx)(s.animated.div, {
                                        style: z,
                                        children: (0, i.jsx)(S.J, {
                                            catalogUpdateTime: U,
                                            isScrolled: B
                                        })
                                    }),
                                (0, i.jsx)('div', {
                                    className: R.upsellContainer,
                                    children: (0, i.jsx)(s.animated.div, {
                                        style: W,
                                        children: (0, i.jsx)(f.p, {
                                            showUpsell: !0,
                                            text: P.intl.format(P.t['XMDm8/'], {
                                                nitroTierName: (0, v.Px)(A.p9.TIER_2),
                                                onClick: () => (0, g.i)()
                                            }),
                                            button: P.intl.string(P.t.YScQSE),
                                            buttonAnalyticsObject: { section: y.jXE.VOICE_FILTERS_FLOATING_UPSELL },
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
                    (0, i.jsx)(N.R, {}),
                    (0, i.jsx)(T.y, {}),
                    (0, i.jsxs)('div', {
                        className: r()(R.voiceFiltersFooter, { [R.hasActiveVoice]: null != V }),
                        children: [
                            (0, i.jsx)(b.Y, {}),
                            a && (0, i.jsx)(b.a, {}),
                            null != t &&
                                (0, i.jsx)(c.yRy, {
                                    position: 'top',
                                    renderPopout: () =>
                                        (0, i.jsx)(m.default, {
                                            renderInputModes: !0,
                                            renderInputVolume: !0,
                                            onClose: t
                                        }),
                                    children: (e) =>
                                        (0, i.jsx)(c.zxk, {
                                            ...e,
                                            size: c.zxk.Sizes.MIN,
                                            look: c.zxk.Looks.BLANK,
                                            grow: !1,
                                            className: R.voiceFiltersFooterButton,
                                            innerClassName: R.voiceFiltersFooterButtonInner,
                                            onClick: (t) => {
                                                var n;
                                                C.default.track(y.rMx.VOICE_FILTER_VOICE_SETTINGS_CLICKED, { active_voice_filter_id: null != V ? V : null }), null === (n = e.onClick) || void 0 === n || n.call(e, t);
                                            },
                                            children: (0, i.jsx)(c.Huf, {
                                                size: 'custom',
                                                width: 20,
                                                height: 20
                                            })
                                        })
                                })
                        ]
                    })
                ]
            })
        })
    );
}
