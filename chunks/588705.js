n.d(t, {
    R: () => I,
    Z: () => O,
}),
    n(415506);
var r = n(951288),
    i = n(647438),
    s = n(442837),
    l = n(481060),
    a = n(388905),
    o = n(686546),
    c = n(925329),
    u = n(372769),
    d = n(420186),
    h = n(973616),
    g = n(131704),
    p = n(598077),
    m = n(594174),
    f = n(411198),
    _ = n(51144),
    x = n(981631),
    E = n(888592),
    v = n(245335),
    b = n(388032),
    j = n(620838);
let I = () =>
        (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(a.qE, {
                    src: null,
                    size: l.EFr.DEPRECATED_SIZE_100,
                    className: j.avatar,
                }),
                (0, r.jsx)(a.DK, { children: b.intl.string(b.t["3rE1P8"]) }),
                (0, r.jsx)(a.Dx, {
                    className: j.inviteResolvingGuildName,
                    children: b.intl.string(b.t.ZTNur7),
                }),
            ],
        }),
    y = (e) => {
        let { guild: t, user: n, application: i, compact: s } = e;
        return null != i
            ? (0, r.jsx)(c.Z, {
                  className: j.appIcon,
                  game: i,
                  size: j.appIconSize,
              })
            : null != n
              ? (0, r.jsx)(a.qE, {
                    src: null != n ? n.getAvatarURL(void 0, 80) : null,
                    size: l.EFr.SIZE_80,
                    className: s ? j.compactAvatar : j.avatar,
                })
              : null != t
                ? (0, r.jsx)(o.ZP, {
                      mask: o.ZP.Masks.SQUIRCLE,
                      width: 64,
                      height: 64,
                      className: j.guildIcon,
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
                flatActivityCount: S = !1,
                isRegister: N = !1,
                inUnclaimedFlow: C = !1,
            } = e,
            { currentUser: A } = (0, s.cj)([m.default], () => ({ currentUser: m.default.getCurrentUser() }));
        if (null == c) return null;
        let T = null != c.guild ? (f.lM(c.guild) ? c.guild : f.Qs(c.guild)) : null,
            Z = null != c.channel ? (0, g.jD)(c.channel) : null,
            P = null != c.target_application ? new h.ZP(c.target_application) : null,
            R = I || null == c.inviter ? null : new p.Z(c.inviter),
            w =
                !(
                    (null != c.approximate_member_count && c.approximate_member_count > 100) ||
                    (null != T && T.features.has(x.GuildFeatures.COMMUNITY))
                ) && null != R,
            L = null,
            D = !1;
        if (null != T)
            (L =
                null == R
                    ? b.intl.string(b.t["3rE1P8"])
                    : b.intl.formatToPlainString(b.t["5u47va"], { username: _.ZP.getFormattedName(R) })),
                c.target_type === v.Iq.STREAM &&
                    null != c.target_user &&
                    (L = b.intl.formatToPlainString(b.t.x2L32Q, { username: _.ZP.getFormattedName(c.target_user) })),
                c.target_type === v.Iq.EMBEDDED_APPLICATION &&
                    null != c.target_application &&
                    (L =
                        null != R
                            ? b.intl.formatToPlainString(b.t.UW1Cav, { username: _.ZP.getFormattedName(R) })
                            : b.intl.string(b.t.ENSuN3)),
                w &&
                    null == P &&
                    (n = (0, r.jsx)(a.Vj, {
                        className: j.icon,
                        guild: T,
                        size: a.Vj.Sizes.SMALL,
                    })),
                (i = T.name),
                null != P &&
                    ((i = P.name),
                    (o = (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(a.DK, {
                                className: j.appIn,
                                children: b.intl.string(b.t["3gg9fF"]),
                            }),
                            (0, r.jsxs)("div", {
                                className: j.guildContainer,
                                children: [
                                    (0, r.jsx)(a.Vj, {
                                        guild: T,
                                        size: a.Vj.Sizes.SMALL,
                                    }),
                                    (0, r.jsx)(l.Text, {
                                        tag: "span",
                                        variant: "text-lg/normal",
                                        color: "header-primary",
                                        className: j.appGuildName,
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
                ? ((L = b.intl.formatToPlainString(b.t["5u47va"], { username: e })),
                  (i = Z.name),
                  null != Z.icon &&
                      (n = (0, r.jsx)(a.MC, {
                          channel: Z,
                          size: l.EFr.SIZE_32,
                      })))
                : ((L = b.intl.string(b.t.OsdY8B)), (i = e));
        } else if (null != R) {
            let e = _.ZP.getFormattedName(R, !0);
            (i = b.intl.formatToPlainString(b.t["4aF92R"], { username: e })),
                (D = !0),
                (o =
                    null != O
                        ? null
                        : (0, r.jsx)(a.DK, {
                              className: j.directInviteSubTitle,
                              children: N
                                  ? b.intl.format(b.t["6r4JiR"], { username: e })
                                  : b.intl.format(b.t.Quj7HX, { username: e }),
                          }));
        }
        return (0, r.jsxs)("div", {
            className: j.container,
            children: [
                (0, r.jsx)(y, {
                    application: P,
                    guild: T,
                    user: w ? R : null,
                    compact: D,
                }),
                null != O
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(a.DK, { children: b.intl.string(b.t.mDFGFj) }),
                              (0, r.jsx)(a.Dx, { children: O }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(a.DK, { children: L }),
                              (0, r.jsxs)(a.Dx, {
                                  className: j.title,
                                  children: [
                                      null != T
                                          ? (0, r.jsx)(u.Z, {
                                                guild: T,
                                                className: j.guildBadge,
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
                          className: j.activityCount,
                          online: c.approximate_presence_count,
                          total: c.approximate_member_count,
                          flat: S,
                      }),
                C || null == A ? (0, r.jsx)(a.jQ, { user: A }) : (0, r.jsx)(d.R, {}),
            ],
        });
    };
