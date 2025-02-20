n.d(t, {
    J: () => l,
    U: () => c
});
var r = n(442837),
    a = n(650774),
    i = n(496675),
    o = n(231338);
function l(e) {
    return (0, r.e7)([i.Z], () => null != e && i.Z.can(o.Pl.MENTION_EVERYONE, e), [e]);
}
function c(e) {
    let t = null == e ? void 0 : e.guild_id,
        n = (0, r.e7)([a.Z], () => a.Z.getMemberCount(t), [t]);
    return null == e || (null != n && !(n > 50000));
}
