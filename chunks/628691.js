"use strict";
n.d(t, { AR: () => c, UN: () => l, ul: () => u });
var i = n(734057),
    r = n(498642),
    s = n(576705),
    a = n(287809),
    o = n(652215);
function l(e) {
    if (null == e) return !1;
    let t = e.id,
        n = a.default.getCurrentUser();
    return null != n && n.id !== t && !0 !== e.system;
}
function u(e) {
    return null != e && l(e.author);
}
function c(e) {
    return (
        null != e &&
        u(e) &&
        (function (e) {
            let t = i.A.getChannel(e);
            if (null == t) return !1;
            if (t.type === o.rbe.DM || t.type === o.rbe.GROUP_DM) return !0;
            if (s.A.canWithPartialContext(o.xBc.MANAGE_MESSAGES, { channelId: e })) {
                let e = r.A.getMemberCount(t.getGuildId());
                return null != e && e >= 50;
            }
            return !1;
        })(e.getChannelId())
    );
}
