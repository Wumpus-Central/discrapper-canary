var r,
    i,
    a,
    o,
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
    A = 0,
    N = {},
    C = 'onreadystatechange';
f(function () {
    r = s.location;
});
var R = function (e) {
        if (d(N, e)) {
            var t = N[e];
            delete N[e], t();
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
            (N[++A] = function () {
                l(t, void 0, n);
            }),
            i(A),
            A
        );
    }),
    (y = function (e) {
        delete N[e];
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
            ? ((o = (a = new S()).port2), (a.port1.onmessage = w), (i = c(o.postMessage, o)))
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
