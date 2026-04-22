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
var r,
    i = "basil",
    s = "https://js.stripe.com",
    a = "".concat(s, "/").concat(i, "/stripe.js"),
    o = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
    l = /^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/,
    u =
        "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
    d = function () {
        for (var e = document.querySelectorAll('script[src^="'.concat(s, '"]')), t = 0; t < e.length; t++) {
            var n,
                r = e[t];
            if (((n = r.src), o.test(n) || l.test(n))) return r;
        }
        return null;
    },
    c = function (e) {
        var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
            n = document.createElement("script");
        n.src = "".concat(a).concat(t);
        var r = document.head || document.body;
        if (!r) throw Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
        return r.appendChild(n), n;
    },
    _ = function (e, t) {
        e && e._registerWrapper && e._registerWrapper({ name: "stripe-js", version: "7.3.1", startTime: t });
    },
    f = null,
    E = null,
    h = null,
    p = function (e, t, n) {
        if (null === e) return null;
        var r,
            s = t[0].match(/^pk_test/),
            a = 3 === (r = e.version) ? "v3" : r;
        s &&
            a !== i &&
            console.warn(
                "Stripe.js@"
                    .concat(a, " was loaded on the page, but @stripe/stripe-js@")
                    .concat("7.3.1", " expected Stripe.js@")
                    .concat(
                        i,
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
        for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
        g = !0;
        var s = Date.now();
        return ((e = r),
        null !== f
            ? f
            : (f = new Promise(function (t, n) {
                  if ("u" < typeof window || "u" < typeof document) return void t(null);
                  if ((window.Stripe && e && console.warn(u), window.Stripe)) return void t(window.Stripe);
                  try {
                      var r,
                          i = d();
                      i && e
                          ? console.warn(u)
                          : i
                            ? i &&
                              null !== h &&
                              null !== E &&
                              (i.removeEventListener("load", h),
                              i.removeEventListener("error", E),
                              null == (r = i.parentNode) || r.removeChild(i),
                              (i = c(e)))
                            : (i = c(e)),
                          (h = function () {
                              window.Stripe ? t(window.Stripe) : n(Error("Stripe.js not available"));
                          }),
                          (E = function (e) {
                              n(Error("Failed to load Stripe.js", { cause: e }));
                          }),
                          i.addEventListener("load", h),
                          i.addEventListener("error", E);
                  } catch (e) {
                      n(e);
                      return;
                  }
              })).catch(function (e) {
                  return (f = null), Promise.reject(e);
              })).then(function (e) {
            return p(e, n, s);
        });
    };
(A.setLoadParameters = function (e) {
    if (
        !(
            g &&
            r &&
            Object.keys(m(e)).reduce(function (t, n) {
                var i;
                return t && e[n] === (null == (i = r) ? void 0 : i[n]);
            }, !0)
        )
    ) {
        if (g) throw Error("You cannot change load parameters after calling loadStripe");
        r = m(e);
    }
}),
    (t.loadStripe = A);
