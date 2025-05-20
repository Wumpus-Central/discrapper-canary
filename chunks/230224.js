n.d(t, {
    GB: () => C,
    JI: () => y,
    UM: () => P,
    V6: () => T,
    WT: () => O,
    X7: () => S,
    jq: () => A,
    mx: () => b
}),
    n(415506);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(388905),
    c = n(118012),
    u = n(925329),
    d = n(372769),
    g = n(768581),
    h = n(51144),
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
    O = (e) => {
        var t;
        return (null == (t = e.channel) ? void 0 : t.type) === m.d4z.GROUP_DM;
    },
    S = (e) => null == e.channel && null == e.guild && null != e.inviter,
    I = (e) => {
        var t;
        let n = E(e);
        return (null != (t = null == n ? void 0 : n.memberCount) ? t : 0) > b;
    },
    j = (e) => e.state === m.r2o.ACCEPTED,
    y = (e) => {
        let { guild_scheduled_event: t } = e;
        return null != t;
    },
    N = (e) => !y(e) && (!!S(e) || (null != e.inviter && !j(e) && !I(e))),
    C = (e) => {
        let { guild: t, user: n, application: i } = e;
        return null != i
            ? (0, r.jsx)(u.Z, {
                  className: x.appIcon,
                  game: i,
                  size: x.appIconSize
              })
            : null != n
              ? (0, r.jsx)(s.qE, {
                    src: n.getAvatarURL(void 0, 100),
                    size: o.EFr.DEPRECATED_SIZE_100,
                    className: x.avatar
                })
              : null != t
                ? (0, r.jsx)(s.Vj, {
                      guild: t,
                      size: s.Vj.Sizes.LARGER,
                      className: x.guildIcon,
                      animate: !0
                  })
                : null;
    };
function T(e) {
    var t;
    let { invite: n, textClassName: i, className: l } = e,
        o = E(n);
    return null == o || N(n) || (null == n || null == (t = n.guild) ? void 0 : t.id) === f.fQ
        ? null
        : (0, r.jsx)(s.EJ, {
              className: a()(x.activityCount, l),
              online: o.onlineCount,
              total: o.memberCount,
              textClassName: i,
              flat: !0
          });
}
function A(e) {
    let { invite: t, showBigUserIcon: n } = e,
        l = i.useMemo(() => (n ? null : v(t) && null != t.target_user ? g.ZP.getUserAvatarURL(t.target_user) : N(t) && null != t.inviter ? g.ZP.getUserAvatarURL(t.inviter) : null), [t, n]),
        a = _.intl.string(_.t['3rE1Pz']);
    if (O(t)) {
        var c, u;
        a = (null == (c = t.channel) ? void 0 : c.name) != null && (null == (u = t.inviter) ? void 0 : u.username) != null ? _.intl.format(_.t.Lu4h19, { username: t.inviter.username }) : _.intl.string(_.t.OsdY8P);
    } else v(t) && null != t.target_user ? (a = _.intl.formatToPlainString(_.t.x2L32d, { username: t.target_user.username })) : j(t) ? (a = _.intl.string(_.t['FDsl+P'])) : N(t) && null != t.inviter && (a = _.intl.format(_.t.spU2mJ, { username: h.ZP.getFormattedName(t.inviter) }));
    return (0, r.jsxs)('div', {
        className: x.inviteJoinContainer,
        children: [
            null != l &&
                (0, r.jsx)('div', {
                    className: x.inviterIconWrapper,
                    children: (0, r.jsx)(s.qE, {
                        src: l,
                        size: o.EFr.SIZE_24
                    })
                }),
            (0, r.jsx)(s.DK, {
                className: x.__invalid_inviteJoinSubTitle,
                children: a
            })
        ]
    });
}
function P(e) {
    let t,
        n,
        i,
        { user: l, guild: a, channel: u, application: g, showBigUserIcon: p } = e;
    if (null != a)
        p &&
            null == g &&
            (t = (0, r.jsx)(s.Vj, {
                guild: a,
                size: s.Vj.Sizes.SMALL
            })),
            (n = a.name),
            null != g &&
                ((n = g.name),
                (i = (0, r.jsxs)('div', {
                    className: x.inviteJoinContainer,
                    children: [
                        (0, r.jsx)(s.DK, {
                            className: x.appIn,
                            children: _.intl.string(_.t['3gg9fH'])
                        }),
                        (0, r.jsxs)('div', {
                            className: x.guildContainer,
                            children: [
                                (0, r.jsx)(s.Vj, {
                                    guild: a,
                                    size: s.Vj.Sizes.SMALL
                                }),
                                (0, r.jsx)(c.Z, {
                                    className: x.appGuildName,
                                    color: c.Z.Colors.CUSTOM,
                                    tag: 'span',
                                    size: c.Z.Sizes.SIZE_24,
                                    children: a.name
                                })
                            ]
                        })
                    ]
                })));
    else if (null != u) {
        if (null == l) throw Error('no inviter in group DM invite');
        let e = h.ZP.getFormattedName(l);
        null != u.name && '' !== u.name
            ? ((n = u.name),
              null != u.icon &&
                  (t = (0, r.jsx)(s.MC, {
                      channel: u,
                      size: o.EFr.SIZE_32
                  })))
            : (n = e);
    } else if (null != l) {
        let e = h.ZP.getFormattedName(l);
        (n = _.intl.formatToPlainString(_.t['4aF92d'], { username: e })),
            (i = (0, r.jsx)(s.DK, {
                className: x.directInviteSubTitle,
                children: _.intl.format(_.t.Quj7HR, { username: e })
            }));
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(s.Dx, {
                className: x.title,
                children: [
                    null != a
                        ? (0, r.jsx)(d.Z, {
                              guild: a,
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
