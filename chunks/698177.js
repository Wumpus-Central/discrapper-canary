n.d(t, { Z: () => x }), n(388685), n(35282);
var r = n(54381),
    i = n(473749),
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
        [I, N] = i.useState(null),
        [y, S] = i.useState(null),
        C = (0, a.e7)([d.Z], () => d.Z.getCountryCode()),
        O = C.code.split(" ")[0],
        T = async () => {
            try {
                await c.Z.resendCode(e);
            } catch (e) {
                S(e.body.message);
            }
        },
        A = async () => {
            v(!0);
            try {
                let { token: t } = await c.Z.verifyPhone(O + e, s);
                N(null), S(null), b(!0), c.Z.validatePhoneForSupport(t);
            } catch (e) {
                e.body.message ? (N(null), S(e.body.message)) : (N(e.body.phone), S(e.body.code));
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
                              alpha2: C.alpha2,
                              countryCode: O,
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
                              error: y,
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
