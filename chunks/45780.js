n.d(t, { G$: () => h, _$: () => p, hk: () => g, zs: () => m });
var i = n(17928),
    l = n(554146),
    a = n(594061),
    s = n(617617),
    r = n(174459),
    o = n(460288),
    d = n(652215),
    c = n(49999),
    u = n(355097);
function m(e, t) {
    let n = s.A.getDismissedGuildContent(t);
    return null != n && (0, o.c0)(n, e);
}
function h(e, t) {
    return (0, i.bG)([s.A], () => m(e, t));
}
function f(e, t, n, i, s) {
    ((0, a.TG)(
        n,
        (i) => {
            let l = m(t, n);
            if ((e && l) || (!e && !l)) return !1;
            i.dismissedGuildContent = (e ? o.Vf : o.We)(i.dismissedGuildContent, t);
        },
        e ? u.Sb.INFREQUENT_USER_ACTION : u.Sb.FREQUENT_USER_ACTION,
    ),
        i &&
            r.default.track(d.HAw.DISMISSIBLE_CONTENT_DISMISSED, {
                type: l.V[t],
                guild_id: n,
                action: s ?? c.i.UNKNOWN,
            }));
}
function p(e, t, n, i) {
    f(!0, e, t, n, i);
}
function g(e, t) {
    f(!1, e, t);
}
