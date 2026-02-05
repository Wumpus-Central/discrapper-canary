"use strict";
n.d(t, { e: () => l }), n(64700);
var r = n(793574),
    i = n(58149),
    a = n(954571),
    s = n(486974),
    o = n(652215);
function l(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.A.MEMBER_SAFETY_PAGE,
        u = { guild_id: e, target_user_id: t, subpanel_name: s.n[n], location: l, ...(0, i.H$)(e) };
    return a.default.track(o.HAw.GUILD_MOD_VIEW_OPENED, u);
}
