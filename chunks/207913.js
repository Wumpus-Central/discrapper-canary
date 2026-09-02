"use strict";
n.d(t, { A: () => w });
var i = n(962929),
    r = n.n(i),
    a = n(17928),
    s = n(228366),
    l = n(739010),
    o = n(239093);
let d = {},
    c = {},
    u = { state: l.PN.ALL_GOOD },
    _ = !1,
    E = !1,
    A = null,
    h = null,
    I = !1,
    f = !1,
    p = [],
    T = !1,
    m = !1,
    g = null,
    S = o.Iv.DIDNT_VIOLATE_POLICY,
    N = "",
    C = "",
    O = "",
    R = 0,
    L = null,
    y = !1,
    D = o.qN.NONE,
    v = null;
function b(e) {
    let {} = e;
    (O = ""), (L = null), (y = !1);
}
let M = {
    [o.aC.PENDING]: o.qN.LOADING,
    [o.aC.UNBANNED]: o.qN.VERIFIED,
    [o.aC.VERIFIED_OTHER_VIOLATIONS_REMAIN]: o.qN.VERIFIED_OTHER_VIOLATIONS_REMAIN,
    [o.aC.UNDERAGE]: o.qN.UNDERAGE,
    [o.aC.UNDERAGE_MANUAL_REVIEW]: o.qN.UNDERAGE_MANUAL_REVIEW,
};
function P() {
    (_ = !1),
        (d = {}),
        (u = { state: l.PN.ALL_GOOD }),
        (h = null),
        (S = o.Iv.DIDNT_VIOLATE_POLICY),
        (N = ""),
        (p = []),
        (D = o.qN.NONE),
        (R = 0),
        (v = null);
}
class U extends a.Ay.Store {
    static displayName = "SafetyHubStore";
    isFetching() {
        return _;
    }
    getClassifications() {
        return Object.values(d);
    }
    getClassification(e) {
        return d[e];
    }
    getAccountStanding() {
        return u;
    }
    getFetchError() {
        return A;
    }
    isInitialized() {
        return E;
    }
    getClassificationRequestState(e) {
        return c[e];
    }
    getAppealClassificationId() {
        return h;
    }
    getIsDsaEligible() {
        return I;
    }
    getIsAppealEligible() {
        return f;
    }
    getAppealEligibility() {
        return p;
    }
    getIsExpressiveModalV2Enabled() {
        return T;
    }
    getAppealSignal() {
        return S;
    }
    getFreeTextAppealReason() {
        return N;
    }
    getIsSubmitting() {
        return m;
    }
    getSubmitError() {
        return g;
    }
    getUsername() {
        return C;
    }
    getAgeVerificationWebviewUrl() {
        return O;
    }
    getAgeVerificationError() {
        return L;
    }
    getIsLoadingAgeVerification() {
        return y;
    }
    getAgeCheckStatus() {
        return D;
    }
    getAgeCheckError() {
        return v;
    }
    getAgeCheckAttempts() {
        return R;
    }
}
let w = new U(s.h, {
    SAFETY_HUB_FETCH_START: function (e) {
        _ = !0;
    },
    SAFETY_HUB_FETCH_SUCCESS: function (e) {
        let {
            classifications: t,
            accountStanding: n,
            isDsaEligible: i,
            isAppealEligible: a,
            username: s,
            appealEligibility: l,
            expressiveModalV2Enabled: o,
        } = e;
        (d = r()(t, "id")), (u = n), (I = i), (f = a), (_ = !1), (E = !0), (A = null), (C = s), (p = l), (T = o);
    },
    SAFETY_HUB_FETCH_FAILURE: function (e) {
        let { error: t } = e;
        (_ = !1), (E = !1), (A = t);
    },
    SAFETY_HUB_FETCH_CLASSIFICATION_START: function (e) {
        (c[e.classificationId] = l.nU.PENDING), (_ = !0);
    },
    SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function (e) {
        let { classification: t, accountStanding: n, isDsaEligible: i, username: r, isAppealEligible: a } = e;
        (d[t.id] = t), (c[t.id] = l.nU.SUCCESS), (u = n), (_ = !1), (A = null), (I = i), (f = a), (E = !0), (C = r);
    },
    SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function (e) {
        let { error: t, classificationId: n } = e;
        (_ = !1), (A = t), (c[n] = l.nU.FAILED), (E = !1);
    },
    SAFETY_HUB_APPEAL_OPEN: function (e) {
        let { classificationId: t } = e;
        h = t;
    },
    SAFETY_HUB_APPEAL_CLOSE: function () {
        (h = null), (S = o.Iv.DIDNT_VIOLATE_POLICY), (N = "");
    },
    SAFETY_HUB_APPEAL_SIGNAL_SELECT: function (e) {
        let { signal: t } = e;
        S = t;
    },
    SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function (e) {
        let { userInput: t } = e;
        N = t;
    },
    SAFETY_HUB_REQUEST_REVIEW_START: function (e) {
        let {} = e;
        (m = !0), (g = null);
    },
    SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function (e) {
        let { classificationId: t } = e;
        (m = !1), (g = null), (d[t].appeal_status = { status: l.Wi.REVIEW_PENDING });
    },
    SAFETY_HUB_REQUEST_REVIEW_FAILURE: function (e) {
        let { error: t } = e;
        (m = !1), (g = t);
    },
    SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START: function (e) {
        let {} = e;
        (O = ""), (L = null), (y = !0);
    },
    SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function (e) {
        let { verificationWebviewUrl: t } = e;
        (O = t), (L = null), (y = !1);
    },
    SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function (e) {
        let { error: t } = e;
        (O = ""), (L = t), (y = !1);
    },
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN: b,
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE: b,
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS: function (e) {
        let {} = e;
        for (let e in ((D = o.qN.LOADING), d)) d[e].is_coppa && (d[e].appeal_status = { status: l.Wi.REVIEW_PENDING });
    },
    SAFETY_HUB_EXPRESSIVE_MODAL_V2_VERIFICATION_SUBMITTED: function (e) {
        let {} = e;
        D = o.qN.LOADING;
    },
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL: function (e) {
        let {} = e;
        (D = o.qN.LOADING), (v = null);
    },
    SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START: function (e) {
        let {} = e;
        (D = o.qN.LOADING), (v = null), (R += 1);
    },
    SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function (e) {
        let { success: t } = e;
        (D = t ? o.qN.SUCCESS : R < o.ti ? o.qN.LOADING : o.qN.FAILURE), (v = null);
    },
    SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS_V2: function (e) {
        let { status: t } = e;
        (D = M[t]), (v = null);
    },
    SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function (e) {
        let { error: t } = e;
        (D = o.qN.ERROR), (v = t);
    },
    SAFETY_HUB_RESET_AGE_CHECK_STATUS: function (e) {
        let {} = e;
        (D = o.qN.NONE), (R = 0), (v = null);
    },
    LOGOUT: P,
    LOGIN_SUSPENDED_USER: P,
});
