"use strict";
n.d(t, { Di: () => l, S: () => u, gz: () => o });
var r = n(617617),
    i = n(287809),
    s = n(349435),
    a = n(665909);
function o() {
    let e = i.default.getCurrentUser()?.isStaff() === !0,
        t = r.A.settings.privacy?.inappropriateConversationWarnings?.value ?? !0;
    return ((0, a.Wu)() || e) && t;
}
function l(e) {
    let t = s.Ay.getChannelSafetyWarnings(e).filter((e) => e.type === s._j.INAPPROPRIATE_CONVERSATION_TIER_1);
    if (t.filter((e) => null != e.dismiss_timestamp).length > 0) return null;
    let n = t.filter((e) => null == e.dismiss_timestamp);
    return 1 === n.length ? n[0] : null;
}
function u(e) {
    let t = e.filter((e) => e.type === s._j.INAPPROPRIATE_CONVERSATION_TIER_1);
    return t.length > 0 && t.every((e) => null == e.dismiss_timestamp);
}
