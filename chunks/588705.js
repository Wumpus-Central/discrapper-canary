n.d(t, {
    R: () => N,
    Z: () => C,
}),
    n(415506);
var r = n(54381),
    i = n(473749),
    s = n(442837),
    l = n(481060),
    a = n(664926),
    o = n(388905),
    c = n(686546),
    u = n(925329),
    d = n(372769),
    h = n(420186),
    g = n(973616),
    m = n(131704),
    p = n(598077),
    f = n(594174),
    _ = n(411198),
    x = n(51144),
    E = n(981631),
    v = n(888592),
    j = n(245335),
    b = n(388032),
    I = n(620838);
let N = () =>
        (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(o.qE, {
                    src: null,
                    size: l.EFr.DEPRECATED_SIZE_100,
                    className: I.avatar,
                }),
                (0, r.jsx)(o.DK, { children: b.intl.string(b.t["3rE1P8"]) }),
                (0, r.jsx)(o.Dx, {
                    className: I.inviteResolvingGuildName,
                    children: b.intl.string(b.t.ZTNur7),
                }),
            ],
        }),
    y = (e) => {
        let { guild: t, user: n, application: i, compact: s } = e;
        return null != i
            ? (0, r.jsx)(u.Z, {
                  className: I.appIcon,
                  game: i,
                  size: I.appIconSize,
              })
            : null != n
              ? (0, r.jsx)(o.qE, {
                    src: null != n ? n.getAvatarURL(void 0, 80) : null,
                    size: l.EFr.SIZE_80,
                    className: s ? void 0 : I.avatar,
                })
              : null != t
                ? (0, r.jsx)(c.ZP, {
                      mask: c.ZP.Masks.SQUIRCLE,
                      width: 64,
                      height: 64,
                      className: I.guildIcon,
                      children: (0, r.jsx)(o.Vj, {
                          guild: t,
                          size: o.Vj.Sizes.LARGER,
                          animate: !0,
                      }),
                  })
                : null;
    },
    S = (e) =>
        (0, r.jsx)(l.Text, {
            tag: "span",
            className: e.className,
            variant: "text-sm/medium",
            color: "text-subtle",
            children: e.children,
        }),
    C = (e) => {
        var t;
        let n,
            i,
            c,
            {
                invite: u,
                disableUser: N = !1,
                error: C,
                flatActivityCount: O = !1,
                isRegister: T = !1,
                inUnclaimedFlow: A = !1,
                friendMemberIds: Z = [],
                showInvitedByHeader: P = !0,
            } = e,
            { currentUser: R } = (0, s.cj)([f.default], () => ({ currentUser: f.default.getCurrentUser() }));
        if (null == u) return null;
        let L = null != Z && Z.length > 0,
            w = null != u.guild ? (_.lM(u.guild) ? u.guild : _.Qs(u.guild)) : null,
            D = null != u.channel ? (0, m.jD)(u.channel) : null,
            k = null != u.target_application ? new g.ZP(u.target_application) : null,
            M = N || null == u.inviter ? null : new p.Z(u.inviter),
            B =
                !(
                    (null != u.approximate_member_count && u.approximate_member_count > 100) ||
                    (null != w && w.features.has(E.GuildFeatures.COMMUNITY))
                ) && null != M,
            U = null,
            G = !1;
        if (null != w)
            P &&
                ((U =
                    null == M
                        ? b.intl.string(b.t["3rE1P8"])
                        : b.intl.formatToPlainString(b.t["5u47va"], { username: x.ZP.getFormattedName(M) })),
                u.target_type === j.Iq.STREAM &&
                    null != u.target_user &&
                    (U = b.intl.formatToPlainString(b.t.x2L32Q, { username: x.ZP.getFormattedName(u.target_user) })),
                u.target_type === j.Iq.EMBEDDED_APPLICATION &&
                    null != u.target_application &&
                    (U =
                        null != M
                            ? b.intl.formatToPlainString(b.t.UW1Cav, { username: x.ZP.getFormattedName(M) })
                            : b.intl.string(b.t.ENSuN3))),
                B &&
                    null == k &&
                    (n = (0, r.jsx)(o.Vj, {
                        className: I.icon,
                        guild: w,
                        size: o.Vj.Sizes.SMALL,
                    })),
                (i = w.name),
                null != k &&
                    ((i = k.name),
                    (c = (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(o.DK, {
                                className: I.appIn,
                                children: b.intl.string(b.t["3gg9fF"]),
                            }),
                            (0, r.jsxs)("div", {
                                className: I.guildContainer,
                                children: [
                                    (0, r.jsx)(o.Vj, {
                                        guild: w,
                                        size: o.Vj.Sizes.SMALL,
                                    }),
                                    (0, r.jsx)(l.Text, {
                                        tag: "span",
                                        variant: "text-lg/normal",
                                        color: "header-primary",
                                        className: I.appGuildName,
                                        children: w.name,
                                    }),
                                ],
                            }),
                        ],
                    })));
        else if (null != D) {
            if (null == M) throw Error("no inviter in group DM invite");
            let e = x.ZP.getFormattedName(M);
            null != D.name && "" !== D.name
                ? ((U = b.intl.formatToPlainString(b.t["5u47va"], { username: e })),
                  (i = D.name),
                  null != D.icon &&
                      (n = (0, r.jsx)(o.MC, {
                          channel: D,
                          size: l.EFr.SIZE_32,
                      })))
                : ((U = b.intl.string(b.t.OsdY8B)), (i = e));
        } else if (null != M) {
            let e = x.ZP.getFormattedName(M, !0);
            (i = b.intl.formatToPlainString(b.t["4aF92R"], { username: e })),
                (G = !0),
                (c =
                    null != C
                        ? null
                        : (0, r.jsx)(o.DK, {
                              className: I.directInviteSubTitle,
                              children: T
                                  ? b.intl.format(b.t["6r4JiR"], { username: e })
                                  : b.intl.format(b.t.Quj7HX, { username: e }),
                          }));
        }
        return (0, r.jsxs)(l.Kqy, {
            direction: "vertical",
            gap: L ? 16 : 8,
            className: I.container,
            justify: "center",
            align: "center",
            children: [
                (0, r.jsx)(y, {
                    application: k,
                    guild: w,
                    user: B ? M : null,
                    compact: G,
                }),
                null != C
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(o.DK, { children: b.intl.string(b.t.mDFGFj) }),
                              (0, r.jsx)(o.Dx, { children: C }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              null != U ? (0, r.jsx)(o.DK, { children: U }) : null,
                              (0, r.jsxs)(o.Dx, {
                                  className: I.title,
                                  children: [
                                      null != w
                                          ? (0, r.jsx)(d.Z, {
                                                guild: w,
                                                className: I.guildBadge,
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
                (0, r.jsxs)(l.Kqy, {
                    direction: "vertical",
                    gap: L ? 16 : 32,
                    children: [
                        (0, r.jsxs)(l.Kqy, {
                            direction: "vertical",
                            gap: 8,
                            children: [
                                null != k || G || (null == u || null == (t = u.guild) ? void 0 : t.id) === v.fQ
                                    ? null
                                    : (0, r.jsx)(o.EJ, {
                                          className: I.activityCount,
                                          online: u.approximate_presence_count,
                                          total: u.approximate_member_count,
                                          flat: O,
                                          renderText: L ? S : void 0,
                                      }),
                                L && (0, r.jsx)(a.Z, { friendMemberIds: Z }),
                            ],
                        }),
                        A || null == R ? (0, r.jsx)(o.jQ, { user: R }) : (0, r.jsx)(h.R, {}),
                    ],
                }),
            ],
        });
    };
