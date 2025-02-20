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
    p = u,
    _ = {},
    h = null,
    m = 0,
    g = 300000,
    E = 60000,
    v = 3600000,
    b = (e) => {
        p = (0, a.cloneDeep)(e);
        let t = {};
        p.forEach((e) => {
            if (((t[e.id] = e), d.length > 0)) {
                var n;
                t[e.id].config.effects = null !== (n = (0, a.sample)(d)) && void 0 !== n ? n : [];
            }
        }),
            (_ = t);
    },
    y = () => {
        f = !0;
    },
    O = (e) => {
        let { profileEffects: t } = e;
        (r = void 0), (i = Date.now() + g), (m = 0), b(0 === t.length ? u : t), (f = !1);
    },
    S = (e) => {
        let { error: t } = e;
        (r = t), (i = Date.now() + Math.min(E * 2 ** m, v)), ++m, b(u), (f = !1);
    },
    I = (e) => {
        let { id: t } = e;
        h = t;
    },
    T = () => {
        b(u), (h = null), (i = void 0), (f = !1);
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
        return p;
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
        return null != e ? _[e] : void 0;
    }
}
c(A, 'displayName', 'ProfileEffectStore');
let C = new A(l.Z, {
    USER_PROFILE_EFFECTS_FETCH: y,
    USER_PROFILE_EFFECTS_FETCH_SUCCESS: O,
    USER_PROFILE_EFFECTS_FETCH_FAILURE: S,
    PROFILE_EFFECTS_SET_TRY_IT_OUT: I,
    LOGOUT: N
});
