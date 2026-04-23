"use strict";
let r, i, s;
n.d(t, { A: () => A }), n(142703);
var a = n(311907),
    o = n(73153),
    l = n(284016),
    u = n(253932),
    c = n(617617),
    d = n(189081);
let _ = { applicationId: null, originURL: null },
    f = _,
    p = new Set(),
    h = !1;
function E() {
    s = null;
}
function m() {
    (r = null), (i = null), (p = new Set()), (f.applicationId = null), (f.originURL = null), E();
}
class g extends a.Ay.PersistedStore {
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
        return s;
    }
    whenInitialized(e) {
        this.addConditionalChangeListener(() => {
            if (h) return setImmediate(e), !1;
        });
    }
}
let A = new g(o.h, {
    DEVELOPER_TEST_MODE_AUTHORIZATION_START: function (e) {
        let { applicationId: t } = e;
        p.add(t), (s = null);
    },
    DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: function (e) {
        let { applicationId: t, originURL: n } = e;
        (r = t), (i = n), p.delete(t), (s = null), (f.applicationId = t), (f.originURL = n);
    },
    DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: function (e) {
        let { applicationId: t, error: n } = e;
        p.delete(t), (s = n);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { testModeApplicationId: t } = e;
        r = t;
    },
    DEVELOPER_TEST_MODE_RESET_ERROR: E,
    LOGOUT: m,
    DEVELOPER_TEST_MODE_RESET: m,
});
