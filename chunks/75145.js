r.d(n, {
    Kn: function () {
        return E;
    },
    fi: function () {
        return y;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(442837),
    c = r(704215),
    d = r(481060),
    f = r(607070),
    p = r(243778),
    h = r(921944),
    _ = r(388032),
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
function y() {
    let e = (0, u.e7)([f.Z], () => f.Z.useReducedMotion),
        [n, i] = (0, p.US)([c.z.TRIAL_NUX_EMOJI_PICKER]),
        s = n === c.z.TRIAL_NUX_EMOJI_PICKER;
    return (
        o.useEffect(
            () => () => {
                s && i(h.L.TAKE_ACTION);
            },
            [s, i]
        ),
        (0, a.jsxs)('div', {
            className: m.nitroTopDividerContainer,
            children: [
                (0, a.jsx)('div', { className: m.nitroTopDividerUpper }),
                (0, a.jsx)('div', { className: l()(m.nitroTopDividerShadow, m.glow, { [m.reducedMotion]: e || !s }) }),
                (0, a.jsxs)('div', {
                    className: l()(m.nitroTopDividerLockContainer),
                    children: [
                        (0, a.jsx)('div', { className: m.nitroTopDividerLockBorder }),
                        !e &&
                            s &&
                            (0, a.jsx)(d.LottieAnimation, {
                                className: l()(m.premiumUnlockAnimation),
                                loop: !1,
                                importData: () => r.e('21812').then(r.t.bind(r, 741855, 19))
                            }),
                        (0, a.jsxs)('div', {
                            className: l()(m.premiumUnlockedWithNitroPillContainer, { [m.reducedMotion]: e || !s }),
                            children: [
                                (0, a.jsx)(d.NitroWheelIcon, {
                                    size: 'xs',
                                    color: 'white'
                                }),
                                (0, a.jsx)(d.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'always-white',
                                    lineClamp: 1,
                                    children: _.intl.string(_.t['BMw+7O'])
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
