n.d(t, {
    Kn: () => m,
    ZP: () => E,
    fi: () => g
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(704215),
    c = n(481060),
    u = n(607070),
    d = n(243778),
    f = n(921944),
    _ = n(388032),
    p = n(230889);
let h = 0.2,
    m = 41;
function g() {
    let e = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        [t, o] = (0, d.US)([l.z.TRIAL_NUX_EMOJI_PICKER]),
        h = t === l.z.TRIAL_NUX_EMOJI_PICKER;
    return (
        i.useEffect(
            () => () => {
                h && o(f.L.TAKE_ACTION);
            },
            [h, o]
        ),
        (0, r.jsxs)('div', {
            className: p.nitroTopDividerContainer,
            children: [
                (0, r.jsx)('div', { className: p.nitroTopDividerUpper }),
                (0, r.jsx)('div', { className: a()(p.nitroTopDividerShadow, p.glow, { [p.reducedMotion]: e || !h }) }),
                (0, r.jsxs)('div', {
                    className: p.nitroTopDividerLockContainer,
                    children: [
                        (0, r.jsx)('div', { className: p.nitroTopDividerLockBorder }),
                        !e &&
                            h &&
                            (0, r.jsx)(c.Fmz, {
                                className: p.premiumUnlockAnimation,
                                loop: !1,
                                importData: () => n.e('21812').then(n.t.bind(n, 741855, 19))
                            }),
                        (0, r.jsxs)('div', {
                            className: a()(p.premiumUnlockedWithNitroPillContainer, { [p.reducedMotion]: e || !h }),
                            children: [
                                (0, r.jsx)(c.SrA, {
                                    size: 'xs',
                                    color: 'white'
                                }),
                                (0, r.jsx)(c.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'always-white',
                                    lineClamp: 1,
                                    children: _.NW.string(_.t['BMw+7O'])
                                })
                            ]
                        }),
                        (0, r.jsx)('div', { className: p.nitroTopDividerLockBorderReversed })
                    ]
                }),
                (0, r.jsx)('div', { className: p.reverseTrialTopDividerLower })
            ]
        })
    );
}
let E = function (e) {
    let { glowOpacity: t, className: n, colorOpacity: i = h } = e;
    return (0, r.jsxs)('div', {
        className: a()(p.nitroTopDividerContainer, n),
        children: [
            (0, r.jsx)('div', { className: p.nitroTopDividerUpper }),
            (0, r.jsx)('div', {
                style: { opacity: t },
                className: p.nitroTopDividerShadow
            }),
            (0, r.jsxs)('div', {
                className: p.nitroTopDividerLockContainer,
                children: [
                    (0, r.jsx)('div', { className: p.nitroTopDividerLockBorder }),
                    (0, r.jsx)('div', {
                        className: p.nitroTopDividerLockCircle,
                        children: (0, r.jsx)(c.mBM, {
                            size: 'xs',
                            color: 'white'
                        })
                    }),
                    (0, r.jsx)('div', { className: p.nitroTopDividerLockBorderReversed })
                ]
            }),
            (0, r.jsx)('div', {
                style: { opacity: i },
                className: p.nitroTopDividerLower
            })
        ]
    });
};
