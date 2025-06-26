n.d(t, {
    GB: () => C,
    JI: () => S,
    UM: () => P,
    V6: () => T,
    WT: () => v,
    X7: () => O,
    jq: () => A,
    mx: () => E
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
    h = n(768581),
    p = n(51144),
    m = n(245335),
    g = n(981631),
    f = n(888592),
    _ = n(388032),
    x = n(440617);
let E = 100,
    b = (e) => {
        var t, n;
        let r = {
            onlineCount: null != (t = e.approximate_presence_count) ? t : 0,
            memberCount: null != (n = e.approximate_member_count) ? n : 0
        };
        return 0 === r.memberCount && 0 === r.memberCount ? null : r;
    },
    I = (e) => e.target_type === m.Iq.STREAM && null != e.target_user,
    v = (e) => {
        var t;
        return (null == (t = e.channel) ? void 0 : t.type) === g.d4z.GROUP_DM;
    },
    O = (e) => null == e.channel && null == e.guild && null != e.inviter,
    N = (e) => {
        var t;
        let n = b(e);
        return (null != (t = null == n ? void 0 : n.memberCount) ? t : 0) > E;
    },
    j = (e) => e.state === g.r2o.ACCEPTED,
    S = (e) => {
        let { guild_scheduled_event: t } = e;
        return null != t;
    },
    y = (e) => !S(e) && (!!O(e) || (null != e.inviter && !j(e) && !N(e))),
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
        o = b(n);
    return null == o || y(n) || (null == n || null == (t = n.guild) ? void 0 : t.id) === f.fQ
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
        l = i.useMemo(() => (n ? null : I(t) && null != t.target_user ? h.ZP.getUserAvatarURL(t.target_user) : y(t) && null != t.inviter ? h.ZP.getUserAvatarURL(t.inviter) : null), [t, n]),
        a = _.intl.string(_.t['3rE1Pz']);
    if (v(t)) {
        var c, u;
        a = (null == (c = t.channel) ? void 0 : c.name) != null && (null == (u = t.inviter) ? void 0 : u.username) != null ? _.intl.format(_.t.Lu4h19, { username: t.inviter.username }) : _.intl.string(_.t.OsdY8P);
    } else I(t) && null != t.target_user ? (a = _.intl.formatToPlainString(_.t.x2L32d, { username: t.target_user.username })) : j(t) ? (a = _.intl.string(_.t['FDsl+P'])) : y(t) && null != t.inviter && (a = _.intl.format(_.t.spU2mJ, { username: p.ZP.getFormattedName(t.inviter) }));
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
        { user: l, guild: a, channel: u, application: h, showBigUserIcon: m } = e;
    if (null != a)
        m &&
            null == h &&
            (t = (0, r.jsx)(s.Vj, {
                guild: a,
                size: s.Vj.Sizes.SMALL
            })),
            (n = a.name),
            null != h &&
                ((n = h.name),
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
        let e = p.ZP.getFormattedName(l);
        null != u.name && '' !== u.name
            ? ((n = u.name),
              null != u.icon &&
                  (t = (0, r.jsx)(s.MC, {
                      channel: u,
                      size: o.EFr.SIZE_32
                  })))
            : (n = e);
    } else if (null != l) {
        let e = p.ZP.getFormattedName(l);
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
