n.d(t, {
    J: () => c,
    U: () => s,
});
var r = n(442837),
    l = n(650774),
    i = n(496675),
    a = n(231338);
function c(e) {
    return (0, r.e7)([i.Z], () => null != e && i.Z.can(a.Pl.MENTION_EVERYONE, e), [e]);
}
function s(e) {
    let t = null == e ? void 0 : e.guild_id,
        n = (0, r.e7)([l.Z], () => l.Z.getMemberCount(t), [t]);
    return null == e || (null != n && !(n > 50000));
}
