n.d(t, {
    R: () => O,
    Z: () => N
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
    g = n(131704),
    f = n(601964),
    m = n(598077),
    _ = n(594174),
    x = n(51144),
    E = n(981631),
    b = n(888592),
    v = n(245335),
    j = n(388032),
    I = n(782770);
let O = () =>
        (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(o.qE, {
                    src: null,
                    size: s.EFr.DEPRECATED_SIZE_100,
                    className: I.avatar
                }),
                (0, r.jsx)(o.DK, { children: j.intl.string(j.t['3rE1Pz']) }),
                (0, r.jsx)(o.Dx, {
                    className: I.inviteResolvingGuildName,
                    children: j.intl.string(j.t.ZTNur6)
                })
            ]
        }),
    S = (e) => {
        let { guild: t, user: n, application: i, compact: l } = e;
        return null != i
            ? (0, r.jsx)(c.Z, {
                  className: I.appIcon,
                  game: i,
                  size: I.appIconSize
              })
            : null != n
              ? (0, r.jsx)(o.qE, {
                    src: null != n ? n.getAvatarURL(void 0, 80) : null,
                    size: s.EFr.SIZE_80,
                    className: l ? I.compactAvatar : I.avatar
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
                          animate: !0
                      })
                  })
                : null;
    },
    N = (e) => {
        var t;
        let n,
            i,
            a,
            { invite: c, disableUser: O = !1, error: N, flatActivityCount: y = !1, isRegister: C = !1 } = e,
            P = (0, d.WR)({ location: 'invite' }),
            { currentUser: A } = (0, l.cj)([_.default], () => ({ currentUser: _.default.getCurrentUser() }));
        if (null == c) return null;
        let Z = null != c.guild ? new f.ZP(c.guild) : null,
            T = null != c.channel ? (0, g.jD)(c.channel) : null,
            R = null != c.target_application ? new p.ZP(c.target_application) : null,
            w = O || null == c.inviter ? null : new m.Z(c.inviter),
            L = !((null != c.approximate_member_count && c.approximate_member_count > 100) || (null != Z && Z.hasFeature(E.oNc.COMMUNITY))) && null != w,
            D = null,
            k = !1;
        if (null != Z)
            (D = null == w ? j.intl.string(j.t['3rE1Pz']) : j.intl.formatToPlainString(j.t['5u47vb'], { username: x.ZP.getFormattedName(w) })),
                c.target_type === v.Iq.STREAM && null != c.target_user && (D = j.intl.formatToPlainString(j.t.x2L32d, { username: x.ZP.getFormattedName(c.target_user) })),
                c.target_type === v.Iq.EMBEDDED_APPLICATION && null != c.target_application && (D = null != w ? j.intl.formatToPlainString(j.t.UW1Cam, { username: x.ZP.getFormattedName(w) }) : j.intl.string(j.t.ENSuNz)),
                L &&
                    null == R &&
                    (n = (0, r.jsx)(o.Vj, {
                        className: I.icon,
                        guild: Z,
                        size: o.Vj.Sizes.SMALL
                    })),
                (i = Z.name),
                null != R &&
                    ((i = R.name),
                    (a = (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(o.DK, {
                                className: I.appIn,
                                children: j.intl.string(j.t['3gg9fH'])
                            }),
                            (0, r.jsxs)('div', {
                                className: I.guildContainer,
                                children: [
                                    (0, r.jsx)(o.Vj, {
                                        guild: Z,
                                        size: o.Vj.Sizes.SMALL
                                    }),
                                    (0, r.jsx)(s.Text, {
                                        tag: 'span',
                                        variant: 'text-lg/normal',
                                        color: 'header-primary',
                                        className: I.appGuildName,
                                        children: Z.name
                                    })
                                ]
                            })
                        ]
                    })));
        else if (null != T) {
            if (null == w) throw Error('no inviter in group DM invite');
            let e = x.ZP.getFormattedName(w);
            null != T.name && '' !== T.name
                ? ((D = j.intl.formatToPlainString(j.t['5u47vb'], { username: e })),
                  (i = T.name),
                  null != T.icon &&
                      (n = (0, r.jsx)(o.MC, {
                          channel: T,
                          size: s.EFr.SIZE_32
                      })))
                : ((D = j.intl.string(j.t.OsdY8P)), (i = e));
        } else if (null != w) {
            let e = x.ZP.getFormattedName(w, !0);
            (i = j.intl.formatToPlainString(j.t['4aF92d'], { username: e })),
                (k = !0),
                (a =
                    null != N
                        ? null
                        : (0, r.jsx)(o.DK, {
                              className: I.directInviteSubTitle,
                              children: C ? j.intl.format(j.t['6r4JiY'], { username: e }) : j.intl.format(j.t.Quj7HR, { username: e })
                          }));
        }
        return (0, r.jsxs)('div', {
            className: I.container,
            children: [
                (0, r.jsx)(S, {
                    application: R,
                    guild: Z,
                    user: L ? w : null,
                    compact: k
                }),
                null != N
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsx)(o.DK, { children: j.intl.string(j.t.mDFGFh) }), (0, r.jsx)(o.Dx, { children: N })]
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(o.DK, { children: D }),
                              (0, r.jsxs)(o.Dx, {
                                  className: I.title,
                                  children: [
                                      null != Z
                                          ? (0, r.jsx)(u.Z, {
                                                guild: Z,
                                                className: I.guildBadge,
                                                tooltipPosition: 'left'
                                            })
                                          : null,
                                      n,
                                      i
                                  ]
                              })
                          ]
                      }),
                a,
                null != R || k || (null == c || null == (t = c.guild) ? void 0 : t.id) === b.fQ
                    ? null
                    : (0, r.jsx)(o.EJ, {
                          className: I.activityCount,
                          online: c.approximate_presence_count,
                          total: c.approximate_member_count,
                          flat: y
                      }),
                P ? (0, r.jsx)(h.R, {}) : (0, r.jsx)(o.jQ, { user: A })
            ]
        });
    };
