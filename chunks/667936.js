n.d(t, {
    A: () => j,
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(311907),
    s = n(990078),
    o = n(397927),
    c = n(302959),
    u = n(90644),
    d = n(592182),
    p = n(172710),
    f = n(636585),
    m = n(95701),
    g = n(961350),
    y = n(287809),
    _ = n(486020),
    b = n(427262),
    A = n(43950),
    h = n(185186);

function v(e) {
    var t;
    let { guildId: n, member: i, className: a } = e,
        c = null != i.member ? (0, _.xT)(i.member) : null;
    return (0, r.jsx)(s.m, {
        __unsupportedReactNodeAsText: i.nick,
        position: "bottom",
        children: (0, r.jsx)(o.euF, {
            src: null != c ? c : i.user.getAvatarURL(n, 16),
            size: o._3J.SIZE_16,
            className: l()(a, h.wE),
            "aria-label": null != (t = i.nick) ? t : b.Ay.getName(i.user),
        }),
    });
}

function O(e) {
    let { members: t, guildId: n } = e;
    return (0, r.jsx)(f.A, {
        className: h.S3,
        guildId: n,
        users: t,
        max: 6,
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
                    className: l()(h.TO, t),
                    children: e,
                },
                n,
            ),
    });
}
let j = (e) => {
    let { channel: t, presenceActivity: n, members: i, embeddedApp: l, onAction: s } = e,
        o = null != l,
        f = o ? Array.from(l.embeddedActivity.userIds) : [],
        _ = (0, a.bG)([y.default, g.default], () => {
            if (o) return y.default.getUser(f[0]);
            if (null != i) {
                var e, t;
                return i.length <= 0
                    ? null
                    : null != (e = null == (t = i.find((e) => e.user.id !== g.default.getId())) ? void 0 : t.user)
                      ? e
                      : i[0].user;
            }
        });
    if (null == _) return null;
    let b = o || (0, u.A)(n),
        v = (0, m.gV)(t.type);
    return (0, r.jsxs)("div", {
        className: h.Eb,
        children: [
            (0, r.jsx)("div", {
                className: h.Il,
                children: b
                    ? (0, r.jsx)(A.A, {
                          activity: n,
                          embeddedApp: l,
                          user: _,
                          channel: t,
                          sortedVoiceStates: i,
                          onOpenSpotifyTrack: v ? p.Mp : void 0,
                          onOpenSpotifyArtist: v ? p.mN : void 0,
                          onOpenSpotifyAlbum: v ? p.QX : void 0,
                      })
                    : (0, r.jsx)(c.A, {
                          type: c.M.VOICE_CHANNEL,
                          activity: n,
                          user: _,
                          guildId: t.getGuildId(),
                          channelId: t.id,
                          renderHeaderAccessory:
                              null != i
                                  ? () =>
                                        (0, r.jsx)(O, {
                                            guildId: t.guild_id,
                                            members: i,
                                        })
                                  : void 0,
                      }),
            }),
            (0, r.jsx)("div", {
                className: h.M4,
                children: (0, r.jsx)(d.A, {
                    type: c.M.VOICE_CHANNEL,
                    activity: n,
                    embeddedActivity: null == l ? void 0 : l.embeddedActivity,
                    user: _,
                    guildId: t.getGuildId(),
                    channelId: t.id,
                    buttonVariant: "primary",
                    onAction: s,
                }),
            }),
        ],
    });
};
