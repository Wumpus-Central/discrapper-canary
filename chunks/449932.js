n.d(t, { Z: () => S });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(442837),
    s = n(481060),
    a = n(717881),
    c = n(503438),
    u = n(850827),
    d = n(540059),
    h = n(952164),
    p = n(237583),
    f = n(131704),
    g = n(314897),
    m = n(594174),
    b = n(768581),
    _ = n(51144),
    y = n(754231),
    v = n(302708);
function O(e) {
    let { guildId: t, member: n, className: i } = e,
        o = null != n.member ? (0, b.CA)(n.member) : null;
    return (0, r.jsx)(s.ua7, {
        text: n.nick,
        position: 'bottom',
        children: (e) => {
            var a;
            return (0, r.jsx)(
                s.qEK,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })(
                    {
                        src: null != o ? o : n.user.getAvatarURL(t, 16),
                        size: s.EFr.SIZE_16,
                        className: l()(i, v.partyAvatar),
                        'aria-label': null != (a = n.nick) ? a : _.ZP.getName(n.user)
                    },
                    e
                )
            );
        }
    });
}
function C(e) {
    let { members: t, guildId: n } = e;
    return (0, r.jsx)(p.Z, {
        className: v.partyMembers,
        guildId: n,
        users: t,
        max: 6,
        renderUser: (e, t, i) =>
            (0, r.jsx)(
                O,
                {
                    guildId: n,
                    member: e,
                    className: t
                },
                i
            ),
        renderMoreUsers: (e, t, n) =>
            (0, r.jsx)(
                'div',
                {
                    className: l()(v.morePartyMembers, t),
                    children: e
                },
                n
            )
    });
}
let S = (e) => {
    let { channel: t, presenceActivity: n, members: i, embeddedApp: l, onAction: p } = e,
        b = (0, d.Q3)('ChannelActivityRow'),
        _ = null != l,
        O = _ ? Array.from(l.embeddedActivity.userIds) : [],
        S = (0, o.e7)([m.default, g.default], () => {
            if (_) return m.default.getUser(O[0]);
            if (null != i) {
                var e, t;
                return i.length <= 0 ? null : null != (t = null == (e = i.find((e) => e.user.id !== g.default.getId())) ? void 0 : e.user) ? t : i[0].user;
            }
        });
    if (null == S) return null;
    let j = _ || (0, c.Z)(n),
        E = (0, f.vd)(t.type);
    return (0, r.jsxs)('div', {
        className: v.activity,
        children: [
            (0, r.jsx)('div', {
                className: v.channelActivityContainer,
                children: j
                    ? (0, r.jsx)(y.Z, {
                          activity: n,
                          embeddedApp: l,
                          user: S,
                          channel: t,
                          sortedVoiceStates: i,
                          onOpenSpotifyTrack: E ? h.aG : void 0,
                          onOpenSpotifyArtist: E ? h.d$ : void 0,
                          onOpenSpotifyAlbum: E ? h.Z5 : void 0
                      })
                    : (0, r.jsx)(a.Z, {
                          type: a.P.VOICE_CHANNEL,
                          activity: n,
                          user: S,
                          guildId: t.getGuildId(),
                          channelId: t.id,
                          renderHeaderAccessory:
                              null != i
                                  ? () =>
                                        (0, r.jsx)(C, {
                                            guildId: t.guild_id,
                                            members: i
                                        })
                                  : void 0
                      })
            }),
            (0, r.jsx)('div', {
                className: v.activityActionsContainer,
                children: (0, r.jsx)(u.Z, {
                    type: a.P.VOICE_CHANNEL,
                    activity: n,
                    embeddedActivity: null == l ? void 0 : l.embeddedActivity,
                    user: S,
                    guildId: t.getGuildId(),
                    channelId: t.id,
                    color: b ? s.zxk.Colors.PRIMARY : v.button,
                    look: b ? s.zxk.Looks.FILLED : void 0,
                    onAction: p
                })
            })
        ]
    });
};
