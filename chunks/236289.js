var i,
    E,
    l,
    _,
    r = n(979079),
    a = n.n(r),
    u = n(442837),
    A = n(570140),
    o = n(531441),
    S = n(800530);
let c = {},
    s = {},
    T = { state: o.Sn.ALL_GOOD },
    U = !1,
    d = !1,
    f = null,
    p = null,
    g = !1,
    F = !1,
    C = [],
    I = !1,
    R = null,
    D = S.bK.DIDNT_VIOLATE_POLICY,
    L = '',
    H = '',
    N = '',
    O = 0,
    b = null,
    P = !1,
    Y = S.oE.NONE,
    B = null;
function h(t) {
    let {} = t;
    (N = ''), (b = null), (P = !1);
}
class v extends (_ = u.ZP.Store) {
    isFetching() {
        return U;
    }
    getClassifications() {
        return Object.values(c);
    }
    getClassification(t) {
        return c[t];
    }
    getAccountStanding() {
        return T;
    }
    getFetchError() {
        return f;
    }
    isInitialized() {
        return d;
    }
    getClassificationRequestState(t) {
        return s[t];
    }
    getAppealClassificationId() {
        return p;
    }
    getIsDsaEligible() {
        return g;
    }
    getIsAppealEligible() {
        return F;
    }
    getAppealEligibility() {
        return C;
    }
    getAppealSignal() {
        return D;
    }
    getFreeTextAppealReason() {
        return L;
    }
    getIsSubmitting() {
        return I;
    }
    getSubmitError() {
        return R;
    }
    getUsername() {
        return H;
    }
    getAgeVerificationWebviewUrl() {
        return N;
    }
    getAgeVerificationError() {
        return b;
    }
    getIsLoadingAgeVerification() {
        return P;
    }
    getAgeCheckStatus() {
        return Y;
    }
    getAgeCheckError() {
        return B;
    }
    getAgeCheckAttempts() {
        return O;
    }
}
(l = 'SafetyHubStore'),
    (E = 'displayName') in (i = v)
        ? Object.defineProperty(i, E, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[E] = l),
    (e.Z = new v(A.Z, {
        SAFETY_HUB_FETCH_START: function (t) {
            U = !0;
        },
        SAFETY_HUB_FETCH_SUCCESS: function (t) {
            let { classifications: e, accountStanding: n, isDsaEligible: i, isAppealEligible: E, username: l, appealEligibility: _ } = t;
            (c = a()(e, 'id')), (T = n), (g = i), (F = E), (U = !1), (d = !0), (f = null), (H = l), (C = _);
        },
        SAFETY_HUB_FETCH_FAILURE: function (t) {
            let { error: e } = t;
            (U = !1), (d = !1), (f = e);
        },
        SAFETY_HUB_FETCH_CLASSIFICATION_START: function (t) {
            (s[t.classificationId] = o.OY.PENDING), (U = !0);
        },
        SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function (t) {
            let { classification: e, accountStanding: n, isDsaEligible: i, username: E, isAppealEligible: l } = t;
            (c[e.id] = e), (s[e.id] = o.OY.SUCCESS), (T = n), (U = !1), (f = null), (g = i), (F = l), (d = !0), (H = E);
        },
        SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function (t) {
            let { error: e, classificationId: n } = t;
            (U = !1), (f = e), (s[n] = o.OY.FAILED), (d = !1);
        },
        SAFETY_HUB_APPEAL_OPEN: function (t) {
            let { classificationId: e } = t;
            p = e;
        },
        SAFETY_HUB_APPEAL_CLOSE: function () {
            (p = null), (D = S.bK.DIDNT_VIOLATE_POLICY), (L = '');
        },
        SAFETY_HUB_APPEAL_SIGNAL_SELECT: function (t) {
            let { signal: e } = t;
            D = e;
        },
        SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function (t) {
            let { userInput: e } = t;
            L = e;
        },
        SAFETY_HUB_REQUEST_REVIEW_START: function (t) {
            let {} = t;
            (I = !0), (R = null);
        },
        SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function (t) {
            let { classificationId: e } = t;
            (I = !1), (R = null), (c[e].appeal_status = { status: o.hQ.REVIEW_PENDING });
        },
        SAFETY_HUB_REQUEST_REVIEW_FAILURE: function (t) {
            let { error: e } = t;
            (I = !1), (R = e);
        },
        SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START: function (t) {
            let {} = t;
            (N = ''), (b = null), (P = !0);
        },
        SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function (t) {
            let { verificationWebviewUrl: e } = t;
            (N = e), (b = null), (P = !1);
        },
        SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function (t) {
            let { error: e } = t;
            (N = ''), (b = e), (P = !1);
        },
        SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN: h,
        SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE: h,
        SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS: function (t) {
            let {} = t;
            for (let t in ((Y = S.oE.LOADING), c)) c[t].is_coppa && (c[t].appeal_status = { status: o.hQ.REVIEW_PENDING });
        },
        SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL: function (t) {
            let {} = t;
            (Y = S.oE.LOADING), (B = null);
        },
        SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START: function (t) {
            let {} = t;
            (Y = S.oE.LOADING), (B = null), (O += 1);
        },
        SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function (t) {
            let { success: e } = t;
            (Y = e ? S.oE.SUCCESS : O < S.o6 ? S.oE.LOADING : S.oE.FAILURE), (B = null);
        },
        SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function (t) {
            let { error: e } = t;
            (Y = S.oE.ERROR), (B = e);
        },
        LOGOUT: function () {
            (U = !1), (c = {}), (T = { state: o.Sn.ALL_GOOD }), (p = null), (D = S.bK.DIDNT_VIOLATE_POLICY), (L = ''), (C = []);
        }
    }));
