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
    _ = n(594174),
    p = n(823379),
    h = n(388032),
    m = n(352665);
let g = function (e) {
    let { createdAt: t, participantIds: n, applicationId: i, title: a, guildId: g, className: E } = e,
        b = (0, u.q)(i),
        y = (0, l.Wu)([_.default], () => {
            var e;
            return null != (e = n.map((e) => _.default.getUser(e)).filter(p.lm)) ? e : [];
        }),
        v = null == b ? void 0 : b.name,
        O = s()(t).fromNow();
    return null == t
        ? null
        : (0, r.jsxs)('div', {
              className: o()(E, m.container),
              children: [
                  (0, r.jsx)(f.Z, { game: b }),
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
                              children: [null != v ? ''.concat(v, ' \u2022 ') : null, O]
                          }),
                          (0, r.jsx)(c.Text, {
                              variant: 'text-xs/medium',
                              color: 'text-muted',
                              className: m.__invalid_subtitle
                          })
                      ]
                  }),
                  null != y &&
                      y.length > 0 &&
                      (0, r.jsx)(d.Z, {
                          maxUsers: 4,
                          users: y,
                          className: m.__invalid_facePile,
                          guildId: g
                      })
              ]
          });
};
