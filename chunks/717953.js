n.d(t, { Z: () => v });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(657707),
    l = n(442837),
    c = n(704215),
    u = n(481060),
    d = n(410030),
    _ = n(44315),
    f = n(266454),
    p = n(581883),
    h = n(583901),
    m = n(576157),
    g = n(231338),
    E = n(671147),
    b = n(388032),
    y = n(313572);
function O() {
    return (0, r.jsxs)('svg', {
        className: y.newRing,
        width: '68',
        height: '68',
        viewBox: '0 0 68 68',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        children: [
            (0, r.jsx)('circle', {
                cx: '33.875',
                cy: '33.875',
                r: '32.875',
                stroke: 'url(#paint0_linear_1368_16544)',
                'stroke-width': '2'
            }),
            (0, r.jsx)('defs', {
                children: (0, r.jsxs)('linearGradient', {
                    id: 'paint0_linear_1368_16544',
                    x1: '33.875',
                    y1: '2',
                    x2: '33.875',
                    y2: '65.75',
                    gradientUnits: 'userSpaceOnUse',
                    children: [
                        (0, r.jsx)('stop', { 'stop-color': '#B473F5' }),
                        (0, r.jsx)('stop', {
                            offset: '1',
                            'stop-color': '#E292AA'
                        })
                    ]
                })
            })
        ]
    });
}
function v(e) {
    var t, n;
    let { isDisabled: a, onSelect: v } = e,
        I = (0, l.e7)([p.Z], () => {
            var e, t;
            return null == (t = p.Z.settings.appearance) || null == (e = t.clientThemeSettings) ? void 0 : e.customUserThemeSettings;
        }),
        { shouldShowNewBadge: T, markNewBadgeAsDismissed: S } = (0, m.w)(),
        A = (0, f.Nj)(c.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        N = (0, d.ZP)(),
        C = null != I,
        R = (0, u.wjy)(N) ? y.darkOverlay : y.lightOverlay,
        P = (null != (n = null == I || null == (t = I.colors) ? void 0 : t.length) ? n : 0) > 1,
        w = i.useMemo(() => {
            if (null == I || null == I.colors || 0 === I.colors.length) return;
            let e = I.colors[0];
            if (P) {
                let { colors: t, gradientAngle: n } = I;
                e = 'linear-gradient('.concat(n, 'deg, ').concat(t.join(', '), ')');
            }
            return { background: 'var(--background-gradient), '.concat(e) };
        }, [I, P]),
        D = (0, _.Sl)(g.Il.WHITE).hex,
        L = (0, _.Sl)(g.Il.RED_430).hex,
        x = C ? D : void 0,
        M = i.useCallback(() => {
            (T && S(), null == v || v());
        }, [T, S, v]);
    return (0, r.jsxs)('div', {
        className: y.badgeContainer,
        children: [
            (0, r.jsxs)(h.S4, {
                onSelect: a ? void 0 : M,
                isSelected: !1,
                showSelectionCircle: C,
                name: b.intl.string(E.default.KSBBpK),
                className: o()(y.container, C && R, a && y.disabled),
                showBadge: !1,
                showLockedBadge: !1,
                style: w,
                children: [
                    !A && !C && (0, r.jsx)(O, {}),
                    (0, r.jsx)('div', { className: y.borderOverlay }),
                    (0, r.jsx)(s.V3v, {
                        color: x,
                        className: y.paletteIcon
                    })
                ]
            }),
            T &&
                (0, r.jsx)(u.IGR, {
                    className: y.newBadge,
                    text: b.intl.string(b.t.y2b7CA),
                    color: L
                })
        ]
    });
}
