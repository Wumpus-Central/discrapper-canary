a.d(t, { A: () => b });
var s = a(627968),
    n = a(64700),
    i = a(735438),
    r = a.n(i),
    o = a(17928),
    l = a(97808),
    d = a(778712),
    u = a(834730),
    p = a(287809),
    c = a(690521),
    m = a(562153),
    h = a(990956);
function g(e) {
    let { avatarURL: t, avatarLabel: a, text: n, leading: i } = e;
    return (0, s.jsxs)("div", {
        className: h.AB,
        children: [
            (0, s.jsx)(l.eu, { "aria-label": a, size: d._3.SIZE_24, src: t }),
            i,
            (0, s.jsx)(u.E, { className: h.PW, color: "always-white", variant: "text-sm/normal", children: n }),
        ],
    });
}
function S(e) {
    let { user: t, guildId: a, channelId: n } = e,
        i = (0, m.tx)(a, n, t);
    return null == t ? null : (0, s.jsx)(g, { avatarURL: t.getAvatarURL(a, 24, !1), avatarLabel: i, text: i });
}
function y(e) {
    let { soundboard: t, user: a, guildId: n } = e;
    if (null == a) return null;
    let i =
        null != t.emojiId || null != t.emojiName
            ? (0, s.jsx)("img", {
                  alt: t.name,
                  className: h.g8,
                  src: (0, c.Ez)({ id: t.emojiId, name: t.emojiName ?? "", animated: t.emojiAnimated ?? !1 }, 24),
              })
            : null;
    return (0, s.jsx)(g, { avatarURL: a.getAvatarURL(n, 24, !1), avatarLabel: a.username, text: t.name, leading: i });
}
let b = n.memo(function (e) {
    let { speakingUserIds: t, activeSoundboards: a, userIds: n, guildId: i, channelId: l } = e,
        d = (0, o.cf)([p.default], () => r().pick(p.default.getUsers(), n));
    return (0, s.jsxs)("div", {
        className: h.zr,
        children: [
            t.map((e) => {
                let t = d[e];
                return (0, s.jsx)(S, { user: t, guildId: i, channelId: l }, e);
            }),
            a.map((e) => {
                let t = d[e.userId];
                return (0, s.jsx)(
                    y,
                    { soundboard: e, user: t, guildId: i, channelId: l },
                    `${e.soundboardId}:${e.userId}`,
                );
            }),
        ],
    });
});
