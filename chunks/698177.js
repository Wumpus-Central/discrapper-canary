n.d(t, { Z: () => x }), n(388685), n(35282);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(442837),
    a = n(481060),
    c = n(144114),
    u = n(742458),
    d = n(541692),
    h = n(952802),
    g = n(388905),
    p = n(815660),
    m = n(388032),
    f = n(893354),
    _ = n(20493);
let x = () => {
    let [e, t] = i.useState(''),
        [s, x] = i.useState(''),
        [N, b] = i.useState(!1),
        [E, v] = i.useState(!1),
        [j, I] = i.useState(null),
        [O, S] = i.useState(null),
        y = (0, l.e7)([d.Z], () => d.Z.getCountryCode()),
        C = y.code.split(' ')[0],
        P = async () => {
            try {
                await c.Z.resendCode(e);
            } catch (e) {
                S(e.body.message);
            }
        },
        A = async () => {
            b(!0);
            try {
                let { token: t } = await c.Z.verifyPhone(C + e, s);
                I(null), S(null), v(!0), c.Z.validatePhoneForSupport(t);
            } catch (e) {
                e.body.message ? (I(null), S(e.body.message)) : (I(e.body.phone), S(e.body.code));
            } finally {
                b(!1);
            }
        },
        T = (0, r.jsxs)(g.ZP, {
            children: [
                (0, r.jsx)(g.Ee, { src: n(292824) }),
                (0, r.jsxs)(g.Dx, {
                    className: o()(_.marginTop20, f.flex, f.justifyCenter, f.alignCenter),
                    children: [
                        m.NW.string(m.t.WWzQtb),
                        (0, r.jsx)(a.owK, {
                            size: 'md',
                            color: 'currentColor',
                            className: _.marginLeft8
                        })
                    ]
                })
            ]
        });
    return E
        ? T
        : (0, r.jsxs)(g.ZP, {
              children: [
                  (0, r.jsx)(g.Dx, { children: m.NW.string(m.t.o4JNrK) }),
                  (0, r.jsx)(g.DK, {
                      className: _.marginTop8,
                      children: m.NW.string(m.t.y0tVbm)
                  }),
                  (0, r.jsxs)(g.gO, {
                      className: _.marginTop20,
                      children: [
                          (0, r.jsx)(h.Z, {
                              label: m.NW.string(m.t.eJnn09),
                              alpha2: y.alpha2,
                              countryCode: C,
                              value: e,
                              autoComplete: 'off',
                              spellCheck: 'false',
                              onChange: t,
                              forceMode: u.Nz.PHONE,
                              error: j
                          }),
                          (0, r.jsx)(g.II, {
                              className: _.marginTop20,
                              label: m.NW.string(m.t.OdzNbm),
                              value: s,
                              onChange: x,
                              maxLength: p.z,
                              error: O
                          }),
                          (0, r.jsx)(g.zx, {
                              size: g.zx.Sizes.SMALL,
                              look: g.zx.Looks.LINK,
                              onClick: P,
                              children: m.NW.string(m.t['5b60go'])
                          }),
                          (0, r.jsx)(g.zx, {
                              className: _.marginTop20,
                              onClick: A,
                              submitting: N,
                              children: m.NW.string(m.t.i4jeWV)
                          })
                      ]
                  })
              ]
          });
};
