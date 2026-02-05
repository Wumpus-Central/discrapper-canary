n.d(t, { A: () => m });
var l = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    i = n(417597),
    s = n(397927),
    o = n(696451),
    E = n(287809),
    u = n(881548),
    c = n(666813),
    _ = n(686378),
    d = n(908627),
    g = n(769786),
    A = n(95173),
    T = n(316076),
    I = n(985018),
    N = n(438536);
function h() {
    return (0, l.jsxs)("div", {
        className: N.wx,
        children: [
            (0, l.jsxs)("div", {
                className: N.qd,
                children: [
                    (0, l.jsx)(u.A, { width: 16, height: 16 }),
                    (0, l.jsx)(s.Heading, { variant: "heading-md/semibold", children: I.intl.string(I.t.cf5lgh) }),
                ],
            }),
            (0, l.jsx)("div", {
                children: (0, l.jsx)(s.e7I, { shortcut: "esc", keyClassName: N.Wb, className: N.ti }),
            }),
        ],
    });
}
function m(e) {
    let { userId: t, guildId: n, location: r, className: u, onNavigate: I } = e,
        m = (0, i.bG)([E.default], () => E.default.getUser(t), [t]),
        S = (0, i.bG)([o.Ay], () => o.Ay.getMember(n, t), [n, t]);
    return null == m || null == S
        ? null
        : (0, l.jsxs)("div", {
              className: a()(N.kL, u),
              children: [
                  (0, l.jsx)(h, {}),
                  (0, l.jsxs)(s.HOs, {
                      className: N.WH,
                      children: [
                          (0, l.jsx)(A.A, { member: S }),
                          (0, l.jsx)(T.A, { userId: t, guildId: n }),
                          (0, l.jsx)(g.A, { member: S, onNavigate: I }),
                          (0, l.jsx)(_.A, { member: S }),
                          (0, l.jsx)(c.A, { member: S }),
                          (0, l.jsx)(d.A, { member: S }),
                      ],
                  }),
              ],
          });
}
