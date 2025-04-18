n.d(t, { Z: () => N }), n(388685), n(35282);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    l = n.n(s),
    o = n(442837),
    a = n(481060),
    c = n(144114),
    u = n(742458),
    d = n(541692),
    h = n(952802),
    p = n(388905),
    g = n(815660),
    f = n(388032),
    m = n(378426),
    _ = n(971005);
let N = () => {
    let [e, t] = i.useState(''),
        [s, N] = i.useState(''),
        [x, b] = i.useState(!1),
        [E, v] = i.useState(!1),
        [j, I] = i.useState(null),
        [O, S] = i.useState(null),
        y = (0, o.e7)([d.Z], () => d.Z.getCountryCode()),
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
        T = (0, r.jsxs)(p.ZP, {
            children: [
                (0, r.jsx)(p.Ee, { src: n(292824) }),
                (0, r.jsxs)(p.Dx, {
                    className: l()(_.marginTop20, m.flex, m.justifyCenter, m.alignCenter),
                    children: [
                        f.NW.string(f.t.WWzQtb),
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
        : (0, r.jsxs)(p.ZP, {
              children: [
                  (0, r.jsx)(p.Dx, { children: f.NW.string(f.t.o4JNrK) }),
                  (0, r.jsx)(p.DK, {
                      className: _.marginTop8,
                      children: f.NW.string(f.t.y0tVbm)
                  }),
                  (0, r.jsxs)(p.gO, {
                      className: _.marginTop20,
                      children: [
                          (0, r.jsx)(h.Z, {
                              label: f.NW.string(f.t.eJnn09),
                              alpha2: y.alpha2,
                              countryCode: C,
                              value: e,
                              autoComplete: 'off',
                              spellCheck: 'false',
                              onChange: t,
                              forceMode: u.Nz.PHONE,
                              error: j
                          }),
                          (0, r.jsx)(p.II, {
                              className: _.marginTop20,
                              label: f.NW.string(f.t.OdzNbm),
                              value: s,
                              onChange: N,
                              maxLength: g.z,
                              error: O
                          }),
                          (0, r.jsx)(p.zx, {
                              size: p.zx.Sizes.SMALL,
                              look: p.zx.Looks.LINK,
                              onClick: P,
                              children: f.NW.string(f.t['5b60go'])
                          }),
                          (0, r.jsx)(p.zx, {
                              className: _.marginTop20,
                              onClick: A,
                              submitting: x,
                              children: f.NW.string(f.t.i4jeWV)
                          })
                      ]
                  })
              ]
          });
};
