n.d(e, { Z: () => l });
var i = n(200651);
n(192379);
var o = n(180781),
    a = n(321867),
    r = n(486324);
function l(t) {
    let { type: e, analyticsPage: n, analyticsSection: l, isGIF: s, banner: d } = t;
    return [r.pC.BANNER, r.pC.AVATAR].includes(e) && s
        ? (0, i.jsx)(a.Z, {
              analyticsSection: l,
              type: e
          })
        : e === r.pC.GUILD_BANNER
          ? (0, i.jsx)(o.Z, {
                analyticsSection: l,
                analyticsPage: n,
                isGIF: s,
                banner: d
            })
          : null;
}
