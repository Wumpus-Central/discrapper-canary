t.d(n, {
    default: () => S,
});
var r = t(627968);
t(64700);
var i = t(311907),
    l = t(397927),
    a = t(442433),
    o = t(847767),
    c = t(358367),
    u = t(793574),
    s = t(886393),
    d = t(475777),
    A = t(848977),
    f = t(995102),
    b = t(288104),
    y = t(661504),
    E = t(304694),
    p = t(671483),
    v = t(217563),
    g = t(50268),
    O = t(769591),
    h = t(446600),
    j = t(914853),
    D = t(708653),
    I = t(297460),
    N = t(652215),
    C = t(985018);
let S = (0, c.A)(
    (0, o.A)(
        function (e) {
            let { channel: n, guild: t, onSelect: o, widgetType: c } = e,
                u = n.isGuildStageVoice(),
                N = (0, i.bG)([h.A], () => (u ? h.A.getStageInstanceByChannel(n.id) : void 0), [u, n.id]),
                S = (0, A.A)(n),
                _ = (0, s.A)(n),
                { toggleFavoriteItem: m } = (0, D.Ay)(j.x.VOICE, n, c),
                x = (0, f.Ay)(n),
                P = (0, b.A)(n),
                M = (0, d.A)(n, t, N),
                w = (0, I.A)(
                    {
                        kind: "CHANNEL",
                        channel: n,
                        guildId: t.id,
                    },
                    c,
                ),
                G = (0, g.A)({
                    id: n.id,
                    label: C.intl.string(C.t.gFHI3k),
                }),
                U = (0, E.A)(n),
                L = (0, p.A)(n, t),
                k = (0, v.A)(n, t.id),
                R = (0, O.os)("OverlayChannelListVoiceChannelContextMenu"),
                T = (0, y.Ay)(n);
            return (0, r.jsxs)(l.W1t, {
                navId: "overlay-channel-context",
                onClose: a.Z_,
                "aria-label": C.intl.string(C.t.Xm41aV),
                onSelect: o,
                children: [
                    (0, r.jsxs)(
                        l.rXV,
                        {
                            children: [w, m, M, _],
                        },
                        "primary-actions",
                    ),
                    (0, r.jsxs)(
                        l.rXV,
                        {
                            children: [k, S, L, U],
                        },
                        "voice-actions",
                    ),
                    (0, r.jsxs)(
                        l.rXV,
                        {
                            children: [x, R ? T : P],
                        },
                        "notifications",
                    ),
                    (0, r.jsx)(
                        l.rXV,
                        {
                            children: G,
                        },
                        "developer-actions",
                    ),
                ],
            });
        },
        {
            object: N.ZSU.CONTEXT_MENU,
        },
    ),
    [u.A.CONTEXT_MENU, u.A.OVERLAY, u.A.CHANNEL_LIST_VOICE_CHANNEL_MENU],
);
