(n.d(t, { Z: () => I }), n(388685));
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
    _ = n(266454),
    p = n(243778),
    h = n(581883),
    m = n(583901),
    g = n(921944),
    E = n(231338),
    b = n(671147),
    y = n(388032),
    O = n(313572);
function v() {
    return (0, r.jsxs)('svg', {
        className: O.newRing,
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
function I(e) {
    var t, n;
    let { isDisabled: a, onSelect: I } = e,
        T = (0, l.e7)([h.Z], () => {
            var e, t;
            return null == (t = h.Z.settings.appearance) || null == (e = t.clientThemeSettings) ? void 0 : e.customUserThemeSettings;
        }),
        [S, A] = (0, p.US)([c.z.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE]),
        N = (0, _.Nj)(c.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        C = (0, d.ZP)(),
        R = null != T,
        P = (0, u.wjy)(C) ? O.darkOverlay : O.lightOverlay,
        w = (null != (n = null == T || null == (t = T.colors) ? void 0 : t.length) ? n : 0) > 1,
        D = i.useMemo(() => {
            if (null == T || null == T.colors || 0 === T.colors.length) return;
            let e = T.colors[0];
            if (w) {
                let { colors: t, gradientAngle: n } = T;
                e = 'linear-gradient('.concat(n, 'deg, ').concat(t.join(', '), ')');
            }
            return { background: 'var(--bg-overlay), '.concat(e) };
        }, [T, w]),
        L = (0, f.Sl)(E.Il.WHITE).hex,
        x = (0, f.Sl)(E.Il.RED_430).hex,
        k = R ? L : void 0,
        M = i.useCallback(() => {
            (S === c.z.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE && A(g.L.TAKE_ACTION), null == I || I());
        }, [S, A, I]),
        j = S === c.z.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE;
    return (0, r.jsxs)(m.S4, {
        onSelect: a ? void 0 : M,
        isSelected: !1,
        showSelectionCircle: R,
        name: y.intl.string(b.default.KSBBpK),
        className: o()(O.container, R && P, a && O.disabled),
        showBadge: !1,
        showLockedBadge: !1,
        style: D,
        children: [
            !N && !R && (0, r.jsx)(v, {}),
            (0, r.jsx)('div', { className: O.borderOverlay }),
            (0, r.jsx)(s.V3v, {
                color: k,
                className: O.paletteIcon
            }),
            j &&
                (0, r.jsx)(u.IGR, {
                    className: O.newBadge,
                    text: y.intl.string(y.t.y2b7CA),
                    color: x
                })
        ]
    });
}
