n.d(t, {
    GB: () => Z,
    JI: () => A,
    UM: () => j,
    V6: () => R,
    WT: () => N,
    X7: () => v,
    jq: () => L,
    mx: () => I
}),
    n(411104);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(388905),
    c = n(118012),
    d = n(925329),
    u = n(372769),
    _ = n(768581),
    h = n(51144),
    g = n(245335),
    p = n(981631),
    m = n(888592),
    f = n(388032),
    E = n(105401);
let I = 100,
    x = (e) => {
        var t, n;
        let i = {
            onlineCount: null !== (t = e.approximate_presence_count) && void 0 !== t ? t : 0,
            memberCount: null !== (n = e.approximate_member_count) && void 0 !== n ? n : 0
        };
        return 0 === i.memberCount && 0 === i.memberCount ? null : i;
    },
    C = (e) => e.target_type === g.Iq.STREAM && null != e.target_user,
    N = (e) => {
        var t;
        return (null === (t = e.channel) || void 0 === t ? void 0 : t.type) === p.d4z.GROUP_DM;
    },
    v = (e) => null == e.channel && null == e.guild && null != e.inviter,
    T = (e) => {
        var t;
        let n = x(e);
        return (null !== (t = null == n ? void 0 : n.memberCount) && void 0 !== t ? t : 0) > I;
    },
    S = (e) => e.state === p.r2o.ACCEPTED,
    A = (e) => {
        let { guild_scheduled_event: t } = e;
        return null != t;
    },
    b = (e) => !A(e) && (!!v(e) || (null != e.inviter && !S(e) && !T(e))),
    Z = (e) => {
        let { guild: t, user: n, application: r } = e;
        return null != r
            ? (0, i.jsx)(d.Z, {
                  className: E.appIcon,
                  game: r,
                  size: E.appIconSize
              })
            : null != n
              ? (0, i.jsx)(s.qE, {
                    src: n.getAvatarURL(void 0, 100),
                    size: o.EFr.DEPRECATED_SIZE_100,
                    className: E.avatar
                })
              : null != t
                ? (0, i.jsx)(s.Vj, {
                      guild: t,
                      size: s.Vj.Sizes.LARGER,
                      className: E.guildIcon,
                      animate: !0
                  })
                : null;
    };
function R(e) {
    var t;
    let { invite: n, textClassName: r, className: l } = e,
        o = x(n);
    return null == o || b(n) || (null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id) === m.fQ
        ? null
        : (0, i.jsx)(s.EJ, {
              className: a()(E.activityCount, l),
              online: o.onlineCount,
              total: o.memberCount,
              textClassName: r,
              flat: !0
          });
}
function L(e) {
    let { invite: t, showBigUserIcon: n } = e,
        l = r.useMemo(() => (n ? null : C(t) && null != t.target_user ? _.ZP.getUserAvatarURL(t.target_user) : b(t) && null != t.inviter ? _.ZP.getUserAvatarURL(t.inviter) : null), [t, n]),
        a = f.intl.string(f.t['3rE1Pz']);
    if (N(t)) {
        var c, d;
        a = (null === (c = t.channel) || void 0 === c ? void 0 : c.name) != null && (null === (d = t.inviter) || void 0 === d ? void 0 : d.username) != null ? f.intl.format(f.t.Lu4h19, { username: t.inviter.username }) : f.intl.string(f.t.OsdY8P);
    } else C(t) && null != t.target_user ? (a = f.intl.formatToPlainString(f.t.x2L32d, { username: t.target_user.username })) : S(t) ? (a = f.intl.string(f.t['FDsl+P'])) : b(t) && null != t.inviter && (a = f.intl.format(f.t.spU2mJ, { username: h.ZP.getFormattedName(t.inviter) }));
    return (0, i.jsxs)('div', {
        className: E.inviteJoinContainer,
        children: [
            null != l &&
                (0, i.jsx)('div', {
                    className: E.inviterIconWrapper,
                    children: (0, i.jsx)(s.qE, {
                        src: l,
                        size: o.EFr.SIZE_24
                    })
                }),
            (0, i.jsx)(s.DK, {
                className: E.__invalid_inviteJoinSubTitle,
                children: a
            })
        ]
    });
}
function j(e) {
    let t,
        n,
        r,
        { user: l, guild: a, channel: d, application: _, showBigUserIcon: g } = e;
    if (null != a)
        g &&
            null == _ &&
            (t = (0, i.jsx)(s.Vj, {
                guild: a,
                size: s.Vj.Sizes.SMALL
            })),
            (n = a.name),
            null != _ &&
                ((n = _.name),
                (r = (0, i.jsxs)('div', {
                    className: E.inviteJoinContainer,
                    children: [
                        (0, i.jsx)(s.DK, {
                            className: E.appIn,
                            children: f.intl.string(f.t['3gg9fH'])
                        }),
                        (0, i.jsxs)('div', {
                            className: E.guildContainer,
                            children: [
                                (0, i.jsx)(s.Vj, {
                                    guild: a,
                                    size: s.Vj.Sizes.SMALL
                                }),
                                (0, i.jsx)(c.Z, {
                                    className: E.appGuildName,
                                    color: c.Z.Colors.CUSTOM,
                                    tag: 'span',
                                    size: c.Z.Sizes.SIZE_24,
                                    children: a.name
                                })
                            ]
                        })
                    ]
                })));
    else if (null != d) {
        if (null == l) throw Error('no inviter in group DM invite');
        let e = h.ZP.getFormattedName(l);
        null != d.name && '' !== d.name
            ? ((n = d.name),
              null != d.icon &&
                  (t = (0, i.jsx)(s.MC, {
                      channel: d,
                      size: o.EFr.SIZE_32
                  })))
            : (n = e);
    } else if (null != l) {
        let e = h.ZP.getFormattedName(l);
        (n = f.intl.formatToPlainString(f.t['4aF92d'], { username: e })),
            (r = (0, i.jsx)(s.DK, {
                className: E.directInviteSubTitle,
                children: f.intl.format(f.t.Quj7HR, { username: e })
            }));
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(s.Dx, {
                className: E.title,
                children: [
                    null != a
                        ? (0, i.jsx)(u.Z, {
                              guild: a,
                              className: E.guildBadge,
                              tooltipPosition: 'left'
                          })
                        : null,
                    t,
                    n
                ]
            }),
            r
        ]
    });
}
