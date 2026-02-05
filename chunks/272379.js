n.d(t, { K: () => c, Z: () => s });
var l = n(311907),
    i = n(498642),
    a = n(576705),
    r = n(818348);
function s(e) {
    return (0, l.bG)([a.A], () => null != e && a.A.can(r.xB.MENTION_EVERYONE, e), [e]);
}
function c(e) {
    let t = e?.guild_id,
        n = (0, l.bG)([i.A], () => i.A.getMemberCount(t), [t]);
    return null == e || (null != n && !(n > 5e4));
}
