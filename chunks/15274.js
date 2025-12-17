n.d(t, {
    P3: () => p,
    bO: () => f,
    lC: () => _,
});
var r = n(54381);
n(473749);
var i = n(952265),
    a = n(749210),
    o = n(981631),
    s = n(602091);
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
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e) {
    let { eventId: t, recurrenceId: a } = e;
    (0, i.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e("4096"), n.e("92486")]).then(n.bind(n, 697849));
        return (n) =>
            (0, r.jsx)(
                e,
                c(
                    {
                        guildScheduledEventId: t,
                        initialRecurrenceId: a,
                    },
                    n,
                ),
            );
    });
}
async function p(e, t) {
    let { guild_id: n } = e;
    await a.Z.transitionToGuildSync(n, t),
        f({
            eventId: e.id,
            event: e,
        });
}
function _(e, t) {
    (0, i.openModalLazy)(
        async () => {
            let { default: t } = await n.e("21395").then(n.bind(n, 312757));
            return (n) => (0, r.jsx)(t, d(c({}, n), { channel: e }));
        },
        { contextKey: t === o.IlC.POPOUT ? s.u1 : s.z1 },
    );
}
