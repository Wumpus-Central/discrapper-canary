t.d(n, {
    R: () => S,
    Z: () => A
}),
    t(411104);
var i = t(200651),
    l = t(192379),
    a = t(442837),
    r = t(481060),
    s = t(388905),
    o = t(686546),
    c = t(925329),
    u = t(372769),
    d = t(44609),
    m = t(47343),
    _ = t(973616),
    p = t(131704),
    x = t(601964),
    g = t(598077),
    N = t(594174),
    h = t(51144),
    v = t(981631),
    E = t(888592),
    I = t(245335),
    f = t(388032),
    j = t(159601);
let S = () =>
        (0, i.jsxs)(l.Fragment, {
            children: [
                (0, i.jsx)(s.qE, {
                    src: null,
                    size: r.EFr.DEPRECATED_SIZE_100,
                    className: j.avatar
                }),
                (0, i.jsx)(s.DK, { children: f.intl.string(f.t['3rE1Pz']) }),
                (0, i.jsx)(s.Dx, {
                    className: j.inviteResolvingGuildName,
                    children: f.intl.string(f.t.ZTNur6)
                })
            ]
        }),
    C = (e) => {
        let { guild: n, user: t, application: l, compact: a } = e;
        return null != l
            ? (0, i.jsx)(c.Z, {
                  className: j.appIcon,
                  game: l,
                  size: j.appIconSize
              })
            : null != t
              ? (0, i.jsx)(s.qE, {
                    src: null != t ? t.getAvatarURL(void 0, 80) : null,
                    size: r.EFr.SIZE_80,
                    className: a ? j.compactAvatar : j.avatar
                })
              : null != n
                ? (0, i.jsx)(o.ZP, {
                      mask: o.ZP.Masks.SQUIRCLE,
                      width: 64,
                      height: 64,
                      className: j.guildIcon,
                      children: (0, i.jsx)(s.Vj, {
                          guild: n,
                          size: s.Vj.Sizes.LARGER,
                          animate: !0
                      })
                  })
                : null;
    },
    A = (e) => {
        var n;
        let t,
            l,
            o,
            { invite: c, disableUser: S = !1, error: A, flatActivityCount: T = !1, isRegister: P = !1 } = e,
            L = (0, d.WR)({ location: 'invite' }),
            { currentUser: b } = (0, a.cj)([N.default], () => ({ currentUser: N.default.getCurrentUser() }));
        if (null == c) return null;
        let R = null != c.guild ? new x.ZP(c.guild) : null,
            Z = null != c.channel ? (0, p.jD)(c.channel) : null,
            z = null != c.target_application ? new _.ZP(c.target_application) : null,
            D = S || null == c.inviter ? null : new g.Z(c.inviter),
            M = !((null != c.approximate_member_count && c.approximate_member_count > 100) || (null != R && R.hasFeature(v.oNc.COMMUNITY))) && null != D,
            k = null,
            U = !1;
        if (null != R)
            (k = null == D ? f.intl.string(f.t['3rE1Pz']) : f.intl.formatToPlainString(f.t['5u47vb'], { username: h.ZP.getFormattedName(D) })),
                c.target_type === I.Iq.STREAM && null != c.target_user && (k = f.intl.formatToPlainString(f.t.x2L32d, { username: h.ZP.getFormattedName(c.target_user) })),
                c.target_type === I.Iq.EMBEDDED_APPLICATION && null != c.target_application && (k = null != D ? f.intl.formatToPlainString(f.t.UW1Cam, { username: h.ZP.getFormattedName(D) }) : f.intl.string(f.t.ENSuNz)),
                M &&
                    null == z &&
                    (t = (0, i.jsx)(s.Vj, {
                        className: j.icon,
                        guild: R,
                        size: s.Vj.Sizes.SMALL
                    })),
                (l = R.name),
                null != z &&
                    ((l = z.name),
                    (o = (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(s.DK, {
                                className: j.appIn,
                                children: f.intl.string(f.t['3gg9fH'])
                            }),
                            (0, i.jsxs)('div', {
                                className: j.guildContainer,
                                children: [
                                    (0, i.jsx)(s.Vj, {
                                        guild: R,
                                        size: s.Vj.Sizes.SMALL
                                    }),
                                    (0, i.jsx)(r.Text, {
                                        tag: 'span',
                                        variant: 'text-lg/normal',
                                        color: 'header-primary',
                                        className: j.appGuildName,
                                        children: R.name
                                    })
                                ]
                            })
                        ]
                    })));
        else if (null != Z) {
            if (null == D) throw Error('no inviter in group DM invite');
            let e = h.ZP.getFormattedName(D);
            null != Z.name && '' !== Z.name
                ? ((k = f.intl.formatToPlainString(f.t['5u47vb'], { username: e })),
                  (l = Z.name),
                  null != Z.icon &&
                      (t = (0, i.jsx)(s.MC, {
                          channel: Z,
                          size: r.EFr.SIZE_32
                      })))
                : ((k = f.intl.string(f.t.OsdY8P)), (l = e));
        } else if (null != D) {
            let e = h.ZP.getFormattedName(D, !0);
            (l = f.intl.formatToPlainString(f.t['4aF92d'], { username: e })),
                (U = !0),
                (o =
                    null != A
                        ? null
                        : (0, i.jsx)(s.DK, {
                              className: j.directInviteSubTitle,
                              children: P ? f.intl.format(f.t['6r4JiY'], { username: e }) : f.intl.format(f.t.Quj7HR, { username: e })
                          }));
        }
        return (0, i.jsxs)('div', {
            className: j.container,
            children: [
                (0, i.jsx)(C, {
                    application: z,
                    guild: R,
                    user: M ? D : null,
                    compact: U
                }),
                null != A
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [(0, i.jsx)(s.DK, { children: f.intl.string(f.t.mDFGFh) }), (0, i.jsx)(s.Dx, { children: A })]
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(s.DK, { children: k }),
                              (0, i.jsxs)(s.Dx, {
                                  className: j.title,
                                  children: [
                                      null != R
                                          ? (0, i.jsx)(u.Z, {
                                                guild: R,
                                                className: j.guildBadge,
                                                tooltipPosition: 'left'
                                            })
                                          : null,
                                      t,
                                      l
                                  ]
                              })
                          ]
                      }),
                o,
                null != z || U || (null == c ? void 0 : null === (n = c.guild) || void 0 === n ? void 0 : n.id) === E.fQ
                    ? null
                    : (0, i.jsx)(s.EJ, {
                          className: j.activityCount,
                          online: c.approximate_presence_count,
                          total: c.approximate_member_count,
                          flat: T
                      }),
                L ? (0, i.jsx)(m.R, {}) : (0, i.jsx)(s.jQ, { user: b })
            ]
        });
    };
