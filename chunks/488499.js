i.d(n, { Z: () => l });
var t = i(200651);
i(192379);
var o = i(180781),
    r = i(321867),
    a = i(486324);
function l(e) {
    let { type: n, analyticsPage: i, analyticsSection: l, isGIF: c, banner: s } = e;
    return [a.pC.BANNER, a.pC.AVATAR].includes(n) && c
        ? (0, t.jsx)(r.Z, {
              analyticsSection: l,
              type: n
          })
        : n === a.pC.GUILD_BANNER
          ? (0, t.jsx)(o.Z, {
                analyticsSection: l,
                analyticsPage: i,
                isGIF: c,
                banner: s
            })
          : null;
}
