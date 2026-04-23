"use strict";
n.d(t, { A: () => o });
var i = n(228366);
let r = (0, n(600975).C)({
    kind: "user",
    id: "2025-07_age_verification_feedback",
    label: "Age Verification Feedback Experiment",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable Age Verification Feedback Survey", config: { enabled: !0 } }],
});
var s = n(609415),
    a = n(14594);
let o = {
    maybeOpenBlockUserFeedback(e) {
        let { location: t } = e;
        (0, s.Bv)(t) && i.h.dispatch({ type: "BLOCK_USER_SHOW_FEEDBACK" });
    },
    maybeOpenAgeVerificationUserFeedback(e) {
        let { location: t, visibleContent: n } = e;
        !(function (e) {
            let { enabled: t } = r.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
            return t;
        })(t) ||
            null == n ||
            (a.K0.includes(n) && i.h.dispatch({ type: "AGE_VERIFICATION_SHOW_FEEDBACK", dismissibleContent: n }));
    },
};
