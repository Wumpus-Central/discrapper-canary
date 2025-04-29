n.d(t, { Z: () => v }), n(388685);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(272573),
    l = n(442837),
    c = n(704215),
    u = n(481060),
    d = n(607070),
    f = n(243778),
    _ = n(594174),
    p = n(74538),
    h = n(921944),
    m = n(388032),
    g = n(742840);
let E = {
        tension: 750,
        mass: 2.5,
        friction: 70
    },
    b = 20;
function y(e) {
    let { tooltipText: t, headingText: n, textColor: i } = e,
        o = null != n;
    return (0, r.jsxs)('span', {
        className: o ? void 0 : g.tooltipContainer,
        children: [
            (0, r.jsxs)('span', {
                className: g.tooltipContainer,
                children: [
                    (0, r.jsx)(u.SrA, {
                        size: 'md',
                        color: 'currentColor',
                        className: g.nitroWheel
                    }),
                    o
                        ? (0, r.jsx)(u.X6q, {
                              color: null != i ? i : 'text-normal',
                              variant: 'heading-sm/semibold',
                              children: n
                          })
                        : null
                ]
            }),
            (0, r.jsx)(u.Text, {
                variant: o ? 'text-xs/normal' : 'text-sm/medium',
                color: null != i ? i : 'text-normal',
                children: t
            })
        ]
    });
}
function O(e) {
    return e ? m.intl.string(m.t['5cRA/f']) : m.intl.string(m.t.buV4am);
}
function v(e) {
    let { checked: t, onClick: n, id: o = 'burst-reaction-toggle-button' } = e,
        v = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        I = _.default.getCurrentUser(),
        S = null == I || (0, p.I5)(I) ? [c.z.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP] : [],
        [T, A] = (0, f.US)(S),
        [N, C] = i.useState(!1),
        [R, P] = (0, u.q_F)(() => ({})),
        w = (0, s.animated)(u.Pt5);
    function D() {
        P({
            from: { rotate: t ? '360deg' : '0deg' },
            to: { rotate: t ? '0deg' : '360deg' },
            config: E
        }),
            null == n || n(),
            C(!1);
    }
    i.useEffect(() => {
        let e = T === c.z.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (A(h.L.DISMISS), setTimeout(() => C(e), 200));
    }, [T, A]);
    let L = N ? m.intl.string(m.t['Osi/u7']) : O(t),
        x = N ? m.intl.string(m.t.ORK94u) : void 0;
    return (0, r.jsxs)(u.DY3, {
        position: 'top',
        text: (0, r.jsx)(y, {
            textColor: 'always-white',
            tooltipText: L,
            headingText: x
        }),
        color: u.ua7.Colors.BRAND,
        forceOpen: N,
        'aria-label': L,
        tooltipClassName: g.tooltip,
        children: [
            (0, r.jsx)('input', {
                className: g.visuallyHidden,
                checked: t,
                onChange: D,
                id: o,
                type: 'checkbox'
            }),
            (0, r.jsxs)('label', {
                htmlFor: o,
                className: a()(g.label, { [g.labelChecked]: t }),
                children: [
                    t
                        ? (0, r.jsx)(u.ZX5, {
                              className: g.shine,
                              shinePaused: v
                          })
                        : null,
                    (0, r.jsx)(w, {
                        style: v ? void 0 : R,
                        size: 'custom',
                        width: b,
                        height: b,
                        color: t ? 'white' : 'currentColor',
                        className: g.icon
                    }),
                    (0, r.jsx)('span', {
                        children: (0, r.jsx)(u.Text, {
                            className: g.visuallyHidden,
                            variant: 'text-sm/semibold',
                            children: m.intl.string(m.t.buV4am)
                        })
                    })
                ]
            })
        ]
    });
}
