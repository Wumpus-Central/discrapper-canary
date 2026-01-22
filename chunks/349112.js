n.d(t, { A: () => g });
var l = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    c = n(311907),
    r = n(990078),
    s = n(397927),
    d = n(442433),
    u = n(734057),
    o = n(71393),
    f = n(698441),
    b = n(722260),
    h = n(974930),
    _ = n(103355),
    m = n(988794),
    x = n(985018),
    v = n(473190);
function g(e) {
    let { recurrenceId: t, originalScheduledStartTime: a, guildEventId: g, onClick: p, isActive: j } = e,
        A = (0, c.bG)([f.Ay], () => f.Ay.getGuildScheduledEvent(g)),
        y = (0, b.A)(t, null == A ? void 0 : A.id),
        C = (0, c.bG)([o.A], () => o.A.getGuild(null == A ? void 0 : A.guild_id)),
        k = (0, c.bG)([u.A], () => u.A.getChannel(null == A ? void 0 : A.channel_id));
    if (null == A) return null;
    let { is_canceled: N = !1 } = null != y ? y : {},
        E =
            (null == y ? void 0 : y.scheduled_start_time) != null
                ? new Date(null == y ? void 0 : y.scheduled_start_time)
                : a,
        T = (0, h.G3)(A),
        D = N ? m.XG.CANCELED : m.XG.SCHEDULED;
    T === t && (D = A.status);
    let w =
            (null == A ? void 0 : A.scheduled_start_time) != null
                ? (0, h.j)(y, E, new Date(null == A ? void 0 : A.scheduled_start_time))
                : null,
        S = (e) => {
            e.stopPropagation(),
                null != C &&
                    (0, d.L3)(e, async () => {
                        let { default: e } = await Promise.all([n.e("95950"), n.e("7869")]).then(n.bind(n, 406406));
                        return (n) =>
                            (0, l.jsx)(
                                e,
                                (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            l = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (l = l.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            l.forEach(function (t) {
                                                var l;
                                                (l = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: l,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = l);
                                            });
                                    }
                                    return e;
                                })(
                                    {
                                        guildEventId: A.id,
                                        recurrenceId: t,
                                        channel: k,
                                        guild: C,
                                        isRecurrenceItem: !0,
                                    },
                                    n,
                                ),
                            );
                    });
        };
    return (0, l.jsxs)(s.sqX, {
        className: i()(v.kL, {
            [v.aD]: N,
            [v.vk]: null != p,
            [v.vu]: j,
        }),
        onClick: (e) => {
            e.stopPropagation(), N || null == p || p(t);
        },
        onContextMenu: S,
        "aria-label": "",
        children: [
            (0, l.jsx)(_.L, {
                startTime: E.toISOString(),
                status: null != w ? w : D,
                eventType: A.entity_type,
                guildEventId: A.id,
                recurrenceId: t,
                className: v.q$,
            }),
            N &&
                (0, l.jsx)(s.Text, {
                    variant: "text-sm/semibold",
                    color: "text-feedback-critical",
                    className: v.a6,
                    children: x.intl.string(x.t.fyBVRm),
                }),
            (0, l.jsx)(r.m, {
                text: x.intl.string(x.t["UKOtz+"]),
                position: "top",
                "aria-label": x.intl.string(x.t.bt75uw),
                children: (0, l.jsx)(s.DUT, {
                    onClick: S,
                    className: v.gb,
                    children: (0, l.jsx)(s.jNK, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: v.Kk,
                    }),
                }),
            }),
        ],
    });
}
