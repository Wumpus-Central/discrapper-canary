n.d(t, {
    R: () => j,
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
    g = n(973616),
    p = n(131704),
    m = n(601964),
    f = n(598077),
    _ = n(594174),
    x = n(51144),
    E = n(981631),
    b = n(888592),
    v = n(245335),
    O = n(388032),
    I = n(782770);
let j = () =>
        (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(o.qE, {
                    src: null,
                    size: s.EFr.DEPRECATED_SIZE_100,
                    className: I.avatar
                }),
                (0, r.jsx)(o.DK, { children: O.intl.string(O.t['3rE1Pz']) }),
                (0, r.jsx)(o.Dx, {
                    className: I.inviteResolvingGuildName,
                    children: O.intl.string(O.t.ZTNur6)
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
            { invite: c, disableUser: j = !1, error: N, flatActivityCount: y = !1, isRegister: C = !1, inUnclaimedFlowExperiment: T = !1 } = e,
            { currentUser: P } = (0, l.cj)([_.default], () => ({ currentUser: _.default.getCurrentUser() })),
            A = (0, d.WR)({ location: 'invite' }) && null != P;
        if (null == c) return null;
        let Z = null != c.guild ? new m.ZP(c.guild) : null,
            R = null != c.channel ? (0, p.jD)(c.channel) : null,
            L = null != c.target_application ? new g.ZP(c.target_application) : null,
            w = j || null == c.inviter ? null : new f.Z(c.inviter),
            D = !((null != c.approximate_member_count && c.approximate_member_count > 100) || (null != Z && Z.hasFeature(E.oNc.COMMUNITY))) && null != w,
            k = null,
            M = !1;
        if (null != Z)
            (k = null == w ? O.intl.string(O.t['3rE1Pz']) : O.intl.formatToPlainString(O.t['5u47vb'], { username: x.ZP.getFormattedName(w) })),
                c.target_type === v.Iq.STREAM && null != c.target_user && (k = O.intl.formatToPlainString(O.t.x2L32d, { username: x.ZP.getFormattedName(c.target_user) })),
                c.target_type === v.Iq.EMBEDDED_APPLICATION && null != c.target_application && (k = null != w ? O.intl.formatToPlainString(O.t.UW1Cam, { username: x.ZP.getFormattedName(w) }) : O.intl.string(O.t.ENSuNz)),
                D &&
                    null == L &&
                    (n = (0, r.jsx)(o.Vj, {
                        className: I.icon,
                        guild: Z,
                        size: o.Vj.Sizes.SMALL
                    })),
                (i = Z.name),
                null != L &&
                    ((i = L.name),
                    (a = (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(o.DK, {
                                className: I.appIn,
                                children: O.intl.string(O.t['3gg9fH'])
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
        else if (null != R) {
            if (null == w) throw Error('no inviter in group DM invite');
            let e = x.ZP.getFormattedName(w);
            null != R.name && '' !== R.name
                ? ((k = O.intl.formatToPlainString(O.t['5u47vb'], { username: e })),
                  (i = R.name),
                  null != R.icon &&
                      (n = (0, r.jsx)(o.MC, {
                          channel: R,
                          size: s.EFr.SIZE_32
                      })))
                : ((k = O.intl.string(O.t.OsdY8P)), (i = e));
        } else if (null != w) {
            let e = x.ZP.getFormattedName(w, !0);
            (i = O.intl.formatToPlainString(O.t['4aF92d'], { username: e })),
                (M = !0),
                (a =
                    null != N
                        ? null
                        : (0, r.jsx)(o.DK, {
                              className: I.directInviteSubTitle,
                              children: C ? O.intl.format(O.t['6r4JiY'], { username: e }) : O.intl.format(O.t.Quj7HR, { username: e })
                          }));
        }
        return (0, r.jsxs)('div', {
            className: I.container,
            children: [
                (0, r.jsx)(S, {
                    application: L,
                    guild: Z,
                    user: D ? w : null,
                    compact: M
                }),
                null != N
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsx)(o.DK, { children: O.intl.string(O.t.mDFGFh) }), (0, r.jsx)(o.Dx, { children: N })]
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
                null != L || M || (null == c || null == (t = c.guild) ? void 0 : t.id) === b.fQ
                    ? null
                    : (0, r.jsx)(o.EJ, {
                          className: I.activityCount,
                          online: c.approximate_presence_count,
                          total: c.approximate_member_count,
                          flat: y
                      }),
                !T && A ? (0, r.jsx)(h.R, {}) : (0, r.jsx)(o.jQ, { user: P })
            ]
        });
    };
