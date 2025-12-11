n.d(t, {
    GB: () => S,
    JI: () => N,
    UM: () => T,
    V6: () => C,
    WT: () => b,
    X7: () => j,
    jq: () => O,
    mx: () => _,
}),
    n(415506);
var r = n(54381),
    i = n(473749),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(388905),
    c = n(925329),
    u = n(372769),
    d = n(768581),
    h = n(51144),
    f = n(245335),
    g = n(981631),
    m = n(888592),
    p = n(388032),
    x = n(228218);
let _ = 100,
    E = (e) => {
        var t, n;
        let r = {
            onlineCount: null != (t = e.approximate_presence_count) ? t : 0,
            memberCount: null != (n = e.approximate_member_count) ? n : 0,
        };
        return 0 === r.memberCount && 0 === r.memberCount ? null : r;
    },
    v = (e) => e.target_type === f.Iq.STREAM && null != e.target_user,
    b = (e) => {
        var t;
        return (null == (t = e.channel) ? void 0 : t.type) === g.d4z.GROUP_DM;
    },
    j = (e) => null == e.channel && null == e.guild && null != e.inviter,
    I = (e) => e.state === g.r2o.ACCEPTED,
    N = (e) => {
        let { guild_scheduled_event: t } = e;
        return null != t;
    },
    y = (e) =>
        !N(e) &&
        (!!j(e) ||
            (null != e.inviter &&
                !I(e) &&
                !((e) => {
                    var t;
                    let n = E(e);
                    return (null != (t = null == n ? void 0 : n.memberCount) ? t : 0) > _;
                })(e))),
    S = (e) => {
        let { guild: t, user: n, application: i } = e;
        return null != i
            ? (0, r.jsx)(c.Z, {
                  className: x.appIcon,
                  game: i,
                  size: x.appIconSize,
              })
            : null != n
              ? (0, r.jsx)(o.qE, {
                    src: n.getAvatarURL(void 0, 100),
                    size: l.EFr.DEPRECATED_SIZE_100,
                    className: x.avatar,
                })
              : null != t
                ? (0, r.jsx)(o.Vj, {
                      guild: t,
                      size: o.Vj.Sizes.LARGER,
                      className: x.guildIcon,
                      animate: !0,
                  })
                : null;
    };
function C(e) {
    var t;
    let { invite: n, textClassName: i, className: s } = e,
        l = E(n);
    return null == l || y(n) || (null == n || null == (t = n.guild) ? void 0 : t.id) === m.fQ
        ? null
        : (0, r.jsx)(o.EJ, {
              className: a()(x.activityCount, s),
              online: l.onlineCount,
              total: l.memberCount,
              textClassName: i,
              flat: !0,
          });
}
function O(e) {
    let { invite: t, showBigUserIcon: n } = e,
        s = i.useMemo(
            () =>
                n
                    ? null
                    : v(t) && null != t.target_user
                      ? d.ZP.getUserAvatarURL(t.target_user)
                      : y(t) && null != t.inviter
                        ? d.ZP.getUserAvatarURL(t.inviter)
                        : null,
            [t, n],
        ),
        a = p.intl.string(p.t["3rE1P8"]);
    if (b(t)) {
        var c, u;
        a =
            (null == (c = t.channel) ? void 0 : c.name) != null &&
            (null == (u = t.inviter) ? void 0 : u.username) != null
                ? p.intl.format(p.t.Lu4h18, { username: t.inviter.username })
                : p.intl.string(p.t.OsdY8B);
    } else
        v(t) && null != t.target_user
            ? (a = p.intl.formatToPlainString(p.t.x2L32Q, { username: t.target_user.username }))
            : I(t)
              ? (a = p.intl.string(p.t["FDsl+J"]))
              : y(t) &&
                null != t.inviter &&
                (a = p.intl.format(p.t.spU2mI, { username: h.ZP.getFormattedName(t.inviter) }));
    return (0, r.jsxs)("div", {
        className: x.inviteJoinContainer,
        children: [
            null != s &&
                (0, r.jsx)("div", {
                    className: x.inviterIconWrapper,
                    children: (0, r.jsx)(o.qE, {
                        src: s,
                        size: l.EFr.SIZE_24,
                    }),
                }),
            (0, r.jsx)(o.DK, {
                className: x.__invalid_inviteJoinSubTitle,
                children: a,
            }),
        ],
    });
}
function T(e) {
    let t,
        n,
        i,
        { user: s, guild: a, channel: c, application: d, showBigUserIcon: f } = e;
    if (null != a)
        f &&
            null == d &&
            (t = (0, r.jsx)(o.Vj, {
                guild: a,
                size: o.Vj.Sizes.SMALL,
            })),
            (n = a.name),
            null != d &&
                ((n = d.name),
                (i = (0, r.jsxs)("div", {
                    className: x.inviteJoinContainer,
                    children: [
                        (0, r.jsx)(o.DK, {
                            className: x.appIn,
                            children: p.intl.string(p.t["3gg9fF"]),
                        }),
                        (0, r.jsxs)("div", {
                            className: x.guildContainer,
                            children: [
                                (0, r.jsx)(o.Vj, {
                                    guild: a,
                                    size: o.Vj.Sizes.SMALL,
                                }),
                                (0, r.jsx)(l.Heading, {
                                    color: "text-strong",
                                    variant: "heading-xl/semibold",
                                    children: a.name,
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
                      size: l.EFr.SIZE_32,
                  })))
            : (n = e);
    } else if (null != s) {
        let e = h.ZP.getFormattedName(s);
        (n = p.intl.formatToPlainString(p.t["4aF92R"], { username: e })),
            (i = (0, r.jsx)(o.DK, {
                className: x.directInviteSubTitle,
                children: p.intl.format(p.t.Quj7HX, { username: e }),
            }));
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(o.Dx, {
                className: x.title,
                children: [
                    null != a
                        ? (0, r.jsx)(u.Z, {
                              guild: a,
                              className: x.guildBadge,
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
