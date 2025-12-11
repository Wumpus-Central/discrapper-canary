n.d(t, { Z: () => N });
var r = n(54381);
n(473749);
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
    I = n(467014),
    m = n(388032),
    f = n(280533);
function g() {
    return (0, r.jsxs)("div", {
        className: f.header,
        children: [
            (0, r.jsxs)("div", {
                className: f.headerTitle,
                children: [
                    (0, r.jsx)(c.Z, {
                        width: 16,
                        height: 16,
                    }),
                    (0, r.jsx)(s.Heading, {
                        variant: "heading-md/semibold",
                        children: m.intl.string(m.t.cf5lgh),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                children: (0, r.jsx)(s.M2$, {
                    shortcut: "esc",
                    keyClassName: f.keyComboInner,
                    className: f.keyComboContainer,
                }),
            }),
        ],
    });
}
function N(e) {
    let { userId: t, guildId: n, location: l, className: c, onNavigate: m } = e,
        N = (0, a.e7)([u.default], () => u.default.getUser(t), [t]),
        h = (0, a.e7)([o.ZP], () => o.ZP.getMember(n, t), [n, t]);
    return null == N || null == h
        ? null
        : (0, r.jsxs)("div", {
              className: i()(f.container, c),
              children: [
                  (0, r.jsx)(g, {}),
                  (0, r.jsxs)(s.Ttm, {
                      className: f.innerContainer,
                      children: [
                          (0, r.jsx)(T.Z, { member: h }),
                          (0, r.jsx)(I.Z, {
                              userId: t,
                              guildId: n,
                          }),
                          (0, r.jsx)(A.Z, {
                              member: h,
                              onNavigate: m,
                          }),
                          (0, r.jsx)(d.Z, { member: h }),
                          (0, r.jsx)(E.Z, { member: h }),
                          (0, r.jsx)(_.Z, { member: h }),
                      ],
                  }),
              ],
          });
}
