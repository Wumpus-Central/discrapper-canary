n.d(t, {
    A: () => M,
});
var r,
    i = n(311907),
    a = n(582754),
    s = n(73153),
    o = n(775602),
    l = n(677313),
    c = n(403528),
    u = n(997579),
    d = n(284016),
    f = n(964404),
    p = n(617617),
    _ = n(185928),
    h = n(652215);

function m(e, t, n) {
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

function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}

function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = 0,
    O = _.qj,
    A = (0, l.A)(),
    v = O[A],
    S = null;

function I() {
    return __OVERLAY__ || null == S ? (0, c.A)(A, O) : S;
}

function T() {
    let e = I();
    return e !== v && ((v = e), (0, u.A)(v), !0);
}
class C extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        (null == e ? void 0 : e.theme) != null &&
            ((y = 1),
            (v = e.theme),
            (0, u.A)(v),
            null != e.preferences && (O = e.preferences),
            (0, a.Mw)(v) && (O[_.Fc.DARK] = v)),
            this.waitFor(f.Ay, d.A, p.A, o.A);
    }
    getState() {
        return {
            theme: this.theme,
            preferences: O,
            status: y,
        };
    }
    get theme() {
        return v;
    }
    get systemTheme() {
        return A;
    }
    themePreferenceForSystemTheme(e) {
        return O[e];
    }
}

function N() {
    return (
        0 === y &&
            ((O = b(g({}, O), {
                [_.Fc.DARK]: h.NJ8.DARKER,
            })),
            (y = 1)),
        T()
    );
}

function R() {
    return (0, a.qB)(I());
}

function w(e) {
    return (S = null), !e.isSwitchingAccount && v !== h.NJ8.DARK && ((v = h.NJ8.DARK), (0, u.A)(v), T());
}

function P(e) {
    let { systemTheme: t } = e;
    return (A = t), T();
}

function D(e) {
    return (O = g({}, O, e.preferences)), T();
}

function x(e) {
    return (S = e.theme), T();
}

function L() {
    return (S = null), T();
}

function j() {
    return T();
}
m(C, "displayName", "ThemeStore"),
    m(C, "persistKey", "ThemeStore"),
    m(C, "migrations", [
        (e) => {
            let t = e.theme;
            return (
                "amoled" === t && (t = "midnight"),
                b(g({}, e), {
                    theme: t,
                })
            );
        },
        (e) => e,
    ]);
let M = new C(s.h, {
    CACHE_LOADED: T,
    CONNECTION_OPEN: N,
    LOGOUT: w,
    OVERLAY_INITIALIZE: T,
    SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: T,
    UNSYNCED_USER_SETTINGS_UPDATE: T,
    USER_SETTINGS_PROTO_UPDATE: T,
    RESET_PREVIEW_CLIENT_THEME: T,
    SYSTEM_THEME_CHANGE: P,
    ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: R,
    UPDATE_THEME_PREFERENCES: D,
    SET_THEME_OVERRIDE: x,
    CLEAR_THEME_OVERRIDE: L,
    REFRESH_THEME: j,
});
