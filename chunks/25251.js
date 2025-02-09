let i, r;
n.d(t, { Z: () => R });
var a,
    s = n(392711),
    o = n(442837),
    l = n(570140);
function u(e, t, n) {
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
let c = [],
    d = [],
    f = !1,
    _ = c,
    p = {},
    h = null,
    m = 0,
    g = 300000,
    E = 60000,
    v = 3600000,
    y = (e) => {
        _ = (0, s.cloneDeep)(e);
        let t = {};
        _.forEach((e) => {
            if (((t[e.id] = e), d.length > 0)) {
                var n;
                t[e.id].config.effects = null !== (n = (0, s.sample)(d)) && void 0 !== n ? n : [];
            }
        }),
            (p = t);
    },
    I = () => {
        f = !0;
    },
    T = (e) => {
        let { profileEffects: t } = e;
        (i = void 0), (r = Date.now() + g), (m = 0), y(0 === t.length ? c : t), (f = !1);
    },
    b = (e) => {
        let { error: t } = e;
        (i = t), (r = Date.now() + Math.min(E * 2 ** m, v)), ++m, y(c), (f = !1);
    },
    S = (e) => {
        let { id: t } = e;
        h = t;
    },
    A = () => {
        y(c), (h = null), (r = void 0), (f = !1);
    },
    N = (e) => {
        A();
    };
class C extends (a = o.ZP.Store) {
    get isFetching() {
        return f;
    }
    get fetchError() {
        return i;
    }
    get profileEffects() {
        return _;
    }
    get tryItOutId() {
        return h;
    }
    canFetch() {
        return null == r || Date.now() >= r;
    }
    hasFetched() {
        return null != r && null == i;
    }
    getProfileEffectById(e) {
        return null != e ? p[e] : void 0;
    }
}
u(C, 'displayName', 'ProfileEffectStore');
let R = new C(l.Z, {
    USER_PROFILE_EFFECTS_FETCH: I,
    USER_PROFILE_EFFECTS_FETCH_SUCCESS: T,
    USER_PROFILE_EFFECTS_FETCH_FAILURE: b,
    PROFILE_EFFECTS_SET_TRY_IT_OUT: S,
    LOGOUT: N
});
