n.d(t, { Z: () => x }), n(388685), n(35282);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    o = n(442837),
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
        [E, v] = i.useState(!1),
        [j, b] = i.useState(!1),
        [I, N] = i.useState(null),
        [O, S] = i.useState(null),
        y = (0, o.e7)([d.Z], () => d.Z.getCountryCode()),
        C = y.code.split(" ")[0],
        A = async () => {
            try {
                await c.Z.resendCode(e);
            } catch (e) {
                S(e.body.message);
            }
        },
        T = async () => {
            v(!0);
            try {
                let { token: t } = await c.Z.verifyPhone(C + e, l);
                N(null), S(null), b(!0), c.Z.validatePhoneForSupport(t);
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
                    className: s()(_.marginTop20, m.flex, m.justifyCenter, m.alignCenter),
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
    return j
        ? Z
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
                              alpha2: y.alpha2,
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
                              onClick: A,
                              children: g.intl.string(g.t["5b60go"]),
                          }),
                          (0, r.jsx)(f.zx, {
                              className: _.marginTop20,
                              onClick: T,
                              submitting: E,
                              children: g.intl.string(g.t.i4jeWV),
                          }),
                      ],
                  }),
              ],
          });
};
