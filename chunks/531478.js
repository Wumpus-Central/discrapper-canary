function t(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
}
var n = {};
function i(e, i, r) {
    function a(e, t, n) {
        return 'string' == typeof i ? i : i(e, t, n);
    }
    r || (r = Error);
    var s = (function (e) {
        function n(t, n, i) {
            return e.call(this, a(t, n, i)) || this;
        }
        return t(n, e), n;
    })(r);
    (s.prototype.name = r.name), (s.prototype.code = e), (n[e] = s);
}
function r(e, t) {
    if (!Array.isArray(e)) return 'of '.concat(t, ' ').concat(String(e));
    var n = e.length;
    return ((e = e.map(function (e) {
        return String(e);
    })),
    n > 2)
        ? 'one of '.concat(t, ' ').concat(e.slice(0, n - 1).join(', '), ', or ') + e[n - 1]
        : 2 === n
          ? 'one of '.concat(t, ' ').concat(e[0], ' or ').concat(e[1])
          : 'of '.concat(t, ' ').concat(e[0]);
}
function a(e, t, n) {
    return e.substr(!n || n < 0 ? 0 : +n, t.length) === t;
}
function s(e, t, n) {
    return (void 0 === n || n > e.length) && (n = e.length), e.substring(n - t.length, n) === t;
}
function o(e, t, n) {
    return 'number' != typeof n && (n = 0), !(n + t.length > e.length) && -1 !== e.indexOf(t, n);
}
i(
    'ERR_INVALID_OPT_VALUE',
    function (e, t) {
        return 'The value "' + t + '" is invalid for option "' + e + '"';
    },
    TypeError
),
    i(
        'ERR_INVALID_ARG_TYPE',
        function (e, t, n) {
            if (('string' == typeof t && a(t, 'not ') ? ((i = 'must not be'), (t = t.replace(/^not /, ''))) : (i = 'must be'), s(e, ' argument'))) l = 'The '.concat(e, ' ').concat(i, ' ').concat(r(t, 'type'));
            else {
                var i,
                    l,
                    u = o(e, '.') ? 'property' : 'argument';
                l = 'The "'.concat(e, '" ').concat(u, ' ').concat(i, ' ').concat(r(t, 'type'));
            }
            return l + '. Received type '.concat(typeof n);
        },
        TypeError
    ),
    i('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF'),
    i('ERR_METHOD_NOT_IMPLEMENTED', function (e) {
        return 'The ' + e + ' method is not implemented';
    }),
    i('ERR_STREAM_PREMATURE_CLOSE', 'Premature close'),
    i('ERR_STREAM_DESTROYED', function (e) {
        return 'Cannot call ' + e + ' after a stream was destroyed';
    }),
    i('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times'),
    i('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable'),
    i('ERR_STREAM_WRITE_AFTER_END', 'write after end'),
    i('ERR_STREAM_NULL_VALUES', 'May not write null values to stream', TypeError),
    i(
        'ERR_UNKNOWN_ENCODING',
        function (e) {
            return 'Unknown encoding: ' + e;
        },
        TypeError
    ),
    i('ERR_STREAM_UNSHIFT_AFTER_END_EVENT', 'stream.unshift() after end event'),
    (e.exports.codes = n);
