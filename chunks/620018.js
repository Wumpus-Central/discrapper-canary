n.d(e, { A: () => P });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(364522),
    u = n(534514),
    c = n(123292),
    d = n(935208),
    o = n(735438),
    m = n.n(o),
    g = n(17928),
    h = n(919796),
    v = n(927813),
    p = n(285059),
    f = n(698441),
    A = n(647090),
    E = n(890856),
    y = n(834730),
    C = n(408278),
    _ = n(365199),
    x = n(442433),
    b = n(734057),
    j = n(71393),
    k = n(722260),
    D = n(492260),
    S = n(103355),
    N = n(988794),
    G = n(375708),
    T = n(209291);
function I(t) {
    let { recurrenceId: e, originalScheduledStartTime: i, guildEventId: s, onClick: a, isActive: u } = t,
        c = (0, g.bG)([f.Ay], () => f.Ay.getGuildScheduledEvent(s)),
        d = (0, k.A)(e, c?.id),
        o = (0, g.bG)([j.A], () => j.A.getGuild(c?.guild_id)),
        m = (0, g.bG)([b.A], () => b.A.getChannel(c?.channel_id)),
        { is_canceled: h = !1 } = d ?? {},
        v = d?.scheduled_start_time != null ? new Date(d?.scheduled_start_time) : i,
        p = (0, D.A)(v.toISOString(), void 0, null != c),
        { startDateTimeString: I } = p;
    if (null == c) return null;
    let w = (0, A.G3)(c),
        P = h ? N.XG.CANCELED : N.XG.SCHEDULED;
    w === e && (P = c.status);
    let X = c?.scheduled_start_time != null ? (0, A.j)(d, v, new Date(c?.scheduled_start_time)) : null,
        q = (t) => {
            t.stopPropagation(),
                null != o &&
                    (0, x.L3)(t, async () => {
                        let { default: t } = await Promise.all([
                            n.e("77371"),
                            n.e("93103"),
                            n.e("52229"),
                            n.e("95340"),
                            n.e("56753"),
                            n.e("56373"),
                            n.e("43267"),
                            n.e("99990"),
                            n.e("24067"),
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
                    });
        };
    return (0, l.jsxs)(E.s, {
        className: r()(T.kL, { [T.aD]: h, [T.vk]: null != a, [T.vu]: u }),
        onClick: function (t) {
            t.stopPropagation(), h || a?.(e);
        },
        onContextMenu: q,
        "aria-label": (0, S.o)({ timeData: p, status: X ?? P, eventType: c.entity_type, isCanceled: h }),
        children: [
            (0, l.jsx)(S.L, {
                startTime: v.toISOString(),
                status: X ?? P,
                eventType: c.entity_type,
                guildEventId: c.id,
                recurrenceId: e,
                timeData: p,
                className: T.q$,
            }),
            h &&
                (0, l.jsx)(y.E, {
                    variant: "text-sm/semibold",
                    color: "text-feedback-critical",
                    className: T.a6,
                    children: G.intl.string(G.t.fyBVRm),
                }),
            (0, l.jsx)(C.K, {
                icon: _.j,
                variant: "icon-only",
                size: "sm",
                "aria-label": G.intl.formatToPlainString(G.t.aNAh3u, { eventTime: I }),
                onClick: q,
            }),
        ],
    });
}
var w = n(231842);
function P(t) {
    let {
            guildId: e,
            recurrenceRule: n,
            guildEventId: s,
            onRecurrenceClick: o,
            hideScroller: E = !1,
            activeRecurrenceId: y,
        } = t,
        {
            recurrenceStartTimes: C,
            canViewMoreRecurrences: _,
            updateRecurrenceStartTimes: x,
        } = (function (t, e, n) {
            let l = (0, g.bG)([f.Ay], () => f.Ay.getGuildScheduledEvent(t)),
                s = (0, h.A)(n),
                [r, a] = i.useState(
                    null != n && null != l ? (0, A.er)(4, (0, A.X7)(n), new Date(l.scheduled_start_time)) : [],
                );
            i.useEffect(() => {
                if (null == s || null == n || null == l || m().isEqual(s, n)) return;
                let t = (0, A.X7)(n);
                a((0, A.er)(r.length, t, new Date(l.scheduled_start_time)));
            }, [n, r.length, l, s]),
                i.useEffect(() => {
                    if (null == e) return;
                    let n = r.map((t) =>
                        d.default.fromTimestamp(Math.floor(t.getTime() / v.A.Millis.SECOND) * v.A.Millis.SECOND),
                    );
                    p.A.getGuildEventUserCounts(e, t, n);
                }, [t, e, r]);
            let u = i.useMemo(() => {
                if (null == n || 0 === r.length || l?.scheduled_start_time == null) return !1;
                let t = new Date();
                t.setFullYear(t.getFullYear() + A.Ze);
                let e = r[r.length - 1],
                    i = (0, A.X7)(n).after(e);
                return null != i && i <= t;
            }, [n, r, l?.scheduled_start_time]);
            return {
                recurrenceStartTimes: r,
                canViewMoreRecurrences: u,
                updateRecurrenceStartTimes: () => {
                    if (null == n || null == l) return;
                    let t = (0, A.X7)(n),
                        e = r[r.length - 1];
                    a([...r, ...(0, A.er)(4, t, e, !0)]);
                },
            };
        })(s, e, n),
        b = E ? "div" : a.Ip;
    return (0, l.jsxs)("div", {
        className: w.w5,
        children: [
            (0, l.jsx)(u.D, { variant: "heading-sm/medium", className: w.R_, children: G.intl.string(G.t["D/jjoa"]) }),
            (0, l.jsxs)(b, {
                className: r()(w.XG, { [w.cq]: !E }),
                children: [
                    C.map((t) => {
                        let e = d.default.fromTimestamp(t.getTime());
                        return (0, l.jsx)(
                            I,
                            {
                                recurrenceId: e,
                                originalScheduledStartTime: t,
                                guildEventId: s,
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
                                text: G.intl.string(G.t["8O7Hpy"]),
                                size: "sm",
                            }),
                        }),
                ],
            }),
        ],
    });
}
