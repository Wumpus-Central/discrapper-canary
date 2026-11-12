var i = n(855986),
    l = n(554146),
    a = n(594061),
    r = n(617617),
    s = n(129230),
    o = n(460288),
    u = n(652215),
    c = n(49999),
    d = n(355097);
function m(e, t) {
    let n = r.A.getDismissedGuildContent(t);
    return null != n && (0, o.c0)(n, e);
}
function f(e, t, n, i, r) {
    ((0, a.TG)(
        n,
        (i) => {
            let l = m(t, n);
            if ((e && l) || (!e && !l)) return !1;
            i.dismissedGuildContent = (e ? o.Vf : o.We)(i.dismissedGuildContent, t);
        },
        e ? d.Sb.INFREQUENT_USER_ACTION : d.Sb.FREQUENT_USER_ACTION,
    ),
        i &&
            s.default.track(u.HAw.DISMISSIBLE_CONTENT_DISMISSED, {
                type: l.V[t],
                guild_id: n,
                action: r ?? c.i.UNKNOWN,
            }));
}
n.d(
    t,
    {},
    {
        G$: function (e, t) {
            return (0, i.bG)([r.A], () => m(e, t));
        },
        _$: function (e, t, n, i) {
            f(!0, e, t, n, i);
        },
        hk: function (e, t) {
            f(!1, e, t);
        },
        zs: m,
    },
);
