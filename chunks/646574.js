r.d(n, {
    Z: function () {
        return S;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(642128),
    c = r(442837),
    d = r(704215),
    f = r(481060),
    p = r(607070),
    h = r(243778),
    _ = r(594174),
    m = r(74538),
    g = r(921944),
    E = r(388032),
    v = r(140787);
let y = {
        tension: 750,
        mass: 2.5,
        friction: 70
    },
    b = 20;
function I(e) {
    let { tooltipText: n, headingText: r, textColor: i } = e,
        o = null != r;
    return (0, a.jsxs)('span', {
        className: o ? void 0 : v.tooltipContainer,
        children: [
            (0, a.jsxs)('span', {
                className: v.tooltipContainer,
                children: [
                    (0, a.jsx)(f.NitroWheelIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: v.nitroWheel
                    }),
                    o
                        ? (0, a.jsx)(f.Heading, {
                              color: null != i ? i : 'text-normal',
                              variant: 'heading-sm/semibold',
                              children: r
                          })
                        : null
                ]
            }),
            (0, a.jsx)(f.Text, {
                variant: o ? 'text-xs/normal' : 'text-sm/medium',
                color: null != i ? i : 'text-normal',
                children: n
            })
        ]
    });
}
function T(e) {
    return e ? E.intl.string(E.t['5cRA/f']) : E.intl.string(E.t.buV4am);
}
function S(e) {
    let { checked: n, onClick: r, id: i = 'burst-reaction-toggle-button' } = e,
        s = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
        S = _.default.getCurrentUser(),
        A = null == S || (0, m.I5)(S) ? [d.z.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP] : [],
        [C, N] = (0, h.US)(A),
        [R, O] = o.useState(!1),
        [D, x] = (0, f.useSpring)(() => ({})),
        L = (0, u.animated)(f.SuperReactionIcon);
    function w() {
        x({
            from: { rotate: n ? '360deg' : '0deg' },
            to: { rotate: n ? '0deg' : '360deg' },
            config: y
        }),
            null == r || r(),
            O(!1);
    }
    o.useEffect(() => {
        let e = C === d.z.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (N(g.L.DISMISS), setTimeout(() => O(e), 200));
    }, [C, N]);
    let P = R ? E.intl.string(E.t['Osi/u7']) : T(n),
        M = R ? E.intl.string(E.t.ORK94u) : void 0;
    return (0, a.jsxs)(f.TooltipContainer, {
        position: 'top',
        text: (0, a.jsx)(I, {
            textColor: 'always-white',
            tooltipText: P,
            headingText: M
        }),
        color: f.Tooltip.Colors.BRAND,
        forceOpen: R,
        'aria-label': P,
        tooltipClassName: v.tooltip,
        children: [
            (0, a.jsx)('input', {
                className: v.visuallyHidden,
                checked: n,
                onChange: w,
                id: i,
                type: 'checkbox'
            }),
            (0, a.jsxs)('label', {
                htmlFor: i,
                className: l()(v.label, { [v.labelChecked]: n }),
                children: [
                    n
                        ? (0, a.jsx)(f.Shine, {
                              className: v.shine,
                              shinePaused: s
                          })
                        : null,
                    (0, a.jsx)(L, {
                        style: s ? void 0 : D,
                        size: 'custom',
                        width: b,
                        height: b,
                        color: n ? 'white' : 'currentColor',
                        className: v.icon
                    }),
                    (0, a.jsx)('span', {
                        children: (0, a.jsx)(f.Text, {
                            className: v.visuallyHidden,
                            variant: 'text-sm/semibold',
                            children: E.intl.string(E.t.buV4am)
                        })
                    })
                ]
            })
        ]
    });
}
