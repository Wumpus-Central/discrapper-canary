function n(e) {
    return (n =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
              })(e);
}
i = { value: !0 };
var i,
    r,
    a = 'https://js.stripe.com/v3',
    s = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
    o = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used',
    l = function () {
        for (var e = document.querySelectorAll('script[src^="'.concat(a, '"]')), t = 0; t < e.length; t++) {
            var n = e[t];
            if (s.test(n.src)) return n;
        }
        return null;
    },
    u = function (e) {
        var t = e && !e.advancedFraudSignals ? '?advancedFraudSignals=false' : '',
            n = document.createElement('script');
        n.src = ''.concat(a).concat(t);
        var i = document.head || document.body;
        if (!i) throw Error('Expected document.body not to be null. Stripe.js requires a <body> element.');
        return i.appendChild(n), n;
    },
    c = function (e, t) {
        e &&
            e._registerWrapper &&
            e._registerWrapper({
                name: 'stripe-js',
                version: '3.3.0',
                startTime: t
            });
    },
    d = null,
    f = null,
    _ = null,
    p = function (e) {
        return function () {
            e(Error('Failed to load Stripe.js'));
        };
    },
    h = function (e, t) {
        return function () {
            window.Stripe ? e(window.Stripe) : t(Error('Stripe.js not available'));
        };
    },
    m = function (e) {
        return null !== d
            ? d
            : (d = new Promise(function (t, n) {
                  if ('undefined' == typeof window || 'undefined' == typeof document) {
                      t(null);
                      return;
                  }
                  if ((window.Stripe && e && console.warn(o), window.Stripe)) {
                      t(window.Stripe);
                      return;
                  }
                  try {
                      var i,
                          r = l();
                      r && e ? console.warn(o) : r ? r && null !== _ && null !== f && (r.removeEventListener('load', _), r.removeEventListener('error', f), null === (i = r.parentNode) || void 0 === i || i.removeChild(r), (r = u(e))) : (r = u(e)), (_ = h(t, n)), (f = p(n)), r.addEventListener('load', _), r.addEventListener('error', f);
                  } catch (e) {
                      n(e);
                      return;
                  }
              })).catch(function (e) {
                  return (d = null), Promise.reject(e);
              });
    },
    g = function (e, t, n) {
        if (null === e) return null;
        var i = e.apply(void 0, t);
        return c(i, n), i;
    },
    E = function (e) {
        var t = 'invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    '.concat(JSON.stringify(e), '\n');
        if (null === e || 'object' !== n(e)) throw Error(t);
        if (1 === Object.keys(e).length && 'boolean' == typeof e.advancedFraudSignals) return e;
        throw Error(t);
    },
    v = !1,
    y = function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        v = !0;
        var i = Date.now();
        return m(r).then(function (e) {
            return g(e, t, i);
        });
    };
(y.setLoadParameters = function (e) {
    if (
        !(
            v &&
            r &&
            Object.keys(E(e)).reduce(function (t, n) {
                var i;
                return t && e[n] === (null === (i = r) || void 0 === i ? void 0 : i[n]);
            }, !0)
        )
    ) {
        if (v) throw Error('You cannot change load parameters after calling loadStripe');
        r = E(e);
    }
}),
    (t.loadStripe = y);
