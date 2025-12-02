n.d(l, {
    R: () => P,
    Z: () => I,
}),
    n(415506);
var t = n(54381),
    a = n(473749),
    i = n(442837),
    r = n(481060),
    s = n(664926),
    u = n(388905),
    c = n(686546),
    d = n(925329),
    o = n(372769),
    m = n(420186),
    g = n(973616),
    x = n(131704),
    h = n(598077),
    j = n(594174),
    p = n(411198),
    v = n(51144),
    N = n(981631),
    f = n(888592),
    E = n(245335),
    _ = n(388032),
    Z = n(620838);
let P = () =>
        (0, t.jsxs)(a.Fragment, {
            children: [
                (0, t.jsx)(u.qE, {
                    src: null,
                    size: r.EFr.DEPRECATED_SIZE_100,
                    className: Z.avatar,
                }),
                (0, t.jsx)(u.DK, { children: _.intl.string(_.t["3rE1P8"]) }),
                (0, t.jsx)(u.Dx, {
                    className: Z.inviteResolvingGuildName,
                    children: _.intl.string(_.t.ZTNur7),
                }),
            ],
        }),
    S = (e) => {
        let { guild: l, user: n, application: a, compact: i } = e;
        return null != a
            ? (0, t.jsx)(d.Z, {
                  className: Z.appIcon,
                  game: a,
                  size: Z.appIconSize,
              })
            : null != n
              ? (0, t.jsx)(u.qE, {
                    src: null != n ? n.getAvatarURL(void 0, 80) : null,
                    size: r.EFr.SIZE_80,
                    className: i ? Z.compactAvatar : Z.avatar,
                })
              : null != l
                ? (0, t.jsx)(c.ZP, {
                      mask: c.ZP.Masks.SQUIRCLE,
                      width: 64,
                      height: 64,
                      className: Z.guildIcon,
                      children: (0, t.jsx)(u.Vj, {
                          guild: l,
                          size: u.Vj.Sizes.LARGER,
                          animate: !0,
                      }),
                  })
                : null;
    },
    I = (e) => {
        var l;
        let n,
            a,
            c,
            {
                invite: d,
                disableUser: P = !1,
                error: I,
                flatActivityCount: C = !1,
                isRegister: D = !1,
                inUnclaimedFlow: T = !1,
                friendMemberIds: F = [],
            } = e,
            { currentUser: b } = (0, i.cj)([j.default], () => ({ currentUser: j.default.getCurrentUser() }));
        if (null == d) return null;
        let k = null != d.guild ? (p.lM(d.guild) ? d.guild : p.Qs(d.guild)) : null,
            y = null != d.channel ? (0, x.jD)(d.channel) : null,
            z = null != d.target_application ? new g.ZP(d.target_application) : null,
            R = P || null == d.inviter ? null : new h.Z(d.inviter),
            M =
                !(
                    (null != d.approximate_member_count && d.approximate_member_count > 100) ||
                    (null != k && k.features.has(N.GuildFeatures.COMMUNITY))
                ) && null != R,
            A = null,
            w = !1;
        if (null != k)
            (A =
                null == R
                    ? _.intl.string(_.t["3rE1P8"])
                    : _.intl.formatToPlainString(_.t["5u47va"], { username: v.ZP.getFormattedName(R) })),
                d.target_type === E.Iq.STREAM &&
                    null != d.target_user &&
                    (A = _.intl.formatToPlainString(_.t.x2L32Q, { username: v.ZP.getFormattedName(d.target_user) })),
                d.target_type === E.Iq.EMBEDDED_APPLICATION &&
                    null != d.target_application &&
                    (A =
                        null != R
                            ? _.intl.formatToPlainString(_.t.UW1Cav, { username: v.ZP.getFormattedName(R) })
                            : _.intl.string(_.t.ENSuN3)),
                M &&
                    null == z &&
                    (n = (0, t.jsx)(u.Vj, {
                        className: Z.icon,
                        guild: k,
                        size: u.Vj.Sizes.SMALL,
                    })),
                (a = k.name),
                null != z &&
                    ((a = z.name),
                    (c = (0, t.jsxs)("div", {
                        children: [
                            (0, t.jsx)(u.DK, {
                                className: Z.appIn,
                                children: _.intl.string(_.t["3gg9fF"]),
                            }),
                            (0, t.jsxs)("div", {
                                className: Z.guildContainer,
                                children: [
                                    (0, t.jsx)(u.Vj, {
                                        guild: k,
                                        size: u.Vj.Sizes.SMALL,
                                    }),
                                    (0, t.jsx)(r.Text, {
                                        tag: "span",
                                        variant: "text-lg/normal",
                                        color: "header-primary",
                                        className: Z.appGuildName,
                                        children: k.name,
                                    }),
                                ],
                            }),
                        ],
                    })));
        else if (null != y) {
            if (null == R) throw Error("no inviter in group DM invite");
            let e = v.ZP.getFormattedName(R);
            null != y.name && "" !== y.name
                ? ((A = _.intl.formatToPlainString(_.t["5u47va"], { username: e })),
                  (a = y.name),
                  null != y.icon &&
                      (n = (0, t.jsx)(u.MC, {
                          channel: y,
                          size: r.EFr.SIZE_32,
                      })))
                : ((A = _.intl.string(_.t.OsdY8B)), (a = e));
        } else if (null != R) {
            let e = v.ZP.getFormattedName(R, !0);
            (a = _.intl.formatToPlainString(_.t["4aF92R"], { username: e })),
                (w = !0),
                (c =
                    null != I
                        ? null
                        : (0, t.jsx)(u.DK, {
                              className: Z.directInviteSubTitle,
                              children: D
                                  ? _.intl.format(_.t["6r4JiR"], { username: e })
                                  : _.intl.format(_.t.Quj7HX, { username: e }),
                          }));
        }
        return (0, t.jsxs)("div", {
            className: Z.container,
            children: [
                (0, t.jsx)(S, {
                    application: z,
                    guild: k,
                    user: M ? R : null,
                    compact: w,
                }),
                null != I
                    ? (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)(u.DK, { children: _.intl.string(_.t.mDFGFj) }),
                              (0, t.jsx)(u.Dx, { children: I }),
                          ],
                      })
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)(u.DK, { children: A }),
                              (0, t.jsxs)(u.Dx, {
                                  className: Z.title,
                                  children: [
                                      null != k
                                          ? (0, t.jsx)(o.Z, {
                                                guild: k,
                                                className: Z.guildBadge,
                                                tooltipPosition: "left",
                                            })
                                          : null,
                                      n,
                                      a,
                                  ],
                              }),
                          ],
                      }),
                c,
                (0, t.jsxs)(r.Kqy, {
                    direction: "vertical",
                    gap: 8,
                    children: [
                        null != z || w || (null == d || null == (l = d.guild) ? void 0 : l.id) === f.fQ
                            ? null
                            : (0, t.jsx)(u.EJ, {
                                  className: Z.activityCount,
                                  online: d.approximate_presence_count,
                                  total: d.approximate_member_count,
                                  flat: C,
                              }),
                        null != F && F.length > 0 && (0, t.jsx)(s.Z, { friendMemberIds: F }),
                    ],
                }),
                T || null == b ? (0, t.jsx)(u.jQ, { user: b }) : (0, t.jsx)(m.R, {}),
            ],
        });
    };
