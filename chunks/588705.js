n.d(t, {
    R: () => N,
    Z: () => C,
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
    f = n(973616),
    g = n(131704),
    m = n(598077),
    p = n(594174),
    x = n(411198),
    _ = n(51144),
    E = n(981631),
    v = n(888592),
    b = n(245335),
    j = n(388032),
    I = n(725194);
let N = () =>
        (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(o.qE, {
                    src: null,
                    size: a.EFr.DEPRECATED_SIZE_100,
                    className: I.avatar,
                }),
                (0, r.jsx)(o.DK, { children: j.intl.string(j.t["3rE1P8"]) }),
                (0, r.jsx)(o.Dx, {
                    className: I.inviteResolvingGuildName,
                    children: j.intl.string(j.t.ZTNur7),
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
                    size: a.EFr.SIZE_80,
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
        (0, r.jsx)(a.Text, {
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
            { currentUser: R } = (0, s.cj)([p.default], () => ({ currentUser: p.default.getCurrentUser() }));
        if (null == u) return null;
        let L = null != Z && Z.length > 0,
            D = null != u.guild ? (x.lM(u.guild) ? u.guild : x.Qs(u.guild)) : null,
            k = null != u.channel ? (0, g.jD)(u.channel) : null,
            w = null != u.target_application ? new f.ZP(u.target_application) : null,
            M = N || null == u.inviter ? null : new m.Z(u.inviter),
            B =
                !(
                    (null != u.approximate_member_count && u.approximate_member_count > 100) ||
                    (null != D && D.features.has(E.GuildFeatures.COMMUNITY))
                ) && null != M,
            U = null,
            G = !1;
        if (null != D)
            P &&
                ((U =
                    null == M
                        ? j.intl.string(j.t["3rE1P8"])
                        : j.intl.formatToPlainString(j.t["5u47va"], { username: _.ZP.getFormattedName(M) })),
                u.target_type === b.Iq.STREAM &&
                    null != u.target_user &&
                    (U = j.intl.formatToPlainString(j.t.x2L32Q, { username: _.ZP.getFormattedName(u.target_user) })),
                u.target_type === b.Iq.EMBEDDED_APPLICATION &&
                    null != u.target_application &&
                    (U =
                        null != M
                            ? j.intl.formatToPlainString(j.t.UW1Cav, { username: _.ZP.getFormattedName(M) })
                            : j.intl.string(j.t.ENSuN3))),
                B &&
                    null == w &&
                    (n = (0, r.jsx)(o.Vj, {
                        className: I.icon,
                        guild: D,
                        size: o.Vj.Sizes.SMALL,
                    })),
                (i = D.name),
                null != w &&
                    ((i = w.name),
                    (c = (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(o.DK, {
                                className: I.appIn,
                                children: j.intl.string(j.t["3gg9fF"]),
                            }),
                            (0, r.jsxs)("div", {
                                className: I.guildContainer,
                                children: [
                                    (0, r.jsx)(o.Vj, {
                                        guild: D,
                                        size: o.Vj.Sizes.SMALL,
                                    }),
                                    (0, r.jsx)(a.Text, {
                                        tag: "span",
                                        variant: "text-lg/normal",
                                        color: "text-strong",
                                        className: I.appGuildName,
                                        children: D.name,
                                    }),
                                ],
                            }),
                        ],
                    })));
        else if (null != k) {
            if (null == M) throw Error("no inviter in group DM invite");
            let e = _.ZP.getFormattedName(M);
            null != k.name && "" !== k.name
                ? ((U = j.intl.formatToPlainString(j.t["5u47va"], { username: e })),
                  (i = k.name),
                  null != k.icon &&
                      (n = (0, r.jsx)(o.MC, {
                          channel: k,
                          size: a.EFr.SIZE_32,
                      })))
                : ((U = j.intl.string(j.t.OsdY8B)), (i = e));
        } else if (null != M) {
            let e = _.ZP.getFormattedName(M, !0);
            (i = j.intl.formatToPlainString(j.t["4aF92R"], { username: e })),
                (G = !0),
                (c =
                    null != C
                        ? null
                        : (0, r.jsx)(o.DK, {
                              className: I.directInviteSubTitle,
                              children: T
                                  ? j.intl.format(j.t["6r4JiR"], { username: e })
                                  : j.intl.format(j.t.Quj7HX, { username: e }),
                          }));
        }
        return (0, r.jsxs)(a.Kqy, {
            direction: "vertical",
            gap: L ? 16 : 8,
            className: I.container,
            justify: "center",
            align: "center",
            children: [
                (0, r.jsx)(y, {
                    application: w,
                    guild: D,
                    user: B ? M : null,
                    compact: G,
                }),
                null != C
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(o.DK, { children: j.intl.string(j.t.mDFGFj) }),
                              (0, r.jsx)(o.Dx, { children: C }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              null != U ? (0, r.jsx)(o.DK, { children: U }) : null,
                              (0, r.jsxs)(o.Dx, {
                                  className: I.title,
                                  children: [
                                      null != D
                                          ? (0, r.jsx)(d.Z, {
                                                guild: D,
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
                (0, r.jsxs)(a.Kqy, {
                    direction: "vertical",
                    gap: L ? 16 : 32,
                    children: [
                        (0, r.jsxs)(a.Kqy, {
                            direction: "vertical",
                            gap: 8,
                            children: [
                                null != w || G || (null == u || null == (t = u.guild) ? void 0 : t.id) === v.fQ
                                    ? null
                                    : (0, r.jsx)(o.EJ, {
                                          className: I.activityCount,
                                          online: u.approximate_presence_count,
                                          total: u.approximate_member_count,
                                          flat: O,
                                          renderText: L ? S : void 0,
                                      }),
                                L && (0, r.jsx)(l.Z, { friendMemberIds: Z }),
                            ],
                        }),
                        A || null == R ? (0, r.jsx)(o.jQ, { user: R }) : (0, r.jsx)(h.R, {}),
                    ],
                }),
            ],
        });
    };
