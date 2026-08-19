"use strict";
function r(e) {
    return (r =
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
var n,
    o = "basil",
    i = "https://js.stripe.com",
    a = "".concat(i, "/").concat(o, "/stripe.js"),
    s = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
    l = /^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/,
    u =
        "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
    c = function () {
        for (var e = document.querySelectorAll('script[src^="'.concat(i, '"]')), t = 0; t < e.length; t++) {
            var r,
                n = e[t];
            if (((r = n.src), s.test(r) || l.test(r))) return n;
        }
        return null;
    },
    f = function (e) {
        var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
            r = document.createElement("script");
        r.src = "".concat(a).concat(t);
        var n = document.head || document.body;
        if (!n) throw Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
        return n.appendChild(r), r;
    },
    p = function (e, t) {
        e && e._registerWrapper && e._registerWrapper({ name: "stripe-js", version: "7.3.1", startTime: t });
    },
    d = null,
    h = null,
    m = null,
    v = function (e, t, r) {
        if (null === e) return null;
        var n,
            i = t[0].match(/^pk_test/),
            a = 3 === (n = e.version) ? "v3" : n;
        i &&
            a !== o &&
            console.warn(
                "Stripe.js@"
                    .concat(a, " was loaded on the page, but @stripe/stripe-js@")
                    .concat("7.3.1", " expected Stripe.js@")
                    .concat(
                        o,
                        ". This may result in unexpected behavior. For more information, see https://docs.stripe.com/sdks/stripejs-versioning",
                    ),
            );
        var s = e.apply(void 0, t);
        return p(s, r), s;
    },
    y = function (e) {
        var t =
            "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(
                JSON.stringify(e),
                "\n",
            );
        if (null === e || "object" !== r(e)) throw Error(t);
        if (1 === Object.keys(e).length && "boolean" == typeof e.advancedFraudSignals) return e;
        throw Error(t);
    },
    g = !1,
    b = function () {
        for (var e, t = arguments.length, r = Array(t), o = 0; o < t; o++) r[o] = arguments[o];
        g = !0;
        var i = Date.now();
        return ((e = n),
        null !== d
            ? d
            : (d = new Promise(function (t, r) {
                  if ("u" < typeof window || "u" < typeof document) return void t(null);
                  if ((window.Stripe && e && console.warn(u), window.Stripe)) return void t(window.Stripe);
                  try {
                      var n,
                          o = c();
                      o && e
                          ? console.warn(u)
                          : o
                            ? o &&
                              null !== m &&
                              null !== h &&
                              (o.removeEventListener("load", m),
                              o.removeEventListener("error", h),
                              null == (n = o.parentNode) || n.removeChild(o),
                              (o = f(e)))
                            : (o = f(e)),
                          (m = function () {
                              window.Stripe ? t(window.Stripe) : r(Error("Stripe.js not available"));
                          }),
                          (h = function (e) {
                              r(Error("Failed to load Stripe.js", { cause: e }));
                          }),
                          o.addEventListener("load", m),
                          o.addEventListener("error", h);
                  } catch (e) {
                      r(e);
                      return;
                  }
              })).catch(function (e) {
                  return (d = null), Promise.reject(e);
              })).then(function (e) {
            return v(e, r, i);
        });
    };
(b.setLoadParameters = function (e) {
    if (
        !(
            g &&
            n &&
            Object.keys(y(e)).reduce(function (t, r) {
                var o;
                return t && e[r] === (null == (o = n) ? void 0 : o[r]);
            }, !0)
        )
    ) {
        if (g) throw Error("You cannot change load parameters after calling loadStripe");
        n = y(e);
    }
}),
    (t.loadStripe = b);
