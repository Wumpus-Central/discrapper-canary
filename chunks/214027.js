var r = a(280792),
    n = a(880181),
    _ = a(796138),
    o = a(751736)('toStringTag'),
    i = Object,
    c =
        'Arguments' ===
        _(
            (function () {
                return arguments;
            })()
        ),
    s = function (t, e) {
        try {
            return t[e];
        } catch (t) {}
    };
t.exports = r
    ? _
    : function (t) {
          var e, a, r;
          return void 0 === t ? 'Undefined' : null === t ? 'Null' : 'string' == typeof (a = s((e = i(t)), o)) ? a : c ? _(e) : 'Object' === (r = _(e)) && n(e.callee) ? 'Arguments' : r;
      };
