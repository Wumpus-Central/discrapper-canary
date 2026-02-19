l.d(t, { A: () => p });
var s = l(627968);
l(64700);
var n = l(417597),
    i = l(990078),
    a = l(397927),
    r = l(370480),
    o = l(263063),
    u = l(773669),
    c = l(696451),
    d = l(71393),
    m = l(661191),
    A = l(985018),
    x = l(713531);
function p(e) {
    let { userId: t, guildId: l, textClassName: p, tooltipDelay: E } = e,
        f = (0, n.bG)([u.default], () => u.default.locale),
        h = (0, n.bG)([d.A], () => (null != l ? d.A.getGuild(l) : null)),
        S = (0, n.bG)([c.Ay], () => (null != l ? c.Ay.getMember(l, t) : null)),
        N = (0, r.An)(m.default.extractTimestamp(t), f),
        T = (0, r.An)(S?.joinedAt, f);
    return null == h || null == S
        ? (0, s.jsx)(a.Text, { variant: "text-sm/normal", className: p, children: N })
        : (0, s.jsxs)("div", {
              className: x.y9,
              children: [
                  (0, s.jsxs)("div", {
                      className: x.R1,
                      children: [
                          (0, s.jsx)(i.m, {
                              text: A.intl.string(A.t.uvGmCx),
                              delay: E,
                              children: (0, s.jsx)(a.pVd, {
                                  size: "custom",
                                  width: 28,
                                  height: 28,
                                  color: "currentColor",
                                  className: x.Mg,
                              }),
                          }),
                          (0, s.jsx)(a.Text, { variant: "text-sm/normal", className: p, children: N }),
                      ],
                  }),
                  (0, s.jsx)("div", { className: x.yF }),
                  (0, s.jsxs)("div", {
                      className: x.R1,
                      children: [
                          (0, s.jsx)(i.m, {
                              text: h.name,
                              delay: E,
                              children: (0, s.jsx)(o.A, { guild: h, size: o.A.Sizes.SMOL, className: x.$f }),
                          }),
                          (0, s.jsx)(a.Text, { variant: "text-sm/normal", className: p, children: T }),
                      ],
                  }),
              ],
          });
}
