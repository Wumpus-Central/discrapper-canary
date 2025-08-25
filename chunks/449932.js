n.d(t, { Z: () => v });
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    o = n(442837),
    a = n(481060),
    s = n(717881),
    c = n(503438),
    u = n(850827),
    d = n(952164),
    p = n(237583),
    h = n(131704),
    f = n(314897),
    g = n(594174),
    m = n(768581),
    b = n(51144),
    O = n(754231),
    y = n(342273);
function _(e) {
    let { guildId: t, member: n, className: i } = e,
        o = null != n.member ? (0, m.CA)(n.member) : null;
    return (0, r.jsx)(a.ua7, {
        text: n.nick,
        position: "bottom",
        children: (e) => {
            var s;
            return (0, r.jsx)(
                a.qEK,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })(
                    {
                        src: null != o ? o : n.user.getAvatarURL(t, 16),
                        size: a.EFr.SIZE_16,
                        className: l()(i, y.partyAvatar),
                        "aria-label": null != (s = n.nick) ? s : b.ZP.getName(n.user),
                    },
                    e,
                ),
            );
        },
    });
}
function j(e) {
    let { members: t, guildId: n } = e;
    return (0, r.jsx)(p.Z, {
        className: y.partyMembers,
        guildId: n,
        users: t,
        max: 6,
        renderUser: (e, t, i) =>
            (0, r.jsx)(
                _,
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
                    className: l()(y.morePartyMembers, t),
                    children: e,
                },
                n,
            ),
    });
}
let v = (e) => {
    let { channel: t, presenceActivity: n, members: i, embeddedApp: l, onAction: a } = e,
        p = null != l,
        m = p ? Array.from(l.embeddedActivity.userIds) : [],
        b = (0, o.e7)([g.default, f.default], () => {
            if (p) return g.default.getUser(m[0]);
            if (null != i) {
                var e, t;
                return i.length <= 0
                    ? null
                    : null != (t = null == (e = i.find((e) => e.user.id !== f.default.getId())) ? void 0 : e.user)
                      ? t
                      : i[0].user;
            }
        });
    if (null == b) return null;
    let _ = p || (0, c.Z)(n),
        v = (0, h.vd)(t.type);
    return (0, r.jsxs)("div", {
        className: y.activity,
        children: [
            (0, r.jsx)("div", {
                className: y.channelActivityContainer,
                children: _
                    ? (0, r.jsx)(O.Z, {
                          activity: n,
                          embeddedApp: l,
                          user: b,
                          channel: t,
                          sortedVoiceStates: i,
                          onOpenSpotifyTrack: v ? d.aG : void 0,
                          onOpenSpotifyArtist: v ? d.d$ : void 0,
                          onOpenSpotifyAlbum: v ? d.Z5 : void 0,
                      })
                    : (0, r.jsx)(s.Z, {
                          type: s.P.VOICE_CHANNEL,
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
                className: y.activityActionsContainer,
                children: (0, r.jsx)(u.Z, {
                    type: s.P.VOICE_CHANNEL,
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
