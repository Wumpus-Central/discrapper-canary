"use strict";
var i,
    r,
    s,
    a,
    o = n(860511),
    l = n(985848),
    u = n(221015),
    c = n(339626),
    d = n(210140),
    _ = n(503628),
    h = n(469520),
    f = n(192819),
    p = n(447280),
    E = n(627),
    m = n(705333),
    g = n(13570),
    A = o.setImmediate,
    I = o.clearImmediate,
    T = o.process,
    S = o.Dispatch,
    y = o.Function,
    C = o.MessageChannel,
    N = o.String,
    v = 0,
    R = {},
    O = "onreadystatechange";
_(function () {
    i = o.location;
});
var b = function (e) {
        if (d(R, e)) {
            var t = R[e];
            delete R[e], t();
        }
    },
    D = function (e) {
        return function () {
            b(e);
        };
    },
    L = function (e) {
        b(e.data);
    },
    w = function (e) {
        o.postMessage(N(e), i.protocol + "//" + i.host);
    };
(A && I) ||
    ((A = function (e) {
        E(arguments.length, 1);
        var t = c(e) ? e : y(e),
            n = f(arguments, 1);
        return (
            (R[++v] = function () {
                l(t, void 0, n);
            }),
            r(v),
            v
        );
    }),
    (I = function (e) {
        delete R[e];
    }),
    g
        ? (r = function (e) {
              T.nextTick(D(e));
          })
        : S && S.now
          ? (r = function (e) {
                S.now(D(e));
            })
          : C && !m
            ? ((a = (s = new C()).port2), (s.port1.onmessage = L), (r = u(a.postMessage, a)))
            : o.addEventListener && c(o.postMessage) && !o.importScripts && i && "file:" !== i.protocol && !_(w)
              ? ((r = w), o.addEventListener("message", L, !1))
              : (r =
                    O in p("script")
                        ? function (e) {
                              h.appendChild(p("script"))[O] = function () {
                                  h.removeChild(this), b(e);
                              };
                          }
                        : function (e) {
                              setTimeout(D(e), 0);
                          })),
    (e.exports = { set: A, clear: I });
