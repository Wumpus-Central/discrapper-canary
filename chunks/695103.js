let r, i, a;
n.d(t, { Z: () => A }), n(388685), n(358797);
var o,
    s = n(442837),
    l = n(570140),
    c = n(238514),
    u = n(695346),
    d = n(581883),
    f = n(283595);
function p(e, t, n) {
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
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
let m = {
        applicationId: null,
        originURL: null,
    },
    h = m,
    g = new Set(),
    E = !1;
function b() {
    a = null;
}
function y() {
    (r = null), (i = null), (g = new Set()), (h.applicationId = null), (h.originURL = null), b();
}
function O(e) {
    let { applicationId: t } = e;
    g.add(t), (a = null);
}
function v(e) {
    let { applicationId: t, originURL: n } = e;
    (r = t), (i = n), g.delete(t), (a = null), (h.applicationId = t), (h.originURL = n);
}
function S(e) {
    let { applicationId: t, error: n } = e;
    g.delete(t), (a = n);
}
function I(e) {
    let { testModeApplicationId: t } = e;
    r = t;
}
class T extends (o = s.ZP.PersistedStore) {
    initialize(e) {
        (r = (h = _({}, null != e ? e : m)).applicationId),
            (i = h.originURL),
            this.waitFor(f.Z, c.Z, d.Z),
            this.syncWith([d.Z, c.Z], () => !0),
            f.Z.whenInitialized(() => {
                E = !0;
            });
    }
    inTestModeForApplication(e) {
        return r === e;
    }
    inTestModeForEmbeddedApplication(e) {
        return r === e && null != i;
    }
    shouldDisplayTestMode(e) {
        return u.Sb.getSetting() && this.inTestModeForApplication(e);
    }
    getState() {
        return h;
    }
    get isTestMode() {
        return null != r;
    }
    get isFetchingAuthorization() {
        return g.size > 0;
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
            if (E) return setImmediate(e), !1;
        });
    }
}
p(T, "displayName", "TestModeStore"), p(T, "persistKey", "TestModeStore");
let A = new T(l.Z, {
    DEVELOPER_TEST_MODE_AUTHORIZATION_START: O,
    DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: v,
    DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: S,
    OVERLAY_INITIALIZE: I,
    DEVELOPER_TEST_MODE_RESET_ERROR: b,
    LOGOUT: y,
    DEVELOPER_TEST_MODE_RESET: y,
});
