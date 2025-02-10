n.d(i, { Z: () => r });
var o = n(200651);
n(192379);
var t = n(180781),
    a = n(321867),
    l = n(486324);
function r(e) {
    let { type: i, analyticsPage: n, analyticsSection: r, isGIF: c, banner: s } = e;
    return [l.pC.BANNER, l.pC.AVATAR].includes(i) && c
        ? (0, o.jsx)(a.Z, {
              analyticsSection: r,
              type: i
          })
        : i === l.pC.GUILD_BANNER
          ? (0, o.jsx)(t.Z, {
                analyticsSection: r,
                analyticsPage: n,
                isGIF: c,
                banner: s
            })
          : null;
}
