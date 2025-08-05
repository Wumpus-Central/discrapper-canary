n.d(t, { Z: () => O });
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(692547),
    o = n(481060),
    s = n(357156),
    l = n(592125),
    c = n(15274),
    u = n(924301),
    d = n(554747),
    f = n(854698),
    _ = n(688641),
    p = n(388032),
    h = n(268813);
function m(e, t, n) {
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
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            }));
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = 20;
function O(e) {
    let { channelId: t } = e,
        m = (0, i.e7)([l.Z], () => l.Z.getChannel(t), [t]),
        E = (0, d.sz)(t),
        O = null != (0, d.qY)(t),
        { canManageGuildEvent: v } = (0, s.XJ)(m),
        I = (0, i.cj)([u.ZP], () => E.reduce((e, t) => ((e[t.id] = u.ZP.getUserCount(t.id, (0, f.DK)(t))), e), {}));
    if (E.length < 1 || O) return null;
    function T(e) {
        v(e)
            ? (0, o.ZDy)(async () => {
                  let { default: t } = await Promise.all([n.e('22347'), n.e('84722'), n.e('30057')]).then(n.bind(n, 296864));
                  return (n) => (0, r.jsx)(t, b(g({}, n), { event: e }));
              })
            : (0, c.bO)({
                  eventId: e.id,
                  parentGuildId: e.guild_id
              });
    }
    return (0, r.jsx)(r.Fragment, {
        children: E.map((e) =>
            (0, r.jsx)(
                _.Z,
                {
                    icon: (0, r.jsx)(o.Que, {
                        size: 'custom',
                        color: 'currentColor',
                        height: y,
                        width: y
                    }),
                    color: a.Z.unsafe_rawColors.GREEN_360.css,
                    title: p.intl.formatToPlainString(v(e) ? p.t['1vGXqK'] : p.t.xMJylZ, { eventName: e.name }),
                    description: p.intl.formatToPlainString(p.t.PTebCQ, { startTime: (0, f.ub)(e.scheduled_start_time).startDateTimeString }),
                    onClick: () => T(e),
                    userCount: I[e.id],
                    className: h.eventPrompt
                },
                e.id
            )
        )
    });
}
