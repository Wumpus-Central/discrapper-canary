n.d(t, {
    GB: () => C,
    JI: () => N,
    UM: () => T,
    V6: () => P,
    WT: () => j,
    X7: () => I,
    jq: () => A,
    mx: () => b
}),
    n(415506);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    o = n(481060),
    a = n(388905),
    c = n(118012),
    u = n(925329),
    d = n(372769),
    h = n(768581),
    g = n(51144),
    p = n(245335),
    m = n(981631),
    f = n(888592),
    _ = n(388032),
    x = n(440617);
let b = 100,
    E = (e) => {
        var t, n;
        let r = {
            onlineCount: null != (t = e.approximate_presence_count) ? t : 0,
            memberCount: null != (n = e.approximate_member_count) ? n : 0
        };
        return 0 === r.memberCount && 0 === r.memberCount ? null : r;
    },
    v = (e) => e.target_type === p.Iq.STREAM && null != e.target_user,
    j = (e) => {
        var t;
        return (null == (t = e.channel) ? void 0 : t.type) === m.d4z.GROUP_DM;
    },
    I = (e) => null == e.channel && null == e.guild && null != e.inviter,
    O = (e) => {
        var t;
        let n = E(e);
        return (null != (t = null == n ? void 0 : n.memberCount) ? t : 0) > b;
    },
    S = (e) => e.state === m.r2o.ACCEPTED,
    N = (e) => {
        let { guild_scheduled_event: t } = e;
        return null != t;
    },
    y = (e) => !N(e) && (!!I(e) || (null != e.inviter && !S(e) && !O(e))),
    C = (e) => {
        let { guild: t, user: n, application: i } = e;
        return null != i
            ? (0, r.jsx)(u.Z, {
                  className: x.appIcon,
                  game: i,
                  size: x.appIconSize
              })
            : null != n
              ? (0, r.jsx)(a.qE, {
                    src: n.getAvatarURL(void 0, 100),
                    size: o.EFr.DEPRECATED_SIZE_100,
                    className: x.avatar
                })
              : null != t
                ? (0, r.jsx)(a.Vj, {
                      guild: t,
                      size: a.Vj.Sizes.LARGER,
                      className: x.guildIcon,
                      animate: !0
                  })
                : null;
    };
function P(e) {
    var t;
    let { invite: n, textClassName: i, className: l } = e,
        o = E(n);
    return null == o || y(n) || (null == n || null == (t = n.guild) ? void 0 : t.id) === f.fQ
        ? null
        : (0, r.jsx)(a.EJ, {
              className: s()(x.activityCount, l),
              online: o.onlineCount,
              total: o.memberCount,
              textClassName: i,
              flat: !0
          });
}
function A(e) {
    let { invite: t, showBigUserIcon: n } = e,
        l = i.useMemo(() => (n ? null : v(t) && null != t.target_user ? h.ZP.getUserAvatarURL(t.target_user) : y(t) && null != t.inviter ? h.ZP.getUserAvatarURL(t.inviter) : null), [t, n]),
        s = _.intl.string(_.t['3rE1Pz']);
    if (j(t)) {
        var c, u;
        s = (null == (c = t.channel) ? void 0 : c.name) != null && (null == (u = t.inviter) ? void 0 : u.username) != null ? _.intl.format(_.t.Lu4h19, { username: t.inviter.username }) : _.intl.string(_.t.OsdY8P);
    } else v(t) && null != t.target_user ? (s = _.intl.formatToPlainString(_.t.x2L32d, { username: t.target_user.username })) : S(t) ? (s = _.intl.string(_.t['FDsl+P'])) : y(t) && null != t.inviter && (s = _.intl.format(_.t.spU2mJ, { username: g.ZP.getFormattedName(t.inviter) }));
    return (0, r.jsxs)('div', {
        className: x.inviteJoinContainer,
        children: [
            null != l &&
                (0, r.jsx)('div', {
                    className: x.inviterIconWrapper,
                    children: (0, r.jsx)(a.qE, {
                        src: l,
                        size: o.EFr.SIZE_24
                    })
                }),
            (0, r.jsx)(a.DK, {
                className: x.__invalid_inviteJoinSubTitle,
                children: s
            })
        ]
    });
}
function T(e) {
    let t,
        n,
        i,
        { user: l, guild: s, channel: u, application: h, showBigUserIcon: p } = e;
    if (null != s)
        p &&
            null == h &&
            (t = (0, r.jsx)(a.Vj, {
                guild: s,
                size: a.Vj.Sizes.SMALL
            })),
            (n = s.name),
            null != h &&
                ((n = h.name),
                (i = (0, r.jsxs)('div', {
                    className: x.inviteJoinContainer,
                    children: [
                        (0, r.jsx)(a.DK, {
                            className: x.appIn,
                            children: _.intl.string(_.t['3gg9fH'])
                        }),
                        (0, r.jsxs)('div', {
                            className: x.guildContainer,
                            children: [
                                (0, r.jsx)(a.Vj, {
                                    guild: s,
                                    size: a.Vj.Sizes.SMALL
                                }),
                                (0, r.jsx)(c.Z, {
                                    className: x.appGuildName,
                                    color: c.Z.Colors.CUSTOM,
                                    tag: 'span',
                                    size: c.Z.Sizes.SIZE_24,
                                    children: s.name
                                })
                            ]
                        })
                    ]
                })));
    else if (null != u) {
        if (null == l) throw Error('no inviter in group DM invite');
        let e = g.ZP.getFormattedName(l);
        null != u.name && '' !== u.name
            ? ((n = u.name),
              null != u.icon &&
                  (t = (0, r.jsx)(a.MC, {
                      channel: u,
                      size: o.EFr.SIZE_32
                  })))
            : (n = e);
    } else if (null != l) {
        let e = g.ZP.getFormattedName(l);
        (n = _.intl.formatToPlainString(_.t['4aF92d'], { username: e })),
            (i = (0, r.jsx)(a.DK, {
                className: x.directInviteSubTitle,
                children: _.intl.format(_.t.Quj7HR, { username: e })
            }));
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(a.Dx, {
                className: x.title,
                children: [
                    null != s
                        ? (0, r.jsx)(d.Z, {
                              guild: s,
                              className: x.guildBadge,
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
