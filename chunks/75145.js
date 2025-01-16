r.d(n, {
    Kn: function () {
        return E;
    },
    fi: function () {
        return I;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(442837),
    c = r(704215),
    d = r(481060),
    f = r(607070),
    _ = r(243778),
    h = r(921944),
    p = r(388032),
    m = r(86694);
let g = 0.2,
    E = 41;
function v(e) {
    let { glowOpacity: n, className: r, colorOpacity: i = g } = e;
    return (0, a.jsxs)('div', {
        className: l()(m.nitroTopDividerContainer, r),
        children: [
            (0, a.jsx)('div', { className: m.nitroTopDividerUpper }),
            (0, a.jsx)('div', {
                style: { opacity: n },
                className: m.nitroTopDividerShadow
            }),
            (0, a.jsxs)('div', {
                className: l()(m.nitroTopDividerLockContainer),
                children: [
                    (0, a.jsx)('div', { className: m.nitroTopDividerLockBorder }),
                    (0, a.jsx)('div', {
                        className: m.nitroTopDividerLockCircle,
                        children: (0, a.jsx)(d.LockIcon, {
                            size: 'xs',
                            color: 'white'
                        })
                    }),
                    (0, a.jsx)('div', { className: m.nitroTopDividerLockBorderReversed })
                ]
            }),
            (0, a.jsx)('div', {
                style: { opacity: i },
                className: m.nitroTopDividerLower
            })
        ]
    });
}
function I() {
    let e = (0, u.e7)([f.Z], () => f.Z.useReducedMotion),
        [n, i] = (0, _.US)([c.z.TRIAL_NUX_EMOJI_PICKER]),
        o = n === c.z.TRIAL_NUX_EMOJI_PICKER;
    return (
        s.useEffect(
            () => () => {
                o && i(h.L.TAKE_ACTION);
            },
            [o, i]
        ),
        (0, a.jsxs)('div', {
            className: m.nitroTopDividerContainer,
            children: [
                (0, a.jsx)('div', { className: m.nitroTopDividerUpper }),
                (0, a.jsx)('div', { className: l()(m.nitroTopDividerShadow, m.glow, { [m.reducedMotion]: e || !o }) }),
                (0, a.jsxs)('div', {
                    className: l()(m.nitroTopDividerLockContainer),
                    children: [
                        (0, a.jsx)('div', { className: m.nitroTopDividerLockBorder }),
                        !e &&
                            o &&
                            (0, a.jsx)(d.LottieAnimation, {
                                className: l()(m.premiumUnlockAnimation),
                                loop: !1,
                                importData: () => r.e('21812').then(r.t.bind(r, 741855, 19))
                            }),
                        (0, a.jsxs)('div', {
                            className: l()(m.premiumUnlockedWithNitroPillContainer, { [m.reducedMotion]: e || !o }),
                            children: [
                                (0, a.jsx)(d.NitroWheelIcon, {
                                    size: 'xs',
                                    color: 'white'
                                }),
                                (0, a.jsx)(d.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'always-white',
                                    lineClamp: 1,
                                    children: p.intl.string(p.t['BMw+7O'])
                                })
                            ]
                        }),
                        (0, a.jsx)('div', { className: m.nitroTopDividerLockBorderReversed })
                    ]
                }),
                (0, a.jsx)('div', { className: m.reverseTrialTopDividerLower })
            ]
        })
    );
}
n.ZP = v;
