n.d(t, {
    ZP: () => a,
    m2: () => l,
});
var i = n(833845),
    r = n(643632);
function l(e) {
    return {
        isLive: (0, r.Z)(e),
        isModerator: (0, i.Z)(e, !0).moderator,
    };
}
function a(e) {
    let t = (0, r.Z)(e),
        n = (0, i.Z)(e, !0).moderator;
    return !t && n ? 1 : 0;
}
