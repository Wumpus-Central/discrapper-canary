n.d(t, {
    K: () => c,
    Z: () => s,
});
var l = n(311907),
    r = n(498642),
    i = n(576705),
    a = n(818348);
function s(e) {
    return (0, l.bG)([i.A], () => null != e && i.A.can(a.xB.MENTION_EVERYONE, e), [e]);
}
function c(e) {
    let t = null == e ? void 0 : e.guild_id,
        n = (0, l.bG)([r.A], () => r.A.getMemberCount(t), [t]);
    return null == e || (null != n && !(n > 50000));
}
