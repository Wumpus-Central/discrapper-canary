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
    p = n(620394),
    _ = n(992174),
    m = n(809290),
    h = n(338045),
    g = n(266782),
    E = n(426625),
    b = s.setImmediate,
    y = s.clearImmediate,
    O = s.process,
    v = s.Dispatch,
    S = s.Function,
    I = s.MessageChannel,
    T = s.String,
    C = 0,
    A = {},
    N = "onreadystatechange";
f(function () {
    r = s.location;
});
var P = function (e) {
        if (d(A, e)) {
            var t = A[e];
            delete A[e], t();
        }
    },
    R = function (e) {
        return function () {
            P(e);
        };
    },
    w = function (e) {
        P(e.data);
    },
    D = function (e) {
        s.postMessage(T(e), r.protocol + "//" + r.host);
    };
(b && y) ||
    ((b = function (e) {
        h(arguments.length, 1);
        var t = u(e) ? e : S(e),
            n = _(arguments, 1);
        return (
            (A[++C] = function () {
                l(t, void 0, n);
            }),
            i(C),
            C
        );
    }),
    (y = function (e) {
        delete A[e];
    }),
    E
        ? (i = function (e) {
              O.nextTick(R(e));
          })
        : v && v.now
          ? (i = function (e) {
                v.now(R(e));
            })
          : I && !g
            ? ((o = (a = new I()).port2), (a.port1.onmessage = w), (i = c(o.postMessage, o)))
            : s.addEventListener && u(s.postMessage) && !s.importScripts && r && "file:" !== r.protocol && !f(D)
              ? ((i = D), s.addEventListener("message", w, !1))
              : (i =
                    N in m("script")
                        ? function (e) {
                              p.appendChild(m("script"))[N] = function () {
                                  p.removeChild(this), P(e);
                              };
                          }
                        : function (e) {
                              setTimeout(R(e), 0);
                          })),
    (e.exports = {
        set: b,
        clear: y,
    });
