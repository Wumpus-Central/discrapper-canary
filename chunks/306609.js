n.d(t, { l: () => P }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(642128),
    o = n(442837),
    c = n(481060),
    d = n(347469),
    u = n(100527),
    h = n(906732),
    p = n(659580),
    m = n(53691),
    f = n(166335),
    g = n(594174),
    _ = n(111361),
    C = n(74538),
    x = n(743498),
    v = n(709706),
    E = n(378441),
    I = n(799143),
    b = n(448697),
    Z = n(365831),
    N = n(639539),
    T = n(627325),
    S = n(981631),
    j = n(474936),
    A = n(388032),
    y = n(600809);
function P(e) {
    let { onSettingsButtonClick: t, short: n, wide: a, showOutputDevices: P = !1 } = e,
        [R, M] = l.useState(''),
        { analyticsLocations: L } = (0, h.ZP)(u.Z.VOICE_FILTER_POPOUT),
        k = l.useRef(null),
        O = (0, d.Z)({
            minDimension: 400,
            maxDimension: 600,
            resizableDomNodeRef: k,
            onElementResize: (e, t) => {},
            onElementResizeEnd: (e) => {},
            orientation: d.y.VERTICAL_TOP
        }),
        D = (0, o.e7)([g.default], () => (0, _.I5)(g.default.getCurrentUser())),
        w = (0, o.e7)([v.Z], () => v.Z.getCatalogUpdateTime()),
        [U, B] = l.useState(!1),
        { activeVoice: F } = (0, E.o)(),
        H = (0, c.q_F)({
            transform: U ? 'translateY(-'.concat(6, 'px) scale(').concat(0.96, ')') : 'translateY(0px) scale(1)',
            config: { duration: 200 }
        }),
        G = (0, c.q_F)({
            transform: U ? 'translateY(0px)' : 'translateY('.concat(50, 'px)'),
            config: { duration: 200 }
        }),
        V = l.useRef(null);
    return (
        l.useEffect(() => {
            (0, x.J_)();
        }, []),
        (0, i.jsx)(h.Gt, {
            value: L,
            children: (0, i.jsxs)('div', {
                ref: k,
                className: r()(y.voiceFiltersPopout, { [y.wide]: a }),
                style: { height: 400 },
                children: [
                    (0, i.jsx)('div', {
                        className: y.resizeHandle,
                        onMouseDown: O,
                        children: (0, i.jsx)('div', { className: y.resizePill })
                    }),
                    (0, i.jsx)(c.E1j, {
                        size: c.E1j.Sizes.MEDIUM,
                        placeholder: A.intl.string(A.t.hHCZJS),
                        className: y.voiceFiltersHeader,
                        autoFocus: !0,
                        onChange: M,
                        query: R,
                        onClear: () => M('')
                    }),
                    (0, i.jsx)(T.w, {
                        query: R,
                        columns: a ? 5 : 4,
                        handleScroll: (e) => {
                            null != V.current && B(e > 0);
                        },
                        voiceListRef: V
                    }),
                    !D &&
                        (0, i.jsxs)('div', {
                            className: y.upsellCountdownContainer,
                            children: [
                                null != w &&
                                    (0, i.jsx)(s.animated.div, {
                                        style: H,
                                        children: (0, i.jsx)(N.J, {
                                            catalogUpdateTime: w,
                                            isScrolled: U
                                        })
                                    }),
                                (0, i.jsx)('div', {
                                    className: y.upsellContainer,
                                    children: (0, i.jsx)(s.animated.div, {
                                        style: G,
                                        children: (0, i.jsx)(m.p, {
                                            showUpsell: !0,
                                            text: A.intl.format(A.t['XMDm8/'], {
                                                nitroTierName: (0, C.Px)(j.p9.TIER_2),
                                                onClick: () => (0, f.i)()
                                            }),
                                            button: A.intl.string(A.t.YScQSE),
                                            buttonAnalyticsObject: { section: S.jXE.VOICE_FILTERS_FLOATING_UPSELL },
                                            showShadow: !1,
                                            position: 'inline',
                                            className: y.upsell,
                                            buttonSize: 'sm',
                                            useLockIcon: !0,
                                            buttonStyles: y.subscribeButton
                                        })
                                    })
                                })
                            ]
                        }),
                    (0, i.jsx)(b.R, {}),
                    (0, i.jsx)(Z.y, {}),
                    (0, i.jsxs)('div', {
                        className: r()(y.voiceFiltersFooter, { [y.hasActiveVoice]: null != F }),
                        children: [
                            (0, i.jsx)(I.Y, {}),
                            P && (0, i.jsx)(I.a, {}),
                            null != t &&
                                (0, i.jsx)(c.yRy, {
                                    position: 'top',
                                    renderPopout: () =>
                                        (0, i.jsx)(p.default, {
                                            renderInputModes: !0,
                                            renderInputVolume: !0,
                                            onClose: t
                                        }),
                                    children: (e) =>
                                        (0, i.jsx)(c.zxk, {
                                            size: c.zxk.Sizes.MIN,
                                            look: c.zxk.Looks.BLANK,
                                            grow: !1,
                                            className: y.voiceFiltersFooterButton,
                                            innerClassName: y.voiceFiltersFooterButtonInner,
                                            ...e,
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
