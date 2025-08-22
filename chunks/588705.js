n.d(t, {
    R: () => N,
    Z: () => O,
}),
    n(415506);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    o = n(481060),
    s = n(388905),
    a = n(686546),
    c = n(925329),
    u = n(372769),
    d = n(44609),
    h = n(47343),
    f = n(973616),
    p = n(131704),
    g = n(598077),
    m = n(594174),
    _ = n(411198),
    x = n(51144),
    v = n(981631),
    E = n(888592),
    b = n(245335),
    j = n(388032),
    I = n(620838);
let N = () =>
        (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(s.qE, {
                    src: null,
                    size: o.EFr.DEPRECATED_SIZE_100,
                    className: I.avatar,
                }),
                (0, r.jsx)(s.DK, { children: j.intl.string(j.t["3rE1Pz"]) }),
                (0, r.jsx)(s.Dx, {
                    className: I.inviteResolvingGuildName,
                    children: j.intl.string(j.t.ZTNur6),
                }),
            ],
        }),
    y = (e) => {
        let { guild: t, user: n, application: i, compact: l } = e;
        return null != i
            ? (0, r.jsx)(c.Z, {
                  className: I.appIcon,
                  game: i,
                  size: I.appIconSize,
              })
            : null != n
              ? (0, r.jsx)(s.qE, {
                    src: null != n ? n.getAvatarURL(void 0, 80) : null,
                    size: o.EFr.SIZE_80,
                    className: l ? I.compactAvatar : I.avatar,
                })
              : null != t
                ? (0, r.jsx)(a.ZP, {
                      mask: a.ZP.Masks.SQUIRCLE,
                      width: 64,
                      height: 64,
                      className: I.guildIcon,
                      children: (0, r.jsx)(s.Vj, {
                          guild: t,
                          size: s.Vj.Sizes.LARGER,
                          animate: !0,
                      }),
                  })
                : null;
    },
    O = (e) => {
        var t;
        let n,
            i,
            a,
            {
                invite: c,
                disableUser: N = !1,
                error: O,
                flatActivityCount: S = !1,
                isRegister: C = !1,
                inUnclaimedFlow: Z = !1,
            } = e,
            { currentUser: A } = (0, l.cj)([m.default], () => ({ currentUser: m.default.getCurrentUser() })),
            T = (0, d.WR)({ location: "invite" }) && null != A;
        if (null == c) return null;
        let P = null != c.guild ? (_.lM(c.guild) ? c.guild : _.Qs(c.guild)) : null,
            R = null != c.channel ? (0, p.jD)(c.channel) : null,
            w = null != c.target_application ? new f.ZP(c.target_application) : null,
            L = N || null == c.inviter ? null : new g.Z(c.inviter),
            D =
                !(
                    (null != c.approximate_member_count && c.approximate_member_count > 100) ||
                    (null != P && P.features.has(v.oNc.COMMUNITY))
                ) && null != L,
            k = null,
            M = !1;
        if (null != P)
            (k =
                null == L
                    ? j.intl.string(j.t["3rE1Pz"])
                    : j.intl.formatToPlainString(j.t["5u47vb"], { username: x.ZP.getFormattedName(L) })),
                c.target_type === b.Iq.STREAM &&
                    null != c.target_user &&
                    (k = j.intl.formatToPlainString(j.t.x2L32d, { username: x.ZP.getFormattedName(c.target_user) })),
                c.target_type === b.Iq.EMBEDDED_APPLICATION &&
                    null != c.target_application &&
                    (k =
                        null != L
                            ? j.intl.formatToPlainString(j.t.UW1Cam, { username: x.ZP.getFormattedName(L) })
                            : j.intl.string(j.t.ENSuNz)),
                D &&
                    null == w &&
                    (n = (0, r.jsx)(s.Vj, {
                        className: I.icon,
                        guild: P,
                        size: s.Vj.Sizes.SMALL,
                    })),
                (i = P.name),
                null != w &&
                    ((i = w.name),
                    (a = (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(s.DK, {
                                className: I.appIn,
                                children: j.intl.string(j.t["3gg9fH"]),
                            }),
                            (0, r.jsxs)("div", {
                                className: I.guildContainer,
                                children: [
                                    (0, r.jsx)(s.Vj, {
                                        guild: P,
                                        size: s.Vj.Sizes.SMALL,
                                    }),
                                    (0, r.jsx)(o.Text, {
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
                ? ((k = j.intl.formatToPlainString(j.t["5u47vb"], { username: e })),
                  (i = R.name),
                  null != R.icon &&
                      (n = (0, r.jsx)(s.MC, {
                          channel: R,
                          size: o.EFr.SIZE_32,
                      })))
                : ((k = j.intl.string(j.t.OsdY8P)), (i = e));
        } else if (null != L) {
            let e = x.ZP.getFormattedName(L, !0);
            (i = j.intl.formatToPlainString(j.t["4aF92d"], { username: e })),
                (M = !0),
                (a =
                    null != O
                        ? null
                        : (0, r.jsx)(s.DK, {
                              className: I.directInviteSubTitle,
                              children: C
                                  ? j.intl.format(j.t["6r4JiY"], { username: e })
                                  : j.intl.format(j.t.Quj7HR, { username: e }),
                          }));
        }
        return (0, r.jsxs)("div", {
            className: I.container,
            children: [
                (0, r.jsx)(y, {
                    application: w,
                    guild: P,
                    user: D ? L : null,
                    compact: M,
                }),
                null != O
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(s.DK, { children: j.intl.string(j.t.mDFGFh) }),
                              (0, r.jsx)(s.Dx, { children: O }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(s.DK, { children: k }),
                              (0, r.jsxs)(s.Dx, {
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
                null != w || M || (null == c || null == (t = c.guild) ? void 0 : t.id) === E.fQ
                    ? null
                    : (0, r.jsx)(s.EJ, {
                          className: I.activityCount,
                          online: c.approximate_presence_count,
                          total: c.approximate_member_count,
                          flat: S,
                      }),
                !Z && T ? (0, r.jsx)(h.R, {}) : (0, r.jsx)(s.jQ, { user: A }),
            ],
        });
    };
