n.d(t, {
    A: () => I,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(990078),
    l = n(397927),
    c = n(302959),
    u = n(90644),
    d = n(592182),
    f = n(172710),
    p = n(636585),
    _ = n(95701),
    h = n(961350),
    m = n(287809),
    g = n(486020),
    E = n(427262),
    y = n(43950),
    b = n(185186);
let O = 6;

function v(e) {
    var t;
    let { guildId: n, member: i, className: s } = e,
        c = null != i.member ? (0, g.xT)(i.member) : null;
    return (0, r.jsx)(o.m, {
        __unsupportedReactNodeAsText: i.nick,
        position: "bottom",
        children: (0, r.jsx)(l.euF, {
            src: null != c ? c : i.user.getAvatarURL(n, 16),
            size: l._3J.SIZE_16,
            className: a()(s, b.wE),
            "aria-label": null != (t = i.nick) ? t : E.Ay.getName(i.user),
        }),
    });
}

function A(e) {
    let { members: t, guildId: n } = e;
    return (0, r.jsx)(p.A, {
        className: b.S3,
        guildId: n,
        users: t,
        max: O,
        renderUser: (e, t, i) =>
            (0, r.jsx)(
                v,
                {
                    guildId: n,
                    member: e,
                    className: t,
                },
                i,
            ),
        renderMoreUsers: (e, t, n) =>
            (0, r.jsx)(
                "div",
                {
                    className: a()(b.TO, t),
                    children: e,
                },
                n,
            ),
    });
}
let I = (e) => {
    let { channel: t, presenceActivity: n, members: i, embeddedApp: a, onAction: o } = e,
        l = null != a,
        p = l ? Array.from(a.embeddedActivity.userIds) : [],
        g = (0, s.bG)([m.default, h.default], () => {
            if (l) return m.default.getUser(p[0]);
            if (null != i) {
                var e, t;
                return i.length <= 0
                    ? null
                    : null != (e = null == (t = i.find((e) => e.user.id !== h.default.getId())) ? void 0 : t.user)
                      ? e
                      : i[0].user;
            }
        });
    if (null == g) return null;
    let E = l || (0, u.A)(n),
        O = (0, _.gV)(t.type);
    return (0, r.jsxs)("div", {
        className: b.Eb,
        children: [
            (0, r.jsx)("div", {
                className: b.Il,
                children: E
                    ? (0, r.jsx)(y.A, {
                          activity: n,
                          embeddedApp: a,
                          user: g,
                          channel: t,
                          sortedVoiceStates: i,
                          onOpenSpotifyTrack: O ? f.Mp : void 0,
                          onOpenSpotifyArtist: O ? f.mN : void 0,
                          onOpenSpotifyAlbum: O ? f.QX : void 0,
                      })
                    : (0, r.jsx)(c.A, {
                          type: c.M.VOICE_CHANNEL,
                          activity: n,
                          user: g,
                          guildId: t.getGuildId(),
                          channelId: t.id,
                          renderHeaderAccessory:
                              null != i
                                  ? () =>
                                        (0, r.jsx)(A, {
                                            guildId: t.guild_id,
                                            members: i,
                                        })
                                  : void 0,
                      }),
            }),
            (0, r.jsx)("div", {
                className: b.M4,
                children: (0, r.jsx)(d.A, {
                    type: c.M.VOICE_CHANNEL,
                    activity: n,
                    embeddedActivity: null == a ? void 0 : a.embeddedActivity,
                    user: g,
                    guildId: t.getGuildId(),
                    channelId: t.id,
                    buttonVariant: "primary",
                    onAction: o,
                }),
            }),
        ],
    });
};
