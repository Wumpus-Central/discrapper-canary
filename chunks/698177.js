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
    p = n(388905),
    m = n(815660),
    g = n(388032),
    f = n(149715),
    _ = n(197571);
let x = () => {
    let [e, t] = i.useState(""),
        [l, x] = i.useState(""),
        [E, v] = i.useState(!1),
        [j, b] = i.useState(!1),
        [I, O] = i.useState(null),
        [N, y] = i.useState(null),
        S = (0, o.e7)([d.Z], () => d.Z.getCountryCode()),
        C = S.code.split(" ")[0],
        Z = async () => {
            try {
                await c.Z.resendCode(e);
            } catch (e) {
                y(e.body.message);
            }
        },
        A = async () => {
            v(!0);
            try {
                let { token: t } = await c.Z.verifyPhone(C + e, l);
                O(null), y(null), b(!0), c.Z.validatePhoneForSupport(t);
            } catch (e) {
                e.body.message ? (O(null), y(e.body.message)) : (O(e.body.phone), y(e.body.code));
            } finally {
                v(!1);
            }
        },
        T = (0, r.jsxs)(p.ZP, {
            children: [
                (0, r.jsx)(p.Ee, { src: n(292824) }),
                (0, r.jsxs)(p.Dx, {
                    className: s()(_.marginTop20, f.flex, f.justifyCenter, f.alignCenter),
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
        ? T
        : (0, r.jsxs)(p.ZP, {
              children: [
                  (0, r.jsx)(p.Dx, { children: g.intl.string(g.t.o4JNrK) }),
                  (0, r.jsx)(p.DK, {
                      className: _.marginTop8,
                      children: g.intl.string(g.t.y0tVbm),
                  }),
                  (0, r.jsxs)(p.gO, {
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
                          (0, r.jsx)(p.II, {
                              className: _.marginTop20,
                              label: g.intl.string(g.t.OdzNbm),
                              value: l,
                              onChange: x,
                              maxLength: m.z,
                              error: N,
                          }),
                          (0, r.jsx)(p.zx, {
                              size: p.zx.Sizes.SMALL,
                              look: p.zx.Looks.LINK,
                              onClick: Z,
                              children: g.intl.string(g.t["5b60go"]),
                          }),
                          (0, r.jsx)(p.zx, {
                              className: _.marginTop20,
                              onClick: A,
                              submitting: E,
                              children: g.intl.string(g.t.i4jeWV),
                          }),
                      ],
                  }),
              ],
          });
};
