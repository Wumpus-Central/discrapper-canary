a.d(s, { A: () => R, n: () => A });
var t = a(477900);
a(582128);
var i = a(562708),
    l = a(661531),
    n = a(192308),
    r = a(821609),
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
    T = a(202541),
    f = a(181666),
    O = a(375708),
    C = a(836800);
let E = [f.default.HZz88k, f.default.Aau2G1, f.default["6Udfv9"]];
function A() {
    (0, n.openModalLazy)(async () => {
        let { default: e } = await Promise.all([
            a.e("556298"),
            a.e("43578"),
            a.e("317225"),
            a.e("851130"),
            a.e("126780"),
            a.e("906723"),
            a.e("707319"),
            a.e("258780"),
        ]).then(a.bind(a, 429527));
        return (s) => (0, t.jsx)(e, { ...s });
    });
}
function R(e) {
    let s,
        a,
        { partner: n } = e,
        R =
            ((s = (0, p.L)(T.PremiumTypes.TIER_2)),
            (a = (0, v.G)({ location: "useShouldShowXboxGamePassPerksConnectionBanner" })),
            n === j.fg2.XBOX && !1 === s && a),
        k = (0, x.A)("(max-width: 485px)"),
        { analyticsLocations: y } = (0, N.Ay)(m.A.XBOX_PERKS_CONNECTION_FOOTER);
    return ((0, u.A)(
        {
            type: i.ImpressionTypes.VIEW,
            name: i.ImpressionNames.THIRD_PARTY_PARTNER_PERK,
            properties: { type: _.wX.CONNECTION_FOOTER, third_party_partner: _.NB },
        },
        { disableTrack: !R },
    ),
    R)
        ? (0, t.jsx)(N.f5, {
              value: y,
              children: (0, t.jsx)("div", {
                  className: C.cy,
                  children: (0, t.jsx)(d.N, {
                      theme: j.NJ8.DARK,
                      children: (e) =>
                          (0, t.jsxs)("div", {
                              className: `${e} ${C.vK}`,
                              children: [
                                  (0, t.jsx)("div", {
                                      className: C.JS,
                                      children: (0, t.jsx)("div", { className: C.gm }),
                                  }),
                                  (0, t.jsx)("div", { className: C.Ge }),
                                  (0, t.jsxs)("div", {
                                      className: C.Qs,
                                      children: [
                                          (0, t.jsxs)("div", {
                                              className: C.C,
                                              children: [
                                                  (0, t.jsx)(c.E, {
                                                      variant: "text-sm/semibold",
                                                      color: "text-default",
                                                      children: O.intl.string(f.default.f1ygW4),
                                                  }),
                                                  (0, t.jsx)("div", {
                                                      className: C.md,
                                                      children: E.map((e) =>
                                                          (0, t.jsxs)(
                                                              "div",
                                                              {
                                                                  className: C.d_,
                                                                  children: [
                                                                      (0, t.jsx)("div", {
                                                                          className: C.kf,
                                                                          children: (0, t.jsx)(o.B, {
                                                                              size: "xs",
                                                                              color: l.A.colors.ICON_SUBTLE,
                                                                          }),
                                                                      }),
                                                                      (0, t.jsx)(c.E, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-default",
                                                                          children: O.intl.string(e),
                                                                      }),
                                                                  ],
                                                              },
                                                              O.intl.string(e),
                                                          ),
                                                      ),
                                                  }),
                                              ],
                                          }),
                                          (0, t.jsxs)("div", {
                                              className: C.o1,
                                              children: [
                                                  (0, t.jsx)("div", {
                                                      className: C.AJ,
                                                      children: (0, t.jsx)(r.$, {
                                                          variant: "secondary",
                                                          size: "sm",
                                                          text: O.intl.string(O.t.hvVgAZ),
                                                          onClick: A,
                                                      }),
                                                  }),
                                                  (0, t.jsx)("div", {
                                                      className: C.lI,
                                                      children: (0, t.jsx)(h.A, {
                                                          defaultTextOverride: O.intl.string(f.default.oBYFF3),
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
