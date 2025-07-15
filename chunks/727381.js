n.d(t, { Z: () => O });
var r = n(255367);
n(73800);
var l = n(120356),
    i = n.n(l),
    s = n(399606),
    a = n(481060),
    o = n(271383),
    u = n(594174),
    c = n(777288),
    E = n(753042),
    d = n(787469),
    _ = n(477718),
    A = n(791176),
    T = n(908474),
    I = n(467014),
    g = n(388032),
    m = n(12740);
function f() {
    return (0, r.jsxs)('div', {
        className: m.header,
        children: [
            (0, r.jsxs)('div', {
                className: m.headerTitle,
                children: [
                    (0, r.jsx)(c.Z, {
                        width: 16,
                        height: 16
                    }),
                    (0, r.jsx)(a.X6q, {
                        variant: 'heading-md/semibold',
                        children: g.intl.string(g.t.cf5lgo)
                    })
                ]
            }),
            (0, r.jsx)('div', {
                children: (0, r.jsx)(a.M2$, {
                    shortcut: 'esc',
                    keyClassName: m.keyComboInner,
                    className: m.keyComboContainer
                })
            })
        ]
    });
}
function O(e) {
    let { userId: t, guildId: n, location: l, className: c, onNavigate: g } = e,
        O = (0, s.e7)([u.default], () => u.default.getUser(t), [t]),
        N = (0, s.e7)([o.ZP], () => o.ZP.getMember(n, t), [n, t]);
    return null == O || null == N
        ? null
        : (0, r.jsxs)('div', {
              className: i()(m.container, c),
              children: [
                  (0, r.jsx)(f, {}),
                  (0, r.jsxs)(a.Ttm, {
                      className: m.innerContainer,
                      children: [
                          (0, r.jsx)(T.Z, { member: N }),
                          (0, r.jsx)(I.Z, {
                              userId: t,
                              guildId: n
                          }),
                          (0, r.jsx)(A.Z, {
                              member: N,
                              onNavigate: g
                          }),
                          (0, r.jsx)(d.Z, { member: N }),
                          (0, r.jsx)(E.Z, { member: N }),
                          (0, r.jsx)(_.Z, { member: N })
                      ]
                  })
              ]
          });
}
