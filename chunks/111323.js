var r = n(67867),
    o = n(414629),
    a = n(197859),
    i = n(821819),
    s = n(294377),
    c = n(735471),
    l = n(992416),
    u = n(607672),
    d = n(691244),
    p = a && a.prototype;
if (
    (r(
        {
            target: 'Promise',
            proto: !0,
            real: !0,
            forced:
                !!a &&
                i(function () {
                    p.finally.call(
                        {
                            then: function () {}
                        },
                        function () {}
                    );
                })
        },
        {
            finally: function (e) {
                var t = l(this, s('Promise')),
                    n = c(e);
                return this.then(
                    n
                        ? function (n) {
                              return u(t, e()).then(function () {
                                  return n;
                              });
                          }
                        : e,
                    n
                        ? function (n) {
                              return u(t, e()).then(function () {
                                  throw n;
                              });
                          }
                        : e
                );
            }
        }
    ),
    !o && c(a))
) {
    var h = s('Promise').prototype.finally;
    p.finally !== h && d(p, 'finally', h, { unsafe: !0 });
}
