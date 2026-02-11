n.d(t, { A: () => N });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(990078),
    d = n(397927),
    c = n(302959),
    u = n(90644),
    h = n(592182),
    A = n(172710),
    m = n(636585),
    p = n(95701),
    g = n(961350),
    _ = n(287809),
    f = n(486020),
    x = n(427262),
    C = n(43950),
    E = n(185186);
function I(e) {
    let { guildId: t, member: n, className: l } = e,
        s = null != n.member ? (0, f.xT)(n.member) : null;
    return (0, i.jsx)(o.m, {
        __unsupportedReactNodeAsText: n.nick,
        position: "bottom",
        children: (0, i.jsx)(d.euF, {
            src: s ?? n.user.getAvatarURL(t, 16),
            size: d._3J.SIZE_16,
            className: a()(l, E.wE),
            "aria-label": n.nick ?? x.Ay.getName(n.user),
        }),
    });
}
function b(e) {
    let { members: t, guildId: n } = e;
    return (0, i.jsx)(m.A, {
        className: E.S3,
        guildId: n,
        users: t,
        max: 6,
        renderUser: (e, t, l) => (0, i.jsx)(I, { guildId: n, member: e, className: t }, l),
        renderMoreUsers: (e, t, n) => (0, i.jsx)("div", { className: a()(E.TO, t), children: e }, n),
    });
}
let N = (e) => {
    let { channel: t, presenceActivity: n, members: s, embeddedApp: a, onAction: o, enableUserHoverActivities: d } = e,
        m = null != a,
        f = m ? Array.from(a.embeddedActivity.userIds) : [],
        x = (0, r.bG)([_.default, g.default], () =>
            m
                ? _.default.getUser(f[0])
                : null != s
                  ? s.length <= 0
                      ? null
                      : (s.find((e) => e.user.id !== g.default.getId())?.user ?? s[0].user)
                  : void 0,
        ),
        I = l.useCallback(() => {
            if (!d && null != s) return () => (0, i.jsx)(b, { guildId: t.guild_id, members: s });
        }, [d, s, t.guild_id])();
    if (null == x) return null;
    let N = m || (0, u.A)(n),
        S = (0, p.gV)(t.type),
        T = d ? C.z : C.A;
    return (0, i.jsxs)("div", {
        className: d ? void 0 : E.Eb,
        children: [
            (0, i.jsx)("div", {
                className: d ? void 0 : E.Il,
                children: N
                    ? (0, i.jsx)(T, {
                          activity: n,
                          embeddedApp: a,
                          user: x,
                          channel: t,
                          sortedVoiceStates: s,
                          onOpenSpotifyTrack: S ? A.Mp : void 0,
                          onOpenSpotifyArtist: S ? A.mN : void 0,
                          onOpenSpotifyAlbum: S ? A.QX : void 0,
                      })
                    : (0, i.jsx)(c.A, {
                          type: c.M.VOICE_CHANNEL,
                          activity: n,
                          user: x,
                          guildId: t.getGuildId(),
                          channelId: t.id,
                          renderHeaderAccessory: I,
                          enableUserHoverActivities: d,
                      }),
            }),
            (0, i.jsx)("div", {
                className: d ? void 0 : E.M4,
                children: (0, i.jsx)(h.A, {
                    type: c.M.VOICE_CHANNEL,
                    activity: n,
                    embeddedActivity: a?.embeddedActivity,
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
