n.d(t, { Z: () => en });
var r,
    i = n(979079),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(531441),
    c = n(800530);
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
    _ = { state: l.Sn.ALL_GOOD },
    p = !1,
    h = !1,
    m = null,
    g = null,
    E = !1,
    b = !1,
    y = [],
    O = !1,
    v = null,
    I = c.bK.DIDNT_VIOLATE_POLICY,
    T = "",
    S = "",
    A = "",
    C = 0,
    N = null,
    R = !1,
    P = c.oE.NONE,
    D = null;
function w(e) {
    p = !0;
}
function L(e) {
    let {
        classifications: t,
        accountStanding: n,
        isDsaEligible: r,
        isAppealEligible: i,
        username: o,
        appealEligibility: s,
    } = e;
    (d = a()(t, "id")), (_ = n), (E = r), (b = i), (p = !1), (h = !0), (m = null), (S = o), (y = s);
}
function x(e) {
    let { error: t } = e;
    (p = !1), (h = !1), (m = t);
}
function M(e) {
    (f[e.classificationId] = l.OY.PENDING), (p = !0);
}
function j(e) {
    let { classification: t, accountStanding: n, isDsaEligible: r, username: i, isAppealEligible: a } = e;
    (d[t.id] = t), (f[t.id] = l.OY.SUCCESS), (_ = n), (p = !1), (m = null), (E = r), (b = a), (h = !0), (S = i);
}
function k(e) {
    let { error: t, classificationId: n } = e;
    (p = !1), (m = t), (f[n] = l.OY.FAILED), (h = !1);
}
function U(e) {
    let { classificationId: t } = e;
    g = t;
}
function G() {
    (g = null), (I = c.bK.DIDNT_VIOLATE_POLICY), (T = "");
}
function B(e) {
    let { signal: t } = e;
    I = t;
}
function Z(e) {
    let { userInput: t } = e;
    T = t;
}
function F(e) {
    let {} = e;
    (O = !0), (v = null);
}
function V(e) {
    let { classificationId: t } = e;
    (O = !1), (v = null), (d[t].appeal_status = { status: l.hQ.REVIEW_PENDING });
}
function H(e) {
    let { error: t } = e;
    (O = !1), (v = t);
}
function Y(e) {
    let {} = e;
    (A = ""), (N = null), (R = !0);
}
function W(e) {
    let { verificationWebviewUrl: t } = e;
    (A = t), (N = null), (R = !1);
}
function K(e) {
    let { error: t } = e;
    (A = ""), (N = t), (R = !1);
}
function z(e) {
    let {} = e;
    (A = ""), (N = null), (R = !1);
}
function q(e) {
    let {} = e;
    for (let e in ((P = c.oE.LOADING), d)) d[e].is_coppa && (d[e].appeal_status = { status: l.hQ.REVIEW_PENDING });
}
function X(e) {
    let {} = e;
    (P = c.oE.LOADING), (D = null);
}
function Q(e) {
    let {} = e;
    (P = c.oE.LOADING), (D = null), (C += 1);
}
function J(e) {
    let { success: t } = e;
    (P = t ? c.oE.SUCCESS : C < c.o6 ? c.oE.LOADING : c.oE.FAILURE), (D = null);
}
function $(e) {
    let { error: t } = e;
    (P = c.oE.ERROR), (D = t);
}
function ee() {
    (p = !1), (d = {}), (_ = { state: l.Sn.ALL_GOOD }), (g = null), (I = c.bK.DIDNT_VIOLATE_POLICY), (T = ""), (y = []);
}
class et extends (r = o.ZP.Store) {
    isFetching() {
        return p;
    }
    getClassifications() {
        return Object.values(d);
    }
    getClassification(e) {
        return d[e];
    }
    getAccountStanding() {
        return _;
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
        return I;
    }
    getFreeTextAppealReason() {
        return T;
    }
    getIsSubmitting() {
        return O;
    }
    getSubmitError() {
        return v;
    }
    getUsername() {
        return S;
    }
    getAgeVerificationWebviewUrl() {
        return A;
    }
    getAgeVerificationError() {
        return N;
    }
    getIsLoadingAgeVerification() {
        return R;
    }
    getAgeCheckStatus() {
        return P;
    }
    getAgeCheckError() {
        return D;
    }
    getAgeCheckAttempts() {
        return C;
    }
}
u(et, "displayName", "SafetyHubStore");
let en = new et(s.Z, {
    SAFETY_HUB_FETCH_START: w,
    SAFETY_HUB_FETCH_SUCCESS: L,
    SAFETY_HUB_FETCH_FAILURE: x,
    SAFETY_HUB_FETCH_CLASSIFICATION_START: M,
    SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: j,
    SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: k,
    SAFETY_HUB_APPEAL_OPEN: U,
    SAFETY_HUB_APPEAL_CLOSE: G,
    SAFETY_HUB_APPEAL_SIGNAL_SELECT: B,
    SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: Z,
    SAFETY_HUB_REQUEST_REVIEW_START: F,
    SAFETY_HUB_REQUEST_REVIEW_SUCCESS: V,
    SAFETY_HUB_REQUEST_REVIEW_FAILURE: H,
    SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START: Y,
    SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: W,
    SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE: K,
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN: z,
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE: z,
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS: q,
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL: X,
    SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START: Q,
    SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: J,
    SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE: $,
    LOGOUT: ee,
});
