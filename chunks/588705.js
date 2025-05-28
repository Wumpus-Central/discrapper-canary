n.d(t, {
    R: () => S,
    Z: () => j
}),
    n(415506);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    o = n(388905),
    s = n(686546),
    c = n(925329),
    u = n(372769),
    d = n(44609),
    h = n(47343),
    g = n(973616),
    p = n(131704),
    m = n(601964),
    f = n(598077),
    _ = n(594174),
    x = n(51144),
    E = n(981631),
    b = n(888592),
    v = n(245335),
    I = n(388032),
    O = n(782770);
let S = () =>
        (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(o.qE, {
                    src: null,
                    size: a.EFr.DEPRECATED_SIZE_100,
                    className: O.avatar
                }),
                (0, r.jsx)(o.DK, { children: I.intl.string(I.t['3rE1Pz']) }),
                (0, r.jsx)(o.Dx, {
                    className: O.inviteResolvingGuildName,
                    children: I.intl.string(I.t.ZTNur6)
                })
            ]
        }),
    y = (e) => {
        let { guild: t, user: n, application: i, compact: l } = e;
        return null != i
            ? (0, r.jsx)(c.Z, {
                  className: O.appIcon,
                  game: i,
                  size: O.appIconSize
              })
            : null != n
              ? (0, r.jsx)(o.qE, {
                    src: null != n ? n.getAvatarURL(void 0, 80) : null,
                    size: a.EFr.SIZE_80,
                    className: l ? O.compactAvatar : O.avatar
                })
              : null != t
                ? (0, r.jsx)(s.ZP, {
                      mask: s.ZP.Masks.SQUIRCLE,
                      width: 64,
                      height: 64,
                      className: O.guildIcon,
                      children: (0, r.jsx)(o.Vj, {
                          guild: t,
                          size: o.Vj.Sizes.LARGER,
                          animate: !0
                      })
                  })
                : null;
    },
    j = (e) => {
        var t;
        let n,
            i,
            s,
            { invite: c, disableUser: S = !1, error: j, flatActivityCount: N = !1, isRegister: C = !1, inUnclaimedFlowExperiment: T = !1 } = e,
            { currentUser: A } = (0, l.cj)([_.default], () => ({ currentUser: _.default.getCurrentUser() })),
            P = (0, d.WR)({ location: 'invite' }) && null != A;
        if (null == c) return null;
        let Z = null != c.guild ? new m.ZP(c.guild) : null,
            R = null != c.channel ? (0, p.jD)(c.channel) : null,
            w = null != c.target_application ? new g.ZP(c.target_application) : null,
            L = S || null == c.inviter ? null : new f.Z(c.inviter),
            D = !((null != c.approximate_member_count && c.approximate_member_count > 100) || (null != Z && Z.hasFeature(E.oNc.COMMUNITY))) && null != L,
            k = null,
            M = !1;
        if (null != Z)
            (k = null == L ? I.intl.string(I.t['3rE1Pz']) : I.intl.formatToPlainString(I.t['5u47vb'], { username: x.ZP.getFormattedName(L) })),
                c.target_type === v.Iq.STREAM && null != c.target_user && (k = I.intl.formatToPlainString(I.t.x2L32d, { username: x.ZP.getFormattedName(c.target_user) })),
                c.target_type === v.Iq.EMBEDDED_APPLICATION && null != c.target_application && (k = null != L ? I.intl.formatToPlainString(I.t.UW1Cam, { username: x.ZP.getFormattedName(L) }) : I.intl.string(I.t.ENSuNz)),
                D &&
                    null == w &&
                    (n = (0, r.jsx)(o.Vj, {
                        className: O.icon,
                        guild: Z,
                        size: o.Vj.Sizes.SMALL
                    })),
                (i = Z.name),
                null != w &&
                    ((i = w.name),
                    (s = (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(o.DK, {
                                className: O.appIn,
                                children: I.intl.string(I.t['3gg9fH'])
                            }),
                            (0, r.jsxs)('div', {
                                className: O.guildContainer,
                                children: [
                                    (0, r.jsx)(o.Vj, {
                                        guild: Z,
                                        size: o.Vj.Sizes.SMALL
                                    }),
                                    (0, r.jsx)(a.Text, {
                                        tag: 'span',
                                        variant: 'text-lg/normal',
                                        color: 'header-primary',
                                        className: O.appGuildName,
                                        children: Z.name
                                    })
                                ]
                            })
                        ]
                    })));
        else if (null != R) {
            if (null == L) throw Error('no inviter in group DM invite');
            let e = x.ZP.getFormattedName(L);
            null != R.name && '' !== R.name
                ? ((k = I.intl.formatToPlainString(I.t['5u47vb'], { username: e })),
                  (i = R.name),
                  null != R.icon &&
                      (n = (0, r.jsx)(o.MC, {
                          channel: R,
                          size: a.EFr.SIZE_32
                      })))
                : ((k = I.intl.string(I.t.OsdY8P)), (i = e));
        } else if (null != L) {
            let e = x.ZP.getFormattedName(L, !0);
            (i = I.intl.formatToPlainString(I.t['4aF92d'], { username: e })),
                (M = !0),
                (s =
                    null != j
                        ? null
                        : (0, r.jsx)(o.DK, {
                              className: O.directInviteSubTitle,
                              children: C ? I.intl.format(I.t['6r4JiY'], { username: e }) : I.intl.format(I.t.Quj7HR, { username: e })
                          }));
        }
        return (0, r.jsxs)('div', {
            className: O.container,
            children: [
                (0, r.jsx)(y, {
                    application: w,
                    guild: Z,
                    user: D ? L : null,
                    compact: M
                }),
                null != j
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsx)(o.DK, { children: I.intl.string(I.t.mDFGFh) }), (0, r.jsx)(o.Dx, { children: j })]
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(o.DK, { children: k }),
                              (0, r.jsxs)(o.Dx, {
                                  className: O.title,
                                  children: [
                                      null != Z
                                          ? (0, r.jsx)(u.Z, {
                                                guild: Z,
                                                className: O.guildBadge,
                                                tooltipPosition: 'left'
                                            })
                                          : null,
                                      n,
                                      i
                                  ]
                              })
                          ]
                      }),
                s,
                null != w || M || (null == c || null == (t = c.guild) ? void 0 : t.id) === b.fQ
                    ? null
                    : (0, r.jsx)(o.EJ, {
                          className: O.activityCount,
                          online: c.approximate_presence_count,
                          total: c.approximate_member_count,
                          flat: N
                      }),
                !T && P ? (0, r.jsx)(h.R, {}) : (0, r.jsx)(o.jQ, { user: A })
            ]
        });
    };
