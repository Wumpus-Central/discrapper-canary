n.d(t, { A: () => E });
var i = n(477900),
    l = n(582128),
    a = n(435558),
    s = n.n(a),
    r = n(17928),
    o = n(97808),
    d = n(778712),
    c = n(834730),
    u = n(7807),
    h = n(661531),
    m = n(565645),
    p = n(287809),
    g = n(562153),
    f = n(401381);
function A(e) {
    let { avatarURL: t, avatarLabel: n, text: l, leading: a } = e;
    return (0, i.jsxs)("div", {
        className: f.AB,
        children: [
            (0, i.jsx)(o.eu, { "aria-label": n, size: d._3.SIZE_24, src: t }),
            (0, i.jsxs)(c.E, {
                className: f.PW,
                color: "text-overlay-light",
                variant: "text-sm/normal",
                children: [a, l],
            }),
        ],
    });
}
function x(e) {
    let { user: t, guildId: n, channelId: l } = e,
        a = (0, g.tx)(n, l, t);
    return null == t ? null : (0, i.jsx)(A, { avatarURL: t.getAvatarURL(n, 24, !1), avatarLabel: a, text: a });
}
function v(e) {
    let { soundboard: t, user: n, guildId: l } = e;
    if (null == n) return null;
    let a =
        null != t.emojiId || null != t.emojiName
            ? (0, i.jsx)(m.A, {
                  emojiId: t.emojiId ?? null,
                  emojiName: t.emojiName ?? null,
                  animated: t.emojiAnimated ?? !1,
                  alt: t.name,
                  size: "reaction",
              })
            : (0, i.jsx)(u.J, { size: "refresh_sm", color: h.A.colors.ICON_DEFAULT });
    return (0, i.jsx)(A, { avatarURL: n.getAvatarURL(l, 24, !1), avatarLabel: n.username, text: t.name, leading: a });
}
let E = l.memo(function (e) {
    let { speakingUserIds: t, activeSoundboards: n, userIds: l, guildId: a, channelId: o } = e,
        d = (0, r.cf)([p.default], () => s().pick(p.default.getUsers(), l));
    return (0, i.jsxs)("div", {
        className: f.zr,
        children: [
            t.map((e) => {
                let t = d[e];
                return (0, i.jsx)(x, { user: t, guildId: a, channelId: o }, e);
            }),
            n.map((e) => {
                let t = d[e.userId];
                return (0, i.jsx)(
                    v,
                    { soundboard: e, user: t, guildId: a, channelId: o },
                    `${e.soundboardId}:${e.userId}`,
                );
            }),
        ],
    });
});
