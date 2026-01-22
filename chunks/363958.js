var r = n(834647),
    a = n(780940),
    o = n(145595),
    i = n(486816),
    s = n(683570),
    l = n(309270),
    c = n(304334),
    u = n(961549),
    d = n(735811),
    p = o && o.prototype;
if (
    (r(
        {
            target: "Promise",
            proto: !0,
            real: !0,
            forced:
                !!o &&
                i(function () {
                    p.finally.call(
                        {
                            then: function () {},
                        },
                        function () {},
                    );
                }),
        },
        {
            finally: function (e) {
                var t = c(this, s("Promise")),
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
    !a && l(o))
) {
    var h = s("Promise").prototype.finally;
    p.finally !== h && d(p, "finally", h, { unsafe: !0 });
}
