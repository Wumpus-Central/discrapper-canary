t.d(l, { A: () => p });
var s = t(477900);
t(582128);
var n = t(702841),
    i = t(834730),
    a = t(866665),
    r = t(111159),
    u = t(370480),
    d = t(548118),
    c = t(773669),
    o = t(696451),
    m = t(71393),
    A = t(935208),
    f = t(375708),
    h = t(972529);
function p(e) {
    let { userId: l, guildId: t, textClassName: p, tooltipDelay: x } = e,
        v = (0, n.bG)([c.default], () => c.default.locale),
        g = (0, n.bG)([m.A], () => (null != t ? m.A.getGuild(t) : null)),
        j = (0, n.bG)([o.Ay], () => (null != t ? o.Ay.getMember(t, l) : null)),
        E = (0, u.An)(A.default.extractTimestamp(l), v),
        N = (0, u.An)(j?.joinedAt, v);
    return null == g || null == j
        ? (0, s.jsx)(i.E, { variant: "text-sm/normal", className: p, children: E })
        : (0, s.jsxs)("div", {
              className: h.y9,
              children: [
                  (0, s.jsxs)("div", {
                      className: h.R1,
                      children: [
                          (0, s.jsx)(a.m, {
                              text: f.intl.string(f.t.uvGmCx),
                              delay: x,
                              children: (0, s.jsx)(r.p, {
                                  size: "custom",
                                  width: 28,
                                  height: 28,
                                  color: "currentColor",
                                  className: h.Mg,
                              }),
                          }),
                          (0, s.jsx)(i.E, { variant: "text-sm/normal", className: p, children: E }),
                      ],
                  }),
                  (0, s.jsx)("div", { className: h.yF }),
                  (0, s.jsxs)("div", {
                      className: h.R1,
                      children: [
                          (0, s.jsx)(a.m, {
                              text: g.name,
                              delay: x,
                              children: (0, s.jsx)(d.Ay, { guild: g, size: d.Ay.Sizes.SMOL, className: h.$f }),
                          }),
                          (0, s.jsx)(i.E, { variant: "text-sm/normal", className: p, children: N }),
                      ],
                  }),
              ],
          });
}
