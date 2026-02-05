"use strict";
let r, i, a;
n.d(t, { A: () => S }), n(142703);
var s = n(311907),
    o = n(73153),
    l = n(284016),
    u = n(253932),
    c = n(617617),
    d = n(189081);
let _ = { applicationId: null, originURL: null },
    f = _,
    p = new Set(),
    h = !1;
function m() {
    a = null;
}
function g() {
    (r = null), (i = null), (p = new Set()), (f.applicationId = null), (f.originURL = null), m();
}
function E(e) {
    let { applicationId: t } = e;
    p.add(t), (a = null);
}
function A(e) {
    let { applicationId: t, originURL: n } = e;
    (r = t), (i = n), p.delete(t), (a = null), (f.applicationId = t), (f.originURL = n);
}
function I(e) {
    let { applicationId: t, error: n } = e;
    p.delete(t), (a = n);
}
function T(e) {
    let { testModeApplicationId: t } = e;
    r = t;
}
class y extends s.Ay.PersistedStore {
    static displayName = "TestModeStore";
    static persistKey = "TestModeStore";
    initialize(e) {
        (r = (f = { ...(e ?? _) }).applicationId),
            (i = f.originURL),
            this.waitFor(d.A, l.A, c.A),
            this.syncWith([c.A, l.A], () => !0),
            d.A.whenInitialized(() => {
                h = !0;
            });
    }
    inTestModeForApplication(e) {
        return r === e;
    }
    inTestModeForEmbeddedApplication(e) {
        return r === e && null != i;
    }
    shouldDisplayTestMode(e) {
        return u.Q_.getSetting() && this.inTestModeForApplication(e);
    }
    getState() {
        return f;
    }
    get isTestMode() {
        return null != r;
    }
    get isFetchingAuthorization() {
        return p.size > 0;
    }
    get testModeEmbeddedApplicationId() {
        return null != i ? r : null;
    }
    get testModeApplicationId() {
        return r;
    }
    get testModeOriginURL() {
        return i;
    }
    get error() {
        return a;
    }
    whenInitialized(e) {
        this.addConditionalChangeListener(() => {
            if (h) return setImmediate(e), !1;
        });
    }
}
let S = new y(o.h, {
    DEVELOPER_TEST_MODE_AUTHORIZATION_START: E,
    DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: A,
    DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: I,
    OVERLAY_INITIALIZE: T,
    DEVELOPER_TEST_MODE_RESET_ERROR: m,
    LOGOUT: g,
    DEVELOPER_TEST_MODE_RESET: g,
});
