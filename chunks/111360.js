n.d(t, { Z: () => a }), n(230036), n(653041);
var r = n(192379),
    i = n(442837),
    o = n(905128);
function a(e) {
    let t = (0, i.e7)([o.Z], () => {
        var t, n;
        return Object.values(null !== (n = null === (t = o.Z.getStateForGuild(e)) || void 0 === t ? void 0 : t.powerups) && void 0 !== n ? n : {}).sort((e, t) => (e.skuId >= t.skuId ? 1 : -1));
    });
    return r.useMemo(() => t.reduce((e, t) => (null == e[t.type] && (e[t.type] = []), e[t.type].push(t), e), {}), [t]);
}
