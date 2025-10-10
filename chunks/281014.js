t.d(n, { Z: () => i });
var r = t(343312);
function i() {
    let { regionId: e, gameServerInstance: n, name: t, planId: i } = (0, r.JL)(),
        l = "" !== t && "" !== e && void 0 !== i;
    return null != n ? l && (n.name !== t || n.regionId !== e || n.planId !== i) : l;
}
