var i,
    a,
    o,
    s,
    l,
    u = r(668530),
    c = r(476508),
    d = r(65007).f,
    f = r(62691).set,
    p = r(6938),
    h = r(378636),
    _ = r(192006),
    m = r(325435),
    g = r(42433),
    E = u.MutationObserver || u.WebKitMutationObserver,
    v = u.document,
    y = u.process,
    b = u.Promise,
    I = d(u, 'queueMicrotask'),
    T = I && I.value;
if (!T) {
    var S = new p(),
        A = function () {
            var e, n;
            for (g && (e = y.domain) && e.exit(); (n = S.get()); )
                try {
                    n();
                } catch (e) {
                    throw (S.head && i(), e);
                }
            e && e.enter();
        };
    h || g || m || !E || !v
        ? !_ && b && b.resolve
            ? (((s = b.resolve(void 0)).constructor = b),
              (l = c(s.then, s)),
              (i = function () {
                  l(A);
              }))
            : g
              ? (i = function () {
                    y.nextTick(A);
                })
              : ((f = c(f, u)),
                (i = function () {
                    f(A);
                }))
        : ((a = !0),
          (o = v.createTextNode('')),
          new E(A).observe(o, { characterData: !0 }),
          (i = function () {
              o.data = a = !a;
          })),
        (T = function (e) {
            !S.head && i(), S.add(e);
        });
}
e.exports = T;
