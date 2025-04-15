n.d(t, {
    FT: () => g,
    OY: () => m,
    Qd: () => h,
    c7: () => f
});
var r = n(442837),
    i = n(704215),
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
function g(e, t) {
    return (0, r.e7)([a.Z], () => m(e, t));
}
function p(e, t, n, r, a) {
    (0, s.PS)(
        n,
        (r) => {
            let i = m(t, n);
            if ((e && i) || (!e && !i)) return !1;
            r.dismissedGuildContent = (e ? o.GV : o.jx)(r.dismissedGuildContent, t);
        },
        e ? u.fy.INFREQUENT_USER_ACTION : u.fy.FREQUENT_USER_ACTION
    ),
        r &&
            l.default.track(c.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
                type: i.C[t],
                guild_id: n,
                action: null != a ? a : d.L.UNKNOWN
            });
}
function h(e, t, n, r) {
    p(!0, e, t, n, r);
}
function f(e, t) {
    p(!1, e, t);
}
