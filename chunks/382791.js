n.d(t, {
    A1: () => g,
    Cy: () => h,
    VE: () => f,
    mn: () => p,
    y_: () => m
});
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(692547),
    s = n(481060),
    l = n(104494),
    c = n(63802),
    u = n(474936),
    d = n(388032),
    _ = n(781793),
    f = (function (e) {
        return ((e[(e.PREMIUM_TIER_0_WHITE_FILL = 0)] = 'PREMIUM_TIER_0_WHITE_FILL'), (e[(e.PREMIUM_TIER_0_GRADIENT_FILL = 1)] = 'PREMIUM_TIER_0_GRADIENT_FILL'), (e[(e.PREMIUM_TIER_2_WHITE_FILL = 2)] = 'PREMIUM_TIER_2_WHITE_FILL'), (e[(e.PREMIUM_TIER_2_NEW_GRADIENT_FILL = 3)] = 'PREMIUM_TIER_2_NEW_GRADIENT_FILL'), (e[(e.PREMIUM_TIER_2_OLD_GRADIENT_FILL = 4)] = 'PREMIUM_TIER_2_OLD_GRADIENT_FILL'), (e[(e.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE = 5)] = 'PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE'), (e[(e.PREMIUM_TIER_2_GREY_FILL = 6)] = 'PREMIUM_TIER_2_GREY_FILL'), e);
    })({});
function p(e) {
    let { text: t, className: n, colorOptions: i = 2, icon: o, gap: l = !0 } = e;
    return (0, r.jsxs)('div', {
        className: a()(n, _.freeTrialPill, {
            [_.freeTrialPillTier0GradientFill]: 1 === i,
            [_.freeTrialPillTier2GradientFill]: 3 === i,
            [_.freeTrialPillTier2OldGradientFill]: 4 === i,
            [_.lightBackgroundPill]: 5 === i,
            [_.greyBackgroundPill]: 6 === i,
            [_.freeTrialPillGap]: l
        }),
        children: [
            (0, r.jsx)(s.Text, {
                variant: 'text-xs/bold',
                className: a()(_.freeTrialPillText, {
                    [_.freeTrialPillTextInverted]: 0 !== i && 2 !== i,
                    [_.freeTrialPillTextTier0]: 0 === i,
                    [_.freeTrialPillTextTier2]: 2 === i || 6 === i
                }),
                children: t
            }),
            o
        ]
    });
}
function h(e) {
    let t,
        { text: n, className: i, colorOptions: s = 2, isPillOnBorder: l = !0 } = e;
    switch (s) {
        case 1:
            t = o.Z.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css;
            break;
        case 3:
            t = 'url(#'.concat(c.l_, ')');
            break;
        case 4:
        case 5:
            t = 'url(#'.concat(c.Qi, ')');
            break;
        default:
            t = 'white';
    }
    return l
        ? (0, r.jsxs)('div', {
              className: a()(i, _.freeTrialPillWithSparkles),
              children: [
                  (0, r.jsx)(c.R9, {
                      foreground: _.sparkleStar1,
                      color: t
                  }),
                  (0, r.jsx)(c.R9, {
                      foreground: _.sparkleStar2,
                      color: t
                  }),
                  (0, r.jsx)(c.R9, {
                      foreground: _.sparkleStar3,
                      color: t
                  }),
                  (0, r.jsx)(p, {
                      text: n,
                      colorOptions: s
                  }),
                  (0, r.jsx)(c.R9, {
                      foreground: _.sparkleStar4,
                      color: t
                  }),
                  (0, r.jsx)(c.R9, {
                      foreground: _.sparkleStar5,
                      color: t
                  })
              ]
          })
        : (0, r.jsxs)('div', {
              className: a()(i, _.freeTrialPillWithSparkles),
              children: [
                  (0, r.jsx)(p, {
                      text: n,
                      colorOptions: s
                  }),
                  (0, r.jsx)(c.R9, {
                      foreground: _.sparkleStar1,
                      style: {
                          marginLeft: 4,
                          marginBottom: -6
                      },
                      color: t
                  }),
                  (0, r.jsx)(c.R9, {
                      foreground: _.sparkleStar2,
                      color: t
                  })
              ]
          });
}
function m(e, t) {
    return t === u.Si.TIER_0 ? d.intl.string(d.t.IBYG5e) : e === u.p9.TIER_0 ? d.intl.string(d.t.qYKftb) : null;
}
function g(e, t, n, r, i) {
    if (null != n && (0, l.Wp)(n, u.Si.TIER_2) && void 0 !== n.discount.amount) return e ? d.intl.string(d.t.EyjDRE) : d.intl.formatToPlainString(d.t.iiLbvr, { percent: n.discount.amount });
    if (i === u.Si.TIER_2) {
        let e = d.intl.string(d.t.IBYG5e);
        return ((null == r ? void 0 : r.trial_id) === u.a7 && (e = d.intl.string(d.t.gtNqJS)), e);
    }
    return t === u.p9.TIER_2 ? d.intl.string(d.t.qYKftb) : e ? d.intl.string(d.t.EyjDRE) : null;
}
