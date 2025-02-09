t.d(n, { default: () => T });
var i = t(200651);
t(192379);
var l = t(481060),
    r = t(239091),
    a = t(883385),
    u = t(108843),
    d = t(100527),
    o = t(299206),
    s = t(819403),
    c = t(286694),
    E = t(314897),
    _ = t(933409),
    g = t(389052),
    f = t(158508),
    v = t(991307),
    Z = t(37258),
    h = t(700994),
    A = t(981631),
    S = t(388032);
let T = (0, u.Z)(
    (0, a.Z)(
        function (e) {
            let { user: n, guildId: t, channel: a, onSelect: u } = e,
                d = a.id,
                A = (0, Z.Z)({
                    userId: n.id,
                    guildId: t,
                    channelId: d,
                    showGuildProfile: !0,
                    icon: (0, i.jsx)(l.tBG, { size: 'sm' }),
                    label: S.intl.string(S.t.iXAna2)
                }),
                T = (0, h.Z)(n.id),
                M = (0, v.Z)(n.id),
                m = (0, f.Z)({
                    user: n,
                    guildId: t,
                    channelId: d,
                    location: 'GuildVoiceUserContextMenu'
                }),
                I = (0, g.Z)({
                    user: n,
                    guildId: t,
                    channelId: d,
                    location: 'GuildChannelUserContextMenu'
                }),
                C = (0, _.Z)(n, t, d),
                b = (0, o.Z)({
                    id: n.id,
                    label: S.intl.string(S.t['/AXYnJ'])
                }),
                N = (0, s.Z)(n),
                P = (0, c.Z)(n, t, d),
                D = n.isNonUserBot(),
                U = n.id === E.default.getId();
            return (0, i.jsx)(l.v2r, {
                navId: 'user-context',
                onClose: r.Zy,
                'aria-label': S.intl.string(S.t.liqwPD),
                onSelect: u,
                variant: 'fixed',
                children:
                    !D &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsxs)(l.kSQ, {
                                children: [N, P]
                            }),
                            (0, i.jsx)(l.kSQ, { children: A }),
                            (0, i.jsxs)(l.kSQ, {
                                children: [T, M]
                            }),
                            !U &&
                                (0, i.jsx)(l.kSQ, {
                                    children: (0, i.jsxs)(l.sNh, {
                                        id: 'more-options',
                                        label: S.intl.string(S.t.PdRCRk),
                                        children: [
                                            (0, i.jsx)(l.kSQ, { children: b }),
                                            (0, i.jsxs)(l.kSQ, {
                                                children: [m, I]
                                            }),
                                            (0, i.jsx)(l.kSQ, { children: C })
                                        ]
                                    })
                                }),
                            U && (0, i.jsx)(l.kSQ, { children: (0, i.jsx)(l.kSQ, { children: b }) })
                        ]
                    })
            });
        },
        { object: A.qAy.CONTEXT_MENU }
    ),
    [d.Z.VOICE_USER]
);
