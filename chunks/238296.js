n.d(t, {
    E: () => x,
    Y: () => S,
    default: () => E
});
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(239091),
    l = n(883385),
    c = n(108843),
    a = n(100527),
    u = n(167675),
    s = n(737013),
    d = n(607783),
    f = n(589049),
    b = n(299206),
    g = n(314897),
    O = n(389052),
    p = n(158508),
    j = n(88966),
    y = n(991307),
    v = n(37258),
    m = n(700994),
    Z = n(981631),
    h = n(388032);
function S(e) {
    let { isOwnSettings: t, userId: n, channelId: o, guildId: l, context: c } = e,
        a = (0, v.Z)({
            userId: n,
            guildId: l,
            channelId: o,
            showGuildProfile: !0,
            icon: (0, r.jsx)(i.tBG, { size: 'sm' }),
            label: h.NW.string(h.t.iXAna2)
        }),
        d = (0, j.Z)(n, c, i.kBi),
        b = (0, m.Z)(n),
        g = (0, y.Z)(n),
        O = (0, u.Z)(n),
        p = (0, s.Z)(n),
        Z = (0, f.Z)();
    return [
        (0, r.jsxs)(i.kSQ, {
            children: [a, d]
        }),
        (0, r.jsxs)(i.kSQ, {
            children: [b, g, O, p, t && Z]
        })
    ];
}
function x(e, t, n) {
    let o = (0, d.B)({
            userId: e.id,
            channelId: t,
            guildId: n,
            simplified: !0
        }),
        l = (0, b.Z)({
            id: e.id,
            label: h.NW.string(h.t['/AXYnJ'])
        }),
        c = (0, p.Z)({
            user: e,
            guildId: n,
            channelId: t,
            location: 'GuildVoiceUserContextMenu'
        }),
        a = (0, O.Z)({
            user: e,
            guildId: n,
            channelId: t,
            location: 'GuildVoiceUserContextMenu'
        }),
        u = (0, r.jsxs)(i.kSQ, {
            children: [o, l]
        });
    return [
        (0, r.jsxs)(i.kSQ, {
            children: [c, a]
        }),
        u
    ];
}
let E = (0, c.Z)(
    (0, l.Z)(
        function (e) {
            let { user: t, channel: n, onSelect: l, onInteraction: c, context: a } = e,
                u = n.id,
                s = t.isNonUserBot(),
                d = t.id === g.default.getId(),
                f = S({
                    isOwnSettings: d,
                    userId: t.id,
                    channelId: u,
                    context: a
                }),
                O = x(t, u),
                p = (0, b.Z)({
                    id: t.id,
                    label: h.NW.string(h.t['/AXYnJ'])
                });
            return (0, r.jsx)(i.v2r, {
                navId: 'user-context',
                onClose: o.Zy,
                'aria-label': h.NW.string(h.t.liqwPD),
                onSelect: l,
                onInteraction: c,
                variant: 'fixed',
                children:
                    !s &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            f,
                            !d &&
                                (0, r.jsx)(i.kSQ, {
                                    children: (0, r.jsx)(i.sNh, {
                                        id: 'more-options',
                                        label: h.NW.string(h.t.PdRCRk),
                                        children: O
                                    })
                                }),
                            d && (0, r.jsx)(i.kSQ, { children: p })
                        ]
                    })
            });
        },
        { object: Z.qAy.CONTEXT_MENU }
    ),
    [a.Z.VOICE_USER]
);
