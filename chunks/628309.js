n.d(t, { u: () => a }), n(653041);
var r = n(192379),
    i = n(442837),
    o = n(411149);
function a() {
    let e = (0, i.Wu)([o.Z], () => o.Z.wallpapers);
    return r.useMemo(
        () =>
            e.reduce((e, t) => {
                var n, r, i;
                return null != (i = (n = e)[(r = t.designGroupId)]) || (n[r] = []), e[t.designGroupId].push(t), e;
            }, {}),
        [e]
    );
}
