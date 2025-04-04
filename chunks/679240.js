n.d(t, { x: () => s }), n(789020);
var r = n(271383),
    i = n(630388),
    o = n(549817),
    a = n(372897);
function s(e) {
    return new Promise((t) => {
        r.ZP.addConditionalChangeListener(() => {
            var n;
            let s = r.ZP.getSelfMember(e);
            return !(0, i.yE)(null != (n = null == s ? void 0 : s.flags) ? n : 0, a.q.COMPLETED_ONBOARDING) || (o.Z.finishOnboarding(e), t(), !1);
        });
    });
}
