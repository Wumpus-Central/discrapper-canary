n.d(t, { Z: () => x }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(144114),
    d = n(742458),
    u = n(541692),
    h = n(952802),
    _ = n(388905),
    m = n(815660),
    g = n(388032),
    p = n(179683),
    f = n(483938);
let x = () => {
    let [e, t] = r.useState(''),
        [a, x] = r.useState(''),
        [E, I] = r.useState(!1),
        [v, C] = r.useState(!1),
        [N, b] = r.useState(null),
        [S, T] = r.useState(null),
        A = (0, s.e7)([u.Z], () => u.Z.getCountryCode()),
        R = A.code.split(' ')[0],
        Z = async () => {
            try {
                await c.Z.resendCode(e);
            } catch (e) {
                T(e.body.message);
            }
        },
        j = async () => {
            I(!0);
            try {
                let { token: t } = await c.Z.verifyPhone(R + e, a);
                b(null), T(null), C(!0), c.Z.validatePhoneForSupport(t);
            } catch (e) {
                e.body.message ? (b(null), T(e.body.message)) : (b(e.body.phone), T(e.body.code));
            } finally {
                I(!1);
            }
        },
        O = (0, i.jsxs)(_.ZP, {
            children: [
                (0, i.jsx)(_.Ee, { src: n(292824) }),
                (0, i.jsxs)(_.Dx, {
                    className: l()(f.marginTop20, p.flex, p.justifyCenter, p.alignCenter),
                    children: [
                        g.intl.string(g.t.WWzQtb),
                        (0, i.jsx)(o.owK, {
                            size: 'md',
                            color: 'currentColor',
                            className: f.marginLeft8
                        })
                    ]
                })
            ]
        });
    return v
        ? O
        : (0, i.jsxs)(_.ZP, {
              children: [
                  (0, i.jsx)(_.Dx, { children: g.intl.string(g.t.o4JNrK) }),
                  (0, i.jsx)(_.DK, {
                      className: f.marginTop8,
                      children: g.intl.string(g.t.y0tVbm)
                  }),
                  (0, i.jsxs)(_.gO, {
                      className: f.marginTop20,
                      children: [
                          (0, i.jsx)(h.Z, {
                              label: g.intl.string(g.t.eJnn09),
                              alpha2: A.alpha2,
                              countryCode: R,
                              value: e,
                              autoComplete: 'off',
                              spellCheck: 'false',
                              onChange: t,
                              forceMode: d.Nz.PHONE,
                              error: N
                          }),
                          (0, i.jsx)(_.II, {
                              className: f.marginTop20,
                              label: g.intl.string(g.t.OdzNbm),
                              value: a,
                              onChange: x,
                              maxLength: m.z,
                              error: S
                          }),
                          (0, i.jsx)(_.zx, {
                              size: _.zx.Sizes.SMALL,
                              look: _.zx.Looks.LINK,
                              onClick: Z,
                              children: g.intl.string(g.t['5b60go'])
                          }),
                          (0, i.jsx)(_.zx, {
                              className: f.marginTop20,
                              onClick: j,
                              submitting: E,
                              children: g.intl.string(g.t.i4jeWV)
                          })
                      ]
                  })
              ]
          });
};
