n.d(t, { Z: () => _ }), n(388685), n(35282);
var r = n(54381),
    i = n(473749),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(144114),
    u = n(742458),
    d = n(541692),
    h = n(952802),
    f = n(388905),
    g = n(815660),
    m = n(388032),
    p = n(727829),
    x = n(478411);
let _ = () => {
    let [e, t] = i.useState(""),
        [s, _] = i.useState(""),
        [E, v] = i.useState(!1),
        [b, j] = i.useState(!1),
        [I, N] = i.useState(null),
        [y, S] = i.useState(null),
        C = (0, l.e7)([d.Z], () => d.Z.getCountryCode()),
        T = C.code.split(" ")[0],
        O = async () => {
            try {
                await c.Z.resendCode(e);
            } catch (e) {
                S(e.body.message);
            }
        },
        A = async () => {
            v(!0);
            try {
                let { token: t } = await c.Z.verifyPhone(T + e, s);
                N(null), S(null), j(!0), c.Z.validatePhoneForSupport(t);
            } catch (e) {
                e.body.message ? (N(null), S(e.body.message)) : (N(e.body.phone), S(e.body.code));
            } finally {
                v(!1);
            }
        },
        Z = (0, r.jsxs)(f.ZP, {
            children: [
                (0, r.jsx)(f.Ee, { src: n(292824) }),
                (0, r.jsxs)(f.Dx, {
                    className: a()(x.marginTop20, p.flex, p.justifyCenter, p.alignCenter),
                    children: [
                        m.intl.string(m.t.WWzQta),
                        (0, r.jsx)(o.owK, {
                            size: "md",
                            color: "currentColor",
                            className: x.marginLeft8,
                        }),
                    ],
                }),
            ],
        });
    return b
        ? Z
        : (0, r.jsxs)(f.ZP, {
              children: [
                  (0, r.jsx)(f.Dx, { children: m.intl.string(m.t.o4JNrO) }),
                  (0, r.jsx)(f.DK, {
                      className: x.marginTop8,
                      children: m.intl.string(m.t.y0tVbq),
                  }),
                  (0, r.jsxs)(f.gO, {
                      className: x.marginTop20,
                      children: [
                          (0, r.jsx)(h.Z, {
                              label: m.intl.string(m.t["eJnn0+"]),
                              alpha2: C.alpha2,
                              countryCode: T,
                              value: e,
                              autoComplete: "off",
                              spellCheck: "false",
                              onChange: t,
                              forceMode: u.Nz.PHONE,
                              error: I,
                          }),
                          (0, r.jsx)(f.II, {
                              className: x.marginTop20,
                              label: m.intl.string(m.t.OdzNbm),
                              value: s,
                              onChange: _,
                              maxLength: g.z,
                              error: y,
                          }),
                          (0, r.jsx)(o.Avr, {
                              text: m.intl.string(m.t["5b60gi"]),
                              onClick: O,
                          }),
                          (0, r.jsx)("div", {
                              className: x.marginTop20,
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
