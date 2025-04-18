n.d(t, {
    GB: () => C,
    JI: () => S,
    UM: () => T,
    V6: () => P,
    WT: () => v,
    X7: () => j,
    jq: () => A,
    mx: () => x
}),
    n(415506);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    l = n.n(s),
    o = n(481060),
    a = n(388905),
    c = n(118012),
    u = n(925329),
    d = n(372769),
    h = n(768581),
    p = n(51144),
    g = n(245335),
    f = n(981631),
    m = n(888592),
    _ = n(388032),
    N = n(328337);
let x = 100,
    b = (e) => {
        var t, n;
        let r = {
            onlineCount: null != (t = e.approximate_presence_count) ? t : 0,
            memberCount: null != (n = e.approximate_member_count) ? n : 0
        };
        return 0 === r.memberCount && 0 === r.memberCount ? null : r;
    },
    E = (e) => e.target_type === g.Iq.STREAM && null != e.target_user,
    v = (e) => {
        var t;
        return (null == (t = e.channel) ? void 0 : t.type) === f.d4z.GROUP_DM;
    },
    j = (e) => null == e.channel && null == e.guild && null != e.inviter,
    I = (e) => {
        var t;
        let n = b(e);
        return (null != (t = null == n ? void 0 : n.memberCount) ? t : 0) > x;
    },
    O = (e) => e.state === f.r2o.ACCEPTED,
    S = (e) => {
        let { guild_scheduled_event: t } = e;
        return null != t;
    },
    y = (e) => !S(e) && (!!j(e) || (null != e.inviter && !O(e) && !I(e))),
    C = (e) => {
        let { guild: t, user: n, application: i } = e;
        return null != i
            ? (0, r.jsx)(u.Z, {
                  className: N.appIcon,
                  game: i,
                  size: N.appIconSize
              })
            : null != n
              ? (0, r.jsx)(a.qE, {
                    src: n.getAvatarURL(void 0, 100),
                    size: o.EFr.DEPRECATED_SIZE_100,
                    className: N.avatar
                })
              : null != t
                ? (0, r.jsx)(a.Vj, {
                      guild: t,
                      size: a.Vj.Sizes.LARGER,
                      className: N.guildIcon,
                      animate: !0
                  })
                : null;
    };
function P(e) {
    var t;
    let { invite: n, textClassName: i, className: s } = e,
        o = b(n);
    return null == o || y(n) || (null == n || null == (t = n.guild) ? void 0 : t.id) === m.fQ
        ? null
        : (0, r.jsx)(a.EJ, {
              className: l()(N.activityCount, s),
              online: o.onlineCount,
              total: o.memberCount,
              textClassName: i,
              flat: !0
          });
}
function A(e) {
    let { invite: t, showBigUserIcon: n } = e,
        s = i.useMemo(() => (n ? null : E(t) && null != t.target_user ? h.ZP.getUserAvatarURL(t.target_user) : y(t) && null != t.inviter ? h.ZP.getUserAvatarURL(t.inviter) : null), [t, n]),
        l = _.NW.string(_.t['3rE1Pz']);
    if (v(t)) {
        var c, u;
        l = (null == (c = t.channel) ? void 0 : c.name) != null && (null == (u = t.inviter) ? void 0 : u.username) != null ? _.NW.format(_.t.Lu4h19, { username: t.inviter.username }) : _.NW.string(_.t.OsdY8P);
    } else E(t) && null != t.target_user ? (l = _.NW.formatToPlainString(_.t.x2L32d, { username: t.target_user.username })) : O(t) ? (l = _.NW.string(_.t['FDsl+P'])) : y(t) && null != t.inviter && (l = _.NW.format(_.t.spU2mJ, { username: p.ZP.getFormattedName(t.inviter) }));
    return (0, r.jsxs)('div', {
        className: N.inviteJoinContainer,
        children: [
            null != s &&
                (0, r.jsx)('div', {
                    className: N.inviterIconWrapper,
                    children: (0, r.jsx)(a.qE, {
                        src: s,
                        size: o.EFr.SIZE_24
                    })
                }),
            (0, r.jsx)(a.DK, {
                className: N.__invalid_inviteJoinSubTitle,
                children: l
            })
        ]
    });
}
function T(e) {
    let t,
        n,
        i,
        { user: s, guild: l, channel: u, application: h, showBigUserIcon: g } = e;
    if (null != l)
        g &&
            null == h &&
            (t = (0, r.jsx)(a.Vj, {
                guild: l,
                size: a.Vj.Sizes.SMALL
            })),
            (n = l.name),
            null != h &&
                ((n = h.name),
                (i = (0, r.jsxs)('div', {
                    className: N.inviteJoinContainer,
                    children: [
                        (0, r.jsx)(a.DK, {
                            className: N.appIn,
                            children: _.NW.string(_.t['3gg9fH'])
                        }),
                        (0, r.jsxs)('div', {
                            className: N.guildContainer,
                            children: [
                                (0, r.jsx)(a.Vj, {
                                    guild: l,
                                    size: a.Vj.Sizes.SMALL
                                }),
                                (0, r.jsx)(c.Z, {
                                    className: N.appGuildName,
                                    color: c.Z.Colors.CUSTOM,
                                    tag: 'span',
                                    size: c.Z.Sizes.SIZE_24,
                                    children: l.name
                                })
                            ]
                        })
                    ]
                })));
    else if (null != u) {
        if (null == s) throw Error('no inviter in group DM invite');
        let e = p.ZP.getFormattedName(s);
        null != u.name && '' !== u.name
            ? ((n = u.name),
              null != u.icon &&
                  (t = (0, r.jsx)(a.MC, {
                      channel: u,
                      size: o.EFr.SIZE_32
                  })))
            : (n = e);
    } else if (null != s) {
        let e = p.ZP.getFormattedName(s);
        (n = _.NW.formatToPlainString(_.t['4aF92d'], { username: e })),
            (i = (0, r.jsx)(a.DK, {
                className: N.directInviteSubTitle,
                children: _.NW.format(_.t.Quj7HR, { username: e })
            }));
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(a.Dx, {
                className: N.title,
                children: [
                    null != l
                        ? (0, r.jsx)(d.Z, {
                              guild: l,
                              className: N.guildBadge,
                              tooltipPosition: 'left'
                          })
                        : null,
                    t,
                    n
                ]
            }),
            i
        ]
    });
}
