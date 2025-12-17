t.d(n, { Z: () => x });
var a = t(54381);
t(473749);
var i = t(120356),
    r = t.n(i),
    l = t(442837),
    o = t(28664),
    c = t(481060),
    d = t(239091),
    s = t(592125),
    u = t(430824),
    b = t(924301),
    f = t(894017),
    h = t(854698),
    p = t(390966),
    m = t(765305),
    g = t(388032),
    v = t(591170);
function x(e) {
    let { recurrenceId: n, originalScheduledStartTime: i, guildEventId: x, onClick: _, isActive: C } = e,
        j = (0, l.e7)([b.ZP], () => b.ZP.getGuildScheduledEvent(x)),
        k = (0, f.Z)(n, null == j ? void 0 : j.id),
        I = (0, l.e7)([u.Z], () => u.Z.getGuild(null == j ? void 0 : j.guild_id)),
        N = (0, l.e7)([s.Z], () => s.Z.getChannel(null == j ? void 0 : j.channel_id));
    if (null == j) return null;
    let { is_canceled: Z = !1 } = null != k ? k : {},
        E =
            (null == k ? void 0 : k.scheduled_start_time) != null
                ? new Date(null == k ? void 0 : k.scheduled_start_time)
                : i,
        y = (0, h.DK)(j),
        S = Z ? m.p1.CANCELED : m.p1.SCHEDULED;
    y === n && (S = j.status);
    let w =
            (null == j ? void 0 : j.scheduled_start_time) != null
                ? (0, h.lh)(k, E, new Date(null == j ? void 0 : j.scheduled_start_time))
                : null,
        P = (e) => {
            e.stopPropagation(),
                null != I &&
                    (0, d.jW)(e, async () => {
                        let { default: e } = await Promise.all([t.e("91973"), t.e("470")]).then(t.bind(t, 215269));
                        return (t) =>
                            (0, a.jsx)(
                                e,
                                (function (e) {
                                    for (var n = 1; n < arguments.length; n++) {
                                        var t = null != arguments[n] ? arguments[n] : {},
                                            a = Object.keys(t);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (a = a.concat(
                                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                }),
                                            )),
                                            a.forEach(function (n) {
                                                var a;
                                                (a = t[n]),
                                                    n in e
                                                        ? Object.defineProperty(e, n, {
                                                              value: a,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[n] = a);
                                            });
                                    }
                                    return e;
                                })(
                                    {
                                        guildEventId: j.id,
                                        recurrenceId: n,
                                        channel: N,
                                        guild: I,
                                        isRecurrenceItem: !0,
                                    },
                                    t,
                                ),
                            );
                    });
        };
    return (0, a.jsxs)(c.kL8, {
        className: r()(v.container, {
            [v.canceled]: Z,
            [v.clickable]: null != _,
            [v.active]: C,
        }),
        onClick: (e) => {
            e.stopPropagation(), Z || null == _ || _(n);
        },
        onContextMenu: P,
        "aria-label": "",
        children: [
            (0, a.jsx)(p.z, {
                startTime: E.toISOString(),
                status: null != w ? w : S,
                eventType: j.entity_type,
                guildEventId: j.id,
                recurrenceId: n,
                className: v.timeStatus,
            }),
            Z &&
                (0, a.jsx)(c.Text, {
                    variant: "text-sm/semibold",
                    color: "text-feedback-critical",
                    className: v.canceledStatus,
                    children: g.intl.string(g.t.fyBVRm),
                }),
            (0, a.jsx)(o.u, {
                text: g.intl.string(g.t["UKOtz+"]),
                position: "top",
                "aria-label": g.intl.string(g.t.bt75uw),
                children: (0, a.jsx)(c.P3F, {
                    onClick: P,
                    className: v.iconButton,
                    children: (0, a.jsx)(c.xhG, {
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
