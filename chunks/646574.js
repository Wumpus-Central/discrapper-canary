n.d(t, { Z: () => O }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(642128),
    l = n(442837),
    c = n(704215),
    u = n(481060),
    d = n(607070),
    f = n(243778),
    p = n(594174),
    _ = n(74538),
    h = n(921944),
    m = n(388032),
    g = n(107525);
let E = {
        tension: 750,
        mass: 2.5,
        friction: 70
    },
    v = 20;
function b(e) {
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
function y(e) {
    return e ? m.NW.string(m.t['5cRA/f']) : m.NW.string(m.t.buV4am);
}
function O(e) {
    let { checked: t, onClick: n, id: o = 'burst-reaction-toggle-button' } = e,
        O = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        S = p.default.getCurrentUser(),
        I = null == S || (0, _.I5)(S) ? [c.z.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP] : [],
        [T, N] = (0, f.US)(I),
        [A, C] = i.useState(!1),
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
        e && (N(h.L.DISMISS), setTimeout(() => C(e), 200));
    }, [T, N]);
    let x = A ? m.NW.string(m.t['Osi/u7']) : y(t),
        L = A ? m.NW.string(m.t.ORK94u) : void 0;
    return (0, r.jsxs)(u.DY3, {
        position: 'top',
        text: (0, r.jsx)(b, {
            textColor: 'always-white',
            tooltipText: x,
            headingText: L
        }),
        color: u.ua7.Colors.BRAND,
        forceOpen: A,
        'aria-label': x,
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
                              shinePaused: O
                          })
                        : null,
                    (0, r.jsx)(w, {
                        style: O ? void 0 : R,
                        size: 'custom',
                        width: v,
                        height: v,
                        color: t ? 'white' : 'currentColor',
                        className: g.icon
                    }),
                    (0, r.jsx)('span', {
                        children: (0, r.jsx)(u.Text, {
                            className: g.visuallyHidden,
                            variant: 'text-sm/semibold',
                            children: m.NW.string(m.t.buV4am)
                        })
                    })
                ]
            })
        ]
    });
}
