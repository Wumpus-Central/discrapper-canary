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
    p = { state: l.Sn.ALL_GOOD },
    _ = !1,
    m = !1,
    h = null,
    g = null,
    E = !1,
    b = !1,
    y = [],
    O = !1,
    v = null,
    S = c.bK.DIDNT_VIOLATE_POLICY,
    I = "",
    T = "",
    A = "",
    C = 0,
    N = null,
    P = !1,
    R = c.oE.NONE,
    D = null;
function w(e) {
    _ = !0;
}
function x(e) {
    let {
        classifications: t,
        accountStanding: n,
        isDsaEligible: r,
        isAppealEligible: i,
        username: o,
        appealEligibility: s,
    } = e;
    (d = a()(t, "id")), (p = n), (E = r), (b = i), (_ = !1), (m = !0), (h = null), (T = o), (y = s);
}
function L(e) {
    let { error: t } = e;
    (_ = !1), (m = !1), (h = t);
}
function j(e) {
    (f[e.classificationId] = l.OY.PENDING), (_ = !0);
}
function M(e) {
    let { classification: t, accountStanding: n, isDsaEligible: r, username: i, isAppealEligible: a } = e;
    (d[t.id] = t), (f[t.id] = l.OY.SUCCESS), (p = n), (_ = !1), (h = null), (E = r), (b = a), (m = !0), (T = i);
}
function k(e) {
    let { error: t, classificationId: n } = e;
    (_ = !1), (h = t), (f[n] = l.OY.FAILED), (m = !1);
}
function U(e) {
    let { classificationId: t } = e;
    g = t;
}
function G() {
    (g = null), (S = c.bK.DIDNT_VIOLATE_POLICY), (I = "");
}
function Z(e) {
    let { signal: t } = e;
    S = t;
}
function B(e) {
    let { userInput: t } = e;
    I = t;
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
    (A = ""), (N = null), (P = !0);
}
function W(e) {
    let { verificationWebviewUrl: t } = e;
    (A = t), (N = null), (P = !1);
}
function K(e) {
    let { error: t } = e;
    (A = ""), (N = t), (P = !1);
}
function z(e) {
    let {} = e;
    (A = ""), (N = null), (P = !1);
}
function q(e) {
    let {} = e;
    for (let e in ((R = c.oE.LOADING), d)) d[e].is_coppa && (d[e].appeal_status = { status: l.hQ.REVIEW_PENDING });
}
function Q(e) {
    let {} = e;
    (R = c.oE.LOADING), (D = null);
}
function X(e) {
    let {} = e;
    (R = c.oE.LOADING), (D = null), (C += 1);
}
function J(e) {
    let { success: t } = e;
    (R = t ? c.oE.SUCCESS : C < c.o6 ? c.oE.LOADING : c.oE.FAILURE), (D = null);
}
function $(e) {
    let { error: t } = e;
    (R = c.oE.ERROR), (D = t);
}
function ee() {
    (_ = !1), (d = {}), (p = { state: l.Sn.ALL_GOOD }), (g = null), (S = c.bK.DIDNT_VIOLATE_POLICY), (I = ""), (y = []);
}
class et extends (r = o.ZP.Store) {
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
        return h;
    }
    isInitialized() {
        return m;
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
        return S;
    }
    getFreeTextAppealReason() {
        return I;
    }
    getIsSubmitting() {
        return O;
    }
    getSubmitError() {
        return v;
    }
    getUsername() {
        return T;
    }
    getAgeVerificationWebviewUrl() {
        return A;
    }
    getAgeVerificationError() {
        return N;
    }
    getIsLoadingAgeVerification() {
        return P;
    }
    getAgeCheckStatus() {
        return R;
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
    SAFETY_HUB_FETCH_SUCCESS: x,
    SAFETY_HUB_FETCH_FAILURE: L,
    SAFETY_HUB_FETCH_CLASSIFICATION_START: j,
    SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: M,
    SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: k,
    SAFETY_HUB_APPEAL_OPEN: U,
    SAFETY_HUB_APPEAL_CLOSE: G,
    SAFETY_HUB_APPEAL_SIGNAL_SELECT: Z,
    SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: B,
    SAFETY_HUB_REQUEST_REVIEW_START: F,
    SAFETY_HUB_REQUEST_REVIEW_SUCCESS: V,
    SAFETY_HUB_REQUEST_REVIEW_FAILURE: H,
    SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START: Y,
    SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: W,
    SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE: K,
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN: z,
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE: z,
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS: q,
    SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL: Q,
    SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START: X,
    SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: J,
    SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE: $,
    LOGOUT: ee,
});
