n.d(t, { x: () => o }), n(789020);
var i = n(271383),
    r = n(630388),
    a = n(549817),
    s = n(372897);
function o(e) {
    return new Promise((t) => {
        i.ZP.addConditionalChangeListener(() => {
            var n;
            let o = i.ZP.getSelfMember(e);
            return !(0, r.yE)(null !== (n = null == o ? void 0 : o.flags) && void 0 !== n ? n : 0, s.q.COMPLETED_ONBOARDING) || (a.Z.finishOnboarding(e), t(), !1);
        });
    });
}
