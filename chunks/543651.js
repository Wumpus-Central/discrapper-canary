var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(913527),
    l = r.n(s),
    u = r(442837),
    c = r(481060),
    d = r(835473),
    f = r(318374),
    p = r(925329),
    h = r(594174),
    _ = r(823379),
    m = r(388032),
    g = r(795044);
function E(e) {
    let { createdAt: n, participantIds: r, applicationId: a, title: s, guildId: E, className: v } = e,
        y = (0, d.q)(a),
        b = (0, u.Wu)([h.default], () => {
            var e;
            return null !== (e = r.map((e) => h.default.getUser(e)).filter(_.lm)) && void 0 !== e ? e : [];
        }),
        I = null == y ? void 0 : y.name,
        T = l()(n).fromNow();
    return null == n
        ? null
        : (0, i.jsxs)('div', {
              className: o()(v, g.container),
              children: [
                  (0, i.jsx)(p.Z, { game: y }),
                  (0, i.jsxs)('div', {
                      className: g.textSection,
                      children: [
                          null != s && '' !== s
                              ? (0, i.jsx)(c.Text, {
                                    variant: 'text-md/semibold',
                                    color: 'interactive-active',
                                    children: s
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
                              children: [null != I ? ''.concat(I, ' \u2022 ') : null, T]
                          }),
                          (0, i.jsx)(c.Text, {
                              variant: 'text-xs/medium',
                              color: 'text-muted',
                              className: g.__invalid_subtitle
                          })
                      ]
                  }),
                  null != b &&
                      b.length > 0 &&
                      (0, i.jsx)(f.Z, {
                          maxUsers: 4,
                          users: b,
                          className: g.__invalid_facePile,
                          guildId: E
                      })
              ]
          });
}
n.Z = E;
