n.d(t, { R: () => h });
var i = n(627968);
n(64700);
var s = n(397927),
    a = n(773669),
    r = n(927578),
    l = n(580630),
    o = n(788868),
    c = n(652215),
    d = n(985018),
    u = n(927961),
    _ = n(562628);
let m = (e) => {
        let { text: t, badge: n, variant: a } = e;
        return (0, i.jsxs)(s.Text, {
            color: "text-default",
            variant: null != a ? a : "text-sm/normal",
            children: [t, " ", n],
        });
    },
    A = (e) => {
        let { text: t, variant: n } = e;
        return (0, i.jsx)(s.Text, { color: "text-strong", variant: null != n ? n : "text-md/semibold", children: t });
    },
    g = (e) => {
        let { includes: t } = e;
        return t
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(s.A9s, { size: "md", color: "currentColor", className: _.$8, "aria-hidden": !0 }),
                      (0, i.jsx)(s.AC4, { children: d.intl.string(d.t["tq+6t/"]) }),
                  ],
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(s.PGe, { size: "md", color: "currentColor", className: _.ut, "aria-hidden": !0 }),
                      (0, i.jsx)(s.AC4, { children: d.intl.string(d.t.l4qZrp) }),
                  ],
              });
    },
    h = (e, t, n, h, x) => {
        let p = {
                0: {
                    label: (0, i.jsx)(m, { text: d.intl.string(d.t["09yRK3"]) }),
                    column1: (0, i.jsx)(A, { text: r.Ay.formatPriceString(e, o.WT.MONTH) }),
                    column2: (0, i.jsx)(A, { text: n ? h : r.Ay.formatPriceString(t, o.WT.MONTH) }),
                    withBottomBorder: !0,
                },
                1: {
                    label: (0, i.jsx)(m, { text: d.intl.string(d.t.vaDeDV) }),
                    column1: (0, i.jsx)(g, { includes: !0 }),
                    column2: (0, i.jsx)(g, { includes: !0 }),
                },
                2: {
                    label: (0, i.jsx)(m, { text: d.intl.string(d.t.DmfiwT) }),
                    column1: (0, i.jsx)(g, { includes: !0 }),
                    column2: (0, i.jsx)(g, { includes: !0 }),
                },
                3: {
                    label: (0, i.jsx)(m, { text: d.intl.string(d.t.OuItFi) }),
                    column1: (0, i.jsx)(g, { includes: !0 }),
                    column2: (0, i.jsx)(g, { includes: !0 }),
                },
                4: {
                    label: (0, i.jsx)(m, { text: d.intl.string(d.t["9kRJS8"]) }),
                    column1: (0, i.jsx)(g, { includes: !0 }),
                    column2: (0, i.jsx)(g, { includes: !0 }),
                },
                5: {
                    label: (0, i.jsx)(m, { text: d.intl.string(d.t["ufhQC+"]) }),
                    column1: (0, i.jsx)(A, { text: (0, r.EJ)(o.PremiumTypes.TIER_0) }),
                    column2: (0, i.jsx)(A, { text: (0, r.EJ)(o.PremiumTypes.TIER_2) }),
                },
                6: {
                    label: (0, i.jsx)(m, { text: d.intl.string(d.t.VwxlMw) }),
                    column1: (0, i.jsx)(g, { includes: !1 }),
                    column2: (0, i.jsx)(A, { text: d.intl.string(d.t.XdN6KU) }),
                },
                7: {
                    label: (0, i.jsx)(m, {
                        text: d.intl.formatToPlainString(d.t.nyhDpw, {
                            numBoosts: o.M4,
                            percentageOff: (0, l.l9)(a.default.locale, o.oX / 100),
                        }),
                    }),
                    column1: (0, i.jsx)(g, { includes: !1 }),
                    column2: (0, i.jsx)(g, { includes: !0 }),
                },
                8: {
                    label: (0, i.jsx)(m, { text: d.intl.string(d.t.tFbcuM) }),
                    column1: (0, i.jsx)(g, { includes: !1 }),
                    column2: (0, i.jsx)(g, { includes: !0 }),
                },
                9: {
                    label: (0, i.jsx)(m, { text: d.intl.string(u.default["86GtGH"]) }),
                    column1: (0, i.jsx)(g, { includes: !1 }),
                    column2: (0, i.jsx)(g, { includes: !0 }),
                },
                10: {
                    label: (0, i.jsx)(m, { text: d.intl.string(d.t["aR/zTk"]) }),
                    column1: (0, i.jsx)(g, { includes: !1 }),
                    column2: (0, i.jsx)(g, { includes: !0 }),
                },
                11: {
                    label: (0, i.jsx)(m, { text: d.intl.string(d.t.IzrZHz) }),
                    column1: (0, i.jsx)(g, { includes: !1 }),
                    column2: (0, i.jsx)(g, { includes: !0 }),
                },
                12: {
                    label: (0, i.jsx)(m, { text: d.intl.string(d.t["HwNg/Z"]) }),
                    column1: (0, i.jsx)(g, { includes: !1 }),
                    column2: (0, i.jsx)(g, { includes: !0 }),
                },
                13: {
                    label: (0, i.jsx)(m, { text: d.intl.string(d.t["y+HHL9"]) }),
                    column1: (0, i.jsx)(g, { includes: !0 }),
                    column2: (0, i.jsx)(g, { includes: !0 }),
                },
                14: {
                    label: (0, i.jsx)(m, { text: d.intl.string(d.t.qQxxVc) }),
                    column1: (0, i.jsx)(g, { includes: !0 }),
                    column2: (0, i.jsx)(g, { includes: !0 }),
                },
                15: {
                    label: (0, i.jsx)(m, { text: d.intl.string(d.t.xi0NBE) }),
                    column1: (0, i.jsx)(g, { includes: !1 }),
                    column2: (0, i.jsx)(g, { includes: !0 }),
                    withBottomBorder: !0,
                },
                16: {
                    label: (0, i.jsx)(m, { text: d.intl.string(d.t.MfsUHm) }),
                    column1: (0, i.jsx)(g, { includes: !1 }),
                    column2: (0, i.jsx)(g, { includes: !0 }),
                },
                22: {
                    label: (0, i.jsx)(m, { text: d.intl.string(d.t["A+0H1f"]) }),
                    column1: (0, i.jsx)(g, { includes: !1 }),
                    column2: (0, i.jsx)(g, { includes: !0 }),
                },
                17: {
                    label: (0, i.jsx)(m, { text: d.intl.string(d.t["il8+nC"]) }),
                    column1: (0, i.jsx)(g, { includes: !1 }),
                    column2: (0, i.jsx)(g, { includes: !0 }),
                },
                18: {
                    label: (0, i.jsx)(m, { text: d.intl.formatToPlainString(d.t["8crdzJ"], { maxChars: c.CS1 }) }),
                    column1: (0, i.jsx)(g, { includes: !1 }),
                    column2: (0, i.jsx)(g, { includes: !0 }),
                    withBottomBorder: !0,
                },
                19: {
                    label: (0, i.jsx)(s.Heading, {
                        className: _.__invalid_textColor,
                        variant: "display-sm",
                        children: "Make Discord Yours",
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1,
                },
                20: {
                    label: (0, i.jsx)(s.Heading, {
                        className: _.__invalid_textColor,
                        variant: "display-sm",
                        children: "Enjoy an Upgraded Discord",
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1,
                },
                21: {
                    label: (0, i.jsx)(s.Heading, {
                        className: _.__invalid_textColor,
                        variant: "display-sm",
                        children: "Show Up the Way You Want",
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1,
                },
                23: {
                    label: (0, i.jsx)(m, { text: d.intl.string(d.t["93xPy3"]) }),
                    column1: (0, i.jsx)(g, { includes: !1 }),
                    column2: (0, i.jsx)(g, { includes: !0 }),
                    withBottomBorder: !0,
                },
                24: {
                    label: (0, i.jsx)(m, { text: d.intl.string(d.t["5BJqNF"]) }),
                    column1: (0, i.jsx)(g, { includes: !1 }),
                    column2: (0, i.jsx)(g, { includes: !0 }),
                    withBottomBorder: !1,
                },
            },
            E = x === o.xc.FP_ONLY;
        return [
            p[0],
            p[1],
            p[2],
            p[3],
            p[4],
            p[5],
            p[6],
            ...(E ? [] : [p[7]]),
            p[8],
            p[9],
            p[10],
            p[11],
            p[12],
            ...(E ? [] : [p[13]]),
            p[14],
            p[15],
            p[16],
            p[17],
            p[18],
            p[23],
            p[24],
        ];
    };
