n.d(t, {
    A: () => x,
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(311907),
    s = n(990078),
    o = n(397927),
    c = n(302959),
    u = n(90644),
    d = n(592182),
    f = n(172710),
    p = n(636585),
    h = n(95701),
    b = n(961350),
    g = n(287809),
    m = n(486020),
    A = n(427262),
    y = n(43950),
    O = n(185186);

function j(e) {
    var t;
    let { guildId: n, member: l, className: a } = e,
        c = null != l.member ? (0, m.xT)(l.member) : null;
    return (0, r.jsx)(s.m, {
        __unsupportedReactNodeAsText: l.nick,
        position: "bottom",
        children: (0, r.jsx)(o.euF, {
            src: null != c ? c : l.user.getAvatarURL(n, 16),
            size: o._3J.SIZE_16,
            className: i()(a, O.wE),
            "aria-label": null != (t = l.nick) ? t : A.Ay.getName(l.user),
        }),
    });
}

function v(e) {
    let { members: t, guildId: n } = e;
    return (0, r.jsx)(p.A, {
        className: O.S3,
        guildId: n,
        users: t,
        max: 6,
        renderUser: (e, t, l) =>
            (0, r.jsx)(
                j,
                {
                    guildId: n,
                    member: e,
                    className: t,
                },
                l,
            ),
        renderMoreUsers: (e, t, n) =>
            (0, r.jsx)(
                "div",
                {
                    className: i()(O.TO, t),
                    children: e,
                },
                n,
            ),
    });
}
let x = (e) => {
    let { channel: t, presenceActivity: n, members: l, embeddedApp: i, onAction: s } = e,
        o = null != i,
        p = o ? Array.from(i.embeddedActivity.userIds) : [],
        m = (0, a.bG)([g.default, b.default], () => {
            if (o) return g.default.getUser(p[0]);
            if (null != l) {
                var e, t;
                return l.length <= 0
                    ? null
                    : null != (e = null == (t = l.find((e) => e.user.id !== b.default.getId())) ? void 0 : t.user)
                      ? e
                      : l[0].user;
            }
        });
    if (null == m) return null;
    let A = o || (0, u.A)(n),
        j = (0, h.gV)(t.type);
    return (0, r.jsxs)("div", {
        className: O.Eb,
        children: [
            (0, r.jsx)("div", {
                className: O.Il,
                children: A
                    ? (0, r.jsx)(y.A, {
                          activity: n,
                          embeddedApp: i,
                          user: m,
                          channel: t,
                          sortedVoiceStates: l,
                          onOpenSpotifyTrack: j ? f.Mp : void 0,
                          onOpenSpotifyArtist: j ? f.mN : void 0,
                          onOpenSpotifyAlbum: j ? f.QX : void 0,
                      })
                    : (0, r.jsx)(c.A, {
                          type: c.M.VOICE_CHANNEL,
                          activity: n,
                          user: m,
                          guildId: t.getGuildId(),
                          channelId: t.id,
                          renderHeaderAccessory:
                              null != l
                                  ? () =>
                                        (0, r.jsx)(v, {
                                            guildId: t.guild_id,
                                            members: l,
                                        })
                                  : void 0,
                      }),
            }),
            (0, r.jsx)("div", {
                className: O.M4,
                children: (0, r.jsx)(d.A, {
                    type: c.M.VOICE_CHANNEL,
                    activity: n,
                    embeddedActivity: null == i ? void 0 : i.embeddedActivity,
                    user: m,
                    guildId: t.getGuildId(),
                    channelId: t.id,
                    buttonVariant: "primary",
                    onAction: s,
                }),
            }),
        ],
    });
};
