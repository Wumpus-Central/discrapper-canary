var i,
    r,
    a,
    s,
    o,
    l = n(668530),
    u = n(476508),
    c = n(65007).f,
    d = n(62691).set,
    f = n(6938),
    _ = n(378636),
    p = n(192006),
    h = n(325435),
    m = n(42433),
    g = l.MutationObserver || l.WebKitMutationObserver,
    E = l.document,
    v = l.process,
    y = l.Promise,
    I = c(l, 'queueMicrotask'),
    T = I && I.value;
if (!T) {
    var b = new f(),
        S = function () {
            var e, t;
            for (m && (e = v.domain) && e.exit(); (t = b.get()); )
                try {
                    t();
                } catch (e) {
                    throw (b.head && i(), e);
                }
            e && e.enter();
        };
    _ || m || h || !g || !E
        ? !p && y && y.resolve
            ? (((s = y.resolve(void 0)).constructor = y),
              (o = u(s.then, s)),
              (i = function () {
                  o(S);
              }))
            : m
              ? (i = function () {
                    v.nextTick(S);
                })
              : ((d = u(d, l)),
                (i = function () {
                    d(S);
                }))
        : ((r = !0),
          (a = E.createTextNode('')),
          new g(S).observe(a, { characterData: !0 }),
          (i = function () {
              a.data = r = !r;
          })),
        (T = function (e) {
            b.head || i(), b.add(e);
        });
}
e.exports = T;
