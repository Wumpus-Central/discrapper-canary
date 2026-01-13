n.d(t, {
    R: () => T,
    Z: () => P,
}),
    n(997841),
    n(415506);
var r = n(54381),
    i = n(473749),
    s = n(120356),
    a = n.n(s),
    l = n(533800),
    o = n(95015),
    c = n(442837),
    u = n(481060),
    d = n(664926),
    h = n(388905),
    f = n(686546),
    g = n(925329),
    m = n(372769),
    p = n(420186),
    x = n(254887),
    _ = n(973616),
    E = n(131704),
    v = n(598077),
    b = n(594174),
    j = n(411198),
    I = n(51144),
    N = n(981631),
    y = n(888592),
    S = n(245335),
    C = n(388032),
    O = n(725194);
let T = () =>
        (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(h.qE, {
                    src: null,
                    size: u.EFr.DEPRECATED_SIZE_100,
                    className: O.avatar,
                }),
                (0, r.jsx)(h.DK, { children: C.intl.string(C.t["3rE1P8"]) }),
                (0, r.jsx)(h.Dx, {
                    className: O.inviteResolvingGuildName,
                    children: C.intl.string(C.t.ZTNur7),
                }),
            ],
        }),
    A = (e) => {
        let { guild: t, user: n, application: i, compact: s } = e;
        return null != i
            ? (0, r.jsx)(g.Z, {
                  className: O.appIcon,
                  game: i,
                  size: O.appIconSize,
              })
            : null != n
              ? (0, r.jsx)(h.qE, {
                    src: null != n ? n.getAvatarURL(void 0, 80) : null,
                    size: u.EFr.SIZE_80,
                    className: s ? void 0 : O.avatar,
                })
              : null != t
                ? (0, r.jsx)(f.ZP, {
                      mask: f.ZP.Masks.SQUIRCLE,
                      width: 64,
                      height: 64,
                      className: O.guildIcon,
                      children: (0, r.jsx)(h.Vj, {
                          guild: t,
                          size: h.Vj.Sizes.LARGER,
                          animate: !0,
                      }),
                  })
                : null;
    },
    Z = (e) =>
        (0, r.jsx)(u.Text, {
            tag: "span",
            className: e.className,
            variant: "text-sm/medium",
            color: "text-subtle",
            children: e.children,
        }),
    P = (e) => {
        var t, n;
        let i,
            s,
            f,
            {
                invite: g,
                disableUser: T = !1,
                error: P,
                flatActivityCount: R = !1,
                isRegister: L = !1,
                inUnclaimedFlow: D = !1,
                friendMemberIds: k = [],
                showInvitedByHeader: w = !0,
                className: M,
            } = e,
            { currentUser: B } = (0, c.cj)([b.default], () => ({ currentUser: b.default.getCurrentUser() }));
        if (null == g) return null;
        let U = null != k && k.length > 0,
            G = null != g.guild ? (j.lM(g.guild) ? g.guild : j.Qs(g.guild)) : null,
            F = null != g.channel ? (0, E.jD)(g.channel) : null,
            V = null != g.target_application ? new _.ZP(g.target_application) : null,
            W = T || null == g.inviter ? null : new v.Z(g.inviter),
            H =
                !(
                    (null != g.approximate_member_count && g.approximate_member_count > 100) ||
                    (null != G && G.features.has(N.GuildFeatures.COMMUNITY))
                ) && null != W,
            K = null,
            z = (0, o.yE)(null != (n = g.flags) ? n : 0, l.$.IS_GUEST_INVITE),
            q = !1;
        if (null != G)
            w &&
                ((K =
                    null == W
                        ? C.intl.string(C.t["3rE1P8"])
                        : C.intl.formatToPlainString(C.t["5u47va"], { username: I.ZP.getFormattedName(W) })),
                g.target_type === S.Iq.STREAM &&
                    null != g.target_user &&
                    (K = C.intl.formatToPlainString(C.t.x2L32Q, { username: I.ZP.getFormattedName(g.target_user) })),
                g.target_type === S.Iq.EMBEDDED_APPLICATION &&
                    null != g.target_application &&
                    (K =
                        null != W
                            ? C.intl.formatToPlainString(C.t.UW1Cav, { username: I.ZP.getFormattedName(W) })
                            : C.intl.string(C.t.ENSuN3))),
                H &&
                    null == V &&
                    (i = (0, r.jsx)(h.Vj, {
                        className: O.icon,
                        guild: G,
                        size: h.Vj.Sizes.SMALL,
                    })),
                (s = G.name),
                null != V &&
                    ((s = V.name),
                    (f = (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(h.DK, {
                                className: O.appIn,
                                children: C.intl.string(C.t["3gg9fF"]),
                            }),
                            (0, r.jsxs)("div", {
                                className: O.guildContainer,
                                children: [
                                    (0, r.jsx)(h.Vj, {
                                        guild: G,
                                        size: h.Vj.Sizes.SMALL,
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        tag: "span",
                                        variant: "text-lg/normal",
                                        color: "text-strong",
                                        className: O.appGuildName,
                                        children: G.name,
                                    }),
                                ],
                            }),
                        ],
                    })));
        else if (null != F) {
            if (null == W) throw Error("no inviter in group DM invite");
            let e = I.ZP.getFormattedName(W);
            null != F.name && "" !== F.name
                ? ((K = C.intl.formatToPlainString(C.t["5u47va"], { username: e })),
                  (s = F.name),
                  null != F.icon &&
                      (i = (0, r.jsx)(h.MC, {
                          channel: F,
                          size: u.EFr.SIZE_32,
                      })))
                : ((K = C.intl.string(C.t.OsdY8B)), (s = e));
        } else if (null != W) {
            let e = I.ZP.getFormattedName(W, !0);
            (s = C.intl.formatToPlainString(C.t["4aF92R"], { username: e })),
                (q = !0),
                (f =
                    null != P
                        ? null
                        : (0, r.jsx)(h.DK, {
                              className: O.directInviteSubTitle,
                              children: L
                                  ? C.intl.format(C.t["6r4JiR"], { username: e })
                                  : C.intl.format(C.t.Quj7HX, { username: e }),
                          }));
        }
        return (0, r.jsxs)(u.Kqy, {
            direction: "vertical",
            gap: 8,
            className: a()(O.container, M),
            justify: "center",
            align: "center",
            children: [
                (0, r.jsx)(A, {
                    application: V,
                    guild: G,
                    user: H ? W : null,
                    compact: q,
                }),
                null != P
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(h.DK, { children: C.intl.string(C.t.mDFGFj) }),
                              (0, r.jsx)(h.Dx, { children: P }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              null != K ? (0, r.jsx)(h.DK, { children: K }) : null,
                              (0, r.jsxs)(h.Dx, {
                                  className: O.title,
                                  children: [
                                      null != G
                                          ? (0, r.jsx)(m.Z, {
                                                guild: G,
                                                className: O.guildBadge,
                                                tooltipPosition: "left",
                                            })
                                          : null,
                                      i,
                                      s,
                                  ],
                              }),
                          ],
                      }),
                f,
                (0, r.jsxs)(u.Kqy, {
                    direction: "vertical",
                    gap: 24,
                    children: [
                        (0, r.jsxs)(u.Kqy, {
                            direction: "vertical",
                            gap: 4,
                            children: [
                                null != V || q || (null == g || null == (t = g.guild) ? void 0 : t.id) === y.fQ
                                    ? null
                                    : (0, r.jsx)(h.EJ, {
                                          online: g.approximate_presence_count,
                                          total: g.approximate_member_count,
                                          flat: R,
                                          renderText: U ? Z : void 0,
                                      }),
                                U && (0, r.jsx)(d.Z, { friendMemberIds: k }),
                            ],
                        }),
                        (0, r.jsx)(x.Z, {
                            guild: G,
                            roles: g.roles,
                            className: O.rolesList,
                        }),
                        D || z || null == B ? (0, r.jsx)(h.jQ, { user: B }) : (0, r.jsx)(p.R, {}),
                    ],
                }),
            ],
        });
    };
