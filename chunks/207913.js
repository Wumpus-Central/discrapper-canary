E.d(e, { A: () => O });
var n = E(962929),
    _ = E.n(n),
    i = E(17928),
    A = E(228366),
    l = E(739010),
    a = E(239093);
let r = {},
    T = {},
    s = { state: l.PN.ALL_GOOD },
    S = !1,
    u = !1,
    o = null,
    U = null,
    c = !1,
    p = !1,
    C = [],
    f = !1,
    g = null,
    d = a.Iv.DIDNT_VIOLATE_POLICY,
    F = "",
    I = "",
    R = "",
    h = 0,
    D = null,
    H = !1,
    L = a.qN.NONE,
    N = null;
function B(t) {
    let {} = t;
    (R = ""), (D = null), (H = !1);
}
class P extends i.Ay.Store {
    static displayName = "SafetyHubStore";
    isFetching() {
        return S;
    }
    getClassifications() {
        return Object.values(r);
    }
    getClassification(t) {
        return r[t];
    }
    getAccountStanding() {
        return s;
    }
    getFetchError() {
        return o;
    }
    isInitialized() {
        return u;
    }
    getClassificationRequestState(t) {
        return T[t];
    }
    getAppealClassificationId() {
        return U;
    }
    getIsDsaEligible() {
        return c;
    }
    getIsAppealEligible() {
        return p;
    }
    getAppealEligibility() {
        return C;
    }
    getAppealSignal() {
        return d;
    }
    getFreeTextAppealReason() {
        return F;
    }
    getIsSubmitting() {
        return f;
    }
    getSubmitError() {
        return g;
    }
    getUsername() {
        return I;
    }
    getAgeVerificationWebviewUrl() {
        return R;
    }
    getAgeVerificationError() {
        return D;
    }
    getIsLoadingAgeVerification() {
        return H;
    }
    getAgeCheckStatus() {
        return L;
    }
    getAgeCheckError() {
        return N;
    }
    getAgeCheckAttempts() {
        return h;
    }
}
let O = new P(A.h, {
    SAFETY_HUB_FETCH_START: function (t) {
        S = !0;
    },
    SAFETY_HUB_FETCH_SUCCESS: function (t) {
        let {
            classifications: e,
            accountStanding: E,
            isDsaEligible: n,
            isAppealEligible: i,
            username: A,
            appealEligibility: l,
        } = t;
        (r = _()(e, "id")), (s = E), (c = n), (p = i), (S = !1), (u = !0), (o = null), (I = A), (C = l);
    },
    SAFETY_HUB_FETCH_FAILURE: function (t) {
        let { error: e } = t;
        (S = !1), (u = !1), (o = e);
    },
    SAFETY_HUB_FETCH_CLASSIFICATION_START: function (t) {
        (T[t.classificationId] = l.nU.PENDING), (S = !0);
    },
    SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function (t) {
        let { classification: e, accountStanding: E, isDsaEligible: n, username: _, isAppealEligible: i } = t;
        (r[e.id] = e), (T[e.id] = l.nU.SUCCESS), (s = E), (S = !1), (o = null), (c = n), (p = i), (u = !0), (I = _);
    },
    SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function (t) {
        let { error: e, classificationId: E } = t;
        (S = !1), (o = e), (T[E] = l.nU.FAILED), (u = !1);
    },
    SAFETY_HUB_APPEAL_OPEN: function (t) {
        let { classificationId: e } = t;
        U = e;
    },
    SAFETY_HUB_APPEAL_CLOSE: function () {
        (U = null), (d = a.Iv.DIDNT_VIOLATE_POLICY), (F = "");
    },
    SAFETY_HUB_APPEAL_SIGNAL_SELECT: function (t) {
        let { signal: e } = t;
        d = e;
    },
    SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function (t) {
        let { userInput: e } = t;
        F = e;
    },
    SAFETY_HUB_REQUEST_REVIEW_START: function (t) {
        let {} = t;
        (f = !0), (g = null);
    },
    SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function (t) {
        let { classificationId: e } = t;
        (f = !1), (g = null), (r[e].appeal_status = { status: l.Wi.REVIEW_PENDING });
    },
    SAFETY_HUB_REQUEST_REVIEW_FAILURE: function (t) {
        let { error: e } = t;
        (f = !1), (g = e);
    },
    SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START: function (t) {
        let {} = t;
        (R = ""), (D = null), (H = !0);
    },
    SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function (t) {
        let { verificationWebviewUrl: e } = t;
        (R = e), (D = null), (H = !1);
    },
    SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function (t) {
        let { error: e } = t;
        (R = ""), (D = e), (H = !1);
    },
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN: B,
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE: B,
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS: function (t) {
        let {} = t;
        for (let t in ((L = a.qN.LOADING), r)) r[t].is_coppa && (r[t].appeal_status = { status: l.Wi.REVIEW_PENDING });
    },
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL: function (t) {
        let {} = t;
        (L = a.qN.LOADING), (N = null);
    },
    SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START: function (t) {
        let {} = t;
        (L = a.qN.LOADING), (N = null), (h += 1);
    },
    SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function (t) {
        let { success: e } = t;
        (L = e ? a.qN.SUCCESS : h < a.ti ? a.qN.LOADING : a.qN.FAILURE), (N = null);
    },
    SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function (t) {
        let { error: e } = t;
        (L = a.qN.ERROR), (N = e);
    },
    LOGOUT: function () {
        (S = !1),
            (r = {}),
            (s = { state: l.PN.ALL_GOOD }),
            (U = null),
            (d = a.Iv.DIDNT_VIOLATE_POLICY),
            (F = ""),
            (C = []);
    },
});
