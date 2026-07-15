"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    r = n(64700),
    a = n(435558),
    s = n.n(a),
    l = n(17928),
    o = n(97808),
    d = n(778712),
    c = n(834730),
    u = n(287809),
    _ = n(690521),
    E = n(562153),
    A = n(990956);
function h(e) {
    let { avatarURL: t, avatarLabel: n, text: r, leading: a } = e;
    return (0, i.jsxs)("div", {
        className: A.AB,
        children: [
            (0, i.jsx)(o.eu, { "aria-label": n, size: d._3.SIZE_24, src: t }),
            a,
            (0, i.jsx)(c.E, { className: A.PW, color: "text-overlay-light", variant: "text-sm/normal", children: r }),
        ],
    });
}
function I(e) {
    let { user: t, guildId: n, channelId: r } = e,
        a = (0, E.tx)(n, r, t);
    return null == t ? null : (0, i.jsx)(h, { avatarURL: t.getAvatarURL(n, 24, !1), avatarLabel: a, text: a });
}
function f(e) {
    let { soundboard: t, user: n, guildId: r } = e;
    if (null == n) return null;
    let a =
        null != t.emojiId || null != t.emojiName
            ? (0, i.jsx)("img", {
                  alt: t.name,
                  className: A.g8,
                  src: (0, _.Ez)({ id: t.emojiId, name: t.emojiName ?? "", animated: t.emojiAnimated ?? !1 }, 24),
              })
            : null;
    return (0, i.jsx)(h, { avatarURL: n.getAvatarURL(r, 24, !1), avatarLabel: n.username, text: t.name, leading: a });
}
let p = r.memo(function (e) {
    let { speakingUserIds: t, activeSoundboards: n, userIds: r, guildId: a, channelId: o } = e,
        d = (0, l.cf)([u.default], () => s().pick(u.default.getUsers(), r));
    return (0, i.jsxs)("div", {
        className: A.zr,
        children: [
            t.map((e) => {
                let t = d[e];
                return (0, i.jsx)(I, { user: t, guildId: a, channelId: o }, e);
            }),
            n.map((e) => {
                let t = d[e.userId];
                return (0, i.jsx)(
                    f,
                    { soundboard: e, user: t, guildId: a, channelId: o },
                    `${e.soundboardId}:${e.userId}`,
                );
            }),
        ],
    });
});
