n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(913527),
    o = n.n(s),
    l = n(442837),
    u = n(481060),
    c = n(835473),
    d = n(318374),
    f = n(925329),
    _ = n(594174),
    p = n(823379),
    h = n(388032),
    m = n(795044);
let g = function (e) {
    let { createdAt: t, participantIds: n, applicationId: r, title: s, guildId: g, className: E } = e,
        v = (0, c.q)(r),
        y = (0, l.Wu)([_.default], () => {
            var e;
            return null !== (e = n.map((e) => _.default.getUser(e)).filter(p.lm)) && void 0 !== e ? e : [];
        }),
        I = null == v ? void 0 : v.name,
        T = o()(t).fromNow();
    return null == t
        ? null
        : (0, i.jsxs)('div', {
              className: a()(E, m.container),
              children: [
                  (0, i.jsx)(f.Z, { game: v }),
                  (0, i.jsxs)('div', {
                      className: m.textSection,
                      children: [
                          null != s && '' !== s
                              ? (0, i.jsx)(u.Text, {
                                    variant: 'text-md/semibold',
                                    color: 'interactive-active',
                                    children: s
                                })
                              : (0, i.jsx)(u.Text, {
                                    variant: 'text-md/semibold',
                                    color: 'text-muted',
                                    children: h.intl.string(h.t.Cyxddn)
                                }),
                          (0, i.jsxs)(u.Text, {
                              variant: 'text-xs/medium',
                              color: 'text-muted',
                              className: m.__invalid_subtitle,
                              children: [null != I ? ''.concat(I, ' \u2022 ') : null, T]
                          }),
                          (0, i.jsx)(u.Text, {
                              variant: 'text-xs/medium',
                              color: 'text-muted',
                              className: m.__invalid_subtitle
                          })
                      ]
                  }),
                  null != y &&
                      y.length > 0 &&
                      (0, i.jsx)(d.Z, {
                          maxUsers: 4,
                          users: y,
                          className: m.__invalid_facePile,
                          guildId: g
                      })
              ]
          });
};
