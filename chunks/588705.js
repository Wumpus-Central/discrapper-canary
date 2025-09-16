n.d(t, {
    R: () => I,
    Z: () => O,
}),
    n(415506);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    s = n(481060),
    a = n(388905),
    o = n(686546),
    c = n(925329),
    u = n(372769),
    d = n(47343),
    h = n(973616),
    p = n(131704),
    g = n(598077),
    m = n(594174),
    f = n(411198),
    _ = n(51144),
    x = n(981631),
    E = n(888592),
    v = n(245335),
    j = n(388032),
    b = n(620838);
let I = () =>
        (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(a.qE, {
                    src: null,
                    size: s.EFr.DEPRECATED_SIZE_100,
                    className: b.avatar,
                }),
                (0, r.jsx)(a.DK, { children: j.intl.string(j.t["3rE1Pz"]) }),
                (0, r.jsx)(a.Dx, {
                    className: b.inviteResolvingGuildName,
                    children: j.intl.string(j.t.ZTNur6),
                }),
            ],
        }),
    N = (e) => {
        let { guild: t, user: n, application: i, compact: l } = e;
        return null != i
            ? (0, r.jsx)(c.Z, {
                  className: b.appIcon,
                  game: i,
                  size: b.appIconSize,
              })
            : null != n
              ? (0, r.jsx)(a.qE, {
                    src: null != n ? n.getAvatarURL(void 0, 80) : null,
                    size: s.EFr.SIZE_80,
                    className: l ? b.compactAvatar : b.avatar,
                })
              : null != t
                ? (0, r.jsx)(o.ZP, {
                      mask: o.ZP.Masks.SQUIRCLE,
                      width: 64,
                      height: 64,
                      className: b.guildIcon,
                      children: (0, r.jsx)(a.Vj, {
                          guild: t,
                          size: a.Vj.Sizes.LARGER,
                          animate: !0,
                      }),
                  })
                : null;
    },
    O = (e) => {
        var t;
        let n,
            i,
            o,
            {
                invite: c,
                disableUser: I = !1,
                error: O,
                flatActivityCount: y = !1,
                isRegister: S = !1,
                inUnclaimedFlow: C = !1,
            } = e,
            { currentUser: A } = (0, l.cj)([m.default], () => ({ currentUser: m.default.getCurrentUser() }));
        if (null == c) return null;
        let T = null != c.guild ? (f.lM(c.guild) ? c.guild : f.Qs(c.guild)) : null,
            Z = null != c.channel ? (0, p.jD)(c.channel) : null,
            P = null != c.target_application ? new h.ZP(c.target_application) : null,
            R = I || null == c.inviter ? null : new g.Z(c.inviter),
            w =
                !(
                    (null != c.approximate_member_count && c.approximate_member_count > 100) ||
                    (null != T && T.features.has(x.oNc.COMMUNITY))
                ) && null != R,
            L = null,
            D = !1;
        if (null != T)
            (L =
                null == R
                    ? j.intl.string(j.t["3rE1Pz"])
                    : j.intl.formatToPlainString(j.t["5u47vb"], { username: _.ZP.getFormattedName(R) })),
                c.target_type === v.Iq.STREAM &&
                    null != c.target_user &&
                    (L = j.intl.formatToPlainString(j.t.x2L32d, { username: _.ZP.getFormattedName(c.target_user) })),
                c.target_type === v.Iq.EMBEDDED_APPLICATION &&
                    null != c.target_application &&
                    (L =
                        null != R
                            ? j.intl.formatToPlainString(j.t.UW1Cam, { username: _.ZP.getFormattedName(R) })
                            : j.intl.string(j.t.ENSuNz)),
                w &&
                    null == P &&
                    (n = (0, r.jsx)(a.Vj, {
                        className: b.icon,
                        guild: T,
                        size: a.Vj.Sizes.SMALL,
                    })),
                (i = T.name),
                null != P &&
                    ((i = P.name),
                    (o = (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(a.DK, {
                                className: b.appIn,
                                children: j.intl.string(j.t["3gg9fH"]),
                            }),
                            (0, r.jsxs)("div", {
                                className: b.guildContainer,
                                children: [
                                    (0, r.jsx)(a.Vj, {
                                        guild: T,
                                        size: a.Vj.Sizes.SMALL,
                                    }),
                                    (0, r.jsx)(s.Text, {
                                        tag: "span",
                                        variant: "text-lg/normal",
                                        color: "header-primary",
                                        className: b.appGuildName,
                                        children: T.name,
                                    }),
                                ],
                            }),
                        ],
                    })));
        else if (null != Z) {
            if (null == R) throw Error("no inviter in group DM invite");
            let e = _.ZP.getFormattedName(R);
            null != Z.name && "" !== Z.name
                ? ((L = j.intl.formatToPlainString(j.t["5u47vb"], { username: e })),
                  (i = Z.name),
                  null != Z.icon &&
                      (n = (0, r.jsx)(a.MC, {
                          channel: Z,
                          size: s.EFr.SIZE_32,
                      })))
                : ((L = j.intl.string(j.t.OsdY8P)), (i = e));
        } else if (null != R) {
            let e = _.ZP.getFormattedName(R, !0);
            (i = j.intl.formatToPlainString(j.t["4aF92d"], { username: e })),
                (D = !0),
                (o =
                    null != O
                        ? null
                        : (0, r.jsx)(a.DK, {
                              className: b.directInviteSubTitle,
                              children: S
                                  ? j.intl.format(j.t["6r4JiY"], { username: e })
                                  : j.intl.format(j.t.Quj7HR, { username: e }),
                          }));
        }
        return (0, r.jsxs)("div", {
            className: b.container,
            children: [
                (0, r.jsx)(N, {
                    application: P,
                    guild: T,
                    user: w ? R : null,
                    compact: D,
                }),
                null != O
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(a.DK, { children: j.intl.string(j.t.mDFGFh) }),
                              (0, r.jsx)(a.Dx, { children: O }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(a.DK, { children: L }),
                              (0, r.jsxs)(a.Dx, {
                                  className: b.title,
                                  children: [
                                      null != T
                                          ? (0, r.jsx)(u.Z, {
                                                guild: T,
                                                className: b.guildBadge,
                                                tooltipPosition: "left",
                                            })
                                          : null,
                                      n,
                                      i,
                                  ],
                              }),
                          ],
                      }),
                o,
                null != P || D || (null == c || null == (t = c.guild) ? void 0 : t.id) === E.fQ
                    ? null
                    : (0, r.jsx)(a.EJ, {
                          className: b.activityCount,
                          online: c.approximate_presence_count,
                          total: c.approximate_member_count,
                          flat: y,
                      }),
                C || null == A ? (0, r.jsx)(a.jQ, { user: A }) : (0, r.jsx)(d.R, {}),
            ],
        });
    };
