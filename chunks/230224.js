n.d(t, {
    GB: () => O,
    JI: () => N,
    UM: () => Z,
    V6: () => S,
    WT: () => b,
    X7: () => j,
    jq: () => C,
    mx: () => x,
}),
    n(415506);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    s = n(481060),
    a = n(388905),
    c = n(925329),
    u = n(372769),
    d = n(768581),
    h = n(51144),
    f = n(245335),
    p = n(981631),
    g = n(888592),
    m = n(388032),
    _ = n(215613);
let x = 100,
    v = (e) => {
        var t, n;
        let r = {
            onlineCount: null != (t = e.approximate_presence_count) ? t : 0,
            memberCount: null != (n = e.approximate_member_count) ? n : 0,
        };
        return 0 === r.memberCount && 0 === r.memberCount ? null : r;
    },
    E = (e) => e.target_type === f.Iq.STREAM && null != e.target_user,
    b = (e) => {
        var t;
        return (null == (t = e.channel) ? void 0 : t.type) === p.d4z.GROUP_DM;
    },
    j = (e) => null == e.channel && null == e.guild && null != e.inviter,
    I = (e) => e.state === p.r2o.ACCEPTED,
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
                    let n = v(e);
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
              ? (0, r.jsx)(a.qE, {
                    src: n.getAvatarURL(void 0, 100),
                    size: s.EFr.DEPRECATED_SIZE_100,
                    className: _.avatar,
                })
              : null != t
                ? (0, r.jsx)(a.Vj, {
                      guild: t,
                      size: a.Vj.Sizes.LARGER,
                      className: _.guildIcon,
                      animate: !0,
                  })
                : null;
    };
function S(e) {
    var t;
    let { invite: n, textClassName: i, className: l } = e,
        s = v(n);
    return null == s || y(n) || (null == n || null == (t = n.guild) ? void 0 : t.id) === g.fQ
        ? null
        : (0, r.jsx)(a.EJ, {
              className: o()(_.activityCount, l),
              online: s.onlineCount,
              total: s.memberCount,
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
                    : E(t) && null != t.target_user
                      ? d.ZP.getUserAvatarURL(t.target_user)
                      : y(t) && null != t.inviter
                        ? d.ZP.getUserAvatarURL(t.inviter)
                        : null,
            [t, n],
        ),
        o = m.intl.string(m.t["3rE1Pz"]);
    if (b(t)) {
        var c, u;
        o =
            (null == (c = t.channel) ? void 0 : c.name) != null &&
            (null == (u = t.inviter) ? void 0 : u.username) != null
                ? m.intl.format(m.t.Lu4h19, { username: t.inviter.username })
                : m.intl.string(m.t.OsdY8P);
    } else
        E(t) && null != t.target_user
            ? (o = m.intl.formatToPlainString(m.t.x2L32d, { username: t.target_user.username }))
            : I(t)
              ? (o = m.intl.string(m.t["FDsl+P"]))
              : y(t) &&
                null != t.inviter &&
                (o = m.intl.format(m.t.spU2mJ, { username: h.ZP.getFormattedName(t.inviter) }));
    return (0, r.jsxs)("div", {
        className: _.inviteJoinContainer,
        children: [
            null != l &&
                (0, r.jsx)("div", {
                    className: _.inviterIconWrapper,
                    children: (0, r.jsx)(a.qE, {
                        src: l,
                        size: s.EFr.SIZE_24,
                    }),
                }),
            (0, r.jsx)(a.DK, {
                className: _.__invalid_inviteJoinSubTitle,
                children: o,
            }),
        ],
    });
}
function Z(e) {
    let t,
        n,
        i,
        { user: l, guild: o, channel: c, application: d, showBigUserIcon: f } = e;
    if (null != o)
        f &&
            null == d &&
            (t = (0, r.jsx)(a.Vj, {
                guild: o,
                size: a.Vj.Sizes.SMALL,
            })),
            (n = o.name),
            null != d &&
                ((n = d.name),
                (i = (0, r.jsxs)("div", {
                    className: _.inviteJoinContainer,
                    children: [
                        (0, r.jsx)(a.DK, {
                            className: _.appIn,
                            children: m.intl.string(m.t["3gg9fH"]),
                        }),
                        (0, r.jsxs)("div", {
                            className: _.guildContainer,
                            children: [
                                (0, r.jsx)(a.Vj, {
                                    guild: o,
                                    size: a.Vj.Sizes.SMALL,
                                }),
                                (0, r.jsx)(s.X6q, {
                                    color: "header-primary",
                                    variant: "heading-xl/semibold",
                                    children: o.name,
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
                  (t = (0, r.jsx)(a.MC, {
                      channel: c,
                      size: s.EFr.SIZE_32,
                  })))
            : (n = e);
    } else if (null != l) {
        let e = h.ZP.getFormattedName(l);
        (n = m.intl.formatToPlainString(m.t["4aF92d"], { username: e })),
            (i = (0, r.jsx)(a.DK, {
                className: _.directInviteSubTitle,
                children: m.intl.format(m.t.Quj7HR, { username: e }),
            }));
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(a.Dx, {
                className: _.title,
                children: [
                    null != o
                        ? (0, r.jsx)(u.Z, {
                              guild: o,
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
