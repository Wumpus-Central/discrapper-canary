var r = n(98405),
    i = n(511696),
    a = n(630489),
    o = n(621523),
    s = n(154028),
    l = n(880181),
    c = n(733375),
    u = n(423582),
    d = n(556585),
    f = a && a.prototype;
if (
    (r(
        {
            target: 'Promise',
            proto: !0,
            real: !0,
            forced:
                !!a &&
                o(function () {
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
    !i && l(a))
) {
    var _ = s('Promise').prototype.finally;
    f.finally !== _ && d(f, 'finally', _, { unsafe: !0 });
}
