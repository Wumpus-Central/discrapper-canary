a.d(t, { default: () => x });
var r = a(627968);
a(64700);
var s = a(382222),
    i = a(827734),
    l = a(397927),
    n = a(915089),
    d = a(985018),
    c = a(891729);
let o = (e) => {
        let { currentNumber: t, thresholdNumber: a, currentLabel: n, isPercent: o = !1 } = e,
            x = null != a ? Math.floor((t / a) * 100) : 0,
            m = d.intl.formatToPlainString(d.t.YMor7k, { count: t }),
            h = null != a ? d.intl.formatToPlainString(d.t.YMor7k, { count: a }) : "--",
            u = (0, l.rdh)(i.A.unsafe_rawColors.RED_400).hex(),
            _ = (0, l.rdh)(i.A.unsafe_rawColors.YELLOW_300).hex();
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: c.Tr,
                    children: [
                        (0, r.jsx)("div", { className: c.yZ }),
                        (0, r.jsx)(l.c7X, {
                            from: { width: 0 },
                            to: { width: x },
                            config: { tension: 200, friction: 20, mass: 50, clamp: !0 },
                            shouldAnimate: "animate-always",
                            children: (e) => {
                                let { width: t } = e;
                                return (0, r.jsx)(s.animated.div, {
                                    className: c.hr,
                                    style: {
                                        width: t.interpolate((e) => `${e}%`),
                                        backgroundColor: t.interpolate((e) => (e < 33 ? u : _)),
                                    },
                                });
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: c.ei,
                    children: [
                        (0, r.jsxs)("div", {
                            className: c.__invalid_current,
                            children: [
                                (0, r.jsx)(l.Text, {
                                    variant: "text-md/semibold",
                                    color: x < 33 ? "text-feedback-critical" : "text-feedback-warning",
                                    children: o ? `${m}%` : m,
                                }),
                                (0, r.jsxs)(l.Text, {
                                    "aria-describedby": "health-score-details-score-explain",
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: [n, (0, r.jsx)("sup", { "aria-hidden": !0, children: "1" })],
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: c.aS,
                            children: [
                                (0, r.jsx)(l.Text, { variant: "text-sm/semibold", children: o ? `${h}%` : h }),
                                (0, r.jsx)(l.Text, {
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
        let t,
            a,
            s,
            { guildChecklist: i, transitionState: x, onClose: m } = e,
            h = (0, n.GV)(),
            { retentionHealthy: u, engagementHealthy: _, healthScore: g } = i,
            { avg_nonnew_participators: j, avg_nonnew_communicators: b, perc_ret_w1_intentful: p } = g;
        if (
            (!_ &&
                null != j &&
                j < 40 &&
                (a = (0, r.jsxs)("div", {
                    className: c.cl,
                    children: [
                        (0, r.jsx)(l.Heading, {
                            className: c.xd,
                            variant: "heading-md/semibold",
                            children: d.intl.string(d.t.sEzDIR),
                        }),
                        (0, r.jsx)(l.Text, { variant: "text-sm/normal", children: d.intl.string(d.t.zNp3Kg) }),
                        (0, r.jsx)(o, {
                            currentNumber: j,
                            thresholdNumber: 40,
                            currentLabel: d.intl.string(d.t.BtTX9L),
                        }),
                    ],
                })),
            !_ &&
                null != b &&
                b < 20 &&
                (s = (0, r.jsxs)("div", {
                    className: c.cl,
                    children: [
                        (0, r.jsx)(l.Heading, {
                            className: c.xd,
                            variant: "heading-md/semibold",
                            children: d.intl.string(d.t.fWQTbv),
                        }),
                        (0, r.jsx)(l.Text, { variant: "text-sm/normal", children: d.intl.string(d.t.Tl8MR6) }),
                        (0, r.jsx)(o, {
                            currentNumber: b,
                            thresholdNumber: 20,
                            currentLabel: d.intl.string(d.t.PFQI7l),
                        }),
                    ],
                })),
            !u && null != p)
        ) {
            let e = Math.floor(100 * p);
            t = (0, r.jsxs)("div", {
                className: c.cl,
                children: [
                    (0, r.jsx)(l.Heading, {
                        className: c.xd,
                        variant: "heading-md/semibold",
                        children: d.intl.string(d.t.YF6x21),
                    }),
                    (0, r.jsx)(l.Text, { variant: "text-sm/normal", children: d.intl.format(d.t.kMBzFj, {}) }),
                    (0, r.jsx)(o, {
                        currentNumber: e,
                        thresholdNumber: 10,
                        currentLabel: d.intl.string(d.t.WpwyIi),
                        isPercent: !0,
                    }),
                ],
            });
        }
        return (0, r.jsxs)(l.EOs, {
            transitionState: x,
            size: l.rIJ.MEDIUM,
            className: c.__invalid_modal,
            "aria-labelledby": h,
            parentComponent: "HealthScoreDetailsModal",
            children: [
                (0, r.jsxs)(l.$mQ, {
                    className: c.Qs,
                    children: [
                        (0, r.jsx)(l.Heading, {
                            variant: "heading-xl/semibold",
                            className: c.Hc,
                            id: h,
                            children: d.intl.string(d.t["+GHxPy"]),
                        }),
                        (0, r.jsx)(l.Text, {
                            className: c.xd,
                            variant: "text-sm/normal",
                            children: d.intl.string(d.t.QOs3XA),
                        }),
                        (0, r.jsx)("div", { className: c.me }),
                        a,
                        s,
                        t,
                        (0, r.jsx)("div", { className: c.me }),
                        (0, r.jsxs)(l.Text, {
                            className: c.xd,
                            color: "text-default",
                            id: "health-score-details-score-explain",
                            variant: "text-sm/normal",
                            children: [
                                (0, r.jsx)("sup", { "aria-hidden": !0, children: "1 " }),
                                d.intl.string(d.t.tN5kb2),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(l.s_y, { onClick: m, className: c.b }),
            ],
        });
    };
