n.d(t, { Z: () => h }), n(653041), n(47120), n(390547);
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(906732),
    s = n(171368),
    o = n(841710),
    c = n(981631),
    d = n(388032);
function u(e) {
    let { priorityMembers: t, otherMembers: n, totalMembers: l, activity: a, guildId: u, sourceAnalyticsLocations: h } = e,
        m = [];
    for (let { user: e, status: n } of t)
        m.push(
            (0, i.jsx)(r.sNh, {
                id: e.id,
                keepItemStyles: !0,
                render: (t) =>
                    (0, i.jsx)(o.Z, {
                        ...t,
                        user: e,
                        status: n,
                        guildId: u
                    }),
                action: () =>
                    (0, s.openUserProfileModal)({
                        userId: e.id,
                        guildId: u,
                        sourceAnalyticsLocations: h,
                        analyticsLocation: { section: c.jXE.ACTIVITY_FEED_NOW_PLAYING_CONTEXT_MENU }
                    })
            })
        );
    for (let e of n)
        m.push(
            (0, i.jsx)(r.sNh, {
                id: e.id,
                keepItemStyles: !0,
                render: (t) =>
                    (0, i.jsx)(o.Z, {
                        ...t,
                        user: e,
                        guildId: u
                    }),
                action: () =>
                    (0, s.openUserProfileModal)({
                        userId: e.id,
                        guildId: u,
                        sourceAnalyticsLocations: h,
                        analyticsLocation: { section: c.jXE.ACTIVITY_FEED_NOW_PLAYING_CONTEXT_MENU }
                    })
            })
        );
    let p = l - m.length;
    return (
        p > 0 &&
            m.push(
                (0, i.jsx)(r.sNh, {
                    id: 'unknown-members-'.concat(null == a ? void 0 : a.session_id),
                    render: (e) =>
                        (0, i.jsx)(o.Y, {
                            ...e,
                            label: d.intl.formatToPlainString(d.t['6Kqn9P'], { count: p })
                        })
                })
            ),
        m
    );
}
function h(e) {
    let { priorityMembers: t, partiedMembers: n, currentActivities: s, guildContext: o } = e,
        c = new Set(
            t.map((e) => {
                let { user: t } = e;
                return t.id;
            })
        ),
        h = n.filter((e) => !c.has(e.id)),
        { analyticsLocations: m } = (0, a.ZP)(),
        p = l.useMemo(() => {
            let e = s
                .flatMap((e) => {
                    let { playingMembers: t } = e;
                    return t;
                })
                .map((e) => e.id);
            return n.filter((t) => !e.includes(t.id));
        }, [n, s]);
    if (s.length <= 1 && 0 === p.length) {
        var g, _;
        return (0, i.jsx)(r.kSQ, {
            label: n.length > 1 ? d.intl.formatToPlainString(d.t.C4WXvb, { memberCount: n.length }) : void 0,
            children: u({
                priorityMembers: t,
                otherMembers: h,
                totalMembers: n.length,
                activity: null !== (_ = null === (g = s[0]) || void 0 === g ? void 0 : g.activity) && void 0 !== _ ? _ : void 0,
                guildId: null == o ? void 0 : o.id,
                sourceAnalyticsLocations: m
            })
        });
    }
    let f = s.map((e, n) => {
            let { playingMembers: l, game: a, activity: s } = e,
                d = new Set(l.map((e) => e.id));
            return (0, i.jsx)(
                r.kSQ,
                {
                    label: ''.concat(a.name, ' - ').concat(l.length),
                    children: u({
                        priorityMembers: t.filter((e) => {
                            let { user: t } = e;
                            return d.has(t.id);
                        }),
                        otherMembers: l.filter((e) => !c.has(e.id)),
                        totalMembers: l.length,
                        activity: null != s ? s : void 0,
                        guildId: null == o ? void 0 : o.id,
                        sourceAnalyticsLocations: m
                    })
                },
                n
            );
        }),
        E = p.map((e) => e.id);
    return [
        ...f,
        (0, i.jsx)(r.kSQ, {
            label: ''.concat(d.intl.string(d.t['mIx+gI']), ' - ').concat(p.length),
            children: u({
                priorityMembers: t.filter((e) => {
                    let { user: t } = e;
                    return E.includes(t.id);
                }),
                otherMembers: p.filter((e) => !c.has(e.id)),
                totalMembers: p.length,
                guildId: null == o ? void 0 : o.id,
                sourceAnalyticsLocations: m
            })
        })
    ];
}
