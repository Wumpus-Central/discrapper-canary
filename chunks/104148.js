n.d(t, { A: () => h });
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(4208),
    o = n(397927),
    u = n(892358),
    c = n(341915),
    d = n(890687),
    m = n(646764),
    p = n(758468),
    E = n(86761);
let f = { duration: 250 },
    h = (e) => {
        let {
                currentPx: t,
                indicator: n,
                isAnimated: a,
                quest: h,
                sourceQuestContent: v,
                expansionSpring: x,
                onClick: g,
                onMouseEnter: S,
                onMouseLeave: A,
            } = e,
            { label: b, targetSec: _, leftPx: C, rightPx: y, index: T } = n,
            { completedRatio: N } = (0, d.O9)(h),
            [D, I] = l.useState(!1),
            R = C - p.Ue,
            L = t >= R ? Math.min(1, (t - R) / (y - R)) : 0,
            w = 0 === T && N < 1,
            { fill: M } = (0, o.zhh)({
                fill: 100 * L,
                config: f,
                onRest: () => {
                    L <= 0 && I(!1);
                },
                onStart: () => {
                    I(!0);
                },
            });
        return (0, r.jsxs)(s.animated.div, {
            className: i()(E.ck, { [E.a]: w && D, [E.C9]: !w && D }),
            style: {
                left: a ? x.to((e) => C - e) : C,
                "--custom-indicator-size": a ? x.to((e) => `${p.lS + 2 * e}px`) : `${p.lS}px`,
                "--custom-indicator-fill": M.to((e) => e),
            },
            children: [
                (0, r.jsx)(o.DUT, {
                    className: E.E6,
                    onClick:
                        null != g
                            ? (e) => {
                                  e.stopPropagation(), g();
                              }
                            : void 0,
                    onMouseEnter: S,
                    onMouseLeave: A,
                    children: (0, r.jsx)(m.A, {
                        fullWidth: !0,
                        quest: h,
                        questContent: c.uF.VIDEO_MODAL,
                        sourceQuestContent: v,
                        autoplay: !1,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: E.Ru,
                    role: "tooltip",
                    "aria-label": null != b ? `${(0, u.rB)(_)} - ${b}` : (0, u.rB)(_),
                    children: [
                        (0, r.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "always-white",
                            children: (0, u.rB)(_),
                        }),
                        null != b &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("span", { className: E.AE, "aria-hidden": "true" }),
                                    (0, r.jsx)(o.Text, {
                                        variant: "text-xs/normal",
                                        color: "always-white",
                                        children: b,
                                    }),
                                ],
                            }),
                    ],
                }),
            ],
        });
    };
