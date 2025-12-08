n.d(t, {
    J: () => s,
    U: () => c,
});
var l = n(442837),
    r = n(650774),
    i = n(496675),
    a = n(231338);
function s(e) {
    return (0, l.e7)([i.Z], () => null != e && i.Z.can(a.Pl.MENTION_EVERYONE, e), [e]);
}
function c(e) {
    let t = null == e ? void 0 : e.guild_id,
        n = (0, l.e7)([r.Z], () => r.Z.getMemberCount(t), [t]);
    return null == e || (null != n && !(n > 50000));
}
