n.d(t, {
    NE: () => d,
    sP: () => u,
    to: () => p,
    u1: () => f,
});
var r = n(442837),
    i = n(81643),
    a = n(318370),
    o = n(592125),
    s = n(496675),
    l = n(944486),
    c = n(231338);
function u() {
    let e = (0, i.Jm)();
    return (0, a.n)("useIsStageSpeakingDisabledForCurrentUser") && e;
}
function d() {
    let e = (0, i.yo)();
    return (0, a.y)("isStageSpeakingDisabledForCurrentUser") && e;
}
function f(e) {
    let t = (0, i.M$)(),
        n = null != e ? e : l.Z.getChannelId(),
        r = null != n ? o.Z.getChannel(n) : null,
        u = null != r && s.Z.can(c.Pl.REQUEST_TO_SPEAK, r);
    return (0, a.y)("shouldAgeVerifyToSpeakForCurrentUser") && !t && u;
}
function p(e) {
    let t = null != e ? e : l.Z.getChannelId(),
        n = (0, r.e7)([s.Z, o.Z], () => {
            let e = null != t ? o.Z.getChannel(t) : null;
            return null != e && s.Z.can(c.Pl.REQUEST_TO_SPEAK, e);
        }, [t]),
        u = (0, i.gD)();
    return (0, a.n)("useShouldAgeVerifyToSpeakForCurrentUser") && !u && n;
}
