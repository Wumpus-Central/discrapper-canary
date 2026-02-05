"use strict";
n.d(t, { Di: () => u, S: () => c, gz: () => l });
var r = n(617617),
    i = n(287809),
    a = n(349435),
    s = n(665909);
function o(e) {
    return a.Ay.getChannelSafetyWarnings(e).filter((e) => e.type === a._j.INAPPROPRIATE_CONVERSATION_TIER_1);
}
function l() {
    let e = i.default.getCurrentUser()?.isStaff() === !0,
        t = r.A.settings.privacy?.inappropriateConversationWarnings?.value ?? !0;
    return ((0, s.Wu)() || e) && t;
}
function u(e) {
    let t = o(e);
    if (t.filter((e) => null != e.dismiss_timestamp).length > 0) return null;
    let n = t.filter((e) => null == e.dismiss_timestamp);
    return 1 === n.length ? n[0] : null;
}
function c(e) {
    let t = e.filter((e) => e.type === a._j.INAPPROPRIATE_CONVERSATION_TIER_1);
    return t.length > 0 && t.every((e) => null == e.dismiss_timestamp);
}
