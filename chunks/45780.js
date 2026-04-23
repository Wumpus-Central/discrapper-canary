n.d(t, { G$: () => p, _$: () => b, hk: () => v, zs: () => f });
var a = n(17928),
    r = n(554146),
    l = n(594061),
    i = n(617617),
    o = n(954571),
    s = n(460288),
    d = n(652215),
    c = n(49999),
    u = n(355097);
function f(e, t) {
    let n = i.A.getDismissedGuildContent(t);
    return null != n && (0, s.c0)(n, e);
}
function p(e, t) {
    return (0, a.bG)([i.A], () => f(e, t));
}
function m(e, t, n, a, i) {
    (0, l.TG)(
        n,
        (a) => {
            let r = f(t, n);
            if ((e && r) || (!e && !r)) return !1;
            a.dismissedGuildContent = (e ? s.Vf : s.We)(a.dismissedGuildContent, t);
        },
        e ? u.Sb.INFREQUENT_USER_ACTION : u.Sb.FREQUENT_USER_ACTION,
    ),
        a &&
            o.default.track(d.HAw.DISMISSIBLE_CONTENT_DISMISSED, {
                type: r.V[t],
                guild_id: n,
                action: i ?? c.i.UNKNOWN,
            });
}
function b(e, t, n, a) {
    m(!0, e, t, n, a);
}
function v(e, t) {
    m(!1, e, t);
}
