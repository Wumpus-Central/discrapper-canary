n.d(t, { Z: () => x }), n(388685), n(35282);
var r = n(951288),
    i = n(647438),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(481060),
    c = n(144114),
    u = n(742458),
    d = n(541692),
    h = n(952802),
    g = n(388905),
    m = n(815660),
    p = n(388032),
    f = n(149715),
    _ = n(197571);
let x = () => {
    let [e, t] = i.useState(""),
        [s, x] = i.useState(""),
        [E, v] = i.useState(!1),
        [j, b] = i.useState(!1),
        [I, y] = i.useState(null),
        [S, N] = i.useState(null),
        O = (0, a.e7)([d.Z], () => d.Z.getCountryCode()),
        C = O.code.split(" ")[0],
        T = async () => {
            try {
                await c.Z.resendCode(e);
            } catch (e) {
                N(e.body.message);
            }
        },
        A = async () => {
            v(!0);
            try {
                let { token: t } = await c.Z.verifyPhone(C + e, s);
                y(null), N(null), b(!0), c.Z.validatePhoneForSupport(t);
            } catch (e) {
                e.body.message ? (y(null), N(e.body.message)) : (y(e.body.phone), N(e.body.code));
            } finally {
                v(!1);
            }
        },
        Z = (0, r.jsxs)(g.ZP, {
            children: [
                (0, r.jsx)(g.Ee, { src: n(292824) }),
                (0, r.jsxs)(g.Dx, {
                    className: l()(_.marginTop20, f.flex, f.justifyCenter, f.alignCenter),
                    children: [
                        p.intl.string(p.t.WWzQta),
                        (0, r.jsx)(o.owK, {
                            size: "md",
                            color: "currentColor",
                            className: _.marginLeft8,
                        }),
                    ],
                }),
            ],
        });
    return j
        ? Z
        : (0, r.jsxs)(g.ZP, {
              children: [
                  (0, r.jsx)(g.Dx, { children: p.intl.string(p.t.o4JNrO) }),
                  (0, r.jsx)(g.DK, {
                      className: _.marginTop8,
                      children: p.intl.string(p.t.y0tVbq),
                  }),
                  (0, r.jsxs)(g.gO, {
                      className: _.marginTop20,
                      children: [
                          (0, r.jsx)(h.Z, {
                              label: p.intl.string(p.t["eJnn0+"]),
                              alpha2: O.alpha2,
                              countryCode: C,
                              value: e,
                              autoComplete: "off",
                              spellCheck: "false",
                              onChange: t,
                              forceMode: u.Nz.PHONE,
                              error: I,
                          }),
                          (0, r.jsx)(g.II, {
                              className: _.marginTop20,
                              label: p.intl.string(p.t.OdzNbm),
                              value: s,
                              onChange: x,
                              maxLength: m.z,
                              error: S,
                          }),
                          (0, r.jsx)(o.Avr, {
                              text: p.intl.string(p.t["5b60gi"]),
                              onClick: T,
                          }),
                          (0, r.jsx)("div", {
                              className: _.marginTop20,
                              children: (0, r.jsx)(o.Button, {
                                  text: p.intl.string(p.t.i4jeWR),
                                  fullWidth: !0,
                                  onClick: A,
                                  loading: E,
                              }),
                          }),
                      ],
                  }),
              ],
          });
};
