n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    l = n(880013),
    o = n(397927),
    u = n(892358),
    c = n(341915),
    d = n(890687),
    m = n(646764),
    E = n(758468),
    p = n(629312);
let _ = { duration: 250 },
    f = (e) => {
        let {
                currentPx: t,
                indicator: n,
                isAnimated: s,
                quest: f,
                sourceQuestContent: v,
                expansionSpring: S,
                onClick: h,
                onMouseEnter: g,
                onMouseLeave: A,
            } = e,
            { label: x, targetSec: C, leftPx: T, rightPx: b, index: D } = n,
            { completedRatio: y } = (0, d.O9)(f),
            [I, N] = i.useState(!1),
            L = T - E.Ue,
            R = t >= L ? Math.min(1, (t - L) / (b - L)) : 0,
            O = 0 === D && y < 1,
            { fill: M } = (0, o.zhh)({
                fill: 100 * R,
                config: _,
                onRest: () => {
                    R <= 0 && N(!1);
                },
                onStart: () => {
                    N(!0);
                },
            });
        return (0, r.jsxs)(l.animated.div, {
            className: a()(p.ck, { [p.a]: O && I, [p.C9]: !O && I }),
            style: {
                left: s ? S.to((e) => T - e) : T,
                "--custom-indicator-size": s ? S.to((e) => `${E.lS + 2 * e}px`) : `${E.lS}px`,
                "--custom-indicator-fill": M.to((e) => e),
            },
            children: [
                (0, r.jsx)(o.DUT, {
                    className: p.E6,
                    onClick:
                        null != h
                            ? (e) => {
                                  e.stopPropagation(), h();
                              }
                            : void 0,
                    onMouseEnter: g,
                    onMouseLeave: A,
                    children: (0, r.jsx)(m.A, {
                        fullWidth: !0,
                        quest: f,
                        questContent: c.uF.VIDEO_MODAL,
                        sourceQuestContent: v,
                        autoplay: !1,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: p.Ru,
                    role: "tooltip",
                    "aria-label": null != x ? `${(0, u.rB)(C)} - ${x}` : (0, u.rB)(C),
                    children: [
                        (0, r.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "always-white",
                            children: (0, u.rB)(C),
                        }),
                        null != x &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("span", { className: p.AE, "aria-hidden": "true" }),
                                    (0, r.jsx)(o.Text, {
                                        variant: "text-xs/normal",
                                        color: "always-white",
                                        children: x,
                                    }),
                                ],
                            }),
                    ],
                }),
            ],
        });
    };
