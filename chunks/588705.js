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
    N = t(601964),
    x = t(598077),
    g = t(594174),
    h = t(51144),
    v = t(981631),
    E = t(888592),
    I = t(245335),
    f = t(388032),
    j = t(557889);
let S = () =>
        (0, i.jsxs)(l.Fragment, {
            children: [
                (0, i.jsx)(s.qE, {
                    src: null,
                    size: r.EFr.DEPRECATED_SIZE_100,
                    className: j.avatar
                }),
                (0, i.jsx)(s.DK, { children: f.NW.string(f.t['3rE1Pz']) }),
                (0, i.jsx)(s.Dx, {
                    className: j.inviteResolvingGuildName,
                    children: f.NW.string(f.t.ZTNur6)
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
            { currentUser: b } = (0, a.cj)([g.default], () => ({ currentUser: g.default.getCurrentUser() }));
        if (null == c) return null;
        let R = null != c.guild ? new N.ZP(c.guild) : null,
            W = null != c.channel ? (0, p.jD)(c.channel) : null,
            Z = null != c.target_application ? new _.ZP(c.target_application) : null,
            z = S || null == c.inviter ? null : new x.Z(c.inviter),
            D = !((null != c.approximate_member_count && c.approximate_member_count > 100) || (null != R && R.hasFeature(v.oNc.COMMUNITY))) && null != z,
            M = null,
            k = !1;
        if (null != R)
            (M = null == z ? f.NW.string(f.t['3rE1Pz']) : f.NW.formatToPlainString(f.t['5u47vb'], { username: h.ZP.getFormattedName(z) })),
                c.target_type === I.Iq.STREAM && null != c.target_user && (M = f.NW.formatToPlainString(f.t.x2L32d, { username: h.ZP.getFormattedName(c.target_user) })),
                c.target_type === I.Iq.EMBEDDED_APPLICATION && null != c.target_application && (M = null != z ? f.NW.formatToPlainString(f.t.UW1Cam, { username: h.ZP.getFormattedName(z) }) : f.NW.string(f.t.ENSuNz)),
                D &&
                    null == Z &&
                    (t = (0, i.jsx)(s.Vj, {
                        className: j.icon,
                        guild: R,
                        size: s.Vj.Sizes.SMALL
                    })),
                (l = R.name),
                null != Z &&
                    ((l = Z.name),
                    (o = (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(s.DK, {
                                className: j.appIn,
                                children: f.NW.string(f.t['3gg9fH'])
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
        else if (null != W) {
            if (null == z) throw Error('no inviter in group DM invite');
            let e = h.ZP.getFormattedName(z);
            null != W.name && '' !== W.name
                ? ((M = f.NW.formatToPlainString(f.t['5u47vb'], { username: e })),
                  (l = W.name),
                  null != W.icon &&
                      (t = (0, i.jsx)(s.MC, {
                          channel: W,
                          size: r.EFr.SIZE_32
                      })))
                : ((M = f.NW.string(f.t.OsdY8P)), (l = e));
        } else if (null != z) {
            let e = h.ZP.getFormattedName(z, !0);
            (l = f.NW.formatToPlainString(f.t['4aF92d'], { username: e })),
                (k = !0),
                (o =
                    null != A
                        ? null
                        : (0, i.jsx)(s.DK, {
                              className: j.directInviteSubTitle,
                              children: P ? f.NW.format(f.t['6r4JiY'], { username: e }) : f.NW.format(f.t.Quj7HR, { username: e })
                          }));
        }
        return (0, i.jsxs)('div', {
            className: j.container,
            children: [
                (0, i.jsx)(C, {
                    application: Z,
                    guild: R,
                    user: D ? z : null,
                    compact: k
                }),
                null != A
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [(0, i.jsx)(s.DK, { children: f.NW.string(f.t.mDFGFh) }), (0, i.jsx)(s.Dx, { children: A })]
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(s.DK, { children: M }),
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
                null != Z || k || (null == c ? void 0 : null === (n = c.guild) || void 0 === n ? void 0 : n.id) === E.fQ
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
