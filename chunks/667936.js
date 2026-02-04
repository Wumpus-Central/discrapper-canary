n.d(t, {
    A: () => v,
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(990078),
    c = n(397927),
    u = n(302959),
    d = n(90644),
    p = n(592182),
    h = n(172710),
    g = n(636585),
    f = n(95701),
    m = n(961350),
    b = n(287809),
    A = n(486020),
    y = n(427262),
    O = n(43950),
    j = n(185186);

function _(e) {
    var t;
    let { guildId: n, member: l, className: i } = e,
        a = null != l.member ? (0, A.xT)(l.member) : null;
    return (0, r.jsx)(o.m, {
        __unsupportedReactNodeAsText: l.nick,
        position: "bottom",
        children: (0, r.jsx)(c.euF, {
            src: null != a ? a : l.user.getAvatarURL(n, 16),
            size: c._3J.SIZE_16,
            className: s()(i, j.wE),
            "aria-label": null != (t = l.nick) ? t : y.Ay.getName(l.user),
        }),
    });
}

function x(e) {
    let { members: t, guildId: n } = e;
    return (0, r.jsx)(g.A, {
        className: j.S3,
        guildId: n,
        users: t,
        max: 6,
        renderUser: (e, t, l) =>
            (0, r.jsx)(
                _,
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
                    className: s()(j.TO, t),
                    children: e,
                },
                n,
            ),
    });
}
let v = (e) => {
    let { channel: t, presenceActivity: n, members: i, embeddedApp: s, onAction: o, enableUserHoverActivities: c } = e,
        g = null != s,
        A = g ? Array.from(s.embeddedActivity.userIds) : [],
        y = (0, a.bG)([b.default, m.default], () => {
            if (g) return b.default.getUser(A[0]);
            if (null != i) {
                var e, t;
                return i.length <= 0
                    ? null
                    : null != (e = null == (t = i.find((e) => e.user.id !== m.default.getId())) ? void 0 : t.user)
                      ? e
                      : i[0].user;
            }
        }),
        _ = l.useCallback(() => {
            if (!c && null != i)
                return () =>
                    (0, r.jsx)(x, {
                        guildId: t.guild_id,
                        members: i,
                    });
        }, [c, i, t.guild_id])();
    if (null == y) return null;
    let v = g || (0, d.A)(n),
        E = (0, f.gV)(t.type);
    return (0, r.jsxs)("div", {
        className: j.Eb,
        children: [
            (0, r.jsx)("div", {
                className: j.Il,
                children: v
                    ? (0, r.jsx)(O.A, {
                          activity: n,
                          embeddedApp: s,
                          user: y,
                          channel: t,
                          sortedVoiceStates: i,
                          onOpenSpotifyTrack: E ? h.Mp : void 0,
                          onOpenSpotifyArtist: E ? h.mN : void 0,
                          onOpenSpotifyAlbum: E ? h.QX : void 0,
                      })
                    : (0, r.jsx)(u.A, {
                          type: u.M.VOICE_CHANNEL,
                          activity: n,
                          user: y,
                          guildId: t.getGuildId(),
                          channelId: t.id,
                          renderHeaderAccessory: _,
                          enableUserHoverActivities: c,
                      }),
            }),
            (0, r.jsx)("div", {
                className: j.M4,
                children: (0, r.jsx)(p.A, {
                    type: u.M.VOICE_CHANNEL,
                    activity: n,
                    embeddedActivity: null == s ? void 0 : s.embeddedActivity,
                    user: y,
                    guildId: t.getGuildId(),
                    channelId: t.id,
                    buttonVariant: "primary",
                    onAction: o,
                }),
            }),
        ],
    });
};
