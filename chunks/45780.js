n.d(t, { G$: () => h, _$: () => f, hk: () => g, zs: () => m });
var l = n(17928),
    s = n(554146),
    i = n(594061),
    a = n(617617),
    r = n(174459),
    o = n(460288),
    u = n(652215),
    d = n(49999),
    c = n(355097);
function m(e, t) {
    let n = a.A.getDismissedGuildContent(t);
    return null != n && (0, o.c0)(n, e);
}
function h(e, t) {
    return (0, l.bG)([a.A], () => m(e, t));
}
function p(e, t, n, l, a) {
    (0, i.TG)(
        n,
        (l) => {
            let s = m(t, n);
            if ((e && s) || (!e && !s)) return !1;
            l.dismissedGuildContent = (e ? o.Vf : o.We)(l.dismissedGuildContent, t);
        },
        e ? c.Sb.INFREQUENT_USER_ACTION : c.Sb.FREQUENT_USER_ACTION,
    ),
        l &&
            r.default.track(u.HAw.DISMISSIBLE_CONTENT_DISMISSED, {
                type: s.V[t],
                guild_id: n,
                action: a ?? d.i.UNKNOWN,
            });
}
function f(e, t, n, l) {
    p(!0, e, t, n, l);
}
function g(e, t) {
    p(!1, e, t);
}
