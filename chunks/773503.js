s.d(t, { A: () => I });
var a = s(627968),
    n = s(64700),
    i = s(735438),
    r = s.n(i),
    o = s(17928),
    d = s(97808),
    l = s(778712),
    u = s(834730),
    m = s(287809),
    p = s(690521),
    h = s(562153),
    c = s(990956);
function g(e) {
    let { avatarURL: t, avatarLabel: s, text: n, leading: i } = e;
    return (0, a.jsxs)("div", {
        className: c.AB,
        children: [
            (0, a.jsx)(d.eu, { "aria-label": s, size: l._3.SIZE_24, src: t }),
            i,
            (0, a.jsx)(u.E, { className: c.PW, color: "always-white", variant: "text-sm/normal", children: n }),
        ],
    });
}
function S(e) {
    let { user: t, guildId: s, channelId: n } = e,
        i = (0, h.tx)(s, n, t);
    return null == t ? null : (0, a.jsx)(g, { avatarURL: t.getAvatarURL(s, 24, !1), avatarLabel: i, text: i });
}
function b(e) {
    let { soundboard: t, user: s, guildId: n } = e;
    if (null == s) return null;
    let i =
        null != t.emojiId || null != t.emojiName
            ? (0, a.jsx)("img", {
                  alt: t.name,
                  className: c.g8,
                  src: (0, p.Ez)({ id: t.emojiId, name: t.emojiName ?? "", animated: t.emojiAnimated ?? !1 }, 24),
              })
            : null;
    return (0, a.jsx)(g, { avatarURL: s.getAvatarURL(n, 24, !1), avatarLabel: s.username, text: t.name, leading: i });
}
let I = n.memo(function (e) {
    let { speakingUserIds: t, activeSoundboards: s, userIds: n, guildId: i, channelId: d } = e,
        l = (0, o.cf)([m.default], () => r().pick(m.default.getUsers(), n));
    return (0, a.jsxs)("div", {
        className: c.zr,
        children: [
            t.map((e) => {
                let t = l[e];
                return (0, a.jsx)(S, { user: t, guildId: i, channelId: d }, e);
            }),
            s.map((e) => {
                let t = l[e.userId];
                return (0, a.jsx)(
                    b,
                    { soundboard: e, user: t, guildId: i, channelId: d },
                    `${e.soundboardId}:${e.userId}`,
                );
            }),
        ],
    });
});
