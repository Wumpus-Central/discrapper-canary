n.d(t, { Z: () => r });
var i = n(200651);
n(192379);
var a = n(180781),
    o = n(321867),
    l = n(486324);
function r(e) {
    let { type: t, analyticsPage: n, analyticsSection: r, isGIF: c, banner: s } = e;
    return [l.pC.BANNER, l.pC.AVATAR].includes(t) && c
        ? (0, i.jsx)(o.Z, {
              analyticsSection: r,
              type: t
          })
        : t === l.pC.GUILD_BANNER
          ? (0, i.jsx)(a.Z, {
                analyticsSection: r,
                analyticsPage: n,
                isGIF: c,
                banner: s
            })
          : null;
}
