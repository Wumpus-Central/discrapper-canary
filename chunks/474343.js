n.d(t, { A: () => f }), n(938796), n(896048);
var r = n(821418),
    i = n(665260),
    a = n(439372),
    s = n(224536),
    o = n(610101),
    l = n(652215);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    var t, n;
    let { guild: a } = e.invite,
        c = null != (t = e.invite.flags) ? t : 0;
    null != a && (null == a || null == (n = a.features) ? void 0 : n.includes(l.GuildFeatures.HUB))
        ? s.A.onOpenHubInvite(e.invite)
        : !e.invite.new_member ||
          (!((0, i.Lt)(c, r.Q.IS_GUEST_INVITE) || (0, i.Lt)(c, r.Q.IS_APPLICATION_BYPASS)) &&
              null != a &&
              (0, o.h)(a) &&
              (0, o.W)(a.id));
}
class d extends a.A {
    constructor(...e) {
        super(...e), c(this, "actions", { INVITE_ACCEPT_SUCCESS: u });
    }
}
let f = new d();
