n.d(t, { A: () => u }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(477782),
    a = n(688810),
    r = n(657331),
    o = n(129831),
    c = n(985018);
function d(e) {
    let {
            priorityMembers: t,
            otherMembers: n,
            totalMembers: s,
            activity: a,
            guildId: d,
            sourceAnalyticsLocations: u,
        } = e,
        m = [];
    for (let { user: e, status: n } of t)
        m.push(
            (0, i.jsx)(l.Dr, {
                id: e.id,
                keepItemStyles: !0,
                render: (t) => (0, i.jsx)(o.A, { ...t, user: e, status: n, guildId: d }),
                action: () => (0, r.openUserProfileModal)({ userId: e.id, guildId: d, sourceAnalyticsLocations: u }),
            }),
        );
    for (let e of n)
        m.push(
            (0, i.jsx)(l.Dr, {
                id: e.id,
                keepItemStyles: !0,
                render: (t) => (0, i.jsx)(o.A, { ...t, user: e, guildId: d }),
                action: () => (0, r.openUserProfileModal)({ userId: e.id, guildId: d, sourceAnalyticsLocations: u }),
            }),
        );
    let A = s - m.length;
    return (
        A > 0 &&
            m.push(
                (0, i.jsx)(l.Dr, {
                    id: `unknown-members-${a?.session_id}`,
                    render: (e) =>
                        (0, i.jsx)(o.x, { ...e, label: c.intl.formatToPlainString(c.t["6Kqn9M"], { count: A }) }),
                }),
            ),
        m
    );
}
function u(e) {
    let { priorityMembers: t, partiedMembers: n, currentActivities: r, guildContext: o } = e,
        u = new Set(
            t.map((e) => {
                let { user: t } = e;
                return t.id;
            }),
        ),
        m = n.filter((e) => !u.has(e.id)),
        { analyticsLocations: A } = (0, a.Ay)(),
        h = s.useMemo(() => {
            let e = r
                .flatMap((e) => {
                    let { playingMembers: t } = e;
                    return t;
                })
                .map((e) => e.id);
            return n.filter((t) => !e.includes(t.id));
        }, [n, r]);
    if (r.length <= 1 && 0 === h.length)
        return (0, i.jsx)(l.rX, {
            label: n.length > 1 ? c.intl.formatToPlainString(c.t.C4WXvc, { memberCount: n.length }) : void 0,
            children: d({
                priorityMembers: t,
                otherMembers: m,
                totalMembers: n.length,
                activity: r[0]?.activity ?? void 0,
                guildId: o?.id,
                sourceAnalyticsLocations: A,
            }),
        });
    let x = r.map((e, n) => {
            let { playingMembers: s, game: a, activity: r } = e,
                c = new Set(s.map((e) => e.id));
            return (0, i.jsx)(
                l.rX,
                {
                    label: `${a.name} - ${s.length}`,
                    children: d({
                        priorityMembers: t.filter((e) => {
                            let { user: t } = e;
                            return c.has(t.id);
                        }),
                        otherMembers: s.filter((e) => !u.has(e.id)),
                        totalMembers: s.length,
                        activity: r ?? void 0,
                        guildId: o?.id,
                        sourceAnalyticsLocations: A,
                    }),
                },
                n,
            );
        }),
        p = h.map((e) => e.id);
    return [
        ...x,
        (0, i.jsx)(l.rX, {
            label: `${c.intl.string(c.t["mIx+gG"])} - ${h.length}`,
            children: d({
                priorityMembers: t.filter((e) => {
                    let { user: t } = e;
                    return p.includes(t.id);
                }),
                otherMembers: h.filter((e) => !u.has(e.id)),
                totalMembers: h.length,
                guildId: o?.id,
                sourceAnalyticsLocations: A,
            }),
        }),
    ];
}
