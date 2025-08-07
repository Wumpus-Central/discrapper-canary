n.d(t, { Z: () => N });
var r = n(255367);
n(73800);
var l = n(120356),
    s = n.n(l),
    i = n(399606),
    a = n(481060),
    o = n(271383),
    u = n(594174),
    c = n(777288),
    d = n(753042),
    E = n(787469),
    _ = n(477718),
    A = n(791176),
    T = n(908474),
    m = n(467014),
    I = n(388032),
    g = n(12740);
function f() {
    return (0, r.jsxs)("div", {
        className: g.header,
        children: [
            (0, r.jsxs)("div", {
                className: g.headerTitle,
                children: [
                    (0, r.jsx)(c.Z, {
                        width: 16,
                        height: 16,
                    }),
                    (0, r.jsx)(a.X6q, {
                        variant: "heading-md/semibold",
                        children: I.intl.string(I.t.cf5lgo),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                children: (0, r.jsx)(a.M2$, {
                    shortcut: "esc",
                    keyClassName: g.keyComboInner,
                    className: g.keyComboContainer,
                }),
            }),
        ],
    });
}
function N(e) {
    let { userId: t, guildId: n, location: l, className: c, onNavigate: I } = e,
        N = (0, i.e7)([u.default], () => u.default.getUser(t), [t]),
        h = (0, i.e7)([o.ZP], () => o.ZP.getMember(n, t), [n, t]);
    return null == N || null == h
        ? null
        : (0, r.jsxs)("div", {
              className: s()(g.container, c),
              children: [
                  (0, r.jsx)(f, {}),
                  (0, r.jsxs)(a.Ttm, {
                      className: g.innerContainer,
                      children: [
                          (0, r.jsx)(T.Z, { member: h }),
                          (0, r.jsx)(m.Z, {
                              userId: t,
                              guildId: n,
                          }),
                          (0, r.jsx)(A.Z, {
                              member: h,
                              onNavigate: I,
                          }),
                          (0, r.jsx)(E.Z, { member: h }),
                          (0, r.jsx)(d.Z, { member: h }),
                          (0, r.jsx)(_.Z, { member: h }),
                      ],
                  }),
              ],
          });
}
