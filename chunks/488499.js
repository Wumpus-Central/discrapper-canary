n.d(e, { Z: () => c });
var i = n(200651);
n(192379);
var o = n(180781),
    a = n(321867),
    r = n(486324);
function c(t) {
    let { type: e, analyticsPage: n, analyticsSection: c, isGIF: l, banner: s } = t;
    return [r.pC.BANNER, r.pC.AVATAR].includes(e) && l
        ? (0, i.jsx)(a.Z, {
              analyticsSection: c,
              type: e
          })
        : e === r.pC.GUILD_BANNER
          ? (0, i.jsx)(o.Z, {
                analyticsSection: c,
                analyticsPage: n,
                isGIF: l,
                banner: s
            })
          : null;
}
