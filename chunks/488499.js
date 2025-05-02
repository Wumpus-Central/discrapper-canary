n.d(e, { Z: () => l });
var i = n(200651);
n(192379);
var o = n(180781),
    r = n(321867),
    a = n(486324);
function l(t) {
    let { type: e, analyticsPage: n, analyticsSection: l, isGIF: c, banner: s } = t;
    return [a.pC.BANNER, a.pC.AVATAR].includes(e) && c
        ? (0, i.jsx)(r.Z, {
              analyticsSection: l,
              type: e
          })
        : e === a.pC.GUILD_BANNER
          ? (0, i.jsx)(o.Z, {
                analyticsSection: l,
                analyticsPage: n,
                isGIF: c,
                banner: s
            })
          : null;
}
