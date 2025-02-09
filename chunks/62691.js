var i,
    r,
    a,
    s,
    o = n(668530),
    l = n(156741),
    u = n(476508),
    c = n(735471),
    d = n(141603),
    f = n(821819),
    _ = n(439230),
    p = n(780524),
    h = n(535538),
    m = n(274745),
    g = n(378636),
    E = n(42433),
    v = o.setImmediate,
    y = o.clearImmediate,
    I = o.process,
    T = o.Dispatch,
    b = o.Function,
    S = o.MessageChannel,
    A = o.String,
    N = 0,
    C = {},
    R = 'onreadystatechange';
f(function () {
    i = o.location;
});
var O = function (e) {
        if (d(C, e)) {
            var t = C[e];
            delete C[e], t();
        }
    },
    D = function (e) {
        return function () {
            O(e);
        };
    },
    L = function (e) {
        O(e.data);
    },
    x = function (e) {
        o.postMessage(A(e), i.protocol + '//' + i.host);
    };
(v && y) ||
    ((v = function (e) {
        m(arguments.length, 1);
        var t = c(e) ? e : b(e),
            n = p(arguments, 1);
        return (
            (C[++N] = function () {
                l(t, void 0, n);
            }),
            r(N),
            N
        );
    }),
    (y = function (e) {
        delete C[e];
    }),
    E
        ? (r = function (e) {
              I.nextTick(D(e));
          })
        : T && T.now
          ? (r = function (e) {
                T.now(D(e));
            })
          : S && !g
            ? ((s = (a = new S()).port2), (a.port1.onmessage = L), (r = u(s.postMessage, s)))
            : o.addEventListener && c(o.postMessage) && !o.importScripts && i && 'file:' !== i.protocol && !f(x)
              ? ((r = x), o.addEventListener('message', L, !1))
              : (r =
                    R in h('script')
                        ? function (e) {
                              _.appendChild(h('script'))[R] = function () {
                                  _.removeChild(this), O(e);
                              };
                          }
                        : function (e) {
                              setTimeout(D(e), 0);
                          })),
    (e.exports = {
        set: v,
        clear: y
    });
