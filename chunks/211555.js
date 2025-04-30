var r = n(73800);
function i(e) {
    var t = 'https://react.dev/errors/' + e;
    if (1 < arguments.length) {
        t += '?args[]=' + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++) t += '&args[]=' + encodeURIComponent(arguments[n]);
    }
    return 'Minified React error #' + e + '; visit ' + t + ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.';
}
function a() {}
var o = {
        d: {
            f: a,
            r: function () {
                throw Error(i(522));
            },
            D: a,
            C: a,
            L: a,
            m: a,
            X: a,
            S: a,
            M: a
        },
        p: 0,
        findDOMNode: null
    },
    s = Symbol.for('react.portal');
function l(e, t, n) {
    var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return {
        $$typeof: s,
        key: null == r ? null : '' + r,
        children: e,
        containerInfo: t,
        implementation: n
    };
}
var c = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
function u(e, t) {
    return 'font' === e ? '' : 'string' == typeof t ? ('use-credentials' === t ? t : '') : void 0;
}
(t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (t.createPortal = function (e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!t || (1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType)) throw Error(i(299));
        return l(e, t, null, n);
    }),
    (t.flushSync = function (e) {
        var t = c.T,
            n = o.p;
        try {
            if (((c.T = null), (o.p = 2), e)) return e();
        } finally {
            (c.T = t), (o.p = n), o.d.f();
        }
    }),
    (t.preconnect = function (e, t) {
        'string' == typeof e && ((t = t ? ('string' == typeof (t = t.crossOrigin) ? ('use-credentials' === t ? t : '') : void 0) : null), o.d.C(e, t));
    }),
    (t.prefetchDNS = function (e) {
        'string' == typeof e && o.d.D(e);
    }),
    (t.preinit = function (e, t) {
        if ('string' == typeof e && t && 'string' == typeof t.as) {
            var n = t.as,
                r = u(n, t.crossOrigin),
                i = 'string' == typeof t.integrity ? t.integrity : void 0,
                a = 'string' == typeof t.fetchPriority ? t.fetchPriority : void 0;
            'style' === n
                ? o.d.S(e, 'string' == typeof t.precedence ? t.precedence : void 0, {
                      crossOrigin: r,
                      integrity: i,
                      fetchPriority: a
                  })
                : 'script' === n &&
                  o.d.X(e, {
                      crossOrigin: r,
                      integrity: i,
                      fetchPriority: a,
                      nonce: 'string' == typeof t.nonce ? t.nonce : void 0
                  });
        }
    }),
    (t.preinitModule = function (e, t) {
        if ('string' == typeof e)
            if ('object' == typeof t && null !== t) {
                if (null == t.as || 'script' === t.as) {
                    var n = u(t.as, t.crossOrigin);
                    o.d.M(e, {
                        crossOrigin: n,
                        integrity: 'string' == typeof t.integrity ? t.integrity : void 0,
                        nonce: 'string' == typeof t.nonce ? t.nonce : void 0
                    });
                }
            } else null == t && o.d.M(e);
    }),
    (t.preload = function (e, t) {
        if ('string' == typeof e && 'object' == typeof t && null !== t && 'string' == typeof t.as) {
            var n = t.as,
                r = u(n, t.crossOrigin);
            o.d.L(e, n, {
                crossOrigin: r,
                integrity: 'string' == typeof t.integrity ? t.integrity : void 0,
                nonce: 'string' == typeof t.nonce ? t.nonce : void 0,
                type: 'string' == typeof t.type ? t.type : void 0,
                fetchPriority: 'string' == typeof t.fetchPriority ? t.fetchPriority : void 0,
                referrerPolicy: 'string' == typeof t.referrerPolicy ? t.referrerPolicy : void 0,
                imageSrcSet: 'string' == typeof t.imageSrcSet ? t.imageSrcSet : void 0,
                imageSizes: 'string' == typeof t.imageSizes ? t.imageSizes : void 0,
                media: 'string' == typeof t.media ? t.media : void 0
            });
        }
    }),
    (t.preloadModule = function (e, t) {
        if ('string' == typeof e)
            if (t) {
                var n = u(t.as, t.crossOrigin);
                o.d.m(e, {
                    as: 'string' == typeof t.as && 'script' !== t.as ? t.as : void 0,
                    crossOrigin: n,
                    integrity: 'string' == typeof t.integrity ? t.integrity : void 0
                });
            } else o.d.m(e);
    }),
    (t.requestFormReset = function (e) {
        o.d.r(e);
    }),
    (t.unstable_batchedUpdates = function (e, t) {
        return e(t);
    }),
    (t.useFormState = function (e, t, n) {
        return c.H.useFormState(e, t, n);
    }),
    (t.useFormStatus = function () {
        return c.H.useHostTransitionStatus();
    }),
    (t.version = '19.0.0');
