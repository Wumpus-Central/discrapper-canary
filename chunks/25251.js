let r, i;
n.d(t, { Z: () => C });
var o,
    a = n(392711),
    s = n(442837),
    l = n(570140);
function c(e, t, n) {
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
let u = [],
    d = [],
    f = !1,
    _ = u,
    p = {},
    h = null,
    m = 0,
    g = 300000,
    E = 60000,
    b = 3600000,
    y = (e) => {
        _ = (0, a.cloneDeep)(e);
        let t = {};
        _.forEach((e) => {
            if (((t[e.id] = e), d.length > 0)) {
                var n;
                t[e.id].config.effects = null != (n = (0, a.sample)(d)) ? n : [];
            }
        }),
            (p = t);
    },
    v = () => {
        f = !0;
    },
    O = (e) => {
        let { profileEffects: t } = e;
        (r = void 0), (i = Date.now() + g), (m = 0), y(0 === t.length ? u : t), (f = !1);
    },
    I = (e) => {
        let { error: t } = e;
        (r = t), (i = Date.now() + Math.min(E * 2 ** m, b)), ++m, y(u), (f = !1);
    },
    S = (e) => {
        let { id: t } = e;
        h = t;
    },
    T = () => {
        y(u), (h = null), (i = void 0), (f = !1);
    },
    N = (e) => {
        T();
    };
class A extends (o = s.ZP.Store) {
    get isFetching() {
        return f;
    }
    get fetchError() {
        return r;
    }
    get profileEffects() {
        return _;
    }
    get tryItOutId() {
        return h;
    }
    canFetch() {
        return null == i || Date.now() >= i;
    }
    hasFetched() {
        return null != i && null == r;
    }
    getProfileEffectById(e) {
        return null != e ? p[e] : void 0;
    }
}
c(A, 'displayName', 'ProfileEffectStore');
let C = new A(l.Z, {
    USER_PROFILE_EFFECTS_FETCH: v,
    USER_PROFILE_EFFECTS_FETCH_SUCCESS: O,
    USER_PROFILE_EFFECTS_FETCH_FAILURE: I,
    PROFILE_EFFECTS_SET_TRY_IT_OUT: S,
    LOGOUT: N
});
