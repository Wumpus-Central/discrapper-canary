n.d(t, {
    R: () => g,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(773669),
    s = n(927578),
    o = n(580630),
    l = n(411268),
    c = n(788868),
    u = n(652215),
    d = n(985018),
    f = n(927961),
    p = n(562628);
let _ = (e) => {
        let { text: t, badge: n, variant: a } = e;
        return (0, r.jsxs)(i.Text, {
            color: "text-default",
            variant: null != a ? a : "text-sm/normal",
            children: [t, " ", n],
        });
    },
    h = (e) => {
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
                      (0, r.jsx)(i.A9s, {
                          size: "md",
                          color: "currentColor",
                          className: p.$8,
                          "aria-hidden": !0,
                      }),
                      (0, r.jsx)(i.AC4, {
                          children: d.intl.string(d.t["tq+6t/"]),
                      }),
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(i.PGe, {
                          size: "md",
                          color: "currentColor",
                          className: p.ut,
                          "aria-hidden": !0,
                      }),
                      (0, r.jsx)(i.AC4, {
                          children: d.intl.string(d.t.l4qZrp),
                      }),
                  ],
              });
    },
    g = (e, t, n, g, E) => {
        let b = {
                0: {
                    label: (0, r.jsx)(_, {
                        text: d.intl.string(d.t["09yRK3"]),
                    }),
                    column1: (0, r.jsx)(h, {
                        text: s.Ay.formatPriceString(e, c.WT.MONTH),
                    }),
                    column2: (0, r.jsx)(h, {
                        text: n ? g : s.Ay.formatPriceString(t, c.WT.MONTH),
                    }),
                    withBottomBorder: !0,
                },
                1: {
                    label: (0, r.jsx)(_, {
                        text: d.intl.string(d.t.vaDeDV),
                    }),
                    column1: (0, r.jsx)(m, {
                        includes: !0,
                    }),
                    column2: (0, r.jsx)(m, {
                        includes: !0,
                    }),
                },
                2: {
                    label: (0, r.jsx)(_, {
                        text: d.intl.string(d.t.DmfiwT),
                    }),
                    column1: (0, r.jsx)(m, {
                        includes: !0,
                    }),
                    column2: (0, r.jsx)(m, {
                        includes: !0,
                    }),
                },
                3: {
                    label: (0, r.jsx)(_, {
                        text: d.intl.string(d.t.OuItFi),
                    }),
                    column1: (0, r.jsx)(m, {
                        includes: !0,
                    }),
                    column2: (0, r.jsx)(m, {
                        includes: !0,
                    }),
                },
                4: {
                    label: (0, r.jsx)(_, {
                        text: d.intl.string(d.t["9kRJS8"]),
                    }),
                    column1: (0, r.jsx)(m, {
                        includes: !0,
                    }),
                    column2: (0, r.jsx)(m, {
                        includes: !0,
                    }),
                },
                5: {
                    label: (0, r.jsx)(_, {
                        text: d.intl.string(d.t["ufhQC+"]),
                    }),
                    column1: (0, r.jsx)(h, {
                        text: (0, s.EJ)(c.PremiumTypes.TIER_0),
                    }),
                    column2: (0, r.jsx)(h, {
                        text: (0, s.EJ)(c.PremiumTypes.TIER_2),
                    }),
                },
                6: {
                    label: (0, r.jsx)(_, {
                        text: d.intl.string(d.t.VwxlMw),
                    }),
                    column1: (0, r.jsx)(m, {
                        includes: !1,
                    }),
                    column2: (0, r.jsx)(h, {
                        text: d.intl.string(d.t.XdN6KU),
                    }),
                },
                7: {
                    label: (0, r.jsx)(_, {
                        text: d.intl.formatToPlainString(d.t.nyhDpw, {
                            numBoosts: c.M4,
                            percentageOff: (0, o.l9)(a.default.locale, c.oX / 100),
                        }),
                    }),
                    column1: (0, r.jsx)(m, {
                        includes: !1,
                    }),
                    column2: (0, r.jsx)(m, {
                        includes: !0,
                    }),
                },
                8: {
                    label: (0, r.jsx)(_, {
                        text: d.intl.string(d.t.tFbcuM),
                    }),
                    column1: (0, r.jsx)(m, {
                        includes: !1,
                    }),
                    column2: (0, r.jsx)(m, {
                        includes: !0,
                    }),
                },
                9: {
                    label: (0, r.jsx)(_, {
                        text: d.intl.string(f.default["86GtGH"]),
                    }),
                    column1: (0, r.jsx)(m, {
                        includes: !1,
                    }),
                    column2: (0, r.jsx)(m, {
                        includes: !0,
                    }),
                },
                10: {
                    label: (0, r.jsx)(_, {
                        text: d.intl.string(d.t["aR/zTk"]),
                    }),
                    column1: (0, r.jsx)(m, {
                        includes: !1,
                    }),
                    column2: (0, r.jsx)(m, {
                        includes: !0,
                    }),
                },
                11: {
                    label: (0, r.jsx)(_, {
                        text: d.intl.string(d.t.IzrZHz),
                    }),
                    column1: (0, r.jsx)(m, {
                        includes: !1,
                    }),
                    column2: (0, r.jsx)(m, {
                        includes: !0,
                    }),
                },
                12: {
                    label: (0, r.jsx)(_, {
                        text: d.intl.string(d.t["HwNg/Z"]),
                    }),
                    column1: (0, r.jsx)(m, {
                        includes: !1,
                    }),
                    column2: (0, r.jsx)(m, {
                        includes: !0,
                    }),
                },
                13: {
                    label: (0, r.jsx)(_, {
                        text: d.intl.string(d.t["y+HHL9"]),
                    }),
                    column1: (0, r.jsx)(m, {
                        includes: !0,
                    }),
                    column2: (0, r.jsx)(m, {
                        includes: !0,
                    }),
                },
                14: {
                    label: (0, r.jsx)(_, {
                        text: d.intl.string(d.t.qQxxVc),
                    }),
                    column1: (0, r.jsx)(m, {
                        includes: !0,
                    }),
                    column2: (0, r.jsx)(m, {
                        includes: !0,
                    }),
                },
                15: {
                    label: (0, r.jsx)(_, {
                        text: d.intl.string(d.t.xi0NBE),
                    }),
                    column1: (0, r.jsx)(m, {
                        includes: !1,
                    }),
                    column2: (0, r.jsx)(m, {
                        includes: !0,
                    }),
                    withBottomBorder: !0,
                },
                16: {
                    label: (0, r.jsx)(_, {
                        text: d.intl.string(d.t.MfsUHm),
                    }),
                    column1: (0, r.jsx)(m, {
                        includes: !1,
                    }),
                    column2: (0, r.jsx)(m, {
                        includes: !0,
                    }),
                },
                22: {
                    label: (0, r.jsx)(_, {
                        text: d.intl.string(d.t["A+0H1f"]),
                    }),
                    column1: (0, r.jsx)(m, {
                        includes: !1,
                    }),
                    column2: (0, r.jsx)(m, {
                        includes: !0,
                    }),
                },
                17: {
                    label: (0, r.jsx)(_, {
                        text: d.intl.string(d.t["il8+nC"]),
                    }),
                    column1: (0, r.jsx)(m, {
                        includes: !1,
                    }),
                    column2: (0, r.jsx)(m, {
                        includes: !0,
                    }),
                },
                18: {
                    label: (0, r.jsx)(_, {
                        text: d.intl.formatToPlainString(d.t["8crdzJ"], {
                            maxChars: u.CS1,
                        }),
                    }),
                    column1: (0, r.jsx)(m, {
                        includes: !1,
                    }),
                    column2: (0, r.jsx)(m, {
                        includes: !0,
                    }),
                    withBottomBorder: !0,
                },
                19: {
                    label: (0, r.jsx)(i.Heading, {
                        className: p.__invalid_textColor,
                        variant: "display-sm",
                        children: "Make Discord Yours",
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1,
                },
                20: {
                    label: (0, r.jsx)(i.Heading, {
                        className: p.__invalid_textColor,
                        variant: "display-sm",
                        children: "Enjoy an Upgraded Discord",
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1,
                },
                21: {
                    label: (0, r.jsx)(i.Heading, {
                        className: p.__invalid_textColor,
                        variant: "display-sm",
                        children: "Show Up the Way You Want",
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1,
                },
                23: {
                    label: (0, r.jsx)(_, {
                        text: d.intl.string(d.t["93xPy3"]),
                    }),
                    column1: (0, r.jsx)(m, {
                        includes: !1,
                    }),
                    column2: (0, r.jsx)(m, {
                        includes: !0,
                    }),
                    withBottomBorder: !0,
                },
                24: {
                    label: (0, r.jsx)(_, {
                        text: d.intl.string(d.t["5BJqNF"]),
                    }),
                    column1: (0, r.jsx)(m, {
                        includes: !1,
                    }),
                    column2: (0, r.jsx)(m, {
                        includes: !0,
                    }),
                    withBottomBorder: !1,
                },
            },
            { enabled: y } = l.K.useExperiment({
                location: "useGetPlanComparisonTableRows",
            }),
            O = E === c.xc.FP_ONLY;
        return [
            ...(y ? [] : [b[0]]),
            b[1],
            b[2],
            b[3],
            b[4],
            b[5],
            b[6],
            ...(O ? [] : [b[7]]),
            b[8],
            b[9],
            b[10],
            b[11],
            b[12],
            ...(O ? [] : [b[13]]),
            b[14],
            b[15],
            b[16],
            b[17],
            b[18],
            b[23],
            b[24],
        ];
    };
