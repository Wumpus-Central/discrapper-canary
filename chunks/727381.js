n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(399606),
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
    C = n(388032),
    x = n(758570);
function v() {
    return (0, i.jsxs)('div', {
        className: x.header,
        children: [
            (0, i.jsxs)('div', {
                className: x.headerTitle,
                children: [
                    (0, i.jsx)(d.Z, {
                        width: 16,
                        height: 16
                    }),
                    (0, i.jsx)(s.Heading, {
                        variant: 'heading-md/semibold',
                        children: C.intl.string(C.t.kj3tz8)
                    })
                ]
            }),
            (0, i.jsx)('div', {
                children: (0, i.jsx)(s.KeyCombo, {
                    shortcut: 'esc',
                    keyClassName: x.keyComboInner,
                    className: x.keyComboContainer
                })
            })
        ]
    });
}
function _(e) {
    let { userId: t, guildId: n, location: l, className: d, onNavigate: C } = e,
        _ = (0, a.e7)([c.default], () => c.default.getUser(t), [t]),
        I = (0, a.e7)([o.ZP], () => o.ZP.getMember(n, t), [n, t]);
    return null == _ || null == I
        ? null
        : (0, i.jsxs)('div', {
              className: r()(x.container, d),
              children: [
                  (0, i.jsx)(v, {}),
                  (0, i.jsxs)(s.Scroller, {
                      className: x.innerContainer,
                      children: [
                          (0, i.jsx)(f.Z, { member: I }),
                          (0, i.jsx)(g.Z, {
                              userId: t,
                              guildId: n
                          }),
                          (0, i.jsx)(m.Z, {
                              member: I,
                              onNavigate: C
                          }),
                          (0, i.jsx)(h.Z, { member: I }),
                          (0, i.jsx)(u.Z, { member: I }),
                          (0, i.jsx)(p.Z, { member: I })
                      ]
                  })
              ]
          });
}
