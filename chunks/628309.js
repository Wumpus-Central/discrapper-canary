n.d(t, { u: () => o }), n(539854);
var r = n(192379),
    i = n(442837),
    a = n(411149);
function o() {
    let e = (0, i.Wu)([a.Z], () => a.Z.wallpapers);
    return r.useMemo(
        () =>
            e.reduce((e, t) => {
                var n, r, i;
                return null != (i = (n = e)[(r = t.designGroupId)]) || (n[r] = []), e[t.designGroupId].push(t), e;
            }, {}),
        [e]
    );
}
