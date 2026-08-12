"use strict";
n.d(t, { A: () => m });
var i = n(477900),
    r = n(582128),
    a = n(435558),
    s = n.n(a),
    l = n(17928),
    o = n(97808),
    d = n(778712),
    c = n(834730),
    u = n(7807),
    _ = n(661531),
    E = n(565645),
    A = n(287809),
    h = n(562153),
    I = n(231236);
function f(e) {
    let { avatarURL: t, avatarLabel: n, text: r, leading: a } = e;
    return (0, i.jsxs)("div", {
        className: I.AB,
        children: [
            (0, i.jsx)(o.eu, { "aria-label": n, size: d._3.SIZE_24, src: t }),
            (0, i.jsxs)(c.E, {
                className: I.PW,
                color: "text-overlay-light",
                variant: "text-sm/normal",
                children: [a, r],
            }),
        ],
    });
}
function p(e) {
    let { user: t, guildId: n, channelId: r } = e,
        a = (0, h.tx)(n, r, t);
    return null == t ? null : (0, i.jsx)(f, { avatarURL: t.getAvatarURL(n, 24, !1), avatarLabel: a, text: a });
}
function T(e) {
    let { soundboard: t, user: n, guildId: r } = e;
    if (null == n) return null;
    let a =
        null != t.emojiId || null != t.emojiName
            ? (0, i.jsx)(E.A, {
                  emojiId: t.emojiId ?? null,
                  emojiName: t.emojiName ?? null,
                  animated: t.emojiAnimated ?? !1,
                  alt: t.name,
                  size: "reaction",
              })
            : (0, i.jsx)(u.J, { size: "refresh_sm", color: _.A.colors.ICON_DEFAULT });
    return (0, i.jsx)(f, { avatarURL: n.getAvatarURL(r, 24, !1), avatarLabel: n.username, text: t.name, leading: a });
}
let m = r.memo(function (e) {
    let { speakingUserIds: t, activeSoundboards: n, userIds: r, guildId: a, channelId: o } = e,
        d = (0, l.cf)([A.default], () => s().pick(A.default.getUsers(), r));
    return (0, i.jsxs)("div", {
        className: I.zr,
        children: [
            t.map((e) => {
                let t = d[e];
                return (0, i.jsx)(p, { user: t, guildId: a, channelId: o }, e);
            }),
            n.map((e) => {
                let t = d[e.userId];
                return (0, i.jsx)(
                    T,
                    { soundboard: e, user: t, guildId: a, channelId: o },
                    `${e.soundboardId}:${e.userId}`,
                );
            }),
        ],
    });
});
