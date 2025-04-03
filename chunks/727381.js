n.d(t, { Z: () => y });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(399606),
    a = n(481060),
    s = n(271383),
    c = n(594174),
    u = n(777288),
    d = n(753042),
    p = n(787469),
    h = n(477718),
    f = n(791176),
    m = n(301242),
    g = n(467014),
    b = n(388032),
    _ = n(12740);
function C() {
    return (0, r.jsxs)('div', {
        className: _.header,
        children: [
            (0, r.jsxs)('div', {
                className: _.headerTitle,
                children: [
                    (0, r.jsx)(u.Z, {
                        width: 16,
                        height: 16
                    }),
                    (0, r.jsx)(a.X6q, {
                        variant: 'heading-md/semibold',
                        children: b.NW.string(b.t.kj3tz8)
                    })
                ]
            }),
            (0, r.jsx)('div', {
                children: (0, r.jsx)(a.M2$, {
                    shortcut: 'esc',
                    keyClassName: _.keyComboInner,
                    className: _.keyComboContainer
                })
            })
        ]
    });
}
function y(e) {
    let { userId: t, guildId: n, location: i, className: u, onNavigate: b } = e,
        y = (0, o.e7)([c.default], () => c.default.getUser(t), [t]),
        x = (0, o.e7)([s.ZP], () => s.ZP.getMember(n, t), [n, t]);
    return null == y || null == x
        ? null
        : (0, r.jsxs)('div', {
              className: l()(_.container, u),
              children: [
                  (0, r.jsx)(C, {}),
                  (0, r.jsxs)(a.Ttm, {
                      className: _.innerContainer,
                      children: [
                          (0, r.jsx)(m.Z, { member: x }),
                          (0, r.jsx)(g.Z, {
                              userId: t,
                              guildId: n
                          }),
                          (0, r.jsx)(f.Z, {
                              member: x,
                              onNavigate: b
                          }),
                          (0, r.jsx)(p.Z, { member: x }),
                          (0, r.jsx)(d.Z, { member: x }),
                          (0, r.jsx)(h.Z, { member: x })
                      ]
                  })
              ]
          });
}
