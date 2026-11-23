var a = e(477900);
e(582128);
var n = e(164636),
    i = e(834730),
    d = e(866665),
    t = e(111159),
    c = e(370480),
    r = e(682163),
    m = e(773669),
    u = e(696451),
    o = e(71393),
    h = e(661191),
    x = e(792996),
    j = e(972529);
e.d(
    l,
    {},
    {
        A: function (s) {
            let { userId: l, guildId: e, textClassName: y, tooltipDelay: v } = s,
                A = (0, n.bG)([m.default], () => m.default.locale),
                b = (0, n.bG)([o.A], () => (null != e ? o.A.getGuild(e) : null)),
                N = (0, n.bG)([u.Ay], () => (null != e ? u.Ay.getMember(e, l) : null)),
                p = (0, c.An)(h.default.extractTimestamp(l), A),
                g = (0, c.An)(N?.joinedAt, A);
            return null == b || null == N
                ? (0, a.jsx)(i.E, { variant: "body-sm/normal", className: y, children: p })
                : (0, a.jsxs)("div", {
                      className: j.y9,
                      children: [
                          (0, a.jsxs)("div", {
                              className: j.R1,
                              children: [
                                  (0, a.jsx)(d.m, {
                                      text: x.intl.string(x.t.uvGmCx),
                                      delay: v,
                                      children: (0, a.jsx)(t.ClydeIcon, {
                                          size: "custom",
                                          width: 28,
                                          height: 28,
                                          color: "currentColor",
                                          className: j.Mg,
                                      }),
                                  }),
                                  (0, a.jsx)(i.E, { variant: "body-sm/normal", className: y, children: p }),
                              ],
                          }),
                          (0, a.jsx)("div", { className: j.yF }),
                          (0, a.jsxs)("div", {
                              className: j.R1,
                              children: [
                                  (0, a.jsx)(d.m, {
                                      text: b.name,
                                      delay: v,
                                      children: (0, a.jsx)(r.Ay, { guild: b, size: r.Ay.Sizes.SMOL, className: j.$f }),
                                  }),
                                  (0, a.jsx)(i.E, { variant: "body-sm/normal", className: y, children: g }),
                              ],
                          }),
                      ],
                  });
        },
    },
);
