t.d(r, { default: () => _ });
var a = t(627968);
t(64700);
var s = t(517738),
    i = t(827734),
    l = t(602853),
    n = t(805901),
    d = t(834730),
    c = t(534514),
    o = t(935462),
    m = t(915089),
    x = t(985018),
    h = t(990337);
let u = (e) => {
        let { currentNumber: r, thresholdNumber: t, currentLabel: c, isPercent: o = !1 } = e,
            m = null != t ? Math.floor((r / t) * 100) : 0,
            u = x.intl.formatToPlainString(x.t.YMor7k, { count: r }),
            _ = null != t ? x.intl.formatToPlainString(x.t.YMor7k, { count: t }) : "--",
            j = (0, l.r)(i.A.unsafe_rawColors.RED_400).hex(),
            b = (0, l.r)(i.A.unsafe_rawColors.YELLOW_300).hex();
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)("div", {
                    className: h.Tr,
                    children: [
                        (0, a.jsx)("div", { className: h.yZ }),
                        (0, a.jsx)(n.c, {
                            from: { width: 0 },
                            to: { width: m },
                            config: { tension: 200, friction: 20, mass: 50, clamp: !0 },
                            shouldAnimate: "animate-always",
                            children: (e) => {
                                let { width: r } = e;
                                return (0, a.jsx)(s.animated.div, {
                                    className: h.hr,
                                    style: {
                                        width: r.interpolate((e) => `${e}%`),
                                        backgroundColor: r.interpolate((e) => (e < 33 ? j : b)),
                                    },
                                });
                            },
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: h.ei,
                    children: [
                        (0, a.jsxs)("div", {
                            className: h.__invalid_current,
                            children: [
                                (0, a.jsx)(d.E, {
                                    variant: "text-md/semibold",
                                    color: m < 33 ? "text-feedback-critical" : "text-feedback-warning",
                                    children: o ? `${u}%` : u,
                                }),
                                (0, a.jsxs)(d.E, {
                                    "aria-describedby": "health-score-details-score-explain",
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: [c, (0, a.jsx)("sup", { "aria-hidden": !0, children: "1" })],
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: h.aS,
                            children: [
                                (0, a.jsx)(d.E, { variant: "text-sm/semibold", children: o ? `${_}%` : _ }),
                                (0, a.jsx)(d.E, {
                                    "aria-describedby": "health-score-details-requirement-explain",
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: x.intl.string(x.t["A+mTPq"]),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    _ = (e) => {
        let r,
            t,
            s,
            { guildChecklist: i, transitionState: l, onClose: n } = e,
            _ = (0, m.GV)(),
            { retentionHealthy: j, engagementHealthy: b, healthScore: g } = i,
            { avg_nonnew_participators: p, avg_nonnew_communicators: v, perc_ret_w1_intentful: N } = g;
        if (
            (!b &&
                null != p &&
                p < 40 &&
                (t = (0, a.jsxs)("div", {
                    className: h.cl,
                    children: [
                        (0, a.jsx)(c.D, {
                            className: h.xd,
                            variant: "heading-md/semibold",
                            children: x.intl.string(x.t.sEzDIR),
                        }),
                        (0, a.jsx)(d.E, { variant: "text-sm/normal", children: x.intl.string(x.t.zNp3Kg) }),
                        (0, a.jsx)(u, {
                            currentNumber: p,
                            thresholdNumber: 40,
                            currentLabel: x.intl.string(x.t.BtTX9L),
                        }),
                    ],
                })),
            !b &&
                null != v &&
                v < 20 &&
                (s = (0, a.jsxs)("div", {
                    className: h.cl,
                    children: [
                        (0, a.jsx)(c.D, {
                            className: h.xd,
                            variant: "heading-md/semibold",
                            children: x.intl.string(x.t.fWQTbv),
                        }),
                        (0, a.jsx)(d.E, { variant: "text-sm/normal", children: x.intl.string(x.t.Tl8MR6) }),
                        (0, a.jsx)(u, {
                            currentNumber: v,
                            thresholdNumber: 20,
                            currentLabel: x.intl.string(x.t.PFQI7l),
                        }),
                    ],
                })),
            !j && null != N)
        ) {
            let e = Math.floor(100 * N);
            r = (0, a.jsxs)("div", {
                className: h.cl,
                children: [
                    (0, a.jsx)(c.D, {
                        className: h.xd,
                        variant: "heading-md/semibold",
                        children: x.intl.string(x.t.YF6x21),
                    }),
                    (0, a.jsx)(d.E, { variant: "text-sm/normal", children: x.intl.format(x.t.kMBzFj, {}) }),
                    (0, a.jsx)(u, {
                        currentNumber: e,
                        thresholdNumber: 10,
                        currentLabel: x.intl.string(x.t.WpwyIi),
                        isPercent: !0,
                    }),
                ],
            });
        }
        return (0, a.jsxs)(o.EO, {
            transitionState: l,
            size: o.rI.MEDIUM,
            className: h.__invalid_modal,
            "aria-labelledby": _,
            parentComponent: "HealthScoreDetailsModal",
            children: [
                (0, a.jsxs)(o.$m, {
                    className: h.Qs,
                    children: [
                        (0, a.jsx)(c.D, {
                            variant: "heading-xl/semibold",
                            className: h.Hc,
                            id: _,
                            children: x.intl.string(x.t["+GHxPy"]),
                        }),
                        (0, a.jsx)(d.E, {
                            className: h.xd,
                            variant: "text-sm/normal",
                            children: x.intl.string(x.t.QOs3XA),
                        }),
                        (0, a.jsx)("div", { className: h.me }),
                        t,
                        s,
                        r,
                        (0, a.jsx)("div", { className: h.me }),
                        (0, a.jsxs)(d.E, {
                            className: h.xd,
                            color: "text-default",
                            id: "health-score-details-score-explain",
                            variant: "text-sm/normal",
                            children: [
                                (0, a.jsx)("sup", { "aria-hidden": !0, children: "1 " }),
                                x.intl.string(x.t.tN5kb2),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)(o.s_, { onClick: n, className: h.b }),
            ],
        });
    };
