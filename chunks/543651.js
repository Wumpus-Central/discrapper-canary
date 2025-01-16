var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(913527),
    l = r.n(o),
    u = r(442837),
    c = r(481060),
    d = r(835473),
    f = r(318374),
    _ = r(925329),
    h = r(594174),
    p = r(823379),
    m = r(388032),
    g = r(795044);
function E(e) {
    let { createdAt: n, participantIds: r, applicationId: a, title: o, guildId: E, className: v } = e,
        I = (0, d.q)(a),
        T = (0, u.Wu)([h.default], () => {
            var e;
            return null !== (e = r.map((e) => h.default.getUser(e)).filter(p.lm)) && void 0 !== e ? e : [];
        }),
        b = null == I ? void 0 : I.name,
        y = l()(n).fromNow();
    return null == n
        ? null
        : (0, i.jsxs)('div', {
              className: s()(v, g.container),
              children: [
                  (0, i.jsx)(_.Z, { game: I }),
                  (0, i.jsxs)('div', {
                      className: g.textSection,
                      children: [
                          null != o && '' !== o
                              ? (0, i.jsx)(c.Text, {
                                    variant: 'text-md/semibold',
                                    color: 'interactive-active',
                                    children: o
                                })
                              : (0, i.jsx)(c.Text, {
                                    variant: 'text-md/semibold',
                                    color: 'text-muted',
                                    children: m.intl.string(m.t.Cyxddn)
                                }),
                          (0, i.jsxs)(c.Text, {
                              variant: 'text-xs/medium',
                              color: 'text-muted',
                              className: g.__invalid_subtitle,
                              children: [null != b ? ''.concat(b, ' \u2022 ') : null, y]
                          }),
                          (0, i.jsx)(c.Text, {
                              variant: 'text-xs/medium',
                              color: 'text-muted',
                              className: g.__invalid_subtitle
                          })
                      ]
                  }),
                  null != T &&
                      T.length > 0 &&
                      (0, i.jsx)(f.Z, {
                          maxUsers: 4,
                          users: T,
                          className: g.__invalid_facePile,
                          guildId: E
                      })
              ]
          });
}
n.Z = E;
