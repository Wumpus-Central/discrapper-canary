n.d(i, { Z: () => l });
var t = n(200651);
n(192379);
var o = n(180781),
    r = n(321867),
    a = n(486324);
function l(e) {
    let { type: i, analyticsPage: n, analyticsSection: l, isGIF: c, banner: s } = e;
    return [a.pC.BANNER, a.pC.AVATAR].includes(i) && c
        ? (0, t.jsx)(r.Z, {
              analyticsSection: l,
              type: i
          })
        : i === a.pC.GUILD_BANNER
          ? (0, t.jsx)(o.Z, {
                analyticsSection: l,
                analyticsPage: n,
                isGIF: c,
                banner: s
            })
          : null;
}
