a.d(r, { default: () => m });
var t = a(54381);
a(473749);
var s = a(236726),
    n = a(692547),
    i = a(481060),
    l = a(313201),
    d = a(388032),
    c = a(601558);
let o = (e) => {
        let { currentNumber: r, thresholdNumber: a, currentLabel: l, isPercent: o = !1 } = e,
            m = null != a ? Math.floor((r / a) * 100) : 0,
            x = d.intl.formatToPlainString(d.t.YMor7k, { count: r }),
            h = null != a ? d.intl.formatToPlainString(d.t.YMor7k, { count: a }) : "--",
            g = (0, i.dQu)(n.Z.unsafe_rawColors.RED_400).hex(),
            u = (0, i.dQu)(n.Z.unsafe_rawColors.YELLOW_300).hex();
        return (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsxs)("div", {
                    className: c.progressWrapper,
                    children: [
                        (0, t.jsx)("div", { className: c.progressBackground }),
                        (0, t.jsx)(i.AMe, {
                            from: { width: 0 },
                            to: { width: m },
                            config: {
                                tension: 200,
                                friction: 20,
                                mass: 50,
                                clamp: !0,
                            },
                            shouldAnimate: "animate-always",
                            children: (e) => {
                                let { width: r } = e;
                                return (0, t.jsx)(s.animated.div, {
                                    className: c.progressBar,
                                    style: {
                                        width: r.interpolate((e) => "".concat(e, "%")),
                                        backgroundColor: r.interpolate((e) => (e < 33 ? g : u)),
                                    },
                                });
                            },
                        }),
                    ],
                }),
                (0, t.jsxs)("div", {
                    className: c.labelWrapper,
                    children: [
                        (0, t.jsxs)("div", {
                            className: c.__invalid_current,
                            children: [
                                (0, t.jsx)(i.Text, {
                                    variant: "text-md/semibold",
                                    color: m < 33 ? "text-feedback-critical" : "text-feedback-warning",
                                    children: o ? "".concat(x, "%") : x,
                                }),
                                (0, t.jsxs)(i.Text, {
                                    "aria-describedby": "health-score-details-score-explain",
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: [
                                        l,
                                        (0, t.jsx)("sup", {
                                            "aria-hidden": !0,
                                            children: "1",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, t.jsxs)("div", {
                            className: c.requirement,
                            children: [
                                (0, t.jsx)(i.Text, {
                                    variant: "text-sm/semibold",
                                    children: o ? "".concat(h, "%") : h,
                                }),
                                (0, t.jsx)(i.Text, {
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
    m = (e) => {
        let r,
            a,
            s,
            { guildChecklist: n, transitionState: m, onClose: x } = e,
            h = (0, l.Dt)(),
            { retentionHealthy: g, engagementHealthy: u, healthScore: p } = n,
            { avg_nonnew_participators: j, avg_nonnew_communicators: f, perc_ret_w1_intentful: b } = p;
        if (
            (!u &&
                null != j &&
                j < 40 &&
                (a = (0, t.jsxs)("div", {
                    className: c.failingBlock,
                    children: [
                        (0, t.jsx)(i.Heading, {
                            className: c.marginAfter,
                            variant: "heading-md/semibold",
                            children: d.intl.string(d.t.sEzDIR),
                        }),
                        (0, t.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            children: d.intl.string(d.t.zNp3Kg),
                        }),
                        (0, t.jsx)(o, {
                            currentNumber: j,
                            thresholdNumber: 40,
                            currentLabel: d.intl.string(d.t.BtTX9L),
                        }),
                    ],
                })),
            !u &&
                null != f &&
                f < 20 &&
                (s = (0, t.jsxs)("div", {
                    className: c.failingBlock,
                    children: [
                        (0, t.jsx)(i.Heading, {
                            className: c.marginAfter,
                            variant: "heading-md/semibold",
                            children: d.intl.string(d.t.fWQTbv),
                        }),
                        (0, t.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            children: d.intl.string(d.t.Tl8MR6),
                        }),
                        (0, t.jsx)(o, {
                            currentNumber: f,
                            thresholdNumber: 20,
                            currentLabel: d.intl.string(d.t.PFQI7l),
                        }),
                    ],
                })),
            !g && null != b)
        ) {
            let e = Math.floor(100 * b);
            r = (0, t.jsxs)("div", {
                className: c.failingBlock,
                children: [
                    (0, t.jsx)(i.Heading, {
                        className: c.marginAfter,
                        variant: "heading-md/semibold",
                        children: d.intl.string(d.t.YF6x21),
                    }),
                    (0, t.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        children: d.intl.format(d.t.kMBzFj, {}),
                    }),
                    (0, t.jsx)(o, {
                        currentNumber: e,
                        thresholdNumber: 10,
                        currentLabel: d.intl.string(d.t.WpwyIi),
                        isPercent: !0,
                    }),
                ],
            });
        }
        return (0, t.jsxs)(i.Y0X, {
            transitionState: m,
            size: i.CgR.MEDIUM,
            className: c.__invalid_modal,
            "aria-labelledby": h,
            parentComponent: "HealthScoreDetailsModal",
            children: [
                (0, t.jsxs)(i.hzk, {
                    className: c.content,
                    children: [
                        (0, t.jsx)(i.Heading, {
                            variant: "heading-xl/semibold",
                            className: c.modalHeader,
                            id: h,
                            children: d.intl.string(d.t["+GHxPy"]),
                        }),
                        (0, t.jsx)(i.Text, {
                            className: c.marginAfter,
                            variant: "text-sm/normal",
                            children: d.intl.string(d.t.QOs3XA),
                        }),
                        (0, t.jsx)("div", { className: c.separator }),
                        a,
                        s,
                        r,
                        (0, t.jsx)("div", { className: c.separator }),
                        (0, t.jsxs)(i.Text, {
                            className: c.marginAfter,
                            color: "text-default",
                            id: "health-score-details-score-explain",
                            variant: "text-sm/normal",
                            children: [
                                (0, t.jsx)("sup", {
                                    "aria-hidden": !0,
                                    children: "1 ",
                                }),
                                d.intl.string(d.t.tN5kb2),
                            ],
                        }),
                    ],
                }),
                (0, t.jsx)(i.olH, {
                    onClick: x,
                    className: c.closeButton,
                }),
            ],
        });
    };
