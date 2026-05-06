"use strict";
n.d(t, { A: () => u, p: () => c });
var i = n(17928),
    r = n(717125),
    s = n(734057),
    a = n(576705),
    o = n(652215);
let l = { needSubscriptionToAccess: !1, isSubscriptionGated: !1 };
function u(e) {
    return (0, i.cf)([s.A, r.A, a.A], () => c(e, s.A, r.A, a.A), [e]);
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.A,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.A,
        u = t.getChannel(e);
    return u?.isRoleSubscriptionTemplatePreviewChannel()
        ? { isSubscriptionGated: !0, needSubscriptionToAccess: !0 }
        : null != u && n.isChannelGated(u.guild_id, u.id)
          ? {
                isSubscriptionGated: !0,
                needSubscriptionToAccess: u.isGuildVocal() ? !i.can(o.xBc.CONNECT, u) : !i.can(o.xBc.VIEW_CHANNEL, u),
            }
          : l;
}
