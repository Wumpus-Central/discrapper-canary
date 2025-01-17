n.d(t, {
    GB: function () {
        return A;
    },
    JI: function () {
        return Z;
    },
    UM: function () {
        return P;
    },
    V6: function () {
        return j;
    },
    WT: function () {
        return N;
    },
    X7: function () {
        return C;
    },
    jq: function () {
        return R;
    },
    mx: function () {
        return E;
    }
}),
    n(411104);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    o = n(481060),
    a = n(388905),
    c = n(118012),
    d = n(925329),
    u = n(372769),
    h = n(768581),
    f = n(51144),
    g = n(245335),
    m = n(981631),
    p = n(888592),
    x = n(388032),
    _ = n(105401);
let E = 100,
    I = (e) => {
        var t, n;
        let i = {
            onlineCount: null !== (t = e.approximate_presence_count) && void 0 !== t ? t : 0,
            memberCount: null !== (n = e.approximate_member_count) && void 0 !== n ? n : 0
        };
        return 0 === i.memberCount && 0 === i.memberCount ? null : i;
    },
    v = (e) => e.target_type === g.Iq.STREAM && null != e.target_user,
    N = (e) => {
        var t;
        return (null === (t = e.channel) || void 0 === t ? void 0 : t.type) === m.d4z.GROUP_DM;
    },
    C = (e) => null == e.channel && null == e.guild && null != e.inviter,
    b = (e) => {
        var t;
        let n = I(e);
        return (null !== (t = null == n ? void 0 : n.memberCount) && void 0 !== t ? t : 0) > E;
    },
    T = (e) => e.state === m.r2o.ACCEPTED,
    Z = (e) => {
        let { guild_scheduled_event: t } = e;
        return null != t || !1;
    },
    S = (e) => !Z(e) && (!!C(e) || (null != e.inviter && !T(e) && !b(e))),
    A = (e) => {
        let { guild: t, user: n, application: r } = e;
        if (null != r)
            return (0, i.jsx)(d.Z, {
                className: _.appIcon,
                game: r,
                size: _.appIconSize
            });
        if (null != n)
            return (0, i.jsx)(a.qE, {
                src: n.getAvatarURL(void 0, 100),
                size: o.AvatarSizes.DEPRECATED_SIZE_100,
                className: _.avatar
            });
        if (null != t)
            return (0, i.jsx)(a.Vj, {
                guild: t,
                size: a.Vj.Sizes.LARGER,
                className: _.guildIcon,
                animate: !0
            });
        else return null;
    };
function j(e) {
    var t;
    let { invite: n, textClassName: r, className: s } = e,
        o = I(n);
    return null == o || S(n) || (null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id) === p.fQ
        ? null
        : (0, i.jsx)(a.EJ, {
              className: l()(_.activityCount, s),
              online: o.onlineCount,
              total: o.memberCount,
              textClassName: r,
              flat: !0
          });
}
function R(e) {
    let { invite: t, showBigUserIcon: n } = e,
        s = r.useMemo(() => (n ? null : v(t) && null != t.target_user ? h.ZP.getUserAvatarURL(t.target_user) : S(t) && null != t.inviter ? h.ZP.getUserAvatarURL(t.inviter) : null), [t, n]),
        l = x.intl.string(x.t['3rE1Pz']);
    if (N(t)) {
        var c, d;
        l = (null === (c = t.channel) || void 0 === c ? void 0 : c.name) != null && (null === (d = t.inviter) || void 0 === d ? void 0 : d.username) != null ? x.intl.format(x.t.Lu4h19, { username: t.inviter.username }) : x.intl.string(x.t.OsdY8P);
    } else v(t) && null != t.target_user ? (l = x.intl.formatToPlainString(x.t.x2L32d, { username: t.target_user.username })) : T(t) ? (l = x.intl.string(x.t['FDsl+P'])) : S(t) && null != t.inviter && (l = x.intl.format(x.t.spU2mJ, { username: f.ZP.getFormattedName(t.inviter) }));
    return (0, i.jsxs)('div', {
        className: _.inviteJoinContainer,
        children: [
            null != s &&
                (0, i.jsx)('div', {
                    className: _.inviterIconWrapper,
                    children: (0, i.jsx)(a.qE, {
                        src: s,
                        size: o.AvatarSizes.SIZE_24
                    })
                }),
            (0, i.jsx)(a.DK, {
                className: _.__invalid_inviteJoinSubTitle,
                children: l
            })
        ]
    });
}
function P(e) {
    let t,
        n,
        r,
        { user: s, guild: l, channel: d, application: h, showBigUserIcon: g } = e;
    if (null != l)
        g &&
            null == h &&
            (t = (0, i.jsx)(a.Vj, {
                guild: l,
                size: a.Vj.Sizes.SMALL
            })),
            (n = l.name),
            null != h &&
                ((n = h.name),
                (r = (0, i.jsxs)('div', {
                    className: _.inviteJoinContainer,
                    children: [
                        (0, i.jsx)(a.DK, {
                            className: _.appIn,
                            children: x.intl.string(x.t['3gg9fH'])
                        }),
                        (0, i.jsxs)('div', {
                            className: _.guildContainer,
                            children: [
                                (0, i.jsx)(a.Vj, {
                                    guild: l,
                                    size: a.Vj.Sizes.SMALL
                                }),
                                (0, i.jsx)(c.Z, {
                                    className: _.appGuildName,
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
        if (null == s) throw Error('no inviter in group DM invite');
        let e = f.ZP.getFormattedName(s);
        null != d.name && '' !== d.name
            ? ((n = d.name),
              null != d.icon &&
                  (t = (0, i.jsx)(a.MC, {
                      channel: d,
                      size: o.AvatarSizes.SIZE_32
                  })))
            : (n = e);
    } else if (null != s) {
        let e = f.ZP.getFormattedName(s);
        (n = x.intl.formatToPlainString(x.t['4aF92d'], { username: e })),
            (r = (0, i.jsx)(a.DK, {
                className: _.directInviteSubTitle,
                children: x.intl.format(x.t.Quj7HR, { username: e })
            }));
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(a.Dx, {
                className: _.title,
                children: [
                    null != l
                        ? (0, i.jsx)(u.Z, {
                              guild: l,
                              className: _.guildBadge,
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
