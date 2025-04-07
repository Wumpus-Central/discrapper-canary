n.d(t, {
    FT: () => g,
    Qd: () => p
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
function p(e, t, n, r) {
    (0, s.PS)(
        t,
        (n) => {
            if (m(e, t)) return !1;
            n.dismissedGuildContent = (0, o.GV)(n.dismissedGuildContent, e);
        },
        u.fy.INFREQUENT_USER_ACTION
    ),
        n &&
            l.default.track(c.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
                type: i.C[e],
                guild_id: t,
                action: null != r ? r : d.L.UNKNOWN
            });
}
