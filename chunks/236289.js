n.d(e, { Z: () => y });
var i,
    E,
    _,
    l = n(979079),
    A = n.n(l),
    a = n(442837),
    r = n(570140),
    u = n(531441),
    o = n(800530);
let S = {},
    s = {},
    T = { state: u.Sn.ALL_GOOD },
    c = !1,
    U = !1,
    p = null,
    d = null,
    f = !1,
    g = !1,
    C = [],
    F = !1,
    I = null,
    R = o.bK.DIDNT_VIOLATE_POLICY,
    D = '',
    H = '',
    L = '',
    N = 0,
    O = null,
    P = !1,
    h = o.oE.NONE,
    Y = null;
function b(t) {
    let {} = t;
    (L = ''), (O = null), (P = !1);
}
class B extends (_ = a.ZP.Store) {
    isFetching() {
        return c;
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
        return p;
    }
    isInitialized() {
        return U;
    }
    getClassificationRequestState(t) {
        return s[t];
    }
    getAppealClassificationId() {
        return d;
    }
    getIsDsaEligible() {
        return f;
    }
    getIsAppealEligible() {
        return g;
    }
    getAppealEligibility() {
        return C;
    }
    getAppealSignal() {
        return R;
    }
    getFreeTextAppealReason() {
        return D;
    }
    getIsSubmitting() {
        return F;
    }
    getSubmitError() {
        return I;
    }
    getUsername() {
        return H;
    }
    getAgeVerificationWebviewUrl() {
        return L;
    }
    getAgeVerificationError() {
        return O;
    }
    getIsLoadingAgeVerification() {
        return P;
    }
    getAgeCheckStatus() {
        return h;
    }
    getAgeCheckError() {
        return Y;
    }
    getAgeCheckAttempts() {
        return N;
    }
}
(E = 'SafetyHubStore'),
    (i = 'displayName') in B
        ? Object.defineProperty(B, i, {
              value: E,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (B[i] = E);
let y = new B(r.Z, {
    SAFETY_HUB_FETCH_START: function (t) {
        c = !0;
    },
    SAFETY_HUB_FETCH_SUCCESS: function (t) {
        let { classifications: e, accountStanding: n, isDsaEligible: i, isAppealEligible: E, username: _, appealEligibility: l } = t;
        (S = A()(e, 'id')), (T = n), (f = i), (g = E), (c = !1), (U = !0), (p = null), (H = _), (C = l);
    },
    SAFETY_HUB_FETCH_FAILURE: function (t) {
        let { error: e } = t;
        (c = !1), (U = !1), (p = e);
    },
    SAFETY_HUB_FETCH_CLASSIFICATION_START: function (t) {
        (s[t.classificationId] = u.OY.PENDING), (c = !0);
    },
    SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function (t) {
        let { classification: e, accountStanding: n, isDsaEligible: i, username: E, isAppealEligible: _ } = t;
        (S[e.id] = e), (s[e.id] = u.OY.SUCCESS), (T = n), (c = !1), (p = null), (f = i), (g = _), (U = !0), (H = E);
    },
    SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function (t) {
        let { error: e, classificationId: n } = t;
        (c = !1), (p = e), (s[n] = u.OY.FAILED), (U = !1);
    },
    SAFETY_HUB_APPEAL_OPEN: function (t) {
        let { classificationId: e } = t;
        d = e;
    },
    SAFETY_HUB_APPEAL_CLOSE: function () {
        (d = null), (R = o.bK.DIDNT_VIOLATE_POLICY), (D = '');
    },
    SAFETY_HUB_APPEAL_SIGNAL_SELECT: function (t) {
        let { signal: e } = t;
        R = e;
    },
    SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function (t) {
        let { userInput: e } = t;
        D = e;
    },
    SAFETY_HUB_REQUEST_REVIEW_START: function (t) {
        let {} = t;
        (F = !0), (I = null);
    },
    SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function (t) {
        let { classificationId: e } = t;
        (F = !1), (I = null), (S[e].appeal_status = { status: u.hQ.REVIEW_PENDING });
    },
    SAFETY_HUB_REQUEST_REVIEW_FAILURE: function (t) {
        let { error: e } = t;
        (F = !1), (I = e);
    },
    SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START: function (t) {
        let {} = t;
        (L = ''), (O = null), (P = !0);
    },
    SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function (t) {
        let { verificationWebviewUrl: e } = t;
        (L = e), (O = null), (P = !1);
    },
    SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function (t) {
        let { error: e } = t;
        (L = ''), (O = e), (P = !1);
    },
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN: b,
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE: b,
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS: function (t) {
        let {} = t;
        for (let t in ((h = o.oE.LOADING), S)) S[t].is_coppa && (S[t].appeal_status = { status: u.hQ.REVIEW_PENDING });
    },
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL: function (t) {
        let {} = t;
        (h = o.oE.LOADING), (Y = null);
    },
    SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START: function (t) {
        let {} = t;
        (h = o.oE.LOADING), (Y = null), (N += 1);
    },
    SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function (t) {
        let { success: e } = t;
        (h = e ? o.oE.SUCCESS : N < o.o6 ? o.oE.LOADING : o.oE.FAILURE), (Y = null);
    },
    SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function (t) {
        let { error: e } = t;
        (h = o.oE.ERROR), (Y = e);
    },
    LOGOUT: function () {
        (c = !1), (S = {}), (T = { state: u.Sn.ALL_GOOD }), (d = null), (R = o.bK.DIDNT_VIOLATE_POLICY), (D = ''), (C = []);
    }
});
