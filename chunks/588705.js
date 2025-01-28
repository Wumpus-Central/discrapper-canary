n.d(t, {
    R: function () {
        return x;
    }
}),
    n(411104);
var i = n(200651),
    a = n(192379),
    l = n(442837),
    r = n(481060),
    o = n(388905),
    c = n(686546),
    d = n(925329),
    u = n(372769),
    s = n(44609),
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
    T = n(594193);
let x = () =>
        (0, i.jsxs)(a.Fragment, {
            children: [
                (0, i.jsx)(o.qE, {
                    src: null,
                    size: r.AvatarSizes.DEPRECATED_SIZE_100,
                    className: T.avatar
                }),
                (0, i.jsx)(o.DK, { children: C.intl.string(C.t['3rE1Pz']) }),
                (0, i.jsx)(o.Dx, {
                    className: T.inviteResolvingGuildName,
                    children: C.intl.string(C.t.ZTNur6)
                })
            ]
        }),
    N = (e) => {
        let { guild: t, user: n, application: a, compact: l } = e;
        if (null != a)
            return (0, i.jsx)(d.Z, {
                className: T.appIcon,
                game: a,
                size: T.appIconSize
            });
        if (null != n)
            return (0, i.jsx)(o.qE, {
                src: null != n ? n.getAvatarURL(void 0, 80) : null,
                size: r.AvatarSizes.SIZE_80,
                className: l ? T.compactAvatar : T.avatar
            });
        if (null != t)
            return (0, i.jsx)(c.ZP, {
                mask: c.ZP.Masks.SQUIRCLE,
                width: 64,
                height: 64,
                className: T.guildIcon,
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
        { invite: d, disableUser: x = !1, error: E, flatActivityCount: B = !1, isRegister: R = !1 } = e,
        A = (0, s.WR)({ location: 'invite' }),
        { currentUser: P } = (0, l.cj)([p.default], () => ({ currentUser: p.default.getCurrentUser() }));
    if (null == d) return null;
    let w = null != d.guild ? new f.ZP(d.guild) : null,
        k = null != d.channel ? (0, g.jD)(d.channel) : null,
        L = null != d.target_application ? new _.ZP(d.target_application) : null,
        O = x || null == d.inviter ? null : new b.Z(d.inviter),
        j = !((null != d.approximate_member_count && d.approximate_member_count > 100) || (null != w && w.hasFeature(h.oNc.COMMUNITY))) && null != O,
        M = null,
        Z = !1;
    if (null != w)
        (M = null == O ? C.intl.string(C.t['3rE1Pz']) : C.intl.formatToPlainString(C.t['5u47vb'], { username: S.ZP.getFormattedName(O) })),
            d.target_type === I.Iq.STREAM && null != d.target_user && (M = C.intl.formatToPlainString(C.t.x2L32d, { username: S.ZP.getFormattedName(d.target_user) })),
            d.target_type === I.Iq.EMBEDDED_APPLICATION && null != d.target_application && (M = null != O ? C.intl.formatToPlainString(C.t.UW1Cam, { username: S.ZP.getFormattedName(O) }) : C.intl.string(C.t.ENSuNz)),
            j &&
                null == L &&
                (n = (0, i.jsx)(o.Vj, {
                    className: T.icon,
                    guild: w,
                    size: o.Vj.Sizes.SMALL
                })),
            (a = w.name),
            null != L &&
                ((a = L.name),
                (c = (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(o.DK, {
                            className: T.appIn,
                            children: C.intl.string(C.t['3gg9fH'])
                        }),
                        (0, i.jsxs)('div', {
                            className: T.guildContainer,
                            children: [
                                (0, i.jsx)(o.Vj, {
                                    guild: w,
                                    size: o.Vj.Sizes.SMALL
                                }),
                                (0, i.jsx)(r.Text, {
                                    tag: 'span',
                                    variant: 'text-lg/normal',
                                    color: 'header-primary',
                                    className: T.appGuildName,
                                    children: w.name
                                })
                            ]
                        })
                    ]
                })));
    else if (null != k) {
        if (null == O) throw Error('no inviter in group DM invite');
        let e = S.ZP.getFormattedName(O);
        null != k.name && '' !== k.name
            ? ((M = C.intl.formatToPlainString(C.t['5u47vb'], { username: e })),
              (a = k.name),
              null != k.icon &&
                  (n = (0, i.jsx)(o.MC, {
                      channel: k,
                      size: r.AvatarSizes.SIZE_32
                  })))
            : ((M = C.intl.string(C.t.OsdY8P)), (a = e));
    } else if (null != O) {
        let e = S.ZP.getFormattedName(O, !0);
        (a = C.intl.formatToPlainString(C.t['4aF92d'], { username: e })),
            (Z = !0),
            (c =
                null != E
                    ? null
                    : (0, i.jsx)(o.DK, {
                          className: T.directInviteSubTitle,
                          children: R ? C.intl.format(C.t['6r4JiY'], { username: e }) : C.intl.format(C.t.Quj7HR, { username: e })
                      }));
    }
    return (0, i.jsxs)('div', {
        className: T.container,
        children: [
            (0, i.jsx)(N, {
                application: L,
                guild: w,
                user: j ? O : null,
                compact: Z
            }),
            null != E
                ? (0, i.jsxs)(i.Fragment, {
                      children: [(0, i.jsx)(o.DK, { children: C.intl.string(C.t.mDFGFh) }), (0, i.jsx)(o.Dx, { children: E })]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(o.DK, { children: M }),
                          (0, i.jsxs)(o.Dx, {
                              className: T.title,
                              children: [
                                  null != w
                                      ? (0, i.jsx)(u.Z, {
                                            guild: w,
                                            className: T.guildBadge,
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
            null != L || Z || (null == d ? void 0 : null === (t = d.guild) || void 0 === t ? void 0 : t.id) === v.fQ
                ? null
                : (0, i.jsx)(o.EJ, {
                      className: T.activityCount,
                      online: d.approximate_presence_count,
                      total: d.approximate_member_count,
                      flat: B
                  }),
            A ? (0, i.jsx)(m.R, {}) : (0, i.jsx)(o.jQ, { user: P })
        ]
    });
};
