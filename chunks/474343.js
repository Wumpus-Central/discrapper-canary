"use strict";
n.d(t, { A: () => d }), n(938796);
var i = n(821418),
    r = n(665260),
    s = n(439372),
    a = n(224536),
    o = n(610101),
    l = n(652215);
function u(e) {
    let { guild: t } = e.invite,
        n = e.invite.flags ?? 0;
    null != t && t?.features?.includes(l.GuildFeatures.HUB)
        ? a.A.onOpenHubInvite(e.invite)
        : !e.invite.new_member ||
          (!((0, r.Lt)(n, i.Q.IS_GUEST_INVITE) || (0, r.Lt)(n, i.Q.IS_APPLICATION_BYPASS)) &&
              null != t &&
              (0, o.h)(t) &&
              (0, o.W)(t.id));
}
class c extends s.A {
    actions = { INVITE_ACCEPT_SUCCESS: u };
}
let d = new c();
