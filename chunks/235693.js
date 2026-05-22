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
    N = a(793574),
    m = a(688810),
    u = a(139286),
    h = a(792656),
    _ = a(346017),
    p = a(555837),
    v = a(674567),
    j = a(968671),
    f = a(652215),
    O = a(788868),
    T = a(594387),
    C = a(375708),
    E = a(576633);
let A = [T.default.HZz88k, T.default.Aau2G1, T.default["6Udfv9"]];
function R() {
    (0, l.openModalLazy)(async () => {
        let { default: e } = await Promise.all([
            a.e("10448"),
            a.e("78845"),
            a.e("17225"),
            a.e("51130"),
            a.e("26780"),
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
        I =
            ((s = (0, v.V)()),
            (a = (0, j.GM)("connectionBottomBanner")),
            (l = (0, p.G)({ location: "useShouldShowCrepeConnectionBottomBanner" })),
            k === f.fg2.XBOX && a && s === v.s.NON_NITRO && l),
        y = (0, x.A)("(max-width: 485px)"),
        { analyticsLocations: B } = (0, m.Ay)(N.A.XBOX_PERKS_CONNECTION_FOOTER);
    return ((0, u.A)(
        {
            type: i.ImpressionTypes.VIEW,
            name: i.ImpressionNames.THIRD_PARTY_PARTNER_PERK,
            properties: { type: _.wX.CONNECTION_FOOTER, third_party_partner: _.NB },
        },
        { disableTrack: !I },
    ),
    I)
        ? (0, t.jsx)(m.f5, {
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
                                                      children: C.intl.string(T.default.f1ygW4),
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
                                          (0, t.jsxs)("div", {
                                              className: E.o1,
                                              children: [
                                                  (0, t.jsx)("div", {
                                                      className: E.AJ,
                                                      children: (0, t.jsx)(r.$, {
                                                          variant: "secondary",
                                                          size: "sm",
                                                          text: C.intl.string(C.t.hvVgAZ),
                                                          onClick: R,
                                                      }),
                                                  }),
                                                  (0, t.jsx)("div", {
                                                      className: E.lI,
                                                      children: (0, t.jsx)(h.A, {
                                                          defaultTextOverride: C.intl.string(T.default.oBYFF3),
                                                          size: "sm",
                                                          fullWidth: y,
                                                          subscriptionTier: O.pe.TIER_2,
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
