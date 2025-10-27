t.d(n, { Z: () => f });
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
    h = t(765305),
    b = t(388032),
    v = t(709380);
function f(e) {
    let { recurrenceId: n, originalScheduledStartTime: a, guildEventId: f, onClick: x, isActive: C } = e,
        I = (0, l.e7)([_.ZP], () => _.ZP.getGuildScheduledEvent(f)),
        j = (0, p.Z)(n, null == I ? void 0 : I.id),
        k = (0, l.e7)([u.Z], () => u.Z.getGuild(null == I ? void 0 : I.guild_id)),
        w = (0, l.e7)([d.Z], () => d.Z.getChannel(null == I ? void 0 : I.channel_id));
    if (null == I) return null;
    let { is_canceled: y = !1 } = null != j ? j : {},
        N =
            (null == j ? void 0 : j.scheduled_start_time) != null
                ? new Date(null == j ? void 0 : j.scheduled_start_time)
                : a,
        Z = (0, g.DK)(I),
        S = y ? h.p1.CANCELED : h.p1.SCHEDULED;
    Z === n && (S = I.status);
    let E =
            (null == I ? void 0 : I.scheduled_start_time) != null
                ? (0, g.lh)(j, N, new Date(null == I ? void 0 : I.scheduled_start_time))
                : null,
        P = (e) => {
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
        className: r()(v.container, {
            [v.canceled]: y,
            [v.clickable]: null != x,
            [v.active]: C,
        }),
        onClick: (e) => {
            e.stopPropagation(), y || null == x || x(n);
        },
        onContextMenu: P,
        "aria-label": "",
        children: [
            (0, i.jsx)(m.z, {
                startTime: N.toISOString(),
                status: null != E ? E : S,
                eventType: I.entity_type,
                guildEventId: I.id,
                recurrenceId: n,
                className: v.timeStatus,
            }),
            y &&
                (0, i.jsx)(c.Text, {
                    variant: "text-sm/semibold",
                    color: "text-danger",
                    className: v.canceledStatus,
                    children: b.intl.string(b.t.fyBVRm),
                }),
            (0, i.jsx)(o.u, {
                text: b.intl.string(b.t["UKOtz+"]),
                position: "top",
                "aria-label": b.intl.string(b.t.bt75uw),
                children: (0, i.jsx)(c.P3F, {
                    onClick: P,
                    className: v.iconButton,
                    children: (0, i.jsx)(c.xhG, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: v.icon,
                    }),
                }),
            }),
        ],
    });
}
