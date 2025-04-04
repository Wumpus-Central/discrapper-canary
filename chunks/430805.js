var r,
    o,
    a,
    i,
    s = n(424353),
    c = n(498996),
    l = n(324474),
    u = n(971428),
    d = n(185698),
    p = n(779688),
    h = n(604417),
    f = n(689933),
    m = n(442119),
    y = n(592802),
    v = n(179156),
    g = n(270301),
    b = s.setImmediate,
    _ = s.clearImmediate,
    k = s.process,
    C = s.Dispatch,
    Z = s.Function,
    w = s.MessageChannel,
    S = s.String,
    N = 0,
    x = {},
    P = 'onreadystatechange';
p(function () {
    r = s.location;
});
var A = function (e) {
        if (d(x, e)) {
            var t = x[e];
            delete x[e], t();
        }
    },
    R = function (e) {
        return function () {
            A(e);
        };
    },
    F = function (e) {
        A(e.data);
    },
    O = function (e) {
        s.postMessage(S(e), r.protocol + '//' + r.host);
    };
(b && _) ||
    ((b = function (e) {
        y(arguments.length, 1);
        var t = u(e) ? e : Z(e),
            n = f(arguments, 1);
        return (
            (x[++N] = function () {
                c(t, void 0, n);
            }),
            o(N),
            N
        );
    }),
    (_ = function (e) {
        delete x[e];
    }),
    g
        ? (o = function (e) {
              k.nextTick(R(e));
          })
        : C && C.now
          ? (o = function (e) {
                C.now(R(e));
            })
          : w && !v
            ? ((i = (a = new w()).port2), (a.port1.onmessage = F), (o = l(i.postMessage, i)))
            : s.addEventListener && u(s.postMessage) && !s.importScripts && r && 'file:' !== r.protocol && !p(O)
              ? ((o = O), s.addEventListener('message', F, !1))
              : (o =
                    P in m('script')
                        ? function (e) {
                              h.appendChild(m('script'))[P] = function () {
                                  h.removeChild(this), A(e);
                              };
                          }
                        : function (e) {
                              setTimeout(R(e), 0);
                          })),
    (e.exports = {
        set: b,
        clear: _
    });
