var i = r(67867),
    a = r(414629),
    o = r(197859),
    s = r(821819),
    l = r(294377),
    u = r(735471),
    c = r(992416),
    d = r(607672),
    f = r(691244),
    p = o && o.prototype;
if (
    (i(
        {
            target: 'Promise',
            proto: !0,
            real: !0,
            forced:
                !!o &&
                s(function () {
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
                var n = c(this, l('Promise')),
                    r = u(e);
                return this.then(
                    r
                        ? function (r) {
                              return d(n, e()).then(function () {
                                  return r;
                              });
                          }
                        : e,
                    r
                        ? function (r) {
                              return d(n, e()).then(function () {
                                  throw r;
                              });
                          }
                        : e
                );
            }
        }
    ),
    !a && u(o))
) {
    var h = l('Promise').prototype.finally;
    p.finally !== h && f(p, 'finally', h, { unsafe: !0 });
}
