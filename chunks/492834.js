var r = n(557939),
    i = n(105712),
    a = n(36935),
    s = n(503628),
    o = n(230606),
    l = n(339626),
    c = n(322402),
    u = n(477585),
    d = n(693655),
    f = a && a.prototype;
if (
    (r(
        {
            target: "Promise",
            proto: !0,
            real: !0,
            forced:
                !!a &&
                s(function () {
                    f.finally.call(
                        {
                            then: function () {},
                        },
                        function () {},
                    );
                }),
        },
        {
            finally: function (e) {
                var t = c(this, o("Promise")),
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
                        : e,
                );
            },
        },
    ),
    !i && l(a))
) {
    var p = o("Promise").prototype.finally;
    f.finally !== p &&
        d(f, "finally", p, {
            unsafe: !0,
        });
}
