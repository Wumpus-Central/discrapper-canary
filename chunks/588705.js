n.d(t, {
    R: () => I,
    Z: () => S
}),
    n(415506);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    l = n(481060),
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
    N = n(51144),
    x = n(981631),
    b = n(888592),
    E = n(245335),
    v = n(388032),
    j = n(782770);
let I = () =>
        (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(o.qE, {
                    src: null,
                    size: l.EFr.DEPRECATED_SIZE_100,
                    className: j.avatar
                }),
                (0, r.jsx)(o.DK, { children: v.NW.string(v.t['3rE1Pz']) }),
                (0, r.jsx)(o.Dx, {
                    className: j.inviteResolvingGuildName,
                    children: v.NW.string(v.t.ZTNur6)
                })
            ]
        }),
    O = (e) => {
        let { guild: t, user: n, application: i, compact: s } = e;
        return null != i
            ? (0, r.jsx)(c.Z, {
                  className: j.appIcon,
                  game: i,
                  size: j.appIconSize
              })
            : null != n
              ? (0, r.jsx)(o.qE, {
                    src: null != n ? n.getAvatarURL(void 0, 80) : null,
                    size: l.EFr.SIZE_80,
                    className: s ? j.compactAvatar : j.avatar
                })
              : null != t
                ? (0, r.jsx)(a.ZP, {
                      mask: a.ZP.Masks.SQUIRCLE,
                      width: 64,
                      height: 64,
                      className: j.guildIcon,
                      children: (0, r.jsx)(o.Vj, {
                          guild: t,
                          size: o.Vj.Sizes.LARGER,
                          animate: !0
                      })
                  })
                : null;
    },
    S = (e) => {
        var t;
        let n,
            i,
            a,
            { invite: c, disableUser: I = !1, error: S, flatActivityCount: y = !1, isRegister: C = !1 } = e,
            P = (0, d.WR)({ location: 'invite' }),
            { currentUser: A } = (0, s.cj)([_.default], () => ({ currentUser: _.default.getCurrentUser() }));
        if (null == c) return null;
        let T = null != c.guild ? new f.ZP(c.guild) : null,
            Z = null != c.channel ? (0, g.jD)(c.channel) : null,
            R = null != c.target_application ? new p.ZP(c.target_application) : null,
            w = I || null == c.inviter ? null : new m.Z(c.inviter),
            L = !((null != c.approximate_member_count && c.approximate_member_count > 100) || (null != T && T.hasFeature(x.oNc.COMMUNITY))) && null != w,
            D = null,
            k = !1;
        if (null != T)
            (D = null == w ? v.NW.string(v.t['3rE1Pz']) : v.NW.formatToPlainString(v.t['5u47vb'], { username: N.ZP.getFormattedName(w) })),
                c.target_type === E.Iq.STREAM && null != c.target_user && (D = v.NW.formatToPlainString(v.t.x2L32d, { username: N.ZP.getFormattedName(c.target_user) })),
                c.target_type === E.Iq.EMBEDDED_APPLICATION && null != c.target_application && (D = null != w ? v.NW.formatToPlainString(v.t.UW1Cam, { username: N.ZP.getFormattedName(w) }) : v.NW.string(v.t.ENSuNz)),
                L &&
                    null == R &&
                    (n = (0, r.jsx)(o.Vj, {
                        className: j.icon,
                        guild: T,
                        size: o.Vj.Sizes.SMALL
                    })),
                (i = T.name),
                null != R &&
                    ((i = R.name),
                    (a = (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(o.DK, {
                                className: j.appIn,
                                children: v.NW.string(v.t['3gg9fH'])
                            }),
                            (0, r.jsxs)('div', {
                                className: j.guildContainer,
                                children: [
                                    (0, r.jsx)(o.Vj, {
                                        guild: T,
                                        size: o.Vj.Sizes.SMALL
                                    }),
                                    (0, r.jsx)(l.Text, {
                                        tag: 'span',
                                        variant: 'text-lg/normal',
                                        color: 'header-primary',
                                        className: j.appGuildName,
                                        children: T.name
                                    })
                                ]
                            })
                        ]
                    })));
        else if (null != Z) {
            if (null == w) throw Error('no inviter in group DM invite');
            let e = N.ZP.getFormattedName(w);
            null != Z.name && '' !== Z.name
                ? ((D = v.NW.formatToPlainString(v.t['5u47vb'], { username: e })),
                  (i = Z.name),
                  null != Z.icon &&
                      (n = (0, r.jsx)(o.MC, {
                          channel: Z,
                          size: l.EFr.SIZE_32
                      })))
                : ((D = v.NW.string(v.t.OsdY8P)), (i = e));
        } else if (null != w) {
            let e = N.ZP.getFormattedName(w, !0);
            (i = v.NW.formatToPlainString(v.t['4aF92d'], { username: e })),
                (k = !0),
                (a =
                    null != S
                        ? null
                        : (0, r.jsx)(o.DK, {
                              className: j.directInviteSubTitle,
                              children: C ? v.NW.format(v.t['6r4JiY'], { username: e }) : v.NW.format(v.t.Quj7HR, { username: e })
                          }));
        }
        return (0, r.jsxs)('div', {
            className: j.container,
            children: [
                (0, r.jsx)(O, {
                    application: R,
                    guild: T,
                    user: L ? w : null,
                    compact: k
                }),
                null != S
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsx)(o.DK, { children: v.NW.string(v.t.mDFGFh) }), (0, r.jsx)(o.Dx, { children: S })]
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(o.DK, { children: D }),
                              (0, r.jsxs)(o.Dx, {
                                  className: j.title,
                                  children: [
                                      null != T
                                          ? (0, r.jsx)(u.Z, {
                                                guild: T,
                                                className: j.guildBadge,
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
                          className: j.activityCount,
                          online: c.approximate_presence_count,
                          total: c.approximate_member_count,
                          flat: y
                      }),
                P ? (0, r.jsx)(h.R, {}) : (0, r.jsx)(o.jQ, { user: A })
            ]
        });
    };
