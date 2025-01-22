let i, a;
var o,
    s = r(392711);
var l = r(442837),
    u = r(570140);
function c(e, n, r) {
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
let d = [],
    f = [],
    p = !1;
let h = d,
    _ = {},
    m = null;
let g = 0,
    E = 300000,
    v = 60000,
    y = 3600000,
    b = (e) => {
        h = (0, s.cloneDeep)(e);
        let n = {};
        h.forEach((e) => {
            if (((n[e.id] = e), f.length > 0)) {
                var r;
                n[e.id].config.effects = null !== (r = (0, s.sample)(f)) && void 0 !== r ? r : [];
            }
        }),
            (_ = n);
    },
    I = () => {
        p = !0;
    },
    T = (e) => {
        let { profileEffects: n } = e;
        (i = void 0), (a = Date.now() + E), (g = 0), b(0 === n.length ? d : n), (p = !1);
    },
    S = (e) => {
        let { error: n } = e;
        (i = n), (a = Date.now() + Math.min(v * 2 ** g, y)), ++g, b(d), (p = !1);
    },
    A = (e) => {
        let { id: n } = e;
        m = n;
    },
    C = () => {
        b(d), (m = null), (a = void 0), (p = !1);
    },
    N = (e) => {
        C();
    };
class R extends (o = l.ZP.Store) {
    get isFetching() {
        return p;
    }
    get fetchError() {
        return i;
    }
    get profileEffects() {
        return h;
    }
    get tryItOutId() {
        return m;
    }
    canFetch() {
        return null == a || Date.now() >= a;
    }
    hasFetched() {
        return null != a && null == i;
    }
    getProfileEffectById(e) {
        return null != e ? _[e] : void 0;
    }
}
c(R, 'displayName', 'ProfileEffectStore'),
    (n.Z = new R(u.Z, {
        USER_PROFILE_EFFECTS_FETCH: I,
        USER_PROFILE_EFFECTS_FETCH_SUCCESS: T,
        USER_PROFILE_EFFECTS_FETCH_FAILURE: S,
        PROFILE_EFFECTS_SET_TRY_IT_OUT: A,
        LOGOUT: N
    }));
