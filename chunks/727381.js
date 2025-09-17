n.d(t, { Z: () => N });
var r = n(951288);
n(647438);
var l = n(120356),
    i = n.n(l),
    a = n(399606),
    s = n(481060),
    o = n(271383),
    u = n(594174),
    c = n(777288),
    E = n(753042),
    d = n(787469),
    _ = n(477718),
    A = n(791176),
    T = n(908474),
    m = n(467014),
    I = n(388032),
    g = n(87819);
function h() {
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
                    (0, r.jsx)(s.X6q, {
                        variant: "heading-md/semibold",
                        children: I.intl.string(I.t.cf5lgo),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                children: (0, r.jsx)(s.M2$, {
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
        N = (0, a.e7)([u.default], () => u.default.getUser(t), [t]),
        O = (0, a.e7)([o.ZP], () => o.ZP.getMember(n, t), [n, t]);
    return null == N || null == O
        ? null
        : (0, r.jsxs)("div", {
              className: i()(g.container, c),
              children: [
                  (0, r.jsx)(h, {}),
                  (0, r.jsxs)(s.Ttm, {
                      className: g.innerContainer,
                      children: [
                          (0, r.jsx)(T.Z, { member: O }),
                          (0, r.jsx)(m.Z, {
                              userId: t,
                              guildId: n,
                          }),
                          (0, r.jsx)(A.Z, {
                              member: O,
                              onNavigate: I,
                          }),
                          (0, r.jsx)(d.Z, { member: O }),
                          (0, r.jsx)(E.Z, { member: O }),
                          (0, r.jsx)(_.Z, { member: O }),
                      ],
                  }),
              ],
          });
}
