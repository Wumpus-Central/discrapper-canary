n.d(t, { Z: () => c }), n(266796);
var r = n(81825),
    i = n(156570);
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
        return new c({
            subscriptions: e.subscriptions.map((e) => i.Z.createFromServer(c.convertStoreListing(e))),
            otps: e.otps.map((e) => i.Z.createFromServer(c.convertStoreListing(e)))
        });
    }
    static convertStoreListing(e) {
        var t;
        return l(a({}, e), {
            summary: e.summary.default,
            description: null == (t = e.description) ? void 0 : t.default
        });
    }
    constructor(e) {
        super(), o(this, 'subscriptions', void 0), o(this, 'otps', void 0), (this.subscriptions = e.subscriptions), (this.otps = e.otps);
    }
}
