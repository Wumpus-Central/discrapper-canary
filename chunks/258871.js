var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    o = n(554747),
    s = n(434479),
    c = n(593364),
    u = n(703656),
    d = n(944486),
    h = n(147754),
    p = n(688438),
    m = n(981631),
    f = n(388032);
let g = [
    {
        key: 'EVENTS',
        renderIcon: (e) =>
            (0, i.jsx)(a.CalendarIcon, {
                size: 'md',
                color: 'currentColor',
                className: e
            }),
        getName: (e) => {
            let { numEvents: t } = e;
            return t > 0 ? f.intl.formatToPlainString(f.t.IBdqSk, { number: t }) : f.intl.string(f.t.tlopTE);
        },
        handler: (e) =>
            (0, a.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e('22347'), n.e('56236'), n.e('22506')]).then(n.bind(n, 17671));
                return (n) =>
                    (0, i.jsx)(t, {
                        ...n,
                        guildId: e.id
                    });
            })
    },
    {
        key: 'JOIN_SERVERS',
        renderIcon: (e) =>
            (0, i.jsx)(a.CompassIcon, {
                size: 'md',
                color: 'currentColor',
                className: e
            }),
        getName: () => f.intl.string(f.t.K50GHR),
        handler: (e, t) => (0, u.XU)(e.id, t.id)
    },
    {
        key: 'ADD_SERVERS',
        renderIcon: (e) =>
            (0, i.jsx)(a.PlusSmallIcon, {
                size: 'md',
                color: 'currentColor',
                className: e
            }),
        getName: () => f.intl.string(f.t.emRpdX),
        handler: (e, t) =>
            (0, a.openModalLazy)(async () => {
                let { default: l } = await n.e('79764').then(n.bind(n, 533202));
                return (n) =>
                    (0, i.jsx)(l, {
                        ...n,
                        directoryGuildName: e.name,
                        directoryGuildId: e.id,
                        directoryChannelId: t.id
                    });
            })
    },
    {
        key: 'INVITE_MEMBERS',
        renderIcon: (e) => (0, i.jsx)(a.GroupPlusIcon, { className: e }),
        getName: () => f.intl.string(f.t.MJQOuL),
        handler: (e, t) =>
            (0, a.openModalLazy)(async () => {
                let { default: l } = await Promise.all([n.e('7654'), n.e('86004')]).then(n.bind(n, 560114));
                return (n) =>
                    (0, i.jsx)(l, {
                        ...n,
                        guild: e,
                        channel: t,
                        source: m.t4x.HUB_SIDEBAR
                    });
            })
    }
];
t.Z = (e) => {
    let { guild: t, channel: n } = e,
        a = (0, o.ZP)(t.id);
    l.useEffect(() => {
        h.Z.trackExposure({
            guildId: t.id,
            location: '543af8_1'
        });
    }, [t.id]);
    let { showHubEventsList: u } = h.Z.useExperiment(
            {
                guildId: t.id,
                location: '543af8_2'
            },
            { autoTrackExposure: !1 }
        ),
        m = (0, r.e7)([d.Z], () => null != n && d.Z.getChannelId() === n.id),
        f = l.useMemo(() => ({ numEvents: a.length }), [a.length]),
        v = (0, p.t)(n);
    return (0, i.jsx)(i.Fragment, {
        children: g.map((e) => {
            let { key: l, getName: r, handler: a, renderIcon: o } = e;
            if (!u && 'EVENTS' === l) return null;
            let d = ''.concat(l, '-').concat(t.id);
            return (0, i.jsx)(
                s.m,
                {
                    id: d,
                    renderIcon: o,
                    text: r(f),
                    selected: m && 'JOIN_SERVERS' === l,
                    onClick: null != n ? () => a(t, n) : void 0,
                    trailing: 'JOIN_SERVERS' === l && v > 0 ? (0, c.N)(v) : null
                },
                d
            );
        })
    });
};
