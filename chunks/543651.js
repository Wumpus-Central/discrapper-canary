n.d(t, { Z: () => g });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(913527),
    s = n.n(o),
    l = n(442837),
    c = n(36563),
    u = n(481060),
    d = n(835473),
    f = n(925329),
    _ = n(594174),
    p = n(823379),
    h = n(388032),
    m = n(467826);
let g = function (e) {
    let { createdAt: t, participantIds: n, applicationId: i, title: o, guildId: g, className: E } = e,
        b = (0, d.q)(i),
        y = (0, l.Wu)([_.default], () => {
            var e;
            return null != (e = n.map((e) => _.default.getUser(e)).filter(p.lm)) ? e : [];
        }),
        O = null == b ? void 0 : b.name,
        v = s()(t).fromNow();
    return null == t
        ? null
        : (0, r.jsxs)("div", {
              className: a()(E, m.container),
              children: [
                  (0, r.jsx)(f.Z, { game: b }),
                  (0, r.jsxs)("div", {
                      className: m.textSection,
                      children: [
                          null != o && "" !== o
                              ? (0, r.jsx)(u.Text, {
                                    variant: "text-md/semibold",
                                    color: "interactive-active",
                                    children: o,
                                })
                              : (0, r.jsx)(u.Text, {
                                    variant: "text-md/semibold",
                                    color: "text-muted",
                                    children: h.intl.string(h.t.Cyxddp),
                                }),
                          (0, r.jsxs)(u.Text, {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              children: [null != O ? "".concat(O, " \u2022 ") : null, v],
                          }),
                      ],
                  }),
                  null != y &&
                      y.length > 0 &&
                      (0, r.jsx)(c.Z, {
                          maxUsers: 4,
                          users: y,
                          guildId: g,
                          "aria-label": h.intl.string(h.t.WTozwe),
                      }),
              ],
          });
};
