a.d(s, { A: () => R, n: () => A });
var i = a(477900);
a(582128);
var l = a(613412),
    t = a(646514),
    r = a(821609),
    n = a(192308),
    d = a(43990),
    c = a(834730),
    o = a(820081),
    x = a(241524),
    m = a(793574),
    N = a(688810),
    u = a(139286),
    h = a(792656),
    _ = a(377368),
    p = a(757036),
    v = a(555837),
    j = a(652215),
    T = a(682901),
    f = a(337091),
    C = a(792996),
    E = a(836800);
let O = [f.default.HZz88k, f.default.Aau2G1, f.default["6Udfv9"]];
function A() {
    (0, n.mM)(async () => {
        let { default: e } = await Promise.all([
            a.e(417867),
            a.e(43578),
            a.e(710911),
            a.e(851130),
            a.e(317225),
            a.e(126780),
            a.e(906723),
            a.e(707319),
            a.e(176005),
        ]).then(a.bind(a, 129444));
        return (s) => (0, i.jsx)(e, { ...s });
    });
}
function R(e) {
    let s,
        a,
        { partner: n } = e,
        R = ((s = (0, p.L)(T.PremiumTypes.TIER_2)), (a = (0, v.G)()), n === j.fg2.XBOX && !1 === s && a),
        k = (0, x.A)("(max-width: 485px)"),
        { analyticsLocations: y } = (0, N.Ay)(m.A.XBOX_PERKS_CONNECTION_FOOTER);
    return ((0, u.A)(
        {
            type: l.ImpressionTypes.VIEW,
            name: l.ImpressionNames.THIRD_PARTY_PARTNER_PERK,
            properties: { type: _.wX.CONNECTION_FOOTER, third_party_partner: "xbox" },
        },
        { disableTrack: !R },
    ),
    R)
        ? (0, i.jsx)(N.f5, {
              value: y,
              children: (0, i.jsx)("div", {
                  className: E.cy,
                  children: (0, i.jsx)(d.N, {
                      theme: j.NJ8.DARK,
                      children: (e) =>
                          (0, i.jsxs)("div", {
                              className: `${e} ${E.vK}`,
                              children: [
                                  (0, i.jsx)("div", {
                                      className: E.JS,
                                      children: (0, i.jsx)("div", { className: E.gm }),
                                  }),
                                  (0, i.jsx)("div", { className: E.Ge }),
                                  (0, i.jsxs)("div", {
                                      className: E.Qs,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: E.C,
                                              children: [
                                                  (0, i.jsx)(c.E, {
                                                      variant: "body-sm/semibold",
                                                      color: "text-default",
                                                      children: C.intl.string(f.default.f1ygW4),
                                                  }),
                                                  (0, i.jsx)("div", {
                                                      className: E.md,
                                                      children: O.map((e) =>
                                                          (0, i.jsxs)(
                                                              "div",
                                                              {
                                                                  className: E.d_,
                                                                  children: [
                                                                      (0, i.jsx)("div", {
                                                                          className: E.kf,
                                                                          children: (0, i.jsx)(
                                                                              o.CheckmarkSmallBoldIcon,
                                                                              {
                                                                                  size: "xs",
                                                                                  color: t.A.colors.ICON_SUBTLE,
                                                                              },
                                                                          ),
                                                                      }),
                                                                      (0, i.jsx)(c.E, {
                                                                          variant: "body-xs/normal",
                                                                          color: "text-default",
                                                                          children: C.intl.string(e),
                                                                      }),
                                                                  ],
                                                              },
                                                              C.intl.string(e),
                                                          ),
                                                      ),
                                                  }),
                                              ],
                                          }),
                                          (0, i.jsxs)("div", {
                                              className: E.o1,
                                              children: [
                                                  (0, i.jsx)("div", {
                                                      className: E.AJ,
                                                      children: (0, i.jsx)(r.$, {
                                                          variant: "secondary",
                                                          size: "sm",
                                                          text: C.intl.string(C.t.hvVgAZ),
                                                          onClick: A,
                                                      }),
                                                  }),
                                                  (0, i.jsx)("div", {
                                                      className: E.lI,
                                                      children: (0, i.jsx)(h.A, {
                                                          defaultTextOverride: C.intl.string(f.default.oBYFF3),
                                                          size: "sm",
                                                          fullWidth: k,
                                                          subscriptionTier: T.pe.TIER_2,
                                                      }),
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                  }),
              }),
          })
        : null;
}
