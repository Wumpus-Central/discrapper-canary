n.d(t, {
    R: function () {
        return C;
    }
}),
    n(411104);
var i = n(200651),
    a = n(192379),
    r = n(442837),
    l = n(481060),
    o = n(388905),
    c = n(686546),
    s = n(925329),
    d = n(372769),
    u = n(44609),
    _ = n(47343),
    f = n(973616),
    m = n(131704),
    g = n(601964),
    p = n(598077),
    b = n(594174),
    v = n(51144),
    h = n(981631),
    T = n(888592),
    S = n(245335),
    I = n(388032),
    x = n(594193);
let C = () =>
        (0, i.jsxs)(a.Fragment, {
            children: [
                (0, i.jsx)(o.qE, {
                    src: null,
                    size: l.AvatarSizes.DEPRECATED_SIZE_100,
                    className: x.avatar
                }),
                (0, i.jsx)(o.DK, { children: I.intl.string(I.t['3rE1Pz']) }),
                (0, i.jsx)(o.Dx, {
                    className: x.inviteResolvingGuildName,
                    children: I.intl.string(I.t.ZTNur6)
                })
            ]
        }),
    E = (e) => {
        let { guild: t, user: n, application: a, compact: r } = e;
        if (null != a)
            return (0, i.jsx)(s.Z, {
                className: x.appIcon,
                game: a,
                size: x.appIconSize
            });
        if (null != n)
            return (0, i.jsx)(o.qE, {
                src: null != n ? n.getAvatarURL(void 0, 80) : null,
                size: l.AvatarSizes.SIZE_80,
                className: r ? x.compactAvatar : x.avatar
            });
        if (null != t)
            return (0, i.jsx)(c.ZP, {
                mask: c.ZP.Masks.SQUIRCLE,
                width: 64,
                height: 64,
                className: x.guildIcon,
                children: (0, i.jsx)(o.Vj, {
                    guild: t,
                    size: o.Vj.Sizes.LARGER,
                    animate: !0
                })
            });
        else return null;
    };
t.Z = (e) => {
    var t;
    let n,
        a,
        c,
        { invite: s, disableUser: C = !1, error: N, flatActivityCount: R = !1, isRegister: B = !1 } = e,
        O = (0, u.WR)({ location: 'invite' }),
        { currentUser: L } = (0, r.cj)([b.default], () => ({ currentUser: b.default.getCurrentUser() }));
    if (null == s) return null;
    let P = null != s.guild ? new g.ZP(s.guild) : null,
        j = null != s.channel ? (0, m.jD)(s.channel) : null,
        w = null != s.target_application ? new f.ZP(s.target_application) : null,
        A = C || null == s.inviter ? null : new p.Z(s.inviter),
        D = !((null != s.approximate_member_count && s.approximate_member_count > 100) || (null != P && P.hasFeature(h.oNc.COMMUNITY))) && null != A,
        k = null,
        Z = !1;
    if (null != P)
        (k = null == A ? I.intl.string(I.t['3rE1Pz']) : I.intl.formatToPlainString(I.t['5u47vb'], { username: v.ZP.getFormattedName(A) })),
            s.target_type === S.Iq.STREAM && null != s.target_user && (k = I.intl.formatToPlainString(I.t.x2L32d, { username: v.ZP.getFormattedName(s.target_user) })),
            s.target_type === S.Iq.EMBEDDED_APPLICATION && null != s.target_application && (k = null != A ? I.intl.formatToPlainString(I.t.UW1Cam, { username: v.ZP.getFormattedName(A) }) : I.intl.string(I.t.ENSuNz)),
            D &&
                null == w &&
                (n = (0, i.jsx)(o.Vj, {
                    className: x.icon,
                    guild: P,
                    size: o.Vj.Sizes.SMALL
                })),
            (a = P.name),
            null != w &&
                ((a = w.name),
                (c = (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(o.DK, {
                            className: x.appIn,
                            children: I.intl.string(I.t['3gg9fH'])
                        }),
                        (0, i.jsxs)('div', {
                            className: x.guildContainer,
                            children: [
                                (0, i.jsx)(o.Vj, {
                                    guild: P,
                                    size: o.Vj.Sizes.SMALL
                                }),
                                (0, i.jsx)(l.Text, {
                                    tag: 'span',
                                    variant: 'text-lg/normal',
                                    color: 'header-primary',
                                    className: x.appGuildName,
                                    children: P.name
                                })
                            ]
                        })
                    ]
                })));
    else if (null != j) {
        if (null == A) throw Error('no inviter in group DM invite');
        let e = v.ZP.getFormattedName(A);
        null != j.name && '' !== j.name
            ? ((k = I.intl.formatToPlainString(I.t['5u47vb'], { username: e })),
              (a = j.name),
              null != j.icon &&
                  (n = (0, i.jsx)(o.MC, {
                      channel: j,
                      size: l.AvatarSizes.SIZE_32
                  })))
            : ((k = I.intl.string(I.t.OsdY8P)), (a = e));
    } else if (null != A) {
        let e = v.ZP.getFormattedName(A, !0);
        (a = I.intl.formatToPlainString(I.t['4aF92d'], { username: e })),
            (Z = !0),
            (c =
                null != N
                    ? null
                    : (0, i.jsx)(o.DK, {
                          className: x.directInviteSubTitle,
                          children: B ? I.intl.format(I.t['6r4JiY'], { username: e }) : I.intl.format(I.t.Quj7HR, { username: e })
                      }));
    }
    return (0, i.jsxs)('div', {
        className: x.container,
        children: [
            (0, i.jsx)(E, {
                application: w,
                guild: P,
                user: D ? A : null,
                compact: Z
            }),
            null != N
                ? (0, i.jsxs)(i.Fragment, {
                      children: [(0, i.jsx)(o.DK, { children: I.intl.string(I.t.mDFGFh) }), (0, i.jsx)(o.Dx, { children: N })]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(o.DK, { children: k }),
                          (0, i.jsxs)(o.Dx, {
                              className: x.title,
                              children: [
                                  null != P
                                      ? (0, i.jsx)(d.Z, {
                                            guild: P,
                                            className: x.guildBadge,
                                            tooltipPosition: 'left'
                                        })
                                      : null,
                                  n,
                                  a
                              ]
                          })
                      ]
                  }),
            c,
            null != w || Z || (null == s ? void 0 : null === (t = s.guild) || void 0 === t ? void 0 : t.id) === T.fQ
                ? null
                : (0, i.jsx)(o.EJ, {
                      className: x.activityCount,
                      online: s.approximate_presence_count,
                      total: s.approximate_member_count,
                      flat: R
                  }),
            O ? (0, i.jsx)(_.R, {}) : (0, i.jsx)(o.jQ, { user: L })
        ]
    });
};
