var l = n(855986),
    i = n(554146),
    a = n(594061),
    r = n(617617),
    s = n(129230),
    o = n(460288),
    u = n(652215),
    d = n(49999),
    c = n(355097);
function m(e, t) {
    let n = r.A.getDismissedGuildContent(t);
    return null != n && (0, o.c0)(n, e);
}
function h(e, t, n, l, r) {
    ((0, a.TG)(
        n,
        (l) => {
            let i = m(t, n);
            if ((e && i) || (!e && !i)) return !1;
            l.dismissedGuildContent = (e ? o.Vf : o.We)(l.dismissedGuildContent, t);
        },
        e ? c.Sb.INFREQUENT_USER_ACTION : c.Sb.FREQUENT_USER_ACTION,
    ),
        l &&
            s.default.track(u.HAw.DISMISSIBLE_CONTENT_DISMISSED, {
                type: i.V[t],
                guild_id: n,
                action: r ?? d.i.UNKNOWN,
            }));
}
n.d(
    t,
    {},
    {
        G$: function (e, t) {
            return (0, l.bG)([r.A], () => m(e, t));
        },
        _$: function (e, t, n, l) {
            h(!0, e, t, n, l);
        },
        hk: function (e, t) {
            h(!1, e, t);
        },
        zs: m,
    },
);
