"use strict";
n.d(t, { AR: () => c, UN: () => o, ul: () => d });
var i = n(734057),
    r = n(498642),
    a = n(576705),
    s = n(287809),
    l = n(652215);
function o(e) {
    if (null == e) return !1;
    let t = e.id,
        n = s.default.getCurrentUser();
    return null != n && n.id !== t && !0 !== e.system;
}
function d(e) {
    return null != e && !l.MRS.NON_REPORTABLE.has(e.type) && o(e.author);
}
function c(e) {
    return (
        null != e &&
        d(e) &&
        (function (e) {
            let t = i.A.getChannel(e);
            if (null == t) return !1;
            if (t.type === l.rbe.DM || t.type === l.rbe.GROUP_DM) return !0;
            if (a.A.canWithPartialContext(l.xBc.MANAGE_MESSAGES, { channelId: e })) {
                let e = r.A.getMemberCount(t.getGuildId());
                return null != e && e >= 50;
            }
            return !1;
        })(e.getChannelId())
    );
}
