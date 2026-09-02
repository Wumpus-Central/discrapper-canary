a.d(s, { A: () => R, n: () => k });
var t = a(477900);
a(582128);
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
    _ = a(377368),
    p = a(757036),
    v = a(555837),
    j = a(114516),
    T = a(652215),
    f = a(202541),
    O = a(763430),
    C = a(375708),
    E = a(836800);
let A = [O.default.HZz88k, O.default.Aau2G1, O.default["6Udfv9"]];
function k() {
    (0, l.openModalLazy)(async () => {
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
        l,
        { partner: R } = e,
        y =
            ((s = (0, p.L)(f.PremiumTypes.TIER_2)),
            (a = (0, j.mO)("connectionBottomBanner")),
            (l = (0, v.G)({ location: "useShouldShowXboxGamePassPerksConnectionBanner" })),
            R === T.fg2.XBOX && a && !1 === s && l),
        I = (0, x.A)("(max-width: 485px)"),
        { analyticsLocations: b } = (0, u.Ay)(m.A.XBOX_PERKS_CONNECTION_FOOTER);
    return ((0, N.A)(
        {
            type: i.ImpressionTypes.VIEW,
            name: i.ImpressionNames.THIRD_PARTY_PARTNER_PERK,
            properties: { type: _.wX.CONNECTION_FOOTER, third_party_partner: _.NB },
        },
        { disableTrack: !y },
    ),
    y)
        ? (0, t.jsx)(u.f5, {
              value: b,
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
                                                      children: C.intl.string(O.default.f1ygW4),
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
                                                          onClick: k,
                                                      }),
                                                  }),
                                                  (0, t.jsx)("div", {
                                                      className: E.lI,
                                                      children: (0, t.jsx)(h.A, {
                                                          defaultTextOverride: C.intl.string(O.default.oBYFF3),
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
