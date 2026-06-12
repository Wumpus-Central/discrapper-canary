a.d(s, { A: () => k, o: () => R });
var t = a(627968);
a(64700);
var i = a(562708),
    n = a(661531),
    l = a(192308),
    r = a(821609),
    c = a(43990),
    d = a(834730),
    o = a(820081),
    x = a(241524),
    m = a(793574),
    u = a(688810),
    N = a(139286),
    h = a(792656),
    p = a(346017),
    _ = a(757036),
    v = a(555837),
    j = a(968671),
    T = a(652215),
    f = a(788868),
    C = a(594387),
    O = a(375708),
    E = a(576633);
let A = [C.default.HZz88k, C.default.Aau2G1, C.default["6Udfv9"]];
function R() {
    (0, l.openModalLazy)(async () => {
        let { default: e } = await Promise.all([
            a.e("10448"),
            a.e("78845"),
            a.e("17225"),
            a.e("26780"),
            a.e("51130"),
            a.e("6723"),
            a.e("7319"),
            a.e("7837"),
        ]).then(a.bind(a, 323148));
        return (s) => (0, t.jsx)(e, { ...s });
    });
}
function k(e) {
    let s,
        a,
        l,
        { partner: k } = e,
        y =
            ((s = (0, _.L)(f.PremiumTypes.TIER_2)),
            (a = (0, j.GM)("connectionBottomBanner")),
            (l = (0, v.G)({ location: "useShouldShowCrepeConnectionBottomBanner" })),
            k === T.fg2.XBOX && a && !1 === s && l),
        I = (0, x.A)("(max-width: 485px)"),
        { analyticsLocations: B } = (0, u.Ay)(m.A.XBOX_PERKS_CONNECTION_FOOTER);
    return ((0, N.A)(
        {
            type: i.ImpressionTypes.VIEW,
            name: i.ImpressionNames.THIRD_PARTY_PARTNER_PERK,
            properties: { type: p.wX.CONNECTION_FOOTER, third_party_partner: p.NB },
        },
        { disableTrack: !y },
    ),
    y)
        ? (0, t.jsx)(u.f5, {
              value: B,
              children: (0, t.jsx)("div", {
                  className: E.cy,
                  children: (0, t.jsx)(c.N, {
                      theme: "dark",
                      children: (e) =>
                          (0, t.jsxs)("div", {
                              className: `${e} ${E.vK}`,
                              children: [
                                  (0, t.jsx)("div", {
                                      className: E.JS,
                                      children: (0, t.jsx)("div", { className: E.gm }),
                                  }),
                                  (0, t.jsx)("div", { className: E.Ge }),
                                  (0, t.jsxs)("div", {
                                      className: E.Qs,
                                      children: [
                                          (0, t.jsxs)("div", {
                                              className: E.C,
                                              children: [
                                                  (0, t.jsx)(d.E, {
                                                      variant: "text-sm/semibold",
                                                      color: "text-default",
                                                      children: O.intl.string(C.default.f1ygW4),
                                                  }),
                                                  (0, t.jsx)("div", {
                                                      className: E.md,
                                                      children: A.map((e) =>
                                                          (0, t.jsxs)(
                                                              "div",
                                                              {
                                                                  className: E.d_,
                                                                  children: [
                                                                      (0, t.jsx)("div", {
                                                                          className: E.kf,
                                                                          children: (0, t.jsx)(o.B, {
                                                                              size: "xs",
                                                                              color: n.A.colors.ICON_SUBTLE,
                                                                          }),
                                                                      }),
                                                                      (0, t.jsx)(d.E, {
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
                                              className: E.o1,
                                              children: [
                                                  (0, t.jsx)("div", {
                                                      className: E.AJ,
                                                      children: (0, t.jsx)(r.$, {
                                                          variant: "secondary",
                                                          size: "sm",
                                                          text: O.intl.string(O.t.hvVgAZ),
                                                          onClick: R,
                                                      }),
                                                  }),
                                                  (0, t.jsx)("div", {
                                                      className: E.lI,
                                                      children: (0, t.jsx)(h.A, {
                                                          defaultTextOverride: O.intl.string(C.default.oBYFF3),
                                                          size: "sm",
                                                          fullWidth: I,
                                                          subscriptionTier: f.pe.TIER_2,
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
