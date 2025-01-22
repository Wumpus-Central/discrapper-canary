var i,
    a,
    o,
    s,
    l = r(161581),
    u = r(197187),
    c = r(566885),
    d = r(354848),
    f = r(740362),
    p = r(936940),
    h = r(620623),
    _ = r(50754),
    m = r(722063),
    g = r(202934),
    E = r(531460),
    v = r(391673),
    y = l.setImmediate,
    b = l.clearImmediate,
    I = l.process,
    T = l.Dispatch,
    S = l.Function,
    A = l.MessageChannel,
    C = l.String,
    N = 0,
    R = {},
    O = 'onreadystatechange';
p(function () {
    i = l.location;
});
var D = function (e) {
        if (f(R, e)) {
            var n = R[e];
            delete R[e], n();
        }
    },
    L = function (e) {
        return function () {
            D(e);
        };
    },
    x = function (e) {
        D(e.data);
    },
    w = function (e) {
        l.postMessage(C(e), i.protocol + '//' + i.host);
    };
(!y || !b) &&
    ((y = function (e) {
        g(arguments.length, 1);
        var n = d(e) ? e : S(e),
            r = _(arguments, 1);
        return (
            (R[++N] = function () {
                u(n, void 0, r);
            }),
            a(N),
            N
        );
    }),
    (b = function (e) {
        delete R[e];
    }),
    v
        ? (a = function (e) {
              I.nextTick(L(e));
          })
        : T && T.now
          ? (a = function (e) {
                T.now(L(e));
            })
          : A && !E
            ? ((s = (o = new A()).port2), (o.port1.onmessage = x), (a = c(s.postMessage, s)))
            : l.addEventListener && d(l.postMessage) && !l.importScripts && i && 'file:' !== i.protocol && !p(w)
              ? ((a = w), l.addEventListener('message', x, !1))
              : (a =
                    O in m('script')
                        ? function (e) {
                              h.appendChild(m('script'))[O] = function () {
                                  h.removeChild(this), D(e);
                              };
                          }
                        : function (e) {
                              setTimeout(L(e), 0);
                          })),
    (e.exports = {
        set: y,
        clear: b
    });
