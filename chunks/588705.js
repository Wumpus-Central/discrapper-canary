n.d(t, {
    R: () => I,
    Z: () => S,
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
    m = n(598077),
    p = n(594174),
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
                    size: l.EFr.DEPRECATED_SIZE_100,
                    className: b.avatar,
                }),
                (0, r.jsx)(a.DK, { children: j.intl.string(j.t["3rE1P8"]) }),
                (0, r.jsx)(a.Dx, {
                    className: b.inviteResolvingGuildName,
                    children: j.intl.string(j.t.ZTNur7),
                }),
            ],
        }),
    y = (e) => {
        let { guild: t, user: n, application: i, compact: s } = e;
        return null != i
            ? (0, r.jsx)(c.Z, {
                  className: b.appIcon,
                  game: i,
                  size: b.appIconSize,
              })
            : null != n
              ? (0, r.jsx)(a.qE, {
                    src: null != n ? n.getAvatarURL(void 0, 80) : null,
                    size: l.EFr.SIZE_80,
                    className: s ? b.compactAvatar : b.avatar,
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
    S = (e) => {
        var t;
        let n,
            i,
            o,
            {
                invite: c,
                disableUser: I = !1,
                error: S,
                flatActivityCount: N = !1,
                isRegister: O = !1,
                inUnclaimedFlow: C = !1,
            } = e,
            { currentUser: T } = (0, s.cj)([p.default], () => ({ currentUser: p.default.getCurrentUser() }));
        if (null == c) return null;
        let A = null != c.guild ? (f.lM(c.guild) ? c.guild : f.Qs(c.guild)) : null,
            Z = null != c.channel ? (0, g.jD)(c.channel) : null,
            P = null != c.target_application ? new h.ZP(c.target_application) : null,
            R = I || null == c.inviter ? null : new m.Z(c.inviter),
            L =
                !(
                    (null != c.approximate_member_count && c.approximate_member_count > 100) ||
                    (null != A && A.features.has(x.GuildFeatures.COMMUNITY))
                ) && null != R,
            w = null,
            D = !1;
        if (null != A)
            (w =
                null == R
                    ? j.intl.string(j.t["3rE1P8"])
                    : j.intl.formatToPlainString(j.t["5u47va"], { username: _.ZP.getFormattedName(R) })),
                c.target_type === v.Iq.STREAM &&
                    null != c.target_user &&
                    (w = j.intl.formatToPlainString(j.t.x2L32Q, { username: _.ZP.getFormattedName(c.target_user) })),
                c.target_type === v.Iq.EMBEDDED_APPLICATION &&
                    null != c.target_application &&
                    (w =
                        null != R
                            ? j.intl.formatToPlainString(j.t.UW1Cav, { username: _.ZP.getFormattedName(R) })
                            : j.intl.string(j.t.ENSuN3)),
                L &&
                    null == P &&
                    (n = (0, r.jsx)(a.Vj, {
                        className: b.icon,
                        guild: A,
                        size: a.Vj.Sizes.SMALL,
                    })),
                (i = A.name),
                null != P &&
                    ((i = P.name),
                    (o = (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(a.DK, {
                                className: b.appIn,
                                children: j.intl.string(j.t["3gg9fF"]),
                            }),
                            (0, r.jsxs)("div", {
                                className: b.guildContainer,
                                children: [
                                    (0, r.jsx)(a.Vj, {
                                        guild: A,
                                        size: a.Vj.Sizes.SMALL,
                                    }),
                                    (0, r.jsx)(l.Text, {
                                        tag: "span",
                                        variant: "text-lg/normal",
                                        color: "header-primary",
                                        className: b.appGuildName,
                                        children: A.name,
                                    }),
                                ],
                            }),
                        ],
                    })));
        else if (null != Z) {
            if (null == R) throw Error("no inviter in group DM invite");
            let e = _.ZP.getFormattedName(R);
            null != Z.name && "" !== Z.name
                ? ((w = j.intl.formatToPlainString(j.t["5u47va"], { username: e })),
                  (i = Z.name),
                  null != Z.icon &&
                      (n = (0, r.jsx)(a.MC, {
                          channel: Z,
                          size: l.EFr.SIZE_32,
                      })))
                : ((w = j.intl.string(j.t.OsdY8B)), (i = e));
        } else if (null != R) {
            let e = _.ZP.getFormattedName(R, !0);
            (i = j.intl.formatToPlainString(j.t["4aF92R"], { username: e })),
                (D = !0),
                (o =
                    null != S
                        ? null
                        : (0, r.jsx)(a.DK, {
                              className: b.directInviteSubTitle,
                              children: O
                                  ? j.intl.format(j.t["6r4JiR"], { username: e })
                                  : j.intl.format(j.t.Quj7HX, { username: e }),
                          }));
        }
        return (0, r.jsxs)("div", {
            className: b.container,
            children: [
                (0, r.jsx)(y, {
                    application: P,
                    guild: A,
                    user: L ? R : null,
                    compact: D,
                }),
                null != S
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(a.DK, { children: j.intl.string(j.t.mDFGFj) }),
                              (0, r.jsx)(a.Dx, { children: S }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(a.DK, { children: w }),
                              (0, r.jsxs)(a.Dx, {
                                  className: b.title,
                                  children: [
                                      null != A
                                          ? (0, r.jsx)(u.Z, {
                                                guild: A,
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
                          flat: N,
                      }),
                C || null == T ? (0, r.jsx)(a.jQ, { user: T }) : (0, r.jsx)(d.R, {}),
            ],
        });
    };
