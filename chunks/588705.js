n.d(t, {
    R: () => O,
    Z: () => y,
}),
    n(415506);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    s = n(481060),
    o = n(388905),
    a = n(686546),
    c = n(925329),
    u = n(372769),
    d = n(44609),
    h = n(47343),
    p = n(973616),
    m = n(131704),
    g = n(598077),
    f = n(594174),
    _ = n(411198),
    x = n(51144),
    E = n(981631),
    v = n(888592),
    j = n(245335),
    b = n(388032),
    I = n(620838);
let O = () =>
        (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(o.qE, {
                    src: null,
                    size: s.EFr.DEPRECATED_SIZE_100,
                    className: I.avatar,
                }),
                (0, r.jsx)(o.DK, { children: b.intl.string(b.t["3rE1Pz"]) }),
                (0, r.jsx)(o.Dx, {
                    className: I.inviteResolvingGuildName,
                    children: b.intl.string(b.t.ZTNur6),
                }),
            ],
        }),
    N = (e) => {
        let { guild: t, user: n, application: i, compact: l } = e;
        return null != i
            ? (0, r.jsx)(c.Z, {
                  className: I.appIcon,
                  game: i,
                  size: I.appIconSize,
              })
            : null != n
              ? (0, r.jsx)(o.qE, {
                    src: null != n ? n.getAvatarURL(void 0, 80) : null,
                    size: s.EFr.SIZE_80,
                    className: l ? I.compactAvatar : I.avatar,
                })
              : null != t
                ? (0, r.jsx)(a.ZP, {
                      mask: a.ZP.Masks.SQUIRCLE,
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
    y = (e) => {
        var t;
        let n,
            i,
            a,
            {
                invite: c,
                disableUser: O = !1,
                error: y,
                flatActivityCount: S = !1,
                isRegister: C = !1,
                inUnclaimedFlow: Z = !1,
            } = e,
            { currentUser: A } = (0, l.cj)([f.default], () => ({ currentUser: f.default.getCurrentUser() })),
            T = (0, d.WR)({ location: "invite" }) && null != A;
        if (null == c) return null;
        let P = null != c.guild ? (_.lM(c.guild) ? c.guild : _.Qs(c.guild)) : null,
            R = null != c.channel ? (0, m.jD)(c.channel) : null,
            w = null != c.target_application ? new p.ZP(c.target_application) : null,
            L = O || null == c.inviter ? null : new g.Z(c.inviter),
            D =
                !(
                    (null != c.approximate_member_count && c.approximate_member_count > 100) ||
                    (null != P && P.features.has(E.oNc.COMMUNITY))
                ) && null != L,
            k = null,
            M = !1;
        if (null != P)
            (k =
                null == L
                    ? b.intl.string(b.t["3rE1Pz"])
                    : b.intl.formatToPlainString(b.t["5u47vb"], { username: x.ZP.getFormattedName(L) })),
                c.target_type === j.Iq.STREAM &&
                    null != c.target_user &&
                    (k = b.intl.formatToPlainString(b.t.x2L32d, { username: x.ZP.getFormattedName(c.target_user) })),
                c.target_type === j.Iq.EMBEDDED_APPLICATION &&
                    null != c.target_application &&
                    (k =
                        null != L
                            ? b.intl.formatToPlainString(b.t.UW1Cam, { username: x.ZP.getFormattedName(L) })
                            : b.intl.string(b.t.ENSuNz)),
                D &&
                    null == w &&
                    (n = (0, r.jsx)(o.Vj, {
                        className: I.icon,
                        guild: P,
                        size: o.Vj.Sizes.SMALL,
                    })),
                (i = P.name),
                null != w &&
                    ((i = w.name),
                    (a = (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(o.DK, {
                                className: I.appIn,
                                children: b.intl.string(b.t["3gg9fH"]),
                            }),
                            (0, r.jsxs)("div", {
                                className: I.guildContainer,
                                children: [
                                    (0, r.jsx)(o.Vj, {
                                        guild: P,
                                        size: o.Vj.Sizes.SMALL,
                                    }),
                                    (0, r.jsx)(s.Text, {
                                        tag: "span",
                                        variant: "text-lg/normal",
                                        color: "header-primary",
                                        className: I.appGuildName,
                                        children: P.name,
                                    }),
                                ],
                            }),
                        ],
                    })));
        else if (null != R) {
            if (null == L) throw Error("no inviter in group DM invite");
            let e = x.ZP.getFormattedName(L);
            null != R.name && "" !== R.name
                ? ((k = b.intl.formatToPlainString(b.t["5u47vb"], { username: e })),
                  (i = R.name),
                  null != R.icon &&
                      (n = (0, r.jsx)(o.MC, {
                          channel: R,
                          size: s.EFr.SIZE_32,
                      })))
                : ((k = b.intl.string(b.t.OsdY8P)), (i = e));
        } else if (null != L) {
            let e = x.ZP.getFormattedName(L, !0);
            (i = b.intl.formatToPlainString(b.t["4aF92d"], { username: e })),
                (M = !0),
                (a =
                    null != y
                        ? null
                        : (0, r.jsx)(o.DK, {
                              className: I.directInviteSubTitle,
                              children: C
                                  ? b.intl.format(b.t["6r4JiY"], { username: e })
                                  : b.intl.format(b.t.Quj7HR, { username: e }),
                          }));
        }
        return (0, r.jsxs)("div", {
            className: I.container,
            children: [
                (0, r.jsx)(N, {
                    application: w,
                    guild: P,
                    user: D ? L : null,
                    compact: M,
                }),
                null != y
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(o.DK, { children: b.intl.string(b.t.mDFGFh) }),
                              (0, r.jsx)(o.Dx, { children: y }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(o.DK, { children: k }),
                              (0, r.jsxs)(o.Dx, {
                                  className: I.title,
                                  children: [
                                      null != P
                                          ? (0, r.jsx)(u.Z, {
                                                guild: P,
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
                a,
                null != w || M || (null == c || null == (t = c.guild) ? void 0 : t.id) === v.fQ
                    ? null
                    : (0, r.jsx)(o.EJ, {
                          className: I.activityCount,
                          online: c.approximate_presence_count,
                          total: c.approximate_member_count,
                          flat: S,
                      }),
                !Z && T ? (0, r.jsx)(h.R, {}) : (0, r.jsx)(o.jQ, { user: A }),
            ],
        });
    };
