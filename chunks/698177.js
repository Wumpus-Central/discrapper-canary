n.d(t, { Z: () => x }), n(388685), n(35282);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    s = n(442837),
    a = n(481060),
    c = n(144114),
    u = n(742458),
    d = n(541692),
    h = n(952802),
    f = n(388905),
    p = n(815660),
    g = n(388032),
    m = n(149715),
    _ = n(197571);
let x = () => {
    let [e, t] = i.useState(""),
        [l, x] = i.useState(""),
        [v, E] = i.useState(!1),
        [b, j] = i.useState(!1),
        [I, N] = i.useState(null),
        [O, y] = i.useState(null),
        S = (0, s.e7)([d.Z], () => d.Z.getCountryCode()),
        C = S.code.split(" ")[0],
        Z = async () => {
            try {
                await c.Z.resendCode(e);
            } catch (e) {
                y(e.body.message);
            }
        },
        A = async () => {
            E(!0);
            try {
                let { token: t } = await c.Z.verifyPhone(C + e, l);
                N(null), y(null), j(!0), c.Z.validatePhoneForSupport(t);
            } catch (e) {
                e.body.message ? (N(null), y(e.body.message)) : (N(e.body.phone), y(e.body.code));
            } finally {
                E(!1);
            }
        },
        T = (0, r.jsxs)(f.ZP, {
            children: [
                (0, r.jsx)(f.Ee, { src: n(292824) }),
                (0, r.jsxs)(f.Dx, {
                    className: o()(_.marginTop20, m.flex, m.justifyCenter, m.alignCenter),
                    children: [
                        g.intl.string(g.t.WWzQtb),
                        (0, r.jsx)(a.owK, {
                            size: "md",
                            color: "currentColor",
                            className: _.marginLeft8,
                        }),
                    ],
                }),
            ],
        });
    return b
        ? T
        : (0, r.jsxs)(f.ZP, {
              children: [
                  (0, r.jsx)(f.Dx, { children: g.intl.string(g.t.o4JNrK) }),
                  (0, r.jsx)(f.DK, {
                      className: _.marginTop8,
                      children: g.intl.string(g.t.y0tVbm),
                  }),
                  (0, r.jsxs)(f.gO, {
                      className: _.marginTop20,
                      children: [
                          (0, r.jsx)(h.Z, {
                              label: g.intl.string(g.t.eJnn09),
                              alpha2: S.alpha2,
                              countryCode: C,
                              value: e,
                              autoComplete: "off",
                              spellCheck: "false",
                              onChange: t,
                              forceMode: u.Nz.PHONE,
                              error: I,
                          }),
                          (0, r.jsx)(f.II, {
                              className: _.marginTop20,
                              label: g.intl.string(g.t.OdzNbm),
                              value: l,
                              onChange: x,
                              maxLength: p.z,
                              error: O,
                          }),
                          (0, r.jsx)(f.zx, {
                              size: f.zx.Sizes.SMALL,
                              look: f.zx.Looks.LINK,
                              onClick: Z,
                              children: g.intl.string(g.t["5b60go"]),
                          }),
                          (0, r.jsx)(f.zx, {
                              className: _.marginTop20,
                              onClick: A,
                              submitting: v,
                              children: g.intl.string(g.t.i4jeWV),
                          }),
                      ],
                  }),
              ],
          });
};
