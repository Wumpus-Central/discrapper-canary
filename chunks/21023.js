n.d(t, { n: () => h }), n(388685);
var r = n(54381);
n(473749);
var i = n(481060),
    o = n(706454),
    a = n(74538),
    s = n(937615),
    l = n(46062),
    c = n(474936),
    u = n(981631),
    d = n(388032),
    f = n(17355);
let p = (e) => {
        let { text: t, badge: n, variant: o } = e;
        return (0, r.jsxs)(i.Text, {
            color: "text-default",
            variant: null != o ? o : "text-sm/normal",
            children: [t, " ", n],
        });
    },
    _ = (e) => {
        let { text: t, variant: n } = e;
        return (0, r.jsx)(i.Text, {
            color: "text-strong",
            variant: null != n ? n : "text-md/semibold",
            children: t,
        });
    },
    m = (e) => {
        let { includes: t } = e;
        return t
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(i.dz2, {
                          size: "md",
                          color: "currentColor",
                          className: f.checkmarkIcon,
                          "aria-hidden": !0,
                      }),
                      (0, r.jsx)(i.nn4, { children: d.intl.string(d.t["tq+6t/"]) }),
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(i.Dio, {
                          size: "md",
                          color: "currentColor",
                          className: f.closeIcon,
                          "aria-hidden": !0,
                      }),
                      (0, r.jsx)(i.nn4, { children: d.intl.string(d.t.l4qZrp) }),
                  ],
              });
    },
    h = (e, t, n, h, g) => {
        let E = {
                0: {
                    label: (0, r.jsx)(p, { text: d.intl.string(d.t["09yRK3"]) }),
                    column1: (0, r.jsx)(_, { text: a.ZP.formatPriceString(e, c.rV.MONTH) }),
                    column2: (0, r.jsx)(_, { text: n ? h : a.ZP.formatPriceString(t, c.rV.MONTH) }),
                    withBottomBorder: !0,
                },
                1: {
                    label: (0, r.jsx)(p, { text: d.intl.string(d.t.vaDeDV) }),
                    column1: (0, r.jsx)(m, { includes: !0 }),
                    column2: (0, r.jsx)(m, { includes: !0 }),
                },
                2: {
                    label: (0, r.jsx)(p, { text: d.intl.string(d.t.DmfiwT) }),
                    column1: (0, r.jsx)(m, { includes: !0 }),
                    column2: (0, r.jsx)(m, { includes: !0 }),
                },
                3: {
                    label: (0, r.jsx)(p, { text: d.intl.string(d.t.OuItFi) }),
                    column1: (0, r.jsx)(m, { includes: !0 }),
                    column2: (0, r.jsx)(m, { includes: !0 }),
                },
                4: {
                    label: (0, r.jsx)(p, { text: d.intl.string(d.t["9kRJS8"]) }),
                    column1: (0, r.jsx)(m, { includes: !0 }),
                    column2: (0, r.jsx)(m, { includes: !0 }),
                },
                5: {
                    label: (0, r.jsx)(p, { text: d.intl.string(d.t["ufhQC+"]) }),
                    column1: (0, r.jsx)(_, { text: (0, a.v9)(c.PremiumTypes.TIER_0) }),
                    column2: (0, r.jsx)(_, { text: (0, a.v9)(c.PremiumTypes.TIER_2) }),
                },
                6: {
                    label: (0, r.jsx)(p, { text: d.intl.string(d.t.VwxlMw) }),
                    column1: (0, r.jsx)(m, { includes: !1 }),
                    column2: (0, r.jsx)(_, { text: d.intl.string(d.t.XdN6KU) }),
                },
                7: {
                    label: (0, r.jsx)(p, {
                        text: d.intl.formatToPlainString(d.t.nyhDpw, {
                            numBoosts: c.cb,
                            percentageOff: (0, s.T3)(o.default.locale, c.Rr / 100),
                        }),
                    }),
                    column1: (0, r.jsx)(m, { includes: !1 }),
                    column2: (0, r.jsx)(m, { includes: !0 }),
                },
                8: {
                    label: (0, r.jsx)(p, { text: d.intl.string(d.t.tFbcuM) }),
                    column1: (0, r.jsx)(m, { includes: !1 }),
                    column2: (0, r.jsx)(m, { includes: !0 }),
                },
                9: {
                    label: (0, r.jsx)(p, { text: d.intl.string(d.t["aR/zTk"]) }),
                    column1: (0, r.jsx)(m, { includes: !1 }),
                    column2: (0, r.jsx)(m, { includes: !0 }),
                },
                10: {
                    label: (0, r.jsx)(p, { text: d.intl.string(d.t.IzrZHz) }),
                    column1: (0, r.jsx)(m, { includes: !1 }),
                    column2: (0, r.jsx)(m, { includes: !0 }),
                },
                11: {
                    label: (0, r.jsx)(p, { text: d.intl.string(d.t["HwNg/Z"]) }),
                    column1: (0, r.jsx)(m, { includes: !1 }),
                    column2: (0, r.jsx)(m, { includes: !0 }),
                },
                12: {
                    label: (0, r.jsx)(p, { text: d.intl.string(d.t["y+HHL9"]) }),
                    column1: (0, r.jsx)(m, { includes: !0 }),
                    column2: (0, r.jsx)(m, { includes: !0 }),
                },
                13: {
                    label: (0, r.jsx)(p, { text: d.intl.string(d.t.qQxxVc) }),
                    column1: (0, r.jsx)(m, { includes: !0 }),
                    column2: (0, r.jsx)(m, { includes: !0 }),
                },
                14: {
                    label: (0, r.jsx)(p, { text: d.intl.string(d.t.xi0NBE) }),
                    column1: (0, r.jsx)(m, { includes: !1 }),
                    column2: (0, r.jsx)(m, { includes: !0 }),
                    withBottomBorder: !0,
                },
                15: {
                    label: (0, r.jsx)(p, { text: d.intl.string(d.t.MfsUHm) }),
                    column1: (0, r.jsx)(m, { includes: !1 }),
                    column2: (0, r.jsx)(m, { includes: !0 }),
                },
                21: {
                    label: (0, r.jsx)(p, { text: d.intl.string(d.t["A+0H1f"]) }),
                    column1: (0, r.jsx)(m, { includes: !1 }),
                    column2: (0, r.jsx)(m, { includes: !0 }),
                },
                16: {
                    label: (0, r.jsx)(p, { text: d.intl.string(d.t["il8+nC"]) }),
                    column1: (0, r.jsx)(m, { includes: !1 }),
                    column2: (0, r.jsx)(m, { includes: !0 }),
                },
                17: {
                    label: (0, r.jsx)(p, { text: d.intl.formatToPlainString(d.t["8crdzJ"], { maxChars: u.en1 }) }),
                    column1: (0, r.jsx)(m, { includes: !1 }),
                    column2: (0, r.jsx)(m, { includes: !0 }),
                    withBottomBorder: !0,
                },
                18: {
                    label: (0, r.jsx)(i.Heading, {
                        className: f.__invalid_textColor,
                        variant: "display-sm",
                        children: "Make Discord Yours",
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1,
                },
                19: {
                    label: (0, r.jsx)(i.Heading, {
                        className: f.__invalid_textColor,
                        variant: "display-sm",
                        children: "Enjoy an Upgraded Discord",
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1,
                },
                20: {
                    label: (0, r.jsx)(i.Heading, {
                        className: f.__invalid_textColor,
                        variant: "display-sm",
                        children: "Show Up the Way You Want",
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1,
                },
                22: {
                    label: (0, r.jsx)(p, { text: d.intl.string(d.t["93xPy3"]) }),
                    column1: (0, r.jsx)(m, { includes: !1 }),
                    column2: (0, r.jsx)(m, { includes: !0 }),
                    withBottomBorder: !0,
                },
                23: {
                    label: (0, r.jsx)(p, { text: d.intl.string(d.t["5BJqNF"]) }),
                    column1: (0, r.jsx)(m, { includes: !1 }),
                    column2: (0, r.jsx)(m, { includes: !0 }),
                    withBottomBorder: !1,
                },
            },
            { enabled: b } = l.T.useExperiment({ location: "useGetPlanComparisonTableRows" }),
            y = g === c.a$.FP_ONLY;
        return [
            ...(b ? [] : [E[0]]),
            E[1],
            E[2],
            E[3],
            E[4],
            E[5],
            E[6],
            ...(y ? [] : [E[7]]),
            E[8],
            E[9],
            E[10],
            E[11],
            ...(y ? [] : [E[12]]),
            E[13],
            E[14],
            E[15],
            E[16],
            E[17],
            E[22],
            E[23],
        ];
    };
