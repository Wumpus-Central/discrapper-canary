var r,
    i,
    o,
    a,
    s,
    l = n(668530),
    c = n(476508),
    u = n(65007).f,
    d = n(62691).set,
    f = n(6938),
    p = n(378636),
    _ = n(192006),
    h = n(325435),
    m = n(42433),
    g = l.MutationObserver || l.WebKitMutationObserver,
    E = l.document,
    v = l.process,
    b = l.Promise,
    y = u(l, 'queueMicrotask'),
    O = y && y.value;
if (!O) {
    var S = new f(),
        I = function () {
            var e, t;
            for (m && (e = v.domain) && e.exit(); (t = S.get()); )
                try {
                    t();
                } catch (e) {
                    throw (S.head && r(), e);
                }
            e && e.enter();
        };
    p || m || h || !g || !E
        ? !_ && b && b.resolve
            ? (((a = b.resolve(void 0)).constructor = b),
              (s = c(a.then, a)),
              (r = function () {
                  s(I);
              }))
            : m
              ? (r = function () {
                    v.nextTick(I);
                })
              : ((d = c(d, l)),
                (r = function () {
                    d(I);
                }))
        : ((i = !0),
          (o = E.createTextNode('')),
          new g(I).observe(o, { characterData: !0 }),
          (r = function () {
              o.data = i = !i;
          })),
        (O = function (e) {
            S.head || r(), S.add(e);
        });
}
e.exports = O;
