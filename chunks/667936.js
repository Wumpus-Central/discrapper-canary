n.d(t, { A: () => b });
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
    g = n(636585),
    m = n(95701),
    p = n(961350),
    _ = n(287809),
    x = n(486020),
    f = n(427262),
    E = n(43950),
    C = n(185186);
function I(e) {
    let { guildId: t, member: n, className: l } = e,
        s = null != n.member ? (0, x.xT)(n.member) : null;
    return (0, i.jsx)(o.m, {
        __unsupportedReactNodeAsText: n.nick,
        position: "bottom",
        children: (0, i.jsx)(d.euF, {
            src: s ?? n.user.getAvatarURL(t, 16),
            size: d._3J.SIZE_16,
            className: a()(l, C.wE),
            "aria-label": n.nick ?? f.Ay.getName(n.user),
        }),
    });
}
function S(e) {
    let { members: t, guildId: n } = e;
    return (0, i.jsx)(g.A, {
        className: C.S3,
        guildId: n,
        users: t,
        max: 6,
        renderUser: (e, t, l) => (0, i.jsx)(I, { guildId: n, member: e, className: t }, l),
        renderMoreUsers: (e, t, n) => (0, i.jsx)("div", { className: a()(C.TO, t), children: e }, n),
    });
}
let b = (e) => {
    let { channel: t, presenceActivity: n, members: s, embeddedApp: a, onAction: o, enableUserHoverActivities: d } = e,
        g = null != a,
        x = g ? Array.from(a.embeddedActivity.userIds) : [],
        f = (0, r.bG)([_.default, p.default], () =>
            g
                ? _.default.getUser(x[0])
                : null != s
                  ? s.length <= 0
                      ? null
                      : (s.find((e) => e.user.id !== p.default.getId())?.user ?? s[0].user)
                  : void 0,
        ),
        I = l.useCallback(() => {
            if (!d && null != s) return () => (0, i.jsx)(S, { guildId: t.guild_id, members: s });
        }, [d, s, t.guild_id])();
    if (null == f) return null;
    let b = g || (0, u.A)(n),
        N = (0, m.gV)(t.type),
        T = d ? E.z : E.A;
    return (0, i.jsxs)("div", {
        className: C.Eb,
        children: [
            (0, i.jsx)("div", {
                className: C.Il,
                children: b
                    ? (0, i.jsx)(T, {
                          activity: n,
                          embeddedApp: a,
                          user: f,
                          channel: t,
                          sortedVoiceStates: s,
                          onOpenSpotifyTrack: N ? A.Mp : void 0,
                          onOpenSpotifyArtist: N ? A.mN : void 0,
                          onOpenSpotifyAlbum: N ? A.QX : void 0,
                      })
                    : (0, i.jsx)(c.A, {
                          type: c.M.VOICE_CHANNEL,
                          activity: n,
                          user: f,
                          guildId: t.getGuildId(),
                          channelId: t.id,
                          renderHeaderAccessory: I,
                          enableUserHoverActivities: d,
                      }),
            }),
            (0, i.jsx)("div", {
                className: C.M4,
                children: (0, i.jsx)(h.A, {
                    type: c.M.VOICE_CHANNEL,
                    activity: n,
                    embeddedActivity: a?.embeddedActivity,
                    user: f,
                    guildId: t.getGuildId(),
                    channelId: t.id,
                    buttonVariant: "primary",
                    onAction: o,
                }),
            }),
        ],
    });
};
