"use strict";
var r,
    a,
    o,
    i,
    s = n(308227),
    l = n(421236),
    c = n(241091),
    u = n(309270),
    d = n(512008),
    p = n(486816),
    h = n(784932),
    f = n(596479),
    m = n(273900),
    y = n(978887),
    v = n(124673),
    g = n(184110),
    b = s.setImmediate,
    _ = s.clearImmediate,
    k = s.process,
    C = s.Dispatch,
    w = s.Function,
    S = s.MessageChannel,
    N = s.String,
    x = 0,
    P = {},
    A = "onreadystatechange";
p(function () {
    r = s.location;
});
var R = function (e) {
        if (d(P, e)) {
            var t = P[e];
            delete P[e], t();
        }
    },
    F = function (e) {
        return function () {
            R(e);
        };
    },
    E = function (e) {
        R(e.data);
    },
    O = function (e) {
        s.postMessage(N(e), r.protocol + "//" + r.host);
    };
(b && _) ||
    ((b = function (e) {
        y(arguments.length, 1);
        var t = u(e) ? e : w(e),
            n = f(arguments, 1);
        return (
            (P[++x] = function () {
                l(t, void 0, n);
            }),
            a(x),
            x
        );
    }),
    (_ = function (e) {
        delete P[e];
    }),
    g
        ? (a = function (e) {
              k.nextTick(F(e));
          })
        : C && C.now
          ? (a = function (e) {
                C.now(F(e));
            })
          : S && !v
            ? ((i = (o = new S()).port2), (o.port1.onmessage = E), (a = c(i.postMessage, i)))
            : s.addEventListener && u(s.postMessage) && !s.importScripts && r && "file:" !== r.protocol && !p(O)
              ? ((a = O), s.addEventListener("message", E, !1))
              : (a =
                    A in m("script")
                        ? function (e) {
                              h.appendChild(m("script"))[A] = function () {
                                  h.removeChild(this), R(e);
                              };
                          }
                        : function (e) {
                              setTimeout(F(e), 0);
                          })),
    (e.exports = { set: b, clear: _ });
