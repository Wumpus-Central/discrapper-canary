n.d(t, { Z: () => x }), n(388685), n(35282);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(442837),
    a = n(481060),
    c = n(144114),
    u = n(742458),
    d = n(541692),
    h = n(952802),
    p = n(388905),
    f = n(815660),
    m = n(388032),
    g = n(893354),
    _ = n(20493);
let x = () => {
    let [e, t] = i.useState(""),
        [l, x] = i.useState(""),
        [b, E] = i.useState(!1),
        [v, j] = i.useState(!1),
        [I, O] = i.useState(null),
        [S, N] = i.useState(null),
        y = (0, s.e7)([d.Z], () => d.Z.getCountryCode()),
        C = y.code.split(" ")[0],
        A = async () => {
            try {
                await c.Z.resendCode(e);
            } catch (e) {
                N(e.body.message);
            }
        },
        T = async () => {
            E(!0);
            try {
                let { token: t } = await c.Z.verifyPhone(C + e, l);
                O(null), N(null), j(!0), c.Z.validatePhoneForSupport(t);
            } catch (e) {
                e.body.message ? (O(null), N(e.body.message)) : (O(e.body.phone), N(e.body.code));
            } finally {
                E(!1);
            }
        },
        Z = (0, r.jsxs)(p.ZP, {
            children: [
                (0, r.jsx)(p.Ee, { src: n(292824) }),
                (0, r.jsxs)(p.Dx, {
                    className: o()(_.marginTop20, g.flex, g.justifyCenter, g.alignCenter),
                    children: [
                        m.intl.string(m.t.WWzQtb),
                        (0, r.jsx)(a.owK, {
                            size: "md",
                            color: "currentColor",
                            className: _.marginLeft8,
                        }),
                    ],
                }),
            ],
        });
    return v
        ? Z
        : (0, r.jsxs)(p.ZP, {
              children: [
                  (0, r.jsx)(p.Dx, { children: m.intl.string(m.t.o4JNrK) }),
                  (0, r.jsx)(p.DK, {
                      className: _.marginTop8,
                      children: m.intl.string(m.t.y0tVbm),
                  }),
                  (0, r.jsxs)(p.gO, {
                      className: _.marginTop20,
                      children: [
                          (0, r.jsx)(h.Z, {
                              label: m.intl.string(m.t.eJnn09),
                              alpha2: y.alpha2,
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
                              label: m.intl.string(m.t.OdzNbm),
                              value: l,
                              onChange: x,
                              maxLength: f.z,
                              error: S,
                          }),
                          (0, r.jsx)(p.zx, {
                              size: p.zx.Sizes.SMALL,
                              look: p.zx.Looks.LINK,
                              onClick: A,
                              children: m.intl.string(m.t["5b60go"]),
                          }),
                          (0, r.jsx)(p.zx, {
                              className: _.marginTop20,
                              onClick: T,
                              submitting: b,
                              children: m.intl.string(m.t.i4jeWV),
                          }),
                      ],
                  }),
              ],
          });
};
