n.d(t, { Z: () => x });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(442837),
    o = n(28664),
    s = n(481060),
    c = n(350922),
    u = n(503438),
    d = n(850827),
    f = n(952164),
    h = n(237583),
    p = n(131704),
    g = n(314897),
    b = n(594174),
    m = n(768581),
    y = n(51144),
    O = n(754231),
    v = n(590599);
function j(e) {
    var t;
    let { guildId: n, member: i, className: a } = e,
        c = null != i.member ? (0, m.CA)(i.member) : null;
    return (0, r.jsx)(o.u, {
        __unsupportedReactNodeAsText: i.nick,
        position: "bottom",
        children: (0, r.jsx)(s.qEK, {
            src: null != c ? c : i.user.getAvatarURL(n, 16),
            size: s.EFr.SIZE_16,
            className: l()(a, v.partyAvatar),
            "aria-label": null != (t = i.nick) ? t : y.ZP.getName(i.user),
        }),
    });
}
function C(e) {
    let { members: t, guildId: n } = e;
    return (0, r.jsx)(h.Z, {
        className: v.partyMembers,
        guildId: n,
        users: t,
        max: 6,
        renderUser: (e, t, i) =>
            (0, r.jsx)(
                j,
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
                    className: l()(v.morePartyMembers, t),
                    children: e,
                },
                n,
            ),
    });
}
let x = (e) => {
    let { channel: t, presenceActivity: n, members: i, embeddedApp: l, onAction: o } = e,
        s = null != l,
        h = s ? Array.from(l.embeddedActivity.userIds) : [],
        m = (0, a.e7)([b.default, g.default], () => {
            if (s) return b.default.getUser(h[0]);
            if (null != i) {
                var e, t;
                return i.length <= 0
                    ? null
                    : null != (t = null == (e = i.find((e) => e.user.id !== g.default.getId())) ? void 0 : e.user)
                      ? t
                      : i[0].user;
            }
        });
    if (null == m) return null;
    let y = s || (0, u.Z)(n),
        j = (0, p.vd)(t.type);
    return (0, r.jsxs)("div", {
        className: v.activity,
        children: [
            (0, r.jsx)("div", {
                className: v.channelActivityContainer,
                children: y
                    ? (0, r.jsx)(O.Z, {
                          activity: n,
                          embeddedApp: l,
                          user: m,
                          channel: t,
                          sortedVoiceStates: i,
                          onOpenSpotifyTrack: j ? f.aG : void 0,
                          onOpenSpotifyArtist: j ? f.d$ : void 0,
                          onOpenSpotifyAlbum: j ? f.Z5 : void 0,
                      })
                    : (0, r.jsx)(c.Z, {
                          type: c.P.VOICE_CHANNEL,
                          activity: n,
                          user: m,
                          guildId: t.getGuildId(),
                          channelId: t.id,
                          renderHeaderAccessory:
                              null != i
                                  ? () =>
                                        (0, r.jsx)(C, {
                                            guildId: t.guild_id,
                                            members: i,
                                        })
                                  : void 0,
                      }),
            }),
            (0, r.jsx)("div", {
                className: v.activityActionsContainer,
                children: (0, r.jsx)(d.Z, {
                    type: c.P.VOICE_CHANNEL,
                    activity: n,
                    embeddedActivity: null == l ? void 0 : l.embeddedActivity,
                    user: m,
                    guildId: t.getGuildId(),
                    channelId: t.id,
                    buttonVariant: "primary",
                    onAction: o,
                }),
            }),
        ],
    });
};
