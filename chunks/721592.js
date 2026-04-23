"use strict";
n.d(t, { A: () => d, p: () => _ });
var i = n(17928),
    r = n(717125),
    s = n(734057),
    a = n(576705),
    o = n(652215);
let l = { needSubscriptionToAccess: !1, isSubscriptionGated: !1 };
function d(e) {
    return (0, i.cf)([s.A, r.A, a.A], () => _(e, s.A, r.A, a.A), [e]);
}
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.A,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.A,
        d = t.getChannel(e);
    return d?.isRoleSubscriptionTemplatePreviewChannel()
        ? { isSubscriptionGated: !0, needSubscriptionToAccess: !0 }
        : null != d && n.isChannelGated(d.guild_id, d.id)
          ? {
                isSubscriptionGated: !0,
                needSubscriptionToAccess: d.isGuildVocal() ? !i.can(o.xBc.CONNECT, d) : !i.can(o.xBc.VIEW_CHANNEL, d),
            }
          : l;
}
