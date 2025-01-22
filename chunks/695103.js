let i, a, o;
var s,
    l = r(47120);
var u = r(177593);
var c = r(442837),
    d = r(570140),
    f = r(238514),
    p = r(695346),
    h = r(581883),
    _ = r(283595);
function m(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let g = {
        applicationId: null,
        originURL: null
    },
    E = g,
    v = new Set(),
    y = !1;
function b() {
    o = null;
}
function I() {
    (i = null), (a = null), (v = new Set()), (E.applicationId = null), (E.originURL = null), b();
}
function T(e) {
    let { applicationId: n } = e;
    v.add(n), (o = null);
}
function S(e) {
    let { applicationId: n, originURL: r } = e;
    (i = n), (a = r), v.delete(n), (o = null), (E.applicationId = n), (E.originURL = r);
}
function A(e) {
    let { applicationId: n, error: r } = e;
    v.delete(n), (o = r);
}
function C(e) {
    let { testModeApplicationId: n } = e;
    i = n;
}
class N extends (s = c.ZP.PersistedStore) {
    initialize(e) {
        (i = (E = { ...(null != e ? e : g) }).applicationId),
            (a = E.originURL),
            this.waitFor(h.Z, f.Z),
            this.syncWith([h.Z, f.Z], () => !0),
            _.Z.whenInitialized(() => {
                y = !0;
            });
    }
    inTestModeForApplication(e) {
        return i === e;
    }
    inTestModeForEmbeddedApplication(e) {
        return i === e && null != a;
    }
    shouldDisplayTestMode(e) {
        return p.Sb.getSetting() && this.inTestModeForApplication(e);
    }
    getState() {
        return E;
    }
    get isTestMode() {
        return null != i;
    }
    get isFetchingAuthorization() {
        return v.size > 0;
    }
    get testModeEmbeddedApplicationId() {
        return null != a ? i : null;
    }
    get testModeApplicationId() {
        return i;
    }
    get testModeOriginURL() {
        return a;
    }
    get error() {
        return o;
    }
    whenInitialized(e) {
        this.addConditionalChangeListener(() => {
            if (y) return setImmediate(e), !1;
        });
    }
}
m(N, 'displayName', 'TestModeStore'),
    m(N, 'persistKey', 'TestModeStore'),
    (n.Z = new N(d.Z, {
        DEVELOPER_TEST_MODE_AUTHORIZATION_START: T,
        DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: S,
        DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: A,
        OVERLAY_INITIALIZE: C,
        DEVELOPER_TEST_MODE_RESET_ERROR: b,
        LOGOUT: I,
        DEVELOPER_TEST_MODE_RESET: I
    }));
