"use strict";
function n(e) {
    return (n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
              })(e);
}
var i,
    r = "basil",
    s = "https://js.stripe.com",
    a = "".concat(s, "/").concat(r, "/stripe.js"),
    o = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
    l = /^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/,
    u =
        "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
    c = function () {
        for (var e = document.querySelectorAll('script[src^="'.concat(s, '"]')), t = 0; t < e.length; t++) {
            var n,
                i = e[t];
            if (((n = i.src), o.test(n) || l.test(n))) return i;
        }
        return null;
    },
    d = function (e) {
        var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
            n = document.createElement("script");
        n.src = "".concat(a).concat(t);
        var i = document.head || document.body;
        if (!i) throw Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
        return i.appendChild(n), n;
    },
    _ = function (e, t) {
        e && e._registerWrapper && e._registerWrapper({ name: "stripe-js", version: "7.3.1", startTime: t });
    },
    h = null,
    f = null,
    p = null,
    E = function (e, t, n) {
        if (null === e) return null;
        var i,
            s = t[0].match(/^pk_test/),
            a = 3 === (i = e.version) ? "v3" : i;
        s &&
            a !== r &&
            console.warn(
                "Stripe.js@"
                    .concat(a, " was loaded on the page, but @stripe/stripe-js@")
                    .concat("7.3.1", " expected Stripe.js@")
                    .concat(
                        r,
                        ". This may result in unexpected behavior. For more information, see https://docs.stripe.com/sdks/stripejs-versioning",
                    ),
            );
        var o = e.apply(void 0, t);
        return _(o, n), o;
    },
    m = function (e) {
        var t =
            "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(
                JSON.stringify(e),
                "\n",
            );
        if (null === e || "object" !== n(e)) throw Error(t);
        if (1 === Object.keys(e).length && "boolean" == typeof e.advancedFraudSignals) return e;
        throw Error(t);
    },
    g = !1,
    A = function () {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        g = !0;
        var s = Date.now();
        return ((e = i),
        null !== h
            ? h
            : (h = new Promise(function (t, n) {
                  if ("u" < typeof window || "u" < typeof document) return void t(null);
                  if ((window.Stripe && e && console.warn(u), window.Stripe)) return void t(window.Stripe);
                  try {
                      var i,
                          r = c();
                      r && e
                          ? console.warn(u)
                          : r
                            ? r &&
                              null !== p &&
                              null !== f &&
                              (r.removeEventListener("load", p),
                              r.removeEventListener("error", f),
                              null == (i = r.parentNode) || i.removeChild(r),
                              (r = d(e)))
                            : (r = d(e)),
                          (p = function () {
                              window.Stripe ? t(window.Stripe) : n(Error("Stripe.js not available"));
                          }),
                          (f = function (e) {
                              n(Error("Failed to load Stripe.js", { cause: e }));
                          }),
                          r.addEventListener("load", p),
                          r.addEventListener("error", f);
                  } catch (e) {
                      n(e);
                      return;
                  }
              })).catch(function (e) {
                  return (h = null), Promise.reject(e);
              })).then(function (e) {
            return E(e, n, s);
        });
    };
(A.setLoadParameters = function (e) {
    if (
        !(
            g &&
            i &&
            Object.keys(m(e)).reduce(function (t, n) {
                var r;
                return t && e[n] === (null == (r = i) ? void 0 : r[n]);
            }, !0)
        )
    ) {
        if (g) throw Error("You cannot change load parameters after calling loadStripe");
        i = m(e);
    }
}),
    (t.loadStripe = A);
