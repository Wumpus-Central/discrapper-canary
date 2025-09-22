t.d(n, { Z: () => v });
var i = t(951288);
t(647438);
var r = t(120356),
    a = t.n(r),
    l = t(442837),
    o = t(481060),
    c = t(239091),
    s = t(592125),
    d = t(430824),
    u = t(924301),
    _ = t(894017),
    b = t(954313),
    p = t(390966),
    f = t(765305),
    h = t(388032),
    g = t(709380);
function m(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            i = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            i.forEach(function (n) {
                var i;
                (i = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = i);
            });
    }
    return e;
}
function v(e) {
    let { recurrenceId: n, originalScheduledStartTime: r, guildEventId: v, onClick: x, isActive: C } = e,
        j = (0, l.e7)([u.ZP], () => u.ZP.getGuildScheduledEvent(v)),
        I = (0, _.Z)(n, null == j ? void 0 : j.id),
        y = (0, l.e7)([d.Z], () => d.Z.getGuild(null == j ? void 0 : j.guild_id)),
        w = (0, l.e7)([s.Z], () => s.Z.getChannel(null == j ? void 0 : j.channel_id));
    if (null == j) return null;
    let { is_canceled: P = !1 } = null != I ? I : {},
        k =
            (null == I ? void 0 : I.scheduled_start_time) != null
                ? new Date(null == I ? void 0 : I.scheduled_start_time)
                : r,
        Z = (0, b.DK)(j),
        E = P ? f.p1.CANCELED : f.p1.SCHEDULED;
    Z === n && (E = j.status);
    let N =
            (null == j ? void 0 : j.scheduled_start_time) != null
                ? (0, b.lh)(I, k, new Date(null == j ? void 0 : j.scheduled_start_time))
                : null,
        S = (e) => {
            e.stopPropagation(),
                null != y &&
                    (0, c.jW)(e, async () => {
                        let { default: e } = await Promise.all([t.e("91973"), t.e("470")]).then(t.bind(t, 215269));
                        return (t) =>
                            (0, i.jsx)(
                                e,
                                m(
                                    {
                                        guildEventId: j.id,
                                        recurrenceId: n,
                                        channel: w,
                                        guild: y,
                                        isRecurrenceItem: !0,
                                    },
                                    t,
                                ),
                            );
                    });
        };
    return (0, i.jsxs)(o.kL8, {
        className: a()(g.container, {
            [g.canceled]: P,
            [g.clickable]: null != x,
            [g.active]: C,
        }),
        onClick: (e) => {
            e.stopPropagation(), P || null == x || x(n);
        },
        onContextMenu: S,
        "aria-label": "",
        children: [
            (0, i.jsx)(p.z, {
                startTime: k.toISOString(),
                status: null != N ? N : E,
                eventType: j.entity_type,
                guildEventId: j.id,
                recurrenceId: n,
                className: g.timeStatus,
            }),
            P &&
                (0, i.jsx)(o.Text, {
                    variant: "text-sm/semibold",
                    color: "text-danger",
                    className: g.canceledStatus,
                    children: h.intl.string(h.t.fyBVRk),
                }),
            (0, i.jsx)(o.ua7, {
                text: h.intl.string(h.t.UKOtz8),
                position: "top",
                "aria-label": h.intl.string(h.t.bt75u7),
                children: (e) => {
                    var n, t;
                    return (0, i.jsx)(
                        o.P3F,
                        ((n = m({}, e)),
                        (t = t =
                            {
                                onClick: S,
                                className: g.iconButton,
                                children: (0, i.jsx)(o.xhG, {
                                    size: "custom",
                                    color: "currentColor",
                                    width: 20,
                                    height: 20,
                                    className: g.icon,
                                }),
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
                            : (function (e, n) {
                                  var t = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      t.push.apply(t, i);
                                  }
                                  return t;
                              })(Object(t)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
                              }),
                        n),
                    );
                },
            }),
        ],
    });
}
