t.d(n, {
    J: () => s,
    U: () => o
});
var l = t(442837),
    i = t(650774),
    r = t(496675),
    a = t(231338);
function s(e) {
    return (0, l.e7)([r.Z], () => null != e && r.Z.can(a.Pl.MENTION_EVERYONE, e), [e]);
}
function o(e) {
    let n = null == e ? void 0 : e.guild_id,
        t = (0, l.e7)([i.Z], () => i.Z.getMemberCount(n), [n]);
    return null == e || (null != t && !(t > 50000));
}
