t.d(e, { Z: () => w });
var n = t(255367);
t(73800);
var r = t(120356),
    l = t.n(r),
    i = t(399606),
    s = t(481060),
    a = t(271383),
    o = t(594174),
    g = t(777288),
    v = t(753042),
    f = t(787469),
    c = t(477718),
    h = t(791176),
    u = t(908474),
    E = t(467014),
    d = t(388032),
    C = t(12740);
function B() {
    return (0, n.jsxs)('div', {
        className: C.header,
        children: [
            (0, n.jsxs)('div', {
                className: C.headerTitle,
                children: [
                    (0, n.jsx)(g.Z, {
                        width: 16,
                        height: 16
                    }),
                    (0, n.jsx)(s.X6q, {
                        variant: 'heading-md/semibold',
                        children: d.intl.string(d.t.cf5lgo)
                    })
                ]
            }),
            (0, n.jsx)('div', {
                children: (0, n.jsx)(s.M2$, {
                    shortcut: 'esc',
                    keyClassName: C.keyComboInner,
                    className: C.keyComboContainer
                })
            })
        ]
    });
}
function w(A) {
    let { userId: e, guildId: t, location: r, className: g, onNavigate: d } = A,
        w = (0, i.e7)([o.default], () => o.default.getUser(e), [e]),
        D = (0, i.e7)([a.ZP], () => a.ZP.getMember(t, e), [t, e]);
    return null == w || null == D
        ? null
        : (0, n.jsxs)('div', {
              className: l()(C.container, g),
              children: [
                  (0, n.jsx)(B, {}),
                  (0, n.jsxs)(s.Ttm, {
                      className: C.innerContainer,
                      children: [
                          (0, n.jsx)(u.Z, { member: D }),
                          (0, n.jsx)(E.Z, {
                              userId: e,
                              guildId: t
                          }),
                          (0, n.jsx)(h.Z, {
                              member: D,
                              onNavigate: d
                          }),
                          (0, n.jsx)(f.Z, { member: D }),
                          (0, n.jsx)(v.Z, { member: D }),
                          (0, n.jsx)(c.Z, { member: D })
                      ]
                  })
              ]
          });
}
