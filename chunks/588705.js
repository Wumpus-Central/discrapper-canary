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
    d = n(925329),
    s = n(372769),
    u = n(44609),
    _ = n(47343),
    m = n(973616),
    g = n(131704),
    f = n(601964),
    b = n(598077),
    p = n(594174),
    h = n(51144),
    S = n(981631),
    v = n(888592),
    I = n(245335),
    C = n(388032),
    N = n(594193);
let T = () =>
        (0, i.jsxs)(a.Fragment, {
            children: [
                (0, i.jsx)(o.qE, {
                    src: null,
                    size: r.AvatarSizes.DEPRECATED_SIZE_100,
                    className: N.avatar
                }),
                (0, i.jsx)(o.DK, { children: C.intl.string(C.t['3rE1Pz']) }),
                (0, i.jsx)(o.Dx, {
                    className: N.inviteResolvingGuildName,
                    children: C.intl.string(C.t.ZTNur6)
                })
            ]
        }),
    x = (e) => {
        let { guild: t, user: n, application: a, compact: l } = e;
        if (null != a)
            return (0, i.jsx)(d.Z, {
                className: N.appIcon,
                game: a,
                size: N.appIconSize
            });
        if (null != n)
            return (0, i.jsx)(o.qE, {
                src: null != n ? n.getAvatarURL(void 0, 80) : null,
                size: r.AvatarSizes.SIZE_80,
                className: l ? N.compactAvatar : N.avatar
            });
        if (null != t)
            return (0, i.jsx)(c.ZP, {
                mask: c.ZP.Masks.SQUIRCLE,
                width: 64,
                height: 64,
                className: N.guildIcon,
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
        { invite: d, disableUser: T = !1, error: E, flatActivityCount: R = !1, isRegister: B = !1 } = e,
        A = (0, u.WR)({ location: 'invite' }),
        { currentUser: P } = (0, l.cj)([p.default], () => ({ currentUser: p.default.getCurrentUser() }));
    if (null == d) return null;
    let w = null != d.guild ? new f.ZP(d.guild) : null,
        k = null != d.channel ? (0, g.jD)(d.channel) : null,
        L = null != d.target_application ? new m.ZP(d.target_application) : null,
        O = T || null == d.inviter ? null : new b.Z(d.inviter),
        j = !((null != d.approximate_member_count && d.approximate_member_count > 100) || (null != w && w.hasFeature(S.oNc.COMMUNITY))) && null != O,
        M = null,
        Z = !1;
    if (null != w)
        (M = null == O ? C.intl.string(C.t['3rE1Pz']) : C.intl.formatToPlainString(C.t['5u47vb'], { username: h.ZP.getFormattedName(O) })),
            d.target_type === I.Iq.STREAM && null != d.target_user && (M = C.intl.formatToPlainString(C.t.x2L32d, { username: h.ZP.getFormattedName(d.target_user) })),
            d.target_type === I.Iq.EMBEDDED_APPLICATION && null != d.target_application && (M = null != O ? C.intl.formatToPlainString(C.t.UW1Cam, { username: h.ZP.getFormattedName(O) }) : C.intl.string(C.t.ENSuNz)),
            j &&
                null == L &&
                (n = (0, i.jsx)(o.Vj, {
                    className: N.icon,
                    guild: w,
                    size: o.Vj.Sizes.SMALL
                })),
            (a = w.name),
            null != L &&
                ((a = L.name),
                (c = (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(o.DK, {
                            className: N.appIn,
                            children: C.intl.string(C.t['3gg9fH'])
                        }),
                        (0, i.jsxs)('div', {
                            className: N.guildContainer,
                            children: [
                                (0, i.jsx)(o.Vj, {
                                    guild: w,
                                    size: o.Vj.Sizes.SMALL
                                }),
                                (0, i.jsx)(r.Text, {
                                    tag: 'span',
                                    variant: 'text-lg/normal',
                                    color: 'header-primary',
                                    className: N.appGuildName,
                                    children: w.name
                                })
                            ]
                        })
                    ]
                })));
    else if (null != k) {
        if (null == O) throw Error('no inviter in group DM invite');
        let e = h.ZP.getFormattedName(O);
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
        let e = h.ZP.getFormattedName(O, !0);
        (a = C.intl.formatToPlainString(C.t['4aF92d'], { username: e })),
            (Z = !0),
            (c =
                null != E
                    ? null
                    : (0, i.jsx)(o.DK, {
                          className: N.directInviteSubTitle,
                          children: B ? C.intl.format(C.t['6r4JiY'], { username: e }) : C.intl.format(C.t.Quj7HR, { username: e })
                      }));
    }
    return (0, i.jsxs)('div', {
        className: N.container,
        children: [
            (0, i.jsx)(x, {
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
                              className: N.title,
                              children: [
                                  null != w
                                      ? (0, i.jsx)(s.Z, {
                                            guild: w,
                                            className: N.guildBadge,
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
                      className: N.activityCount,
                      online: d.approximate_presence_count,
                      total: d.approximate_member_count,
                      flat: R
                  }),
            A ? (0, i.jsx)(_.R, {}) : (0, i.jsx)(o.jQ, { user: P })
        ]
    });
};
