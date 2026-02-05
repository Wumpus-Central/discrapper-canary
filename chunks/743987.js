n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var l = n(417597),
    s = n(990078),
    a = n(397927),
    r = n(370480),
    o = n(263063),
    d = n(773669),
    c = n(696451),
    u = n(71393),
    h = n(661191),
    A = n(985018),
    g = n(713531);
function m(e) {
    let { userId: t, guildId: n, textClassName: m, tooltipDelay: p } = e,
        _ = (0, l.bG)([d.default], () => d.default.locale),
        x = (0, l.bG)([u.A], () => (null != n ? u.A.getGuild(n) : null)),
        f = (0, l.bG)([c.Ay], () => (null != n ? c.Ay.getMember(n, t) : null)),
        E = (0, r.An)(h.default.extractTimestamp(t), _),
        C = (0, r.An)(f?.joinedAt, _);
    return null == x || null == f
        ? (0, i.jsx)(a.Text, { variant: "text-sm/normal", className: m, children: E })
        : (0, i.jsxs)("div", {
              className: g.y9,
              children: [
                  (0, i.jsxs)("div", {
                      className: g.R1,
                      children: [
                          (0, i.jsx)(s.m, {
                              text: A.intl.string(A.t.uvGmCx),
                              delay: p,
                              children: (0, i.jsx)(a.pVd, {
                                  size: "custom",
                                  width: 28,
                                  height: 28,
                                  color: "currentColor",
                                  className: g.Mg,
                              }),
                          }),
                          (0, i.jsx)(a.Text, { variant: "text-sm/normal", className: m, children: E }),
                      ],
                  }),
                  (0, i.jsx)("div", { className: g.yF }),
                  (0, i.jsxs)("div", {
                      className: g.R1,
                      children: [
                          (0, i.jsx)(s.m, {
                              text: x.name,
                              delay: p,
                              children: (0, i.jsx)(o.A, { guild: x, size: o.A.Sizes.SMOL, className: g.$f }),
                          }),
                          (0, i.jsx)(a.Text, { variant: "text-sm/normal", className: m, children: C }),
                      ],
                  }),
              ],
          });
}
