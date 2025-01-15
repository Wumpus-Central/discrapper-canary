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
    g = n(388905),
    m = n(815660),
    f = n(388032),
    p = n(847854),
    x = n(275477);
t.Z = () => {
    let [e, t] = r.useState(''),
        [s, _] = r.useState(''),
        [E, I] = r.useState(!1),
        [N, v] = r.useState(!1),
        [C, b] = r.useState(null),
        [Z, j] = r.useState(null),
        T = (0, o.e7)([u.Z], () => u.Z.getCountryCode()),
        S = T.code.split(' ')[0],
        A = async () => {
            try {
                await c.Z.resendCode(e);
            } catch (e) {
                j(e.body.message);
            }
        },
        R = async () => {
            I(!0);
            try {
                let { token: t } = await c.Z.verifyPhone(S + e, s);
                b(null), j(null), v(!0), c.Z.validatePhoneForSupport(t);
            } catch (e) {
                e.body.message ? (b(null), j(e.body.message)) : (b(e.body.phone), j(e.body.code));
            } finally {
                I(!1);
            }
        },
        P = (0, i.jsxs)(g.ZP, {
            children: [
                (0, i.jsx)(g.Ee, { src: n(292824) }),
                (0, i.jsxs)(g.Dx, {
                    className: l()(x.marginTop20, p.flex, p.justifyCenter, p.alignCenter),
                    children: [
                        f.intl.string(f.t.WWzQtb),
                        (0, i.jsx)(a.CircleCheckIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: x.marginLeft8
                        })
                    ]
                })
            ]
        });
    return N
        ? P
        : (0, i.jsxs)(g.ZP, {
              children: [
                  (0, i.jsx)(g.Dx, { children: f.intl.string(f.t.o4JNrK) }),
                  (0, i.jsx)(g.DK, {
                      className: x.marginTop8,
                      children: f.intl.string(f.t.y0tVbm)
                  }),
                  (0, i.jsxs)(g.gO, {
                      className: x.marginTop20,
                      children: [
                          (0, i.jsx)(h.Z, {
                              label: f.intl.string(f.t.eJnn09),
                              alpha2: T.alpha2,
                              countryCode: S,
                              value: e,
                              autoComplete: 'off',
                              spellCheck: 'false',
                              onChange: t,
                              forceMode: d.Nz.PHONE,
                              error: C
                          }),
                          (0, i.jsx)(g.II, {
                              className: x.marginTop20,
                              label: f.intl.string(f.t.OdzNbm),
                              value: s,
                              onChange: _,
                              maxLength: m.z,
                              error: Z
                          }),
                          (0, i.jsx)(g.zx, {
                              size: g.zx.Sizes.SMALL,
                              look: g.zx.Looks.LINK,
                              onClick: A,
                              children: f.intl.string(f.t['5b60go'])
                          }),
                          (0, i.jsx)(g.zx, {
                              className: x.marginTop20,
                              onClick: R,
                              submitting: E,
                              children: f.intl.string(f.t.i4jeWV)
                          })
                      ]
                  })
              ]
          });
};
