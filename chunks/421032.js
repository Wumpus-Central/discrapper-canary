n.d(e, { Z: () => j });
var l = n(951288);
n(647438);
var i = n(120356),
    r = n.n(i),
    s = n(442837),
    a = n(481060),
    u = n(239091),
    c = n(592125),
    o = n(430824),
    d = n(924301),
    h = n(894017),
    g = n(954313),
    m = n(390966),
    p = n(765305),
    v = n(388032),
    f = n(709380);
function b(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }),
            )),
            l.forEach(function (e) {
                var l;
                (l = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[e] = l);
            });
    }
    return t;
}
function j(t) {
    let { recurrenceId: e, originalScheduledStartTime: i, guildEventId: j, onClick: x, isActive: y } = t,
        C = (0, s.e7)([d.ZP], () => d.ZP.getGuildScheduledEvent(j)),
        O = (0, h.Z)(e, null == C ? void 0 : C.id),
        P = (0, s.e7)([o.Z], () => o.Z.getGuild(null == C ? void 0 : C.guild_id)),
        E = (0, s.e7)([c.Z], () => c.Z.getChannel(null == C ? void 0 : C.channel_id));
    if (null == C) return null;
    let { is_canceled: Z = !1 } = null != O ? O : {},
        k =
            (null == O ? void 0 : O.scheduled_start_time) != null
                ? new Date(null == O ? void 0 : O.scheduled_start_time)
                : i,
        D = (0, g.DK)(C),
        _ = Z ? p.p1.CANCELED : p.p1.SCHEDULED;
    D === e && (_ = C.status);
    let S =
            (null == C ? void 0 : C.scheduled_start_time) != null
                ? (0, g.lh)(O, k, new Date(null == C ? void 0 : C.scheduled_start_time))
                : null,
        w = (t) => {
            t.stopPropagation(),
                null != P &&
                    (0, u.jW)(t, async () => {
                        let { default: t } = await Promise.all([
                            n.e("34261"),
                            n.e("42743"),
                            n.e("27434"),
                            n.e("62318"),
                        ]).then(n.bind(n, 215269));
                        return (n) =>
                            (0, l.jsx)(
                                t,
                                b(
                                    {
                                        guildEventId: C.id,
                                        recurrenceId: e,
                                        channel: E,
                                        guild: P,
                                        isRecurrenceItem: !0,
                                    },
                                    n,
                                ),
                            );
                    });
        };
    return (0, l.jsxs)(a.kL8, {
        className: r()(f.container, {
            [f.canceled]: Z,
            [f.clickable]: null != x,
            [f.active]: y,
        }),
        onClick: (t) => {
            t.stopPropagation(), Z || null == x || x(e);
        },
        onContextMenu: w,
        "aria-label": "",
        children: [
            (0, l.jsx)(m.z, {
                startTime: k.toISOString(),
                status: null != S ? S : _,
                eventType: C.entity_type,
                guildEventId: C.id,
                recurrenceId: e,
                className: f.timeStatus,
            }),
            Z &&
                (0, l.jsx)(a.Text, {
                    variant: "text-sm/semibold",
                    color: "text-danger",
                    className: f.canceledStatus,
                    children: v.intl.string(v.t.fyBVRk),
                }),
            (0, l.jsx)(a.ua7, {
                text: v.intl.string(v.t.UKOtz8),
                position: "top",
                "aria-label": v.intl.string(v.t.bt75u7),
                children: (t) => {
                    var e, n;
                    return (0, l.jsx)(
                        a.P3F,
                        ((e = b({}, t)),
                        (n = n =
                            {
                                onClick: w,
                                className: f.iconButton,
                                children: (0, l.jsx)(a.xhG, {
                                    size: "custom",
                                    color: "currentColor",
                                    width: 20,
                                    height: 20,
                                    className: f.icon,
                                }),
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                            : (function (t, e) {
                                  var n = Object.keys(t);
                                  if (Object.getOwnPropertySymbols) {
                                      var l = Object.getOwnPropertySymbols(t);
                                      n.push.apply(n, l);
                                  }
                                  return n;
                              })(Object(n)).forEach(function (t) {
                                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                              }),
                        e),
                    );
                },
            }),
        ],
    });
}
