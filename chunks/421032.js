t.d(n, { Z: () => v });
var i = t(951288);
t(647438);
var a = t(120356),
    r = t.n(a),
    l = t(442837),
    o = t(28664),
    c = t(481060),
    s = t(239091),
    d = t(592125),
    u = t(430824),
    _ = t(924301),
    p = t(894017),
    g = t(954313),
    m = t(390966),
    b = t(765305),
    h = t(388032),
    f = t(709380);
function v(e) {
    let { recurrenceId: n, originalScheduledStartTime: a, guildEventId: v, onClick: x, isActive: C } = e,
        I = (0, l.e7)([_.ZP], () => _.ZP.getGuildScheduledEvent(v)),
        j = (0, p.Z)(n, null == I ? void 0 : I.id),
        k = (0, l.e7)([u.Z], () => u.Z.getGuild(null == I ? void 0 : I.guild_id)),
        w = (0, l.e7)([d.Z], () => d.Z.getChannel(null == I ? void 0 : I.channel_id));
    if (null == I) return null;
    let { is_canceled: y = !1 } = null != j ? j : {},
        N =
            (null == j ? void 0 : j.scheduled_start_time) != null
                ? new Date(null == j ? void 0 : j.scheduled_start_time)
                : a,
        S = (0, g.DK)(I),
        E = y ? b.p1.CANCELED : b.p1.SCHEDULED;
    S === n && (E = I.status);
    let P =
            (null == I ? void 0 : I.scheduled_start_time) != null
                ? (0, g.lh)(j, N, new Date(null == I ? void 0 : I.scheduled_start_time))
                : null,
        Z = (e) => {
            e.stopPropagation(),
                null != k &&
                    (0, s.jW)(e, async () => {
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
                                        guildEventId: I.id,
                                        recurrenceId: n,
                                        channel: w,
                                        guild: k,
                                        isRecurrenceItem: !0,
                                    },
                                    t,
                                ),
                            );
                    });
        };
    return (0, i.jsxs)(c.kL8, {
        className: r()(f.container, {
            [f.canceled]: y,
            [f.clickable]: null != x,
            [f.active]: C,
        }),
        onClick: (e) => {
            e.stopPropagation(), y || null == x || x(n);
        },
        onContextMenu: Z,
        "aria-label": "",
        children: [
            (0, i.jsx)(m.z, {
                startTime: N.toISOString(),
                status: null != P ? P : E,
                eventType: I.entity_type,
                guildEventId: I.id,
                recurrenceId: n,
                className: f.timeStatus,
            }),
            y &&
                (0, i.jsx)(c.Text, {
                    variant: "text-sm/semibold",
                    color: "text-danger",
                    className: f.canceledStatus,
                    children: h.intl.string(h.t.fyBVRk),
                }),
            (0, i.jsx)(o.u, {
                text: h.intl.string(h.t.UKOtz8),
                position: "top",
                "aria-label": h.intl.string(h.t.bt75u7),
                children: (0, i.jsx)(c.P3F, {
                    onClick: Z,
                    className: f.iconButton,
                    children: (0, i.jsx)(c.xhG, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: f.icon,
                    }),
                }),
            }),
        ],
    });
}
