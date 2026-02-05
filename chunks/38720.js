n.d(t, { R: () => h });
var i = n(627968);
n(64700);
var s = n(397927),
    r = n(773669),
    a = n(927578),
    l = n(580630),
    o = n(411268),
    c = n(788868),
    d = n(652215),
    u = n(985018),
    _ = n(927961),
    m = n(562628);
let A = (e) => {
        let { text: t, badge: n, variant: r } = e;
        return (0, i.jsxs)(s.Text, {
            color: "text-default",
            variant: null != r ? r : "text-sm/normal",
            children: [t, " ", n],
        });
    },
    g = (e) => {
        let { text: t, variant: n } = e;
        return (0, i.jsx)(s.Text, { color: "text-strong", variant: null != n ? n : "text-md/semibold", children: t });
    },
    E = (e) => {
        let { includes: t } = e;
        return t
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(s.A9s, { size: "md", color: "currentColor", className: m.$8, "aria-hidden": !0 }),
                      (0, i.jsx)(s.AC4, { children: u.intl.string(u.t["tq+6t/"]) }),
                  ],
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(s.PGe, { size: "md", color: "currentColor", className: m.ut, "aria-hidden": !0 }),
                      (0, i.jsx)(s.AC4, { children: u.intl.string(u.t.l4qZrp) }),
                  ],
              });
    },
    h = (e, t, n, h, p) => {
        let C = {
                0: {
                    label: (0, i.jsx)(A, { text: u.intl.string(u.t["09yRK3"]) }),
                    column1: (0, i.jsx)(g, { text: a.Ay.formatPriceString(e, c.WT.MONTH) }),
                    column2: (0, i.jsx)(g, { text: n ? h : a.Ay.formatPriceString(t, c.WT.MONTH) }),
                    withBottomBorder: !0,
                },
                1: {
                    label: (0, i.jsx)(A, { text: u.intl.string(u.t.vaDeDV) }),
                    column1: (0, i.jsx)(E, { includes: !0 }),
                    column2: (0, i.jsx)(E, { includes: !0 }),
                },
                2: {
                    label: (0, i.jsx)(A, { text: u.intl.string(u.t.DmfiwT) }),
                    column1: (0, i.jsx)(E, { includes: !0 }),
                    column2: (0, i.jsx)(E, { includes: !0 }),
                },
                3: {
                    label: (0, i.jsx)(A, { text: u.intl.string(u.t.OuItFi) }),
                    column1: (0, i.jsx)(E, { includes: !0 }),
                    column2: (0, i.jsx)(E, { includes: !0 }),
                },
                4: {
                    label: (0, i.jsx)(A, { text: u.intl.string(u.t["9kRJS8"]) }),
                    column1: (0, i.jsx)(E, { includes: !0 }),
                    column2: (0, i.jsx)(E, { includes: !0 }),
                },
                5: {
                    label: (0, i.jsx)(A, { text: u.intl.string(u.t["ufhQC+"]) }),
                    column1: (0, i.jsx)(g, { text: (0, a.EJ)(c.PremiumTypes.TIER_0) }),
                    column2: (0, i.jsx)(g, { text: (0, a.EJ)(c.PremiumTypes.TIER_2) }),
                },
                6: {
                    label: (0, i.jsx)(A, { text: u.intl.string(u.t.VwxlMw) }),
                    column1: (0, i.jsx)(E, { includes: !1 }),
                    column2: (0, i.jsx)(g, { text: u.intl.string(u.t.XdN6KU) }),
                },
                7: {
                    label: (0, i.jsx)(A, {
                        text: u.intl.formatToPlainString(u.t.nyhDpw, {
                            numBoosts: c.M4,
                            percentageOff: (0, l.l9)(r.default.locale, c.oX / 100),
                        }),
                    }),
                    column1: (0, i.jsx)(E, { includes: !1 }),
                    column2: (0, i.jsx)(E, { includes: !0 }),
                },
                8: {
                    label: (0, i.jsx)(A, { text: u.intl.string(u.t.tFbcuM) }),
                    column1: (0, i.jsx)(E, { includes: !1 }),
                    column2: (0, i.jsx)(E, { includes: !0 }),
                },
                9: {
                    label: (0, i.jsx)(A, { text: u.intl.string(_.default["86GtGH"]) }),
                    column1: (0, i.jsx)(E, { includes: !1 }),
                    column2: (0, i.jsx)(E, { includes: !0 }),
                },
                10: {
                    label: (0, i.jsx)(A, { text: u.intl.string(u.t["aR/zTk"]) }),
                    column1: (0, i.jsx)(E, { includes: !1 }),
                    column2: (0, i.jsx)(E, { includes: !0 }),
                },
                11: {
                    label: (0, i.jsx)(A, { text: u.intl.string(u.t.IzrZHz) }),
                    column1: (0, i.jsx)(E, { includes: !1 }),
                    column2: (0, i.jsx)(E, { includes: !0 }),
                },
                12: {
                    label: (0, i.jsx)(A, { text: u.intl.string(u.t["HwNg/Z"]) }),
                    column1: (0, i.jsx)(E, { includes: !1 }),
                    column2: (0, i.jsx)(E, { includes: !0 }),
                },
                13: {
                    label: (0, i.jsx)(A, { text: u.intl.string(u.t["y+HHL9"]) }),
                    column1: (0, i.jsx)(E, { includes: !0 }),
                    column2: (0, i.jsx)(E, { includes: !0 }),
                },
                14: {
                    label: (0, i.jsx)(A, { text: u.intl.string(u.t.qQxxVc) }),
                    column1: (0, i.jsx)(E, { includes: !0 }),
                    column2: (0, i.jsx)(E, { includes: !0 }),
                },
                15: {
                    label: (0, i.jsx)(A, { text: u.intl.string(u.t.xi0NBE) }),
                    column1: (0, i.jsx)(E, { includes: !1 }),
                    column2: (0, i.jsx)(E, { includes: !0 }),
                    withBottomBorder: !0,
                },
                16: {
                    label: (0, i.jsx)(A, { text: u.intl.string(u.t.MfsUHm) }),
                    column1: (0, i.jsx)(E, { includes: !1 }),
                    column2: (0, i.jsx)(E, { includes: !0 }),
                },
                22: {
                    label: (0, i.jsx)(A, { text: u.intl.string(u.t["A+0H1f"]) }),
                    column1: (0, i.jsx)(E, { includes: !1 }),
                    column2: (0, i.jsx)(E, { includes: !0 }),
                },
                17: {
                    label: (0, i.jsx)(A, { text: u.intl.string(u.t["il8+nC"]) }),
                    column1: (0, i.jsx)(E, { includes: !1 }),
                    column2: (0, i.jsx)(E, { includes: !0 }),
                },
                18: {
                    label: (0, i.jsx)(A, { text: u.intl.formatToPlainString(u.t["8crdzJ"], { maxChars: d.CS1 }) }),
                    column1: (0, i.jsx)(E, { includes: !1 }),
                    column2: (0, i.jsx)(E, { includes: !0 }),
                    withBottomBorder: !0,
                },
                19: {
                    label: (0, i.jsx)(s.Heading, {
                        className: m.__invalid_textColor,
                        variant: "display-sm",
                        children: "Make Discord Yours",
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1,
                },
                20: {
                    label: (0, i.jsx)(s.Heading, {
                        className: m.__invalid_textColor,
                        variant: "display-sm",
                        children: "Enjoy an Upgraded Discord",
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1,
                },
                21: {
                    label: (0, i.jsx)(s.Heading, {
                        className: m.__invalid_textColor,
                        variant: "display-sm",
                        children: "Show Up the Way You Want",
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1,
                },
                23: {
                    label: (0, i.jsx)(A, { text: u.intl.string(u.t["93xPy3"]) }),
                    column1: (0, i.jsx)(E, { includes: !1 }),
                    column2: (0, i.jsx)(E, { includes: !0 }),
                    withBottomBorder: !0,
                },
                24: {
                    label: (0, i.jsx)(A, { text: u.intl.string(u.t["5BJqNF"]) }),
                    column1: (0, i.jsx)(E, { includes: !1 }),
                    column2: (0, i.jsx)(E, { includes: !0 }),
                    withBottomBorder: !1,
                },
            },
            { enabled: x } = o.K.useExperiment({ location: "useGetPlanComparisonTableRows" }),
            T = p === c.xc.FP_ONLY;
        return [
            ...(x ? [] : [C[0]]),
            C[1],
            C[2],
            C[3],
            C[4],
            C[5],
            C[6],
            ...(T ? [] : [C[7]]),
            C[8],
            C[9],
            C[10],
            C[11],
            C[12],
            ...(T ? [] : [C[13]]),
            C[14],
            C[15],
            C[16],
            C[17],
            C[18],
            C[23],
            C[24],
        ];
    };
