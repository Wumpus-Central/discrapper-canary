n.d(t, {
    S: () => a,
    _: () => o
});
var i = n(442837),
    r = n(594174),
    s = n(74538),
    l = n(482207);
function a() {
    return (0, i.cj)([l.Z], () => ({
        avatars: l.Z.getAvatars(),
        loading: l.Z.isFetching,
        error: l.Z.fetchError
    }));
}
function o() {
    let e = (0, i.e7)([r.default], () => r.default.getCurrentUser());
    return s.ZP.canUseIncreasedRecentAvatarsLimit(e);
}
