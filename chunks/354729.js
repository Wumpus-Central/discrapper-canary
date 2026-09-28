function r(t) {
    return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                  return typeof t;
              }
            : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
              })(t);
}
var n,
    i = "basil",
    o = "https://js.stripe.com",
    s = "".concat(o, "/").concat(i, "/stripe.js"),
    u = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
    c = /^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/,
    f =
        "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
    h = function () {
        for (var t = document.querySelectorAll('script[src^="'.concat(o, '"]')), e = 0; e < t.length; e++) {
            var r,
                n = t[e];
            if (((r = n.src), u.test(r) || c.test(r))) return n;
        }
        return null;
    },
    l = function (t) {
        var e = t && !t.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
            r = document.createElement("script");
        r.src = "".concat(s).concat(e);
        var n = document.head || document.body;
        if (!n) throw Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
        return (n.appendChild(r), r);
    },
    a = function (t, e) {
        t && t._registerWrapper && t._registerWrapper({ name: "stripe-js", version: "7.3.1", startTime: e });
    },
    d = null,
    p = null,
    g = null,
    v = function (t, e, r) {
        if (null === t) return null;
        var n,
            o = e[0].match(/^pk_test/),
            s = 3 === (n = t.version) ? "v3" : n;
        o &&
            s !== i &&
            console.warn(
                "Stripe.js@"
                    .concat(s, " was loaded on the page, but @stripe/stripe-js@")
                    .concat("7.3.1", " expected Stripe.js@")
                    .concat(
                        i,
                        ". This may result in unexpected behavior. For more information, see https://docs.stripe.com/sdks/stripejs-versioning",
                    ),
            );
        var u = t.apply(void 0, e);
        return (a(u, r), u);
    },
    w = function (t) {
        var e =
            "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(
                JSON.stringify(t),
                "\n",
            );
        if (null === t || "object" !== r(t)) throw Error(e);
        if (1 === Object.keys(t).length && "boolean" == typeof t.advancedFraudSignals) return t;
        throw Error(e);
    },
    m = !1,
    E = function () {
        for (var t, e = arguments.length, r = Array(e), i = 0; i < e; i++) r[i] = arguments[i];
        m = !0;
        var o = Date.now();
        return ((t = n),
        null !== d
            ? d
            : (d = new Promise(function (e, r) {
                  if ("u" < typeof window || "u" < typeof document) return void e(null);
                  if ((window.Stripe && t && console.warn(f), window.Stripe)) return void e(window.Stripe);
                  try {
                      var n,
                          i = h();
                      (i && t
                          ? console.warn(f)
                          : i
                            ? i &&
                              null !== g &&
                              null !== p &&
                              (i.removeEventListener("load", g),
                              i.removeEventListener("error", p),
                              null == (n = i.parentNode) || n.removeChild(i),
                              (i = l(t)))
                            : (i = l(t)),
                          (g = function () {
                              window.Stripe ? e(window.Stripe) : r(Error("Stripe.js not available"));
                          }),
                          (p = function (t) {
                              r(Error("Failed to load Stripe.js", { cause: t }));
                          }),
                          i.addEventListener("load", g),
                          i.addEventListener("error", p));
                  } catch (t) {
                      r(t);
                      return;
                  }
              })).catch(function (t) {
                  return ((d = null), Promise.reject(t));
              })).then(function (t) {
            return v(t, r, o);
        });
    };
((E.setLoadParameters = function (t) {
    if (
        !(
            m &&
            n &&
            Object.keys(w(t)).reduce(function (e, r) {
                var i;
                return e && t[r] === (null == (i = n) ? void 0 : i[r]);
            }, !0)
        )
    ) {
        if (m) throw Error("You cannot change load parameters after calling loadStripe");
        n = w(t);
    }
}),
    (e.loadStripe = E));
