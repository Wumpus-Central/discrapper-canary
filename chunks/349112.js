n.d(e, {
    A: () => j,
});
var l = n(627968);
n(64700);
var i = n(503698),
    r = n.n(i),
    s = n(311907),
    a = n(990078),
    u = n(397927),
    c = n(442433),
    o = n(734057),
    d = n(71393),
    h = n(698441),
    v = n(722260),
    m = n(974930),
    g = n(103355),
    f = n(988794),
    x = n(985018),
    p = n(473190);

function j(t) {
    let { recurrenceId: e, originalScheduledStartTime: i, guildEventId: j, onClick: A, isActive: y } = t,
        E = (0, s.bG)([h.Ay], () => h.Ay.getGuildScheduledEvent(j)),
        b = (0, v.A)(e, null == E ? void 0 : E.id),
        _ = (0, s.bG)([d.A], () => d.A.getGuild(null == E ? void 0 : E.guild_id)),
        C = (0, s.bG)([o.A], () => o.A.getChannel(null == E ? void 0 : E.channel_id));
    if (null == E) return null;
    let { is_canceled: T = !1 } = null != b ? b : {},
        k =
            (null == b ? void 0 : b.scheduled_start_time) != null
                ? new Date(null == b ? void 0 : b.scheduled_start_time)
                : i,
        O = (0, m.G3)(E),
        D = T ? f.XG.CANCELED : f.XG.SCHEDULED;
    O === e && (D = E.status);
    let N =
            (null == E ? void 0 : E.scheduled_start_time) != null
                ? (0, m.j)(b, k, new Date(null == E ? void 0 : E.scheduled_start_time))
                : null,
        G = (t) => {
            t.stopPropagation(),
                null != _ &&
                    (0, c.L3)(t, async () => {
                        let { default: t } = await Promise.all([n.e("95950"), n.e("3795"), n.e("7869")]).then(
                            n.bind(n, 406406),
                        );
                        return (n) =>
                            (0, l.jsx)(
                                t,
                                (function (t) {
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
                                })(
                                    {
                                        guildEventId: E.id,
                                        recurrenceId: e,
                                        channel: C,
                                        guild: _,
                                        isRecurrenceItem: !0,
                                    },
                                    n,
                                ),
                            );
                    });
        };
    return (0, l.jsxs)(u.sqX, {
        className: r()(p.kL, {
            [p.aD]: T,
            [p.vk]: null != A,
            [p.vu]: y,
        }),
        onClick: (t) => {
            t.stopPropagation(), T || null == A || A(e);
        },
        onContextMenu: G,
        "aria-label": "",
        children: [
            (0, l.jsx)(g.L, {
                startTime: k.toISOString(),
                status: null != N ? N : D,
                eventType: E.entity_type,
                guildEventId: E.id,
                recurrenceId: e,
                className: p.q$,
            }),
            T &&
                (0, l.jsx)(u.Text, {
                    variant: "text-sm/semibold",
                    color: "text-feedback-critical",
                    className: p.a6,
                    children: x.intl.string(x.t.fyBVRm),
                }),
            (0, l.jsx)(a.m, {
                text: x.intl.string(x.t["UKOtz+"]),
                position: "top",
                "aria-label": x.intl.string(x.t.bt75uw),
                children: (0, l.jsx)(u.DUT, {
                    onClick: G,
                    className: p.gb,
                    children: (0, l.jsx)(u.jNK, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: p.Kk,
                    }),
                }),
            }),
        ],
    });
}
