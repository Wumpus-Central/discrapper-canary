t.d(e, { default: () => k });
var n = t(477900);
t(582128);
var a = t(17928),
    s = t(980707),
    d = t(477782),
    r = t(442433),
    l = t(847767),
    c = t(358367),
    A = t(793574),
    o = t(886393),
    h = t(475777),
    C = t(868548),
    E = t(995102),
    N = t(288104),
    g = t(304694),
    p = t(671483),
    u = t(217563),
    _ = t(50268),
    v = t(446600),
    I = t(914853),
    x = t(708653),
    X = t(297460),
    b = t(652215),
    j = t(375708);
let k = (0, c.A)(
    (0, l.A)(
        function (i) {
            let { channel: e, guild: t, onSelect: l, widgetType: c } = i,
                A = e.isGuildStageVoice(),
                b = (0, a.bG)([v.A], () => (A ? v.A.getStageInstanceByChannel(e.id) : void 0), [A, e.id]),
                k = (0, C.A)(e),
                L = (0, o.A)(e),
                { toggleFavoriteItem: O } = (0, x.Ay)(I.x.VOICE, e, c),
                S = (0, E.A)(e),
                T = (0, h.A)(e, t, b),
                V = (0, X.A)({ kind: "CHANNEL", channel: e, guildId: t.id }, c),
                y = (0, _.A)({ id: e.id, label: j.intl.string(j.t.gFHI3k) }),
                H = (0, g.A)(e),
                U = (0, p.A)(e, t),
                f = (0, u.A)(e, t.id),
                m = (0, N.A)(e);
            return (0, n.jsxs)(s.W, {
                navId: "overlay-channel-context",
                onClose: r.Z_,
                "aria-label": j.intl.string(j.t.Xm41aV),
                onSelect: l,
                children: [
                    (0, n.jsxs)(d.rX, { children: [V, O, T, L] }, "primary-actions"),
                    (0, n.jsxs)(d.rX, { children: [f, k, U, H] }, "voice-actions"),
                    (0, n.jsxs)(d.rX, { children: [S, m] }, "notifications"),
                    (0, n.jsx)(d.rX, { children: y }, "developer-actions"),
                ],
            });
        },
        { object: b.ZSU.CONTEXT_MENU },
    ),
    [A.A.CONTEXT_MENU, A.A.OVERLAY, A.A.CHANNEL_LIST_VOICE_CHANNEL_MENU],
);
