n.d(t, { A: () => c }), n(228524);
var r = n(315069),
    i = n(60717);
function a(e, t, n) {
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
function s(e) {
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
                a(e, t, n[t]);
            });
    }
    return e;
}
function o(e, t) {
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
            : o(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class c extends r.A {
    static createFromServer(e) {
        return new c({
            subscriptions: e.subscriptions.map((e) => i.A.createFromServer(c.convertStoreListing(e))),
            otps: e.otps.map((e) => i.A.createFromServer(c.convertStoreListing(e))),
        });
    }
    static convertStoreListing(e) {
        var t;
        return l(s({}, e), {
            summary: e.summary.default,
            description: null == (t = e.description) ? void 0 : t.default,
        });
    }
    constructor(e) {
        super(),
            a(this, "subscriptions", void 0),
            a(this, "otps", void 0),
            (this.subscriptions = e.subscriptions),
            (this.otps = e.otps);
    }
}
