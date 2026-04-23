n.d(t, { G$: () => m, _$: () => A, hk: () => v, zs: () => p });
var l = n(311907),
    s = n(554146),
    a = n(594061),
    r = n(617617),
    i = n(954571),
    o = n(460288),
    u = n(652215),
    d = n(49999),
    c = n(355097);
function p(e, t) {
    let n = r.A.getDismissedGuildContent(t);
    return null != n && (0, o.c0)(n, e);
}
function m(e, t) {
    return (0, l.bG)([r.A], () => p(e, t));
}
function f(e, t, n, l, r) {
    (0, a.TG)(
        n,
        (l) => {
            let s = p(t, n);
            if ((e && s) || (!e && !s)) return !1;
            l.dismissedGuildContent = (e ? o.Vf : o.We)(l.dismissedGuildContent, t);
        },
        e ? c.Sb.INFREQUENT_USER_ACTION : c.Sb.FREQUENT_USER_ACTION,
    ),
        l &&
            i.default.track(u.HAw.DISMISSIBLE_CONTENT_DISMISSED, {
                type: s.V[t],
                guild_id: n,
                action: r ?? d.i.UNKNOWN,
            });
}
function A(e, t, n, l) {
    f(!0, e, t, n, l);
}
function v(e, t) {
    f(!1, e, t);
}
