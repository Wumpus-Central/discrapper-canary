var i = n(67867),
    r = n(414629),
    a = n(197859),
    s = n(821819),
    o = n(294377),
    l = n(735471),
    u = n(992416),
    c = n(607672),
    d = n(691244),
    f = a && a.prototype;
if (
    (i(
        {
            target: 'Promise',
            proto: !0,
            real: !0,
            forced:
                !!a &&
                s(function () {
                    f.finally.call(
                        {
                            then: function () {}
                        },
                        function () {}
                    );
                })
        },
        {
            finally: function (e) {
                var t = u(this, o('Promise')),
                    n = l(e);
                return this.then(
                    n
                        ? function (n) {
                              return c(t, e()).then(function () {
                                  return n;
                              });
                          }
                        : e,
                    n
                        ? function (n) {
                              return c(t, e()).then(function () {
                                  throw n;
                              });
                          }
                        : e
                );
            }
        }
    ),
    !r && l(a))
) {
    var _ = o('Promise').prototype.finally;
    f.finally !== _ && d(f, 'finally', _, { unsafe: !0 });
}
