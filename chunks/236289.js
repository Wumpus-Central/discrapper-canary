n.d(e, { Z: () => v });
var i,
    E,
    l,
    _ = n(979079),
    a = n.n(_),
    A = n(442837),
    r = n(570140),
    u = n(531441),
    o = n(800530);
let S = {},
    s = {},
    c = { state: u.Sn.ALL_GOOD },
    T = !1,
    U = !1,
    d = null,
    p = null,
    f = !1,
    g = !1,
    F = [],
    C = !1,
    I = null,
    R = o.bK.DIDNT_VIOLATE_POLICY,
    D = '',
    L = '',
    H = '',
    N = 0,
    O = null,
    b = !1,
    P = o.oE.NONE,
    Y = null;
function B(t) {
    let {} = t;
    (H = ''), (O = null), (b = !1);
}
class h extends (l = A.ZP.Store) {
    isFetching() {
        return T;
    }
    getClassifications() {
        return Object.values(S);
    }
    getClassification(t) {
        return S[t];
    }
    getAccountStanding() {
        return c;
    }
    getFetchError() {
        return d;
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
        return f;
    }
    getIsAppealEligible() {
        return g;
    }
    getAppealEligibility() {
        return F;
    }
    getAppealSignal() {
        return R;
    }
    getFreeTextAppealReason() {
        return D;
    }
    getIsSubmitting() {
        return C;
    }
    getSubmitError() {
        return I;
    }
    getUsername() {
        return L;
    }
    getAgeVerificationWebviewUrl() {
        return H;
    }
    getAgeVerificationError() {
        return O;
    }
    getIsLoadingAgeVerification() {
        return b;
    }
    getAgeCheckStatus() {
        return P;
    }
    getAgeCheckError() {
        return Y;
    }
    getAgeCheckAttempts() {
        return N;
    }
}
(E = 'SafetyHubStore'),
    (i = 'displayName') in h
        ? Object.defineProperty(h, i, {
              value: E,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (h[i] = E);
let v = new h(r.Z, {
    SAFETY_HUB_FETCH_START: function (t) {
        T = !0;
    },
    SAFETY_HUB_FETCH_SUCCESS: function (t) {
        let { classifications: e, accountStanding: n, isDsaEligible: i, isAppealEligible: E, username: l, appealEligibility: _ } = t;
        (S = a()(e, 'id')), (c = n), (f = i), (g = E), (T = !1), (U = !0), (d = null), (L = l), (F = _);
    },
    SAFETY_HUB_FETCH_FAILURE: function (t) {
        let { error: e } = t;
        (T = !1), (U = !1), (d = e);
    },
    SAFETY_HUB_FETCH_CLASSIFICATION_START: function (t) {
        (s[t.classificationId] = u.OY.PENDING), (T = !0);
    },
    SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function (t) {
        let { classification: e, accountStanding: n, isDsaEligible: i, username: E, isAppealEligible: l } = t;
        (S[e.id] = e), (s[e.id] = u.OY.SUCCESS), (c = n), (T = !1), (d = null), (f = i), (g = l), (U = !0), (L = E);
    },
    SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function (t) {
        let { error: e, classificationId: n } = t;
        (T = !1), (d = e), (s[n] = u.OY.FAILED), (U = !1);
    },
    SAFETY_HUB_APPEAL_OPEN: function (t) {
        let { classificationId: e } = t;
        p = e;
    },
    SAFETY_HUB_APPEAL_CLOSE: function () {
        (p = null), (R = o.bK.DIDNT_VIOLATE_POLICY), (D = '');
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
        (C = !0), (I = null);
    },
    SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function (t) {
        let { classificationId: e } = t;
        (C = !1), (I = null), (S[e].appeal_status = { status: u.hQ.REVIEW_PENDING });
    },
    SAFETY_HUB_REQUEST_REVIEW_FAILURE: function (t) {
        let { error: e } = t;
        (C = !1), (I = e);
    },
    SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START: function (t) {
        let {} = t;
        (H = ''), (O = null), (b = !0);
    },
    SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function (t) {
        let { verificationWebviewUrl: e } = t;
        (H = e), (O = null), (b = !1);
    },
    SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function (t) {
        let { error: e } = t;
        (H = ''), (O = e), (b = !1);
    },
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN: B,
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE: B,
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS: function (t) {
        let {} = t;
        for (let t in ((P = o.oE.LOADING), S)) S[t].is_coppa && (S[t].appeal_status = { status: u.hQ.REVIEW_PENDING });
    },
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL: function (t) {
        let {} = t;
        (P = o.oE.LOADING), (Y = null);
    },
    SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START: function (t) {
        let {} = t;
        (P = o.oE.LOADING), (Y = null), (N += 1);
    },
    SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function (t) {
        let { success: e } = t;
        (P = e ? o.oE.SUCCESS : N < o.o6 ? o.oE.LOADING : o.oE.FAILURE), (Y = null);
    },
    SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function (t) {
        let { error: e } = t;
        (P = o.oE.ERROR), (Y = e);
    },
    LOGOUT: function () {
        (T = !1), (S = {}), (c = { state: u.Sn.ALL_GOOD }), (p = null), (R = o.bK.DIDNT_VIOLATE_POLICY), (D = ''), (F = []);
    }
});
