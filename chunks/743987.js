var i = l(477900);
l(582128);
var a = l(164636),
    s = l(834730),
    n = l(866665),
    r = l(111159),
    d = l(370480),
    u = l(682163),
    o = l(773669),
    c = l(696451),
    f = l(71393),
    A = l(811091),
    m = l(792996),
    h = l(972529);
l.d(
    t,
    {},
    {
        A: function (e) {
            let { userId: t, guildId: l, textClassName: p, tooltipDelay: g } = e,
                v = (0, a.bG)([o.default], () => o.default.locale),
                x = (0, a.bG)([f.A], () => (null != l ? f.A.getGuild(l) : null)),
                j = (0, a.bG)([c.Ay], () => (null != l ? c.Ay.getMember(l, t) : null)),
                b = (0, d.An)(A.default.extractTimestamp(t), v),
                y = (0, d.An)(j?.joinedAt, v);
            return null == x || null == j
                ? (0, i.jsx)(s.E, { variant: "body-sm/normal", className: p, children: b })
                : (0, i.jsxs)("div", {
                      className: h.y9,
                      children: [
                          (0, i.jsxs)("div", {
                              className: h.R1,
                              children: [
                                  (0, i.jsx)(n.m, {
                                      text: m.intl.string(m.t.uvGmCx),
                                      delay: g,
                                      children: (0, i.jsx)(r.ClydeIcon, {
                                          size: "custom",
                                          width: 28,
                                          height: 28,
                                          color: "currentColor",
                                          className: h.Mg,
                                      }),
                                  }),
                                  (0, i.jsx)(s.E, { variant: "body-sm/normal", className: p, children: b }),
                              ],
                          }),
                          (0, i.jsx)("div", { className: h.yF }),
                          (0, i.jsxs)("div", {
                              className: h.R1,
                              children: [
                                  (0, i.jsx)(n.m, {
                                      text: x.name,
                                      delay: g,
                                      children: (0, i.jsx)(u.Ay, { guild: x, size: u.Ay.Sizes.SMOL, className: h.$f }),
                                  }),
                                  (0, i.jsx)(s.E, { variant: "body-sm/normal", className: p, children: y }),
                              ],
                          }),
                      ],
                  });
        },
    },
);
