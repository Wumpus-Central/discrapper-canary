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
    p = n(815660),
    m = n(388032),
    f = n(465106),
    _ = n(10198);
let x = () => {
    let [e, t] = i.useState(""),
        [s, x] = i.useState(""),
        [E, v] = i.useState(!1),
        [b, j] = i.useState(!1),
        [I, N] = i.useState(null),
        [O, y] = i.useState(null),
        S = (0, a.e7)([d.Z], () => d.Z.getCountryCode()),
        C = S.code.split(" ")[0],
        A = async () => {
            try {
                await c.Z.resendCode(e);
            } catch (e) {
                y(e.body.message);
            }
        },
        T = async () => {
            v(!0);
            try {
                let { token: t } = await c.Z.verifyPhone(C + e, s);
                N(null), y(null), j(!0), c.Z.validatePhoneForSupport(t);
            } catch (e) {
                e.body.message ? (N(null), y(e.body.message)) : (N(e.body.phone), y(e.body.code));
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
                        m.intl.string(m.t.WWzQtb),
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
                  (0, r.jsx)(g.Dx, { children: m.intl.string(m.t.o4JNrK) }),
                  (0, r.jsx)(g.DK, {
                      className: _.marginTop8,
                      children: m.intl.string(m.t.y0tVbm),
                  }),
                  (0, r.jsxs)(g.gO, {
                      className: _.marginTop20,
                      children: [
                          (0, r.jsx)(h.Z, {
                              label: m.intl.string(m.t.eJnn09),
                              alpha2: S.alpha2,
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
                              error: O,
                          }),
                          (0, r.jsx)(g.zx, {
                              size: g.zx.Sizes.SMALL,
                              look: g.zx.Looks.LINK,
                              onClick: A,
                              children: m.intl.string(m.t["5b60go"]),
                          }),
                          (0, r.jsx)(g.zx, {
                              className: _.marginTop20,
                              onClick: T,
                              submitting: E,
                              children: m.intl.string(m.t.i4jeWV),
                          }),
                      ],
                  }),
              ],
          });
};
