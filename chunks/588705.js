n.d(t, {
    R: () => S,
    Z: () => A
}),
    n(411104);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(388905),
    s = n(686546),
    c = n(925329),
    d = n(372769),
    u = n(44609),
    h = n(47343),
    _ = n(973616),
    m = n(131704),
    g = n(601964),
    p = n(598077),
    f = n(594174),
    E = n(51144),
    x = n(981631),
    I = n(888592),
    C = n(245335),
    v = n(388032),
    N = n(732058);
let S = () =>
        (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(o.qE, {
                    src: null,
                    size: a.EFr.DEPRECATED_SIZE_100,
                    className: N.avatar
                }),
                (0, i.jsx)(o.DK, { children: v.intl.string(v.t['3rE1Pz']) }),
                (0, i.jsx)(o.Dx, {
                    className: N.inviteResolvingGuildName,
                    children: v.intl.string(v.t.ZTNur6)
                })
            ]
        }),
    T = (e) => {
        let { guild: t, user: n, application: r, compact: l } = e;
        return null != r
            ? (0, i.jsx)(c.Z, {
                  className: N.appIcon,
                  game: r,
                  size: N.appIconSize
              })
            : null != n
              ? (0, i.jsx)(o.qE, {
                    src: null != n ? n.getAvatarURL(void 0, 80) : null,
                    size: a.EFr.SIZE_80,
                    className: l ? N.compactAvatar : N.avatar
                })
              : null != t
                ? (0, i.jsx)(s.ZP, {
                      mask: s.ZP.Masks.SQUIRCLE,
                      width: 64,
                      height: 64,
                      className: N.guildIcon,
                      children: (0, i.jsx)(o.Vj, {
                          guild: t,
                          size: o.Vj.Sizes.LARGER,
                          animate: !0
                      })
                  })
                : null;
    },
    A = (e) => {
        var t;
        let n,
            r,
            s,
            { invite: c, disableUser: S = !1, error: A, flatActivityCount: b = !1, isRegister: R = !1 } = e,
            Z = (0, u.WR)({ location: 'invite' }),
            { currentUser: O } = (0, l.cj)([f.default], () => ({ currentUser: f.default.getCurrentUser() }));
        if (null == c) return null;
        let j = null != c.guild ? new g.ZP(c.guild) : null,
            L = null != c.channel ? (0, m.jD)(c.channel) : null,
            y = null != c.target_application ? new _.ZP(c.target_application) : null,
            P = S || null == c.inviter ? null : new p.Z(c.inviter),
            D = !((null != c.approximate_member_count && c.approximate_member_count > 100) || (null != j && j.hasFeature(x.oNc.COMMUNITY))) && null != P,
            k = null,
            w = !1;
        if (null != j)
            (k = null == P ? v.intl.string(v.t['3rE1Pz']) : v.intl.formatToPlainString(v.t['5u47vb'], { username: E.ZP.getFormattedName(P) })),
                c.target_type === C.Iq.STREAM && null != c.target_user && (k = v.intl.formatToPlainString(v.t.x2L32d, { username: E.ZP.getFormattedName(c.target_user) })),
                c.target_type === C.Iq.EMBEDDED_APPLICATION && null != c.target_application && (k = null != P ? v.intl.formatToPlainString(v.t.UW1Cam, { username: E.ZP.getFormattedName(P) }) : v.intl.string(v.t.ENSuNz)),
                D &&
                    null == y &&
                    (n = (0, i.jsx)(o.Vj, {
                        className: N.icon,
                        guild: j,
                        size: o.Vj.Sizes.SMALL
                    })),
                (r = j.name),
                null != y &&
                    ((r = y.name),
                    (s = (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(o.DK, {
                                className: N.appIn,
                                children: v.intl.string(v.t['3gg9fH'])
                            }),
                            (0, i.jsxs)('div', {
                                className: N.guildContainer,
                                children: [
                                    (0, i.jsx)(o.Vj, {
                                        guild: j,
                                        size: o.Vj.Sizes.SMALL
                                    }),
                                    (0, i.jsx)(a.Text, {
                                        tag: 'span',
                                        variant: 'text-lg/normal',
                                        color: 'header-primary',
                                        className: N.appGuildName,
                                        children: j.name
                                    })
                                ]
                            })
                        ]
                    })));
        else if (null != L) {
            if (null == P) throw Error('no inviter in group DM invite');
            let e = E.ZP.getFormattedName(P);
            null != L.name && '' !== L.name
                ? ((k = v.intl.formatToPlainString(v.t['5u47vb'], { username: e })),
                  (r = L.name),
                  null != L.icon &&
                      (n = (0, i.jsx)(o.MC, {
                          channel: L,
                          size: a.EFr.SIZE_32
                      })))
                : ((k = v.intl.string(v.t.OsdY8P)), (r = e));
        } else if (null != P) {
            let e = E.ZP.getFormattedName(P, !0);
            (r = v.intl.formatToPlainString(v.t['4aF92d'], { username: e })),
                (w = !0),
                (s =
                    null != A
                        ? null
                        : (0, i.jsx)(o.DK, {
                              className: N.directInviteSubTitle,
                              children: R ? v.intl.format(v.t['6r4JiY'], { username: e }) : v.intl.format(v.t.Quj7HR, { username: e })
                          }));
        }
        return (0, i.jsxs)('div', {
            className: N.container,
            children: [
                (0, i.jsx)(T, {
                    application: y,
                    guild: j,
                    user: D ? P : null,
                    compact: w
                }),
                null != A
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [(0, i.jsx)(o.DK, { children: v.intl.string(v.t.mDFGFh) }), (0, i.jsx)(o.Dx, { children: A })]
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(o.DK, { children: k }),
                              (0, i.jsxs)(o.Dx, {
                                  className: N.title,
                                  children: [
                                      null != j
                                          ? (0, i.jsx)(d.Z, {
                                                guild: j,
                                                className: N.guildBadge,
                                                tooltipPosition: 'left'
                                            })
                                          : null,
                                      n,
                                      r
                                  ]
                              })
                          ]
                      }),
                s,
                null != y || w || (null == c ? void 0 : null === (t = c.guild) || void 0 === t ? void 0 : t.id) === I.fQ
                    ? null
                    : (0, i.jsx)(o.EJ, {
                          className: N.activityCount,
                          online: c.approximate_presence_count,
                          total: c.approximate_member_count,
                          flat: b
                      }),
                Z ? (0, i.jsx)(h.R, {}) : (0, i.jsx)(o.jQ, { user: O })
            ]
        });
    };
