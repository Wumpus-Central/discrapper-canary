n.d(t, { Z: () => E }), n(388685), n(35282);
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
    g = n(815660),
    m = n(388032),
    f = n(893354),
    _ = n(20493);
let E = () => {
    let [e, t] = i.useState(''),
        [l, E] = i.useState(''),
        [x, b] = i.useState(!1),
        [v, I] = i.useState(!1),
        [O, S] = i.useState(null),
        [N, y] = i.useState(null),
        j = (0, o.e7)([d.Z], () => d.Z.getCountryCode()),
        C = j.code.split(' ')[0],
        T = async () => {
            try {
                await c.Z.resendCode(e);
            } catch (e) {
                y(e.body.message);
            }
        },
        A = async () => {
            b(!0);
            try {
                let { token: t } = await c.Z.verifyPhone(C + e, l);
                S(null), y(null), I(!0), c.Z.validatePhoneForSupport(t);
            } catch (e) {
                e.body.message ? (S(null), y(e.body.message)) : (S(e.body.phone), y(e.body.code));
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
                              alpha2: j.alpha2,
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
                              label: m.intl.string(m.t.OdzNbm),
                              value: l,
                              onChange: E,
                              maxLength: g.z,
                              error: N
                          }),
                          (0, r.jsx)(p.zx, {
                              size: p.zx.Sizes.SMALL,
                              look: p.zx.Looks.LINK,
                              onClick: T,
                              children: m.intl.string(m.t['5b60go'])
                          }),
                          (0, r.jsx)(p.zx, {
                              className: _.marginTop20,
                              onClick: A,
                              submitting: x,
                              children: m.intl.string(m.t.i4jeWV)
                          })
                      ]
                  })
              ]
          });
};
