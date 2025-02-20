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
r = { value: !0 };
var r,
    i,
    o = 'https://js.stripe.com/v3',
    a = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
    s = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used',
    l = function () {
        for (var e = document.querySelectorAll('script[src^="'.concat(o, '"]')), t = 0; t < e.length; t++) {
            var n = e[t];
            if (a.test(n.src)) return n;
        }
        return null;
    },
    c = function (e) {
        var t = e && !e.advancedFraudSignals ? '?advancedFraudSignals=false' : '',
            n = document.createElement('script');
        n.src = ''.concat(o).concat(t);
        var r = document.head || document.body;
        if (!r) throw Error('Expected document.body not to be null. Stripe.js requires a <body> element.');
        return r.appendChild(n), n;
    },
    u = function (e, t) {
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
    p = null,
    _ = function (e) {
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
                  if ((window.Stripe && e && console.warn(s), window.Stripe)) {
                      t(window.Stripe);
                      return;
                  }
                  try {
                      var r,
                          i = l();
                      i && e ? console.warn(s) : i ? i && null !== p && null !== f && (i.removeEventListener('load', p), i.removeEventListener('error', f), null === (r = i.parentNode) || void 0 === r || r.removeChild(i), (i = c(e))) : (i = c(e)), (p = h(t, n)), (f = _(n)), i.addEventListener('load', p), i.addEventListener('error', f);
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
        var r = e.apply(void 0, t);
        return u(r, n), r;
    },
    E = function (e) {
        var t = 'invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    '.concat(JSON.stringify(e), '\n');
        if (null === e || 'object' !== n(e)) throw Error(t);
        if (1 === Object.keys(e).length && 'boolean' == typeof e.advancedFraudSignals) return e;
        throw Error(t);
    },
    v = !1,
    b = function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        v = !0;
        var r = Date.now();
        return m(i).then(function (e) {
            return g(e, t, r);
        });
    };
(b.setLoadParameters = function (e) {
    if (
        !(
            v &&
            i &&
            Object.keys(E(e)).reduce(function (t, n) {
                var r;
                return t && e[n] === (null === (r = i) || void 0 === r ? void 0 : r[n]);
            }, !0)
        )
    ) {
        if (v) throw Error('You cannot change load parameters after calling loadStripe');
        i = E(e);
    }
}),
    (t.loadStripe = b);
