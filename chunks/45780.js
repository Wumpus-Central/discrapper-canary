n.d(t, { G$: () => h, _$: () => f, hk: () => g, zs: () => m });
var l = n(17928),
    i = n(554146),
    a = n(594061),
    r = n(617617),
    s = n(174459),
    o = n(460288),
    u = n(652215),
    c = n(49999),
    d = n(355097);
function m(e, t) {
    let n = r.A.getDismissedGuildContent(t);
    return null != n && (0, o.c0)(n, e);
}
function h(e, t) {
    return (0, l.bG)([r.A], () => m(e, t));
}
function p(e, t, n, l, r) {
    ((0, a.TG)(
        n,
        (l) => {
            let i = m(t, n);
            if ((e && i) || (!e && !i)) return !1;
            l.dismissedGuildContent = (e ? o.Vf : o.We)(l.dismissedGuildContent, t);
        },
        e ? d.Sb.INFREQUENT_USER_ACTION : d.Sb.FREQUENT_USER_ACTION,
    ),
        l &&
            s.default.track(u.HAw.DISMISSIBLE_CONTENT_DISMISSED, {
                type: i.V[t],
                guild_id: n,
                action: r ?? c.i.UNKNOWN,
            }));
}
function f(e, t, n, l) {
    p(!0, e, t, n, l);
}
function g(e, t) {
    p(!1, e, t);
}
