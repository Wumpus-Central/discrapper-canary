e.d(a, { A: () => A });
var t = e(477900);
e(582128);
var i = e(702841),
    s = e(834730),
    n = e(866665),
    r = e(111159),
    c = e(370480),
    d = e(548118),
    m = e(773669),
    u = e(696451),
    o = e(71393),
    p = e(935208),
    x = e(375708),
    h = e(731042);
function A(l) {
    let { userId: a, guildId: e, textClassName: A, tooltipDelay: j } = l,
        f = (0, i.bG)([m.default], () => m.default.locale),
        v = (0, i.bG)([o.A], () => (null != e ? o.A.getGuild(e) : null)),
        N = (0, i.bG)([u.Ay], () => (null != e ? u.Ay.getMember(e, a) : null)),
        g = (0, c.An)(p.default.extractTimestamp(a), f),
        y = (0, c.An)(N?.joinedAt, f);
    return null == v || null == N
        ? (0, t.jsx)(s.E, { variant: "text-sm/normal", className: A, children: g })
        : (0, t.jsxs)("div", {
              className: h.y9,
              children: [
                  (0, t.jsxs)("div", {
                      className: h.R1,
                      children: [
                          (0, t.jsx)(n.m, {
                              text: x.intl.string(x.t.uvGmCx),
                              delay: j,
                              children: (0, t.jsx)(r.p, {
                                  size: "custom",
                                  width: 28,
                                  height: 28,
                                  color: "currentColor",
                                  className: h.Mg,
                              }),
                          }),
                          (0, t.jsx)(s.E, { variant: "text-sm/normal", className: A, children: g }),
                      ],
                  }),
                  (0, t.jsx)("div", { className: h.yF }),
                  (0, t.jsxs)("div", {
                      className: h.R1,
                      children: [
                          (0, t.jsx)(n.m, {
                              text: v.name,
                              delay: j,
                              children: (0, t.jsx)(d.Ay, { guild: v, size: d.Ay.Sizes.SMOL, className: h.$f }),
                          }),
                          (0, t.jsx)(s.E, { variant: "text-sm/normal", className: A, children: y }),
                      ],
                  }),
              ],
          });
}
