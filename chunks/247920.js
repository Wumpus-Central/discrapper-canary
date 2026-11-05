var i = a(477900);
a(582128);
var r = a(120692),
    l = a(646514),
    n = a(935462),
    t = a(602853),
    d = a(805901),
    c = a(834730),
    o = a(534514),
    m = a(915089),
    h = a(792996),
    x = a(93632);
let u = (s) => {
    let { currentNumber: e, thresholdNumber: a, currentLabel: n, isPercent: o = !1 } = s,
        m = null != a ? Math.floor((e / a) * 100) : 0,
        u = h.intl.formatToPlainString(h.t.YMor7k, { count: e }),
        b = null != a ? h.intl.formatToPlainString(h.t.YMor7k, { count: a }) : "--",
        j = (0, t.r)(l.A.unsafe_rawColors.RED_400).hex(),
        v = (0, t.r)(l.A.unsafe_rawColors.YELLOW_300).hex();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: x.Tr,
                children: [
                    (0, i.jsx)("div", { className: x.yZ }),
                    (0, i.jsx)(d.c, {
                        from: { width: 0 },
                        to: { width: m },
                        config: { tension: 200, friction: 20, mass: 50, clamp: !0 },
                        shouldAnimate: "animate-always",
                        children: (s) => {
                            let { width: e } = s;
                            return (0, i.jsx)(r.animated.div, {
                                className: x.hr,
                                style: {
                                    width: e.interpolate((s) => `${s}%`),
                                    backgroundColor: e.interpolate((s) => (s < 33 ? j : v)),
                                },
                            });
                        },
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: x.ei,
                children: [
                    (0, i.jsxs)("div", {
                        className: x.__invalid_current,
                        children: [
                            (0, i.jsx)(c.E, {
                                variant: "body-md/semibold",
                                color: m < 33 ? "text-feedback-critical" : "text-feedback-warning",
                                children: o ? `${u}%` : u,
                            }),
                            (0, i.jsxs)(c.E, {
                                "aria-describedby": "health-score-details-score-explain",
                                variant: "body-xs/normal",
                                color: "text-default",
                                children: [n, (0, i.jsx)("sup", { "aria-hidden": !0, children: "1" })],
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: x.aS,
                        children: [
                            (0, i.jsx)(c.E, { variant: "body-sm/semibold", children: o ? `${b}%` : b }),
                            (0, i.jsx)(c.E, {
                                "aria-describedby": "health-score-details-requirement-explain",
                                variant: "body-xs/normal",
                                color: "text-default",
                                children: h.intl.string(h.t["A+mTPq"]),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
a.d(
    e,
    {},
    {
        default: function (s) {
            let e,
                a,
                r,
                { guildChecklist: l, transitionState: t, onClose: d } = s,
                b = (0, m.GV)(),
                { retentionHealthy: j, engagementHealthy: v, healthScore: N } = l,
                { avg_nonnew_participators: g, avg_nonnew_communicators: p, perc_ret_w1_intentful: f } = N;
            if (
                (!v &&
                    null != g &&
                    g < 40 &&
                    (a = (0, i.jsxs)("div", {
                        className: x.cl,
                        children: [
                            (0, i.jsx)(o.D, {
                                className: x.xd,
                                variant: "heading-sm/semibold",
                                children: h.intl.string(h.t.sEzDIR),
                            }),
                            (0, i.jsx)(c.E, { variant: "body-sm/normal", children: h.intl.string(h.t.zNp3Kg) }),
                            (0, i.jsx)(u, {
                                currentNumber: g,
                                thresholdNumber: 40,
                                currentLabel: h.intl.string(h.t.BtTX9L),
                            }),
                        ],
                    })),
                !v &&
                    null != p &&
                    p < 20 &&
                    (r = (0, i.jsxs)("div", {
                        className: x.cl,
                        children: [
                            (0, i.jsx)(o.D, {
                                className: x.xd,
                                variant: "heading-sm/semibold",
                                children: h.intl.string(h.t.fWQTbv),
                            }),
                            (0, i.jsx)(c.E, { variant: "body-sm/normal", children: h.intl.string(h.t.Tl8MR6) }),
                            (0, i.jsx)(u, {
                                currentNumber: p,
                                thresholdNumber: 20,
                                currentLabel: h.intl.string(h.t.PFQI7l),
                            }),
                        ],
                    })),
                !j && null != f)
            ) {
                let s = Math.floor(100 * f);
                e = (0, i.jsxs)("div", {
                    className: x.cl,
                    children: [
                        (0, i.jsx)(o.D, {
                            className: x.xd,
                            variant: "heading-sm/semibold",
                            children: h.intl.string(h.t.YF6x21),
                        }),
                        (0, i.jsx)(c.E, { variant: "body-sm/normal", children: h.intl.format(h.t.kMBzFj, {}) }),
                        (0, i.jsx)(u, {
                            currentNumber: s,
                            thresholdNumber: 10,
                            currentLabel: h.intl.string(h.t.WpwyIi),
                            isPercent: !0,
                        }),
                    ],
                });
            }
            return (0, i.jsxs)(n.EO, {
                transitionState: t,
                size: n.rI.MEDIUM,
                className: x.__invalid_modal,
                "aria-labelledby": b,
                parentComponent: "HealthScoreDetailsModal",
                children: [
                    (0, i.jsxs)(n.$m, {
                        className: x.Qs,
                        children: [
                            (0, i.jsx)(o.D, {
                                variant: "heading-xl/semibold",
                                className: x.Hc,
                                id: b,
                                children: h.intl.string(h.t["+GHxPy"]),
                            }),
                            (0, i.jsx)(c.E, {
                                className: x.xd,
                                variant: "body-sm/normal",
                                children: h.intl.string(h.t.QOs3XA),
                            }),
                            (0, i.jsx)("div", { className: x.me }),
                            a,
                            r,
                            e,
                            (0, i.jsx)("div", { className: x.me }),
                            (0, i.jsxs)(c.E, {
                                className: x.xd,
                                color: "text-default",
                                id: "health-score-details-score-explain",
                                variant: "body-sm/normal",
                                children: [
                                    (0, i.jsx)("sup", { "aria-hidden": !0, children: "1 " }),
                                    h.intl.string(h.t.tN5kb2),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(n.s_, { onClick: d, className: x.b }),
                ],
            });
        },
    },
);
