n.d(t, { R: () => A });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(773669),
    a = n(927578),
    r = n(580630),
    o = n(788868),
    d = n(652215),
    c = n(985018),
    u = n(927961),
    m = n(70667);
let g = (e) => {
        let { text: t, badge: n, variant: l } = e;
        return (0, i.jsxs)(s.Text, {
            color: "text-default",
            variant: null != l ? l : "text-sm/normal",
            children: [t, " ", n],
        });
    },
    _ = (e) => {
        let { text: t, variant: n } = e;
        return (0, i.jsx)(s.Text, { color: "text-strong", variant: null != n ? n : "text-md/semibold", children: t });
    },
    x = (e) => {
        let { includes: t } = e;
        return t
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(s.A9s, { size: "md", color: "currentColor", className: m.$8, "aria-hidden": !0 }),
                      (0, i.jsx)(s.AC4, { children: c.intl.string(c.t["tq+6t/"]) }),
                  ],
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(s.PGe, { size: "md", color: "currentColor", className: m.ut, "aria-hidden": !0 }),
                      (0, i.jsx)(s.AC4, { children: c.intl.string(c.t.l4qZrp) }),
                  ],
              });
    },
    A = (e, t, n, A, h) => {
        let p = {
                0: {
                    label: (0, i.jsx)(g, { text: c.intl.string(c.t["09yRK3"]) }),
                    column1: (0, i.jsx)(_, { text: a.Ay.formatPriceString(e, o.WT.MONTH) }),
                    column2: (0, i.jsx)(_, { text: n ? A : a.Ay.formatPriceString(t, o.WT.MONTH) }),
                    withBottomBorder: !0,
                },
                1: {
                    label: (0, i.jsx)(g, { text: c.intl.string(c.t.vaDeDV) }),
                    column1: (0, i.jsx)(x, { includes: !0 }),
                    column2: (0, i.jsx)(x, { includes: !0 }),
                },
                2: {
                    label: (0, i.jsx)(g, { text: c.intl.string(c.t.DmfiwT) }),
                    column1: (0, i.jsx)(x, { includes: !0 }),
                    column2: (0, i.jsx)(x, { includes: !0 }),
                },
                3: {
                    label: (0, i.jsx)(g, { text: c.intl.string(c.t.OuItFi) }),
                    column1: (0, i.jsx)(x, { includes: !0 }),
                    column2: (0, i.jsx)(x, { includes: !0 }),
                },
                4: {
                    label: (0, i.jsx)(g, { text: c.intl.string(c.t["9kRJS8"]) }),
                    column1: (0, i.jsx)(x, { includes: !0 }),
                    column2: (0, i.jsx)(x, { includes: !0 }),
                },
                5: {
                    label: (0, i.jsx)(g, { text: c.intl.string(c.t["ufhQC+"]) }),
                    column1: (0, i.jsx)(_, { text: (0, a.EJ)(o.PremiumTypes.TIER_0) }),
                    column2: (0, i.jsx)(_, { text: (0, a.EJ)(o.PremiumTypes.TIER_2) }),
                },
                6: {
                    label: (0, i.jsx)(g, { text: c.intl.string(c.t.VwxlMw) }),
                    column1: (0, i.jsx)(x, { includes: !1 }),
                    column2: (0, i.jsx)(_, { text: c.intl.string(c.t.XdN6KU) }),
                },
                7: {
                    label: (0, i.jsx)(g, {
                        text: c.intl.formatToPlainString(c.t.nyhDpw, {
                            numBoosts: o.M4,
                            percentageOff: (0, r.l9)(l.default.locale, o.oX / 100),
                        }),
                    }),
                    column1: (0, i.jsx)(x, { includes: !1 }),
                    column2: (0, i.jsx)(x, { includes: !0 }),
                },
                8: {
                    label: (0, i.jsx)(g, { text: c.intl.string(c.t.tFbcuM) }),
                    column1: (0, i.jsx)(x, { includes: !1 }),
                    column2: (0, i.jsx)(x, { includes: !0 }),
                },
                9: {
                    label: (0, i.jsx)(g, { text: c.intl.string(u.default["86GtGH"]) }),
                    column1: (0, i.jsx)(x, { includes: !1 }),
                    column2: (0, i.jsx)(x, { includes: !0 }),
                },
                10: {
                    label: (0, i.jsx)(g, { text: c.intl.string(c.t["aR/zTk"]) }),
                    column1: (0, i.jsx)(x, { includes: !1 }),
                    column2: (0, i.jsx)(x, { includes: !0 }),
                },
                11: {
                    label: (0, i.jsx)(g, { text: c.intl.string(c.t.IzrZHz) }),
                    column1: (0, i.jsx)(x, { includes: !1 }),
                    column2: (0, i.jsx)(x, { includes: !0 }),
                },
                12: {
                    label: (0, i.jsx)(g, { text: c.intl.string(c.t["HwNg/Z"]) }),
                    column1: (0, i.jsx)(x, { includes: !1 }),
                    column2: (0, i.jsx)(x, { includes: !0 }),
                },
                13: {
                    label: (0, i.jsx)(g, { text: c.intl.string(c.t["y+HHL9"]) }),
                    column1: (0, i.jsx)(x, { includes: !0 }),
                    column2: (0, i.jsx)(x, { includes: !0 }),
                },
                14: {
                    label: (0, i.jsx)(g, { text: c.intl.string(c.t.qQxxVc) }),
                    column1: (0, i.jsx)(x, { includes: !0 }),
                    column2: (0, i.jsx)(x, { includes: !0 }),
                },
                15: {
                    label: (0, i.jsx)(g, { text: c.intl.string(c.t.xi0NBE) }),
                    column1: (0, i.jsx)(x, { includes: !1 }),
                    column2: (0, i.jsx)(x, { includes: !0 }),
                    withBottomBorder: !0,
                },
                16: {
                    label: (0, i.jsx)(g, { text: c.intl.string(c.t.MfsUHm) }),
                    column1: (0, i.jsx)(x, { includes: !1 }),
                    column2: (0, i.jsx)(x, { includes: !0 }),
                },
                22: {
                    label: (0, i.jsx)(g, { text: c.intl.string(c.t["A+0H1f"]) }),
                    column1: (0, i.jsx)(x, { includes: !1 }),
                    column2: (0, i.jsx)(x, { includes: !0 }),
                },
                17: {
                    label: (0, i.jsx)(g, { text: c.intl.string(c.t["il8+nC"]) }),
                    column1: (0, i.jsx)(x, { includes: !1 }),
                    column2: (0, i.jsx)(x, { includes: !0 }),
                },
                18: {
                    label: (0, i.jsx)(g, { text: c.intl.formatToPlainString(c.t["8crdzJ"], { maxChars: d.CS1 }) }),
                    column1: (0, i.jsx)(x, { includes: !1 }),
                    column2: (0, i.jsx)(x, { includes: !0 }),
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
                    label: (0, i.jsx)(g, { text: c.intl.string(c.t["93xPy3"]) }),
                    column1: (0, i.jsx)(x, { includes: !1 }),
                    column2: (0, i.jsx)(x, { includes: !0 }),
                    withBottomBorder: !0,
                },
                24: {
                    label: (0, i.jsx)(g, { text: c.intl.string(c.t["5BJqNF"]) }),
                    column1: (0, i.jsx)(x, { includes: !1 }),
                    column2: (0, i.jsx)(x, { includes: !0 }),
                    withBottomBorder: !1,
                },
            },
            T = h === o.xc.FP_ONLY;
        return [
            p[0],
            p[1],
            p[2],
            p[3],
            p[4],
            p[5],
            p[6],
            ...(T ? [] : [p[7]]),
            p[8],
            p[9],
            p[10],
            p[11],
            p[12],
            ...(T ? [] : [p[13]]),
            p[14],
            p[15],
            p[16],
            p[17],
            p[18],
            p[23],
            p[24],
        ];
    };
