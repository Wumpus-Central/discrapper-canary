var e,
    o,
    i,
    u,
    c = r(127849),
    a = r(636881),
    f = r(48657),
    s = r(880181),
    l = r(77025),
    p = r(621523),
    d = r(620394),
    _ = r(992174),
    h = r(809290),
    y = r(338045),
    b = r(266782),
    g = r(426625),
    v = c.setImmediate,
    w = c.clearImmediate,
    m = c.process,
    x = c.Dispatch,
    A = c.Function,
    O = c.MessageChannel,
    T = c.String,
    E = 0,
    S = {},
    I = 'onreadystatechange';
p(function () {
    e = c.location;
});
var R = function (t) {
        if (l(S, t)) {
            var n = S[t];
            delete S[t], n();
        }
    },
    k = function (t) {
        return function () {
            R(t);
        };
    },
    j = function (t) {
        R(t.data);
    },
    P = function (t) {
        c.postMessage(T(t), e.protocol + '//' + e.host);
    };
(v && w) ||
    ((v = function (t) {
        y(arguments.length, 1);
        var n = s(t) ? t : A(t),
            r = _(arguments, 1);
        return (
            (S[++E] = function () {
                a(n, void 0, r);
            }),
            o(E),
            E
        );
    }),
    (w = function (t) {
        delete S[t];
    }),
    g
        ? (o = function (t) {
              m.nextTick(k(t));
          })
        : x && x.now
          ? (o = function (t) {
                x.now(k(t));
            })
          : O && !b
            ? ((u = (i = new O()).port2), (i.port1.onmessage = j), (o = f(u.postMessage, u)))
            : c.addEventListener && s(c.postMessage) && !c.importScripts && e && 'file:' !== e.protocol && !p(P)
              ? ((o = P), c.addEventListener('message', j, !1))
              : (o =
                    I in h('script')
                        ? function (t) {
                              d.appendChild(h('script'))[I] = function () {
                                  d.removeChild(this), R(t);
                              };
                          }
                        : function (t) {
                              setTimeout(k(t), 0);
                          })),
    (t.exports = {
        set: v,
        clear: w
    });
