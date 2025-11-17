n.d(t, { $: () => f }), n(54381);
var r = n(473749),
    i = n(392711),
    a = n.n(i);
n(902704);
var o = n(941028),
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
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let d = !1;
function f(e, t) {
    r.useEffect(
        () => (
            a().forEach(e, (e, n) => {
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
                    (0, o.ym)(n, e);
            }),
            () => {
                a().forEach(e, (e, t) => (0, o.w5)(t, e));
            }
        ),
        [e, t],
    );
}
