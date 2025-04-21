n.d(t, { Z: () => x }), n(388685), n(35282);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    o = n(442837),
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
        [l, x] = i.useState(''),
        [b, E] = i.useState(!1),
        [v, j] = i.useState(!1),
        [I, O] = i.useState(null),
        [S, N] = i.useState(null),
        y = (0, o.e7)([d.Z], () => d.Z.getCountryCode()),
        C = y.code.split(' ')[0],
        P = async () => {
            try {
                await c.Z.resendCode(e);
            } catch (e) {
                N(e.body.message);
            }
        },
        A = async () => {
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
        T = (0, r.jsxs)(g.ZP, {
            children: [
                (0, r.jsx)(g.Ee, { src: n(292824) }),
                (0, r.jsxs)(g.Dx, {
                    className: s()(_.marginTop20, f.flex, f.justifyCenter, f.alignCenter),
                    children: [
                        m.intl.string(m.t.WWzQtb),
                        (0, r.jsx)(a.owK, {
                            size: 'md',
                            color: 'currentColor',
                            className: _.marginLeft8
                        })
                    ]
                })
            ]
        });
    return v
        ? T
        : (0, r.jsxs)(g.ZP, {
              children: [
                  (0, r.jsx)(g.Dx, { children: m.intl.string(m.t.o4JNrK) }),
                  (0, r.jsx)(g.DK, {
                      className: _.marginTop8,
                      children: m.intl.string(m.t.y0tVbm)
                  }),
                  (0, r.jsxs)(g.gO, {
                      className: _.marginTop20,
                      children: [
                          (0, r.jsx)(h.Z, {
                              label: m.intl.string(m.t.eJnn09),
                              alpha2: y.alpha2,
                              countryCode: C,
                              value: e,
                              autoComplete: 'off',
                              spellCheck: 'false',
                              onChange: t,
                              forceMode: u.Nz.PHONE,
                              error: I
                          }),
                          (0, r.jsx)(g.II, {
                              className: _.marginTop20,
                              label: m.intl.string(m.t.OdzNbm),
                              value: l,
                              onChange: x,
                              maxLength: p.z,
                              error: S
                          }),
                          (0, r.jsx)(g.zx, {
                              size: g.zx.Sizes.SMALL,
                              look: g.zx.Looks.LINK,
                              onClick: P,
                              children: m.intl.string(m.t['5b60go'])
                          }),
                          (0, r.jsx)(g.zx, {
                              className: _.marginTop20,
                              onClick: A,
                              submitting: b,
                              children: m.intl.string(m.t.i4jeWV)
                          })
                      ]
                  })
              ]
          });
};
