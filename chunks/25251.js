let r, i;
n.d(t, { Z: () => N });
var a,
    o = n(392711),
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
    d = !1,
    _ = u,
    f = {},
    p = null,
    h = 0,
    m = 300000,
    g = 60000,
    E = 3600000,
    b = (e) => {
        _ = (0, o.cloneDeep)(e);
        let t = {};
        (_.forEach((e) => {
            t[e.id] = e;
        }),
            (f = t));
    },
    y = (e) => {
        d = !0;
    },
    O = (e) => {
        let { presets: t } = e;
        ((r = void 0), (i = Date.now() + m), (h = 0), b(0 === t.length ? u : t), (d = !1));
    },
    v = (e) => {
        let { error: t } = e;
        ((r = t), (i = Date.now() + Math.min(g * 2 ** h, E)), ++h, b(u), (d = !1));
    },
    I = (e) => {
        let { id: t } = e;
        p = t;
    },
    T = () => {
        (b(u), (p = null), (i = void 0), (d = !1));
    },
    S = (e) => {
        T();
    };
class A extends (a = s.ZP.Store) {
    get isFetchingAll() {
        return d;
    }
    get fetchError() {
        return r;
    }
    get profileEffects() {
        return _;
    }
    get tryItOutId() {
        return p;
    }
    canFetch() {
        return null == i || Date.now() >= i;
    }
    hasFetched() {
        return null != i && null == r;
    }
    getProfileEffectById(e) {
        return null != e ? f[e] : void 0;
    }
}
c(A, 'displayName', 'ProfileEffectStore');
let N = new A(l.Z, {
    PROFILE_EFFECTS_FETCH_ALL: y,
    PROFILE_EFFECTS_FETCH_ALL_SUCCESS: O,
    PROFILE_EFFECTS_FETCH_ALL_FAILURE: v,
    PROFILE_EFFECTS_SET_TRY_IT_OUT: I,
    LOGOUT: S
});
