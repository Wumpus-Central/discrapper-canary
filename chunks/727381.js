n.d(t, { Z: () => v });
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(399606),
    s = n(481060),
    o = n(271383),
    c = n(594174),
    d = n(777288),
    u = n(753042),
    h = n(787469),
    p = n(477718),
    m = n(791176),
    f = n(908474),
    g = n(467014),
    _ = n(388032),
    C = n(859113);
function x() {
    return (0, i.jsxs)('div', {
        className: C.header,
        children: [
            (0, i.jsxs)('div', {
                className: C.headerTitle,
                children: [
                    (0, i.jsx)(d.Z, {
                        width: 16,
                        height: 16
                    }),
                    (0, i.jsx)(s.X6q, {
                        variant: 'heading-md/semibold',
                        children: _.intl.string(_.t.kj3tz8)
                    })
                ]
            }),
            (0, i.jsx)('div', {
                children: (0, i.jsx)(s.M2$, {
                    shortcut: 'esc',
                    keyClassName: C.keyComboInner,
                    className: C.keyComboContainer
                })
            })
        ]
    });
}
function v(e) {
    let { userId: t, guildId: n, location: l, className: d, onNavigate: _ } = e,
        v = (0, r.e7)([c.default], () => c.default.getUser(t), [t]),
        E = (0, r.e7)([o.ZP], () => o.ZP.getMember(n, t), [n, t]);
    return null == v || null == E
        ? null
        : (0, i.jsxs)('div', {
              className: a()(C.container, d),
              children: [
                  (0, i.jsx)(x, {}),
                  (0, i.jsxs)(s.Ttm, {
                      className: C.innerContainer,
                      children: [
                          (0, i.jsx)(f.Z, { member: E }),
                          (0, i.jsx)(g.Z, {
                              userId: t,
                              guildId: n
                          }),
                          (0, i.jsx)(m.Z, {
                              member: E,
                              onNavigate: _
                          }),
                          (0, i.jsx)(h.Z, { member: E }),
                          (0, i.jsx)(u.Z, { member: E }),
                          (0, i.jsx)(p.Z, { member: E })
                      ]
                  })
              ]
          });
}
