n.d(t, {
    S: () => l,
    _: () => o
});
var r = n(442837),
    i = n(594174),
    s = n(74538),
    a = n(482207);
function l() {
    return (0, r.cj)([a.Z], () => ({
        avatars: a.Z.getAvatars(),
        loading: a.Z.isFetching,
        error: a.Z.fetchError
    }));
}
function o() {
    let e = (0, r.e7)([i.default], () => i.default.getCurrentUser());
    return s.ZP.canUseIncreasedRecentAvatarsLimit(e);
}
