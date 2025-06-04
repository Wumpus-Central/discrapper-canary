n.d(t, {
    dg: () => l,
    tX: () => u,
    uu: () => c
});
var r = n(581883),
    i = n(594174),
    o = n(359119),
    a = n(473092);
function s(e) {
    return o.ZP.getChannelSafetyWarnings(e).filter((e) => e.type === o.pj.INAPPROPRIATE_CONVERSATION_TIER_1);
}
function l() {
    var e, t, n, o;
    let s = (null == (e = i.default.getCurrentUser()) ? void 0 : e.isStaff()) === !0,
        l = null == (o = null == (n = r.Z.settings.privacy) || null == (t = n.inappropriateConversationWarnings) ? void 0 : t.value) || o;
    return ((0, a.Lm)() || s) && l;
}
function c(e) {
    let t = s(e);
    if (t.filter((e) => null != e.dismiss_timestamp).length > 0) return null;
    let n = t.filter((e) => null == e.dismiss_timestamp);
    return 1 === n.length ? n[0] : null;
}
function u(e) {
    let t = e.filter((e) => e.type === o.pj.INAPPROPRIATE_CONVERSATION_TIER_1);
    return t.length > 0 && t.every((e) => null == e.dismiss_timestamp);
}
