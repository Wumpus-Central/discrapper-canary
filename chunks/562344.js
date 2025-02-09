n.d(t, {
    $6: () => d,
    OV: () => o,
    Qe: () => u,
    Rw: () => a,
    X9: () => c,
    bc: () => i,
    gb: () => l,
    wI: () => s
});
var i,
    r = n(259630);
!(function (e) {
    (e.FORMAT_ERROR = 'FORMAT_ERROR'), (e.UNSUPPORTED_FORMATTER = 'UNSUPPORTED_FORMATTER'), (e.INVALID_CONFIG = 'INVALID_CONFIG'), (e.MISSING_DATA = 'MISSING_DATA'), (e.MISSING_TRANSLATION = 'MISSING_TRANSLATION');
})(i || (i = {}));
var a = (function (e) {
        function t(n, i, r) {
            var a = this,
                s = r ? (r instanceof Error ? r : Error(String(r))) : void 0;
            return (
                ((a =
                    e.call(
                        this,
                        '[@formatjs/intl Error '
                            .concat(n, '] ')
                            .concat(i, '\n')
                            .concat(s ? '\n'.concat(s.message, '\n').concat(s.stack) : '')
                    ) || this).code = n),
                'function' == typeof Error.captureStackTrace && Error.captureStackTrace(a, t),
                a
            );
        }
        return (0, r.ZT)(t, e), t;
    })(Error),
    s = (function (e) {
        function t(t, n) {
            return e.call(this, i.UNSUPPORTED_FORMATTER, t, n) || this;
        }
        return (0, r.ZT)(t, e), t;
    })(a),
    o = (function (e) {
        function t(t, n) {
            return e.call(this, i.INVALID_CONFIG, t, n) || this;
        }
        return (0, r.ZT)(t, e), t;
    })(a),
    l = (function (e) {
        function t(t, n) {
            return e.call(this, i.MISSING_DATA, t, n) || this;
        }
        return (0, r.ZT)(t, e), t;
    })(a),
    u = (function (e) {
        function t(t, n, r) {
            var a = e.call(this, i.FORMAT_ERROR, ''.concat(t, '\nLocale: ').concat(n, '\n'), r) || this;
            return (a.locale = n), a;
        }
        return (0, r.ZT)(t, e), t;
    })(a),
    c = (function (e) {
        function t(t, n, i, r) {
            var a =
                e.call(
                    this,
                    ''
                        .concat(t, '\nMessageID: ')
                        .concat(null == i ? void 0 : i.id, '\nDefault Message: ')
                        .concat(null == i ? void 0 : i.defaultMessage, '\nDescription: ')
                        .concat(null == i ? void 0 : i.description, '\n'),
                    n,
                    r
                ) || this;
            return (a.descriptor = i), (a.locale = n), a;
        }
        return (0, r.ZT)(t, e), t;
    })(u),
    d = (function (e) {
        function t(t, n) {
            var r =
                e.call(
                    this,
                    i.MISSING_TRANSLATION,
                    'Missing message: "'
                        .concat(t.id, '" for locale "')
                        .concat(n, '", using ')
                        .concat(
                            t.defaultMessage
                                ? 'default message ('.concat(
                                      'string' == typeof t.defaultMessage
                                          ? t.defaultMessage
                                          : t.defaultMessage
                                                .map(function (e) {
                                                    var t;
                                                    return null !== (t = e.value) && void 0 !== t ? t : JSON.stringify(e);
                                                })
                                                .join(),
                                      ')'
                                  )
                                : 'id',
                            ' as fallback.'
                        )
                ) || this;
            return (r.descriptor = t), r;
        }
        return (0, r.ZT)(t, e), t;
    })(a);
