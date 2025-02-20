var r,
    i,
    o,
    a,
    s = n(668530),
    l = n(156741),
    c = n(476508),
    u = n(735471),
    d = n(141603),
    f = n(821819),
    p = n(439230),
    _ = n(780524),
    h = n(535538),
    m = n(274745),
    g = n(378636),
    E = n(42433),
    v = s.setImmediate,
    b = s.clearImmediate,
    y = s.process,
    O = s.Dispatch,
    S = s.Function,
    I = s.MessageChannel,
    T = s.String,
    N = 0,
    A = {},
    C = 'onreadystatechange';
f(function () {
    r = s.location;
});
var R = function (e) {
        if (d(A, e)) {
            var t = A[e];
            delete A[e], t();
        }
    },
    P = function (e) {
        return function () {
            R(e);
        };
    },
    w = function (e) {
        R(e.data);
    },
    D = function (e) {
        s.postMessage(T(e), r.protocol + '//' + r.host);
    };
(v && b) ||
    ((v = function (e) {
        m(arguments.length, 1);
        var t = u(e) ? e : S(e),
            n = _(arguments, 1);
        return (
            (A[++N] = function () {
                l(t, void 0, n);
            }),
            i(N),
            N
        );
    }),
    (b = function (e) {
        delete A[e];
    }),
    E
        ? (i = function (e) {
              y.nextTick(P(e));
          })
        : O && O.now
          ? (i = function (e) {
                O.now(P(e));
            })
          : I && !g
            ? ((a = (o = new I()).port2), (o.port1.onmessage = w), (i = c(a.postMessage, a)))
            : s.addEventListener && u(s.postMessage) && !s.importScripts && r && 'file:' !== r.protocol && !f(D)
              ? ((i = D), s.addEventListener('message', w, !1))
              : (i =
                    C in h('script')
                        ? function (e) {
                              p.appendChild(h('script'))[C] = function () {
                                  p.removeChild(this), R(e);
                              };
                          }
                        : function (e) {
                              setTimeout(P(e), 0);
                          })),
    (e.exports = {
        set: v,
        clear: b
    });
