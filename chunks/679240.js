r.d(n, {
    x: function () {
        return u;
    }
});
var i = r(789020);
var a = r(271383),
    o = r(630388),
    s = r(549817),
    l = r(372897);
function u(e) {
    return new Promise((n) => {
        a.ZP.addConditionalChangeListener(() => {
            var r;
            let i = a.ZP.getSelfMember(e);
            return !(0, o.yE)(null !== (r = null == i ? void 0 : i.flags) && void 0 !== r ? r : 0, l.q.COMPLETED_ONBOARDING) || (s.Z.finishOnboarding(e), n(), !1);
        });
    });
}
