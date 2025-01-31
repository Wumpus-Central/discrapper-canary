n.d(t, {
    FT: () => _,
    Qd: () => p
});
var i = n(442837),
    r = n(704215),
    a = n(675478),
    s = n(581883),
    o = n(626135),
    l = n(915486),
    u = n(981631),
    c = n(921944),
    d = n(526761);
function f(e, t) {
    let n = s.Z.getDismissedGuildContent(t);
    return null != n && (0, l.jl)(n, e);
}
function _(e, t) {
    return (0, i.e7)([s.Z], () => f(e, t));
}
function p(e, t, n, i) {
    (0, a.PS)(
        t,
        (n) => {
            if (f(e, t)) return !1;
            n.dismissedGuildContent = (0, l.GV)(n.dismissedGuildContent, e);
        },
        d.fy.INFREQUENT_USER_ACTION
    ),
        n &&
            o.default.track(u.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
                type: r.C[e],
                guild_id: t,
                action: null != i ? i : c.L.UNKNOWN
            });
}
