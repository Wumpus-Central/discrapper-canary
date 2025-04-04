var t,
    r,
    c,
    i,
    a,
    o = _(161581),
    u = _(566885),
    f = _(347722).f,
    b = _(112285).set,
    d = _(102166),
    s = _(531460),
    w = _(552044),
    g = _(135512),
    l = _(391673),
    h = o.MutationObserver || o.WebKitMutationObserver,
    p = o.document,
    m = o.process,
    y = o.Promise,
    x = f(o, 'queueMicrotask'),
    k = x && x.value;
if (!k) {
    var v = new d(),
        R = function () {
            var e, n;
            for (l && (e = m.domain) && e.exit(); (n = v.get()); )
                try {
                    n();
                } catch (e) {
                    throw (v.head && t(), e);
                }
            e && e.enter();
        };
    s || l || g || !h || !p
        ? !w && y && y.resolve
            ? (((i = y.resolve(void 0)).constructor = y),
              (a = u(i.then, i)),
              (t = function () {
                  a(R);
              }))
            : l
              ? (t = function () {
                    m.nextTick(R);
                })
              : ((b = u(b, o)),
                (t = function () {
                    b(R);
                }))
        : ((r = !0),
          (c = p.createTextNode('')),
          new h(R).observe(c, { characterData: !0 }),
          (t = function () {
              c.data = r = !r;
          })),
        (k = function (e) {
            v.head || t(), v.add(e);
        });
}
e.exports = k;
