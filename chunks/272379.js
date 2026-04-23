l.d(t, { K: () => o, Z: () => s });
var n = l(311907),
    a = l(498642),
    i = l(576705),
    r = l(818348);
function s(e) {
    return (0, n.bG)([i.A], () => null != e && i.A.can(r.xB.MENTION_EVERYONE, e), [e]);
}
function o(e) {
    let t = e?.guild_id,
        l = (0, n.bG)([a.A], () => a.A.getMemberCount(t), [t]);
    return null == e || (null != l && !(l > 5e4));
}
