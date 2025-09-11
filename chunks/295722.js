var r = n(62584),
    i = n(710158);
function a(e, t) {
    var n;
    function o(n, i, a, s) {
        try {
            var l = e[n](i),
                c = l.value;
            return c instanceof r
                ? t.resolve(c.v).then(
                      function (e) {
                          o("next", e, a, s);
                      },
                      function (e) {
                          o("throw", e, a, s);
                      },
                  )
                : t.resolve(c).then(
                      function (e) {
                          (l.value = e), a(l);
                      },
                      function (e) {
                          return o("throw", e, a, s);
                      },
                  );
        } catch (e) {
            s(e);
        }
    }
    this.next ||
        (i(a.prototype),
        i(a.prototype, ("function" == typeof Symbol && Symbol.asyncIterator) || "@asyncIterator", function () {
            return this;
        })),
        i(
            this,
            "_invoke",
            function (e, r, i) {
                function a() {
                    return new t(function (t, n) {
                        o(e, i, t, n);
                    });
                }
                return (n = n ? n.then(a, a) : a());
            },
            !0,
        );
}
(e.exports = a), (e.exports.__esModule = !0), (e.exports.default = e.exports);
