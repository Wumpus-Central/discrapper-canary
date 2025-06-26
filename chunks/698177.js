n.d(t, { Z: () => x }), n(388685), n(35282);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(144114),
    u = n(742458),
    d = n(541692),
    h = n(952802),
    p = n(388905),
    m = n(815660),
    g = n(388032),
    f = n(893354),
    _ = n(20493);
let x = () => {
    let [e, t] = i.useState(''),
        [l, x] = i.useState(''),
        [E, b] = i.useState(!1),
        [I, v] = i.useState(!1),
        [O, N] = i.useState(null),
        [j, S] = i.useState(null),
        y = (0, o.e7)([d.Z], () => d.Z.getCountryCode()),
        C = y.code.split(' ')[0],
        T = async () => {
            try {
                await c.Z.resendCode(e);
            } catch (e) {
                S(e.body.message);
            }
        },
        A = async () => {
            b(!0);
            try {
                let { token: t } = await c.Z.verifyPhone(C + e, l);
                N(null), S(null), v(!0), c.Z.validatePhoneForSupport(t);
            } catch (e) {
                e.body.message ? (N(null), S(e.body.message)) : (N(e.body.phone), S(e.body.code));
            } finally {
                b(!1);
            }
        },
        P = (0, r.jsxs)(p.ZP, {
            children: [
                (0, r.jsx)(p.Ee, { src: n(292824) }),
                (0, r.jsxs)(p.Dx, {
                    className: a()(_.marginTop20, f.flex, f.justifyCenter, f.alignCenter),
                    children: [
                        g.intl.string(g.t.WWzQtb),
                        (0, r.jsx)(s.owK, {
                            size: 'md',
                            color: 'currentColor',
                            className: _.marginLeft8
                        })
                    ]
                })
            ]
        });
    return I
        ? P
        : (0, r.jsxs)(p.ZP, {
              children: [
                  (0, r.jsx)(p.Dx, { children: g.intl.string(g.t.o4JNrK) }),
                  (0, r.jsx)(p.DK, {
                      className: _.marginTop8,
                      children: g.intl.string(g.t.y0tVbm)
                  }),
                  (0, r.jsxs)(p.gO, {
                      className: _.marginTop20,
                      children: [
                          (0, r.jsx)(h.Z, {
                              label: g.intl.string(g.t.eJnn09),
                              alpha2: y.alpha2,
                              countryCode: C,
                              value: e,
                              autoComplete: 'off',
                              spellCheck: 'false',
                              onChange: t,
                              forceMode: u.Nz.PHONE,
                              error: O
                          }),
                          (0, r.jsx)(p.II, {
                              className: _.marginTop20,
                              label: g.intl.string(g.t.OdzNbm),
                              value: l,
                              onChange: x,
                              maxLength: m.z,
                              error: j
                          }),
                          (0, r.jsx)(p.zx, {
                              size: p.zx.Sizes.SMALL,
                              look: p.zx.Looks.LINK,
                              onClick: T,
                              children: g.intl.string(g.t['5b60go'])
                          }),
                          (0, r.jsx)(p.zx, {
                              className: _.marginTop20,
                              onClick: A,
                              submitting: E,
                              children: g.intl.string(g.t.i4jeWV)
                          })
                      ]
                  })
              ]
          });
};
