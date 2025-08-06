n.d(t, {
    R: () => O,
    Z: () => N,
}),
    n(415506);
var r = n(255367),
    i = n(73800),
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
    f = n(598077),
    g = n(594174),
    _ = n(411198),
    x = n(51144),
    b = n(981631),
    E = n(888592),
    v = n(245335),
    j = n(388032),
    I = n(782770);
let O = () =>
        (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(o.qE, {
                    src: null,
                    size: s.EFr.DEPRECATED_SIZE_100,
                    className: I.avatar,
                }),
                (0, r.jsx)(o.DK, { children: j.intl.string(j.t["3rE1Pz"]) }),
                (0, r.jsx)(o.Dx, {
                    className: I.inviteResolvingGuildName,
                    children: j.intl.string(j.t.ZTNur6),
                }),
            ],
        }),
    S = (e) => {
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
    N = (e) => {
        var t;
        let n,
            i,
            a,
            {
                invite: c,
                disableUser: O = !1,
                error: N,
                flatActivityCount: C = !1,
                isRegister: y = !1,
                inUnclaimedFlow: A = !1,
            } = e,
            { currentUser: T } = (0, l.cj)([g.default], () => ({ currentUser: g.default.getCurrentUser() })),
            P = (0, d.WR)({ location: "invite" }) && null != T;
        if (null == c) return null;
        let Z = null != c.guild ? (_.lM(c.guild) ? c.guild : _.Qs(c.guild)) : null,
            R = null != c.channel ? (0, m.jD)(c.channel) : null,
            w = null != c.target_application ? new p.ZP(c.target_application) : null,
            L = O || null == c.inviter ? null : new f.Z(c.inviter),
            D =
                !(
                    (null != c.approximate_member_count && c.approximate_member_count > 100) ||
                    (null != Z && Z.features.has(b.oNc.COMMUNITY))
                ) && null != L,
            k = null,
            B = !1;
        if (null != Z)
            (k =
                null == L
                    ? j.intl.string(j.t["3rE1Pz"])
                    : j.intl.formatToPlainString(j.t["5u47vb"], { username: x.ZP.getFormattedName(L) })),
                c.target_type === v.Iq.STREAM &&
                    null != c.target_user &&
                    (k = j.intl.formatToPlainString(j.t.x2L32d, { username: x.ZP.getFormattedName(c.target_user) })),
                c.target_type === v.Iq.EMBEDDED_APPLICATION &&
                    null != c.target_application &&
                    (k =
                        null != L
                            ? j.intl.formatToPlainString(j.t.UW1Cam, { username: x.ZP.getFormattedName(L) })
                            : j.intl.string(j.t.ENSuNz)),
                D &&
                    null == w &&
                    (n = (0, r.jsx)(o.Vj, {
                        className: I.icon,
                        guild: Z,
                        size: o.Vj.Sizes.SMALL,
                    })),
                (i = Z.name),
                null != w &&
                    ((i = w.name),
                    (a = (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(o.DK, {
                                className: I.appIn,
                                children: j.intl.string(j.t["3gg9fH"]),
                            }),
                            (0, r.jsxs)("div", {
                                className: I.guildContainer,
                                children: [
                                    (0, r.jsx)(o.Vj, {
                                        guild: Z,
                                        size: o.Vj.Sizes.SMALL,
                                    }),
                                    (0, r.jsx)(s.Text, {
                                        tag: "span",
                                        variant: "text-lg/normal",
                                        color: "header-primary",
                                        className: I.appGuildName,
                                        children: Z.name,
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
                      (n = (0, r.jsx)(o.MC, {
                          channel: R,
                          size: s.EFr.SIZE_32,
                      })))
                : ((k = j.intl.string(j.t.OsdY8P)), (i = e));
        } else if (null != L) {
            let e = x.ZP.getFormattedName(L, !0);
            (i = j.intl.formatToPlainString(j.t["4aF92d"], { username: e })),
                (B = !0),
                (a =
                    null != N
                        ? null
                        : (0, r.jsx)(o.DK, {
                              className: I.directInviteSubTitle,
                              children: y
                                  ? j.intl.format(j.t["6r4JiY"], { username: e })
                                  : j.intl.format(j.t.Quj7HR, { username: e }),
                          }));
        }
        return (0, r.jsxs)("div", {
            className: I.container,
            children: [
                (0, r.jsx)(S, {
                    application: w,
                    guild: Z,
                    user: D ? L : null,
                    compact: B,
                }),
                null != N
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(o.DK, { children: j.intl.string(j.t.mDFGFh) }),
                              (0, r.jsx)(o.Dx, { children: N }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(o.DK, { children: k }),
                              (0, r.jsxs)(o.Dx, {
                                  className: I.title,
                                  children: [
                                      null != Z
                                          ? (0, r.jsx)(u.Z, {
                                                guild: Z,
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
                null != w || B || (null == c || null == (t = c.guild) ? void 0 : t.id) === E.fQ
                    ? null
                    : (0, r.jsx)(o.EJ, {
                          className: I.activityCount,
                          online: c.approximate_presence_count,
                          total: c.approximate_member_count,
                          flat: C,
                      }),
                !A && P ? (0, r.jsx)(h.R, {}) : (0, r.jsx)(o.jQ, { user: T }),
            ],
        });
    };
