n.d(t, {
    S: () => l,
    _: () => c
});
var i = n(442837),
    r = n(594174),
    o = n(74538),
    a = n(482207);
function l() {
    return (0, i.cj)([a.Z], () => ({
        avatars: a.Z.getAvatars(),
        loading: a.Z.isFetching,
        error: a.Z.fetchError
    }));
}
function c() {
    let e = (0, i.e7)([r.default], () => r.default.getCurrentUser());
    return o.ZP.canUseIncreasedRecentAvatarsLimit(e);
}
