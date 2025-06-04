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
var r,
    i = 'https://js.stripe.com/v3',
    o = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
    a = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used',
    s = function () {
        for (var e = document.querySelectorAll('script[src^="'.concat(i, '"]')), t = 0; t < e.length; t++) {
            var n = e[t];
            if (o.test(n.src)) return n;
        }
        return null;
    },
    l = function (e) {
        var t = e && !e.advancedFraudSignals ? '?advancedFraudSignals=false' : '',
            n = document.createElement('script');
        n.src = ''.concat(i).concat(t);
        var r = document.head || document.body;
        if (!r) throw Error('Expected document.body not to be null. Stripe.js requires a <body> element.');
        return r.appendChild(n), n;
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
    u = null,
    d = null,
    f = null,
    _ = function (e) {
        return function () {
            e(Error('Failed to load Stripe.js'));
        };
    },
    p = function (e, t) {
        return function () {
            window.Stripe ? e(window.Stripe) : t(Error('Stripe.js not available'));
        };
    },
    h = function (e) {
        return null !== u
            ? u
            : (u = new Promise(function (t, n) {
                  if ('undefined' == typeof window || 'undefined' == typeof document) return void t(null);
                  if ((window.Stripe && e && console.warn(a), window.Stripe)) return void t(window.Stripe);
                  try {
                      var r,
                          i = s();
                      i && e ? console.warn(a) : i ? i && null !== f && null !== d && (i.removeEventListener('load', f), i.removeEventListener('error', d), null == (r = i.parentNode) || r.removeChild(i), (i = l(e))) : (i = l(e)), (f = p(t, n)), (d = _(n)), i.addEventListener('load', f), i.addEventListener('error', d);
                  } catch (e) {
                      n(e);
                      return;
                  }
              })).catch(function (e) {
                  return (u = null), Promise.reject(e);
              });
    },
    m = function (e, t, n) {
        if (null === e) return null;
        var r = e.apply(void 0, t);
        return c(r, n), r;
    },
    g = function (e) {
        var t = 'invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    '.concat(JSON.stringify(e), '\n');
        if (null === e || 'object' !== n(e)) throw Error(t);
        if (1 === Object.keys(e).length && 'boolean' == typeof e.advancedFraudSignals) return e;
        throw Error(t);
    },
    E = !1,
    b = function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        E = !0;
        var i = Date.now();
        return h(r).then(function (e) {
            return m(e, t, i);
        });
    };
(b.setLoadParameters = function (e) {
    if (
        !(
            E &&
            r &&
            Object.keys(g(e)).reduce(function (t, n) {
                var i;
                return t && e[n] === (null == (i = r) ? void 0 : i[n]);
            }, !0)
        )
    ) {
        if (E) throw Error('You cannot change load parameters after calling loadStripe');
        r = g(e);
    }
}),
    (t.loadStripe = b);
