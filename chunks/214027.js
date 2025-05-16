var r = n(280792),
    i = n(880181),
    a = n(796138),
    o = n(751736)('toStringTag'),
    s = Object,
    l =
        'Arguments' ===
        a(
            (function () {
                return arguments;
            })()
        ),
    c = function (e, t) {
        try {
            return e[t];
        } catch (e) {}
    };
e.exports = r
    ? a
    : function (e) {
          var t, n, r;
          return void 0 === e ? 'Undefined' : null === e ? 'Null' : 'string' == typeof (n = c((t = s(e)), o)) ? n : l ? a(t) : 'Object' === (r = a(t)) && i(t.callee) ? 'Arguments' : r;
      };
