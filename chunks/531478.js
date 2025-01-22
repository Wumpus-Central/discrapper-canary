function n(e, n) {
    (e.prototype = Object.create(n.prototype)), (e.prototype.constructor = e), (e.__proto__ = n);
}
var r = {};
function i(e, i, a) {
    function o(e, n, r) {
        return 'string' == typeof i ? i : i(e, n, r);
    }
    !a && (a = Error);
    var s = (function (e) {
        function r(n, r, i) {
            return e.call(this, o(n, r, i)) || this;
        }
        return n(r, e), r;
    })(a);
    (s.prototype.name = a.name), (s.prototype.code = e), (r[e] = s);
}
function a(e, n) {
    if (!Array.isArray(e)) return 'of '.concat(n, ' ').concat(String(e));
    var r = e.length;
    return ((e = e.map(function (e) {
        return String(e);
    })),
    r > 2)
        ? 'one of '.concat(n, ' ').concat(e.slice(0, r - 1).join(', '), ', or ') + e[r - 1]
        : 2 === r
          ? 'one of '.concat(n, ' ').concat(e[0], ' or ').concat(e[1])
          : 'of '.concat(n, ' ').concat(e[0]);
}
function o(e, n, r) {
    return e.substr(!r || r < 0 ? 0 : +r, n.length) === n;
}
function s(e, n, r) {
    return (void 0 === r || r > e.length) && (r = e.length), e.substring(r - n.length, r) === n;
}
function l(e, n, r) {
    return 'number' != typeof r && (r = 0), !(r + n.length > e.length) && -1 !== e.indexOf(n, r);
}
i(
    'ERR_INVALID_OPT_VALUE',
    function (e, n) {
        return 'The value "' + n + '" is invalid for option "' + e + '"';
    },
    TypeError
),
    i(
        'ERR_INVALID_ARG_TYPE',
        function (e, n, r) {
            if (('string' == typeof n && o(n, 'not ') ? ((i = 'must not be'), (n = n.replace(/^not /, ''))) : (i = 'must be'), s(e, ' argument'))) u = 'The '.concat(e, ' ').concat(i, ' ').concat(a(n, 'type'));
            else {
                var i,
                    u,
                    c = l(e, '.') ? 'property' : 'argument';
                u = 'The "'.concat(e, '" ').concat(c, ' ').concat(i, ' ').concat(a(n, 'type'));
            }
            return (u += '. Received type '.concat(typeof r));
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
    (e.exports.codes = r);
