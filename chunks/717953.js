n.d(t, { Z: () => v }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(657707),
    l = n(442837),
    c = n(704215),
    u = n(481060),
    d = n(410030),
    f = n(44315),
    _ = n(243778),
    p = n(581883),
    h = n(583901),
    m = n(921944),
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
        [S, T] = (0, _.US)([c.z.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE]),
        A = (0, d.ZP)(),
        N = null != I,
        C = (0, u.wjy)(A) ? y.darkOverlay : y.lightOverlay,
        R = (null != (n = null == I || null == (t = I.colors) ? void 0 : t.length) ? n : 0) > 1,
        P = i.useMemo(() => {
            if (null == I || null == I.colors || 0 === I.colors.length) return;
            let e = I.colors[0];
            if (R) {
                let { colors: t, gradientAngle: n } = I;
                e = 'linear-gradient('.concat(n, 'deg, ').concat(t.join(', '), ')');
            }
            return { background: 'var(--bg-overlay), '.concat(e) };
        }, [I, R]),
        w = (0, f.Sl)(g.Il.WHITE).hex,
        D = (0, f.Sl)(g.Il.RED_430).hex,
        L = N ? w : void 0,
        x = i.useCallback(() => {
            S === c.z.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE && T(m.L.TAKE_ACTION), null == v || v();
        }, [S, T, v]),
        k = S === c.z.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE;
    return (0, r.jsxs)(h.S4, {
        onSelect: a ? void 0 : x,
        isSelected: !1,
        showSelectionCircle: N,
        name: b.intl.string(E.default.KSBBpK),
        className: o()(y.container, N && C, a && y.disabled),
        showBadge: !1,
        showLockedBadge: !1,
        style: P,
        children: [
            !N && (0, r.jsx)(O, {}),
            (0, r.jsx)('div', { className: y.borderOverlay }),
            (0, r.jsx)(s.V3v, {
                color: L,
                className: y.paletteIcon
            }),
            k &&
                (0, r.jsx)(u.IGR, {
                    className: y.newBadge,
                    text: b.intl.string(b.t.y2b7CA),
                    color: D
                })
        ]
    });
}
