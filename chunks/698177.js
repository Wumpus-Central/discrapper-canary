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
    g = n(952802),
    h = n(388905),
    p = n(815660),
    m = n(388032),
    f = n(893354),
    _ = n(20493);
let x = () => {
    let [e, t] = i.useState(''),
        [l, x] = i.useState(''),
        [E, b] = i.useState(!1),
        [v, I] = i.useState(!1),
        [O, S] = i.useState(null),
        [y, j] = i.useState(null),
        N = (0, o.e7)([d.Z], () => d.Z.getCountryCode()),
        C = N.code.split(' ')[0],
        T = async () => {
            try {
                await c.Z.resendCode(e);
            } catch (e) {
                j(e.body.message);
            }
        },
        A = async () => {
            b(!0);
            try {
                let { token: t } = await c.Z.verifyPhone(C + e, l);
                S(null), j(null), I(!0), c.Z.validatePhoneForSupport(t);
            } catch (e) {
                e.body.message ? (S(null), j(e.body.message)) : (S(e.body.phone), j(e.body.code));
            } finally {
                b(!1);
            }
        },
        P = (0, r.jsxs)(h.ZP, {
            children: [
                (0, r.jsx)(h.Ee, { src: n(292824) }),
                (0, r.jsxs)(h.Dx, {
                    className: a()(_.marginTop20, f.flex, f.justifyCenter, f.alignCenter),
                    children: [
                        m.intl.string(m.t.WWzQtb),
                        (0, r.jsx)(s.owK, {
                            size: 'md',
                            color: 'currentColor',
                            className: _.marginLeft8
                        })
                    ]
                })
            ]
        });
    return v
        ? P
        : (0, r.jsxs)(h.ZP, {
              children: [
                  (0, r.jsx)(h.Dx, { children: m.intl.string(m.t.o4JNrK) }),
                  (0, r.jsx)(h.DK, {
                      className: _.marginTop8,
                      children: m.intl.string(m.t.y0tVbm)
                  }),
                  (0, r.jsxs)(h.gO, {
                      className: _.marginTop20,
                      children: [
                          (0, r.jsx)(g.Z, {
                              label: m.intl.string(m.t.eJnn09),
                              alpha2: N.alpha2,
                              countryCode: C,
                              value: e,
                              autoComplete: 'off',
                              spellCheck: 'false',
                              onChange: t,
                              forceMode: u.Nz.PHONE,
                              error: O
                          }),
                          (0, r.jsx)(h.II, {
                              className: _.marginTop20,
                              label: m.intl.string(m.t.OdzNbm),
                              value: l,
                              onChange: x,
                              maxLength: p.z,
                              error: y
                          }),
                          (0, r.jsx)(h.zx, {
                              size: h.zx.Sizes.SMALL,
                              look: h.zx.Looks.LINK,
                              onClick: T,
                              children: m.intl.string(m.t['5b60go'])
                          }),
                          (0, r.jsx)(h.zx, {
                              className: _.marginTop20,
                              onClick: A,
                              submitting: E,
                              children: m.intl.string(m.t.i4jeWV)
                          })
                      ]
                  })
              ]
          });
};
