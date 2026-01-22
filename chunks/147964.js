let r, i, a;
n.d(t, {
    A: () => T,
}),
    n(896048),
    n(142703);
var s,
    o = n(311907),
    l = n(73153),
    c = n(284016),
    u = n(253932),
    d = n(617617),
    f = n(189081);

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
let h = {
        applicationId: null,
        originURL: null,
    },
    m = h,
    g = new Set(),
    E = !1;

function b() {
    a = null;
}

function y() {
    (r = null), (i = null), (g = new Set()), (m.applicationId = null), (m.originURL = null), b();
}

function O(e) {
    let { applicationId: t } = e;
    g.add(t), (a = null);
}

function A(e) {
    let { applicationId: t, originURL: n } = e;
    (r = t), (i = n), g.delete(t), (a = null), (m.applicationId = t), (m.originURL = n);
}

function v(e) {
    let { applicationId: t, error: n } = e;
    g.delete(t), (a = n);
}

function S(e) {
    let { testModeApplicationId: t } = e;
    r = t;
}
class I extends (s = o.Ay.PersistedStore) {
    initialize(e) {
        (r = (m = _({}, null != e ? e : h)).applicationId),
            (i = m.originURL),
            this.waitFor(f.A, c.A, d.A),
            this.syncWith([d.A, c.A], () => !0),
            f.A.whenInitialized(() => {
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
        return u.Q_.getSetting() && this.inTestModeForApplication(e);
    }
    getState() {
        return m;
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
p(I, "displayName", "TestModeStore"), p(I, "persistKey", "TestModeStore");
let T = new I(l.h, {
    DEVELOPER_TEST_MODE_AUTHORIZATION_START: O,
    DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: A,
    DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: v,
    OVERLAY_INITIALIZE: S,
    DEVELOPER_TEST_MODE_RESET_ERROR: b,
    LOGOUT: y,
    DEVELOPER_TEST_MODE_RESET: y,
});
