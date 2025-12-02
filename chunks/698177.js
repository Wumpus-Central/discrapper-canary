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
    p = n(815660),
    m = n(388032),
    f = n(149715),
    _ = n(197571);
let x = () => {
    let [e, t] = i.useState(""),
        [s, x] = i.useState(""),
        [E, v] = i.useState(!1),
        [b, j] = i.useState(!1),
        [I, y] = i.useState(null),
        [S, O] = i.useState(null),
        N = (0, a.e7)([d.Z], () => d.Z.getCountryCode()),
        C = N.code.split(" ")[0],
        T = async () => {
            try {
                await c.Z.resendCode(e);
            } catch (e) {
                O(e.body.message);
            }
        },
        A = async () => {
            v(!0);
            try {
                let { token: t } = await c.Z.verifyPhone(C + e, s);
                y(null), O(null), j(!0), c.Z.validatePhoneForSupport(t);
            } catch (e) {
                e.body.message ? (y(null), O(e.body.message)) : (y(e.body.phone), O(e.body.code));
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
                        m.intl.string(m.t.WWzQta),
                        (0, r.jsx)(o.owK, {
                            size: "md",
                            color: "currentColor",
                            className: _.marginLeft8,
                        }),
                    ],
                }),
            ],
        });
    return b
        ? Z
        : (0, r.jsxs)(g.ZP, {
              children: [
                  (0, r.jsx)(g.Dx, { children: m.intl.string(m.t.o4JNrO) }),
                  (0, r.jsx)(g.DK, {
                      className: _.marginTop8,
                      children: m.intl.string(m.t.y0tVbq),
                  }),
                  (0, r.jsxs)(g.gO, {
                      className: _.marginTop20,
                      children: [
                          (0, r.jsx)(h.Z, {
                              label: m.intl.string(m.t["eJnn0+"]),
                              alpha2: N.alpha2,
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
                              label: m.intl.string(m.t.OdzNbm),
                              value: s,
                              onChange: x,
                              maxLength: p.z,
                              error: S,
                          }),
                          (0, r.jsx)(o.Avr, {
                              text: m.intl.string(m.t["5b60gi"]),
                              onClick: T,
                          }),
                          (0, r.jsx)("div", {
                              className: _.marginTop20,
                              children: (0, r.jsx)(o.Button, {
                                  text: m.intl.string(m.t.i4jeWR),
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
