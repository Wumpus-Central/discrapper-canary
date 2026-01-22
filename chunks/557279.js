n.d(t, {
    Di: () => c,
    S: () => u,
    gz: () => l,
});
var r = n(617617),
    i = n(287809),
    a = n(349435),
    s = n(665909);
function o(e) {
    return a.Ay.getChannelSafetyWarnings(e).filter((e) => e.type === a._j.INAPPROPRIATE_CONVERSATION_TIER_1);
}
function l() {
    var e, t, n, a;
    let o = (null == (t = i.default.getCurrentUser()) ? void 0 : t.isStaff()) === !0,
        l =
            null ==
                (e =
                    null == (a = r.A.settings.privacy) || null == (n = a.inappropriateConversationWarnings)
                        ? void 0
                        : n.value) || e;
    return ((0, s.Wu)() || o) && l;
}
function c(e) {
    let t = o(e);
    if (t.filter((e) => null != e.dismiss_timestamp).length > 0) return null;
    let n = t.filter((e) => null == e.dismiss_timestamp);
    return 1 === n.length ? n[0] : null;
}
function u(e) {
    let t = e.filter((e) => e.type === a._j.INAPPROPRIATE_CONVERSATION_TIER_1);
    return t.length > 0 && t.every((e) => null == e.dismiss_timestamp);
}
