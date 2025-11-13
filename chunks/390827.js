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
    O = s.process,
    v = s.Dispatch,
    I = s.Function,
    T = s.MessageChannel,
    S = s.String,
    A = 0,
    C = {},
    N = "onreadystatechange";
f(function () {
    r = s.location;
});
var R = function (e) {
        if (d(C, e)) {
            var t = C[e];
            delete C[e], t();
        }
    },
    P = function (e) {
        return function () {
            R(e);
        };
    },
    D = function (e) {
        R(e.data);
    },
    w = function (e) {
        s.postMessage(S(e), r.protocol + "//" + r.host);
    };
(b && y) ||
    ((b = function (e) {
        m(arguments.length, 1);
        var t = u(e) ? e : I(e),
            n = p(arguments, 1);
        return (
            (C[++A] = function () {
                l(t, void 0, n);
            }),
            i(A),
            A
        );
    }),
    (y = function (e) {
        delete C[e];
    }),
    E
        ? (i = function (e) {
              O.nextTick(P(e));
          })
        : v && v.now
          ? (i = function (e) {
                v.now(P(e));
            })
          : T && !g
            ? ((o = (a = new T()).port2), (a.port1.onmessage = D), (i = c(o.postMessage, o)))
            : s.addEventListener && u(s.postMessage) && !s.importScripts && r && "file:" !== r.protocol && !f(w)
              ? ((i = w), s.addEventListener("message", D, !1))
              : (i =
                    N in h("script")
                        ? function (e) {
                              _.appendChild(h("script"))[N] = function () {
                                  _.removeChild(this), R(e);
                              };
                          }
                        : function (e) {
                              setTimeout(P(e), 0);
                          })),
    (e.exports = {
        set: b,
        clear: y,
    });
