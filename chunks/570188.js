n.d(t, {
    J: () => o,
    U: () => c,
});
var l = n(442837),
    i = n(650774),
    r = n(496675),
    a = n(231338);
function o(e) {
    return (0, l.e7)([r.Z], () => null != e && r.Z.can(a.Pl.MENTION_EVERYONE, e), [e]);
}
function c(e) {
    let t = null == e ? void 0 : e.guild_id,
        n = (0, l.e7)([i.Z], () => i.Z.getMemberCount(t), [t]);
    return null == e || (null != n && !(n > 50000));
}
