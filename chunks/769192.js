n.d(t, { default: () => T });
var i = n(627968);
n(64700);
var l = n(17928),
    r = n(550079),
    a = n(477782),
    s = n(442433),
    d = n(847767),
    u = n(358367),
    o = n(793574),
    c = n(886393),
    A = n(475777),
    E = n(848977),
    g = n(995102),
    C = n(288104),
    h = n(661504),
    _ = n(304694),
    f = n(671483),
    N = n(217563),
    v = n(50268),
    I = n(769591),
    y = n(446600),
    S = n(914853),
    b = n(708653),
    x = n(297460),
    D = n(652215),
    p = n(985018);
let T = (0, u.A)(
    (0, d.A)(
        function (e) {
            let { channel: t, guild: n, onSelect: d, widgetType: u } = e,
                o = t.isGuildStageVoice(),
                D = (0, l.bG)([y.A], () => (o ? y.A.getStageInstanceByChannel(t.id) : void 0), [o, t.id]),
                T = (0, E.A)(t),
                M = (0, c.A)(t),
                { toggleFavoriteItem: O } = (0, b.Ay)(S.x.VOICE, t, u),
                L = (0, g.A)(t),
                U = (0, C.A)(t),
                j = (0, A.A)(t, n, D),
                G = (0, x.A)({ kind: "CHANNEL", channel: t, guildId: n.id }, u),
                R = (0, v.A)({ id: t.id, label: p.intl.string(p.t.gFHI3k) }),
                m = (0, _.A)(t),
                k = (0, f.A)(t, n),
                H = (0, N.A)(t, n.id),
                V = (0, I.os)("OverlayChannelListVoiceChannelContextMenu"),
                F = (0, h.Ay)(t);
            return (0, i.jsxs)(r.W, {
                navId: "overlay-channel-context",
                onClose: s.Z_,
                "aria-label": p.intl.string(p.t.Xm41aV),
                onSelect: d,
                children: [
                    (0, i.jsxs)(a.rX, { children: [G, O, j, M] }, "primary-actions"),
                    (0, i.jsxs)(a.rX, { children: [H, T, k, m] }, "voice-actions"),
                    (0, i.jsxs)(a.rX, { children: [L, V ? F : U] }, "notifications"),
                    (0, i.jsx)(a.rX, { children: R }, "developer-actions"),
                ],
            });
        },
        { object: D.ZSU.CONTEXT_MENU },
    ),
    [o.A.CONTEXT_MENU, o.A.OVERLAY, o.A.CHANNEL_LIST_VOICE_CHANNEL_MENU],
);
