var r,
    i,
    o,
    a,
    s = n(127849),
    l = n(636881),
    c = n(48657),
    u = n(880181),
    d = n(77025),
    f = n(621523),
    _ = n(620394),
    p = n(992174),
    h = n(809290),
    m = n(338045),
    g = n(266782),
    E = n(426625),
    b = s.setImmediate,
    y = s.clearImmediate,
    v = s.process,
    O = s.Dispatch,
    I = s.Function,
    S = s.MessageChannel,
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
(b && y) ||
    ((b = function (e) {
        m(arguments.length, 1);
        var t = u(e) ? e : I(e),
            n = p(arguments, 1);
        return (
            (A[++N] = function () {
                l(t, void 0, n);
            }),
            i(N),
            N
        );
    }),
    (y = function (e) {
        delete A[e];
    }),
    E
        ? (i = function (e) {
              v.nextTick(P(e));
          })
        : O && O.now
          ? (i = function (e) {
                O.now(P(e));
            })
          : S && !g
            ? ((a = (o = new S()).port2), (o.port1.onmessage = w), (i = c(a.postMessage, a)))
            : s.addEventListener && u(s.postMessage) && !s.importScripts && r && 'file:' !== r.protocol && !f(D)
              ? ((i = D), s.addEventListener('message', w, !1))
              : (i =
                    C in h('script')
                        ? function (e) {
                              _.appendChild(h('script'))[C] = function () {
                                  _.removeChild(this), R(e);
                              };
                          }
                        : function (e) {
                              setTimeout(P(e), 0);
                          })),
    (e.exports = {
        set: b,
        clear: y
    });
