n.d(t, { A: () => d });
var i = n(477900);
n(582128);
var l = n(17928),
    s = n(661531),
    r = n(866665),
    a = n(786889),
    o = n(312006),
    u = n(718734),
    c = n(105292);
function d(e) {
    let { channel: t, userId: n } = e,
        d = (0, u.e)(t, "StageModeratorTileBadge"),
        m = (0, l.bG)([o.Ay], () => o.Ay.isModerator(n, t.id), [n, t.id]);
    return d && m
        ? (0, i.jsx)(r.m, {
              text: c.intl.string(c.t.GMZqSi),
              children: (0, i.jsx)("div", {
                  role: "img",
                  "aria-label": c.intl.string(c.t.GMZqSi),
                  children: (0, i.jsx)(a.A, { width: 24, height: 24, color: s.A.unsafe_rawColors.WHITE.css }),
              }),
          })
        : null;
}
