t.d(n, { Z: () => x });
var a = t(54381);
t(473749);
var i = t(120356),
    r = t.n(i),
    l = t(442837),
    c = t(28664),
    o = t(481060),
    d = t(239091),
    s = t(592125),
    u = t(430824),
    b = t(924301),
    f = t(894017),
    p = t(854698),
    m = t(390966),
    h = t(765305),
    v = t(388032),
    g = t(591170);
function x(e) {
    let { recurrenceId: n, originalScheduledStartTime: i, guildEventId: x, onClick: _, isActive: C } = e,
        k = (0, l.e7)([b.ZP], () => b.ZP.getGuildScheduledEvent(x)),
        I = (0, f.Z)(n, null == k ? void 0 : k.id),
        j = (0, l.e7)([u.Z], () => u.Z.getGuild(null == k ? void 0 : k.guild_id)),
        N = (0, l.e7)([s.Z], () => s.Z.getChannel(null == k ? void 0 : k.channel_id));
    if (null == k) return null;
    let { is_canceled: Z = !1 } = null != I ? I : {},
        w =
            (null == I ? void 0 : I.scheduled_start_time) != null
                ? new Date(null == I ? void 0 : I.scheduled_start_time)
                : i,
        E = (0, p.DK)(k),
        y = Z ? h.p1.CANCELED : h.p1.SCHEDULED;
    E === n && (y = k.status);
    let S =
            (null == k ? void 0 : k.scheduled_start_time) != null
                ? (0, p.lh)(I, w, new Date(null == k ? void 0 : k.scheduled_start_time))
                : null,
        P = (e) => {
            e.stopPropagation(),
                null != j &&
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
                                        guildEventId: k.id,
                                        recurrenceId: n,
                                        channel: N,
                                        guild: j,
                                        isRecurrenceItem: !0,
                                    },
                                    t,
                                ),
                            );
                    });
        };
    return (0, a.jsxs)(o.kL8, {
        className: r()(g.container, {
            [g.canceled]: Z,
            [g.clickable]: null != _,
            [g.active]: C,
        }),
        onClick: (e) => {
            e.stopPropagation(), Z || null == _ || _(n);
        },
        onContextMenu: P,
        "aria-label": "",
        children: [
            (0, a.jsx)(m.z, {
                startTime: w.toISOString(),
                status: null != S ? S : y,
                eventType: k.entity_type,
                guildEventId: k.id,
                recurrenceId: n,
                className: g.timeStatus,
            }),
            Z &&
                (0, a.jsx)(o.Text, {
                    variant: "text-sm/semibold",
                    color: "text-feedback-critical",
                    className: g.canceledStatus,
                    children: v.intl.string(v.t.fyBVRm),
                }),
            (0, a.jsx)(c.u, {
                text: v.intl.string(v.t["UKOtz+"]),
                position: "top",
                "aria-label": v.intl.string(v.t.bt75uw),
                children: (0, a.jsx)(o.P3F, {
                    onClick: P,
                    className: g.iconButton,
                    children: (0, a.jsx)(o.xhG, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: g.icon,
                    }),
                }),
            }),
        ],
    });
}
