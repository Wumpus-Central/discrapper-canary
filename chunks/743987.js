n.d(t, {
    A: () => b,
});
var r = n(627968);
n(64700);
var l = n(417597),
    i = n(990078),
    a = n(397927),
    s = n(370480),
    o = n(263063),
    c = n(773669),
    u = n(696451),
    d = n(71393),
    f = n(661191),
    p = n(985018),
    h = n(713531);

function b(e) {
    let { userId: t, guildId: n, textClassName: b, tooltipDelay: g } = e,
        m = (0, l.bG)([c.default], () => c.default.locale),
        A = (0, l.bG)([d.A], () => (null != n ? d.A.getGuild(n) : null)),
        y = (0, l.bG)([u.Ay], () => (null != n ? u.Ay.getMember(n, t) : null)),
        O = (0, s.An)(f.default.extractTimestamp(t), m),
        j = (0, s.An)(null == y ? void 0 : y.joinedAt, m);
    return null == A || null == y
        ? (0, r.jsx)(a.Text, {
              variant: "text-sm/normal",
              className: b,
              children: O,
          })
        : (0, r.jsxs)("div", {
              className: h.y9,
              children: [
                  (0, r.jsxs)("div", {
                      className: h.R1,
                      children: [
                          (0, r.jsx)(i.m, {
                              text: p.intl.string(p.t.uvGmCx),
                              delay: g,
                              children: (0, r.jsx)(a.pVd, {
                                  size: "custom",
                                  width: 28,
                                  height: 28,
                                  color: "currentColor",
                                  className: h.Mg,
                              }),
                          }),
                          (0, r.jsx)(a.Text, {
                              variant: "text-sm/normal",
                              className: b,
                              children: O,
                          }),
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: h.yF,
                  }),
                  (0, r.jsxs)("div", {
                      className: h.R1,
                      children: [
                          (0, r.jsx)(i.m, {
                              text: A.name,
                              delay: g,
                              children: (0, r.jsx)(o.A, {
                                  guild: A,
                                  size: o.A.Sizes.SMOL,
                                  className: h.$f,
                              }),
                          }),
                          (0, r.jsx)(a.Text, {
                              variant: "text-sm/normal",
                              className: b,
                              children: j,
                          }),
                      ],
                  }),
              ],
          });
}
