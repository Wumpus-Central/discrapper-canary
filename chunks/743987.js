i.d(l, { A: () => p });
var a = i(477900);
i(582128);
var s = i(702841),
    n = i(834730),
    t = i(866665),
    r = i(111159),
    d = i(370480),
    u = i(548118),
    o = i(773669),
    c = i(696451),
    m = i(71393),
    f = i(935208),
    A = i(105292),
    h = i(972529);
function p(e) {
    let { userId: l, guildId: i, textClassName: p, tooltipDelay: x } = e,
        v = (0, s.bG)([o.default], () => o.default.locale),
        g = (0, s.bG)([m.A], () => (null != i ? m.A.getGuild(i) : null)),
        j = (0, s.bG)([c.Ay], () => (null != i ? c.Ay.getMember(i, l) : null)),
        b = (0, d.An)(f.default.extractTimestamp(l), v),
        N = (0, d.An)(j?.joinedAt, v);
    return null == g || null == j
        ? (0, a.jsx)(n.E, { variant: "body-sm/normal", className: p, children: b })
        : (0, a.jsxs)("div", {
              className: h.y9,
              children: [
                  (0, a.jsxs)("div", {
                      className: h.R1,
                      children: [
                          (0, a.jsx)(t.m, {
                              text: A.intl.string(A.t.uvGmCx),
                              delay: x,
                              children: (0, a.jsx)(r.p, {
                                  size: "custom",
                                  width: 28,
                                  height: 28,
                                  color: "currentColor",
                                  className: h.Mg,
                              }),
                          }),
                          (0, a.jsx)(n.E, { variant: "body-sm/normal", className: p, children: b }),
                      ],
                  }),
                  (0, a.jsx)("div", { className: h.yF }),
                  (0, a.jsxs)("div", {
                      className: h.R1,
                      children: [
                          (0, a.jsx)(t.m, {
                              text: g.name,
                              delay: x,
                              children: (0, a.jsx)(u.Ay, { guild: g, size: u.Ay.Sizes.SMOL, className: h.$f }),
                          }),
                          (0, a.jsx)(n.E, { variant: "body-sm/normal", className: p, children: N }),
                      ],
                  }),
              ],
          });
}
