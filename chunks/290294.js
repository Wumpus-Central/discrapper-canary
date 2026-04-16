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
    A = n(769786),
    g = n(95173),
    T = n(316076),
    I = n(985018),
    N = n(954531);
function h(e) {
    let { onClose: t } = e;
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
            (0, l.jsx)(s.DUT, {
                onClick: (e) => {
                    e.stopPropagation(), t();
                },
                children: (0, l.jsx)(s.e7I, { shortcut: "esc", keyClassName: N.Wb, className: N.ti }),
            }),
        ],
    });
}
function m(e) {
    let { userId: t, guildId: n, location: r, className: u, onClose: I, onNavigate: m } = e,
        S = (0, i.bG)([E.default], () => E.default.getUser(t), [t]),
        G = (0, i.bG)([o.Ay], () => o.Ay.getMember(n, t), [n, t]);
    return null == S || null == G
        ? null
        : (0, l.jsxs)("div", {
              className: a()(N.kL, u),
              children: [
                  (0, l.jsx)(h, { onClose: I }),
                  (0, l.jsxs)(s.HOs, {
                      className: N.WH,
                      children: [
                          (0, l.jsx)(g.A, { member: G }),
                          (0, l.jsx)(T.A, { userId: t, guildId: n }),
                          (0, l.jsx)(A.A, { member: G, onNavigate: m }),
                          (0, l.jsx)(_.A, { member: G }),
                          (0, l.jsx)(c.A, { member: G }),
                          (0, l.jsx)(d.A, { member: G }),
                      ],
                  }),
              ],
          });
}
