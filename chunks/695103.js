let i, r, a;
n.d(t, { Z: () => A }), n(47120), n(177593);
var s,
    o = n(442837),
    l = n(570140),
    u = n(238514),
    c = n(695346),
    d = n(581883),
    f = n(283595);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let p = {
        applicationId: null,
        originURL: null
    },
    h = p,
    m = new Set(),
    g = !1;
function E() {
    a = null;
}
function v() {
    (i = null), (r = null), (m = new Set()), (h.applicationId = null), (h.originURL = null), E();
}
function y(e) {
    let { applicationId: t } = e;
    m.add(t), (a = null);
}
function I(e) {
    let { applicationId: t, originURL: n } = e;
    (i = t), (r = n), m.delete(t), (a = null), (h.applicationId = t), (h.originURL = n);
}
function T(e) {
    let { applicationId: t, error: n } = e;
    m.delete(t), (a = n);
}
function b(e) {
    let { testModeApplicationId: t } = e;
    i = t;
}
class S extends (s = o.ZP.PersistedStore) {
    initialize(e) {
        (i = (h = { ...(null != e ? e : p) }).applicationId),
            (r = h.originURL),
            this.waitFor(d.Z, u.Z),
            this.syncWith([d.Z, u.Z], () => !0),
            f.Z.whenInitialized(() => {
                g = !0;
            });
    }
    inTestModeForApplication(e) {
        return i === e;
    }
    inTestModeForEmbeddedApplication(e) {
        return i === e && null != r;
    }
    shouldDisplayTestMode(e) {
        return c.Sb.getSetting() && this.inTestModeForApplication(e);
    }
    getState() {
        return h;
    }
    get isTestMode() {
        return null != i;
    }
    get isFetchingAuthorization() {
        return m.size > 0;
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
            if (g) return setImmediate(e), !1;
        });
    }
}
_(S, 'displayName', 'TestModeStore'), _(S, 'persistKey', 'TestModeStore');
let A = new S(l.Z, {
    DEVELOPER_TEST_MODE_AUTHORIZATION_START: y,
    DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: I,
    DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: T,
    OVERLAY_INITIALIZE: b,
    DEVELOPER_TEST_MODE_RESET_ERROR: E,
    LOGOUT: v,
    DEVELOPER_TEST_MODE_RESET: v
});
