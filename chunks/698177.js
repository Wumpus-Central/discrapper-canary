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
    h = n(952802),
    _ = n(388905),
    m = n(815660),
    g = n(388032),
    p = n(179683),
    f = n(483938);
let E = () => {
    let [e, t] = r.useState(''),
        [l, E] = r.useState(''),
        [x, I] = r.useState(!1),
        [C, v] = r.useState(!1),
        [N, S] = r.useState(null),
        [T, A] = r.useState(null),
        b = (0, o.e7)([u.Z], () => u.Z.getCountryCode()),
        R = b.code.split(' ')[0],
        Z = async () => {
            try {
                await c.Z.resendCode(e);
            } catch (e) {
                A(e.body.message);
            }
        },
        O = async () => {
            I(!0);
            try {
                let { token: t } = await c.Z.verifyPhone(R + e, l);
                S(null), A(null), v(!0), c.Z.validatePhoneForSupport(t);
            } catch (e) {
                e.body.message ? (S(null), A(e.body.message)) : (S(e.body.phone), A(e.body.code));
            } finally {
                I(!1);
            }
        },
        j = (0, i.jsxs)(_.ZP, {
            children: [
                (0, i.jsx)(_.Ee, { src: n(292824) }),
                (0, i.jsxs)(_.Dx, {
                    className: a()(f.marginTop20, p.flex, p.justifyCenter, p.alignCenter),
                    children: [
                        g.intl.string(g.t.WWzQtb),
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
                              alpha2: b.alpha2,
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
                              value: l,
                              onChange: E,
                              maxLength: m.z,
                              error: T
                          }),
                          (0, i.jsx)(_.zx, {
                              size: _.zx.Sizes.SMALL,
                              look: _.zx.Looks.LINK,
                              onClick: Z,
                              children: g.intl.string(g.t['5b60go'])
                          }),
                          (0, i.jsx)(_.zx, {
                              className: f.marginTop20,
                              onClick: O,
                              submitting: x,
                              children: g.intl.string(g.t.i4jeWV)
                          })
                      ]
                  })
              ]
          });
};
