i.d(s, { A: () => B, o: () => g });
var a = i(627968);
i(64700);
var t = i(661531),
    l = i(192308),
    n = i(821609),
    d = i(43990),
    r = i(834730),
    c = i(820081),
    o = i(792656),
    x = i(555837),
    m = i(674567),
    u = i(968671),
    h = i(652215),
    v = i(788868),
    j = i(594387),
    N = i(375708),
    f = i(576633);
let p = [j.default.HZz88k, j.default.Aau2G1, j.default["6Udfv9"]];
function g() {
    (0, l.openModalLazy)(async () => {
        let { default: e } = await Promise.all([
            i.e("45550"),
            i.e("78845"),
            i.e("17225"),
            i.e("26780"),
            i.e("51130"),
            i.e("6723"),
            i.e("7319"),
            i.e("7837"),
        ]).then(i.bind(i, 323148));
        return (s) => (0, a.jsx)(e, { ...s });
    });
}
function B(e) {
    let s,
        i,
        l,
        { partner: B } = e;
    return ((s = (0, m.V)()),
    (i = (0, u.GM)("connectionBottomBanner")),
    (l = (0, x.G)({ location: "useShouldShowCrepeConnectionBottomBanner" })),
    B === h.fg2.XBOX && i && s === m.s.NON_NITRO && l)
        ? (0, a.jsx)("div", {
              className: f.cy,
              children: (0, a.jsx)(d.N, {
                  theme: "dark",
                  children: (e) =>
                      (0, a.jsxs)("div", {
                          className: `${e} ${f.vK}`,
                          children: [
                              (0, a.jsx)("div", { className: f.JS, children: (0, a.jsx)("div", { className: f.gm }) }),
                              (0, a.jsx)("div", { className: f.Ge }),
                              (0, a.jsxs)("div", {
                                  className: f.Qs,
                                  children: [
                                      (0, a.jsxs)("div", {
                                          className: f.C,
                                          children: [
                                              (0, a.jsx)(r.E, {
                                                  variant: "text-sm/semibold",
                                                  color: "text-default",
                                                  children: N.intl.string(j.default.f1ygW4),
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: f.md,
                                                  children: p.map((e) =>
                                                      (0, a.jsxs)(
                                                          "div",
                                                          {
                                                              className: f.d_,
                                                              children: [
                                                                  (0, a.jsx)("div", {
                                                                      className: f.kf,
                                                                      children: (0, a.jsx)(c.B, {
                                                                          size: "xs",
                                                                          color: t.A.colors.ICON_SUBTLE,
                                                                      }),
                                                                  }),
                                                                  (0, a.jsx)(r.E, {
                                                                      variant: "text-xs/normal",
                                                                      color: "text-default",
                                                                      children: N.intl.string(e),
                                                                  }),
                                                              ],
                                                          },
                                                          N.intl.string(e),
                                                      ),
                                                  ),
                                              }),
                                          ],
                                      }),
                                      (0, a.jsxs)("div", {
                                          className: f.o1,
                                          children: [
                                              (0, a.jsx)("div", {
                                                  className: f.AJ,
                                                  children: (0, a.jsx)(n.$, {
                                                      variant: "secondary",
                                                      size: "sm",
                                                      text: N.intl.string(N.t.hvVgAZ),
                                                      onClick: g,
                                                  }),
                                              }),
                                              (0, a.jsx)(o.A, {
                                                  defaultTextOverride: N.intl.string(j.default.oBYFF3),
                                                  size: "sm",
                                                  subscriptionTier: v.pe.TIER_2,
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          ],
                      }),
              }),
          })
        : null;
}
