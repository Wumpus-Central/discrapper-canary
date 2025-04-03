var r,
    o,
    a,
    i,
    s,
    c = n(668530),
    l = n(476508),
    u = n(65007).f,
    d = n(62691).set,
    p = n(6938),
    h = n(378636),
    f = n(192006),
    m = n(325435),
    y = n(42433),
    v = c.MutationObserver || c.WebKitMutationObserver,
    g = c.document,
    b = c.process,
    _ = c.Promise,
    k = u(c, 'queueMicrotask'),
    C = k && k.value;
if (!C) {
    var Z = new p(),
        w = function () {
            var e, t;
            for (y && (e = b.domain) && e.exit(); (t = Z.get()); )
                try {
                    t();
                } catch (e) {
                    throw (Z.head && r(), e);
                }
            e && e.enter();
        };
    h || y || m || !v || !g
        ? !f && _ && _.resolve
            ? (((i = _.resolve(void 0)).constructor = _),
              (s = l(i.then, i)),
              (r = function () {
                  s(w);
              }))
            : y
              ? (r = function () {
                    b.nextTick(w);
                })
              : ((d = l(d, c)),
                (r = function () {
                    d(w);
                }))
        : ((o = !0),
          (a = g.createTextNode('')),
          new v(w).observe(a, { characterData: !0 }),
          (r = function () {
              a.data = o = !o;
          })),
        (C = function (e) {
            Z.head || r(), Z.add(e);
        });
}
e.exports = C;
