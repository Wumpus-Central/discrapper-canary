n.d(t, {
    GB: () => N,
    JI: () => y,
    UM: () => T,
    V6: () => S,
    WT: () => E,
    X7: () => j,
    jq: () => C,
    mx: () => x,
}),
    n(415506);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(388905),
    c = n(925329),
    u = n(372769),
    d = n(768581),
    h = n(51144),
    p = n(245335),
    m = n(981631),
    f = n(888592),
    g = n(388032),
    _ = n(215613);
let x = 100,
    b = (e) => {
        var t, n;
        let r = {
            onlineCount: null != (t = e.approximate_presence_count) ? t : 0,
            memberCount: null != (n = e.approximate_member_count) ? n : 0,
        };
        return 0 === r.memberCount && 0 === r.memberCount ? null : r;
    },
    v = (e) => e.target_type === p.Iq.STREAM && null != e.target_user,
    E = (e) => {
        var t;
        return (null == (t = e.channel) ? void 0 : t.type) === m.d4z.GROUP_DM;
    },
    j = (e) => null == e.channel && null == e.guild && null != e.inviter,
    I = (e) => e.state === m.r2o.ACCEPTED,
    y = (e) => {
        let { guild_scheduled_event: t } = e;
        return null != t;
    },
    O = (e) =>
        !y(e) &&
        (!!j(e) ||
            (null != e.inviter &&
                !I(e) &&
                !((e) => {
                    var t;
                    let n = b(e);
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
              ? (0, r.jsx)(s.qE, {
                    src: n.getAvatarURL(void 0, 100),
                    size: o.EFr.DEPRECATED_SIZE_100,
                    className: _.avatar,
                })
              : null != t
                ? (0, r.jsx)(s.Vj, {
                      guild: t,
                      size: s.Vj.Sizes.LARGER,
                      className: _.guildIcon,
                      animate: !0,
                  })
                : null;
    };
function S(e) {
    var t;
    let { invite: n, textClassName: i, className: l } = e,
        o = b(n);
    return null == o || O(n) || (null == n || null == (t = n.guild) ? void 0 : t.id) === f.fQ
        ? null
        : (0, r.jsx)(s.EJ, {
              className: a()(_.activityCount, l),
              online: o.onlineCount,
              total: o.memberCount,
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
                      : O(t) && null != t.inviter
                        ? d.ZP.getUserAvatarURL(t.inviter)
                        : null,
            [t, n],
        ),
        a = g.intl.string(g.t["3rE1Pz"]);
    if (E(t)) {
        var c, u;
        a =
            (null == (c = t.channel) ? void 0 : c.name) != null &&
            (null == (u = t.inviter) ? void 0 : u.username) != null
                ? g.intl.format(g.t.Lu4h19, { username: t.inviter.username })
                : g.intl.string(g.t.OsdY8P);
    } else
        v(t) && null != t.target_user
            ? (a = g.intl.formatToPlainString(g.t.x2L32d, { username: t.target_user.username }))
            : I(t)
              ? (a = g.intl.string(g.t["FDsl+P"]))
              : O(t) &&
                null != t.inviter &&
                (a = g.intl.format(g.t.spU2mJ, { username: h.ZP.getFormattedName(t.inviter) }));
    return (0, r.jsxs)("div", {
        className: _.inviteJoinContainer,
        children: [
            null != l &&
                (0, r.jsx)("div", {
                    className: _.inviterIconWrapper,
                    children: (0, r.jsx)(s.qE, {
                        src: l,
                        size: o.EFr.SIZE_24,
                    }),
                }),
            (0, r.jsx)(s.DK, {
                className: _.__invalid_inviteJoinSubTitle,
                children: a,
            }),
        ],
    });
}
function T(e) {
    let t,
        n,
        i,
        { user: l, guild: a, channel: c, application: d, showBigUserIcon: p } = e;
    if (null != a)
        p &&
            null == d &&
            (t = (0, r.jsx)(s.Vj, {
                guild: a,
                size: s.Vj.Sizes.SMALL,
            })),
            (n = a.name),
            null != d &&
                ((n = d.name),
                (i = (0, r.jsxs)("div", {
                    className: _.inviteJoinContainer,
                    children: [
                        (0, r.jsx)(s.DK, {
                            className: _.appIn,
                            children: g.intl.string(g.t["3gg9fH"]),
                        }),
                        (0, r.jsxs)("div", {
                            className: _.guildContainer,
                            children: [
                                (0, r.jsx)(s.Vj, {
                                    guild: a,
                                    size: s.Vj.Sizes.SMALL,
                                }),
                                (0, r.jsx)(o.X6q, {
                                    color: "header-primary",
                                    variant: "heading-xl/semibold",
                                    children: a.name,
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
                  (t = (0, r.jsx)(s.MC, {
                      channel: c,
                      size: o.EFr.SIZE_32,
                  })))
            : (n = e);
    } else if (null != l) {
        let e = h.ZP.getFormattedName(l);
        (n = g.intl.formatToPlainString(g.t["4aF92d"], { username: e })),
            (i = (0, r.jsx)(s.DK, {
                className: _.directInviteSubTitle,
                children: g.intl.format(g.t.Quj7HR, { username: e }),
            }));
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(s.Dx, {
                className: _.title,
                children: [
                    null != a
                        ? (0, r.jsx)(u.Z, {
                              guild: a,
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
