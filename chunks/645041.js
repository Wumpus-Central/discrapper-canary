n.d(t, {
    FT: () => p,
    OY: () => m,
    Qd: () => h,
    c7: () => f
});
var i = n(442837),
    r = n(704215),
    s = n(675478),
    a = n(581883),
    l = n(626135),
    o = n(915486),
    c = n(981631),
    d = n(921944),
    u = n(526761);
function m(e, t) {
    let n = a.Z.getDismissedGuildContent(t);
    return null != n && (0, o.jl)(n, e);
}
function p(e, t) {
    return (0, i.e7)([a.Z], () => m(e, t));
}
function g(e, t, n, i, a) {
    ((0, s.PS)(
        n,
        (i) => {
            let r = m(t, n);
            if ((e && r) || (!e && !r)) return !1;
            i.dismissedGuildContent = (e ? o.GV : o.jx)(i.dismissedGuildContent, t);
        },
        e ? u.fy.INFREQUENT_USER_ACTION : u.fy.FREQUENT_USER_ACTION
    ),
        i &&
            l.default.track(c.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
                type: r.C[t],
                guild_id: n,
                action: null != a ? a : d.L.UNKNOWN
            }));
}
function h(e, t, n, i) {
    g(!0, e, t, n, i);
}
function f(e, t) {
    g(!1, e, t);
}
