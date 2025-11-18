n.d(t, { Z: () => h });
var r = n(54381);
n(473749);
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
    m = n(388032),
    g = n(152540);
function N() {
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
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-md/semibold",
                        children: m.intl.string(m.t.cf5lgh),
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
function h(e) {
    let { userId: t, guildId: n, location: l, className: c, onNavigate: m } = e,
        h = (0, s.e7)([u.default], () => u.default.getUser(t), [t]),
        O = (0, s.e7)([o.ZP], () => o.ZP.getMember(n, t), [n, t]);
    return null == h || null == O
        ? null
        : (0, r.jsxs)("div", {
              className: i()(g.container, c),
              children: [
                  (0, r.jsx)(N, {}),
                  (0, r.jsxs)(a.Ttm, {
                      className: g.innerContainer,
                      children: [
                          (0, r.jsx)(T.Z, { member: O }),
                          (0, r.jsx)(I.Z, {
                              userId: t,
                              guildId: n,
                          }),
                          (0, r.jsx)(A.Z, {
                              member: O,
                              onNavigate: m,
                          }),
                          (0, r.jsx)(d.Z, { member: O }),
                          (0, r.jsx)(E.Z, { member: O }),
                          (0, r.jsx)(_.Z, { member: O }),
                      ],
                  }),
              ],
          });
}
