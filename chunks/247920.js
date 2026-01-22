t.d(a, {
    default: () => x,
});
var s = t(627968);
t(64700);
var i = t(108531),
    r = t(827734),
    n = t(397927),
    l = t(915089),
    d = t(985018),
    c = t(447110);
let o = (e) => {
        let { currentNumber: a, thresholdNumber: t, currentLabel: l, isPercent: o = !1 } = e,
            x = null != t ? Math.floor((a / t) * 100) : 0,
            m = d.intl.formatToPlainString(d.t.YMor7k, {
                count: a,
            }),
            h =
                null != t
                    ? d.intl.formatToPlainString(d.t.YMor7k, {
                          count: t,
                      })
                    : "--",
            b = (0, n.rdh)(r.A.unsafe_rawColors.RED_400).hex(),
            u = (0, n.rdh)(r.A.unsafe_rawColors.YELLOW_300).hex();
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)("div", {
                    className: c.Tr,
                    children: [
                        (0, s.jsx)("div", {
                            className: c.yZ,
                        }),
                        (0, s.jsx)(n.c7X, {
                            from: {
                                width: 0,
                            },
                            to: {
                                width: x,
                            },
                            config: {
                                tension: 200,
                                friction: 20,
                                mass: 50,
                                clamp: !0,
                            },
                            shouldAnimate: "animate-always",
                            children: (e) => {
                                let { width: a } = e;
                                return (0, s.jsx)(i.animated.div, {
                                    className: c.hr,
                                    style: {
                                        width: a.interpolate((e) => "".concat(e, "%")),
                                        backgroundColor: a.interpolate((e) => (e < 33 ? b : u)),
                                    },
                                });
                            },
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: c.ei,
                    children: [
                        (0, s.jsxs)("div", {
                            className: c.__invalid_current,
                            children: [
                                (0, s.jsx)(n.Text, {
                                    variant: "text-md/semibold",
                                    color: x < 33 ? "text-feedback-critical" : "text-feedback-warning",
                                    children: o ? "".concat(m, "%") : m,
                                }),
                                (0, s.jsxs)(n.Text, {
                                    "aria-describedby": "health-score-details-score-explain",
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: [
                                        l,
                                        (0, s.jsx)("sup", {
                                            "aria-hidden": !0,
                                            children: "1",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: c.aS,
                            children: [
                                (0, s.jsx)(n.Text, {
                                    variant: "text-sm/semibold",
                                    children: o ? "".concat(h, "%") : h,
                                }),
                                (0, s.jsx)(n.Text, {
                                    "aria-describedby": "health-score-details-requirement-explain",
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: d.intl.string(d.t["A+mTPq"]),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    x = (e) => {
        let a,
            t,
            i,
            { guildChecklist: r, transitionState: x, onClose: m } = e,
            h = (0, l.GV)(),
            { retentionHealthy: b, engagementHealthy: u, healthScore: j } = r,
            { avg_nonnew_participators: v, avg_nonnew_communicators: g, perc_ret_w1_intentful: f } = j;
        if (
            (!u &&
                null != v &&
                v < 40 &&
                (t = (0, s.jsxs)("div", {
                    className: c.cl,
                    children: [
                        (0, s.jsx)(n.Heading, {
                            className: c.xd,
                            variant: "heading-md/semibold",
                            children: d.intl.string(d.t.sEzDIR),
                        }),
                        (0, s.jsx)(n.Text, {
                            variant: "text-sm/normal",
                            children: d.intl.string(d.t.zNp3Kg),
                        }),
                        (0, s.jsx)(o, {
                            currentNumber: v,
                            thresholdNumber: 40,
                            currentLabel: d.intl.string(d.t.BtTX9L),
                        }),
                    ],
                })),
            !u &&
                null != g &&
                g < 20 &&
                (i = (0, s.jsxs)("div", {
                    className: c.cl,
                    children: [
                        (0, s.jsx)(n.Heading, {
                            className: c.xd,
                            variant: "heading-md/semibold",
                            children: d.intl.string(d.t.fWQTbv),
                        }),
                        (0, s.jsx)(n.Text, {
                            variant: "text-sm/normal",
                            children: d.intl.string(d.t.Tl8MR6),
                        }),
                        (0, s.jsx)(o, {
                            currentNumber: g,
                            thresholdNumber: 20,
                            currentLabel: d.intl.string(d.t.PFQI7l),
                        }),
                    ],
                })),
            !b && null != f)
        ) {
            let e = Math.floor(100 * f);
            a = (0, s.jsxs)("div", {
                className: c.cl,
                children: [
                    (0, s.jsx)(n.Heading, {
                        className: c.xd,
                        variant: "heading-md/semibold",
                        children: d.intl.string(d.t.YF6x21),
                    }),
                    (0, s.jsx)(n.Text, {
                        variant: "text-sm/normal",
                        children: d.intl.format(d.t.kMBzFj, {}),
                    }),
                    (0, s.jsx)(o, {
                        currentNumber: e,
                        thresholdNumber: 10,
                        currentLabel: d.intl.string(d.t.WpwyIi),
                        isPercent: !0,
                    }),
                ],
            });
        }
        return (0, s.jsxs)(n.EOs, {
            transitionState: x,
            size: n.rIJ.MEDIUM,
            className: c.__invalid_modal,
            "aria-labelledby": h,
            parentComponent: "HealthScoreDetailsModal",
            children: [
                (0, s.jsxs)(n.$mQ, {
                    className: c.Qs,
                    children: [
                        (0, s.jsx)(n.Heading, {
                            variant: "heading-xl/semibold",
                            className: c.Hc,
                            id: h,
                            children: d.intl.string(d.t["+GHxPy"]),
                        }),
                        (0, s.jsx)(n.Text, {
                            className: c.xd,
                            variant: "text-sm/normal",
                            children: d.intl.string(d.t.QOs3XA),
                        }),
                        (0, s.jsx)("div", {
                            className: c.me,
                        }),
                        t,
                        i,
                        a,
                        (0, s.jsx)("div", {
                            className: c.me,
                        }),
                        (0, s.jsxs)(n.Text, {
                            className: c.xd,
                            color: "text-default",
                            id: "health-score-details-score-explain",
                            variant: "text-sm/normal",
                            children: [
                                (0, s.jsx)("sup", {
                                    "aria-hidden": !0,
                                    children: "1 ",
                                }),
                                d.intl.string(d.t.tN5kb2),
                            ],
                        }),
                    ],
                }),
                (0, s.jsx)(n.s_y, {
                    onClick: m,
                    className: c.b,
                }),
            ],
        });
    };
