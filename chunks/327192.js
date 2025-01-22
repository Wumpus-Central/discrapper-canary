var i = r(273511),
    a = r(735471),
    o = r(726433),
    s = r(360518)('toStringTag'),
    l = Object,
    u =
        'Arguments' ===
        o(
            (function () {
                return arguments;
            })()
        ),
    c = function (e, n) {
        try {
            return e[n];
        } catch (e) {}
    };
e.exports = i
    ? o
    : function (e) {
          var n, r, i;
          return void 0 === e ? 'Undefined' : null === e ? 'Null' : 'string' == typeof (r = c((n = l(e)), s)) ? r : u ? o(n) : 'Object' === (i = o(n)) && a(n.callee) ? 'Arguments' : i;
      };
