n.d(t, {
    K7: () => h,
    Os: () => m,
    V3: () => f,
    cC: () => _,
    d4: () => p,
    tn: () => g,
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
    s,
    l = n(704101),
    a = n(728458);

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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = null != (r = null == (i = window) ? void 0 : i.crypto) ? r : null == (s = window) ? void 0 : s.msCrypto,
    u = "Uint8Array" in window,
    h = null != d && "getRandomValues" in d && u,
    p = "PublicKeyCredential" in window && u;

function g() {
    var e;
    return (
        (e = d.getRandomValues(new Uint8Array(20))),
        l
            .encode(e)
            .toString("utf8")
            .replace(/=/g, "")
            .toLowerCase()
            .replace(/(\w{4})/g, "$1 ")
            .trim()
    );
}

function _(e) {
    return e.replace(/[\s._-]+/g, "").toUpperCase();
}

function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Discord";
    return "otpauth://totp/"
        .concat(encodeURI(n), ":")
        .concat(encodeURI(e), "?secret=")
        .concat(_(t), "&issuer=")
        .concat(encodeURIComponent(n));
}

function m(e, t) {
    a.A.captureException(
        e,
        c(o({}, t), {
            tags: c(o({}, null == t ? void 0 : t.tags), {
                app_context: "webauthn",
            }),
        }),
    );
}
