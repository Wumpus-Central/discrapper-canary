"use strict";
n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var s = n(417597),
    l = n(990078),
    a = n(397927),
    r = n(370480),
    o = n(263063),
    d = n(773669),
    c = n(696451),
    u = n(71393),
    h = n(661191),
    p = n(985018),
    A = n(713531);
function f(e) {
    let { userId: t, guildId: n, textClassName: f, tooltipDelay: g } = e,
        _ = (0, s.bG)([d.default], () => d.default.locale),
        m = (0, s.bG)([u.A], () => (null != n ? u.A.getGuild(n) : null)),
        x = (0, s.bG)([c.Ay], () => (null != n ? c.Ay.getMember(n, t) : null)),
        E = (0, r.An)(h.default.extractTimestamp(t), _),
        v = (0, r.An)(x?.joinedAt, _);
    return null == m || null == x
        ? (0, i.jsx)(a.Text, { variant: "text-sm/normal", className: f, children: E })
        : (0, i.jsxs)("div", {
              className: A.y9,
              children: [
                  (0, i.jsxs)("div", {
                      className: A.R1,
                      children: [
                          (0, i.jsx)(l.m, {
                              text: p.intl.string(p.t.uvGmCx),
                              delay: g,
                              children: (0, i.jsx)(a.pVd, {
                                  size: "custom",
                                  width: 28,
                                  height: 28,
                                  color: "currentColor",
                                  className: A.Mg,
                              }),
                          }),
                          (0, i.jsx)(a.Text, { variant: "text-sm/normal", className: f, children: E }),
                      ],
                  }),
                  (0, i.jsx)("div", { className: A.yF }),
                  (0, i.jsxs)("div", {
                      className: A.R1,
                      children: [
                          (0, i.jsx)(l.m, {
                              text: m.name,
                              delay: g,
                              children: (0, i.jsx)(o.Ay, { guild: m, size: o.Ay.Sizes.SMOL, className: A.$f }),
                          }),
                          (0, i.jsx)(a.Text, { variant: "text-sm/normal", className: f, children: v }),
                      ],
                  }),
              ],
          });
}
