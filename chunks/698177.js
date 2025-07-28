(n.d(t, { Z: () => x }), n(388685), n(35282));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(144114),
    u = n(742458),
    d = n(541692),
    h = n(952802),
    p = n(388905),
    g = n(815660),
    m = n(388032),
    f = n(893354),
    _ = n(20493);
let x = () => {
    let [e, t] = i.useState(''),
        [l, x] = i.useState(''),
        [b, E] = i.useState(!1),
        [v, I] = i.useState(!1),
        [j, O] = i.useState(null),
        [S, y] = i.useState(null),
        N = (0, a.e7)([d.Z], () => d.Z.getCountryCode()),
        C = N.code.split(' ')[0],
        A = async () => {
            try {
                await c.Z.resendCode(e);
            } catch (e) {
                y(e.body.message);
            }
        },
        T = async () => {
            E(!0);
            try {
                let { token: t } = await c.Z.verifyPhone(C + e, l);
                (O(null), y(null), I(!0), c.Z.validatePhoneForSupport(t));
            } catch (e) {
                e.body.message ? (O(null), y(e.body.message)) : (O(e.body.phone), y(e.body.code));
            } finally {
                E(!1);
            }
        },
        P = (0, r.jsxs)(p.ZP, {
            children: [
                (0, r.jsx)(p.Ee, { src: n(292824) }),
                (0, r.jsxs)(p.Dx, {
                    className: s()(_.marginTop20, f.flex, f.justifyCenter, f.alignCenter),
                    children: [
                        m.intl.string(m.t.WWzQtb),
                        (0, r.jsx)(o.owK, {
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
        : (0, r.jsxs)(p.ZP, {
              children: [
                  (0, r.jsx)(p.Dx, { children: m.intl.string(m.t.o4JNrK) }),
                  (0, r.jsx)(p.DK, {
                      className: _.marginTop8,
                      children: m.intl.string(m.t.y0tVbm)
                  }),
                  (0, r.jsxs)(p.gO, {
                      className: _.marginTop20,
                      children: [
                          (0, r.jsx)(h.Z, {
                              label: m.intl.string(m.t.eJnn09),
                              alpha2: N.alpha2,
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
                              label: m.intl.string(m.t.OdzNbm),
                              value: l,
                              onChange: x,
                              maxLength: g.z,
                              error: S
                          }),
                          (0, r.jsx)(p.zx, {
                              size: p.zx.Sizes.SMALL,
                              look: p.zx.Looks.LINK,
                              onClick: A,
                              children: m.intl.string(m.t['5b60go'])
                          }),
                          (0, r.jsx)(p.zx, {
                              className: _.marginTop20,
                              onClick: T,
                              submitting: b,
                              children: m.intl.string(m.t.i4jeWV)
                          })
                      ]
                  })
              ]
          });
};
