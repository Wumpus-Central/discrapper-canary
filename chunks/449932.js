n.d(t, { Z: () => b });
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(442837),
    o = n(481060),
    s = n(717881),
    c = n(503438),
    d = n(850827),
    u = n(540059),
    h = n(952164),
    p = n(237583),
    m = n(131704),
    g = n(314897),
    f = n(594174),
    _ = n(768581),
    v = n(51144),
    C = n(754231),
    x = n(398644);
function Z(e) {
    let { guildId: t, member: n, className: l } = e,
        a = null != n.member ? (0, _.CA)(n.member) : null;
    return (0, i.jsx)(o.ua7, {
        text: n.nick,
        position: 'bottom',
        children: (e) => {
            var s;
            return (0, i.jsx)(o.qEK, {
                src: null != a ? a : n.user.getAvatarURL(t, 16),
                size: o.EFr.SIZE_16,
                className: r()(l, x.partyAvatar),
                'aria-label': null !== (s = n.nick) && void 0 !== s ? s : v.ZP.getName(n.user),
                ...e
            });
        }
    });
}
function I(e) {
    let { members: t, guildId: n } = e;
    return (0, i.jsx)(p.Z, {
        className: x.partyMembers,
        guildId: n,
        users: t,
        max: 6,
        renderUser: (e, t, l) =>
            (0, i.jsx)(
                Z,
                {
                    guildId: n,
                    member: e,
                    className: t
                },
                l
            ),
        renderMoreUsers: (e, t, n) =>
            (0, i.jsx)(
                'div',
                {
                    className: r()(x.morePartyMembers, t),
                    children: e
                },
                n
            )
    });
}
let b = (e) => {
    let { channel: t, presenceActivity: n, members: l, embeddedApp: r, onAction: p } = e,
        _ = (0, u.Q3)('ChannelActivityRow'),
        v = null != r,
        Z = v ? Array.from(r.embeddedActivity.userIds) : [],
        b = (0, a.e7)([f.default, g.default], () => {
            if (v) return f.default.getUser(Z[0]);
            if (null != l) {
                var e, t;
                return l.length <= 0 ? null : null !== (t = null === (e = l.find((e) => e.user.id !== g.default.getId())) || void 0 === e ? void 0 : e.user) && void 0 !== t ? t : l[0].user;
            }
        });
    if (null == b) return null;
    let S = v || (0, c.Z)(n),
        N = (0, m.vd)(t.type);
    return (0, i.jsxs)('div', {
        className: x.activity,
        children: [
            (0, i.jsx)('div', {
                className: x.channelActivityContainer,
                children: S
                    ? (0, i.jsx)(C.Z, {
                          activity: n,
                          embeddedApp: r,
                          user: b,
                          channel: t,
                          sortedVoiceStates: l,
                          onOpenSpotifyTrack: N ? h.aG : void 0,
                          onOpenSpotifyArtist: N ? h.d$ : void 0,
                          onOpenSpotifyAlbum: N ? h.Z5 : void 0
                      })
                    : (0, i.jsx)(s.Z, {
                          type: s.P.VOICE_CHANNEL,
                          activity: n,
                          user: b,
                          guildId: t.getGuildId(),
                          channelId: t.id,
                          renderHeaderAccessory:
                              null != l
                                  ? () =>
                                        (0, i.jsx)(I, {
                                            guildId: t.guild_id,
                                            members: l
                                        })
                                  : void 0
                      })
            }),
            (0, i.jsx)('div', {
                className: x.activityActionsContainer,
                children: (0, i.jsx)(d.Z, {
                    type: s.P.VOICE_CHANNEL,
                    activity: n,
                    embeddedActivity: null == r ? void 0 : r.embeddedActivity,
                    user: b,
                    guildId: t.getGuildId(),
                    channelId: t.id,
                    color: _ ? o.zxk.Colors.PRIMARY : x.button,
                    look: _ ? o.zxk.Looks.FILLED : void 0,
                    onAction: p
                })
            })
        ]
    });
};
