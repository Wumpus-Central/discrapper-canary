n.d(t, { Z: () => x });
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    o = n(442837),
    a = n(28664),
    s = n(481060),
    c = n(717881),
    u = n(503438),
    d = n(850827),
    p = n(952164),
    h = n(237583),
    f = n(131704),
    g = n(314897),
    m = n(594174),
    b = n(768581),
    _ = n(51144),
    y = n(754231),
    O = n(342273);
function v(e) {
    var t;
    let { guildId: n, member: i, className: o } = e,
        c = null != i.member ? (0, b.CA)(i.member) : null;
    return (0, r.jsx)(a.u, {
        __unsupportedReactNodeAsText: i.nick,
        position: "bottom",
        children: (0, r.jsx)(s.qEK, {
            src: null != c ? c : i.user.getAvatarURL(n, 16),
            size: s.EFr.SIZE_16,
            className: l()(o, O.partyAvatar),
            "aria-label": null != (t = i.nick) ? t : _.ZP.getName(i.user),
        }),
    });
}
function j(e) {
    let { members: t, guildId: n } = e;
    return (0, r.jsx)(h.Z, {
        className: O.partyMembers,
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
                    className: l()(O.morePartyMembers, t),
                    children: e,
                },
                n,
            ),
    });
}
let x = (e) => {
    let { channel: t, presenceActivity: n, members: i, embeddedApp: l, onAction: a } = e,
        s = null != l,
        h = s ? Array.from(l.embeddedActivity.userIds) : [],
        b = (0, o.e7)([m.default, g.default], () => {
            if (s) return m.default.getUser(h[0]);
            if (null != i) {
                var e, t;
                return i.length <= 0
                    ? null
                    : null != (t = null == (e = i.find((e) => e.user.id !== g.default.getId())) ? void 0 : e.user)
                      ? t
                      : i[0].user;
            }
        });
    if (null == b) return null;
    let _ = s || (0, u.Z)(n),
        v = (0, f.vd)(t.type);
    return (0, r.jsxs)("div", {
        className: O.activity,
        children: [
            (0, r.jsx)("div", {
                className: O.channelActivityContainer,
                children: _
                    ? (0, r.jsx)(y.Z, {
                          activity: n,
                          embeddedApp: l,
                          user: b,
                          channel: t,
                          sortedVoiceStates: i,
                          onOpenSpotifyTrack: v ? p.aG : void 0,
                          onOpenSpotifyArtist: v ? p.d$ : void 0,
                          onOpenSpotifyAlbum: v ? p.Z5 : void 0,
                      })
                    : (0, r.jsx)(c.Z, {
                          type: c.P.VOICE_CHANNEL,
                          activity: n,
                          user: b,
                          guildId: t.getGuildId(),
                          channelId: t.id,
                          renderHeaderAccessory:
                              null != i
                                  ? () =>
                                        (0, r.jsx)(j, {
                                            guildId: t.guild_id,
                                            members: i,
                                        })
                                  : void 0,
                      }),
            }),
            (0, r.jsx)("div", {
                className: O.activityActionsContainer,
                children: (0, r.jsx)(d.Z, {
                    type: c.P.VOICE_CHANNEL,
                    activity: n,
                    embeddedActivity: null == l ? void 0 : l.embeddedActivity,
                    user: b,
                    guildId: t.getGuildId(),
                    channelId: t.id,
                    buttonVariant: "primary",
                    onAction: a,
                }),
            }),
        ],
    });
};
