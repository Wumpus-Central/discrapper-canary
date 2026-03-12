t.d(n, { default: () => M });
var i = t(627968);
t(64700);
var r = t(311907),
    l = t(397927),
    a = t(442433),
    s = t(847767),
    u = t(358367),
    o = t(793574),
    d = t(886393),
    c = t(475777),
    A = t(848977),
    E = t(995102),
    v = t(288104),
    g = t(661504),
    f = t(304694),
    h = t(671483),
    I = t(217563),
    N = t(50268),
    y = t(769591),
    p = t(446600),
    C = t(914853),
    D = t(708653),
    b = t(297460),
    _ = t(652215),
    x = t(985018);
let M = (0, u.A)(
    (0, s.A)(
        function (e) {
            let { channel: n, guild: t, onSelect: s, widgetType: u } = e,
                o = n.isGuildStageVoice(),
                _ = (0, r.bG)([p.A], () => (o ? p.A.getStageInstanceByChannel(n.id) : void 0), [o, n.id]),
                M = (0, A.A)(n),
                S = (0, d.A)(n),
                { toggleFavoriteItem: j } = (0, D.Ay)(C.x.VOICE, n, u),
                O = (0, E.A)(n),
                U = (0, v.A)(n),
                G = (0, c.A)(n, t, _),
                L = (0, b.A)({ kind: "CHANNEL", channel: n, guildId: t.id }, u),
                T = (0, N.A)({ id: n.id, label: x.intl.string(x.t.gFHI3k) }),
                R = (0, f.A)(n),
                m = (0, h.A)(n, t),
                k = (0, I.A)(n, t.id),
                F = (0, y.os)("OverlayChannelListVoiceChannelContextMenu"),
                H = (0, g.Ay)(n);
            return (0, i.jsxs)(l.W1t, {
                navId: "overlay-channel-context",
                onClose: a.Z_,
                "aria-label": x.intl.string(x.t.Xm41aV),
                onSelect: s,
                children: [
                    (0, i.jsxs)(l.rXV, { children: [L, j, G, S] }, "primary-actions"),
                    (0, i.jsxs)(l.rXV, { children: [k, M, m, R] }, "voice-actions"),
                    (0, i.jsxs)(l.rXV, { children: [O, F ? H : U] }, "notifications"),
                    (0, i.jsx)(l.rXV, { children: T }, "developer-actions"),
                ],
            });
        },
        { object: _.ZSU.CONTEXT_MENU },
    ),
    [o.A.CONTEXT_MENU, o.A.OVERLAY, o.A.CHANNEL_LIST_VOICE_CHANNEL_MENU],
);
