"use strict";
n.d(t, { A: () => d }), n(938796);
var r = n(821418),
    i = n(665260),
    a = n(439372),
    s = n(224536),
    o = n(610101),
    l = n(652215);
function u(e) {
    let { guild: t } = e.invite,
        n = e.invite.flags ?? 0;
    null != t && t?.features?.includes(l.GuildFeatures.HUB)
        ? s.A.onOpenHubInvite(e.invite)
        : !e.invite.new_member ||
          (!((0, i.Lt)(n, r.Q.IS_GUEST_INVITE) || (0, i.Lt)(n, r.Q.IS_APPLICATION_BYPASS)) &&
              null != t &&
              (0, o.h)(t) &&
              (0, o.W)(t.id));
}
class c extends a.A {
    actions = { INVITE_ACCEPT_SUCCESS: u };
}
let d = new c();
