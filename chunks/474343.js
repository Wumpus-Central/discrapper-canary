n.d(t, { A: () => u }), n(938796);
var i = n(821418),
    r = n(665260),
    a = n(439372),
    s = n(224536),
    l = n(610101),
    o = n(652215);
function d(e) {
    let { guild: t } = e.invite,
        n = e.invite.flags ?? 0;
    null != t && t?.features?.includes(o.GuildFeatures.HUB)
        ? s.A.onOpenHubInvite(e.invite)
        : !e.invite.new_member ||
          (!((0, r.Lt)(n, i.Q.IS_GUEST_INVITE) || (0, r.Lt)(n, i.Q.IS_APPLICATION_BYPASS)) &&
              null != t &&
              (0, l.h)(t) &&
              (0, l.W)(t.id));
}
class c extends a.A {
    actions = { INVITE_ACCEPT_SUCCESS: d };
}
let u = new c();
