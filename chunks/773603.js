var i = r(147018),
    a = r(992051),
    o = r(955903),
    s = r(936940),
    l = r(545576),
    u = r(354848),
    c = r(344135),
    d = r(457110),
    f = r(859209),
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
