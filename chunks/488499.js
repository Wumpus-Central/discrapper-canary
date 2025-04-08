n.d(t, { Z: () => l });
var i = n(200651);
n(192379);
var o = n(180781),
    r = n(321867),
    a = n(486324);
function l(e) {
    let { type: t, analyticsPage: n, analyticsSection: l, isGIF: c, banner: s } = e;
    return [a.pC.BANNER, a.pC.AVATAR].includes(t) && c
        ? (0, i.jsx)(r.Z, {
              analyticsSection: l,
              type: t
          })
        : t === a.pC.GUILD_BANNER
          ? (0, i.jsx)(o.Z, {
                analyticsSection: l,
                analyticsPage: n,
                isGIF: c,
                banner: s
            })
          : null;
}
