n.d(t, { Z: () => x }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(144114),
    d = n(742458),
    u = n(541692),
    h = n(952802),
    _ = n(388905),
    g = n(815660),
    p = n(388032),
    m = n(652849),
    f = n(232186);
let x = () => {
    let [e, t] = r.useState(''),
        [l, x] = r.useState(''),
        [E, I] = r.useState(!1),
        [v, N] = r.useState(!1),
        [b, C] = r.useState(null),
        [T, S] = r.useState(null),
        A = (0, o.e7)([u.Z], () => u.Z.getCountryCode()),
        Z = A.code.split(' ')[0],
        j = async () => {
            try {
                await c.Z.resendCode(e);
            } catch (e) {
                S(e.body.message);
            }
        },
        R = async () => {
            I(!0);
            try {
                let { token: t } = await c.Z.verifyPhone(Z + e, l);
                C(null), S(null), N(!0), c.Z.validatePhoneForSupport(t);
            } catch (e) {
                e.body.message ? (C(null), S(e.body.message)) : (C(e.body.phone), S(e.body.code));
            } finally {
                I(!1);
            }
        },
        L = (0, i.jsxs)(_.ZP, {
            children: [
                (0, i.jsx)(_.Ee, { src: n(292824) }),
                (0, i.jsxs)(_.Dx, {
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
    return v
        ? L
        : (0, i.jsxs)(_.ZP, {
              children: [
                  (0, i.jsx)(_.Dx, { children: p.intl.string(p.t.o4JNrK) }),
                  (0, i.jsx)(_.DK, {
                      className: f.marginTop8,
                      children: p.intl.string(p.t.y0tVbm)
                  }),
                  (0, i.jsxs)(_.gO, {
                      className: f.marginTop20,
                      children: [
                          (0, i.jsx)(h.Z, {
                              label: p.intl.string(p.t.eJnn09),
                              alpha2: A.alpha2,
                              countryCode: Z,
                              value: e,
                              autoComplete: 'off',
                              spellCheck: 'false',
                              onChange: t,
                              forceMode: d.Nz.PHONE,
                              error: b
                          }),
                          (0, i.jsx)(_.II, {
                              className: f.marginTop20,
                              label: p.intl.string(p.t.OdzNbm),
                              value: l,
                              onChange: x,
                              maxLength: g.z,
                              error: T
                          }),
                          (0, i.jsx)(_.zx, {
                              size: _.zx.Sizes.SMALL,
                              look: _.zx.Looks.LINK,
                              onClick: j,
                              children: p.intl.string(p.t['5b60go'])
                          }),
                          (0, i.jsx)(_.zx, {
                              className: f.marginTop20,
                              onClick: R,
                              submitting: E,
                              children: p.intl.string(p.t.i4jeWV)
                          })
                      ]
                  })
              ]
          });
};
