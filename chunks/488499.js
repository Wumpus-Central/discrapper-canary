i.d(e, { Z: () => l });
var n = i(54381);
i(473749);
var a = i(180781),
    r = i(321867),
    o = i(486324);
function l(t) {
    let { type: e, analyticsPage: i, analyticsSection: l, isGIF: s, banner: d } = t;
    return [o.pC.BANNER, o.pC.AVATAR].includes(e) && s
        ? (0, n.jsx)(r.Z, {
              analyticsSection: l,
              type: e,
          })
        : e === o.pC.GUILD_BANNER
          ? (0, n.jsx)(a.Z, {
                analyticsSection: l,
                analyticsPage: i,
                isGIF: s,
                banner: d,
            })
          : null;
}
