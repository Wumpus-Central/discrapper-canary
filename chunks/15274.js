n.d(t, {
    P3: () => _,
    bO: () => f,
    lC: () => p
});
var r = n(255367);
n(73800);
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
    let { eventId: t, parentGuildId: a, recurrenceId: o } = e;
    (0, i.ZD)(async () => {
        let { default: e } = await Promise.all([n.e('18543'), n.e('15483'), n.e('22347'), n.e('70657')]).then(n.bind(n, 697849));
        return (n) =>
            (0, r.jsx)(
                e,
                c(
                    {
                        guildScheduledEventId: t,
                        parentGuildId: a,
                        initialRecurrenceId: o
                    },
                    n
                )
            );
    });
}
async function _(e, t) {
    let { guild_id: n } = e;
    await a.Z.transitionToGuildSync(n, t),
        f({
            eventId: e.id,
            event: e
        });
}
function p(e, t) {
    (0, i.ZD)(
        async () => {
            let { default: t } = await Promise.all([n.e('42743'), n.e('22569')]).then(n.bind(n, 312757));
            return (n) => (0, r.jsx)(t, d(c({}, n), { channel: e }));
        },
        { contextKey: t === o.IlC.POPOUT ? s.u1 : s.z1 }
    );
}
