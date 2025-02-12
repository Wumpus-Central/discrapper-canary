n.d(t, { Z: () => T }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(642128),
    l = n(442837),
    u = n(704215),
    c = n(481060),
    d = n(607070),
    f = n(243778),
    _ = n(594174),
    p = n(74538),
    h = n(921944),
    m = n(388032),
    g = n(840427);
let E = {
        tension: 750,
        mass: 2.5,
        friction: 70
    },
    v = 20;
function y(e) {
    let { tooltipText: t, headingText: n, textColor: r } = e,
        a = null != n;
    return (0, i.jsxs)('span', {
        className: a ? void 0 : g.tooltipContainer,
        children: [
            (0, i.jsxs)('span', {
                className: g.tooltipContainer,
                children: [
                    (0, i.jsx)(c.SrA, {
                        size: 'md',
                        color: 'currentColor',
                        className: g.nitroWheel
                    }),
                    a
                        ? (0, i.jsx)(c.X6q, {
                              color: null != r ? r : 'text-normal',
                              variant: 'heading-sm/semibold',
                              children: n
                          })
                        : null
                ]
            }),
            (0, i.jsx)(c.Text, {
                variant: a ? 'text-xs/normal' : 'text-sm/medium',
                color: null != r ? r : 'text-normal',
                children: t
            })
        ]
    });
}
function I(e) {
    return e ? m.intl.string(m.t['5cRA/f']) : m.intl.string(m.t.buV4am);
}
function T(e) {
    let { checked: t, onClick: n, id: a = 'burst-reaction-toggle-button' } = e,
        T = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        b = _.default.getCurrentUser(),
        S = null == b || (0, p.I5)(b) ? [u.z.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP] : [],
        [A, N] = (0, f.US)(S),
        [C, R] = r.useState(!1),
        [O, D] = (0, c.q_F)(() => ({})),
        L = (0, o.animated)(c.Pt5);
    function x() {
        D({
            from: { rotate: t ? '360deg' : '0deg' },
            to: { rotate: t ? '0deg' : '360deg' },
            config: E
        }),
            null == n || n(),
            R(!1);
    }
    r.useEffect(() => {
        let e = A === u.z.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (N(h.L.DISMISS), setTimeout(() => R(e), 200));
    }, [A, N]);
    let P = C ? m.intl.string(m.t['Osi/u7']) : I(t),
        w = C ? m.intl.string(m.t.ORK94u) : void 0;
    return (0, i.jsxs)(c.DY3, {
        position: 'top',
        text: (0, i.jsx)(y, {
            textColor: 'always-white',
            tooltipText: P,
            headingText: w
        }),
        color: c.ua7.Colors.BRAND,
        forceOpen: C,
        'aria-label': P,
        tooltipClassName: g.tooltip,
        children: [
            (0, i.jsx)('input', {
                className: g.visuallyHidden,
                checked: t,
                onChange: x,
                id: a,
                type: 'checkbox'
            }),
            (0, i.jsxs)('label', {
                htmlFor: a,
                className: s()(g.label, { [g.labelChecked]: t }),
                children: [
                    t
                        ? (0, i.jsx)(c.ZX5, {
                              className: g.shine,
                              shinePaused: T
                          })
                        : null,
                    (0, i.jsx)(L, {
                        style: T ? void 0 : O,
                        size: 'custom',
                        width: v,
                        height: v,
                        color: t ? 'white' : 'currentColor',
                        className: g.icon
                    }),
                    (0, i.jsx)('span', {
                        children: (0, i.jsx)(c.Text, {
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
