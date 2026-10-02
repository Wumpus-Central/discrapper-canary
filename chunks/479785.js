a.d(s, { A: () => R, n: () => C });
var i = a(477900);
a(582128);
var t = a(562708),
    l = a(661531),
    r = a(821609),
    n = a(192308),
    d = a(43990),
    c = a(834730),
    o = a(820081),
    x = a(241524),
    N = a(793574),
    m = a(688810),
    u = a(139286),
    _ = a(792656),
    h = a(377368),
    p = a(757036),
    v = a(555837),
    j = a(652215),
    T = a(202541),
    f = a(181666),
    E = a(375708),
    O = a(836800);
let A = [f.default.HZz88k, f.default.Aau2G1, f.default["6Udfv9"]];
function C() {
    (0, n.openModalLazy)(async () => {
        let { default: e } = await Promise.all([
            a.e("417867"),
            a.e("43578"),
            a.e("851130"),
            a.e("317225"),
            a.e("126780"),
            a.e("906723"),
            a.e("707319"),
            a.e("258780"),
        ]).then(a.bind(a, 429527));
        return (s) => (0, i.jsx)(e, { ...s });
    });
}
function R(e) {
    let s,
        a,
        { partner: n } = e,
        R = ((s = (0, p.L)(T.PremiumTypes.TIER_2)), (a = (0, v.G)()), n === j.fg2.XBOX && !1 === s && a),
        k = (0, x.A)("(max-width: 485px)"),
        { analyticsLocations: y } = (0, m.Ay)(N.A.XBOX_PERKS_CONNECTION_FOOTER);
    return ((0, u.A)(
        {
            type: t.ImpressionTypes.VIEW,
            name: t.ImpressionNames.THIRD_PARTY_PARTNER_PERK,
            properties: { type: h.wX.CONNECTION_FOOTER, third_party_partner: h.NB },
        },
        { disableTrack: !R },
    ),
    R)
        ? (0, i.jsx)(m.f5, {
              value: y,
              children: (0, i.jsx)("div", {
                  className: O.cy,
                  children: (0, i.jsx)(d.N, {
                      theme: j.NJ8.DARK,
                      children: (e) =>
                          (0, i.jsxs)("div", {
                              className: `${e} ${O.vK}`,
                              children: [
                                  (0, i.jsx)("div", {
                                      className: O.JS,
                                      children: (0, i.jsx)("div", { className: O.gm }),
                                  }),
                                  (0, i.jsx)("div", { className: O.Ge }),
                                  (0, i.jsxs)("div", {
                                      className: O.Qs,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: O.C,
                                              children: [
                                                  (0, i.jsx)(c.E, {
                                                      variant: "text-sm/semibold",
                                                      color: "text-default",
                                                      children: E.intl.string(f.default.f1ygW4),
                                                  }),
                                                  (0, i.jsx)("div", {
                                                      className: O.md,
                                                      children: A.map((e) =>
                                                          (0, i.jsxs)(
                                                              "div",
                                                              {
                                                                  className: O.d_,
                                                                  children: [
                                                                      (0, i.jsx)("div", {
                                                                          className: O.kf,
                                                                          children: (0, i.jsx)(o.B, {
                                                                              size: "xs",
                                                                              color: l.A.colors.ICON_SUBTLE,
                                                                          }),
                                                                      }),
                                                                      (0, i.jsx)(c.E, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-default",
                                                                          children: E.intl.string(e),
                                                                      }),
                                                                  ],
                                                              },
                                                              E.intl.string(e),
                                                          ),
                                                      ),
                                                  }),
                                              ],
                                          }),
                                          (0, i.jsxs)("div", {
                                              className: O.o1,
                                              children: [
                                                  (0, i.jsx)("div", {
                                                      className: O.AJ,
                                                      children: (0, i.jsx)(r.$, {
                                                          variant: "secondary",
                                                          size: "sm",
                                                          text: E.intl.string(E.t.hvVgAZ),
                                                          onClick: C,
                                                      }),
                                                  }),
                                                  (0, i.jsx)("div", {
                                                      className: O.lI,
                                                      children: (0, i.jsx)(_.A, {
                                                          defaultTextOverride: E.intl.string(f.default.oBYFF3),
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
