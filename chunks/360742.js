n.d(t, { Z: () => c });
var r = n(81825),
    i = n(598077);
function o(e, t, n) {
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
function a(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
function s(e, t) {
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
function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class c extends r.Z {
    static createFromServer(e) {
        return new c(l(a({}, e), { user: new i.Z(e.user) }));
    }
    constructor(e) {
        var t;
        super(), o(this, 'id', void 0), o(this, 'name', void 0), o(this, 'type', void 0), o(this, 'user', void 0), o(this, 'displayName', void 0), (this.id = e.id), (this.name = e.name), (this.type = e.type), (this.user = e.user), (this.displayName = null != (t = e.name_localized) ? t : e.name);
    }
}
