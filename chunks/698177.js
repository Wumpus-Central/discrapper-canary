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
    f = n(378426),
    _ = n(971005);
let x = () => {
    let [e, t] = i.useState(''),
        [l, x] = i.useState(''),
        [b, E] = i.useState(!1),
        [v, O] = i.useState(!1),
        [S, I] = i.useState(null),
        [j, y] = i.useState(null),
        N = (0, o.e7)([d.Z], () => d.Z.getCountryCode()),
        C = N.code.split(' ')[0],
        T = async () => {
            try {
                await c.Z.resendCode(e);
            } catch (e) {
                y(e.body.message);
            }
        },
        A = async () => {
            E(!0);
            try {
                let { token: t } = await c.Z.verifyPhone(C + e, l);
                I(null), y(null), O(!0), c.Z.validatePhoneForSupport(t);
            } catch (e) {
                e.body.message ? (I(null), y(e.body.message)) : (I(e.body.phone), y(e.body.code));
            } finally {
                E(!1);
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
                              error: S
                          }),
                          (0, r.jsx)(h.II, {
                              className: _.marginTop20,
                              label: m.intl.string(m.t.OdzNbm),
                              value: l,
                              onChange: x,
                              maxLength: p.z,
                              error: j
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
                              submitting: b,
                              children: m.intl.string(m.t.i4jeWV)
                          })
                      ]
                  })
              ]
          });
};
