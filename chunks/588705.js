n.d(t, {
    R: function () {
        return T;
    }
}),
    n(411104);
var i = n(200651),
    a = n(192379),
    l = n(442837),
    r = n(481060),
    o = n(388905),
    c = n(686546),
    s = n(925329),
    d = n(372769),
    u = n(44609),
    m = n(47343),
    _ = n(973616),
    g = n(131704),
    f = n(601964),
    b = n(598077),
    p = n(594174),
    S = n(51144),
    h = n(981631),
    v = n(888592),
    I = n(245335),
    C = n(388032),
    x = n(594193);
let T = () =>
        (0, i.jsxs)(a.Fragment, {
            children: [
                (0, i.jsx)(o.qE, {
                    src: null,
                    size: r.AvatarSizes.DEPRECATED_SIZE_100,
                    className: x.avatar
                }),
                (0, i.jsx)(o.DK, { children: C.intl.string(C.t['3rE1Pz']) }),
                (0, i.jsx)(o.Dx, {
                    className: x.inviteResolvingGuildName,
                    children: C.intl.string(C.t.ZTNur6)
                })
            ]
        }),
    N = (e) => {
        let { guild: t, user: n, application: a, compact: l } = e;
        if (null != a)
            return (0, i.jsx)(s.Z, {
                className: x.appIcon,
                game: a,
                size: x.appIconSize
            });
        if (null != n)
            return (0, i.jsx)(o.qE, {
                src: null != n ? n.getAvatarURL(void 0, 80) : null,
                size: r.AvatarSizes.SIZE_80,
                className: l ? x.compactAvatar : x.avatar
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
        { invite: s, disableUser: T = !1, error: E, flatActivityCount: R = !1, isRegister: B = !1 } = e,
        P = (0, u.WR)({ location: 'invite' }),
        { currentUser: A } = (0, l.cj)([p.default], () => ({ currentUser: p.default.getCurrentUser() }));
    if (null == s) return null;
    let w = null != s.guild ? new f.ZP(s.guild) : null,
        L = null != s.channel ? (0, g.jD)(s.channel) : null,
        j = null != s.target_application ? new _.ZP(s.target_application) : null,
        k = T || null == s.inviter ? null : new b.Z(s.inviter),
        O = !((null != s.approximate_member_count && s.approximate_member_count > 100) || (null != w && w.hasFeature(h.oNc.COMMUNITY))) && null != k,
        Z = null,
        M = !1;
    if (null != w)
        (Z = null == k ? C.intl.string(C.t['3rE1Pz']) : C.intl.formatToPlainString(C.t['5u47vb'], { username: S.ZP.getFormattedName(k) })),
            s.target_type === I.Iq.STREAM && null != s.target_user && (Z = C.intl.formatToPlainString(C.t.x2L32d, { username: S.ZP.getFormattedName(s.target_user) })),
            s.target_type === I.Iq.EMBEDDED_APPLICATION && null != s.target_application && (Z = null != k ? C.intl.formatToPlainString(C.t.UW1Cam, { username: S.ZP.getFormattedName(k) }) : C.intl.string(C.t.ENSuNz)),
            O &&
                null == j &&
                (n = (0, i.jsx)(o.Vj, {
                    className: x.icon,
                    guild: w,
                    size: o.Vj.Sizes.SMALL
                })),
            (a = w.name),
            null != j &&
                ((a = j.name),
                (c = (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(o.DK, {
                            className: x.appIn,
                            children: C.intl.string(C.t['3gg9fH'])
                        }),
                        (0, i.jsxs)('div', {
                            className: x.guildContainer,
                            children: [
                                (0, i.jsx)(o.Vj, {
                                    guild: w,
                                    size: o.Vj.Sizes.SMALL
                                }),
                                (0, i.jsx)(r.Text, {
                                    tag: 'span',
                                    variant: 'text-lg/normal',
                                    color: 'header-primary',
                                    className: x.appGuildName,
                                    children: w.name
                                })
                            ]
                        })
                    ]
                })));
    else if (null != L) {
        if (null == k) throw Error('no inviter in group DM invite');
        let e = S.ZP.getFormattedName(k);
        null != L.name && '' !== L.name
            ? ((Z = C.intl.formatToPlainString(C.t['5u47vb'], { username: e })),
              (a = L.name),
              null != L.icon &&
                  (n = (0, i.jsx)(o.MC, {
                      channel: L,
                      size: r.AvatarSizes.SIZE_32
                  })))
            : ((Z = C.intl.string(C.t.OsdY8P)), (a = e));
    } else if (null != k) {
        let e = S.ZP.getFormattedName(k, !0);
        (a = C.intl.formatToPlainString(C.t['4aF92d'], { username: e })),
            (M = !0),
            (c =
                null != E
                    ? null
                    : (0, i.jsx)(o.DK, {
                          className: x.directInviteSubTitle,
                          children: B ? C.intl.format(C.t['6r4JiY'], { username: e }) : C.intl.format(C.t.Quj7HR, { username: e })
                      }));
    }
    return (0, i.jsxs)('div', {
        className: x.container,
        children: [
            (0, i.jsx)(N, {
                application: j,
                guild: w,
                user: O ? k : null,
                compact: M
            }),
            null != E
                ? (0, i.jsxs)(i.Fragment, {
                      children: [(0, i.jsx)(o.DK, { children: C.intl.string(C.t.mDFGFh) }), (0, i.jsx)(o.Dx, { children: E })]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(o.DK, { children: Z }),
                          (0, i.jsxs)(o.Dx, {
                              className: x.title,
                              children: [
                                  null != w
                                      ? (0, i.jsx)(d.Z, {
                                            guild: w,
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
            null != j || M || (null == s ? void 0 : null === (t = s.guild) || void 0 === t ? void 0 : t.id) === v.fQ
                ? null
                : (0, i.jsx)(o.EJ, {
                      className: x.activityCount,
                      online: s.approximate_presence_count,
                      total: s.approximate_member_count,
                      flat: R
                  }),
            P ? (0, i.jsx)(m.R, {}) : (0, i.jsx)(o.jQ, { user: A })
        ]
    });
};
