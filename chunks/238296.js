n.d(t, {
    E: () => S,
    Y: () => x,
    default: () => E,
});
var i = n(54381);
n(473749);
var r = n(481060),
    l = n(239091),
    o = n(883385),
    c = n(108843),
    s = n(100527),
    a = n(167675),
    u = n(737013),
    d = n(607783),
    f = n(589049),
    b = n(299206),
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
            label: h.intl.string(h.t.iXAna6),
        }),
        d = (0, p.Z)(n, c, r.kBi),
        b = (0, Z.Z)(n),
        g = (0, v.Z)(n),
        j = (0, a.Z)(n),
        m = (0, u.Z)(n),
        y = (0, f.Z)();
    return [
        (0, i.jsxs)(r.kSQ, {
            children: [s, d],
        }),
        (0, i.jsxs)(r.kSQ, {
            children: [b, g, j, m, t && y],
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
        o = (0, b.Z)({
            id: e.id,
            label: h.intl.string(h.t["/AXYnE"]),
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
let E = (0, c.Z)(
    (0, o.Z)(
        function (e) {
            let { user: t, channel: n, onSelect: o, onInteraction: c, context: s } = e,
                a = n.id,
                u = t.isNonUserBot(),
                d = t.id === g.default.getId(),
                f = x({
                    isOwnSettings: d,
                    userId: t.id,
                    channelId: a,
                    context: s,
                }),
                j = S(t, a),
                m = (0, b.Z)({
                    id: t.id,
                    label: h.intl.string(h.t["/AXYnE"]),
                });
            return (0, i.jsx)(r.v2r, {
                navId: "user-context",
                onClose: l.Zy,
                "aria-label": h.intl.string(h.t.liqwPJ),
                onSelect: o,
                onInteraction: c,
                variant: "fixed",
                children:
                    !u &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            f,
                            !d &&
                                (0, i.jsx)(r.kSQ, {
                                    children: (0, i.jsx)(r.sNh, {
                                        id: "more-options",
                                        label: h.intl.string(h.t.PdRCRg),
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
