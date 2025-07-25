let r;
n.d(t, { Z: () => A });
var i,
    a = n(392711),
    o = n(442837),
    s = n(570140),
    l = n(70956);
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
    d = {},
    _ = u,
    f = d,
    p = null,
    h = l.Z.Millis.MINUTE,
    m = l.Z.Millis.HOUR,
    g = !1,
    E = 0,
    b = 0,
    y = (e) => {
        g = !0;
    },
    O = (e) => {
        let { presets: t } = e;
        (0 === t.length ? ((_ = u), (f = d)) : ((_ = (0, a.cloneDeep)(t)), (f = (0, a.keyBy)(_, 'id'))), (E = Number.POSITIVE_INFINITY), (b = 0), (r = void 0), (g = !1));
    },
    v = (e) => {
        let { error: t } = e;
        ((_ = u), (f = d), (E = Date.now() + Math.min(h * 2 ** b, m)), (b += 1), (r = t), (g = !1));
    },
    I = (e) => {
        let { id: t } = e;
        p = t;
    },
    T = (e) => {
        ((_ = u), (f = d), (p = null), (g = !1), (r = void 0), (E = 0), (b = 0));
    };
class S extends (i = o.ZP.Store) {
    get isFetchingAll() {
        return g;
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
        return Date.now() >= E;
    }
    getProfileEffectById(e) {
        return null != e ? f[e] : void 0;
    }
}
c(S, 'displayName', 'ProfileEffectStore');
let A = new S(s.Z, {
    PROFILE_EFFECTS_FETCH_ALL: y,
    PROFILE_EFFECTS_FETCH_ALL_SUCCESS: O,
    PROFILE_EFFECTS_FETCH_ALL_FAILURE: v,
    PROFILE_EFFECTS_SET_TRY_IT_OUT: I,
    LOGOUT: T
});
