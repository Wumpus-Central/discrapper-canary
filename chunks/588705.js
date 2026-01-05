n.d(t, {
    R: () => y,
    Z: () => T,
}),
    n(415506);
var r = n(54381),
    i = n(473749),
    s = n(442837),
    a = n(481060),
    l = n(664926),
    o = n(388905),
    c = n(686546),
    u = n(925329),
    d = n(372769),
    h = n(420186),
    f = n(254887),
    g = n(973616),
    m = n(131704),
    p = n(598077),
    x = n(594174),
    _ = n(411198),
    E = n(51144),
    v = n(981631),
    b = n(888592),
    j = n(245335),
    I = n(388032),
    N = n(725194);
let y = () =>
        (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(o.qE, {
                    src: null,
                    size: a.EFr.DEPRECATED_SIZE_100,
                    className: N.avatar,
                }),
                (0, r.jsx)(o.DK, { children: I.intl.string(I.t["3rE1P8"]) }),
                (0, r.jsx)(o.Dx, {
                    className: N.inviteResolvingGuildName,
                    children: I.intl.string(I.t.ZTNur7),
                }),
            ],
        }),
    S = (e) => {
        let { guild: t, user: n, application: i, compact: s } = e;
        return null != i
            ? (0, r.jsx)(u.Z, {
                  className: N.appIcon,
                  game: i,
                  size: N.appIconSize,
              })
            : null != n
              ? (0, r.jsx)(o.qE, {
                    src: null != n ? n.getAvatarURL(void 0, 80) : null,
                    size: a.EFr.SIZE_80,
                    className: s ? void 0 : N.avatar,
                })
              : null != t
                ? (0, r.jsx)(c.ZP, {
                      mask: c.ZP.Masks.SQUIRCLE,
                      width: 64,
                      height: 64,
                      className: N.guildIcon,
                      children: (0, r.jsx)(o.Vj, {
                          guild: t,
                          size: o.Vj.Sizes.LARGER,
                          animate: !0,
                      }),
                  })
                : null;
    },
    C = (e) =>
        (0, r.jsx)(a.Text, {
            tag: "span",
            className: e.className,
            variant: "text-sm/medium",
            color: "text-subtle",
            children: e.children,
        }),
    T = (e) => {
        var t;
        let n,
            i,
            c,
            {
                invite: u,
                disableUser: y = !1,
                error: T,
                flatActivityCount: O = !1,
                isRegister: A = !1,
                inUnclaimedFlow: Z = !1,
                friendMemberIds: P = [],
                showInvitedByHeader: R = !0,
            } = e,
            { currentUser: L } = (0, s.cj)([x.default], () => ({ currentUser: x.default.getCurrentUser() }));
        if (null == u) return null;
        let D = null != P && P.length > 0,
            k = null != u.guild ? (_.lM(u.guild) ? u.guild : _.Qs(u.guild)) : null,
            w = null != u.channel ? (0, m.jD)(u.channel) : null,
            M = null != u.target_application ? new g.ZP(u.target_application) : null,
            B = y || null == u.inviter ? null : new p.Z(u.inviter),
            U =
                !(
                    (null != u.approximate_member_count && u.approximate_member_count > 100) ||
                    (null != k && k.features.has(v.GuildFeatures.COMMUNITY))
                ) && null != B,
            G = null,
            F = !1;
        if (null != k)
            R &&
                ((G =
                    null == B
                        ? I.intl.string(I.t["3rE1P8"])
                        : I.intl.formatToPlainString(I.t["5u47va"], { username: E.ZP.getFormattedName(B) })),
                u.target_type === j.Iq.STREAM &&
                    null != u.target_user &&
                    (G = I.intl.formatToPlainString(I.t.x2L32Q, { username: E.ZP.getFormattedName(u.target_user) })),
                u.target_type === j.Iq.EMBEDDED_APPLICATION &&
                    null != u.target_application &&
                    (G =
                        null != B
                            ? I.intl.formatToPlainString(I.t.UW1Cav, { username: E.ZP.getFormattedName(B) })
                            : I.intl.string(I.t.ENSuN3))),
                U &&
                    null == M &&
                    (n = (0, r.jsx)(o.Vj, {
                        className: N.icon,
                        guild: k,
                        size: o.Vj.Sizes.SMALL,
                    })),
                (i = k.name),
                null != M &&
                    ((i = M.name),
                    (c = (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(o.DK, {
                                className: N.appIn,
                                children: I.intl.string(I.t["3gg9fF"]),
                            }),
                            (0, r.jsxs)("div", {
                                className: N.guildContainer,
                                children: [
                                    (0, r.jsx)(o.Vj, {
                                        guild: k,
                                        size: o.Vj.Sizes.SMALL,
                                    }),
                                    (0, r.jsx)(a.Text, {
                                        tag: "span",
                                        variant: "text-lg/normal",
                                        color: "text-strong",
                                        className: N.appGuildName,
                                        children: k.name,
                                    }),
                                ],
                            }),
                        ],
                    })));
        else if (null != w) {
            if (null == B) throw Error("no inviter in group DM invite");
            let e = E.ZP.getFormattedName(B);
            null != w.name && "" !== w.name
                ? ((G = I.intl.formatToPlainString(I.t["5u47va"], { username: e })),
                  (i = w.name),
                  null != w.icon &&
                      (n = (0, r.jsx)(o.MC, {
                          channel: w,
                          size: a.EFr.SIZE_32,
                      })))
                : ((G = I.intl.string(I.t.OsdY8B)), (i = e));
        } else if (null != B) {
            let e = E.ZP.getFormattedName(B, !0);
            (i = I.intl.formatToPlainString(I.t["4aF92R"], { username: e })),
                (F = !0),
                (c =
                    null != T
                        ? null
                        : (0, r.jsx)(o.DK, {
                              className: N.directInviteSubTitle,
                              children: A
                                  ? I.intl.format(I.t["6r4JiR"], { username: e })
                                  : I.intl.format(I.t.Quj7HX, { username: e }),
                          }));
        }
        return (0, r.jsxs)(a.Kqy, {
            direction: "vertical",
            gap: D ? 16 : 8,
            className: N.container,
            justify: "center",
            align: "center",
            children: [
                (0, r.jsx)(S, {
                    application: M,
                    guild: k,
                    user: U ? B : null,
                    compact: F,
                }),
                null != T
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(o.DK, { children: I.intl.string(I.t.mDFGFj) }),
                              (0, r.jsx)(o.Dx, { children: T }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              null != G ? (0, r.jsx)(o.DK, { children: G }) : null,
                              (0, r.jsxs)(o.Dx, {
                                  className: N.title,
                                  children: [
                                      null != k
                                          ? (0, r.jsx)(d.Z, {
                                                guild: k,
                                                className: N.guildBadge,
                                                tooltipPosition: "left",
                                            })
                                          : null,
                                      n,
                                      i,
                                  ],
                              }),
                          ],
                      }),
                c,
                (0, r.jsxs)(a.Kqy, {
                    direction: "vertical",
                    gap: D ? 16 : 32,
                    children: [
                        (0, r.jsxs)(a.Kqy, {
                            direction: "vertical",
                            gap: 8,
                            children: [
                                null != M || F || (null == u || null == (t = u.guild) ? void 0 : t.id) === b.fQ
                                    ? null
                                    : (0, r.jsx)(o.EJ, {
                                          className: N.activityCount,
                                          online: u.approximate_presence_count,
                                          total: u.approximate_member_count,
                                          flat: O,
                                          renderText: D ? C : void 0,
                                      }),
                                D && (0, r.jsx)(l.Z, { friendMemberIds: P }),
                            ],
                        }),
                        (0, r.jsx)(f.Z, {
                            guild: k,
                            roles: u.roles,
                            className: N.rolesList,
                        }),
                        Z || null == L ? (0, r.jsx)(o.jQ, { user: L }) : (0, r.jsx)(h.R, {}),
                    ],
                }),
            ],
        });
    };
