n.d(t, { Z: () => l });
var o = n(54381);
n(473749);
var i = n(180781),
    r = n(321867),
    a = n(486324);
function l(e) {
    let { type: t, analyticsPage: n, analyticsSection: l, isGIF: s, banner: c } = e;
    return [a.pC.BANNER, a.pC.AVATAR].includes(t) && s
        ? (0, o.jsx)(r.Z, {
              analyticsSection: l,
              type: t,
          })
        : t === a.pC.GUILD_BANNER
          ? (0, o.jsx)(i.Z, {
                analyticsSection: l,
                analyticsPage: n,
                isGIF: s,
                banner: c,
            })
          : null;
}
