(n.d(t, {
    R: () => O,
    Z: () => y
}),
    n(415506));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    s = n(481060),
    a = n(388905),
    o = n(686546),
    c = n(925329),
    u = n(372769),
    d = n(44609),
    h = n(47343),
    p = n(973616),
    g = n(131704),
    m = n(598077),
    f = n(594174),
    _ = n(411198),
    x = n(51144),
    b = n(981631),
    E = n(888592),
    v = n(245335),
    I = n(388032),
    j = n(782770);
let O = () =>
        (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(a.qE, {
                    src: null,
                    size: s.EFr.DEPRECATED_SIZE_100,
                    className: j.avatar
                }),
                (0, r.jsx)(a.DK, { children: I.intl.string(I.t['3rE1Pz']) }),
                (0, r.jsx)(a.Dx, {
                    className: j.inviteResolvingGuildName,
                    children: I.intl.string(I.t.ZTNur6)
                })
            ]
        }),
    S = (e) => {
        let { guild: t, user: n, application: i, compact: l } = e;
        return null != i
            ? (0, r.jsx)(c.Z, {
                  className: j.appIcon,
                  game: i,
                  size: j.appIconSize
              })
            : null != n
              ? (0, r.jsx)(a.qE, {
                    src: null != n ? n.getAvatarURL(void 0, 80) : null,
                    size: s.EFr.SIZE_80,
                    className: l ? j.compactAvatar : j.avatar
                })
              : null != t
                ? (0, r.jsx)(o.ZP, {
                      mask: o.ZP.Masks.SQUIRCLE,
                      width: 64,
                      height: 64,
                      className: j.guildIcon,
                      children: (0, r.jsx)(a.Vj, {
                          guild: t,
                          size: a.Vj.Sizes.LARGER,
                          animate: !0
                      })
                  })
                : null;
    },
    y = (e) => {
        var t;
        let n,
            i,
            o,
            { invite: c, disableUser: O = !1, error: y, flatActivityCount: N = !1, isRegister: C = !1, inUnclaimedFlow: A = !1 } = e,
            { currentUser: T } = (0, l.cj)([f.default], () => ({ currentUser: f.default.getCurrentUser() })),
            P = (0, d.WR)({ location: 'invite' }) && null != T;
        if (null == c) return null;
        let Z = null != c.guild ? (_.lM(c.guild) ? c.guild : _.Qs(c.guild)) : null,
            R = null != c.channel ? (0, g.jD)(c.channel) : null,
            w = null != c.target_application ? new p.ZP(c.target_application) : null,
            L = O || null == c.inviter ? null : new m.Z(c.inviter),
            D = !((null != c.approximate_member_count && c.approximate_member_count > 100) || (null != Z && Z.features.has(b.oNc.COMMUNITY))) && null != L,
            k = null,
            M = !1;
        if (null != Z)
            ((k = null == L ? I.intl.string(I.t['3rE1Pz']) : I.intl.formatToPlainString(I.t['5u47vb'], { username: x.ZP.getFormattedName(L) })),
                c.target_type === v.Iq.STREAM && null != c.target_user && (k = I.intl.formatToPlainString(I.t.x2L32d, { username: x.ZP.getFormattedName(c.target_user) })),
                c.target_type === v.Iq.EMBEDDED_APPLICATION && null != c.target_application && (k = null != L ? I.intl.formatToPlainString(I.t.UW1Cam, { username: x.ZP.getFormattedName(L) }) : I.intl.string(I.t.ENSuNz)),
                D &&
                    null == w &&
                    (n = (0, r.jsx)(a.Vj, {
                        className: j.icon,
                        guild: Z,
                        size: a.Vj.Sizes.SMALL
                    })),
                (i = Z.name),
                null != w &&
                    ((i = w.name),
                    (o = (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(a.DK, {
                                className: j.appIn,
                                children: I.intl.string(I.t['3gg9fH'])
                            }),
                            (0, r.jsxs)('div', {
                                className: j.guildContainer,
                                children: [
                                    (0, r.jsx)(a.Vj, {
                                        guild: Z,
                                        size: a.Vj.Sizes.SMALL
                                    }),
                                    (0, r.jsx)(s.Text, {
                                        tag: 'span',
                                        variant: 'text-lg/normal',
                                        color: 'header-primary',
                                        className: j.appGuildName,
                                        children: Z.name
                                    })
                                ]
                            })
                        ]
                    }))));
        else if (null != R) {
            if (null == L) throw Error('no inviter in group DM invite');
            let e = x.ZP.getFormattedName(L);
            null != R.name && '' !== R.name
                ? ((k = I.intl.formatToPlainString(I.t['5u47vb'], { username: e })),
                  (i = R.name),
                  null != R.icon &&
                      (n = (0, r.jsx)(a.MC, {
                          channel: R,
                          size: s.EFr.SIZE_32
                      })))
                : ((k = I.intl.string(I.t.OsdY8P)), (i = e));
        } else if (null != L) {
            let e = x.ZP.getFormattedName(L, !0);
            ((i = I.intl.formatToPlainString(I.t['4aF92d'], { username: e })),
                (M = !0),
                (o =
                    null != y
                        ? null
                        : (0, r.jsx)(a.DK, {
                              className: j.directInviteSubTitle,
                              children: C ? I.intl.format(I.t['6r4JiY'], { username: e }) : I.intl.format(I.t.Quj7HR, { username: e })
                          })));
        }
        return (0, r.jsxs)('div', {
            className: j.container,
            children: [
                (0, r.jsx)(S, {
                    application: w,
                    guild: Z,
                    user: D ? L : null,
                    compact: M
                }),
                null != y
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsx)(a.DK, { children: I.intl.string(I.t.mDFGFh) }), (0, r.jsx)(a.Dx, { children: y })]
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(a.DK, { children: k }),
                              (0, r.jsxs)(a.Dx, {
                                  className: j.title,
                                  children: [
                                      null != Z
                                          ? (0, r.jsx)(u.Z, {
                                                guild: Z,
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
                o,
                null != w || M || (null == c || null == (t = c.guild) ? void 0 : t.id) === E.fQ
                    ? null
                    : (0, r.jsx)(a.EJ, {
                          className: j.activityCount,
                          online: c.approximate_presence_count,
                          total: c.approximate_member_count,
                          flat: N
                      }),
                !A && P ? (0, r.jsx)(h.R, {}) : (0, r.jsx)(a.jQ, { user: T })
            ]
        });
    };
