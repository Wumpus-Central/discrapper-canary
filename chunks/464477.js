n.d(t, {
    K7: () => _,
    Os: () => A,
    V3: () => O,
    cC: () => y,
    d4: () => h,
    tn: () => b,
}),
    n(927092),
    n(212978),
    n(201528),
    n(393431),
    n(752391),
    n(532706),
    n(42231),
    n(232424),
    n(757074),
    n(949626),
    n(767709),
    n(65162),
    n(747238),
    n(812715),
    n(733351);
var r,
    i,
    a,
    s = n(704101),
    o = n(728458);

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
let f = null != (r = null == (i = window) ? void 0 : i.crypto) ? r : null == (a = window) ? void 0 : a.msCrypto,
    p = "Uint8Array" in window,
    _ = null != f && "getRandomValues" in f && p,
    h = "PublicKeyCredential" in window && p,
    m = 20;

function g(e) {
    return f.getRandomValues(new Uint8Array(e));
}

function E(e) {
    return s
        .encode(e)
        .toString("utf8")
        .replace(/=/g, "")
        .toLowerCase()
        .replace(/(\w{4})/g, "$1 ")
        .trim();
}

function b() {
    return E(g(m));
}

function y(e) {
    return e.replace(/[\s._-]+/g, "").toUpperCase();
}

function O(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Discord";
    return "otpauth://totp/"
        .concat(encodeURI(n), ":")
        .concat(encodeURI(e), "?secret=")
        .concat(y(t), "&issuer=")
        .concat(encodeURIComponent(n));
}

function A(e, t) {
    o.A.captureException(
        e,
        d(c({}, t), {
            tags: d(c({}, null == t ? void 0 : t.tags), {
                app_context: "webauthn",
            }),
        }),
    );
}
