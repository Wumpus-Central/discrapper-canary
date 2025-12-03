t.d(n, { Z: () => b });
var i = t(54381);
t(473749);
var r = t(120356),
    a = t.n(r),
    l = t(442837),
    o = t(28664),
    c = t(481060),
    s = t(239091),
    d = t(592125),
    u = t(430824),
    _ = t(924301),
    p = t(894017),
    f = t(854698),
    h = t(390966),
    m = t(765305),
    v = t(388032),
    g = t(709380);
function b(e) {
    let { recurrenceId: n, originalScheduledStartTime: r, guildEventId: b, onClick: x, isActive: C } = e,
        j = (0, l.e7)([_.ZP], () => _.ZP.getGuildScheduledEvent(b)),
        k = (0, p.Z)(n, null == j ? void 0 : j.id),
        I = (0, l.e7)([u.Z], () => u.Z.getGuild(null == j ? void 0 : j.guild_id)),
        y = (0, l.e7)([d.Z], () => d.Z.getChannel(null == j ? void 0 : j.channel_id));
    if (null == j) return null;
    let { is_canceled: N = !1 } = null != k ? k : {},
        w =
            (null == k ? void 0 : k.scheduled_start_time) != null
                ? new Date(null == k ? void 0 : k.scheduled_start_time)
                : r,
        Z = (0, f.DK)(j),
        E = N ? m.p1.CANCELED : m.p1.SCHEDULED;
    Z === n && (E = j.status);
    let P =
            (null == j ? void 0 : j.scheduled_start_time) != null
                ? (0, f.lh)(k, w, new Date(null == j ? void 0 : j.scheduled_start_time))
                : null,
        S = (e) => {
            e.stopPropagation(),
                null != I &&
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
                                        guildEventId: j.id,
                                        recurrenceId: n,
                                        channel: y,
                                        guild: I,
                                        isRecurrenceItem: !0,
                                    },
                                    t,
                                ),
                            );
                    });
        };
    return (0, i.jsxs)(c.kL8, {
        className: a()(g.container, {
            [g.canceled]: N,
            [g.clickable]: null != x,
            [g.active]: C,
        }),
        onClick: (e) => {
            e.stopPropagation(), N || null == x || x(n);
        },
        onContextMenu: S,
        "aria-label": "",
        children: [
            (0, i.jsx)(h.z, {
                startTime: w.toISOString(),
                status: null != P ? P : E,
                eventType: j.entity_type,
                guildEventId: j.id,
                recurrenceId: n,
                className: g.timeStatus,
            }),
            N &&
                (0, i.jsx)(c.Text, {
                    variant: "text-sm/semibold",
                    color: "text-feedback-critical",
                    className: g.canceledStatus,
                    children: v.intl.string(v.t.fyBVRm),
                }),
            (0, i.jsx)(o.u, {
                text: v.intl.string(v.t["UKOtz+"]),
                position: "top",
                "aria-label": v.intl.string(v.t.bt75uw),
                children: (0, i.jsx)(c.P3F, {
                    onClick: S,
                    className: g.iconButton,
                    children: (0, i.jsx)(c.xhG, {
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
