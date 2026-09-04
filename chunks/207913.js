n.d(t, { A: () => G });
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
    S = null,
    N = o.Iv.DIDNT_VIOLATE_POLICY,
    C = "",
    O = "",
    R = "",
    L = 0,
    y = null,
    D = !1,
    v = o.qN.NONE,
    b = null;
function M(e) {
    let {} = e;
    (R = ""), (y = null), (D = !1);
}
let P = {
    [o.aC.PENDING]: o.qN.LOADING,
    [o.aC.UNBANNED]: o.qN.VERIFIED,
    [o.aC.VERIFIED_OTHER_VIOLATIONS_REMAIN]: o.qN.VERIFIED_OTHER_VIOLATIONS_REMAIN,
    [o.aC.UNDERAGE]: o.qN.UNDERAGE,
    [o.aC.UNDERAGE_MANUAL_REVIEW]: o.qN.UNDERAGE_MANUAL_REVIEW,
};
function U() {
    (_ = !1),
        (d = {}),
        (u = { state: l.PN.ALL_GOOD }),
        (h = null),
        (N = o.Iv.DIDNT_VIOLATE_POLICY),
        (C = ""),
        (p = []),
        (m = !1),
        (v = o.qN.NONE),
        (L = 0),
        (b = null);
}
class w extends a.Ay.Store {
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
    getAppealSignal() {
        return N;
    }
    getFreeTextAppealReason() {
        return C;
    }
    getIsSubmitting() {
        return g;
    }
    getSubmitError() {
        return S;
    }
    getUsername() {
        return O;
    }
    getAgeVerificationWebviewUrl() {
        return R;
    }
    getAgeVerificationError() {
        return y;
    }
    getIsLoadingAgeVerification() {
        return D;
    }
    getAgeCheckStatus() {
        return v;
    }
    getAgeCheckError() {
        return b;
    }
    getAgeCheckAttempts() {
        return L;
    }
}
let G = new w(s.h, {
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
        } = e;
        (d = r()(t, "id")),
            (u = n),
            (I = i),
            (f = a),
            (_ = !1),
            (E = !0),
            (A = null),
            (O = s),
            (p = l),
            (T = o),
            (m = c);
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
        (d[t.id] = t), (c[t.id] = l.nU.SUCCESS), (u = n), (_ = !1), (A = null), (I = i), (f = a), (E = !0), (O = r);
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
        (h = null), (N = o.Iv.DIDNT_VIOLATE_POLICY), (C = "");
    },
    SAFETY_HUB_APPEAL_SIGNAL_SELECT: function (e) {
        let { signal: t } = e;
        N = t;
    },
    SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function (e) {
        let { userInput: t } = e;
        C = t;
    },
    SAFETY_HUB_REQUEST_REVIEW_START: function (e) {
        let {} = e;
        (g = !0), (S = null);
    },
    SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function (e) {
        let { classificationId: t } = e;
        (g = !1), (S = null), (d[t].appeal_status = { status: l.Wi.REVIEW_PENDING });
    },
    SAFETY_HUB_REQUEST_REVIEW_FAILURE: function (e) {
        let { error: t } = e;
        (g = !1), (S = t);
    },
    SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START: function (e) {
        let {} = e;
        (R = ""), (y = null), (D = !0);
    },
    SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function (e) {
        let { verificationWebviewUrl: t } = e;
        (R = t), (y = null), (D = !1);
    },
    SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function (e) {
        let { error: t } = e;
        (R = ""), (y = t), (D = !1);
    },
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN: M,
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE: M,
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS: function (e) {
        let {} = e;
        for (let e in ((v = o.qN.LOADING), d)) d[e].is_coppa && (d[e].appeal_status = { status: l.Wi.REVIEW_PENDING });
    },
    SAFETY_HUB_EXPRESSIVE_MODAL_V2_VERIFICATION_SUBMITTED: function (e) {
        let {} = e;
        v = o.qN.LOADING;
    },
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL: function (e) {
        let {} = e;
        (v = o.qN.LOADING), (b = null);
    },
    SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START: function (e) {
        let {} = e;
        (v = o.qN.LOADING), (b = null), (L += 1);
    },
    SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function (e) {
        let { success: t } = e;
        (v = t ? o.qN.SUCCESS : L < o.ti ? o.qN.LOADING : o.qN.FAILURE), (b = null);
    },
    SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS_V2: function (e) {
        let { status: t } = e;
        (v = P[t]), (b = null);
    },
    SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function (e) {
        let { error: t } = e;
        (v = o.qN.ERROR), (b = t);
    },
    SAFETY_HUB_RESET_AGE_CHECK_STATUS: function (e) {
        let {} = e;
        (v = o.qN.NONE), (L = 0), (b = null);
    },
    LOGOUT: U,
    LOGIN_SUSPENDED_USER: U,
});
