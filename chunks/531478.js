function t(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
}
var n = {};
function r(e, r, i) {
    function o(e, t, n) {
        return 'string' == typeof r ? r : r(e, t, n);
    }
    i || (i = Error);
    var a = (function (e) {
        function n(t, n, r) {
            return e.call(this, o(t, n, r)) || this;
        }
        return t(n, e), n;
    })(i);
    (a.prototype.name = i.name), (a.prototype.code = e), (n[e] = a);
}
function i(e, t) {
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
function o(e, t, n) {
    return e.substr(!n || n < 0 ? 0 : +n, t.length) === t;
}
function a(e, t, n) {
    return (void 0 === n || n > e.length) && (n = e.length), e.substring(n - t.length, n) === t;
}
function s(e, t, n) {
    return 'number' != typeof n && (n = 0), !(n + t.length > e.length) && -1 !== e.indexOf(t, n);
}
r(
    'ERR_INVALID_OPT_VALUE',
    function (e, t) {
        return 'The value "' + t + '" is invalid for option "' + e + '"';
    },
    TypeError
),
    r(
        'ERR_INVALID_ARG_TYPE',
        function (e, t, n) {
            if (('string' == typeof t && o(t, 'not ') ? ((r = 'must not be'), (t = t.replace(/^not /, ''))) : (r = 'must be'), a(e, ' argument'))) l = 'The '.concat(e, ' ').concat(r, ' ').concat(i(t, 'type'));
            else {
                var r,
                    l,
                    c = s(e, '.') ? 'property' : 'argument';
                l = 'The "'.concat(e, '" ').concat(c, ' ').concat(r, ' ').concat(i(t, 'type'));
            }
            return l + '. Received type '.concat(typeof n);
        },
        TypeError
    ),
    r('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF'),
    r('ERR_METHOD_NOT_IMPLEMENTED', function (e) {
        return 'The ' + e + ' method is not implemented';
    }),
    r('ERR_STREAM_PREMATURE_CLOSE', 'Premature close'),
    r('ERR_STREAM_DESTROYED', function (e) {
        return 'Cannot call ' + e + ' after a stream was destroyed';
    }),
    r('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times'),
    r('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable'),
    r('ERR_STREAM_WRITE_AFTER_END', 'write after end'),
    r('ERR_STREAM_NULL_VALUES', 'May not write null values to stream', TypeError),
    r(
        'ERR_UNKNOWN_ENCODING',
        function (e) {
            return 'Unknown encoding: ' + e;
        },
        TypeError
    ),
    r('ERR_STREAM_UNSHIFT_AFTER_END_EVENT', 'stream.unshift() after end event'),
    (e.exports.codes = n);
