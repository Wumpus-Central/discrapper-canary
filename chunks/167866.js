n.d(t, { e: () => d }), n(64700);
var i = n(793574),
    l = n(58149),
    r = n(954571),
    a = n(486974),
    o = n(652215);
function d(e, t, n) {
    let d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.A.MEMBER_SAFETY_PAGE,
        u = { guild_id: e, target_user_id: t, subpanel_name: a.n[n], location: d, ...(0, l.H$)(e) };
    return r.default.track(o.HAw.GUILD_MOD_VIEW_OPENED, u);
}
