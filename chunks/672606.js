var r,
    o,
    a,
    i,
    s,
    c = n(424353),
    l = n(236264),
    u = n(324474),
    d = n(430805).set,
    p = n(61189),
    h = n(179156),
    f = n(470892),
    m = n(883343),
    y = n(270301),
    v = c.MutationObserver || c.WebKitMutationObserver,
    g = c.document,
    b = c.process,
    _ = c.Promise,
    k = l('queueMicrotask');
if (!k) {
    var C = new p(),
        Z = function () {
            var e, t;
            for (y && (e = b.domain) && e.exit(); (t = C.get()); )
                try {
                    t();
                } catch (e) {
                    throw (C.head && r(), e);
                }
            e && e.enter();
        };
    h || y || m || !v || !g
        ? !f && _ && _.resolve
            ? (((i = _.resolve(void 0)).constructor = _),
              (s = u(i.then, i)),
              (r = function () {
                  s(Z);
              }))
            : y
              ? (r = function () {
                    b.nextTick(Z);
                })
              : ((d = u(d, c)),
                (r = function () {
                    d(Z);
                }))
        : ((o = !0),
          (a = g.createTextNode('')),
          new v(Z).observe(a, { characterData: !0 }),
          (r = function () {
              a.data = o = !o;
          })),
        (k = function (e) {
            C.head || r(), C.add(e);
        });
}
e.exports = k;
