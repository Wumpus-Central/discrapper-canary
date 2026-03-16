n.d(t, { A: () => h });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(497766),
    o = n(397927),
    u = n(892358),
    c = n(341915),
    d = n(890687),
    m = n(646764),
    p = n(758468),
    f = n(997382);
let E = { duration: 250 },
    h = (e) => {
        let {
                currentPx: t,
                indicator: n,
                isAnimated: i,
                quest: h,
                sourceQuestContent: v,
                expansionSpring: x,
                onClick: g,
                onMouseEnter: S,
                onMouseLeave: A,
            } = e,
            { label: C, targetSec: _, leftPx: b, rightPx: y, index: T } = n,
            { completedRatio: N } = (0, d.O9)(h),
            [D, R] = l.useState(!1),
            L = b - p.Ue,
            M = t >= L ? Math.min(1, (t - L) / (y - L)) : 0,
            j = 0 === T && N < 1,
            { fill: I } = (0, o.zhh)({
                fill: 100 * M,
                config: E,
                onRest: () => {
                    M <= 0 && R(!1);
                },
                onStart: () => {
                    R(!0);
                },
            });
        return (0, r.jsxs)(a.animated.div, {
            className: s()(f.ck, { [f.a]: j && D, [f.C9]: !j && D }),
            style: {
                left: i ? x.to((e) => b - e) : b,
                "--custom-indicator-size": i ? x.to((e) => `${p.lS + 2 * e}px`) : `${p.lS}px`,
                "--custom-indicator-fill": I.to((e) => e),
            },
            children: [
                (0, r.jsx)(o.DUT, {
                    className: f.E6,
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
                    className: f.Ru,
                    role: "tooltip",
                    "aria-label": null != C ? `${(0, u.rB)(_)} - ${C}` : (0, u.rB)(_),
                    children: [
                        (0, r.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "always-white",
                            children: (0, u.rB)(_),
                        }),
                        null != C &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("span", { className: f.AE, "aria-hidden": "true" }),
                                    (0, r.jsx)(o.Text, {
                                        variant: "text-xs/normal",
                                        color: "always-white",
                                        children: C,
                                    }),
                                ],
                            }),
                    ],
                }),
            ],
        });
    };
