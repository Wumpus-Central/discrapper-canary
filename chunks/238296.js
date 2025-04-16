n.d(t, {
    E: () => P,
    Y: () => S,
    default: () => x
});
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(239091),
    c = n(883385),
    l = n(108843),
    u = n(100527),
    a = n(167675),
    s = n(737013),
    f = n(607783),
    d = n(589049),
    b = n(299206),
    p = n(314897),
    O = n(389052),
    y = n(158508),
    g = n(88966),
    j = n(991307),
    v = n(37258),
    Z = n(700994),
    h = n(981631),
    m = n(388032);
function S(e) {
    let { isOwnSettings: t, userId: n, channelId: o, guildId: c, context: l } = e,
        u = (0, v.Z)({
            userId: n,
            guildId: c,
            channelId: o,
            showGuildProfile: !0,
            icon: (0, r.jsx)(i.tBG, { size: 'sm' }),
            label: m.NW.string(m.t.iXAna2)
        }),
        f = (0, g.Z)(n, l, i.kBi),
        b = (0, Z.Z)(n),
        p = (0, j.Z)(n),
        O = (0, a.Z)(n),
        y = (0, s.Z)(n),
        h = (0, d.Z)();
    return [
        (0, r.jsxs)(i.kSQ, {
            children: [u, f]
        }),
        (0, r.jsxs)(i.kSQ, {
            children: [b, p, O, y, t && h]
        })
    ];
}
function P(e, t, n) {
    let o = (0, f.B)({
            userId: e.id,
            channelId: t,
            guildId: n,
            simplified: !0
        }),
        c = (0, b.Z)({
            id: e.id,
            label: m.NW.string(m.t['/AXYnJ'])
        }),
        l = (0, y.Z)({
            user: e,
            guildId: n,
            channelId: t,
            location: 'GuildVoiceUserContextMenu'
        }),
        u = (0, O.Z)({
            user: e,
            guildId: n,
            channelId: t,
            location: 'GuildVoiceUserContextMenu'
        }),
        a = (0, r.jsxs)(i.kSQ, {
            children: [o, c]
        });
    return [
        (0, r.jsxs)(i.kSQ, {
            children: [l, u]
        }),
        a
    ];
}
let x = (0, l.Z)(
    (0, c.Z)(
        function (e) {
            let { user: t, channel: n, onSelect: c, onInteraction: l, context: u } = e,
                a = n.id,
                s = t.isNonUserBot(),
                f = t.id === p.default.getId(),
                d = S({
                    isOwnSettings: f,
                    userId: t.id,
                    channelId: a,
                    context: u
                }),
                O = P(t, a),
                y = (0, b.Z)({
                    id: t.id,
                    label: m.NW.string(m.t['/AXYnJ'])
                });
            return (0, r.jsx)(i.v2r, {
                navId: 'user-context',
                onClose: o.Zy,
                'aria-label': m.NW.string(m.t.liqwPD),
                onSelect: c,
                onInteraction: l,
                variant: 'fixed',
                children:
                    !s &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            d,
                            !f &&
                                (0, r.jsx)(i.kSQ, {
                                    children: (0, r.jsx)(i.sNh, {
                                        id: 'more-options',
                                        label: m.NW.string(m.t.PdRCRk),
                                        children: O
                                    })
                                }),
                            f && (0, r.jsx)(i.kSQ, { children: y })
                        ]
                    })
            });
        },
        { object: h.qAy.CONTEXT_MENU }
    ),
    [u.Z.VOICE_USER]
);
