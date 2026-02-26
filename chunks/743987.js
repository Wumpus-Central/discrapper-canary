l.d(t, { A: () => x });
var s = l(627968);
l(64700);
var n = l(417597),
    a = l(990078),
    i = l(397927),
    r = l(370480),
    u = l(263063),
    o = l(773669),
    c = l(696451),
    d = l(71393),
    m = l(661191),
    A = l(985018),
    p = l(403229);
function x(e) {
    let { userId: t, guildId: l, textClassName: x, tooltipDelay: E } = e,
        f = (0, n.bG)([o.default], () => o.default.locale),
        h = (0, n.bG)([d.A], () => (null != l ? d.A.getGuild(l) : null)),
        N = (0, n.bG)([c.Ay], () => (null != l ? c.Ay.getMember(l, t) : null)),
        S = (0, r.An)(m.default.extractTimestamp(t), f),
        T = (0, r.An)(N?.joinedAt, f);
    return null == h || null == N
        ? (0, s.jsx)(i.Text, { variant: "text-sm/normal", className: x, children: S })
        : (0, s.jsxs)("div", {
              className: p.y9,
              children: [
                  (0, s.jsxs)("div", {
                      className: p.R1,
                      children: [
                          (0, s.jsx)(a.m, {
                              text: A.intl.string(A.t.uvGmCx),
                              delay: E,
                              children: (0, s.jsx)(i.pVd, {
                                  size: "custom",
                                  width: 28,
                                  height: 28,
                                  color: "currentColor",
                                  className: p.Mg,
                              }),
                          }),
                          (0, s.jsx)(i.Text, { variant: "text-sm/normal", className: x, children: S }),
                      ],
                  }),
                  (0, s.jsx)("div", { className: p.yF }),
                  (0, s.jsxs)("div", {
                      className: p.R1,
                      children: [
                          (0, s.jsx)(a.m, {
                              text: h.name,
                              delay: E,
                              children: (0, s.jsx)(u.Ay, { guild: h, size: u.Ay.Sizes.SMOL, className: p.$f }),
                          }),
                          (0, s.jsx)(i.Text, { variant: "text-sm/normal", className: x, children: T }),
                      ],
                  }),
              ],
          });
}
