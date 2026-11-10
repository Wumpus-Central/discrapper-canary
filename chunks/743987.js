var n = l(477900);
l(582128);
var i = l(164636),
    a = l(834730),
    r = l(866665),
    s = l(111159),
    u = l(370480),
    o = l(682163),
    d = l(773669),
    c = l(696451),
    f = l(71393),
    m = l(811091),
    A = l(792996),
    h = l(972529);
l.d(
    t,
    {},
    {
        A: function (e) {
            let { userId: t, guildId: l, textClassName: g, tooltipDelay: p } = e,
                v = (0, i.bG)([d.default], () => d.default.locale),
                b = (0, i.bG)([f.A], () => (null != l ? f.A.getGuild(l) : null)),
                x = (0, i.bG)([c.Ay], () => (null != l ? c.Ay.getMember(l, t) : null)),
                E = (0, u.An)(m.default.extractTimestamp(t), v),
                j = (0, u.An)(x?.joinedAt, v);
            return null == b || null == x
                ? (0, n.jsx)(a.E, { variant: "body-sm/normal", className: g, children: E })
                : (0, n.jsxs)("div", {
                      className: h.y9,
                      children: [
                          (0, n.jsxs)("div", {
                              className: h.R1,
                              children: [
                                  (0, n.jsx)(r.m, {
                                      text: A.intl.string(A.t.uvGmCx),
                                      delay: p,
                                      children: (0, n.jsx)(s.ClydeIcon, {
                                          size: "custom",
                                          width: 28,
                                          height: 28,
                                          color: "currentColor",
                                          className: h.Mg,
                                      }),
                                  }),
                                  (0, n.jsx)(a.E, { variant: "body-sm/normal", className: g, children: E }),
                              ],
                          }),
                          (0, n.jsx)("div", { className: h.yF }),
                          (0, n.jsxs)("div", {
                              className: h.R1,
                              children: [
                                  (0, n.jsx)(r.m, {
                                      text: b.name,
                                      delay: p,
                                      children: (0, n.jsx)(o.Ay, { guild: b, size: o.Ay.Sizes.SMOL, className: h.$f }),
                                  }),
                                  (0, n.jsx)(a.E, { variant: "body-sm/normal", className: g, children: j }),
                              ],
                          }),
                      ],
                  });
        },
    },
);
