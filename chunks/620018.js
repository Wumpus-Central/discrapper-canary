n.d(e, { A: () => L });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(364522),
    u = n(297264),
    c = n(123292),
    d = n(935208),
    o = n(435558),
    m = n.n(o),
    h = n(819169),
    g = n(17928),
    v = n(927813),
    p = n(285059),
    f = n(698441),
    C = n(974930),
    E = n(890856),
    y = n(834730),
    A = n(408278),
    _ = n(365199),
    x = n(442433),
    k = n(734057),
    I = n(71393),
    b = n(722260),
    D = n(492260),
    S = n(103355),
    j = n(988794),
    N = n(375708),
    G = n(214040);
function T(t) {
    let { recurrenceId: e, originalScheduledStartTime: i, guildEventId: r, onClick: a, isActive: u } = t,
        c = (0, g.bG)([f.Ay], () => f.Ay.getGuildScheduledEvent(r)),
        d = (0, b.A)(e, c?.id),
        o = (0, g.bG)([I.A], () => I.A.getGuild(c?.guild_id)),
        m = (0, g.bG)([k.A], () => k.A.getChannel(c?.channel_id)),
        { is_canceled: h = !1 } = d ?? {},
        v = d?.scheduled_start_time != null ? new Date(d?.scheduled_start_time) : i,
        p = (0, D.A)(v.toISOString(), void 0, null != c),
        { startDateTimeString: T } = p;
    if (null == c) return null;
    let w = (0, C.G3)(c),
        L = h ? j.XG.CANCELED : j.XG.SCHEDULED;
    w === e && (L = c.status);
    let z = c?.scheduled_start_time != null ? (0, C.j)(d, v, new Date(c?.scheduled_start_time)) : null;
    function P(t) {
        null == c ||
            (t.stopPropagation(),
            null != o &&
                (0, x.L3)(t, async () => {
                    let { default: t } = await Promise.all([
                        n.e("877371"),
                        n.e("993103"),
                        n.e("95340"),
                        n.e("252229"),
                        n.e("856753"),
                        n.e("256373"),
                        n.e("543267"),
                        n.e("599990"),
                        n.e("924067"),
                    ]).then(n.bind(n, 399893));
                    return (n) =>
                        (0, l.jsx)(t, {
                            guildEventId: c.id,
                            recurrenceId: e,
                            channel: m,
                            guild: o,
                            isRecurrenceItem: !0,
                            ...n,
                        });
                }));
    }
    return (0, l.jsxs)(E.s, {
        className: s()(G.kL, { [G.aD]: h, [G.vk]: null != a, [G.vu]: u }),
        onClick: function (t) {
            t.stopPropagation(), h || a?.(e);
        },
        onContextMenu: P,
        "aria-label": (0, S.o)({ timeData: p, status: z ?? L, eventType: c.entity_type, isCanceled: h }),
        children: [
            (0, l.jsx)(S.L, {
                startTime: v.toISOString(),
                status: z ?? L,
                eventType: c.entity_type,
                guildEventId: c.id,
                recurrenceId: e,
                timeData: p,
                className: G.q$,
            }),
            h &&
                (0, l.jsx)(y.E, {
                    variant: "text-sm/semibold",
                    color: "text-feedback-critical",
                    className: G.a6,
                    children: N.intl.string(N.t.fyBVRm),
                }),
            (0, l.jsx)(A.K, {
                icon: _.MoreHorizontalIcon,
                variant: "icon-only",
                size: "sm",
                "aria-label": N.intl.formatToPlainString(N.t.aNAh3u, { eventTime: T }),
                onClick: P,
            }),
        ],
    });
}
var w = n(889303);
function L(t) {
    let {
            guildId: e,
            recurrenceRule: n,
            guildEventId: r,
            onRecurrenceClick: o,
            hideScroller: E = !1,
            activeRecurrenceId: y,
        } = t,
        {
            recurrenceStartTimes: A,
            canViewMoreRecurrences: _,
            updateRecurrenceStartTimes: x,
        } = (function (t, e, n) {
            let l = (0, g.bG)([f.Ay], () => f.Ay.getGuildScheduledEvent(t)),
                r = (0, h.A)(n),
                [s, a] = i.useState(
                    null != n && null != l ? (0, C.er)(4, (0, C.X7)(n), new Date(l.scheduled_start_time)) : [],
                );
            i.useEffect(() => {
                if (null == r || null == n || null == l || m().isEqual(r, n)) return;
                let t = (0, C.X7)(n);
                a((0, C.er)(s.length, t, new Date(l.scheduled_start_time)));
            }, [n, s.length, l, r]),
                i.useEffect(() => {
                    if (null == e) return;
                    let n = s.map((t) =>
                        d.default.fromTimestamp(Math.floor(t.getTime() / v.A.Millis.SECOND) * v.A.Millis.SECOND),
                    );
                    p.A.getGuildEventUserCounts(e, t, n);
                }, [t, e, s]);
            let u = i.useMemo(() => {
                if (null == n || 0 === s.length || l?.scheduled_start_time == null) return !1;
                let t = new Date();
                t.setFullYear(t.getFullYear() + C.Ze);
                let e = s[s.length - 1],
                    i = (0, C.X7)(n).after(e);
                return null != i && i <= t;
            }, [n, s, l?.scheduled_start_time]);
            return {
                recurrenceStartTimes: s,
                canViewMoreRecurrences: u,
                updateRecurrenceStartTimes: function () {
                    if (null == n || null == l) return;
                    let t = (0, C.X7)(n),
                        e = s[s.length - 1];
                    a([...s, ...(0, C.er)(4, t, e, !0)]);
                },
            };
        })(r, e, n),
        k = E ? "div" : a.Ip;
    return (0, l.jsxs)("div", {
        className: w.w5,
        children: [
            (0, l.jsx)(u.D, { variant: "heading-sm/medium", className: w.R_, children: N.intl.string(N.t["D/jjoa"]) }),
            (0, l.jsxs)(k, {
                className: s()(w.XG, { [w.cq]: !E }),
                children: [
                    A.map((t) => {
                        let e = d.default.fromTimestamp(t.getTime());
                        return (0, l.jsx)(
                            T,
                            {
                                recurrenceId: e,
                                originalScheduledStartTime: t,
                                guildEventId: r,
                                onClick: o,
                                isActive: e === y,
                            },
                            e,
                        );
                    }),
                    _ &&
                        (0, l.jsx)("div", {
                            className: w.UD,
                            children: (0, l.jsx)(c.Q, {
                                onClick: function (t) {
                                    t.stopPropagation(), x();
                                },
                                text: N.intl.string(N.t["8O7Hpy"]),
                                size: "sm",
                            }),
                        }),
                ],
            }),
        ],
    });
}
