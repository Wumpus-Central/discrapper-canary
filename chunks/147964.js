"use strict";
let i, r, s;
n.d(t, { A: () => A }), n(142703);
var a = n(17928),
    o = n(228366),
    l = n(284016),
    u = n(885386),
    c = n(617617),
    d = n(189081);
let _ = { applicationId: null, originURL: null },
    h = _,
    f = new Set(),
    p = !1;
function E() {
    s = null;
}
function m() {
    (i = null), (r = null), (f = new Set()), (h.applicationId = null), (h.originURL = null), E();
}
class g extends a.Ay.PersistedStore {
    static displayName = "TestModeStore";
    static persistKey = "TestModeStore";
    initialize(e) {
        (i = (h = { ...(e ?? _) }).applicationId),
            (r = h.originURL),
            this.waitFor(d.A, l.A, c.A),
            this.syncWith([c.A, l.A], () => !0),
            d.A.whenInitialized(() => {
                p = !0;
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
        return u.Q_.getSetting() && this.inTestModeForApplication(e);
    }
    getState() {
        return h;
    }
    get isTestMode() {
        return null != i;
    }
    get isFetchingAuthorization() {
        return f.size > 0;
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
            if (p) return setImmediate(e), !1;
        });
    }
}
let A = new g(o.h, {
    DEVELOPER_TEST_MODE_AUTHORIZATION_START: function (e) {
        let { applicationId: t } = e;
        f.add(t), (s = null);
    },
    DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: function (e) {
        let { applicationId: t, originURL: n } = e;
        (i = t), (r = n), f.delete(t), (s = null), (h.applicationId = t), (h.originURL = n);
    },
    DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: function (e) {
        let { applicationId: t, error: n } = e;
        f.delete(t), (s = n);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { testModeApplicationId: t } = e;
        i = t;
    },
    DEVELOPER_TEST_MODE_RESET_ERROR: E,
    LOGOUT: m,
    DEVELOPER_TEST_MODE_RESET: m,
});
