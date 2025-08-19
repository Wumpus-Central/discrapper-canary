n.d(t, { Z: () => x }), n(388685), n(35282);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(144114),
    u = n(742458),
    d = n(541692),
    h = n(952802),
    p = n(388905),
    m = n(815660),
    f = n(388032),
    g = n(149715),
    _ = n(197571);
let x = () => {
    let [e, t] = i.useState(""),
        [l, x] = i.useState(""),
        [b, v] = i.useState(!1),
        [E, j] = i.useState(!1),
        [I, y] = i.useState(null),
        [O, N] = i.useState(null),
        S = (0, s.e7)([d.Z], () => d.Z.getCountryCode()),
        C = S.code.split(" ")[0],
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
                let { token: t } = await c.Z.verifyPhone(C + e, l);
                y(null), N(null), j(!0), c.Z.validatePhoneForSupport(t);
            } catch (e) {
                e.body.message ? (y(null), N(e.body.message)) : (y(e.body.phone), N(e.body.code));
            } finally {
                v(!1);
            }
        },
        Z = (0, r.jsxs)(p.ZP, {
            children: [
                (0, r.jsx)(p.Ee, { src: n(292824) }),
                (0, r.jsxs)(p.Dx, {
                    className: a()(_.marginTop20, g.flex, g.justifyCenter, g.alignCenter),
                    children: [
                        f.intl.string(f.t.WWzQtb),
                        (0, r.jsx)(o.owK, {
                            size: "md",
                            color: "currentColor",
                            className: _.marginLeft8,
                        }),
                    ],
                }),
            ],
        });
    return E
        ? Z
        : (0, r.jsxs)(p.ZP, {
              children: [
                  (0, r.jsx)(p.Dx, { children: f.intl.string(f.t.o4JNrK) }),
                  (0, r.jsx)(p.DK, {
                      className: _.marginTop8,
                      children: f.intl.string(f.t.y0tVbm),
                  }),
                  (0, r.jsxs)(p.gO, {
                      className: _.marginTop20,
                      children: [
                          (0, r.jsx)(h.Z, {
                              label: f.intl.string(f.t.eJnn09),
                              alpha2: S.alpha2,
                              countryCode: C,
                              value: e,
                              autoComplete: "off",
                              spellCheck: "false",
                              onChange: t,
                              forceMode: u.Nz.PHONE,
                              error: I,
                          }),
                          (0, r.jsx)(p.II, {
                              className: _.marginTop20,
                              label: f.intl.string(f.t.OdzNbm),
                              value: l,
                              onChange: x,
                              maxLength: m.z,
                              error: O,
                          }),
                          (0, r.jsx)(p.zx, {
                              size: p.zx.Sizes.SMALL,
                              look: p.zx.Looks.LINK,
                              onClick: T,
                              children: f.intl.string(f.t["5b60go"]),
                          }),
                          (0, r.jsx)(p.zx, {
                              className: _.marginTop20,
                              onClick: A,
                              submitting: b,
                              children: f.intl.string(f.t.i4jeWV),
                          }),
                      ],
                  }),
              ],
          });
};
