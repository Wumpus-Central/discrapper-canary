n.d(t, { $: () => f }), n(951288);
var r = n(647438),
    i = n(392711),
    o = n.n(i);
n(902704);
var a = n(941028),
    s = n(960048);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let d = !1;
function f(e, t) {
    r.useEffect(
        () => (
            o().forEach(e, (e, n) => {
                !d &&
                    e.length > 50 &&
                    ((d = !0),
                    s.Z.captureMessage("SubscribeGuildMembers called with more than 50 userIds.", {
                        extra: {
                            userIdsCount: e.length,
                            guildId: n,
                            reason: t,
                        },
                    })),
                    (0, a.ym)(n, e);
            }),
            () => {
                o().forEach(e, (e, t) => (0, a.w5)(t, e));
            }
        ),
        [e, t],
    );
}
