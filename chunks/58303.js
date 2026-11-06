var l = n(477900);
n(582128);
var i = n(855986),
    s = n(646514),
    r = n(866665),
    a = n(786889),
    o = n(312006),
    u = n(718734),
    c = n(792996);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { channel: t, userId: n } = e,
                d = (0, u.e)(t, "StageModeratorTileBadge"),
                m = (0, i.bG)([o.Ay], () => o.Ay.isModerator(n, t.id), [n, t.id]);
            return d && m
                ? (0, l.jsx)(r.m, {
                      text: c.intl.string(c.t.GMZqSi),
                      children: (0, l.jsx)("div", {
                          role: "img",
                          "aria-label": c.intl.string(c.t.GMZqSi),
                          children: (0, l.jsx)(a.A, { width: 24, height: 24, color: s.A.unsafe_rawColors.WHITE.css }),
                      }),
                  })
                : null;
        },
    },
);
