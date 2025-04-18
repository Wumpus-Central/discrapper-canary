n.d(t, { Z: () => l });
var i = n(200651);
n(192379);
var a = n(180781),
    o = n(321867),
    r = n(486324);
function l(e) {
    let { type: t, analyticsPage: n, analyticsSection: l, isGIF: c, banner: s } = e;
    return [r.pC.BANNER, r.pC.AVATAR].includes(t) && c
        ? (0, i.jsx)(o.Z, {
              analyticsSection: l,
              type: t
          })
        : t === r.pC.GUILD_BANNER
          ? (0, i.jsx)(a.Z, {
                analyticsSection: l,
                analyticsPage: n,
                isGIF: c,
                banner: s
            })
          : null;
}
