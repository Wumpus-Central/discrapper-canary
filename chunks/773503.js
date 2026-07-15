n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    s = n(435558),
    a = n.n(s),
    r = n(17928),
    o = n(97808),
    d = n(778712),
    c = n(834730),
    u = n(287809),
    h = n(690521),
    m = n(562153),
    p = n(990956);
function g(e) {
    let { avatarURL: t, avatarLabel: n, text: l, leading: s } = e;
    return (0, i.jsxs)("div", {
        className: p.AB,
        children: [
            (0, i.jsx)(o.eu, { "aria-label": n, size: d._3.SIZE_24, src: t }),
            s,
            (0, i.jsx)(c.E, { className: p.PW, color: "text-overlay-light", variant: "text-sm/normal", children: l }),
        ],
    });
}
function f(e) {
    let { user: t, guildId: n, channelId: l } = e,
        s = (0, m.tx)(n, l, t);
    return null == t ? null : (0, i.jsx)(g, { avatarURL: t.getAvatarURL(n, 24, !1), avatarLabel: s, text: s });
}
function A(e) {
    let { soundboard: t, user: n, guildId: l } = e;
    if (null == n) return null;
    let s =
        null != t.emojiId || null != t.emojiName
            ? (0, i.jsx)("img", {
                  alt: t.name,
                  className: p.g8,
                  src: (0, h.Ez)({ id: t.emojiId, name: t.emojiName ?? "", animated: t.emojiAnimated ?? !1 }, 24),
              })
            : null;
    return (0, i.jsx)(g, { avatarURL: n.getAvatarURL(l, 24, !1), avatarLabel: n.username, text: t.name, leading: s });
}
let x = l.memo(function (e) {
    let { speakingUserIds: t, activeSoundboards: n, userIds: l, guildId: s, channelId: o } = e,
        d = (0, r.cf)([u.default], () => a().pick(u.default.getUsers(), l));
    return (0, i.jsxs)("div", {
        className: p.zr,
        children: [
            t.map((e) => {
                let t = d[e];
                return (0, i.jsx)(f, { user: t, guildId: s, channelId: o }, e);
            }),
            n.map((e) => {
                let t = d[e.userId];
                return (0, i.jsx)(
                    A,
                    { soundboard: e, user: t, guildId: s, channelId: o },
                    `${e.soundboardId}:${e.userId}`,
                );
            }),
        ],
    });
});
