n.d(t, { Z: () => x }), n(388685), n(35282);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
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
        [l, x] = i.useState(""),
        [E, v] = i.useState(!1),
        [b, I] = i.useState(!1),
        [j, N] = i.useState(null),
        [S, O] = i.useState(null),
        y = (0, a.e7)([d.Z], () => d.Z.getCountryCode()),
        C = y.code.split(" ")[0],
        A = async () => {
            try {
                await c.Z.resendCode(e);
            } catch (e) {
                O(e.body.message);
            }
        },
        T = async () => {
            v(!0);
            try {
                let { token: t } = await c.Z.verifyPhone(C + e, l);
                N(null), O(null), I(!0), c.Z.validatePhoneForSupport(t);
            } catch (e) {
                e.body.message ? (N(null), O(e.body.message)) : (N(e.body.phone), O(e.body.code));
            } finally {
                v(!1);
            }
        },
        Z = (0, r.jsxs)(g.ZP, {
            children: [
                (0, r.jsx)(g.Ee, { src: n(292824) }),
                (0, r.jsxs)(g.Dx, {
                    className: s()(_.marginTop20, f.flex, f.justifyCenter, f.alignCenter),
                    children: [
                        p.intl.string(p.t.WWzQtb),
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
                  (0, r.jsx)(g.Dx, { children: p.intl.string(p.t.o4JNrK) }),
                  (0, r.jsx)(g.DK, {
                      className: _.marginTop8,
                      children: p.intl.string(p.t.y0tVbm),
                  }),
                  (0, r.jsxs)(g.gO, {
                      className: _.marginTop20,
                      children: [
                          (0, r.jsx)(h.Z, {
                              label: p.intl.string(p.t.eJnn09),
                              alpha2: y.alpha2,
                              countryCode: C,
                              value: e,
                              autoComplete: "off",
                              spellCheck: "false",
                              onChange: t,
                              forceMode: u.Nz.PHONE,
                              error: j,
                          }),
                          (0, r.jsx)(g.II, {
                              className: _.marginTop20,
                              label: p.intl.string(p.t.OdzNbm),
                              value: l,
                              onChange: x,
                              maxLength: m.z,
                              error: S,
                          }),
                          (0, r.jsx)(g.zx, {
                              size: g.zx.Sizes.SMALL,
                              look: g.zx.Looks.LINK,
                              onClick: A,
                              children: p.intl.string(p.t["5b60go"]),
                          }),
                          (0, r.jsx)(g.zx, {
                              className: _.marginTop20,
                              onClick: T,
                              submitting: E,
                              children: p.intl.string(p.t.i4jeWV),
                          }),
                      ],
                  }),
              ],
          });
};
