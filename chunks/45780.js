n.d(t, { G$: () => m, _$: () => f, hk: () => g, zs: () => h });
var i = n(17928),
    l = n(554146),
    s = n(594061),
    a = n(617617),
    r = n(174459),
    o = n(460288),
    u = n(652215),
    c = n(49999),
    d = n(355097);
function h(e, t) {
    let n = a.A.getDismissedGuildContent(t);
    return null != n && (0, o.c0)(n, e);
}
function m(e, t) {
    return (0, i.bG)([a.A], () => h(e, t));
}
function p(e, t, n, i, a) {
    (0, s.TG)(
        n,
        (i) => {
            let l = h(t, n);
            if ((e && l) || (!e && !l)) return !1;
            i.dismissedGuildContent = (e ? o.Vf : o.We)(i.dismissedGuildContent, t);
        },
        e ? d.Sb.INFREQUENT_USER_ACTION : d.Sb.FREQUENT_USER_ACTION,
    ),
        i &&
            r.default.track(u.HAw.DISMISSIBLE_CONTENT_DISMISSED, {
                type: l.V[t],
                guild_id: n,
                action: a ?? c.i.UNKNOWN,
            });
}
function f(e, t, n, i) {
    p(!0, e, t, n, i);
}
function g(e, t) {
    p(!1, e, t);
}
t;
)
{
    f(!1, e, t);
}
