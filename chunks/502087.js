n.d(t, { Z: () => E });
var r,
    i = n(442837),
    a = n(570140),
    o = n(168232),
    s = n(474936);
function l(e, t, n) {
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
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = 'OverridePremiumTypeStore',
    f = {
        premiumTypeOverride: s.F_,
        premiumTypeActual: s.F_,
        createdAtOverride: s.Zh
    };
function p(e) {
    let { premiumType: t } = e;
    f.premiumTypeOverride = t;
}
function h(e) {
    let { createdAt: t } = e;
    f.createdAtOverride = t;
}
function m(e) {
    let { user: t } = e;
    f.premiumTypeActual = (0, o.G)(t.premium_type);
}
class g extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            (f.premiumTypeActual = null == e ? void 0 : e.premiumTypeActual), (f.premiumTypeOverride = null == e ? void 0 : e.premiumTypeOverride), null != e.createdAtOverride ? (f.createdAtOverride = new Date(e.createdAtOverride)) : (f.createdAtOverride = s.Zh);
            return;
        }
        (f.premiumTypeOverride = s.F_), (f.createdAtOverride = s.Zh);
    }
    getPremiumTypeOverride() {
        return f.premiumTypeOverride;
    }
    getPremiumTypeActual() {
        return f.premiumTypeActual;
    }
    getCreatedAtOverride() {
        return f.createdAtOverride;
    }
    getState() {
        return f;
    }
    get premiumType() {
        return f.premiumTypeOverride;
    }
}
l(g, 'displayName', _),
    l(g, 'persistKey', _),
    l(g, 'migrations', [
        (e) => {
            if ((null == e ? void 0 : e.createdAtOverride) == null) return d(c({}, e), { createdAtOverride: s.Zh });
        }
    ]);
let E = new g(a.Z, {
    SET_PREMIUM_TYPE_OVERRIDE: p,
    SET_CREATED_AT_OVERRIDE: h,
    CURRENT_USER_UPDATE: m,
    CONNECTION_OPEN: m
});
