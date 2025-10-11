n.d(t, {
    GB: () => O,
    JI: () => N,
    UM: () => A,
    V6: () => y,
    WT: () => b,
    X7: () => j,
    jq: () => C,
    mx: () => x,
}),
    n(415506);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
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
    b = (e) => {
        var t;
        return (null == (t = e.channel) ? void 0 : t.type) === m.d4z.GROUP_DM;
    },
    j = (e) => null == e.channel && null == e.guild && null != e.inviter,
    I = (e) => e.state === m.r2o.ACCEPTED,
    N = (e) => {
        let { guild_scheduled_event: t } = e;
        return null != t;
    },
    S = (e) =>
        !N(e) &&
        (!!j(e) ||
            (null != e.inviter &&
                !I(e) &&
                !((e) => {
                    var t;
                    let n = E(e);
                    return (null != (t = null == n ? void 0 : n.memberCount) ? t : 0) > x;
                })(e))),
    O = (e) => {
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
function y(e) {
    var t;
    let { invite: n, textClassName: i, className: l } = e,
        a = E(n);
    return null == a || S(n) || (null == n || null == (t = n.guild) ? void 0 : t.id) === p.fQ
        ? null
        : (0, r.jsx)(o.EJ, {
              className: s()(_.activityCount, l),
              online: a.onlineCount,
              total: a.memberCount,
              textClassName: i,
              flat: !0,
          });
}
function C(e) {
    let { invite: t, showBigUserIcon: n } = e,
        l = i.useMemo(
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
        s = f.intl.string(f.t["3rE1Pz"]);
    if (b(t)) {
        var c, u;
        s =
            (null == (c = t.channel) ? void 0 : c.name) != null &&
            (null == (u = t.inviter) ? void 0 : u.username) != null
                ? f.intl.format(f.t.Lu4h19, { username: t.inviter.username })
                : f.intl.string(f.t.OsdY8P);
    } else
        v(t) && null != t.target_user
            ? (s = f.intl.formatToPlainString(f.t.x2L32d, { username: t.target_user.username }))
            : I(t)
              ? (s = f.intl.string(f.t["FDsl+P"]))
              : S(t) &&
                null != t.inviter &&
                (s = f.intl.format(f.t.spU2mJ, { username: h.ZP.getFormattedName(t.inviter) }));
    return (0, r.jsxs)("div", {
        className: _.inviteJoinContainer,
        children: [
            null != l &&
                (0, r.jsx)("div", {
                    className: _.inviterIconWrapper,
                    children: (0, r.jsx)(o.qE, {
                        src: l,
                        size: a.EFr.SIZE_24,
                    }),
                }),
            (0, r.jsx)(o.DK, {
                className: _.__invalid_inviteJoinSubTitle,
                children: s,
            }),
        ],
    });
}
function A(e) {
    let t,
        n,
        i,
        { user: l, guild: s, channel: c, application: d, showBigUserIcon: g } = e;
    if (null != s)
        g &&
            null == d &&
            (t = (0, r.jsx)(o.Vj, {
                guild: s,
                size: o.Vj.Sizes.SMALL,
            })),
            (n = s.name),
            null != d &&
                ((n = d.name),
                (i = (0, r.jsxs)("div", {
                    className: _.inviteJoinContainer,
                    children: [
                        (0, r.jsx)(o.DK, {
                            className: _.appIn,
                            children: f.intl.string(f.t["3gg9fH"]),
                        }),
                        (0, r.jsxs)("div", {
                            className: _.guildContainer,
                            children: [
                                (0, r.jsx)(o.Vj, {
                                    guild: s,
                                    size: o.Vj.Sizes.SMALL,
                                }),
                                (0, r.jsx)(a.Heading, {
                                    color: "header-primary",
                                    variant: "heading-xl/semibold",
                                    children: s.name,
                                }),
                            ],
                        }),
                    ],
                })));
    else if (null != c) {
        if (null == l) throw Error("no inviter in group DM invite");
        let e = h.ZP.getFormattedName(l);
        null != c.name && "" !== c.name
            ? ((n = c.name),
              null != c.icon &&
                  (t = (0, r.jsx)(o.MC, {
                      channel: c,
                      size: a.EFr.SIZE_32,
                  })))
            : (n = e);
    } else if (null != l) {
        let e = h.ZP.getFormattedName(l);
        (n = f.intl.formatToPlainString(f.t["4aF92d"], { username: e })),
            (i = (0, r.jsx)(o.DK, {
                className: _.directInviteSubTitle,
                children: f.intl.format(f.t.Quj7HR, { username: e }),
            }));
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(o.Dx, {
                className: _.title,
                children: [
                    null != s
                        ? (0, r.jsx)(u.Z, {
                              guild: s,
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
