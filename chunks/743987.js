var l = n(477900);
n(582128);
var i = n(164636),
    r = n(834730),
    u = n(866665),
    a = n(111159),
    s = n(370480),
    o = n(682163),
    d = n(773669),
    f = n(696451),
    c = n(71393),
    m = n(811091),
    p = n(792996),
    h = n(972529);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { userId: t, guildId: n, textClassName: A, tooltipDelay: g } = e,
                E = (0, i.bG)([d.default], () => d.default.locale),
                v = (0, i.bG)([c.A], () => (null != n ? c.A.getGuild(n) : null)),
                x = (0, i.bG)([f.Ay], () => (null != n ? f.Ay.getMember(n, t) : null)),
                b = (0, s.An)(m.default.extractTimestamp(t), E),
                y = (0, s.An)(x?.joinedAt, E);
            return null == v || null == x
                ? (0, l.jsx)(r.E, { variant: "body-sm/normal", className: A, children: b })
                : (0, l.jsxs)("div", {
                      className: h.y9,
                      children: [
                          (0, l.jsxs)("div", {
                              className: h.R1,
                              children: [
                                  (0, l.jsx)(u.m, {
                                      text: p.intl.string(p.t.uvGmCx),
                                      delay: g,
                                      children: (0, l.jsx)(a.ClydeIcon, {
                                          size: "custom",
                                          width: 28,
                                          height: 28,
                                          color: "currentColor",
                                          className: h.Mg,
                                      }),
                                  }),
                                  (0, l.jsx)(r.E, { variant: "body-sm/normal", className: A, children: b }),
                              ],
                          }),
                          (0, l.jsx)("div", { className: h.yF }),
                          (0, l.jsxs)("div", {
                              className: h.R1,
                              children: [
                                  (0, l.jsx)(u.m, {
                                      text: v.name,
                                      delay: g,
                                      children: (0, l.jsx)(o.Ay, { guild: v, size: o.Ay.Sizes.SMOL, className: h.$f }),
                                  }),
                                  (0, l.jsx)(r.E, { variant: "body-sm/normal", className: A, children: y }),
                              ],
                          }),
                      ],
                  });
        },
    },
);
