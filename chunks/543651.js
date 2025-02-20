n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(913527),
    s = n.n(a),
    l = n(442837),
    c = n(481060),
    u = n(835473),
    d = n(318374),
    f = n(925329),
    p = n(594174),
    _ = n(823379),
    h = n(388032),
    m = n(575903);
let g = function (e) {
    let { createdAt: t, participantIds: n, applicationId: i, title: a, guildId: g, className: E } = e,
        v = (0, u.q)(i),
        b = (0, l.Wu)([p.default], () => {
            var e;
            return null !== (e = n.map((e) => p.default.getUser(e)).filter(_.lm)) && void 0 !== e ? e : [];
        }),
        y = null == v ? void 0 : v.name,
        O = s()(t).fromNow();
    return null == t
        ? null
        : (0, r.jsxs)('div', {
              className: o()(E, m.container),
              children: [
                  (0, r.jsx)(f.Z, { game: v }),
                  (0, r.jsxs)('div', {
                      className: m.textSection,
                      children: [
                          null != a && '' !== a
                              ? (0, r.jsx)(c.Text, {
                                    variant: 'text-md/semibold',
                                    color: 'interactive-active',
                                    children: a
                                })
                              : (0, r.jsx)(c.Text, {
                                    variant: 'text-md/semibold',
                                    color: 'text-muted',
                                    children: h.NW.string(h.t.Cyxddn)
                                }),
                          (0, r.jsxs)(c.Text, {
                              variant: 'text-xs/medium',
                              color: 'text-muted',
                              className: m.__invalid_subtitle,
                              children: [null != y ? ''.concat(y, ' \u2022 ') : null, O]
                          }),
                          (0, r.jsx)(c.Text, {
                              variant: 'text-xs/medium',
                              color: 'text-muted',
                              className: m.__invalid_subtitle
                          })
                      ]
                  }),
                  null != b &&
                      b.length > 0 &&
                      (0, r.jsx)(d.Z, {
                          maxUsers: 4,
                          users: b,
                          className: m.__invalid_facePile,
                          guildId: g
                      })
              ]
          });
};
