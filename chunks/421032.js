t.d(n, { Z: () => b });
var i = t(951288);
t(647438);
var l = t(120356),
    r = t.n(l),
    a = t(442837),
    c = t(28664),
    s = t(481060),
    o = t(239091),
    u = t(592125),
    d = t(430824),
    _ = t(924301),
    h = t(894017),
    g = t(954313),
    v = t(390966),
    f = t(765305),
    p = t(388032),
    m = t(709380);
function b(e) {
    let { recurrenceId: n, originalScheduledStartTime: l, guildEventId: b, onClick: x, isActive: C } = e,
        E = (0, a.e7)([_.ZP], () => _.ZP.getGuildScheduledEvent(b)),
        Z = (0, h.Z)(n, null == E ? void 0 : E.id),
        S = (0, a.e7)([d.Z], () => d.Z.getGuild(null == E ? void 0 : E.guild_id)),
        j = (0, a.e7)([u.Z], () => u.Z.getChannel(null == E ? void 0 : E.channel_id));
    if (null == E) return null;
    let { is_canceled: k = !1 } = null != Z ? Z : {},
        y =
            (null == Z ? void 0 : Z.scheduled_start_time) != null
                ? new Date(null == Z ? void 0 : Z.scheduled_start_time)
                : l,
        P = (0, g.DK)(E),
        w = k ? f.p1.CANCELED : f.p1.SCHEDULED;
    P === n && (w = E.status);
    let D =
            (null == E ? void 0 : E.scheduled_start_time) != null
                ? (0, g.lh)(Z, y, new Date(null == E ? void 0 : E.scheduled_start_time))
                : null,
        I = (e) => {
            e.stopPropagation(),
                null != S &&
                    (0, o.jW)(e, async () => {
                        let { default: e } = await Promise.all([t.e("91973"), t.e("470")]).then(t.bind(t, 215269));
                        return (t) =>
                            (0, i.jsx)(
                                e,
                                (function (e) {
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
                                })(
                                    {
                                        guildEventId: E.id,
                                        recurrenceId: n,
                                        channel: j,
                                        guild: S,
                                        isRecurrenceItem: !0,
                                    },
                                    t,
                                ),
                            );
                    });
        };
    return (0, i.jsxs)(s.kL8, {
        className: r()(m.container, {
            [m.canceled]: k,
            [m.clickable]: null != x,
            [m.active]: C,
        }),
        onClick: (e) => {
            e.stopPropagation(), k || null == x || x(n);
        },
        onContextMenu: I,
        "aria-label": "",
        children: [
            (0, i.jsx)(v.z, {
                startTime: y.toISOString(),
                status: null != D ? D : w,
                eventType: E.entity_type,
                guildEventId: E.id,
                recurrenceId: n,
                className: m.timeStatus,
            }),
            k &&
                (0, i.jsx)(s.Text, {
                    variant: "text-sm/semibold",
                    color: "text-danger",
                    className: m.canceledStatus,
                    children: p.intl.string(p.t.fyBVRm),
                }),
            (0, i.jsx)(c.u, {
                text: p.intl.string(p.t["UKOtz+"]),
                position: "top",
                "aria-label": p.intl.string(p.t.bt75uw),
                children: (0, i.jsx)(s.P3F, {
                    onClick: I,
                    className: m.iconButton,
                    children: (0, i.jsx)(s.xhG, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: m.icon,
                    }),
                }),
            }),
        ],
    });
}
