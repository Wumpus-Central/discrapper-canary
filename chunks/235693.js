i.d(s, { A: () => k, o: () => B });
var a = i(627968);
i(64700);
var l = i(661531),
    t = i(192308),
    n = i(821609),
    d = i(43990),
    r = i(834730),
    c = i(820081),
    o = i(241524),
    x = i(792656),
    h = i(555837),
    m = i(674567),
    u = i(968671),
    v = i(652215),
    j = i(788868),
    N = i(594387),
    f = i(375708),
    p = i(576633);
let g = [N.default.HZz88k, N.default.Aau2G1, N.default["6Udfv9"]];
function B() {
    (0, t.openModalLazy)(async () => {
        let { default: e } = await Promise.all([
            i.e("44657"),
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
function k(e) {
    let s,
        i,
        t,
        { partner: k } = e,
        A =
            ((s = (0, m.V)()),
            (i = (0, u.GM)("connectionBottomBanner")),
            (t = (0, h.G)({ location: "useShouldShowCrepeConnectionBottomBanner" })),
            k === v.fg2.XBOX && i && s === m.s.NON_NITRO && t),
        C = (0, o.A)("(max-width: 485px)");
    return A
        ? (0, a.jsx)("div", {
              className: p.cy,
              children: (0, a.jsx)(d.N, {
                  theme: "dark",
                  children: (e) =>
                      (0, a.jsxs)("div", {
                          className: `${e} ${p.vK}`,
                          children: [
                              (0, a.jsx)("div", { className: p.JS, children: (0, a.jsx)("div", { className: p.gm }) }),
                              (0, a.jsx)("div", { className: p.Ge }),
                              (0, a.jsxs)("div", {
                                  className: p.Qs,
                                  children: [
                                      (0, a.jsxs)("div", {
                                          className: p.C,
                                          children: [
                                              (0, a.jsx)(r.E, {
                                                  variant: "text-sm/semibold",
                                                  color: "text-default",
                                                  children: f.intl.string(N.default.f1ygW4),
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: p.md,
                                                  children: g.map((e) =>
                                                      (0, a.jsxs)(
                                                          "div",
                                                          {
                                                              className: p.d_,
                                                              children: [
                                                                  (0, a.jsx)("div", {
                                                                      className: p.kf,
                                                                      children: (0, a.jsx)(c.B, {
                                                                          size: "xs",
                                                                          color: l.A.colors.ICON_SUBTLE,
                                                                      }),
                                                                  }),
                                                                  (0, a.jsx)(r.E, {
                                                                      variant: "text-xs/normal",
                                                                      color: "text-default",
                                                                      children: f.intl.string(e),
                                                                  }),
                                                              ],
                                                          },
                                                          f.intl.string(e),
                                                      ),
                                                  ),
                                              }),
                                          ],
                                      }),
                                      (0, a.jsxs)("div", {
                                          className: p.o1,
                                          children: [
                                              (0, a.jsx)("div", {
                                                  className: p.AJ,
                                                  children: (0, a.jsx)(n.$, {
                                                      variant: "secondary",
                                                      size: "sm",
                                                      text: f.intl.string(f.t.hvVgAZ),
                                                      onClick: B,
                                                  }),
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: p.lI,
                                                  children: (0, a.jsx)(x.A, {
                                                      defaultTextOverride: f.intl.string(N.default.oBYFF3),
                                                      size: "sm",
                                                      fullWidth: C,
                                                      subscriptionTier: j.pe.TIER_2,
                                                  }),
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
