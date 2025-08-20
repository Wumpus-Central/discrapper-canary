n.d(t, {
    FT: () => _,
    OY: () => f,
    Qd: () => h,
    c7: () => m,
});
var r = n(442837),
    i = n(704215),
    a = n(675478),
    o = n(581883),
    s = n(626135),
    l = n(915486),
    c = n(981631),
    u = n(921944),
    d = n(526761);
function f(e, t) {
    let n = o.Z.getDismissedGuildContent(t);
    return null != n && (0, l.jl)(n, e);
}
function _(e, t) {
    return (0, r.e7)([o.Z], () => f(e, t));
}
function p(e, t, n, r, o) {
    (0, a.PS)(
        n,
        (r) => {
            let i = f(t, n);
            if ((e && i) || (!e && !i)) return !1;
            r.dismissedGuildContent = (e ? l.GV : l.jx)(r.dismissedGuildContent, t);
        },
        e ? d.fy.INFREQUENT_USER_ACTION : d.fy.FREQUENT_USER_ACTION,
    ),
        r &&
            s.default.track(c.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
                type: i.C[t],
                guild_id: n,
                action: null != o ? o : u.L.UNKNOWN,
            });
}
function h(e, t, n, r) {
    p(!0, e, t, n, r);
}
function m(e, t) {
    p(!1, e, t);
}
