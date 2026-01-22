n.d(t, {
    A: () => E,
});
var r,
    i = n(311907),
    a = n(73153),
    s = n(572009),
    o = n(788868);

function l(e, t, n) {
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

function c(e) {
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
let f = "OverridePremiumTypeStore",
    p = {
        premiumTypeOverride: o.$I,
        premiumTypeActual: o.$I,
        createdAtOverride: o.lk,
    };

function _(e) {
    let { premiumType: t } = e;
    p.premiumTypeOverride = t;
}

function h(e) {
    let { createdAt: t } = e;
    p.createdAtOverride = t;
}

function m(e) {
    let { user: t } = e;
    p.premiumTypeActual = (0, s.nq)(t.premium_type);
}
class g extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        if (null != e) {
            (p.premiumTypeActual = null == e ? void 0 : e.premiumTypeActual),
                (p.premiumTypeOverride = null == e ? void 0 : e.premiumTypeOverride),
                null != e.createdAtOverride
                    ? (p.createdAtOverride = new Date(e.createdAtOverride))
                    : (p.createdAtOverride = o.lk);
            return;
        }
        (p.premiumTypeOverride = o.$I), (p.createdAtOverride = o.lk);
    }
    getPremiumTypeOverride() {
        return p.premiumTypeOverride;
    }
    getPremiumTypeActual() {
        return p.premiumTypeActual;
    }
    getCreatedAtOverride() {
        return p.createdAtOverride;
    }
    getState() {
        return p;
    }
    get premiumType() {
        return p.premiumTypeOverride;
    }
}
l(g, "displayName", f),
    l(g, "persistKey", f),
    l(g, "migrations", [
        (e) => {
            if ((null == e ? void 0 : e.createdAtOverride) == null)
                return d(c({}, e), {
                    createdAtOverride: o.lk,
                });
        },
    ]);
let E = new g(a.h, {
    SET_PREMIUM_TYPE_OVERRIDE: _,
    SET_CREATED_AT_OVERRIDE: h,
    CURRENT_USER_UPDATE: m,
    CONNECTION_OPEN: m,
});
