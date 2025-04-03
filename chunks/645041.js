n.d(t, {
    FT: () => _,
    Qd: () => f
});
var r = n(442837),
    i = n(704215),
    o = n(675478),
    l = n(581883),
    s = n(626135),
    a = n(915486),
    c = n(981631),
    u = n(921944),
    d = n(526761);
function p(e, t) {
    let n = l.Z.getDismissedGuildContent(t);
    return null != n && (0, a.jl)(n, e);
}
function _(e, t) {
    return (0, r.e7)([l.Z], () => p(e, t));
}
function f(e, t, n, r) {
    (0, o.PS)(
        t,
        (n) => {
            if (p(e, t)) return !1;
            n.dismissedGuildContent = (0, a.GV)(n.dismissedGuildContent, e);
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
