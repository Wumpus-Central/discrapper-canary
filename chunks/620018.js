n.d(e, { A: () => X });
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
    m = n(17928),
    g = n(919796),
    p = n(927813),
    v = n(285059),
    f = n(698441),
    x = n(647090),
    C = n(990078),
    E = n(890856),
    A = n(834730),
    _ = n(939249),
    y = n(365199),
    b = n(442433),
    j = n(734057),
    k = n(71393),
    D = n(722260),
    N = n(103355),
    G = n(988794),
    S = n(375708),
    w = n(209291);
function I(t) {
    let { recurrenceId: e, originalScheduledStartTime: i, guildEventId: s, onClick: a, isActive: u } = t,
        c = (0, m.bG)([f.Ay], () => f.Ay.getGuildScheduledEvent(s)),
        d = (0, D.A)(e, c?.id),
        o = (0, m.bG)([k.A], () => k.A.getGuild(c?.guild_id)),
        h = (0, m.bG)([j.A], () => j.A.getChannel(c?.channel_id));
    if (null == c) return null;
    let { is_canceled: g = !1 } = d ?? {},
        p = d?.scheduled_start_time != null ? new Date(d?.scheduled_start_time) : i,
        v = (0, x.G3)(c),
        I = g ? G.XG.CANCELED : G.XG.SCHEDULED;
    v === e && (I = c.status);
    let T = c?.scheduled_start_time != null ? (0, x.j)(d, p, new Date(c?.scheduled_start_time)) : null,
        X = (t) => {
            t.stopPropagation(),
                null != o &&
                    (0, b.L3)(t, async () => {
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
                                channel: h,
                                guild: o,
                                isRecurrenceItem: !0,
                                ...n,
                            });
                    });
        };
    return (0, l.jsxs)(E.s, {
        className: r()(w.kL, { [w.aD]: g, [w.vk]: null != a, [w.vu]: u }),
        onClick: (t) => {
            t.stopPropagation(), g || a?.(e);
        },
        onContextMenu: X,
        "aria-label": "",
        children: [
            (0, l.jsx)(N.L, {
                startTime: p.toISOString(),
                status: T ?? I,
                eventType: c.entity_type,
                guildEventId: c.id,
                recurrenceId: e,
                className: w.q$,
            }),
            g &&
                (0, l.jsx)(A.E, {
                    variant: "text-sm/semibold",
                    color: "text-feedback-critical",
                    className: w.a6,
                    children: S.intl.string(S.t.fyBVRm),
                }),
            (0, l.jsx)(C.m, {
                text: S.intl.string(S.t["UKOtz+"]),
                position: "top",
                "aria-label": S.intl.string(S.t.bt75uw),
                children: (0, l.jsx)(_.D, {
                    onClick: X,
                    className: w.gb,
                    children: (0, l.jsx)(y.j, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: w.Kk,
                    }),
                }),
            }),
        ],
    });
}
var T = n(231842);
function X(t) {
    let {
            guildId: e,
            recurrenceRule: n,
            guildEventId: s,
            onRecurrenceClick: o,
            hideScroller: C = !1,
            activeRecurrenceId: E,
        } = t,
        {
            recurrenceStartTimes: A,
            canViewMoreRecurrences: _,
            updateRecurrenceStartTimes: y,
        } = (function (t, e, n) {
            let l = (0, m.bG)([f.Ay], () => f.Ay.getGuildScheduledEvent(t)),
                s = (0, g.A)(n),
                [r, a] = i.useState(
                    null != n && null != l ? (0, x.er)(4, (0, x.X7)(n), new Date(l.scheduled_start_time)) : [],
                );
            i.useEffect(() => {
                if (null == s || null == n || null == l || h().isEqual(s, n)) return;
                let t = (0, x.X7)(n);
                a((0, x.er)(r.length, t, new Date(l.scheduled_start_time)));
            }, [n, r.length, l, s]),
                i.useEffect(() => {
                    if (null == e) return;
                    let n = r.map((t) =>
                        d.default.fromTimestamp(Math.floor(t.getTime() / p.A.Millis.SECOND) * p.A.Millis.SECOND),
                    );
                    v.A.getGuildEventUserCounts(e, t, n);
                }, [t, e, r]);
            let u = i.useMemo(() => {
                if (null == n || 0 === r.length || l?.scheduled_start_time == null) return !1;
                let t = new Date();
                t.setFullYear(t.getFullYear() + x.Ze);
                let e = r[r.length - 1],
                    i = (0, x.X7)(n).after(e);
                return null != i && i <= t;
            }, [n, r, l?.scheduled_start_time]);
            return {
                recurrenceStartTimes: r,
                canViewMoreRecurrences: u,
                updateRecurrenceStartTimes: () => {
                    if (null == n || null == l) return;
                    let t = (0, x.X7)(n),
                        e = r[r.length - 1];
                    a([...r, ...(0, x.er)(4, t, e, !0)]);
                },
            };
        })(s, e, n),
        b = C ? "div" : a.Ip;
    return (0, l.jsxs)("div", {
        className: T.w5,
        children: [
            (0, l.jsx)(u.D, { variant: "heading-sm/medium", className: T.R_, children: S.intl.string(S.t["D/jjoa"]) }),
            (0, l.jsxs)(b, {
                className: r()(T.XG, { [T.cq]: !C }),
                children: [
                    A.map((t) => {
                        let e = d.default.fromTimestamp(t.getTime());
                        return (0, l.jsx)(
                            I,
                            {
                                recurrenceId: e,
                                originalScheduledStartTime: t,
                                guildEventId: s,
                                onClick: o,
                                isActive: e === E,
                            },
                            e,
                        );
                    }),
                    _ &&
                        (0, l.jsx)("div", {
                            className: T.UD,
                            children: (0, l.jsx)(c.Q, {
                                onClick: (t) => {
                                    t.stopPropagation(), y();
                                },
                                text: S.intl.string(S.t["8O7Hpy"]),
                                size: "sm",
                            }),
                        }),
                ],
            }),
        ],
    });
}
