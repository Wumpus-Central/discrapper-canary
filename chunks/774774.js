"use strict";
n.d(t, { HU: () => p, Lj: () => m, at: () => E, e4: () => h, rm: () => g });
var r,
    i = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    o = n(827734),
    l = n(834730),
    u = n(511484),
    d = n(349563),
    c = n(788868),
    _ = n(985018),
    f = n(167617),
    E =
        (((r = {})[(r.PREMIUM_TIER_0_WHITE_FILL = 0)] = "PREMIUM_TIER_0_WHITE_FILL"),
        (r[(r.PREMIUM_TIER_0_GRADIENT_FILL = 1)] = "PREMIUM_TIER_0_GRADIENT_FILL"),
        (r[(r.PREMIUM_TIER_2_WHITE_FILL = 2)] = "PREMIUM_TIER_2_WHITE_FILL"),
        (r[(r.PREMIUM_TIER_2_NEW_GRADIENT_FILL = 3)] = "PREMIUM_TIER_2_NEW_GRADIENT_FILL"),
        (r[(r.PREMIUM_TIER_2_OLD_GRADIENT_FILL = 4)] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL"),
        (r[(r.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE = 5)] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE"),
        (r[(r.PREMIUM_TIER_2_GREY_FILL = 6)] = "PREMIUM_TIER_2_GREY_FILL"),
        (r[(r.PREMIUM_TIER_2_MOD_BACKGROUND_FILL = 7)] = "PREMIUM_TIER_2_MOD_BACKGROUND_FILL"),
        r);
function h(e) {
    let { text: t, className: n, colorOptions: r = 2, icon: s, gap: o = !0 } = e;
    return (0, i.jsxs)("div", {
        className: a()(n, f.hg, {
            [f.AE]: 1 === r,
            [f.eY]: 3 === r,
            [f.rE]: 4 === r,
            [f.mY]: 5 === r,
            [f.ZC]: 6 === r,
            [f.u0]: 7 === r,
            [f.Xu]: o,
        }),
        children: [
            (0, i.jsx)(l.E, {
                variant: "text-xs/bold",
                className: a()(f.YY, {
                    [f.Zz]: 0 !== r && 2 !== r,
                    [f.oo]: 0 === r,
                    [f.oJ]: 2 === r || 6 === r,
                    [f.jc]: 7 === r,
                }),
                children: t,
            }),
            s,
        ],
    });
}
function p(e) {
    let t,
        { text: n, className: r, colorOptions: s = 2, isPillOnBorder: l = !0 } = e;
    switch (s) {
        case 1:
            t = o.A.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css;
            break;
        case 3:
            t = `url(#${d.Bp})`;
            break;
        case 4:
        case 5:
            t = `url(#${d.G5})`;
            break;
        default:
            t = "white";
    }
    return l
        ? (0, i.jsxs)("div", {
              className: a()(r, f.up),
              children: [
                  (0, i.jsx)(d.zF, { foreground: f.QX, color: t }),
                  (0, i.jsx)(d.zF, { foreground: f.J0, color: t }),
                  (0, i.jsx)(d.zF, { foreground: f.QC, color: t }),
                  (0, i.jsx)(h, { text: n, colorOptions: s }),
                  (0, i.jsx)(d.zF, { foreground: f.JF, color: t }),
                  (0, i.jsx)(d.zF, { foreground: f.Cm, color: t }),
              ],
          })
        : (0, i.jsxs)("div", {
              className: a()(r, f.up),
              children: [
                  (0, i.jsx)(h, { text: n, colorOptions: s }),
                  (0, i.jsx)(d.zF, { foreground: f.QX, style: { marginLeft: 4, marginBottom: -6 }, color: t }),
                  (0, i.jsx)(d.zF, { foreground: f.J0, color: t }),
              ],
          });
}
function m(e, t) {
    return t === c.pe.TIER_0
        ? _.intl.string(_.t.IBYG5U)
        : e === c.PremiumTypes.TIER_0
          ? _.intl.string(_.t.qYKftX)
          : null;
}
function g(e, t, n, r, i) {
    if (null != n && (0, u.U9)(n, c.pe.TIER_2) && void 0 !== n.discount.amount)
        return e ? _.intl.string(_.t.EyjDRE) : _.intl.formatToPlainString(_.t.iiLbvu, { percent: n.discount.amount });
    if (i === c.pe.TIER_2) {
        let e = _.intl.string(_.t.IBYG5U);
        return r?.trial_id === c.Dw && (e = _.intl.string(_.t.gtNqJQ)), e;
    }
    return t === c.PremiumTypes.TIER_2 ? _.intl.string(_.t.qYKftX) : e ? _.intl.string(_.t.EyjDRE) : null;
}
