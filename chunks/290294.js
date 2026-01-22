n.d(t, { A: () => O });
var l = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    i = n(417597),
    s = n(397927),
    o = n(696451),
    c = n(287809),
    u = n(881548),
    E = n(666813),
    d = n(686378),
    _ = n(908627),
    g = n(769786),
    A = n(95173),
    T = n(316076),
    f = n(985018),
    h = n(438536);
function I() {
    return (0, l.jsxs)("div", {
        className: h.wx,
        children: [
            (0, l.jsxs)("div", {
                className: h.qd,
                children: [
                    (0, l.jsx)(u.A, {
                        width: 16,
                        height: 16,
                    }),
                    (0, l.jsx)(s.Heading, {
                        variant: "heading-md/semibold",
                        children: f.intl.string(f.t.cf5lgh),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                children: (0, l.jsx)(s.e7I, {
                    shortcut: "esc",
                    keyClassName: h.Wb,
                    className: h.ti,
                }),
            }),
        ],
    });
}
function O(e) {
    let { userId: t, guildId: n, location: r, className: u, onNavigate: f } = e,
        O = (0, i.bG)([c.default], () => c.default.getUser(t), [t]),
        N = (0, i.bG)([o.Ay], () => o.Ay.getMember(n, t), [n, t]);
    return null == O || null == N
        ? null
        : (0, l.jsxs)("div", {
              className: a()(h.kL, u),
              children: [
                  (0, l.jsx)(I, {}),
                  (0, l.jsxs)(s.HOs, {
                      className: h.WH,
                      children: [
                          (0, l.jsx)(A.A, { member: N }),
                          (0, l.jsx)(T.A, {
                              userId: t,
                              guildId: n,
                          }),
                          (0, l.jsx)(g.A, {
                              member: N,
                              onNavigate: f,
                          }),
                          (0, l.jsx)(d.A, { member: N }),
                          (0, l.jsx)(E.A, { member: N }),
                          (0, l.jsx)(_.A, { member: N }),
                      ],
                  }),
              ],
          });
}
