n.d(t, {
    E: () => x,
    Y: () => h,
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
    S = n(388032);
function h(e) {
    let { isOwnSettings: t, userId: n, channelId: o, guildId: l, context: c } = e,
        a = (0, v.Z)({
            userId: n,
            guildId: l,
            channelId: o,
            showGuildProfile: !0,
            icon: (0, r.jsx)(i.tBG, { size: 'sm' }),
            label: S.NW.string(S.t.iXAna2)
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
            location: 'GuildVoiceUserContextMenu',
            simplified: !0
        }),
        l = (0, b.Z)({
            id: e.id,
            label: S.NW.string(S.t['/AXYnJ'])
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
        });
    return [
        (0, r.jsxs)(i.kSQ, {
            children: [o, l]
        }),
        (0, r.jsxs)(i.kSQ, {
            children: [c, a]
        })
    ];
}
let E = (0, c.Z)(
    (0, l.Z)(
        function (e) {
            let { user: t, channel: n, onSelect: l, context: c } = e,
                a = n.id,
                u = t.isNonUserBot(),
                s = t.id === g.default.getId(),
                d = h({
                    isOwnSettings: s,
                    userId: t.id,
                    channelId: a,
                    context: c
                }),
                f = x(t, a),
                O = (0, b.Z)({
                    id: t.id,
                    label: S.NW.string(S.t['/AXYnJ'])
                });
            return (0, r.jsx)(i.v2r, {
                navId: 'user-context',
                onClose: o.Zy,
                'aria-label': S.NW.string(S.t.liqwPD),
                onSelect: l,
                variant: 'fixed',
                children:
                    !u &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            d,
                            !s &&
                                (0, r.jsx)(i.kSQ, {
                                    children: (0, r.jsx)(i.sNh, {
                                        id: 'more-options',
                                        label: S.NW.string(S.t.PdRCRk),
                                        children: f
                                    })
                                }),
                            s && (0, r.jsx)(i.kSQ, { children: O })
                        ]
                    })
            });
        },
        { object: Z.qAy.CONTEXT_MENU }
    ),
    [a.Z.VOICE_USER]
);
