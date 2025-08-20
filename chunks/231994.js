n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var i = n(325767);
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
function o(e) {
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
function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = u(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function d(e) {
    var { width: t = 24, height: n = 24, color: a = "currentColor" } = e,
        s = c(e, ["width", "height", "color"]);
    return (0, r.jsxs)(
        "svg",
        l(o({}, (0, i.Z)(s)), {
            width: t,
            height: n,
            viewBox: "0 0 20 20",
            fill: "none",
            children: [
                (0, r.jsx)("path", {
                    d: "M5.42999 16C5.73201 16 5.97454 15.7326 5.98651 15.4309C5.99216 15.2885 6 15.145 6 15C6 10.582 8.97355 7 13.6115 7C15.3176 7 16.9378 7.60732 18.2734 8.47894C18.6009 8.69267 19.0088 8.49717 19.0012 8.10616C19.0004 8.06876 19 8.03318 19 8C19 3.589 15.0439 0 10.1825 0C5.32115 0 1.36504 3.589 1.36504 8C1.36504 9.24168 1.67304 10.4357 2.26529 11.523C2.49433 11.9436 2.45549 12.472 2.12042 12.8141L0.664819 14.3003C0.0449194 14.9332 0.493315 16 1.37923 16H5.42999Z",
                    fill: a,
                }),
                (0, r.jsx)("path", {
                    d: "M20.0134 17.8398C19.8366 17.558 19.8172 17.2085 19.9242 16.8935C20.1307 16.2852 20.2371 15.6451 20.2371 15C20.2371 11.691 17.4914 9 14.1166 9C10.7419 9 7.99609 11.691 7.99609 15C7.99609 18.309 10.7419 21 14.1166 21H20.1882C20.9744 21 21.4531 20.1345 21.0353 19.4685L20.0134 17.8398Z",
                    fill: a,
                }),
            ],
        }),
    );
}
