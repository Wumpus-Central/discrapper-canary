var i = n(273511),
    r = n(735471),
    a = n(726433),
    s = n(360518)('toStringTag'),
    o = Object,
    l =
        'Arguments' ===
        a(
            (function () {
                return arguments;
            })()
        ),
    u = function (e, t) {
        try {
            return e[t];
        } catch (e) {}
    };
e.exports = i
    ? a
    : function (e) {
          var t, n, i;
          return void 0 === e ? 'Undefined' : null === e ? 'Null' : 'string' == typeof (n = u((t = o(e)), s)) ? n : l ? a(t) : 'Object' === (i = a(t)) && r(t.callee) ? 'Arguments' : i;
      };
