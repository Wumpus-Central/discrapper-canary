"use strict";
let i, r, s;
n.d(t, { A: () => A }), n(142703);
var a = n(17928),
    o = n(228366),
    l = n(284016),
    d = n(253932),
    _ = n(617617),
    u = n(189081);
let c = { applicationId: null, originURL: null },
    E = c,
    h = new Set(),
    m = !1;
function f() {
    s = null;
}
function g() {
    (i = null), (r = null), (h = new Set()), (E.applicationId = null), (E.originURL = null), f();
}
class p extends a.Ay.PersistedStore {
    static displayName = "TestModeStore";
    static persistKey = "TestModeStore";
    initialize(e) {
        (i = (E = { ...(e ?? c) }).applicationId),
            (r = E.originURL),
            this.waitFor(u.A, l.A, _.A),
            this.syncWith([_.A, l.A], () => !0),
            u.A.whenInitialized(() => {
                m = !0;
            });
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
        return h.size > 0;
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
        return s;
    }
    whenInitialized(e) {
        this.addConditionalChangeListener(() => {
            if (m) return setImmediate(e), !1;
        });
    }
}
let A = new p(o.h, {
    DEVELOPER_TEST_MODE_AUTHORIZATION_START: function (e) {
        let { applicationId: t } = e;
        h.add(t), (s = null);
    },
    DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: function (e) {
        let { applicationId: t, originURL: n } = e;
        (i = t), (r = n), h.delete(t), (s = null), (E.applicationId = t), (E.originURL = n);
    },
    DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: function (e) {
        let { applicationId: t, error: n } = e;
        h.delete(t), (s = n);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { testModeApplicationId: t } = e;
        i = t;
    },
    DEVELOPER_TEST_MODE_RESET_ERROR: f,
    LOGOUT: g,
    DEVELOPER_TEST_MODE_RESET: g,
});
