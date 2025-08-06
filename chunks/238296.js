n.d(t, {
    E: () => S,
    Y: () => x,
    default: () => D,
});
var i = n(255367);
n(73800);
var r = n(481060),
    l = n(239091),
    o = n(883385),
    c = n(108843),
    s = n(100527),
    a = n(167675),
    u = n(737013),
    d = n(607783),
    b = n(589049),
    f = n(299206),
    g = n(314897),
    j = n(389052),
    m = n(158508),
    p = n(88966),
    v = n(991307),
    O = n(37258),
    Z = n(700994),
    y = n(981631),
    h = n(388032);
function x(e) {
    let { isOwnSettings: t, userId: n, channelId: l, guildId: o, context: c } = e,
        s = (0, O.Z)({
            userId: n,
            guildId: o,
            channelId: l,
            showGuildProfile: !0,
            icon: (0, i.jsx)(r.tBG, { size: "sm" }),
            label: h.intl.string(h.t.iXAna2),
        }),
        d = (0, p.Z)(n, c, r.kBi),
        f = (0, Z.Z)(n),
        g = (0, v.Z)(n),
        j = (0, a.Z)(n),
        m = (0, u.Z)(n),
        y = (0, b.Z)();
    return [
        (0, i.jsxs)(r.kSQ, {
            children: [s, d],
        }),
        (0, i.jsxs)(r.kSQ, {
            children: [f, g, j, m, t && y],
        }),
    ];
}
function S(e, t, n) {
    let l = (0, d.B)({
            userId: e.id,
            channelId: t,
            guildId: n,
            minimal: !0,
        }),
        o = (0, f.Z)({
            id: e.id,
            label: h.intl.string(h.t["/AXYnJ"]),
        }),
        c = (0, m.Z)({
            user: e,
            guildId: n,
            channelId: t,
            location: "GuildVoiceUserContextMenu",
        }),
        s = (0, j.Z)({
            user: e,
            guildId: n,
            channelId: t,
            location: "GuildVoiceUserContextMenu",
        }),
        a = (0, i.jsxs)(r.kSQ, {
            children: [l, o],
        });
    return [
        (0, i.jsxs)(r.kSQ, {
            children: [c, s],
        }),
        a,
    ];
}
let D = (0, c.Z)(
    (0, o.Z)(
        function (e) {
            let { user: t, channel: n, onSelect: o, onInteraction: c, context: s } = e,
                a = n.id,
                u = t.isNonUserBot(),
                d = t.id === g.default.getId(),
                b = x({
                    isOwnSettings: d,
                    userId: t.id,
                    channelId: a,
                    context: s,
                }),
                j = S(t, a),
                m = (0, f.Z)({
                    id: t.id,
                    label: h.intl.string(h.t["/AXYnJ"]),
                });
            return (0, i.jsx)(r.v2r, {
                navId: "user-context",
                onClose: l.Zy,
                "aria-label": h.intl.string(h.t.liqwPD),
                onSelect: o,
                onInteraction: c,
                variant: "fixed",
                children:
                    !u &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            b,
                            !d &&
                                (0, i.jsx)(r.kSQ, {
                                    children: (0, i.jsx)(r.sNh, {
                                        id: "more-options",
                                        label: h.intl.string(h.t.PdRCRk),
                                        children: j,
                                    }),
                                }),
                            d && (0, i.jsx)(r.kSQ, { children: m }),
                        ],
                    }),
            });
        },
        { object: y.qAy.CONTEXT_MENU },
    ),
    [s.Z.VOICE_USER],
);
