n.d(t, { Z: () => m });
var i = n(951288);
n(647438);
var l = n(120356),
    r = n.n(l),
    a = n(442837),
    c = n(481060),
    o = n(239091),
    s = n(592125),
    u = n(430824),
    d = n(924301),
    _ = n(894017),
    g = n(954313),
    h = n(390966),
    p = n(765305),
    v = n(388032),
    f = n(709380);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function m(e) {
    let { recurrenceId: t, originalScheduledStartTime: l, guildEventId: m, onClick: x, isActive: C } = e,
        j = (0, a.e7)([d.ZP], () => d.ZP.getGuildScheduledEvent(m)),
        y = (0, _.Z)(t, null == j ? void 0 : j.id),
        E = (0, a.e7)([u.Z], () => u.Z.getGuild(null == j ? void 0 : j.guild_id)),
        P = (0, a.e7)([s.Z], () => s.Z.getChannel(null == j ? void 0 : j.channel_id));
    if (null == j) return null;
    let { is_canceled: S = !1 } = null != y ? y : {},
        O =
            (null == y ? void 0 : y.scheduled_start_time) != null
                ? new Date(null == y ? void 0 : y.scheduled_start_time)
                : l,
        k = (0, g.DK)(j),
        Z = S ? p.p1.CANCELED : p.p1.SCHEDULED;
    k === t && (Z = j.status);
    let D =
            (null == j ? void 0 : j.scheduled_start_time) != null
                ? (0, g.lh)(y, O, new Date(null == j ? void 0 : j.scheduled_start_time))
                : null,
        w = (e) => {
            e.stopPropagation(),
                null != E &&
                    (0, o.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e("34261"), n.e("27434")]).then(n.bind(n, 215269));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                b(
                                    {
                                        guildEventId: j.id,
                                        recurrenceId: t,
                                        channel: P,
                                        guild: E,
                                        isRecurrenceItem: !0,
                                    },
                                    n,
                                ),
                            );
                    });
        };
    return (0, i.jsxs)(c.kL8, {
        className: r()(f.container, {
            [f.canceled]: S,
            [f.clickable]: null != x,
            [f.active]: C,
        }),
        onClick: (e) => {
            e.stopPropagation(), S || null == x || x(t);
        },
        onContextMenu: w,
        "aria-label": "",
        children: [
            (0, i.jsx)(h.z, {
                startTime: O.toISOString(),
                status: null != D ? D : Z,
                eventType: j.entity_type,
                guildEventId: j.id,
                recurrenceId: t,
                className: f.timeStatus,
            }),
            S &&
                (0, i.jsx)(c.Text, {
                    variant: "text-sm/semibold",
                    color: "text-danger",
                    className: f.canceledStatus,
                    children: v.intl.string(v.t.fyBVRk),
                }),
            (0, i.jsx)(c.ua7, {
                text: v.intl.string(v.t.UKOtz8),
                position: "top",
                "aria-label": v.intl.string(v.t.bt75u7),
                children: (e) => {
                    var t, n;
                    return (0, i.jsx)(
                        c.P3F,
                        ((t = b({}, e)),
                        (n = n =
                            {
                                onClick: w,
                                className: f.iconButton,
                                children: (0, i.jsx)(c.xhG, {
                                    size: "custom",
                                    color: "currentColor",
                                    width: 20,
                                    height: 20,
                                    className: f.icon,
                                }),
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(n)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                              }),
                        t),
                    );
                },
            }),
        ],
    });
}
