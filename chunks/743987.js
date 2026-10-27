i.d(l, { A: () => h });
var a = i(477900);
i(582128);
var s = i(702841),
    t = i(834730),
    n = i(866665),
    r = i(111159),
    d = i(370480),
    u = i(548118),
    o = i(773669),
    c = i(696451),
    m = i(71393),
    f = i(935208),
    A = i(105292),
    x = i(972529);
function h(e) {
    let { userId: l, guildId: i, textClassName: h, tooltipDelay: p } = e,
        v = (0, s.bG)([o.default], () => o.default.locale),
        g = (0, s.bG)([m.A], () => (null != i ? m.A.getGuild(i) : null)),
        j = (0, s.bG)([c.Ay], () => (null != i ? c.Ay.getMember(i, l) : null)),
        N = (0, d.An)(f.default.extractTimestamp(l), v),
        b = (0, d.An)(j?.joinedAt, v);
    return null == g || null == j
        ? (0, a.jsx)(t.E, { variant: "text-sm/normal", className: h, children: N })
        : (0, a.jsxs)("div", {
              className: x.y9,
              children: [
                  (0, a.jsxs)("div", {
                      className: x.R1,
                      children: [
                          (0, a.jsx)(n.m, {
                              text: A.intl.string(A.t.uvGmCx),
                              delay: p,
                              children: (0, a.jsx)(r.p, {
                                  size: "custom",
                                  width: 28,
                                  height: 28,
                                  color: "currentColor",
                                  className: x.Mg,
                              }),
                          }),
                          (0, a.jsx)(t.E, { variant: "text-sm/normal", className: h, children: N }),
                      ],
                  }),
                  (0, a.jsx)("div", { className: x.yF }),
                  (0, a.jsxs)("div", {
                      className: x.R1,
                      children: [
                          (0, a.jsx)(n.m, {
                              text: g.name,
                              delay: p,
                              children: (0, a.jsx)(u.Ay, { guild: g, size: u.Ay.Sizes.SMOL, className: x.$f }),
                          }),
                          (0, a.jsx)(t.E, { variant: "text-sm/normal", className: h, children: b }),
                      ],
                  }),
              ],
          });
}
