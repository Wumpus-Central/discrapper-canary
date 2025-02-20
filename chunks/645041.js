n.d(t, {
    FT: () => p,
    Qd: () => _
});
var r = n(442837),
    i = n(704215),
    o = n(675478),
    a = n(581883),
    s = n(626135),
    l = n(915486),
    c = n(981631),
    u = n(921944),
    d = n(526761);
function f(e, t) {
    let n = a.Z.getDismissedGuildContent(t);
    return null != n && (0, l.jl)(n, e);
}
function p(e, t) {
    return (0, r.e7)([a.Z], () => f(e, t));
}
function _(e, t, n, r) {
    (0, o.PS)(
        t,
        (n) => {
            if (f(e, t)) return !1;
            n.dismissedGuildContent = (0, l.GV)(n.dismissedGuildContent, e);
        },
        d.fy.INFREQUENT_USER_ACTION
    ),
        n &&
            s.default.track(c.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
                type: i.C[e],
                guild_id: t,
                action: null != r ? r : u.L.UNKNOWN
            });
}
