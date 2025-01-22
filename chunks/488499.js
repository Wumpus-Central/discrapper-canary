n.d(e, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var o = n(180781),
    a = n(321867),
    r = n(486324);
function s(t) {
    let { type: e, analyticsPage: n, analyticsSection: s, isGIF: l, banner: c } = t;
    return [r.pC.BANNER, r.pC.AVATAR].includes(e) && l
        ? (0, i.jsx)(a.Z, {
              analyticsSection: s,
              type: e
          })
        : e === r.pC.GUILD_BANNER
          ? (0, i.jsx)(o.Z, {
                analyticsSection: s,
                analyticsPage: n,
                isGIF: l,
                banner: c
            })
          : null;
}
