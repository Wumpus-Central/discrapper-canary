i.d(t, { Z: () => l });
var n = i(200651);
i(192379);
var o = i(180781),
    r = i(321867),
    a = i(486324);
function l(e) {
    let { type: t, analyticsPage: i, analyticsSection: l, isGIF: s, banner: c } = e;
    return [a.pC.BANNER, a.pC.AVATAR].includes(t) && s
        ? (0, n.jsx)(r.Z, {
              analyticsSection: l,
              type: t
          })
        : t === a.pC.GUILD_BANNER
          ? (0, n.jsx)(o.Z, {
                analyticsSection: l,
                analyticsPage: i,
                isGIF: s,
                banner: c
            })
          : null;
}
