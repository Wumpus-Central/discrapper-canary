n.d(t, {
    E: () => A,
    Y: () => E,
    default: () => L
});
var i = n(200651);
n(192379);
var l = n(481060),
    o = n(239091),
    s = n(883385),
    r = n(108843),
    d = n(100527),
    a = n(167675),
    u = n(737013),
    c = n(607783),
    f = n(589049),
    Z = n(299206),
    g = n(314897),
    v = n(389052),
    b = n(158508),
    x = n(88966),
    h = n(991307),
    m = n(37258),
    j = n(700994),
    S = n(981631),
    C = n(388032);
function E(e) {
    let { isOwnSettings: t, userId: n, channelId: o, guildId: s, context: r } = e,
        d = (0, m.Z)({
            userId: n,
            guildId: s,
            channelId: o,
            showGuildProfile: !0,
            icon: (0, i.jsx)(l.tBG, { size: 'sm' }),
            label: C.intl.string(C.t.iXAna2)
        }),
        c = (0, x.Z)(n, r, l.kBi),
        Z = (0, j.Z)(n),
        g = (0, h.Z)(n),
        v = (0, a.Z)(n),
        b = (0, u.Z)(n),
        S = (0, f.Z)();
    return [
        (0, i.jsxs)(l.kSQ, {
            children: [d, c]
        }),
        (0, i.jsxs)(l.kSQ, {
            children: [Z, g, v, b, t && S]
        })
    ];
}
function A(e, t, n) {
    let o = (0, c.B)({
            userId: e.id,
            channelId: t,
            guildId: n,
            location: 'GuildVoiceUserContextMenu',
            simplified: !0
        }),
        s = (0, Z.Z)({
            id: e.id,
            label: C.intl.string(C.t['/AXYnJ'])
        }),
        r = (0, b.Z)({
            user: e,
            guildId: n,
            channelId: t,
            location: 'GuildVoiceUserContextMenu'
        }),
        d = (0, v.Z)({
            user: e,
            guildId: n,
            channelId: t,
            location: 'GuildVoiceUserContextMenu'
        });
    return [
        (0, i.jsxs)(l.kSQ, {
            children: [o, s]
        }),
        (0, i.jsxs)(l.kSQ, {
            children: [r, d]
        })
    ];
}
let L = (0, r.Z)(
    (0, s.Z)(
        function (e) {
            let { user: t, channel: n, onSelect: s, context: r } = e,
                d = n.id,
                a = t.isNonUserBot(),
                u = t.id === g.default.getId(),
                c = E({
                    isOwnSettings: u,
                    userId: t.id,
                    channelId: d,
                    context: r
                }),
                f = A(t, d),
                v = (0, Z.Z)({
                    id: t.id,
                    label: C.intl.string(C.t['/AXYnJ'])
                });
            return (0, i.jsx)(l.v2r, {
                navId: 'user-context',
                onClose: o.Zy,
                'aria-label': C.intl.string(C.t.liqwPD),
                onSelect: s,
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
                                        label: C.intl.string(C.t.PdRCRk),
                                        children: f
                                    })
                                }),
                            u && (0, i.jsx)(l.kSQ, { children: v })
                        ]
                    })
            });
        },
        { object: S.qAy.CONTEXT_MENU }
    ),
    [d.Z.VOICE_USER]
);
