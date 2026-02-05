"use strict";
n.d(t, { A: () => u, p: () => c });
var r = n(311907),
    i = n(717125),
    a = n(734057),
    s = n(576705),
    o = n(652215);
let l = { needSubscriptionToAccess: !1, isSubscriptionGated: !1 };
function u(e) {
    return (0, r.cf)([a.A, i.A, s.A], () => c(e, a.A, i.A, s.A), [e]);
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.A,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.A,
        u = t.getChannel(e);
    return u?.isRoleSubscriptionTemplatePreviewChannel()
        ? { isSubscriptionGated: !0, needSubscriptionToAccess: !0 }
        : null != u && n.isChannelGated(u.guild_id, u.id)
          ? {
                isSubscriptionGated: !0,
                needSubscriptionToAccess: u.isGuildVocal() ? !r.can(o.xBc.CONNECT, u) : !r.can(o.xBc.VIEW_CHANNEL, u),
            }
          : l;
}
