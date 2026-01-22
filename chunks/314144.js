var r,
    i,
    a,
    s,
    o = n(860511),
    l = n(985848),
    c = n(221015),
    u = n(339626),
    d = n(210140),
    f = n(503628),
    p = n(469520),
    _ = n(192819),
    h = n(447280),
    m = n(627),
    g = n(705333),
    E = n(13570),
    b = o.setImmediate,
    y = o.clearImmediate,
    O = o.process,
    A = o.Dispatch,
    v = o.Function,
    S = o.MessageChannel,
    I = o.String,
    T = 0,
    C = {},
    N = "onreadystatechange";
f(function () {
    r = o.location;
});
var R = function (e) {
        if (d(C, e)) {
            var t = C[e];
            delete C[e], t();
        }
    },
    w = function (e) {
        return function () {
            R(e);
        };
    },
    P = function (e) {
        R(e.data);
    },
    D = function (e) {
        o.postMessage(I(e), r.protocol + "//" + r.host);
    };
(b && y) ||
    ((b = function (e) {
        m(arguments.length, 1);
        var t = u(e) ? e : v(e),
            n = _(arguments, 1);
        return (
            (C[++T] = function () {
                l(t, void 0, n);
            }),
            i(T),
            T
        );
    }),
    (y = function (e) {
        delete C[e];
    }),
    E
        ? (i = function (e) {
              O.nextTick(w(e));
          })
        : A && A.now
          ? (i = function (e) {
                A.now(w(e));
            })
          : S && !g
            ? ((s = (a = new S()).port2), (a.port1.onmessage = P), (i = c(s.postMessage, s)))
            : o.addEventListener && u(o.postMessage) && !o.importScripts && r && "file:" !== r.protocol && !f(D)
              ? ((i = D), o.addEventListener("message", P, !1))
              : (i =
                    N in h("script")
                        ? function (e) {
                              p.appendChild(h("script"))[N] = function () {
                                  p.removeChild(this), R(e);
                              };
                          }
                        : function (e) {
                              setTimeout(w(e), 0);
                          })),
    (e.exports = {
        set: b,
        clear: y,
    });
