"use strict";
n.d(t, { A: () => g });
var i = n(627968),
    r = n(64700),
    s = n(735438),
    a = n.n(s),
    o = n(17928),
    l = n(97808),
    u = n(778712),
    c = n(834730),
    d = n(287809),
    _ = n(690521),
    f = n(562153),
    h = n(990956);
function p(e) {
    let { avatarURL: t, avatarLabel: n, text: r, leading: s } = e;
    return (0, i.jsxs)("div", {
        className: h.AB,
        children: [
            (0, i.jsx)(l.eu, { "aria-label": n, size: u._3.SIZE_24, src: t }),
            s,
            (0, i.jsx)(c.E, { className: h.PW, color: "always-white", variant: "text-sm/normal", children: r }),
        ],
    });
}
function E(e) {
    let { user: t, guildId: n, channelId: r } = e,
        s = (0, f.tx)(n, r, t);
    return null == t ? null : (0, i.jsx)(p, { avatarURL: t.getAvatarURL(n, 24, !1), avatarLabel: s, text: s });
}
function m(e) {
    let { soundboard: t, user: n, guildId: r } = e;
    if (null == n) return null;
    let s =
        null != t.emojiId || null != t.emojiName
            ? (0, i.jsx)("img", {
                  alt: t.name,
                  className: h.g8,
                  src: (0, _.Ez)({ id: t.emojiId, name: t.emojiName ?? "", animated: t.emojiAnimated ?? !1 }, 24),
              })
            : null;
    return (0, i.jsx)(p, { avatarURL: n.getAvatarURL(r, 24, !1), avatarLabel: n.username, text: t.name, leading: s });
}
let g = r.memo(function (e) {
    let { speakingUserIds: t, activeSoundboards: n, userIds: r, guildId: s, channelId: l } = e,
        u = (0, o.cf)([d.default], () => a().pick(d.default.getUsers(), r));
    return (0, i.jsxs)("div", {
        className: h.zr,
        children: [
            t.map((e) => {
                let t = u[e];
                return (0, i.jsx)(E, { user: t, guildId: s, channelId: l }, e);
            }),
            n.map((e) => {
                let t = u[e.userId];
                return (0, i.jsx)(
                    m,
                    { soundboard: e, user: t, guildId: s, channelId: l },
                    `${e.soundboardId}:${e.userId}`,
                );
            }),
        ],
    });
});
