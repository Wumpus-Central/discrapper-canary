n.d(t, {
    R: () => h,
    Z: () => C
}),
    n(411104);
var l = n(200651),
    i = n(192379),
    a = n(442837),
    r = n(481060),
    u = n(388905),
    s = n(686546),
    d = n(925329),
    o = n(372769),
    c = n(44609),
    E = n(47343),
    _ = n(973616),
    m = n(131704),
    S = n(601964),
    g = n(598077),
    N = n(594174),
    A = n(51144),
    I = n(981631),
    v = n(888592),
    R = n(245335),
    T = n(388032),
    O = n(594193);
let h = () =>
        (0, l.jsxs)(i.Fragment, {
            children: [
                (0, l.jsx)(u.qE, {
                    src: null,
                    size: r.EFr.DEPRECATED_SIZE_100,
                    className: O.avatar
                }),
                (0, l.jsx)(u.DK, { children: T.intl.string(T.t['3rE1Pz']) }),
                (0, l.jsx)(u.Dx, {
                    className: O.inviteResolvingGuildName,
                    children: T.intl.string(T.t.ZTNur6)
                })
            ]
        }),
    f = (e) => {
        let { guild: t, user: n, application: i, compact: a } = e;
        return null != i
            ? (0, l.jsx)(d.Z, {
                  className: O.appIcon,
                  game: i,
                  size: O.appIconSize
              })
            : null != n
              ? (0, l.jsx)(u.qE, {
                    src: null != n ? n.getAvatarURL(void 0, 80) : null,
                    size: r.EFr.SIZE_80,
                    className: a ? O.compactAvatar : O.avatar
                })
              : null != t
                ? (0, l.jsx)(s.ZP, {
                      mask: s.ZP.Masks.SQUIRCLE,
                      width: 64,
                      height: 64,
                      className: O.guildIcon,
                      children: (0, l.jsx)(u.Vj, {
                          guild: t,
                          size: u.Vj.Sizes.LARGER,
                          animate: !0
                      })
                  })
                : null;
    },
    C = (e) => {
        var t;
        let n,
            i,
            s,
            { invite: d, disableUser: h = !1, error: C, flatActivityCount: D = !1, isRegister: L = !1 } = e,
            p = (0, c.WR)({ location: 'invite' }),
            { currentUser: x } = (0, a.cj)([N.default], () => ({ currentUser: N.default.getCurrentUser() }));
        if (null == d) return null;
        let P = null != d.guild ? new S.ZP(d.guild) : null,
            U = null != d.channel ? (0, m.jD)(d.channel) : null,
            j = null != d.target_application ? new _.ZP(d.target_application) : null,
            M = h || null == d.inviter ? null : new g.Z(d.inviter),
            Z = !((null != d.approximate_member_count && d.approximate_member_count > 100) || (null != P && P.hasFeature(I.oNc.COMMUNITY))) && null != M,
            F = null,
            G = !1;
        if (null != P)
            (F = null == M ? T.intl.string(T.t['3rE1Pz']) : T.intl.formatToPlainString(T.t['5u47vb'], { username: A.ZP.getFormattedName(M) })),
                d.target_type === R.Iq.STREAM && null != d.target_user && (F = T.intl.formatToPlainString(T.t.x2L32d, { username: A.ZP.getFormattedName(d.target_user) })),
                d.target_type === R.Iq.EMBEDDED_APPLICATION && null != d.target_application && (F = null != M ? T.intl.formatToPlainString(T.t.UW1Cam, { username: A.ZP.getFormattedName(M) }) : T.intl.string(T.t.ENSuNz)),
                Z &&
                    null == j &&
                    (n = (0, l.jsx)(u.Vj, {
                        className: O.icon,
                        guild: P,
                        size: u.Vj.Sizes.SMALL
                    })),
                (i = P.name),
                null != j &&
                    ((i = j.name),
                    (s = (0, l.jsxs)('div', {
                        children: [
                            (0, l.jsx)(u.DK, {
                                className: O.appIn,
                                children: T.intl.string(T.t['3gg9fH'])
                            }),
                            (0, l.jsxs)('div', {
                                className: O.guildContainer,
                                children: [
                                    (0, l.jsx)(u.Vj, {
                                        guild: P,
                                        size: u.Vj.Sizes.SMALL
                                    }),
                                    (0, l.jsx)(r.Text, {
                                        tag: 'span',
                                        variant: 'text-lg/normal',
                                        color: 'header-primary',
                                        className: O.appGuildName,
                                        children: P.name
                                    })
                                ]
                            })
                        ]
                    })));
        else if (null != U) {
            if (null == M) throw Error('no inviter in group DM invite');
            let e = A.ZP.getFormattedName(M);
            null != U.name && '' !== U.name
                ? ((F = T.intl.formatToPlainString(T.t['5u47vb'], { username: e })),
                  (i = U.name),
                  null != U.icon &&
                      (n = (0, l.jsx)(u.MC, {
                          channel: U,
                          size: r.EFr.SIZE_32
                      })))
                : ((F = T.intl.string(T.t.OsdY8P)), (i = e));
        } else if (null != M) {
            let e = A.ZP.getFormattedName(M, !0);
            (i = T.intl.formatToPlainString(T.t['4aF92d'], { username: e })),
                (G = !0),
                (s =
                    null != C
                        ? null
                        : (0, l.jsx)(u.DK, {
                              className: O.directInviteSubTitle,
                              children: L ? T.intl.format(T.t['6r4JiY'], { username: e }) : T.intl.format(T.t.Quj7HR, { username: e })
                          }));
        }
        return (0, l.jsxs)('div', {
            className: O.container,
            children: [
                (0, l.jsx)(f, {
                    application: j,
                    guild: P,
                    user: Z ? M : null,
                    compact: G
                }),
                null != C
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [(0, l.jsx)(u.DK, { children: T.intl.string(T.t.mDFGFh) }), (0, l.jsx)(u.Dx, { children: C })]
                      })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(u.DK, { children: F }),
                              (0, l.jsxs)(u.Dx, {
                                  className: O.title,
                                  children: [
                                      null != P
                                          ? (0, l.jsx)(o.Z, {
                                                guild: P,
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
                null != j || G || (null == d ? void 0 : null === (t = d.guild) || void 0 === t ? void 0 : t.id) === v.fQ
                    ? null
                    : (0, l.jsx)(u.EJ, {
                          className: O.activityCount,
                          online: d.approximate_presence_count,
                          total: d.approximate_member_count,
                          flat: D
                      }),
                p ? (0, l.jsx)(E.R, {}) : (0, l.jsx)(u.jQ, { user: x })
            ]
        });
    };
