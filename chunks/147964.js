"use strict";
let i, r, a;
n.d(t, { A: () => T }), n(142703);
var s = n(17928),
    l = n(228366),
    o = n(284016),
    d = n(885386),
    c = n(617617),
    u = n(189081);
let _ = { applicationId: null, originURL: null },
    E = _,
    A = new Set(),
    h = !1;
function I() {
    a = null;
}
function f() {
    (i = null), (r = null), (A = new Set()), (E.applicationId = null), (E.originURL = null), I();
}
class p extends s.Ay.PersistedStore {
    static displayName = "TestModeStore";
    static persistKey = "TestModeStore";
    initialize(e) {
        (i = (E = { ...(e ?? _) }).applicationId),
            (r = E.originURL),
            this.waitFor(u.A, o.A, c.A),
            this.syncWith([c.A, o.A], () => !0),
            u.A.whenInitialized(() => {
                h = !0;
            });
    }
    getTestModeApplicationId() {
        return i;
    }
    inTestModeForApplication(e) {
        return i === e;
    }
    inTestModeForEmbeddedApplication(e) {
        return i === e && null != r;
    }
    shouldDisplayTestMode(e) {
        return d.Q_.getSetting() && this.inTestModeForApplication(e);
    }
    getState() {
        return E;
    }
    get isTestMode() {
        return null != i;
    }
    get isFetchingAuthorization() {
        return A.size > 0;
    }
    get testModeEmbeddedApplicationId() {
        return null != r ? i : null;
    }
    get testModeApplicationId() {
        return i;
    }
    get testModeOriginURL() {
        return r;
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
let T = new p(l.h, {
    DEVELOPER_TEST_MODE_AUTHORIZATION_START: function (e) {
        let { applicationId: t } = e;
        A.add(t), (a = null);
    },
    DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: function (e) {
        let { applicationId: t, originURL: n } = e;
        (i = t), (r = n), A.delete(t), (a = null), (E.applicationId = t), (E.originURL = n);
    },
    DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: function (e) {
        let { applicationId: t, error: n } = e;
        A.delete(t), (a = n);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { testModeApplicationId: t } = e;
        i = t;
    },
    DEVELOPER_TEST_MODE_RESET_ERROR: I,
    LOGOUT: f,
    DEVELOPER_TEST_MODE_RESET: f,
});
