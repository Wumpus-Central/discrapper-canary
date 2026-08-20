"use strict";
n.d(t, { HU: () => I, Lj: () => f, at: () => A, e4: () => h, rm: () => p });
var i,
    r = n(477900);
n(582128);
var a = n(503698),
    s = n.n(a),
    l = n(661531),
    o = n(834730),
    d = n(511484),
    c = n(349563),
    u = n(202541),
    _ = n(375708),
    E = n(867842),
    A =
        (((i = {})[(i.PREMIUM_TIER_0_WHITE_FILL = 0)] = "PREMIUM_TIER_0_WHITE_FILL"),
        (i[(i.PREMIUM_TIER_0_GRADIENT_FILL = 1)] = "PREMIUM_TIER_0_GRADIENT_FILL"),
        (i[(i.PREMIUM_TIER_2_WHITE_FILL = 2)] = "PREMIUM_TIER_2_WHITE_FILL"),
        (i[(i.PREMIUM_TIER_2_NEW_GRADIENT_FILL = 3)] = "PREMIUM_TIER_2_NEW_GRADIENT_FILL"),
        (i[(i.PREMIUM_TIER_2_OLD_GRADIENT_FILL = 4)] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL"),
        (i[(i.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE = 5)] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE"),
        (i[(i.PREMIUM_TIER_2_GREY_FILL = 6)] = "PREMIUM_TIER_2_GREY_FILL"),
        (i[(i.PREMIUM_TIER_2_MOD_BACKGROUND_FILL = 7)] = "PREMIUM_TIER_2_MOD_BACKGROUND_FILL"),
        i);
function h(e) {
    let { text: t, className: n, colorOptions: i = 2, icon: a, gap: l = !0 } = e;
    return (0, r.jsxs)("div", {
        className: s()(n, E.hg, {
            [E.AE]: 1 === i,
            [E.eY]: 3 === i,
            [E.rE]: 4 === i,
            [E.mY]: 5 === i,
            [E.ZC]: 6 === i,
            [E.u0]: 7 === i,
            [E.Xu]: l,
        }),
        children: [
            (0, r.jsx)(o.E, {
                variant: "text-xs/bold",
                className: s()(E.YY, {
                    [E.Zz]: 0 !== i && 2 !== i,
                    [E.oo]: 0 === i,
                    [E.oJ]: 2 === i || 6 === i,
                    [E.jc]: 7 === i,
                }),
                children: t,
            }),
            a,
        ],
    });
}
function I(e) {
    let t,
        { text: n, className: i, colorOptions: a = 2, isPillOnBorder: o = !0 } = e;
    switch (a) {
        case 1:
            t = l.A.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css;
            break;
        case 3:
            t = `url(#${c.Bp})`;
            break;
        case 4:
        case 5:
            t = `url(#${c.G5})`;
            break;
        default:
            t = "white";
    }
    return o
        ? (0, r.jsxs)("div", {
              className: s()(i, E.up),
              children: [
                  (0, r.jsx)(c.zF, { foreground: E.QX, color: t }),
                  (0, r.jsx)(c.zF, { foreground: E.J0, color: t }),
                  (0, r.jsx)(c.zF, { foreground: E.QC, color: t }),
                  (0, r.jsx)(h, { text: n, colorOptions: a }),
                  (0, r.jsx)(c.zF, { foreground: E.JF, color: t }),
                  (0, r.jsx)(c.zF, { foreground: E.Cm, color: t }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: s()(i, E.up),
              children: [
                  (0, r.jsx)(h, { text: n, colorOptions: a }),
                  (0, r.jsx)(c.zF, { foreground: E.QX, style: { marginLeft: 4, marginBottom: -6 }, color: t }),
                  (0, r.jsx)(c.zF, { foreground: E.J0, color: t }),
              ],
          });
}
function f(e, t) {
    return t === u.pe.TIER_0
        ? _.intl.string(_.t.IBYG5U)
        : e === u.PremiumTypes.TIER_0
          ? _.intl.string(_.t.qYKftX)
          : null;
}
function p(e, t, n, i, r) {
    if (null != n && (0, d.U9)(n, u.pe.TIER_2) && void 0 !== n.discount.amount)
        return e ? _.intl.string(_.t.EyjDRE) : _.intl.formatToPlainString(_.t.iiLbvu, { percent: n.discount.amount });
    if (r === u.pe.TIER_2) {
        let e = _.intl.string(_.t.IBYG5U);
        return i?.trialId === u.Dw && (e = _.intl.string(_.t.gtNqJQ)), e;
    }
    return t === u.PremiumTypes.TIER_2 ? _.intl.string(_.t.qYKftX) : e ? _.intl.string(_.t.EyjDRE) : null;
}
