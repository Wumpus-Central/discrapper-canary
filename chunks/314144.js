"use strict";
var r,
    i,
    a,
    s,
    o = n(860511),
    l = n(985848),
    u = n(221015),
    c = n(339626),
    d = n(210140),
    _ = n(503628),
    f = n(469520),
    p = n(192819),
    h = n(447280),
    m = n(627),
    g = n(705333),
    E = n(13570),
    A = o.setImmediate,
    I = o.clearImmediate,
    T = o.process,
    y = o.Dispatch,
    S = o.Function,
    v = o.MessageChannel,
    C = o.String,
    b = 0,
    N = {},
    R = "onreadystatechange";
_(function () {
    r = o.location;
});
var O = function (e) {
        if (d(N, e)) {
            var t = N[e];
            delete N[e], t();
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
    w = function (e) {
        o.postMessage(C(e), r.protocol + "//" + r.host);
    };
(A && I) ||
    ((A = function (e) {
        m(arguments.length, 1);
        var t = c(e) ? e : S(e),
            n = p(arguments, 1);
        return (
            (N[++b] = function () {
                l(t, void 0, n);
            }),
            i(b),
            b
        );
    }),
    (I = function (e) {
        delete N[e];
    }),
    E
        ? (i = function (e) {
              T.nextTick(D(e));
          })
        : y && y.now
          ? (i = function (e) {
                y.now(D(e));
            })
          : v && !g
            ? ((s = (a = new v()).port2), (a.port1.onmessage = L), (i = u(s.postMessage, s)))
            : o.addEventListener && c(o.postMessage) && !o.importScripts && r && "file:" !== r.protocol && !_(w)
              ? ((i = w), o.addEventListener("message", L, !1))
              : (i =
                    R in h("script")
                        ? function (e) {
                              f.appendChild(h("script"))[R] = function () {
                                  f.removeChild(this), O(e);
                              };
                          }
                        : function (e) {
                              setTimeout(D(e), 0);
                          })),
    (e.exports = { set: A, clear: I });
