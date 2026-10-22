n.d(t, { G$: () => m, _$: () => f, hk: () => g, zs: () => h });
var i = n(17928),
    l = n(554146),
    a = n(594061),
    r = n(617617),
    s = n(174459),
    o = n(460288),
    u = n(652215),
    d = n(49999),
    c = n(355097);
function h(e, t) {
    let n = r.A.getDismissedGuildContent(t);
    return null != n && (0, o.c0)(n, e);
}
function m(e, t) {
    return (0, i.bG)([r.A], () => h(e, t));
}
function p(e, t, n, i, r) {
    ((0, a.TG)(
        n,
        (i) => {
            let l = h(t, n);
            if ((e && l) || (!e && !l)) return !1;
            i.dismissedGuildContent = (e ? o.Vf : o.We)(i.dismissedGuildContent, t);
        },
        e ? c.Sb.INFREQUENT_USER_ACTION : c.Sb.FREQUENT_USER_ACTION,
    ),
        i &&
            s.default.track(u.HAw.DISMISSIBLE_CONTENT_DISMISSED, {
                type: l.V[t],
                guild_id: n,
                action: r ?? d.i.UNKNOWN,
            }));
}
function f(e, t, n, i) {
    p(!0, e, t, n, i);
}
function g(e, t) {
    p(!1, e, t);
}
