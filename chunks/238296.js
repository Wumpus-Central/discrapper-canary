n.d(t, {
    E: () => C,
    Y: () => j,
    default: () => D
});
var i = n(200651);
n(192379);
var l = n(481060),
    o = n(239091),
    r = n(883385),
    d = n(108843),
    s = n(100527),
    a = n(167675),
    u = n(737013),
    c = n(607783),
    f = n(589049),
    Z = n(299206),
    g = n(314897),
    v = n(389052),
    x = n(158508),
    b = n(88966),
    m = n(991307),
    h = n(37258),
    S = n(700994),
    E = n(981631),
    A = n(388032);
function j(e) {
    let { isOwnSettings: t, userId: n, channelId: o, guildId: r, context: d } = e,
        s = (0, h.Z)({
            userId: n,
            guildId: r,
            channelId: o,
            showGuildProfile: !0,
            icon: (0, i.jsx)(l.tBG, { size: 'sm' }),
            label: A.intl.string(A.t.iXAna2)
        }),
        c = (0, b.Z)(n, d, l.kBi),
        Z = (0, S.Z)(n),
        g = (0, m.Z)(n),
        v = (0, a.Z)(n),
        x = (0, u.Z)(n),
        E = (0, f.Z)();
    return [
        (0, i.jsxs)(l.kSQ, {
            children: [s, c]
        }),
        (0, i.jsxs)(l.kSQ, {
            children: [Z, g, v, x, t && E]
        })
    ];
}
function C(e, t, n) {
    let o = (0, c.B)({
            userId: e.id,
            channelId: t,
            guildId: n,
            location: 'GuildVoiceUserContextMenu',
            simplified: !0
        }),
        r = (0, Z.Z)({
            id: e.id,
            label: A.intl.string(A.t['/AXYnJ'])
        }),
        d = (0, x.Z)({
            user: e,
            guildId: n,
            channelId: t,
            location: 'GuildVoiceUserContextMenu'
        }),
        s = (0, v.Z)({
            user: e,
            guildId: n,
            channelId: t,
            location: 'GuildVoiceUserContextMenu'
        });
    return [
        (0, i.jsxs)(l.kSQ, {
            children: [o, r]
        }),
        (0, i.jsxs)(l.kSQ, {
            children: [d, s]
        })
    ];
}
let D = (0, d.Z)(
    (0, r.Z)(
        function (e) {
            let { user: t, channel: n, onSelect: r, context: d } = e,
                s = n.id,
                a = t.isNonUserBot(),
                u = t.id === g.default.getId(),
                c = j({
                    isOwnSettings: u,
                    userId: t.id,
                    channelId: s,
                    context: d
                }),
                f = C(t, s),
                v = (0, Z.Z)({
                    id: t.id,
                    label: A.intl.string(A.t['/AXYnJ'])
                });
            return (0, i.jsx)(l.v2r, {
                navId: 'user-context',
                onClose: o.Zy,
                'aria-label': A.intl.string(A.t.liqwPD),
                onSelect: r,
                variant: 'fixed',
                children:
                    !a &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            c,
                            !u &&
                                (0, i.jsx)(l.kSQ, {
                                    children: (0, i.jsx)(l.sNh, {
                                        id: 'more-options',
                                        label: A.intl.string(A.t.PdRCRk),
                                        children: f
                                    })
                                }),
                            u && (0, i.jsx)(l.kSQ, { children: v })
                        ]
                    })
            });
        },
        { object: E.qAy.CONTEXT_MENU }
    ),
    [s.Z.VOICE_USER]
);
