n.d(t, { Z: () => _ });
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    o = n(554747),
    s = n(434479),
    c = n(593364),
    d = n(703656),
    u = n(944486),
    h = n(147754),
    p = n(688438),
    m = n(981631),
    g = n(388032);
let f = [
        {
            key: 'EVENTS',
            renderIcon: (e) =>
                (0, i.jsx)(a.Que, {
                    size: 'md',
                    color: 'currentColor',
                    className: e
                }),
            getName: (e) => {
                let { numEvents: t } = e;
                return t > 0 ? g.intl.formatToPlainString(g.t.IBdqSk, { number: t }) : g.intl.string(g.t.tlopTE);
            },
            handler: (e) =>
                (0, a.ZDy)(async () => {
                    let { default: t } = await Promise.all([n.e('22347'), n.e('56236'), n.e('1752')]).then(n.bind(n, 17671));
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
                (0, i.jsx)(a.Jmo, {
                    size: 'md',
                    color: 'currentColor',
                    className: e
                }),
            getName: () => g.intl.string(g.t.K50GHR),
            handler: (e, t) => (0, d.XU)(e.id, t.id)
        },
        {
            key: 'ADD_SERVERS',
            renderIcon: (e) =>
                (0, i.jsx)(a.qJs, {
                    size: 'md',
                    color: 'currentColor',
                    className: e
                }),
            getName: () => g.intl.string(g.t.emRpdX),
            handler: (e, t) =>
                (0, a.ZDy)(async () => {
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
            renderIcon: (e) => (0, i.jsx)(a.ejJ, { className: e }),
            getName: () => g.intl.string(g.t.MJQOuL),
            handler: (e, t) =>
                (0, a.ZDy)(async () => {
                    let { default: l } = await Promise.all([n.e('7654'), n.e('76236')]).then(n.bind(n, 560114));
                    return (n) =>
                        (0, i.jsx)(l, {
                            ...n,
                            guild: e,
                            channel: t,
                            source: m.t4x.HUB_SIDEBAR
                        });
                })
        }
    ],
    _ = (e) => {
        let { guild: t, channel: n } = e,
            a = (0, o.ZP)(t.id);
        l.useEffect(() => {
            h.Z.trackExposure({
                guildId: t.id,
                location: '543af8_1'
            });
        }, [t.id]);
        let { showHubEventsList: d } = h.Z.useExperiment(
                {
                    guildId: t.id,
                    location: '543af8_2'
                },
                { autoTrackExposure: !1 }
            ),
            m = (0, r.e7)([u.Z], () => null != n && u.Z.getChannelId() === n.id),
            g = l.useMemo(() => ({ numEvents: a.length }), [a.length]),
            _ = (0, p.t)(n);
        return (0, i.jsx)(i.Fragment, {
            children: f.map((e) => {
                let { key: l, getName: r, handler: a, renderIcon: o } = e;
                if (!d && 'EVENTS' === l) return null;
                let u = ''.concat(l, '-').concat(t.id);
                return (0, i.jsx)(
                    s.m,
                    {
                        id: u,
                        renderIcon: o,
                        text: r(g),
                        selected: m && 'JOIN_SERVERS' === l,
                        onClick: null != n ? () => a(t, n) : void 0,
                        trailing: 'JOIN_SERVERS' === l && _ > 0 ? (0, c.N)(_) : null
                    },
                    u
                );
            })
        });
    };
