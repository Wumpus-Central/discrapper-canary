n.d(t, { Z: () => O }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(205120),
    l = n(442837),
    c = n(704215),
    u = n(454399),
    d = n(481060),
    f = n(607070),
    p = n(243778),
    _ = n(594174),
    m = n(74538),
    h = n(921944),
    g = n(388032),
    E = n(975377);
let b = {
        tension: 750,
        mass: 2.5,
        friction: 70,
    },
    y = 20;
function O(e) {
    let { checked: t, onClick: n, id: a = "burst-reaction-toggle-button" } = e,
        O = (0, l.e7)([f.Z], () => f.Z.useReducedMotion),
        v = _.default.getCurrentUser(),
        S = null == v || (0, m.I5)(v) ? [c.z.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP] : [],
        [I, T] = (0, p.US)(S),
        [A, C] = i.useState(!1),
        [N, P] = (0, d.q_F)(() => ({})),
        R = (0, s.animated)(d.Pt5);
    function D() {
        P({
            from: { rotate: t ? "360deg" : "0deg" },
            to: { rotate: t ? "0deg" : "360deg" },
            config: b,
        }),
            null == n || n(),
            C(!1);
    }
    i.useEffect(() => {
        let e = I === c.z.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (T(h.L.DISMISS), setTimeout(() => C(e), 200));
    }, [I, T]);
    let w = A ? g.intl.string(g.t["Osi/uy"]) : t ? g.intl.string(g.t["5cRA/b"]) : g.intl.string(g.t.buV4av),
        x = A ? g.intl.string(g.t.ORK94p) : void 0;
    return (0, r.jsx)(u.i, {
        position: "top",
        title: x,
        body: w,
        asset: (0, r.jsx)(d.SrA, {
            size: "md",
            color: "currentColor",
        }),
        assetSize: 20,
        forceOpen: A,
        children: (0, r.jsxs)("div", {
            "aria-label": w,
            children: [
                (0, r.jsx)("input", {
                    className: E.visuallyHidden,
                    checked: t,
                    onChange: D,
                    id: a,
                    type: "checkbox",
                }),
                (0, r.jsxs)("label", {
                    htmlFor: a,
                    className: o()(E.label, { [E.labelChecked]: t }),
                    children: [
                        (0, r.jsx)(R, {
                            style: O ? void 0 : N,
                            size: "custom",
                            width: y,
                            height: y,
                            color: t ? "white" : "currentColor",
                            className: E.icon,
                        }),
                        (0, r.jsx)("span", {
                            children: (0, r.jsx)(d.Text, {
                                className: E.visuallyHidden,
                                variant: "text-sm/semibold",
                                children: g.intl.string(g.t.buV4av),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
