r.d(n, {
    q: function () {
        return u;
    }
}),
    r(192379);
var i = r(100527),
    a = r(367907),
    o = r(626135),
    s = r(50493),
    l = r(981631);
function u(e, n, r) {
    let u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.Z.MEMBER_SAFETY_PAGE,
        c = {
            guild_id: e,
            target_user_id: n,
            subpanel_name: s.Y[r],
            location: u,
            ...(0, a.hH)(e)
        };
    return o.default.track(l.rMx.GUILD_MOD_VIEW_OPENED, c);
}
