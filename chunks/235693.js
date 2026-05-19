a.d(s, { A: () => B, o: () => g });
var i = a(627968);
a(64700);
var t = a(661531),
    n = a(192308),
    l = a(821609),
    d = a(43990),
    r = a(834730),
    c = a(820081),
    o = a(792656),
    x = a(555837),
    h = a(674567),
    m = a(968671),
    u = a(652215),
    v = a(788868),
    j = a(594387),
    N = a(375708),
    f = a(576633);
let p = [j.default.HZz88k, j.default.Aau2G1, j.default["6Udfv9"]];
function g() {
    (0, n.openModalLazy)(async () => {
        let { default: e } = await Promise.all([
            a.e("45550"),
            a.e("78845"),
            a.e("17225"),
            a.e("26780"),
            a.e("51130"),
            a.e("6723"),
            a.e("7319"),
            a.e("7837"),
        ]).then(a.bind(a, 323148));
        return (s) => (0, i.jsx)(e, { ...s });
    });
}
function B(e) {
    let s,
        a,
        n,
        { partner: B } = e;
    return ((s = (0, h.V)()),
    (a = (0, m.GM)("connectionBottomBanner")),
    (n = (0, x.G)("useShouldShowCrepeConnectionBottomBanner")),
    B === u.fg2.XBOX && a && s === h.s.NON_NITRO && n)
        ? (0, i.jsx)("div", {
              className: f.cy,
              children: (0, i.jsx)(d.N, {
                  theme: "dark",
                  children: (e) =>
                      (0, i.jsxs)("div", {
                          className: `${e} ${f.vK}`,
                          children: [
                              (0, i.jsx)("div", { className: f.JS, children: (0, i.jsx)("div", { className: f.gm }) }),
                              (0, i.jsx)("div", { className: f.Ge }),
                              (0, i.jsxs)("div", {
                                  className: f.Qs,
                                  children: [
                                      (0, i.jsxs)("div", {
                                          className: f.C,
                                          children: [
                                              (0, i.jsx)(r.E, {
                                                  variant: "text-sm/semibold",
                                                  color: "text-default",
                                                  children: N.intl.string(j.default.f1ygW4),
                                              }),
                                              (0, i.jsx)("div", {
                                                  className: f.md,
                                                  children: p.map((e) =>
                                                      (0, i.jsxs)(
                                                          "div",
                                                          {
                                                              className: f.d_,
                                                              children: [
                                                                  (0, i.jsx)("div", {
                                                                      className: f.kf,
                                                                      children: (0, i.jsx)(c.B, {
                                                                          size: "xs",
                                                                          color: t.A.colors.ICON_SUBTLE,
                                                                      }),
                                                                  }),
                                                                  (0, i.jsx)(r.E, {
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
                                      (0, i.jsxs)("div", {
                                          className: f.o1,
                                          children: [
                                              (0, i.jsx)("div", {
                                                  className: f.AJ,
                                                  children: (0, i.jsx)(l.$, {
                                                      variant: "secondary",
                                                      size: "sm",
                                                      text: N.intl.string(N.t.hvVgAZ),
                                                      onClick: g,
                                                  }),
                                              }),
                                              (0, i.jsx)(o.A, {
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
