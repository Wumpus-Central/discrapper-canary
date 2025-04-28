var e = r(280792),
    o = r(880181),
    i = r(796138),
    u = r(751736)('toStringTag'),
    c = Object,
    a =
        'Arguments' ===
        i(
            (function () {
                return arguments;
            })()
        ),
    f = function (t, n) {
        try {
            return t[n];
        } catch (t) {}
    };
t.exports = e
    ? i
    : function (t) {
          var n, r, e;
          return void 0 === t ? 'Undefined' : null === t ? 'Null' : 'string' == typeof (r = f((n = c(t)), u)) ? r : a ? i(n) : 'Object' === (e = i(n)) && o(n.callee) ? 'Arguments' : e;
      };
