n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    o = n(442837),
    a = n(481060),
    c = n(144114),
    d = n(742458),
    u = n(541692),
    h = n(952802),
    f = n(388905),
    g = n(815660),
    m = n(388032),
    p = n(652849),
    x = n(232186);
t.Z = () => {
    let [e, t] = r.useState(''),
        [s, _] = r.useState(''),
        [E, I] = r.useState(!1),
        [v, N] = r.useState(!1),
        [C, b] = r.useState(null),
        [T, Z] = r.useState(null),
        S = (0, o.e7)([u.Z], () => u.Z.getCountryCode()),
        A = S.code.split(' ')[0],
        j = async () => {
            try {
                await c.Z.resendCode(e);
            } catch (e) {
                Z(e.body.message);
            }
        },
        R = async () => {
            I(!0);
            try {
                let { token: t } = await c.Z.verifyPhone(A + e, s);
                b(null), Z(null), N(!0), c.Z.validatePhoneForSupport(t);
            } catch (e) {
                e.body.message ? (b(null), Z(e.body.message)) : (b(e.body.phone), Z(e.body.code));
            } finally {
                I(!1);
            }
        },
        P = (0, i.jsxs)(f.ZP, {
            children: [
                (0, i.jsx)(f.Ee, { src: n(292824) }),
                (0, i.jsxs)(f.Dx, {
                    className: l()(x.marginTop20, p.flex, p.justifyCenter, p.alignCenter),
                    children: [
                        m.intl.string(m.t.WWzQtb),
                        (0, i.jsx)(a.CircleCheckIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: x.marginLeft8
                        })
                    ]
                })
            ]
        });
    return v
        ? P
        : (0, i.jsxs)(f.ZP, {
              children: [
                  (0, i.jsx)(f.Dx, { children: m.intl.string(m.t.o4JNrK) }),
                  (0, i.jsx)(f.DK, {
                      className: x.marginTop8,
                      children: m.intl.string(m.t.y0tVbm)
                  }),
                  (0, i.jsxs)(f.gO, {
                      className: x.marginTop20,
                      children: [
                          (0, i.jsx)(h.Z, {
                              label: m.intl.string(m.t.eJnn09),
                              alpha2: S.alpha2,
                              countryCode: A,
                              value: e,
                              autoComplete: 'off',
                              spellCheck: 'false',
                              onChange: t,
                              forceMode: d.Nz.PHONE,
                              error: C
                          }),
                          (0, i.jsx)(f.II, {
                              className: x.marginTop20,
                              label: m.intl.string(m.t.OdzNbm),
                              value: s,
                              onChange: _,
                              maxLength: g.z,
                              error: T
                          }),
                          (0, i.jsx)(f.zx, {
                              size: f.zx.Sizes.SMALL,
                              look: f.zx.Looks.LINK,
                              onClick: j,
                              children: m.intl.string(m.t['5b60go'])
                          }),
                          (0, i.jsx)(f.zx, {
                              className: x.marginTop20,
                              onClick: R,
                              submitting: E,
                              children: m.intl.string(m.t.i4jeWV)
                          })
                      ]
                  })
              ]
          });
};
