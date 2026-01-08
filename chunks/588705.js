n.d(t, {
    R: () => C,
    Z: () => A,
}),
    n(415506);
var r = n(54381),
    i = n(473749),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(664926),
    u = n(388905),
    d = n(686546),
    h = n(925329),
    f = n(372769),
    g = n(420186),
    m = n(254887),
    p = n(973616),
    x = n(131704),
    _ = n(598077),
    E = n(594174),
    v = n(411198),
    b = n(51144),
    j = n(981631),
    I = n(888592),
    N = n(245335),
    y = n(388032),
    S = n(725194);
let C = () =>
        (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(u.qE, {
                    src: null,
                    size: o.EFr.DEPRECATED_SIZE_100,
                    className: S.avatar,
                }),
                (0, r.jsx)(u.DK, { children: y.intl.string(y.t["3rE1P8"]) }),
                (0, r.jsx)(u.Dx, {
                    className: S.inviteResolvingGuildName,
                    children: y.intl.string(y.t.ZTNur7),
                }),
            ],
        }),
    O = (e) => {
        let { guild: t, user: n, application: i, compact: s } = e;
        return null != i
            ? (0, r.jsx)(h.Z, {
                  className: S.appIcon,
                  game: i,
                  size: S.appIconSize,
              })
            : null != n
              ? (0, r.jsx)(u.qE, {
                    src: null != n ? n.getAvatarURL(void 0, 80) : null,
                    size: o.EFr.SIZE_80,
                    className: s ? void 0 : S.avatar,
                })
              : null != t
                ? (0, r.jsx)(d.ZP, {
                      mask: d.ZP.Masks.SQUIRCLE,
                      width: 64,
                      height: 64,
                      className: S.guildIcon,
                      children: (0, r.jsx)(u.Vj, {
                          guild: t,
                          size: u.Vj.Sizes.LARGER,
                          animate: !0,
                      }),
                  })
                : null;
    },
    T = (e) =>
        (0, r.jsx)(o.Text, {
            tag: "span",
            className: e.className,
            variant: "text-sm/medium",
            color: "text-subtle",
            children: e.children,
        }),
    A = (e) => {
        var t;
        let n,
            i,
            s,
            {
                invite: d,
                disableUser: h = !1,
                error: C,
                flatActivityCount: A = !1,
                isRegister: Z = !1,
                inUnclaimedFlow: P = !1,
                friendMemberIds: R = [],
                showInvitedByHeader: L = !0,
                className: D,
            } = e,
            { currentUser: k } = (0, l.cj)([E.default], () => ({ currentUser: E.default.getCurrentUser() }));
        if (null == d) return null;
        let w = null != R && R.length > 0,
            M = null != d.guild ? (v.lM(d.guild) ? d.guild : v.Qs(d.guild)) : null,
            B = null != d.channel ? (0, x.jD)(d.channel) : null,
            U = null != d.target_application ? new p.ZP(d.target_application) : null,
            G = h || null == d.inviter ? null : new _.Z(d.inviter),
            F =
                !(
                    (null != d.approximate_member_count && d.approximate_member_count > 100) ||
                    (null != M && M.features.has(j.GuildFeatures.COMMUNITY))
                ) && null != G,
            V = null,
            W = !1;
        if (null != M)
            L &&
                ((V =
                    null == G
                        ? y.intl.string(y.t["3rE1P8"])
                        : y.intl.formatToPlainString(y.t["5u47va"], { username: b.ZP.getFormattedName(G) })),
                d.target_type === N.Iq.STREAM &&
                    null != d.target_user &&
                    (V = y.intl.formatToPlainString(y.t.x2L32Q, { username: b.ZP.getFormattedName(d.target_user) })),
                d.target_type === N.Iq.EMBEDDED_APPLICATION &&
                    null != d.target_application &&
                    (V =
                        null != G
                            ? y.intl.formatToPlainString(y.t.UW1Cav, { username: b.ZP.getFormattedName(G) })
                            : y.intl.string(y.t.ENSuN3))),
                F &&
                    null == U &&
                    (n = (0, r.jsx)(u.Vj, {
                        className: S.icon,
                        guild: M,
                        size: u.Vj.Sizes.SMALL,
                    })),
                (i = M.name),
                null != U &&
                    ((i = U.name),
                    (s = (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(u.DK, {
                                className: S.appIn,
                                children: y.intl.string(y.t["3gg9fF"]),
                            }),
                            (0, r.jsxs)("div", {
                                className: S.guildContainer,
                                children: [
                                    (0, r.jsx)(u.Vj, {
                                        guild: M,
                                        size: u.Vj.Sizes.SMALL,
                                    }),
                                    (0, r.jsx)(o.Text, {
                                        tag: "span",
                                        variant: "text-lg/normal",
                                        color: "text-strong",
                                        className: S.appGuildName,
                                        children: M.name,
                                    }),
                                ],
                            }),
                        ],
                    })));
        else if (null != B) {
            if (null == G) throw Error("no inviter in group DM invite");
            let e = b.ZP.getFormattedName(G);
            null != B.name && "" !== B.name
                ? ((V = y.intl.formatToPlainString(y.t["5u47va"], { username: e })),
                  (i = B.name),
                  null != B.icon &&
                      (n = (0, r.jsx)(u.MC, {
                          channel: B,
                          size: o.EFr.SIZE_32,
                      })))
                : ((V = y.intl.string(y.t.OsdY8B)), (i = e));
        } else if (null != G) {
            let e = b.ZP.getFormattedName(G, !0);
            (i = y.intl.formatToPlainString(y.t["4aF92R"], { username: e })),
                (W = !0),
                (s =
                    null != C
                        ? null
                        : (0, r.jsx)(u.DK, {
                              className: S.directInviteSubTitle,
                              children: Z
                                  ? y.intl.format(y.t["6r4JiR"], { username: e })
                                  : y.intl.format(y.t.Quj7HX, { username: e }),
                          }));
        }
        return (0, r.jsxs)(o.Kqy, {
            direction: "vertical",
            gap: 8,
            className: a()(S.container, D),
            justify: "center",
            align: "center",
            children: [
                (0, r.jsx)(O, {
                    application: U,
                    guild: M,
                    user: F ? G : null,
                    compact: W,
                }),
                null != C
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(u.DK, { children: y.intl.string(y.t.mDFGFj) }),
                              (0, r.jsx)(u.Dx, { children: C }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              null != V ? (0, r.jsx)(u.DK, { children: V }) : null,
                              (0, r.jsxs)(u.Dx, {
                                  className: S.title,
                                  children: [
                                      null != M
                                          ? (0, r.jsx)(f.Z, {
                                                guild: M,
                                                className: S.guildBadge,
                                                tooltipPosition: "left",
                                            })
                                          : null,
                                      n,
                                      i,
                                  ],
                              }),
                          ],
                      }),
                s,
                (0, r.jsxs)(o.Kqy, {
                    direction: "vertical",
                    gap: 24,
                    children: [
                        (0, r.jsxs)(o.Kqy, {
                            direction: "vertical",
                            gap: 4,
                            children: [
                                null != U || W || (null == d || null == (t = d.guild) ? void 0 : t.id) === I.fQ
                                    ? null
                                    : (0, r.jsx)(u.EJ, {
                                          online: d.approximate_presence_count,
                                          total: d.approximate_member_count,
                                          flat: A,
                                          renderText: w ? T : void 0,
                                      }),
                                w && (0, r.jsx)(c.Z, { friendMemberIds: R }),
                            ],
                        }),
                        (0, r.jsx)(m.Z, {
                            guild: M,
                            roles: d.roles,
                            className: S.rolesList,
                        }),
                        P || null == k ? (0, r.jsx)(u.jQ, { user: k }) : (0, r.jsx)(g.R, {}),
                    ],
                }),
            ],
        });
    };
