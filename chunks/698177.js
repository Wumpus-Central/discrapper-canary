n.d(t, { Z: () => E }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(144114),
    d = n(742458),
    u = n(541692),
    _ = n(952802),
    h = n(388905),
    g = n(815660),
    p = n(388032),
    m = n(652849),
    f = n(232186);
let E = () => {
    let [e, t] = r.useState(''),
        [l, E] = r.useState(''),
        [I, x] = r.useState(!1),
        [C, N] = r.useState(!1),
        [v, T] = r.useState(null),
        [S, A] = r.useState(null),
        b = (0, o.e7)([u.Z], () => u.Z.getCountryCode()),
        Z = b.code.split(' ')[0],
        R = async () => {
            try {
                await c.Z.resendCode(e);
            } catch (e) {
                A(e.body.message);
            }
        },
        L = async () => {
            x(!0);
            try {
                let { token: t } = await c.Z.verifyPhone(Z + e, l);
                T(null), A(null), N(!0), c.Z.validatePhoneForSupport(t);
            } catch (e) {
                e.body.message ? (T(null), A(e.body.message)) : (T(e.body.phone), A(e.body.code));
            } finally {
                x(!1);
            }
        },
        j = (0, i.jsxs)(h.ZP, {
            children: [
                (0, i.jsx)(h.Ee, { src: n(292824) }),
                (0, i.jsxs)(h.Dx, {
                    className: a()(f.marginTop20, m.flex, m.justifyCenter, m.alignCenter),
                    children: [
                        p.intl.string(p.t.WWzQtb),
                        (0, i.jsx)(s.owK, {
                            size: 'md',
                            color: 'currentColor',
                            className: f.marginLeft8
                        })
                    ]
                })
            ]
        });
    return C
        ? j
        : (0, i.jsxs)(h.ZP, {
              children: [
                  (0, i.jsx)(h.Dx, { children: p.intl.string(p.t.o4JNrK) }),
                  (0, i.jsx)(h.DK, {
                      className: f.marginTop8,
                      children: p.intl.string(p.t.y0tVbm)
                  }),
                  (0, i.jsxs)(h.gO, {
                      className: f.marginTop20,
                      children: [
                          (0, i.jsx)(_.Z, {
                              label: p.intl.string(p.t.eJnn09),
                              alpha2: b.alpha2,
                              countryCode: Z,
                              value: e,
                              autoComplete: 'off',
                              spellCheck: 'false',
                              onChange: t,
                              forceMode: d.Nz.PHONE,
                              error: v
                          }),
                          (0, i.jsx)(h.II, {
                              className: f.marginTop20,
                              label: p.intl.string(p.t.OdzNbm),
                              value: l,
                              onChange: E,
                              maxLength: g.z,
                              error: S
                          }),
                          (0, i.jsx)(h.zx, {
                              size: h.zx.Sizes.SMALL,
                              look: h.zx.Looks.LINK,
                              onClick: R,
                              children: p.intl.string(p.t['5b60go'])
                          }),
                          (0, i.jsx)(h.zx, {
                              className: f.marginTop20,
                              onClick: L,
                              submitting: I,
                              children: p.intl.string(p.t.i4jeWV)
                          })
                      ]
                  })
              ]
          });
};
