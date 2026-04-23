"use strict";
n.d(t, { Y: () => o }), n(938796);
var r = n(665260),
    i = n(696451),
    s = n(669953),
    a = n(340837);
function o(e) {
    return new Promise((t) => {
        i.Ay.addConditionalChangeListener(() => {
            let n = i.Ay.getSelfMember(e);
            return !(0, r.Lt)(n?.flags ?? 0, a.D.COMPLETED_ONBOARDING) || (s.A.finishOnboarding(e), t(), !1);
        });
    });
}
