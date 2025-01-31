n.d(t, {
    dg: () => l,
    tX: () => c,
    uu: () => u
});
var i = n(581883),
    r = n(594174),
    a = n(359119),
    s = n(473092);
function o(e) {
    return a.ZP.getChannelSafetyWarnings(e).filter((e) => e.type === a.pj.INAPPROPRIATE_CONVERSATION_TIER_1);
}
function l() {
    var e, t, n, a;
    let o = (null === (e = r.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) === !0,
        l = null === (a = null === (n = i.Z.settings.privacy) || void 0 === n ? void 0 : null === (t = n.inappropriateConversationWarnings) || void 0 === t ? void 0 : t.value) || void 0 === a || a;
    return ((0, s.Lm)() || o) && l;
}
function u(e) {
    let t = o(e);
    if (t.filter((e) => null != e.dismiss_timestamp).length > 0) return null;
    let n = t.filter((e) => null == e.dismiss_timestamp);
    return 1 === n.length ? n[0] : null;
}
function c(e) {
    let t = e.filter((e) => e.type === a.pj.INAPPROPRIATE_CONVERSATION_TIER_1);
    return t.length > 0 && t.every((e) => null == e.dismiss_timestamp);
}
