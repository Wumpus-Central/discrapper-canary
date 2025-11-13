n.d(t, {
    GB: () => N,
    JI: () => y,
    UM: () => T,
    V6: () => O,
    WT: () => j,
    X7: () => b,
    jq: () => C,
    mx: () => x,
}),
    n(415506);
var r = n(951288),
    i = n(647438),
    s = n(120356),
    l = n.n(s),
    a = n(481060),
    o = n(388905),
    c = n(925329),
    u = n(372769),
    d = n(768581),
    h = n(51144),
    g = n(245335),
    m = n(981631),
    p = n(888592),
    f = n(388032),
    _ = n(215613);
let x = 100,
    E = (e) => {
        var t, n;
        let r = {
            onlineCount: null != (t = e.approximate_presence_count) ? t : 0,
            memberCount: null != (n = e.approximate_member_count) ? n : 0,
        };
        return 0 === r.memberCount && 0 === r.memberCount ? null : r;
    },
    v = (e) => e.target_type === g.Iq.STREAM && null != e.target_user,
    j = (e) => {
        var t;
        return (null == (t = e.channel) ? void 0 : t.type) === m.d4z.GROUP_DM;
    },
    b = (e) => null == e.channel && null == e.guild && null != e.inviter,
    I = (e) => e.state === m.r2o.ACCEPTED,
    y = (e) => {
        let { guild_scheduled_event: t } = e;
        return null != t;
    },
    S = (e) =>
        !y(e) &&
        (!!b(e) ||
            (null != e.inviter &&
                !I(e) &&
                !((e) => {
                    var t;
                    let n = E(e);
                    return (null != (t = null == n ? void 0 : n.memberCount) ? t : 0) > x;
                })(e))),
    N = (e) => {
        let { guild: t, user: n, application: i } = e;
        return null != i
            ? (0, r.jsx)(c.Z, {
                  className: _.appIcon,
                  game: i,
                  size: _.appIconSize,
              })
            : null != n
              ? (0, r.jsx)(o.qE, {
                    src: n.getAvatarURL(void 0, 100),
                    size: a.EFr.DEPRECATED_SIZE_100,
                    className: _.avatar,
                })
              : null != t
                ? (0, r.jsx)(o.Vj, {
                      guild: t,
                      size: o.Vj.Sizes.LARGER,
                      className: _.guildIcon,
                      animate: !0,
                  })
                : null;
    };
function O(e) {
    var t;
    let { invite: n, textClassName: i, className: s } = e,
        a = E(n);
    return null == a || S(n) || (null == n || null == (t = n.guild) ? void 0 : t.id) === p.fQ
        ? null
        : (0, r.jsx)(o.EJ, {
              className: l()(_.activityCount, s),
              online: a.onlineCount,
              total: a.memberCount,
              textClassName: i,
              flat: !0,
          });
}
function C(e) {
    let { invite: t, showBigUserIcon: n } = e,
        s = i.useMemo(
            () =>
                n
                    ? null
                    : v(t) && null != t.target_user
                      ? d.ZP.getUserAvatarURL(t.target_user)
                      : S(t) && null != t.inviter
                        ? d.ZP.getUserAvatarURL(t.inviter)
                        : null,
            [t, n],
        ),
        l = f.intl.string(f.t["3rE1P8"]);
    if (j(t)) {
        var c, u;
        l =
            (null == (c = t.channel) ? void 0 : c.name) != null &&
            (null == (u = t.inviter) ? void 0 : u.username) != null
                ? f.intl.format(f.t.Lu4h18, { username: t.inviter.username })
                : f.intl.string(f.t.OsdY8B);
    } else
        v(t) && null != t.target_user
            ? (l = f.intl.formatToPlainString(f.t.x2L32Q, { username: t.target_user.username }))
            : I(t)
              ? (l = f.intl.string(f.t["FDsl+J"]))
              : S(t) &&
                null != t.inviter &&
                (l = f.intl.format(f.t.spU2mI, { username: h.ZP.getFormattedName(t.inviter) }));
    return (0, r.jsxs)("div", {
        className: _.inviteJoinContainer,
        children: [
            null != s &&
                (0, r.jsx)("div", {
                    className: _.inviterIconWrapper,
                    children: (0, r.jsx)(o.qE, {
                        src: s,
                        size: a.EFr.SIZE_24,
                    }),
                }),
            (0, r.jsx)(o.DK, {
                className: _.__invalid_inviteJoinSubTitle,
                children: l,
            }),
        ],
    });
}
function T(e) {
    let t,
        n,
        i,
        { user: s, guild: l, channel: c, application: d, showBigUserIcon: g } = e;
    if (null != l)
        g &&
            null == d &&
            (t = (0, r.jsx)(o.Vj, {
                guild: l,
                size: o.Vj.Sizes.SMALL,
            })),
            (n = l.name),
            null != d &&
                ((n = d.name),
                (i = (0, r.jsxs)("div", {
                    className: _.inviteJoinContainer,
                    children: [
                        (0, r.jsx)(o.DK, {
                            className: _.appIn,
                            children: f.intl.string(f.t["3gg9fF"]),
                        }),
                        (0, r.jsxs)("div", {
                            className: _.guildContainer,
                            children: [
                                (0, r.jsx)(o.Vj, {
                                    guild: l,
                                    size: o.Vj.Sizes.SMALL,
                                }),
                                (0, r.jsx)(a.Heading, {
                                    color: "header-primary",
                                    variant: "heading-xl/semibold",
                                    children: l.name,
                                }),
                            ],
                        }),
                    ],
                })));
    else if (null != c) {
        if (null == s) throw Error("no inviter in group DM invite");
        let e = h.ZP.getFormattedName(s);
        null != c.name && "" !== c.name
            ? ((n = c.name),
              null != c.icon &&
                  (t = (0, r.jsx)(o.MC, {
                      channel: c,
                      size: a.EFr.SIZE_32,
                  })))
            : (n = e);
    } else if (null != s) {
        let e = h.ZP.getFormattedName(s);
        (n = f.intl.formatToPlainString(f.t["4aF92R"], { username: e })),
            (i = (0, r.jsx)(o.DK, {
                className: _.directInviteSubTitle,
                children: f.intl.format(f.t.Quj7HX, { username: e }),
            }));
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(o.Dx, {
                className: _.title,
                children: [
                    null != l
                        ? (0, r.jsx)(u.Z, {
                              guild: l,
                              className: _.guildBadge,
                              tooltipPosition: "left",
                          })
                        : null,
                    t,
                    n,
                ],
            }),
            i,
        ],
    });
}
