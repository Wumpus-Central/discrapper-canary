t.d(n, { default: () => T });
var i = t(200651);
t(192379);
var l = t(481060),
    a = t(239091),
    r = t(883385),
    d = t(108843),
    u = t(100527),
    o = t(299206),
    s = t(819403),
    c = t(286694),
    _ = t(314897),
    E = t(933409),
    g = t(389052),
    f = t(158508),
    h = t(991307),
    v = t(37258),
    Z = t(700994),
    A = t(981631),
    S = t(388032);
let T = (0, d.Z)(
    (0, r.Z)(
        function (e) {
            let { user: n, guildId: t, channel: r, onSelect: d } = e,
                u = r.id,
                A = (0, v.Z)({
                    userId: n.id,
                    guildId: t,
                    channelId: u,
                    showGuildProfile: !0,
                    icon: (0, i.jsx)(l.tBG, { size: 'sm' }),
                    label: S.intl.string(S.t.iXAna2)
                }),
                T = (0, Z.Z)(n.id),
                I = (0, h.Z)(n.id),
                M = (0, f.Z)({
                    user: n,
                    guildId: t,
                    channelId: u,
                    location: 'GuildVoiceUserContextMenu'
                }),
                m = (0, g.Z)({
                    user: n,
                    guildId: t,
                    channelId: u,
                    location: 'GuildChannelUserContextMenu'
                }),
                C = (0, E.Z)(n, t, u),
                N = (0, o.Z)({
                    id: n.id,
                    label: S.intl.string(S.t['/AXYnJ'])
                }),
                b = (0, s.Z)(n),
                x = (0, c.Z)(n, t, u),
                P = n.isNonUserBot(),
                y = n.id === _.default.getId();
            return (0, i.jsx)(l.v2r, {
                navId: 'user-context',
                onClose: a.Zy,
                'aria-label': S.intl.string(S.t.liqwPD),
                onSelect: d,
                variant: 'fixed',
                children:
                    !P &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsxs)(l.kSQ, {
                                children: [b, x]
                            }),
                            (0, i.jsx)(l.kSQ, { children: A }),
                            (0, i.jsxs)(l.kSQ, {
                                children: [T, I]
                            }),
                            !y &&
                                (0, i.jsx)(l.kSQ, {
                                    children: (0, i.jsxs)(l.sNh, {
                                        id: 'more-options',
                                        label: S.intl.string(S.t.PdRCRk),
                                        children: [
                                            (0, i.jsx)(l.kSQ, { children: N }),
                                            (0, i.jsxs)(l.kSQ, {
                                                children: [M, m]
                                            }),
                                            (0, i.jsx)(l.kSQ, { children: C })
                                        ]
                                    })
                                }),
                            y && (0, i.jsx)(l.kSQ, { children: (0, i.jsx)(l.kSQ, { children: N }) })
                        ]
                    })
            });
        },
        { object: A.qAy.CONTEXT_MENU }
    ),
    [u.Z.VOICE_USER]
);
