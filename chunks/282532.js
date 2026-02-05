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
    A = s.clearImmediate,
    _ = s.process,
    k = s.Dispatch,
    C = s.Function,
    w = s.MessageChannel,
    S = s.String,
    N = 0,
    x = {},
    P = "onreadystatechange";
p(function () {
    r = s.location;
});
var R = function (e) {
        if (d(x, e)) {
            var t = x[e];
            delete x[e], t();
        }
    },
    F = function (e) {
        return function () {
            R(e);
        };
    },
    O = function (e) {
        R(e.data);
    },
    E = function (e) {
        s.postMessage(S(e), r.protocol + "//" + r.host);
    };
(b && A) ||
    ((b = function (e) {
        y(arguments.length, 1);
        var t = u(e) ? e : C(e),
            n = f(arguments, 1);
        return (
            (x[++N] = function () {
                l(t, void 0, n);
            }),
            a(N),
            N
        );
    }),
    (A = function (e) {
        delete x[e];
    }),
    g
        ? (a = function (e) {
              _.nextTick(F(e));
          })
        : k && k.now
          ? (a = function (e) {
                k.now(F(e));
            })
          : w && !v
            ? ((i = (o = new w()).port2), (o.port1.onmessage = O), (a = c(i.postMessage, i)))
            : s.addEventListener && u(s.postMessage) && !s.importScripts && r && "file:" !== r.protocol && !p(E)
              ? ((a = E), s.addEventListener("message", O, !1))
              : (a =
                    P in m("script")
                        ? function (e) {
                              h.appendChild(m("script"))[P] = function () {
                                  h.removeChild(this), R(e);
                              };
                          }
                        : function (e) {
                              setTimeout(F(e), 0);
                          })),
    (e.exports = { set: b, clear: A });
