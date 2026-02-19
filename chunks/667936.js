"use strict";
n.d(t, { A: () => N });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(990078),
    c = n(397927),
    d = n(302959),
    u = n(90644),
    h = n(592182),
    A = n(172710),
    p = n(636585),
    g = n(95701),
    m = n(961350),
    _ = n(287809),
    f = n(486020),
    x = n(427262),
    C = n(43950),
    E = n(185186);
function I(e) {
    let { guildId: t, member: n, className: s } = e,
        l = null != n.member ? (0, f.xT)(n.member) : null;
    return (0, i.jsx)(o.m, {
        __unsupportedReactNodeAsText: n.nick,
        position: "bottom",
        children: (0, i.jsx)(c.euF, {
            src: l ?? n.user.getAvatarURL(t, 16),
            size: c._3J.SIZE_16,
            className: r()(s, E.wE),
            "aria-label": n.nick ?? x.Ay.getName(n.user),
        }),
    });
}
function b(e) {
    let { members: t, guildId: n } = e;
    return (0, i.jsx)(p.A, {
        className: E.S3,
        guildId: n,
        users: t,
        max: 6,
        renderUser: (e, t, s) => (0, i.jsx)(I, { guildId: n, member: e, className: t }, s),
        renderMoreUsers: (e, t, n) => (0, i.jsx)("div", { className: r()(E.TO, t), children: e }, n),
    });
}
let N = (e) => {
    let { channel: t, presenceActivity: n, members: l, embeddedApp: r, onAction: o, enableUserHoverActivities: c } = e,
        p = null != r,
        f = p ? Array.from(r.embeddedActivity.userIds) : [],
        x = (0, a.bG)([_.default, m.default], () =>
            p
                ? _.default.getUser(f[0])
                : null != l
                  ? l.length <= 0
                      ? null
                      : (l.find((e) => e.user.id !== m.default.getId())?.user ?? l[0].user)
                  : void 0,
        ),
        I = s.useCallback(() => {
            if (!c && null != l) return () => (0, i.jsx)(b, { guildId: t.guild_id, members: l });
        }, [c, l, t.guild_id])();
    if (null == x) return null;
    let N = p || (0, u.A)(n),
        S = (0, g.gV)(t.type),
        T = c ? C.z : C.A;
    return (0, i.jsxs)("div", {
        className: c ? void 0 : E.Eb,
        children: [
            (0, i.jsx)("div", {
                className: c ? void 0 : E.Il,
                children: N
                    ? (0, i.jsx)(T, {
                          activity: n,
                          embeddedApp: r,
                          user: x,
                          channel: t,
                          sortedVoiceStates: l,
                          onOpenSpotifyTrack: S ? A.Mp : void 0,
                          onOpenSpotifyArtist: S ? A.mN : void 0,
                          onOpenSpotifyAlbum: S ? A.QX : void 0,
                      })
                    : (0, i.jsx)(d.A, {
                          type: d.M.VOICE_CHANNEL,
                          activity: n,
                          user: x,
                          guildId: t.getGuildId(),
                          channelId: t.id,
                          renderHeaderAccessory: I,
                          enableUserHoverActivities: c,
                      }),
            }),
            (0, i.jsx)("div", {
                className: c ? void 0 : E.M4,
                children: (0, i.jsx)(h.A, {
                    type: d.M.VOICE_CHANNEL,
                    activity: n,
                    embeddedActivity: r?.embeddedActivity,
                    user: x,
                    guildId: t.getGuildId(),
                    channelId: t.id,
                    buttonVariant: "primary",
                    onAction: o,
                }),
            }),
        ],
    });
};
