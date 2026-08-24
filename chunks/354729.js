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
    i = "basil",
    o = "https://js.stripe.com",
    a = "".concat(o, "/").concat(i, "/stripe.js"),
    s = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
    l = /^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/,
    u =
        "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
    c = function () {
        for (var e = document.querySelectorAll('script[src^="'.concat(o, '"]')), t = 0; t < e.length; t++) {
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
    d = function (e, t) {
        e && e._registerWrapper && e._registerWrapper({ name: "stripe-js", version: "7.3.1", startTime: t });
    },
    p = null,
    h = null,
    m = null,
    v = function (e, t, r) {
        if (null === e) return null;
        var n,
            o = t[0].match(/^pk_test/),
            a = 3 === (n = e.version) ? "v3" : n;
        o &&
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
        var s = e.apply(void 0, t);
        return d(s, r), s;
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
        for (var e, t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
        g = !0;
        var o = Date.now();
        return ((e = n),
        null !== p
            ? p
            : (p = new Promise(function (t, r) {
                  if ("u" < typeof window || "u" < typeof document) return void t(null);
                  if ((window.Stripe && e && console.warn(u), window.Stripe)) return void t(window.Stripe);
                  try {
                      var n,
                          i = c();
                      i && e
                          ? console.warn(u)
                          : i
                            ? i &&
                              null !== m &&
                              null !== h &&
                              (i.removeEventListener("load", m),
                              i.removeEventListener("error", h),
                              null == (n = i.parentNode) || n.removeChild(i),
                              (i = f(e)))
                            : (i = f(e)),
                          (m = function () {
                              window.Stripe ? t(window.Stripe) : r(Error("Stripe.js not available"));
                          }),
                          (h = function (e) {
                              r(Error("Failed to load Stripe.js", { cause: e }));
                          }),
                          i.addEventListener("load", m),
                          i.addEventListener("error", h);
                  } catch (e) {
                      r(e);
                      return;
                  }
              })).catch(function (e) {
                  return (p = null), Promise.reject(e);
              })).then(function (e) {
            return v(e, r, o);
        });
    };
(b.setLoadParameters = function (e) {
    if (
        !(
            g &&
            n &&
            Object.keys(y(e)).reduce(function (t, r) {
                var i;
                return t && e[r] === (null == (i = n) ? void 0 : i[r]);
            }, !0)
        )
    ) {
        if (g) throw Error("You cannot change load parameters after calling loadStripe");
        n = y(e);
    }
}),
    (t.loadStripe = b);
