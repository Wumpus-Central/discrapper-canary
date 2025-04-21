n.d(t, {
    FT: () => g,
    OY: () => m,
    Qd: () => h,
    c7: () => f
});
var i = n(442837),
    r = n(704215),
    s = n(675478),
    l = n(581883),
    a = n(626135),
    o = n(915486),
    c = n(981631),
    d = n(921944),
    u = n(526761);
function m(e, t) {
    let n = l.Z.getDismissedGuildContent(t);
    return null != n && (0, o.jl)(n, e);
}
function g(e, t) {
    return (0, i.e7)([l.Z], () => m(e, t));
}
function p(e, t, n, i, l) {
    (0, s.PS)(
        n,
        (i) => {
            let r = m(t, n);
            if ((e && r) || (!e && !r)) return !1;
            i.dismissedGuildContent = (e ? o.GV : o.jx)(i.dismissedGuildContent, t);
        },
        e ? u.fy.INFREQUENT_USER_ACTION : u.fy.FREQUENT_USER_ACTION
    ),
        i &&
            a.default.track(c.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
                type: r.C[t],
                guild_id: n,
                action: null != l ? l : d.L.UNKNOWN
            });
}
function h(e, t, n, i) {
    p(!0, e, t, n, i);
}
function f(e, t) {
    p(!1, e, t);
}
