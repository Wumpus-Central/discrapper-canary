n.d(t, { A: () => en });
var r,
    i = n(784041),
    a = n.n(i),
    s = n(311907),
    o = n(73153),
    l = n(739010),
    c = n(239093);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let d = {},
    f = {},
    p = { state: l.PN.ALL_GOOD },
    _ = !1,
    h = !1,
    m = null,
    g = null,
    E = !1,
    b = !1,
    y = [],
    O = !1,
    A = null,
    v = c.Iv.DIDNT_VIOLATE_POLICY,
    S = "",
    I = "",
    T = "",
    C = 0,
    N = null,
    R = !1,
    w = c.qN.NONE,
    P = null;
function D(e) {
    _ = !0;
}
function x(e) {
    let {
        classifications: t,
        accountStanding: n,
        isDsaEligible: r,
        isAppealEligible: i,
        username: s,
        appealEligibility: o,
    } = e;
    (d = a()(t, "id")), (p = n), (E = r), (b = i), (_ = !1), (h = !0), (m = null), (I = s), (y = o);
}
function L(e) {
    let { error: t } = e;
    (_ = !1), (h = !1), (m = t);
}
function j(e) {
    (f[e.classificationId] = l.nU.PENDING), (_ = !0);
}
function M(e) {
    let { classification: t, accountStanding: n, isDsaEligible: r, username: i, isAppealEligible: a } = e;
    (d[t.id] = t), (f[t.id] = l.nU.SUCCESS), (p = n), (_ = !1), (m = null), (E = r), (b = a), (h = !0), (I = i);
}
function k(e) {
    let { error: t, classificationId: n } = e;
    (_ = !1), (m = t), (f[n] = l.nU.FAILED), (h = !1);
}
function U(e) {
    let { classificationId: t } = e;
    g = t;
}
function G() {
    (g = null), (v = c.Iv.DIDNT_VIOLATE_POLICY), (S = "");
}
function V(e) {
    let { signal: t } = e;
    v = t;
}
function F(e) {
    let { userInput: t } = e;
    S = t;
}
function B(e) {
    let {} = e;
    (O = !0), (A = null);
}
function H(e) {
    let { classificationId: t } = e;
    (O = !1), (A = null), (d[t].appeal_status = { status: l.Wi.REVIEW_PENDING });
}
function Y(e) {
    let { error: t } = e;
    (O = !1), (A = t);
}
function W(e) {
    let {} = e;
    (T = ""), (N = null), (R = !0);
}
function K(e) {
    let { verificationWebviewUrl: t } = e;
    (T = t), (N = null), (R = !1);
}
function z(e) {
    let { error: t } = e;
    (T = ""), (N = t), (R = !1);
}
function q(e) {
    let {} = e;
    (T = ""), (N = null), (R = !1);
}
function X(e) {
    let {} = e;
    for (let e in ((w = c.qN.LOADING), d)) d[e].is_coppa && (d[e].appeal_status = { status: l.Wi.REVIEW_PENDING });
}
function Z(e) {
    let {} = e;
    (w = c.qN.LOADING), (P = null);
}
function Q(e) {
    let {} = e;
    (w = c.qN.LOADING), (P = null), (C += 1);
}
function $(e) {
    let { success: t } = e;
    (w = t ? c.qN.SUCCESS : C < c.ti ? c.qN.LOADING : c.qN.FAILURE), (P = null);
}
function J(e) {
    let { error: t } = e;
    (w = c.qN.ERROR), (P = t);
}
function ee() {
    (_ = !1), (d = {}), (p = { state: l.PN.ALL_GOOD }), (g = null), (v = c.Iv.DIDNT_VIOLATE_POLICY), (S = ""), (y = []);
}
class et extends (r = s.Ay.Store) {
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
        return p;
    }
    getFetchError() {
        return m;
    }
    isInitialized() {
        return h;
    }
    getClassificationRequestState(e) {
        return f[e];
    }
    getAppealClassificationId() {
        return g;
    }
    getIsDsaEligible() {
        return E;
    }
    getIsAppealEligible() {
        return b;
    }
    getAppealEligibility() {
        return y;
    }
    getAppealSignal() {
        return v;
    }
    getFreeTextAppealReason() {
        return S;
    }
    getIsSubmitting() {
        return O;
    }
    getSubmitError() {
        return A;
    }
    getUsername() {
        return I;
    }
    getAgeVerificationWebviewUrl() {
        return T;
    }
    getAgeVerificationError() {
        return N;
    }
    getIsLoadingAgeVerification() {
        return R;
    }
    getAgeCheckStatus() {
        return w;
    }
    getAgeCheckError() {
        return P;
    }
    getAgeCheckAttempts() {
        return C;
    }
}
u(et, "displayName", "SafetyHubStore");
let en = new et(o.h, {
    SAFETY_HUB_FETCH_START: D,
    SAFETY_HUB_FETCH_SUCCESS: x,
    SAFETY_HUB_FETCH_FAILURE: L,
    SAFETY_HUB_FETCH_CLASSIFICATION_START: j,
    SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: M,
    SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: k,
    SAFETY_HUB_APPEAL_OPEN: U,
    SAFETY_HUB_APPEAL_CLOSE: G,
    SAFETY_HUB_APPEAL_SIGNAL_SELECT: V,
    SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: F,
    SAFETY_HUB_REQUEST_REVIEW_START: B,
    SAFETY_HUB_REQUEST_REVIEW_SUCCESS: H,
    SAFETY_HUB_REQUEST_REVIEW_FAILURE: Y,
    SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START: W,
    SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: K,
    SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE: z,
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN: q,
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE: q,
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS: X,
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL: Z,
    SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START: Q,
    SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: $,
    SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE: J,
    LOGOUT: ee,
});
