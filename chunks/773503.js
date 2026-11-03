s.d(t, { A: () => I });
var a = s(477900),
    n = s(582128),
    r = s(435558),
    i = s.n(r),
    l = s(17928),
    o = s(97808),
    d = s(778712),
    u = s(834730),
    c = s(7807),
    m = s(661531),
    h = s(788026),
    p = s(287809),
    g = s(562153),
    S = s(401381);
function v(e) {
    let { avatarURL: t, avatarLabel: s, text: n, leading: r } = e;
    return (0, a.jsxs)("div", {
        className: S.AB,
        children: [
            (0, a.jsx)(o.eu, { "aria-label": s, size: d._3.SIZE_24, src: t }),
            (0, a.jsxs)(u.E, {
                className: S.PW,
                color: "text-overlay-light",
                variant: "body-sm/normal",
                children: [r, n],
            }),
        ],
    });
}
function C(e) {
    let { user: t, guildId: s, channelId: n } = e,
        r = (0, g.tx)(s, n, t);
    return null == t ? null : (0, a.jsx)(v, { avatarURL: t.getAvatarURL(s, 24, !1), avatarLabel: r, text: r });
}
function f(e) {
    let { soundboard: t, user: s, guildId: n } = e;
    if (null == s) return null;
    let r =
        null != t.emojiId || null != t.emojiName
            ? (0, a.jsx)(h.A, {
                  emojiId: t.emojiId ?? null,
                  emojiName: t.emojiName ?? null,
                  animated: t.emojiAnimated ?? !1,
                  alt: t.name,
                  size: "reaction",
              })
            : (0, a.jsx)(c.J, { size: "refresh_sm", color: m.A.colors.ICON_DEFAULT });
    return (0, a.jsx)(v, { avatarURL: s.getAvatarURL(n, 24, !1), avatarLabel: s.username, text: t.name, leading: r });
}
let I = n.memo(function (e) {
    let { speakingUserIds: t, activeSoundboards: s, userIds: n, guildId: r, channelId: o } = e,
        d = (0, l.cf)([p.default], () => i().pick(p.default.getUsers(), n));
    return (0, a.jsxs)("div", {
        className: S.zr,
        children: [
            t.map((e) => {
                let t = d[e];
                return (0, a.jsx)(C, { user: t, guildId: r, channelId: o }, e);
            }),
            s.map((e) => {
                let t = d[e.userId];
                return (0, a.jsx)(
                    f,
                    { soundboard: e, user: t, guildId: r, channelId: o },
                    `${e.soundboardId}:${e.userId}`,
                );
            }),
        ],
    });
});
