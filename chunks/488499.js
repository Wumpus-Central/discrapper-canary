n.d(t, { Z: () => l });
var i = n(54381);
n(473749);
var a = n(180781),
    r = n(321867),
    o = n(486324);
function l(e) {
    let { type: t, analyticsPage: n, analyticsSection: l, isGIF: c, banner: s } = e;
    return [o.pC.BANNER, o.pC.AVATAR].includes(t) && c
        ? (0, i.jsx)(r.Z, {
              analyticsSection: l,
              type: t,
          })
        : t === o.pC.GUILD_BANNER
          ? (0, i.jsx)(a.Z, {
                analyticsSection: l,
                analyticsPage: n,
                isGIF: c,
                banner: s,
            })
          : null;
}
