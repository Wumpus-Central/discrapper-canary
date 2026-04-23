n.d(t, { A: () => R });
var l = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    i = n(417597),
    s = n(534514),
    E = n(939249),
    _ = n(475358),
    u = n(573613),
    o = n(696451),
    c = n(287809),
    d = n(881548),
    A = n(666813),
    g = n(686378),
    T = n(908627),
    I = n(769786),
    N = n(95173),
    G = n(316076),
    m = n(985018),
    O = n(645267);
function S(e) {
    let { onClose: t } = e;
    return (0, l.jsxs)("div", {
        className: O.wx,
        children: [
            (0, l.jsxs)("div", {
                className: O.qd,
                children: [
                    (0, l.jsx)(d.A, { width: 16, height: 16 }),
                    (0, l.jsx)(s.D, { variant: "heading-md/semibold", children: m.intl.string(m.t.cf5lgh) }),
                ],
            }),
            (0, l.jsx)(E.D, {
                onClick: (e) => {
                    e.stopPropagation(), t();
                },
                children: (0, l.jsx)(_.e, { shortcut: "esc", keyClassName: O.Wb, className: O.ti }),
            }),
        ],
    });
}
function R(e) {
    let { userId: t, guildId: n, location: a, className: s, onClose: E, onNavigate: _ } = e,
        d = (0, i.bG)([c.default], () => c.default.getUser(t), [t]),
        m = (0, i.bG)([o.Ay], () => o.Ay.getMember(n, t), [n, t]);
    return null == d || null == m
        ? null
        : (0, l.jsxs)("div", {
              className: r()(O.kL, s),
              children: [
                  (0, l.jsx)(S, { onClose: E }),
                  (0, l.jsxs)(u.Ip, {
                      className: O.WH,
                      children: [
                          (0, l.jsx)(N.A, { member: m }),
                          (0, l.jsx)(G.A, { userId: t, guildId: n }),
                          (0, l.jsx)(I.A, { member: m, onNavigate: _ }),
                          (0, l.jsx)(g.A, { member: m }),
                          (0, l.jsx)(A.A, { member: m }),
                          (0, l.jsx)(T.A, { member: m }),
                      ],
                  }),
              ],
          });
}
