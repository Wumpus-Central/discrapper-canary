n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(732139);
function o(e, t, n) {
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
function l(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = u(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let d = (e) => {
        switch (e) {
            case s.R2.RECENT:
                return a.O4;
            case s.R2.FAVORITES:
                return a.Gg5;
            case s.R2.TOP_GUILD_EMOJI:
                return a.OR;
            case s.R2.PEOPLE:
                return a.nm2;
            case s.R2.NATURE:
                return a.pPb;
            case s.R2.FOOD:
                return a.iUc;
            case s.R2.ACTIVITY:
                return a._xR;
            case s.R2.TRAVEL:
                return a.hTD;
            case s.R2.OBJECTS:
                return a.DSD;
            case s.R2.SYMBOLS:
                return a.C3E;
            case s.R2.FLAGS:
                return a.iFK;
            case s.R2.PREMIUM_UPSELL:
                return a.tvc;
            case s.R2.SOUNDMOJI:
                return a.JMI;
            default:
                return;
        }
    },
    f = i.memo(function (e) {
        let { categoryId: t } = e,
            n = c(e, ["categoryId"]),
            i = d(t);
        return null == i ? null : (0, r.jsx)(i, l({ color: "currentColor" }, n));
    });
