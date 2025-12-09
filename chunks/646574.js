n.d(t, { Z: () => v }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(205120),
    l = n(442837),
    c = n(704215),
    u = n(481060),
    d = n(607070),
    f = n(243778),
    p = n(594174),
    _ = n(74538),
    m = n(921944),
    h = n(388032),
    g = n(975377);
let E = {
        tension: 750,
        mass: 2.5,
        friction: 70,
    },
    b = 20;
function y(e) {
    let { tooltipText: t, headingText: n, textColor: i } = e,
        a = null != n;
    return (0, r.jsxs)("span", {
        className: a ? void 0 : g.tooltipContainer,
        children: [
            (0, r.jsxs)("span", {
                className: g.tooltipContainer,
                children: [
                    (0, r.jsx)(u.SrA, {
                        size: "md",
                        color: "currentColor",
                        className: g.nitroWheel,
                    }),
                    a
                        ? (0, r.jsx)(u.Heading, {
                              color: null != i ? i : "text-default",
                              variant: "heading-sm/semibold",
                              children: n,
                          })
                        : null,
                ],
            }),
            (0, r.jsx)(u.Text, {
                variant: a ? "text-xs/normal" : "text-sm/medium",
                color: null != i ? i : "text-default",
                children: t,
            }),
        ],
    });
}
function O(e) {
    return e ? h.intl.string(h.t["5cRA/b"]) : h.intl.string(h.t.buV4av);
}
function v(e) {
    let { checked: t, onClick: n, id: a = "burst-reaction-toggle-button" } = e,
        v = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        S = p.default.getCurrentUser(),
        I = null == S || (0, _.I5)(S) ? [c.z.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP] : [],
        [T, A] = (0, f.US)(I),
        [C, N] = i.useState(!1),
        [P, R] = (0, u.q_F)(() => ({})),
        D = (0, s.animated)(u.Pt5);
    function w() {
        R({
            from: { rotate: t ? "360deg" : "0deg" },
            to: { rotate: t ? "0deg" : "360deg" },
            config: E,
        }),
            null == n || n(),
            N(!1);
    }
    i.useEffect(() => {
        let e = T === c.z.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (A(m.L.DISMISS), setTimeout(() => N(e), 200));
    }, [T, A]);
    let x = C ? h.intl.string(h.t["Osi/uy"]) : O(t),
        L = C ? h.intl.string(h.t.ORK94p) : void 0;
    return (0, r.jsxs)(u.jSM, {
        position: "top",
        text: (0, r.jsx)(y, {
            textColor: "always-white",
            tooltipText: x,
            headingText: L,
        }),
        color: u.aML.Colors.BRAND,
        forceOpen: C,
        "aria-label": x,
        tooltipClassName: g.tooltip,
        children: [
            (0, r.jsx)("input", {
                className: g.visuallyHidden,
                checked: t,
                onChange: w,
                id: a,
                type: "checkbox",
            }),
            (0, r.jsxs)("label", {
                htmlFor: a,
                className: o()(g.label, { [g.labelChecked]: t }),
                children: [
                    (0, r.jsx)(D, {
                        style: v ? void 0 : P,
                        size: "custom",
                        width: b,
                        height: b,
                        color: t ? "white" : "currentColor",
                        className: g.icon,
                    }),
                    (0, r.jsx)("span", {
                        children: (0, r.jsx)(u.Text, {
                            className: g.visuallyHidden,
                            variant: "text-sm/semibold",
                            children: h.intl.string(h.t.buV4av),
                        }),
                    }),
                ],
            }),
        ],
    });
}
