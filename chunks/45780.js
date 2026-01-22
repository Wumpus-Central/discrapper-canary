n.d(t, {
    G$: () => m,
    _$: () => y,
    hk: () => g,
    zs: () => p,
});
var r = n(311907),
    l = n(554146),
    i = n(594061),
    s = n(617617),
    a = n(954571),
    o = n(460288),
    u = n(652215),
    c = n(49999),
    d = n(355097);

function p(e, t) {
    let n = s.A.getDismissedGuildContent(t);
    return null != n && (0, o.c0)(n, e);
}

function m(e, t) {
    return (0, r.bG)([s.A], () => p(e, t));
}

function f(e, t, n, r, s) {
    (0, i.TG)(
        n,
        (r) => {
            let l = p(t, n);
            if ((e && l) || (!e && !l)) return !1;
            r.dismissedGuildContent = (e ? o.Vf : o.We)(r.dismissedGuildContent, t);
        },
        e ? d.Sb.INFREQUENT_USER_ACTION : d.Sb.FREQUENT_USER_ACTION,
    ),
        r &&
            a.default.track(u.HAw.DISMISSIBLE_CONTENT_DISMISSED, {
                type: l.V[t],
                guild_id: n,
                action: null != s ? s : c.i.UNKNOWN,
            });
}

function y(e, t, n, r) {
    f(!0, e, t, n, r);
}

function g(e, t) {
    f(!1, e, t);
}
