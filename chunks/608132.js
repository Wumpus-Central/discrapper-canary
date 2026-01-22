var r = n(658261),
    i = n(436167);
function a(e, t) {
    var n;
    function s(n, i, a, o) {
        try {
            var l = e[n](i),
                c = l.value;
            return c instanceof r
                ? t.resolve(c.v).then(
                      function (e) {
                          s("next", e, a, o);
                      },
                      function (e) {
                          s("throw", e, a, o);
                      },
                  )
                : t.resolve(c).then(
                      function (e) {
                          (l.value = e), a(l);
                      },
                      function (e) {
                          return s("throw", e, a, o);
                      },
                  );
        } catch (e) {
            o(e);
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
                        s(e, i, t, n);
                    });
                }
                return (n = n ? n.then(a, a) : a());
            },
            !0,
        );
}
(e.exports = a), (e.exports.__esModule = !0), (e.exports.default = e.exports);
