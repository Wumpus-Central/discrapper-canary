n.d(t, { x: () => s }), n(997841);
var r = n(95015),
    i = n(271383),
    a = n(549817),
    o = n(372897);
function s(e) {
    return new Promise((t) => {
        i.ZP.addConditionalChangeListener(() => {
            var n;
            let s = i.ZP.getSelfMember(e);
            return (
                !(0, r.yE)(null != (n = null == s ? void 0 : s.flags) ? n : 0, o.q.COMPLETED_ONBOARDING) ||
                (a.Z.finishOnboarding(e), t(), !1)
            );
        });
    });
}
