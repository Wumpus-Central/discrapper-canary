i.d(l, { A: () => p });
var t = i(477900);
i(582128);
var n = i(702841),
    a = i(834730),
    s = i(866665),
    r = i(111159),
    d = i(370480),
    u = i(548118),
    c = i(773669),
    o = i(696451),
    m = i(71393),
    f = i(935208),
    A = i(105292),
    h = i(972529);
function p(e) {
    let { userId: l, guildId: i, textClassName: p, tooltipDelay: x } = e,
        v = (0, n.bG)([c.default], () => c.default.locale),
        g = (0, n.bG)([m.A], () => (null != i ? m.A.getGuild(i) : null)),
        j = (0, n.bG)([o.Ay], () => (null != i ? o.Ay.getMember(i, l) : null)),
        E = (0, d.An)(f.default.extractTimestamp(l), v),
        b = (0, d.An)(j?.joinedAt, v);
    return null == g || null == j
        ? (0, t.jsx)(a.E, { variant: "text-sm/normal", className: p, children: E })
        : (0, t.jsxs)("div", {
              className: h.y9,
              children: [
                  (0, t.jsxs)("div", {
                      className: h.R1,
                      children: [
                          (0, t.jsx)(s.m, {
                              text: A.intl.string(A.t.uvGmCx),
                              delay: x,
                              children: (0, t.jsx)(r.p, {
                                  size: "custom",
                                  width: 28,
                                  height: 28,
                                  color: "currentColor",
                                  className: h.Mg,
                              }),
                          }),
                          (0, t.jsx)(a.E, { variant: "text-sm/normal", className: p, children: E }),
                      ],
                  }),
                  (0, t.jsx)("div", { className: h.yF }),
                  (0, t.jsxs)("div", {
                      className: h.R1,
                      children: [
                          (0, t.jsx)(s.m, {
                              text: g.name,
                              delay: x,
                              children: (0, t.jsx)(u.Ay, { guild: g, size: u.Ay.Sizes.SMOL, className: h.$f }),
                          }),
                          (0, t.jsx)(a.E, { variant: "text-sm/normal", className: p, children: b }),
                      ],
                  }),
              ],
          });
}
