n.d(t, {
    FT: () => f,
    OY: () => E,
    Qd: () => C
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
function C(e, t, n, l) {
    (0, i.PS)(
        t,
        (n) => {
            if (E(e, t)) return !1;
            n.dismissedGuildContent = (0, s.GV)(n.dismissedGuildContent, e);
        },
        d.fy.INFREQUENT_USER_ACTION
    ),
        n &&
            a.default.track(u.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
                type: r.C[e],
                guild_id: t,
                action: null != l ? l : c.L.UNKNOWN
            });
}
