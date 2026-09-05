n.d(t, { A: () => x });
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
    g = !1,
    S = !1,
    N = null,
    C = o.Iv.DIDNT_VIOLATE_POLICY,
    O = "",
    R = "",
    L = "",
    y = 0,
    D = null,
    v = !1,
    b = o.qN.NONE,
    M = null;
function P(e) {
    let {} = e;
    (L = ""), (D = null), (v = !1);
}
let U = {
    [o.aC.PENDING]: o.qN.LOADING,
    [o.aC.UNBANNED]: o.qN.VERIFIED,
    [o.aC.VERIFIED_OTHER_VIOLATIONS_REMAIN]: o.qN.VERIFIED_OTHER_VIOLATIONS_REMAIN,
    [o.aC.UNDERAGE]: o.qN.UNDERAGE,
    [o.aC.UNDERAGE_MANUAL_REVIEW]: o.qN.UNDERAGE_MANUAL_REVIEW,
};
function w() {
    (_ = !1),
        (d = {}),
        (u = { state: l.PN.ALL_GOOD }),
        (h = null),
        (C = o.Iv.DIDNT_VIOLATE_POLICY),
        (O = ""),
        (p = []),
        (m = !1),
        (g = !1),
        (b = o.qN.NONE),
        (y = 0),
        (M = null);
}
class G extends a.Ay.Store {
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
    getShowExpressiveModalSubtitleAlt() {
        return m;
    }
    getIsManualReviewFallbackEnabled() {
        return g;
    }
    getAppealSignal() {
        return C;
    }
    getFreeTextAppealReason() {
        return O;
    }
    getIsSubmitting() {
        return S;
    }
    getSubmitError() {
        return N;
    }
    getUsername() {
        return R;
    }
    getAgeVerificationWebviewUrl() {
        return L;
    }
    getAgeVerificationError() {
        return D;
    }
    getIsLoadingAgeVerification() {
        return v;
    }
    getAgeCheckStatus() {
        return b;
    }
    getAgeCheckError() {
        return M;
    }
    getAgeCheckAttempts() {
        return y;
    }
}
let x = new G(s.h, {
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
            showExpressiveModalSubtitleAlt: c,
            manualReviewFallbackEnabled: h,
        } = e;
        (d = r()(t, "id")),
            (u = n),
            (I = i),
            (f = a),
            (_ = !1),
            (E = !0),
            (A = null),
            (R = s),
            (p = l),
            (T = o),
            (m = c),
            (g = h);
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
        (d[t.id] = t), (c[t.id] = l.nU.SUCCESS), (u = n), (_ = !1), (A = null), (I = i), (f = a), (E = !0), (R = r);
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
        (h = null), (C = o.Iv.DIDNT_VIOLATE_POLICY), (O = "");
    },
    SAFETY_HUB_APPEAL_SIGNAL_SELECT: function (e) {
        let { signal: t } = e;
        C = t;
    },
    SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function (e) {
        let { userInput: t } = e;
        O = t;
    },
    SAFETY_HUB_REQUEST_REVIEW_START: function (e) {
        let {} = e;
        (S = !0), (N = null);
    },
    SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function (e) {
        let { classificationId: t } = e;
        (S = !1), (N = null), (d[t].appeal_status = { status: l.Wi.REVIEW_PENDING });
    },
    SAFETY_HUB_REQUEST_REVIEW_FAILURE: function (e) {
        let { error: t } = e;
        (S = !1), (N = t);
    },
    SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START: function (e) {
        let {} = e;
        (L = ""), (D = null), (v = !0);
    },
    SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function (e) {
        let { verificationWebviewUrl: t } = e;
        (L = t), (D = null), (v = !1);
    },
    SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function (e) {
        let { error: t } = e;
        (L = ""), (D = t), (v = !1);
    },
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN: P,
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE: P,
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS: function (e) {
        let {} = e;
        for (let e in ((b = o.qN.LOADING), d)) d[e].is_coppa && (d[e].appeal_status = { status: l.Wi.REVIEW_PENDING });
    },
    SAFETY_HUB_EXPRESSIVE_MODAL_V2_VERIFICATION_SUBMITTED: function (e) {
        let {} = e;
        b = o.qN.LOADING;
    },
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL: function (e) {
        let {} = e;
        (b = o.qN.LOADING), (M = null);
    },
    SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START: function (e) {
        let {} = e;
        (b = o.qN.LOADING), (M = null), (y += 1);
    },
    SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function (e) {
        let { success: t } = e;
        (b = t ? o.qN.SUCCESS : y < o.ti ? o.qN.LOADING : o.qN.FAILURE), (M = null);
    },
    SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS_V2: function (e) {
        let { status: t } = e;
        (b = U[t]), (M = null);
    },
    SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function (e) {
        let { error: t } = e;
        (b = o.qN.ERROR), (M = t);
    },
    SAFETY_HUB_RESET_AGE_CHECK_STATUS: function (e) {
        let {} = e;
        (b = o.qN.NONE), (y = 0), (M = null);
    },
    LOGOUT: w,
    LOGIN_SUSPENDED_USER: w,
});
