n.d(t, {
    GB: () => R,
    JI: () => b,
    UM: () => j,
    V6: () => Z,
    WT: () => v,
    X7: () => N,
    jq: () => O,
    mx: () => x
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
    h = n(768581),
    _ = n(51144),
    g = n(245335),
    m = n(981631),
    p = n(888592),
    f = n(388032),
    E = n(111124);
let x = 100,
    I = (e) => {
        var t, n;
        let i = {
            onlineCount: null !== (t = e.approximate_presence_count) && void 0 !== t ? t : 0,
            memberCount: null !== (n = e.approximate_member_count) && void 0 !== n ? n : 0
        };
        return 0 === i.memberCount && 0 === i.memberCount ? null : i;
    },
    C = (e) => e.target_type === g.Iq.STREAM && null != e.target_user,
    v = (e) => {
        var t;
        return (null === (t = e.channel) || void 0 === t ? void 0 : t.type) === m.d4z.GROUP_DM;
    },
    N = (e) => null == e.channel && null == e.guild && null != e.inviter,
    S = (e) => {
        var t;
        let n = I(e);
        return (null !== (t = null == n ? void 0 : n.memberCount) && void 0 !== t ? t : 0) > x;
    },
    T = (e) => e.state === m.r2o.ACCEPTED,
    b = (e) => {
        let { guild_scheduled_event: t } = e;
        return null != t;
    },
    A = (e) => !b(e) && (!!N(e) || (null != e.inviter && !T(e) && !S(e))),
    R = (e) => {
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
function Z(e) {
    var t;
    let { invite: n, textClassName: r, className: l } = e,
        o = I(n);
    return null == o || A(n) || (null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id) === p.fQ
        ? null
        : (0, i.jsx)(s.EJ, {
              className: a()(E.activityCount, l),
              online: o.onlineCount,
              total: o.memberCount,
              textClassName: r,
              flat: !0
          });
}
function O(e) {
    let { invite: t, showBigUserIcon: n } = e,
        l = r.useMemo(() => (n ? null : C(t) && null != t.target_user ? h.ZP.getUserAvatarURL(t.target_user) : A(t) && null != t.inviter ? h.ZP.getUserAvatarURL(t.inviter) : null), [t, n]),
        a = f.intl.string(f.t['3rE1Pz']);
    if (v(t)) {
        var c, d;
        a = (null === (c = t.channel) || void 0 === c ? void 0 : c.name) != null && (null === (d = t.inviter) || void 0 === d ? void 0 : d.username) != null ? f.intl.format(f.t.Lu4h19, { username: t.inviter.username }) : f.intl.string(f.t.OsdY8P);
    } else C(t) && null != t.target_user ? (a = f.intl.formatToPlainString(f.t.x2L32d, { username: t.target_user.username })) : T(t) ? (a = f.intl.string(f.t['FDsl+P'])) : A(t) && null != t.inviter && (a = f.intl.format(f.t.spU2mJ, { username: _.ZP.getFormattedName(t.inviter) }));
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
        { user: l, guild: a, channel: d, application: h, showBigUserIcon: g } = e;
    if (null != a)
        g &&
            null == h &&
            (t = (0, i.jsx)(s.Vj, {
                guild: a,
                size: s.Vj.Sizes.SMALL
            })),
            (n = a.name),
            null != h &&
                ((n = h.name),
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
        let e = _.ZP.getFormattedName(l);
        null != d.name && '' !== d.name
            ? ((n = d.name),
              null != d.icon &&
                  (t = (0, i.jsx)(s.MC, {
                      channel: d,
                      size: o.EFr.SIZE_32
                  })))
            : (n = e);
    } else if (null != l) {
        let e = _.ZP.getFormattedName(l);
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
