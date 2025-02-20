var r = n(67867),
    i = n(414629),
    o = n(197859),
    a = n(821819),
    s = n(294377),
    l = n(735471),
    c = n(992416),
    u = n(607672),
    d = n(691244),
    f = o && o.prototype;
if (
    (r(
        {
            target: 'Promise',
            proto: !0,
            real: !0,
            forced:
                !!o &&
                a(function () {
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
                var t = c(this, s('Promise')),
                    n = l(e);
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
    !i && l(o))
) {
    var p = s('Promise').prototype.finally;
    f.finally !== p && d(f, 'finally', p, { unsafe: !0 });
}
