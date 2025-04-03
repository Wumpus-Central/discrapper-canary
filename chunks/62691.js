var r,
    o,
    a,
    i,
    s = n(668530),
    c = n(156741),
    l = n(476508),
    u = n(735471),
    d = n(141603),
    p = n(821819),
    h = n(439230),
    f = n(780524),
    m = n(535538),
    y = n(274745),
    v = n(378636),
    g = n(42433),
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
