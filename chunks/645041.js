r.d(n, {
    FT: function () {
        return h;
    },
    Qd: function () {
        return _;
    }
});
var i = r(442837),
    a = r(704215),
    o = r(675478),
    s = r(581883),
    l = r(626135),
    u = r(915486),
    c = r(981631),
    d = r(921944),
    f = r(526761);
function p(e, n) {
    let r = s.Z.getDismissedGuildContent(n);
    return null != r && (0, u.jl)(r, e);
}
function h(e, n) {
    return (0, i.e7)([s.Z], () => p(e, n));
}
function _(e, n, r, i) {
    (0, o.PS)(
        n,
        (r) => {
            if (p(e, n)) return !1;
            r.dismissedGuildContent = (0, u.GV)(r.dismissedGuildContent, e);
        },
        f.fy.INFREQUENT_USER_ACTION
    ),
        r &&
            l.default.track(c.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
                type: a.C[e],
                guild_id: n,
                action: null != i ? i : d.L.UNKNOWN
            });
}
