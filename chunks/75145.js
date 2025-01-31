n.d(t, {
    Kn: () => m,
    ZP: () => E,
    fi: () => g
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(704215),
    u = n(481060),
    c = n(607070),
    d = n(243778),
    f = n(921944),
    _ = n(388032),
    p = n(86694);
let h = 0.2,
    m = 41;
function g() {
    let e = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        [t, a] = (0, d.US)([l.z.TRIAL_NUX_EMOJI_PICKER]),
        h = t === l.z.TRIAL_NUX_EMOJI_PICKER;
    return (
        r.useEffect(
            () => () => {
                h && a(f.L.TAKE_ACTION);
            },
            [h, a]
        ),
        (0, i.jsxs)('div', {
            className: p.nitroTopDividerContainer,
            children: [
                (0, i.jsx)('div', { className: p.nitroTopDividerUpper }),
                (0, i.jsx)('div', { className: s()(p.nitroTopDividerShadow, p.glow, { [p.reducedMotion]: e || !h }) }),
                (0, i.jsxs)('div', {
                    className: s()(p.nitroTopDividerLockContainer),
                    children: [
                        (0, i.jsx)('div', { className: p.nitroTopDividerLockBorder }),
                        !e &&
                            h &&
                            (0, i.jsx)(u.Fmz, {
                                className: s()(p.premiumUnlockAnimation),
                                loop: !1,
                                importData: () => n.e('21812').then(n.t.bind(n, 741855, 19))
                            }),
                        (0, i.jsxs)('div', {
                            className: s()(p.premiumUnlockedWithNitroPillContainer, { [p.reducedMotion]: e || !h }),
                            children: [
                                (0, i.jsx)(u.SrA, {
                                    size: 'xs',
                                    color: 'white'
                                }),
                                (0, i.jsx)(u.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'always-white',
                                    lineClamp: 1,
                                    children: _.intl.string(_.t['BMw+7O'])
                                })
                            ]
                        }),
                        (0, i.jsx)('div', { className: p.nitroTopDividerLockBorderReversed })
                    ]
                }),
                (0, i.jsx)('div', { className: p.reverseTrialTopDividerLower })
            ]
        })
    );
}
let E = function (e) {
    let { glowOpacity: t, className: n, colorOpacity: r = h } = e;
    return (0, i.jsxs)('div', {
        className: s()(p.nitroTopDividerContainer, n),
        children: [
            (0, i.jsx)('div', { className: p.nitroTopDividerUpper }),
            (0, i.jsx)('div', {
                style: { opacity: t },
                className: p.nitroTopDividerShadow
            }),
            (0, i.jsxs)('div', {
                className: s()(p.nitroTopDividerLockContainer),
                children: [
                    (0, i.jsx)('div', { className: p.nitroTopDividerLockBorder }),
                    (0, i.jsx)('div', {
                        className: p.nitroTopDividerLockCircle,
                        children: (0, i.jsx)(u.mBM, {
                            size: 'xs',
                            color: 'white'
                        })
                    }),
                    (0, i.jsx)('div', { className: p.nitroTopDividerLockBorderReversed })
                ]
            }),
            (0, i.jsx)('div', {
                style: { opacity: r },
                className: p.nitroTopDividerLower
            })
        ]
    });
};
