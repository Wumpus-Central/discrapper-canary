t.d(l, {
    R: () => Z,
    Z: () => I,
}),
    t(415506);
var n = t(54381),
    i = t(473749),
    a = t(442837),
    r = t(481060),
    s = t(664926),
    u = t(388905),
    c = t(686546),
    d = t(925329),
    o = t(372769),
    m = t(420186),
    x = t(973616),
    g = t(131704),
    h = t(598077),
    j = t(594174),
    p = t(411198),
    v = t(51144),
    f = t(981631),
    N = t(888592),
    E = t(245335),
    _ = t(388032),
    S = t(620838);
let Z = () =>
        (0, n.jsxs)(i.Fragment, {
            children: [
                (0, n.jsx)(u.qE, {
                    src: null,
                    size: r.EFr.DEPRECATED_SIZE_100,
                    className: S.avatar,
                }),
                (0, n.jsx)(u.DK, { children: _.intl.string(_.t["3rE1P8"]) }),
                (0, n.jsx)(u.Dx, {
                    className: S.inviteResolvingGuildName,
                    children: _.intl.string(_.t.ZTNur7),
                }),
            ],
        }),
    P = (e) => {
        let { guild: l, user: t, application: i, compact: a } = e;
        return null != i
            ? (0, n.jsx)(d.Z, {
                  className: S.appIcon,
                  game: i,
                  size: S.appIconSize,
              })
            : null != t
              ? (0, n.jsx)(u.qE, {
                    src: null != t ? t.getAvatarURL(void 0, 80) : null,
                    size: r.EFr.SIZE_80,
                    className: a ? void 0 : S.avatar,
                })
              : null != l
                ? (0, n.jsx)(c.ZP, {
                      mask: c.ZP.Masks.SQUIRCLE,
                      width: 64,
                      height: 64,
                      className: S.guildIcon,
                      children: (0, n.jsx)(u.Vj, {
                          guild: l,
                          size: u.Vj.Sizes.LARGER,
                          animate: !0,
                      }),
                  })
                : null;
    },
    T = (e) =>
        (0, n.jsx)(r.Text, {
            tag: "span",
            className: e.className,
            variant: "text-sm/medium",
            color: "text-subtle",
            children: e.children,
        }),
    I = (e) => {
        var l;
        let t,
            i,
            c,
            {
                invite: d,
                disableUser: Z = !1,
                error: I,
                flatActivityCount: C = !1,
                isRegister: b = !1,
                inUnclaimedFlow: D = !1,
                friendMemberIds: F = [],
                showInvitedByHeader: k = !0,
            } = e,
            { currentUser: y } = (0, a.cj)([j.default], () => ({ currentUser: j.default.getCurrentUser() }));
        if (null == d) return null;
        let z = null != F && F.length > 0,
            R = null != d.guild ? (p.lM(d.guild) ? d.guild : p.Qs(d.guild)) : null,
            M = null != d.channel ? (0, g.jD)(d.channel) : null,
            A = null != d.target_application ? new x.ZP(d.target_application) : null,
            K = Z || null == d.inviter ? null : new h.Z(d.inviter),
            w =
                !(
                    (null != d.approximate_member_count && d.approximate_member_count > 100) ||
                    (null != R && R.features.has(f.GuildFeatures.COMMUNITY))
                ) && null != K,
            L = null,
            q = !1;
        if (null != R)
            k &&
                ((L =
                    null == K
                        ? _.intl.string(_.t["3rE1P8"])
                        : _.intl.formatToPlainString(_.t["5u47va"], { username: v.ZP.getFormattedName(K) })),
                d.target_type === E.Iq.STREAM &&
                    null != d.target_user &&
                    (L = _.intl.formatToPlainString(_.t.x2L32Q, { username: v.ZP.getFormattedName(d.target_user) })),
                d.target_type === E.Iq.EMBEDDED_APPLICATION &&
                    null != d.target_application &&
                    (L =
                        null != K
                            ? _.intl.formatToPlainString(_.t.UW1Cav, { username: v.ZP.getFormattedName(K) })
                            : _.intl.string(_.t.ENSuN3))),
                w &&
                    null == A &&
                    (t = (0, n.jsx)(u.Vj, {
                        className: S.icon,
                        guild: R,
                        size: u.Vj.Sizes.SMALL,
                    })),
                (i = R.name),
                null != A &&
                    ((i = A.name),
                    (c = (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsx)(u.DK, {
                                className: S.appIn,
                                children: _.intl.string(_.t["3gg9fF"]),
                            }),
                            (0, n.jsxs)("div", {
                                className: S.guildContainer,
                                children: [
                                    (0, n.jsx)(u.Vj, {
                                        guild: R,
                                        size: u.Vj.Sizes.SMALL,
                                    }),
                                    (0, n.jsx)(r.Text, {
                                        tag: "span",
                                        variant: "text-lg/normal",
                                        color: "header-primary",
                                        className: S.appGuildName,
                                        children: R.name,
                                    }),
                                ],
                            }),
                        ],
                    })));
        else if (null != M) {
            if (null == K) throw Error("no inviter in group DM invite");
            let e = v.ZP.getFormattedName(K);
            null != M.name && "" !== M.name
                ? ((L = _.intl.formatToPlainString(_.t["5u47va"], { username: e })),
                  (i = M.name),
                  null != M.icon &&
                      (t = (0, n.jsx)(u.MC, {
                          channel: M,
                          size: r.EFr.SIZE_32,
                      })))
                : ((L = _.intl.string(_.t.OsdY8B)), (i = e));
        } else if (null != K) {
            let e = v.ZP.getFormattedName(K, !0);
            (i = _.intl.formatToPlainString(_.t["4aF92R"], { username: e })),
                (q = !0),
                (c =
                    null != I
                        ? null
                        : (0, n.jsx)(u.DK, {
                              className: S.directInviteSubTitle,
                              children: b
                                  ? _.intl.format(_.t["6r4JiR"], { username: e })
                                  : _.intl.format(_.t.Quj7HX, { username: e }),
                          }));
        }
        return (0, n.jsxs)(r.Kqy, {
            direction: "vertical",
            gap: z ? 16 : 8,
            className: S.container,
            justify: "center",
            align: "center",
            children: [
                (0, n.jsx)(P, {
                    application: A,
                    guild: R,
                    user: w ? K : null,
                    compact: q,
                }),
                null != I
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(u.DK, { children: _.intl.string(_.t.mDFGFj) }),
                              (0, n.jsx)(u.Dx, { children: I }),
                          ],
                      })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              null != L ? (0, n.jsx)(u.DK, { children: L }) : null,
                              (0, n.jsxs)(u.Dx, {
                                  className: S.title,
                                  children: [
                                      null != R
                                          ? (0, n.jsx)(o.Z, {
                                                guild: R,
                                                className: S.guildBadge,
                                                tooltipPosition: "left",
                                            })
                                          : null,
                                      t,
                                      i,
                                  ],
                              }),
                          ],
                      }),
                c,
                (0, n.jsxs)(r.Kqy, {
                    direction: "vertical",
                    gap: z ? 16 : 32,
                    children: [
                        (0, n.jsxs)(r.Kqy, {
                            direction: "vertical",
                            gap: 8,
                            children: [
                                null != A || q || (null == d || null == (l = d.guild) ? void 0 : l.id) === N.fQ
                                    ? null
                                    : (0, n.jsx)(u.EJ, {
                                          className: S.activityCount,
                                          online: d.approximate_presence_count,
                                          total: d.approximate_member_count,
                                          flat: C,
                                          renderText: z ? T : void 0,
                                      }),
                                z && (0, n.jsx)(s.Z, { friendMemberIds: F }),
                            ],
                        }),
                        D || null == y ? (0, n.jsx)(u.jQ, { user: y }) : (0, n.jsx)(m.R, {}),
                    ],
                }),
            ],
        });
    };
