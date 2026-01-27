n.d(e, {
    A: () => Y,
});
var E,
    i,
    _ = n(784041),
    l = n.n(_),
    A = n(311907),
    r = n(73153),
    a = n(739010),
    u = n(239093);
let S = {},
    s = {},
    T = {
        state: a.PN.ALL_GOOD,
    },
    o = !1,
    U = !1,
    c = null,
    p = null,
    d = !1,
    C = !1,
    g = [],
    F = !1,
    I = null,
    R = u.Iv.DIDNT_VIOLATE_POLICY,
    f = "",
    h = "",
    H = "",
    D = 0,
    L = null,
    N = !1,
    P = u.qN.NONE,
    B = null;

function O(t) {
    let {} = t;
    (H = ""), (L = null), (N = !1);
}
class b extends (i = A.Ay.Store) {
    isFetching() {
        return o;
    }
    getClassifications() {
        return Object.values(S);
    }
    getClassification(t) {
        return S[t];
    }
    getAccountStanding() {
        return T;
    }
    getFetchError() {
        return c;
    }
    isInitialized() {
        return U;
    }
    getClassificationRequestState(t) {
        return s[t];
    }
    getAppealClassificationId() {
        return p;
    }
    getIsDsaEligible() {
        return d;
    }
    getIsAppealEligible() {
        return C;
    }
    getAppealEligibility() {
        return g;
    }
    getAppealSignal() {
        return R;
    }
    getFreeTextAppealReason() {
        return f;
    }
    getIsSubmitting() {
        return F;
    }
    getSubmitError() {
        return I;
    }
    getUsername() {
        return h;
    }
    getAgeVerificationWebviewUrl() {
        return H;
    }
    getAgeVerificationError() {
        return L;
    }
    getIsLoadingAgeVerification() {
        return N;
    }
    getAgeCheckStatus() {
        return P;
    }
    getAgeCheckError() {
        return B;
    }
    getAgeCheckAttempts() {
        return D;
    }
}
(E = "displayName") in b
    ? Object.defineProperty(b, E, {
          value: "SafetyHubStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (b[E] = "SafetyHubStore");
let Y = new b(r.h, {
    SAFETY_HUB_FETCH_START: function (t) {
        o = !0;
    },
    SAFETY_HUB_FETCH_SUCCESS: function (t) {
        let {
            classifications: e,
            accountStanding: n,
            isDsaEligible: E,
            isAppealEligible: i,
            username: _,
            appealEligibility: A,
        } = t;
        (S = l()(e, "id")), (T = n), (d = E), (C = i), (o = !1), (U = !0), (c = null), (h = _), (g = A);
    },
    SAFETY_HUB_FETCH_FAILURE: function (t) {
        let { error: e } = t;
        (o = !1), (U = !1), (c = e);
    },
    SAFETY_HUB_FETCH_CLASSIFICATION_START: function (t) {
        (s[t.classificationId] = a.nU.PENDING), (o = !0);
    },
    SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function (t) {
        let { classification: e, accountStanding: n, isDsaEligible: E, username: i, isAppealEligible: _ } = t;
        (S[e.id] = e), (s[e.id] = a.nU.SUCCESS), (T = n), (o = !1), (c = null), (d = E), (C = _), (U = !0), (h = i);
    },
    SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function (t) {
        let { error: e, classificationId: n } = t;
        (o = !1), (c = e), (s[n] = a.nU.FAILED), (U = !1);
    },
    SAFETY_HUB_APPEAL_OPEN: function (t) {
        let { classificationId: e } = t;
        p = e;
    },
    SAFETY_HUB_APPEAL_CLOSE: function () {
        (p = null), (R = u.Iv.DIDNT_VIOLATE_POLICY), (f = "");
    },
    SAFETY_HUB_APPEAL_SIGNAL_SELECT: function (t) {
        let { signal: e } = t;
        R = e;
    },
    SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function (t) {
        let { userInput: e } = t;
        f = e;
    },
    SAFETY_HUB_REQUEST_REVIEW_START: function (t) {
        let {} = t;
        (F = !0), (I = null);
    },
    SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function (t) {
        let { classificationId: e } = t;
        (F = !1),
            (I = null),
            (S[e].appeal_status = {
                status: a.Wi.REVIEW_PENDING,
            });
    },
    SAFETY_HUB_REQUEST_REVIEW_FAILURE: function (t) {
        let { error: e } = t;
        (F = !1), (I = e);
    },
    SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START: function (t) {
        let {} = t;
        (H = ""), (L = null), (N = !0);
    },
    SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function (t) {
        let { verificationWebviewUrl: e } = t;
        (H = e), (L = null), (N = !1);
    },
    SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function (t) {
        let { error: e } = t;
        (H = ""), (L = e), (N = !1);
    },
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN: O,
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE: O,
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS: function (t) {
        let {} = t;
        for (let t in ((P = u.qN.LOADING), S))
            S[t].is_coppa &&
                (S[t].appeal_status = {
                    status: a.Wi.REVIEW_PENDING,
                });
    },
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL: function (t) {
        let {} = t;
        (P = u.qN.LOADING), (B = null);
    },
    SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START: function (t) {
        let {} = t;
        (P = u.qN.LOADING), (B = null), (D += 1);
    },
    SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function (t) {
        let { success: e } = t;
        (P = e ? u.qN.SUCCESS : D < u.ti ? u.qN.LOADING : u.qN.FAILURE), (B = null);
    },
    SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function (t) {
        let { error: e } = t;
        (P = u.qN.ERROR), (B = e);
    },
    LOGOUT: function () {
        (o = !1),
            (S = {}),
            (T = {
                state: a.PN.ALL_GOOD,
            }),
            (p = null),
            (R = u.Iv.DIDNT_VIOLATE_POLICY),
            (f = ""),
            (g = []);
    },
});
