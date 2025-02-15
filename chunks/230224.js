n.d(t, {
    GB: () => R,
    JI: () => T,
    UM: () => O,
    V6: () => Z,
    WT: () => C,
    X7: () => N,
    jq: () => j,
    mx: () => E
}),
    n(411104);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(481060),
    s = n(388905),
    c = n(118012),
    d = n(925329),
    u = n(372769),
    h = n(768581),
    _ = n(51144),
    m = n(245335),
    g = n(981631),
    p = n(888592),
    f = n(388032),
    x = n(277893);
let E = 100,
    I = (e) => {
        var t, n;
        let i = {
            onlineCount: null !== (t = e.approximate_presence_count) && void 0 !== t ? t : 0,
            memberCount: null !== (n = e.approximate_member_count) && void 0 !== n ? n : 0
        };
        return 0 === i.memberCount && 0 === i.memberCount ? null : i;
    },
    v = (e) => e.target_type === m.Iq.STREAM && null != e.target_user,
    C = (e) => {
        var t;
        return (null === (t = e.channel) || void 0 === t ? void 0 : t.type) === g.d4z.GROUP_DM;
    },
    N = (e) => null == e.channel && null == e.guild && null != e.inviter,
    b = (e) => {
        var t;
        let n = I(e);
        return (null !== (t = null == n ? void 0 : n.memberCount) && void 0 !== t ? t : 0) > E;
    },
    S = (e) => e.state === g.r2o.ACCEPTED,
    T = (e) => {
        let { guild_scheduled_event: t } = e;
        return null != t;
    },
    A = (e) => !T(e) && (!!N(e) || (null != e.inviter && !S(e) && !b(e))),
    R = (e) => {
        let { guild: t, user: n, application: r } = e;
        return null != r
            ? (0, i.jsx)(d.Z, {
                  className: x.appIcon,
                  game: r,
                  size: x.appIconSize
              })
            : null != n
              ? (0, i.jsx)(s.qE, {
                    src: n.getAvatarURL(void 0, 100),
                    size: o.EFr.DEPRECATED_SIZE_100,
                    className: x.avatar
                })
              : null != t
                ? (0, i.jsx)(s.Vj, {
                      guild: t,
                      size: s.Vj.Sizes.LARGER,
                      className: x.guildIcon,
                      animate: !0
                  })
                : null;
    };
function Z(e) {
    var t;
    let { invite: n, textClassName: r, className: a } = e,
        o = I(n);
    return null == o || A(n) || (null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id) === p.fQ
        ? null
        : (0, i.jsx)(s.EJ, {
              className: l()(x.activityCount, a),
              online: o.onlineCount,
              total: o.memberCount,
              textClassName: r,
              flat: !0
          });
}
function j(e) {
    let { invite: t, showBigUserIcon: n } = e,
        a = r.useMemo(() => (n ? null : v(t) && null != t.target_user ? h.ZP.getUserAvatarURL(t.target_user) : A(t) && null != t.inviter ? h.ZP.getUserAvatarURL(t.inviter) : null), [t, n]),
        l = f.intl.string(f.t['3rE1Pz']);
    if (C(t)) {
        var c, d;
        l = (null === (c = t.channel) || void 0 === c ? void 0 : c.name) != null && (null === (d = t.inviter) || void 0 === d ? void 0 : d.username) != null ? f.intl.format(f.t.Lu4h19, { username: t.inviter.username }) : f.intl.string(f.t.OsdY8P);
    } else v(t) && null != t.target_user ? (l = f.intl.formatToPlainString(f.t.x2L32d, { username: t.target_user.username })) : S(t) ? (l = f.intl.string(f.t['FDsl+P'])) : A(t) && null != t.inviter && (l = f.intl.format(f.t.spU2mJ, { username: _.ZP.getFormattedName(t.inviter) }));
    return (0, i.jsxs)('div', {
        className: x.inviteJoinContainer,
        children: [
            null != a &&
                (0, i.jsx)('div', {
                    className: x.inviterIconWrapper,
                    children: (0, i.jsx)(s.qE, {
                        src: a,
                        size: o.EFr.SIZE_24
                    })
                }),
            (0, i.jsx)(s.DK, {
                className: x.__invalid_inviteJoinSubTitle,
                children: l
            })
        ]
    });
}
function O(e) {
    let t,
        n,
        r,
        { user: a, guild: l, channel: d, application: h, showBigUserIcon: m } = e;
    if (null != l)
        m &&
            null == h &&
            (t = (0, i.jsx)(s.Vj, {
                guild: l,
                size: s.Vj.Sizes.SMALL
            })),
            (n = l.name),
            null != h &&
                ((n = h.name),
                (r = (0, i.jsxs)('div', {
                    className: x.inviteJoinContainer,
                    children: [
                        (0, i.jsx)(s.DK, {
                            className: x.appIn,
                            children: f.intl.string(f.t['3gg9fH'])
                        }),
                        (0, i.jsxs)('div', {
                            className: x.guildContainer,
                            children: [
                                (0, i.jsx)(s.Vj, {
                                    guild: l,
                                    size: s.Vj.Sizes.SMALL
                                }),
                                (0, i.jsx)(c.Z, {
                                    className: x.appGuildName,
                                    color: c.Z.Colors.CUSTOM,
                                    tag: 'span',
                                    size: c.Z.Sizes.SIZE_24,
                                    children: l.name
                                })
                            ]
                        })
                    ]
                })));
    else if (null != d) {
        if (null == a) throw Error('no inviter in group DM invite');
        let e = _.ZP.getFormattedName(a);
        null != d.name && '' !== d.name
            ? ((n = d.name),
              null != d.icon &&
                  (t = (0, i.jsx)(s.MC, {
                      channel: d,
                      size: o.EFr.SIZE_32
                  })))
            : (n = e);
    } else if (null != a) {
        let e = _.ZP.getFormattedName(a);
        (n = f.intl.formatToPlainString(f.t['4aF92d'], { username: e })),
            (r = (0, i.jsx)(s.DK, {
                className: x.directInviteSubTitle,
                children: f.intl.format(f.t.Quj7HR, { username: e })
            }));
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(s.Dx, {
                className: x.title,
                children: [
                    null != l
                        ? (0, i.jsx)(u.Z, {
                              guild: l,
                              className: x.guildBadge,
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
