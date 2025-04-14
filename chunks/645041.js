n.d(t, {
    FT: () => f,
    OY: () => E,
    Qd: () => _,
    c7: () => p
});
var l = n(442837),
    r = n(704215),
    i = n(675478),
    o = n(581883),
    a = n(626135),
    s = n(915486),
    u = n(981631),
    c = n(921944),
    d = n(526761);
function E(e, t) {
    let n = o.Z.getDismissedGuildContent(t);
    return null != n && (0, s.jl)(n, e);
}
function f(e, t) {
    return (0, l.e7)([o.Z], () => E(e, t));
}
function C(e, t, n, l, o) {
    (0, i.PS)(
        n,
        (l) => {
            let r = E(t, n);
            if ((e && r) || (!e && !r)) return !1;
            l.dismissedGuildContent = (e ? s.GV : s.jx)(l.dismissedGuildContent, t);
        },
        e ? d.fy.INFREQUENT_USER_ACTION : d.fy.FREQUENT_USER_ACTION
    ),
        l &&
            a.default.track(u.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
                type: r.C[t],
                guild_id: n,
                action: null != o ? o : c.L.UNKNOWN
            });
}
function _(e, t, n, l) {
    C(!0, e, t, n, l);
}
function p(e, t) {
    C(!1, e, t);
}
