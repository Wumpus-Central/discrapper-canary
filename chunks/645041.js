n.d(t, {
    FT: () => f,
    OY: () => p,
    Qd: () => b,
    c7: () => y,
});
var r = n(442837),
    i = n(704215),
    l = n(675478),
    a = n(581883),
    o = n(626135),
    s = n(915486),
    c = n(981631),
    u = n(921944),
    d = n(526761);
function p(e, t) {
    let n = a.Z.getDismissedGuildContent(t);
    return null != n && (0, s.jl)(n, e);
}
function f(e, t) {
    return (0, r.e7)([a.Z], () => p(e, t));
}
function m(e, t, n, r, a) {
    (0, l.PS)(
        n,
        (r) => {
            let i = p(t, n);
            if ((e && i) || (!e && !i)) return !1;
            r.dismissedGuildContent = (e ? s.GV : s.jx)(r.dismissedGuildContent, t);
        },
        e ? d.fy.INFREQUENT_USER_ACTION : d.fy.FREQUENT_USER_ACTION,
    ),
        r &&
            o.default.track(c.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
                type: i.C[t],
                guild_id: n,
                action: null != a ? a : u.L.UNKNOWN,
            });
}
function b(e, t, n, r) {
    m(!0, e, t, n, r);
}
function y(e, t) {
    m(!1, e, t);
}
