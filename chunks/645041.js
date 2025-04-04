n.d(t, {
    FT: () => E,
    Qd: () => I
});
var r = n(442837),
    i = n(704215),
    l = n(675478),
    a = n(581883),
    s = n(626135),
    o = n(915486),
    u = n(981631),
    c = n(921944),
    d = n(526761);
function _(e, t) {
    let n = a.Z.getDismissedGuildContent(t);
    return null != n && (0, o.jl)(n, e);
}
function E(e, t) {
    return (0, r.e7)([a.Z], () => _(e, t));
}
function I(e, t, n, r) {
    (0, l.PS)(
        t,
        (n) => {
            if (_(e, t)) return !1;
            n.dismissedGuildContent = (0, o.GV)(n.dismissedGuildContent, e);
        },
        d.fy.INFREQUENT_USER_ACTION
    ),
        n &&
            s.default.track(u.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
                type: i.C[e],
                guild_id: t,
                action: null != r ? r : c.L.UNKNOWN
            });
}
