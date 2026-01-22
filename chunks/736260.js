var r,
    i,
    a,
    s,
    o,
    l = n(860511),
    c = n(745730),
    u = n(221015),
    d = n(314144).set,
    f = n(246202),
    p = n(705333),
    _ = n(633006),
    h = n(78235),
    m = n(13570),
    g = l.MutationObserver || l.WebKitMutationObserver,
    E = l.document,
    b = l.process,
    y = l.Promise,
    O = c("queueMicrotask");
if (!O) {
    var A = new f(),
        v = function () {
            var e, t;
            for (m && (e = b.domain) && e.exit(); (t = A.get()); )
                try {
                    t();
                } catch (e) {
                    throw (A.head && r(), e);
                }
            e && e.enter();
        };
    p || m || h || !g || !E
        ? !_ && y && y.resolve
            ? (((s = y.resolve(void 0)).constructor = y),
              (o = u(s.then, s)),
              (r = function () {
                  o(v);
              }))
            : m
              ? (r = function () {
                    b.nextTick(v);
                })
              : ((d = u(d, l)),
                (r = function () {
                    d(v);
                }))
        : ((i = !0),
          (a = E.createTextNode("")),
          new g(v).observe(a, { characterData: !0 }),
          (r = function () {
              a.data = i = !i;
          })),
        (O = function (e) {
            A.head || r(), A.add(e);
        });
}
e.exports = O;
