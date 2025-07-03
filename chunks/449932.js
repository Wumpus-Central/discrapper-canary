n.d(t, { Z: () => C });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    o = n(442837),
    s = n(481060),
    a = n(717881),
    c = n(503438),
    u = n(850827),
    d = n(952164),
    h = n(237583),
    p = n(131704),
    f = n(314897),
    g = n(594174),
    m = n(768581),
    b = n(51144),
    _ = n(754231),
    O = n(302708);
function y(e) {
    let { guildId: t, member: n, className: i } = e,
        o = null != n.member ? (0, m.CA)(n.member) : null;
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
                        className: l()(i, O.partyAvatar),
                        'aria-label': null != (a = n.nick) ? a : b.ZP.getName(n.user)
                    },
                    e
                )
            );
        }
    });
}
function v(e) {
    let { members: t, guildId: n } = e;
    return (0, r.jsx)(h.Z, {
        className: O.partyMembers,
        guildId: n,
        users: t,
        max: 6,
        renderUser: (e, t, i) =>
            (0, r.jsx)(
                y,
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
                    className: l()(O.morePartyMembers, t),
                    children: e
                },
                n
            )
    });
}
let C = (e) => {
    let { channel: t, presenceActivity: n, members: i, embeddedApp: l, onAction: h } = e,
        m = null != l,
        b = m ? Array.from(l.embeddedActivity.userIds) : [],
        y = (0, o.e7)([g.default, f.default], () => {
            if (m) return g.default.getUser(b[0]);
            if (null != i) {
                var e, t;
                return i.length <= 0 ? null : null != (t = null == (e = i.find((e) => e.user.id !== f.default.getId())) ? void 0 : e.user) ? t : i[0].user;
            }
        });
    if (null == y) return null;
    let C = m || (0, c.Z)(n),
        j = (0, p.vd)(t.type);
    return (0, r.jsxs)('div', {
        className: O.activity,
        children: [
            (0, r.jsx)('div', {
                className: O.channelActivityContainer,
                children: C
                    ? (0, r.jsx)(_.Z, {
                          activity: n,
                          embeddedApp: l,
                          user: y,
                          channel: t,
                          sortedVoiceStates: i,
                          onOpenSpotifyTrack: j ? d.aG : void 0,
                          onOpenSpotifyArtist: j ? d.d$ : void 0,
                          onOpenSpotifyAlbum: j ? d.Z5 : void 0
                      })
                    : (0, r.jsx)(a.Z, {
                          type: a.P.VOICE_CHANNEL,
                          activity: n,
                          user: y,
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
                className: O.activityActionsContainer,
                children: (0, r.jsx)(u.Z, {
                    type: a.P.VOICE_CHANNEL,
                    activity: n,
                    embeddedActivity: null == l ? void 0 : l.embeddedActivity,
                    user: y,
                    guildId: t.getGuildId(),
                    channelId: t.id,
                    color: s.zxk.Colors.PRIMARY,
                    look: s.zxk.Looks.FILLED,
                    onAction: h
                })
            })
        ]
    });
};
