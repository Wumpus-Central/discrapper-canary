"use strict";
n.d(t, { A: () => o });
var r = n(73153),
    i = n(61925),
    s = n(609415),
    a = n(14594);
let o = {
    maybeOpenBlockUserFeedback(e) {
        let { location: t } = e;
        (0, s.Bv)(t) && r.h.dispatch({ type: "BLOCK_USER_SHOW_FEEDBACK" });
    },
    maybeOpenAgeVerificationUserFeedback(e) {
        let { location: t, visibleContent: n } = e;
        !(0, i.fj)(t) ||
            null == n ||
            (a.K0.includes(n) && r.h.dispatch({ type: "AGE_VERIFICATION_SHOW_FEEDBACK", dismissibleContent: n }));
    },
};
