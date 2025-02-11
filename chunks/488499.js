o.d(e, { Z: () => l });
var n = o(200651);
o(192379);
var i = o(180781),
    a = o(321867),
    r = o(486324);
function l(t) {
    let { type: e, analyticsPage: o, analyticsSection: l, isGIF: s, banner: c } = t;
    return [r.pC.BANNER, r.pC.AVATAR].includes(e) && s
        ? (0, n.jsx)(a.Z, {
              analyticsSection: l,
              type: e
          })
        : e === r.pC.GUILD_BANNER
          ? (0, n.jsx)(i.Z, {
                analyticsSection: l,
                analyticsPage: o,
                isGIF: s,
                banner: c
            })
          : null;
}
