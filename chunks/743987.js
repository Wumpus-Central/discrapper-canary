a.d(t, { A: () => b });
var n = a(627968);
a(64700);
var i = a(417597),
    l = a(990078),
    r = a(834730),
    d = a(111159),
    o = a(370480),
    s = a(263063),
    c = a(773669),
    _ = a(696451),
    u = a(71393),
    m = a(661191),
    p = a(985018),
    g = a(686330);
function b(e) {
    let { userId: t, guildId: a, textClassName: b, tooltipDelay: f } = e,
        x = (0, i.bG)([c.default], () => c.default.locale),
        h = (0, i.bG)([u.A], () => (null != a ? u.A.getGuild(a) : null)),
        A = (0, i.bG)([_.Ay], () => (null != a ? _.Ay.getMember(a, t) : null)),
        v = (0, o.An)(m.default.extractTimestamp(t), x),
        I = (0, o.An)(A?.joinedAt, x);
    return null == h || null == A
        ? (0, n.jsx)(r.E, { variant: "text-sm/normal", className: b, children: v })
        : (0, n.jsxs)("div", {
              className: g.y9,
              children: [
                  (0, n.jsxs)("div", {
                      className: g.R1,
                      children: [
                          (0, n.jsx)(l.m, {
                              text: p.intl.string(p.t.uvGmCx),
                              delay: f,
                              children: (0, n.jsx)(d.p, {
                                  size: "custom",
                                  width: 28,
                                  height: 28,
                                  color: "currentColor",
                                  className: g.Mg,
                              }),
                          }),
                          (0, n.jsx)(r.E, { variant: "text-sm/normal", className: b, children: v }),
                      ],
                  }),
                  (0, n.jsx)("div", { className: g.yF }),
                  (0, n.jsxs)("div", {
                      className: g.R1,
                      children: [
                          (0, n.jsx)(l.m, {
                              text: h.name,
                              delay: f,
                              children: (0, n.jsx)(s.Ay, { guild: h, size: s.Ay.Sizes.SMOL, className: g.$f }),
                          }),
                          (0, n.jsx)(r.E, { variant: "text-sm/normal", className: b, children: I }),
                      ],
                  }),
              ],
          });
}
