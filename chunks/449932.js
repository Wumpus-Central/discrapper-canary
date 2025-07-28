n.d(t, { Z: () => j });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    o = n(442837),
    a = n(755721),
    s = n(481060),
    c = n(717881),
    u = n(503438),
    d = n(850827),
    h = n(952164),
    p = n(237583),
    f = n(131704),
    g = n(314897),
    m = n(594174),
    b = n(768581),
    _ = n(51144),
    O = n(754231),
    y = n(302708);
function C(e) {
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
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                ((r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r));
                            }));
                    }
                    return e;
                })(
                    {
                        src: null != o ? o : n.user.getAvatarURL(t, 16),
                        size: s.EFr.SIZE_16,
                        className: l()(i, y.partyAvatar),
                        'aria-label': null != (a = n.nick) ? a : _.ZP.getName(n.user)
                    },
                    e
                )
            );
        }
    });
}
function v(e) {
    let { members: t, guildId: n } = e;
    return (0, r.jsx)(p.Z, {
        className: y.partyMembers,
        guildId: n,
        users: t,
        max: 6,
        renderUser: (e, t, i) =>
            (0, r.jsx)(
                C,
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
                    className: l()(y.morePartyMembers, t),
                    children: e
                },
                n
            )
    });
}
let j = (e) => {
    let { channel: t, presenceActivity: n, members: i, embeddedApp: l, onAction: s } = e,
        p = null != l,
        b = p ? Array.from(l.embeddedActivity.userIds) : [],
        _ = (0, o.e7)([m.default, g.default], () => {
            if (p) return m.default.getUser(b[0]);
            if (null != i) {
                var e, t;
                return i.length <= 0 ? null : null != (t = null == (e = i.find((e) => e.user.id !== g.default.getId())) ? void 0 : e.user) ? t : i[0].user;
            }
        });
    if (null == _) return null;
    let C = p || (0, u.Z)(n),
        j = (0, f.vd)(t.type);
    return (0, r.jsxs)('div', {
        className: y.activity,
        children: [
            (0, r.jsx)('div', {
                className: y.channelActivityContainer,
                children: C
                    ? (0, r.jsx)(O.Z, {
                          activity: n,
                          embeddedApp: l,
                          user: _,
                          channel: t,
                          sortedVoiceStates: i,
                          onOpenSpotifyTrack: j ? h.aG : void 0,
                          onOpenSpotifyArtist: j ? h.d$ : void 0,
                          onOpenSpotifyAlbum: j ? h.Z5 : void 0
                      })
                    : (0, r.jsx)(c.Z, {
                          type: c.P.VOICE_CHANNEL,
                          activity: n,
                          user: _,
                          guildId: t.getGuildId(),
                          channelId: t.id,
                          renderHeaderAccessory:
                              null != i
                                  ? () =>
                                        (0, r.jsx)(v, {
                                            guildId: t.guild_id,
                                            members: i
                                        })
                                  : void 0
                      })
            }),
            (0, r.jsx)('div', {
                className: y.activityActionsContainer,
                children: (0, r.jsx)(d.Z, {
                    type: c.P.VOICE_CHANNEL,
                    activity: n,
                    embeddedActivity: null == l ? void 0 : l.embeddedActivity,
                    user: _,
                    guildId: t.getGuildId(),
                    channelId: t.id,
                    color: a.zx.Colors.PRIMARY,
                    look: a.zx.Looks.FILLED,
                    onAction: s
                })
            })
        ]
    });
};
