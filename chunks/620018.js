n.d(e, { A: () => O });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(364522),
    u = n(534514),
    c = n(123292),
    d = n(935208),
    o = n(735438),
    h = n.n(o),
    g = n(17928),
    m = n(919796),
    v = n(927813),
    x = n(285059),
    f = n(698441),
    p = n(974930),
    A = n(990078),
    j = n(890856),
    E = n(834730),
    y = n(939249),
    _ = n(365199),
    C = n(442433),
    T = n(734057),
    k = n(71393),
    D = n(722260),
    N = n(103355),
    w = n(988794),
    b = n(985018),
    G = n(209291);
function S(t) {
    let { recurrenceId: e, originalScheduledStartTime: i, guildEventId: s, onClick: a, isActive: u } = t,
        c = (0, g.bG)([f.Ay], () => f.Ay.getGuildScheduledEvent(s)),
        d = (0, D.A)(e, c?.id),
        o = (0, g.bG)([k.A], () => k.A.getGuild(c?.guild_id)),
        h = (0, g.bG)([T.A], () => T.A.getChannel(c?.channel_id));
    if (null == c) return null;
    let { is_canceled: m = !1 } = d ?? {},
        v = d?.scheduled_start_time != null ? new Date(d?.scheduled_start_time) : i,
        x = (0, p.G3)(c),
        S = m ? w.XG.CANCELED : w.XG.SCHEDULED;
    x === e && (S = c.status);
    let M = c?.scheduled_start_time != null ? (0, p.j)(d, v, new Date(c?.scheduled_start_time)) : null,
        O = (t) => {
            t.stopPropagation(),
                null != o &&
                    (0, C.L3)(t, async () => {
                        let { default: t } = await Promise.all([
                            n.e("77371"),
                            n.e("93103"),
                            n.e("24170"),
                            n.e("15637"),
                        ]).then(n.bind(n, 399893));
                        return (n) =>
                            (0, l.jsx)(t, {
                                guildEventId: c.id,
                                recurrenceId: e,
                                channel: h,
                                guild: o,
                                isRecurrenceItem: !0,
                                ...n,
                            });
                    });
        };
    return (0, l.jsxs)(j.s, {
        className: r()(G.kL, { [G.aD]: m, [G.vk]: null != a, [G.vu]: u }),
        onClick: (t) => {
            t.stopPropagation(), m || a?.(e);
        },
        onContextMenu: O,
        "aria-label": "",
        children: [
            (0, l.jsx)(N.L, {
                startTime: v.toISOString(),
                status: M ?? S,
                eventType: c.entity_type,
                guildEventId: c.id,
                recurrenceId: e,
                className: G.q$,
            }),
            m &&
                (0, l.jsx)(E.E, {
                    variant: "text-sm/semibold",
                    color: "text-feedback-critical",
                    className: G.a6,
                    children: b.intl.string(b.t.fyBVRm),
                }),
            (0, l.jsx)(A.m, {
                text: b.intl.string(b.t["UKOtz+"]),
                position: "top",
                "aria-label": b.intl.string(b.t.bt75uw),
                children: (0, l.jsx)(y.D, {
                    onClick: O,
                    className: G.gb,
                    children: (0, l.jsx)(_.j, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: G.Kk,
                    }),
                }),
            }),
        ],
    });
}
var M = n(231842);
function O(t) {
    let {
            guildId: e,
            recurrenceRule: n,
            guildEventId: s,
            onRecurrenceClick: o,
            hideScroller: A = !1,
            activeRecurrenceId: j,
        } = t,
        {
            recurrenceStartTimes: E,
            canViewMoreRecurrences: y,
            updateRecurrenceStartTimes: _,
        } = (function (t, e, n) {
            let l = (0, g.bG)([f.Ay], () => f.Ay.getGuildScheduledEvent(t)),
                s = (0, m.A)(n),
                [r, a] = i.useState(
                    null != n && null != l ? (0, p.er)(4, (0, p.X7)(n), new Date(l.scheduled_start_time)) : [],
                );
            i.useEffect(() => {
                if (null == s || null == n || null == l || h().isEqual(s, n)) return;
                let t = (0, p.X7)(n);
                a((0, p.er)(r.length, t, new Date(l.scheduled_start_time)));
            }, [n, r.length, l, s]),
                i.useEffect(() => {
                    if (null == e) return;
                    let n = r.map((t) =>
                        d.default.fromTimestamp(Math.floor(t.getTime() / v.A.Millis.SECOND) * v.A.Millis.SECOND),
                    );
                    x.A.getGuildEventUserCounts(e, t, n);
                }, [t, e, r]);
            let u = i.useMemo(() => {
                if (null == n || 0 === r.length || l?.scheduled_start_time == null) return !1;
                let t = new Date();
                t.setFullYear(t.getFullYear() + p.Ze);
                let e = r[r.length - 1],
                    i = (0, p.X7)(n).after(e);
                return null != i && i <= t;
            }, [n, r, l?.scheduled_start_time]);
            return {
                recurrenceStartTimes: r,
                canViewMoreRecurrences: u,
                updateRecurrenceStartTimes: () => {
                    if (null == n || null == l) return;
                    let t = (0, p.X7)(n),
                        e = r[r.length - 1];
                    a([...r, ...(0, p.er)(4, t, e, !0)]);
                },
            };
        })(s, e, n),
        C = A ? "div" : a.Ip;
    return (0, l.jsxs)("div", {
        className: M.w5,
        children: [
            (0, l.jsx)(u.D, { variant: "heading-sm/medium", className: M.R_, children: b.intl.string(b.t["D/jjoa"]) }),
            (0, l.jsxs)(C, {
                className: r()(M.XG, { [M.cq]: !A }),
                children: [
                    E.map((t) => {
                        let e = d.default.fromTimestamp(t.getTime());
                        return (0, l.jsx)(
                            S,
                            {
                                recurrenceId: e,
                                originalScheduledStartTime: t,
                                guildEventId: s,
                                onClick: o,
                                isActive: e === j,
                            },
                            e,
                        );
                    }),
                    y &&
                        (0, l.jsx)("div", {
                            className: M.UD,
                            children: (0, l.jsx)(c.Q, {
                                onClick: (t) => {
                                    t.stopPropagation(), _();
                                },
                                text: b.intl.string(b.t["8O7Hpy"]),
                                size: "sm",
                            }),
                        }),
                ],
            }),
        ],
    });
}
