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
    m = t(390966),
    v = t(765305),
    g = t(388032),
    h = t(709380);
function b(e) {
    let { recurrenceId: n, originalScheduledStartTime: r, guildEventId: b, onClick: x, isActive: C } = e,
        I = (0, l.e7)([_.ZP], () => _.ZP.getGuildScheduledEvent(b)),
        j = (0, p.Z)(n, null == I ? void 0 : I.id),
        k = (0, l.e7)([u.Z], () => u.Z.getGuild(null == I ? void 0 : I.guild_id)),
        y = (0, l.e7)([d.Z], () => d.Z.getChannel(null == I ? void 0 : I.channel_id));
    if (null == I) return null;
    let { is_canceled: N = !1 } = null != j ? j : {},
        w =
            (null == j ? void 0 : j.scheduled_start_time) != null
                ? new Date(null == j ? void 0 : j.scheduled_start_time)
                : r,
        Z = (0, f.DK)(I),
        E = N ? v.p1.CANCELED : v.p1.SCHEDULED;
    Z === n && (E = I.status);
    let P =
            (null == I ? void 0 : I.scheduled_start_time) != null
                ? (0, f.lh)(j, w, new Date(null == I ? void 0 : I.scheduled_start_time))
                : null,
        S = (e) => {
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
                                        channel: y,
                                        guild: k,
                                        isRecurrenceItem: !0,
                                    },
                                    t,
                                ),
                            );
                    });
        };
    return (0, i.jsxs)(c.kL8, {
        className: a()(h.container, {
            [h.canceled]: N,
            [h.clickable]: null != x,
            [h.active]: C,
        }),
        onClick: (e) => {
            e.stopPropagation(), N || null == x || x(n);
        },
        onContextMenu: S,
        "aria-label": "",
        children: [
            (0, i.jsx)(m.z, {
                startTime: w.toISOString(),
                status: null != P ? P : E,
                eventType: I.entity_type,
                guildEventId: I.id,
                recurrenceId: n,
                className: h.timeStatus,
            }),
            N &&
                (0, i.jsx)(c.Text, {
                    variant: "text-sm/semibold",
                    color: "text-danger",
                    className: h.canceledStatus,
                    children: g.intl.string(g.t.fyBVRm),
                }),
            (0, i.jsx)(o.u, {
                text: g.intl.string(g.t["UKOtz+"]),
                position: "top",
                "aria-label": g.intl.string(g.t.bt75uw),
                children: (0, i.jsx)(c.P3F, {
                    onClick: S,
                    className: h.iconButton,
                    children: (0, i.jsx)(c.xhG, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: h.icon,
                    }),
                }),
            }),
        ],
    });
}
