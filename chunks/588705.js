n.d(t, {
    R: () => j,
    Z: () => O
}),
    n(415506);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    l = n(388905),
    s = n(686546),
    c = n(925329),
    u = n(372769),
    d = n(44609),
    p = n(47343),
    g = n(973616),
    h = n(131704),
    f = n(601964),
    m = n(598077),
    _ = n(594174),
    b = n(51144),
    x = n(981631),
    N = n(888592),
    v = n(245335),
    E = n(388032),
    I = n(782770);
let j = () =>
        (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(l.qE, {
                    src: null,
                    size: a.EFr.DEPRECATED_SIZE_100,
                    className: I.avatar
                }),
                (0, r.jsx)(l.DK, { children: E.NW.string(E.t['3rE1Pz']) }),
                (0, r.jsx)(l.Dx, {
                    className: I.inviteResolvingGuildName,
                    children: E.NW.string(E.t.ZTNur6)
                })
            ]
        }),
    S = (e) => {
        let { guild: t, user: n, application: i, compact: o } = e;
        return null != i
            ? (0, r.jsx)(c.Z, {
                  className: I.appIcon,
                  game: i,
                  size: I.appIconSize
              })
            : null != n
              ? (0, r.jsx)(l.qE, {
                    src: null != n ? n.getAvatarURL(void 0, 80) : null,
                    size: a.EFr.SIZE_80,
                    className: o ? I.compactAvatar : I.avatar
                })
              : null != t
                ? (0, r.jsx)(s.ZP, {
                      mask: s.ZP.Masks.SQUIRCLE,
                      width: 64,
                      height: 64,
                      className: I.guildIcon,
                      children: (0, r.jsx)(l.Vj, {
                          guild: t,
                          size: l.Vj.Sizes.LARGER,
                          animate: !0
                      })
                  })
                : null;
    },
    O = (e) => {
        var t;
        let n,
            i,
            s,
            { invite: c, disableUser: j = !1, error: O, flatActivityCount: C = !1, isRegister: y = !1 } = e,
            T = (0, d.WR)({ location: 'invite' }),
            { currentUser: P } = (0, o.cj)([_.default], () => ({ currentUser: _.default.getCurrentUser() }));
        if (null == c) return null;
        let A = null != c.guild ? new f.ZP(c.guild) : null,
            Z = null != c.channel ? (0, h.jD)(c.channel) : null,
            R = null != c.target_application ? new g.ZP(c.target_application) : null,
            w = j || null == c.inviter ? null : new m.Z(c.inviter),
            L = !((null != c.approximate_member_count && c.approximate_member_count > 100) || (null != A && A.hasFeature(x.oNc.COMMUNITY))) && null != w,
            D = null,
            k = !1;
        if (null != A)
            (D = null == w ? E.NW.string(E.t['3rE1Pz']) : E.NW.formatToPlainString(E.t['5u47vb'], { username: b.ZP.getFormattedName(w) })),
                c.target_type === v.Iq.STREAM && null != c.target_user && (D = E.NW.formatToPlainString(E.t.x2L32d, { username: b.ZP.getFormattedName(c.target_user) })),
                c.target_type === v.Iq.EMBEDDED_APPLICATION && null != c.target_application && (D = null != w ? E.NW.formatToPlainString(E.t.UW1Cam, { username: b.ZP.getFormattedName(w) }) : E.NW.string(E.t.ENSuNz)),
                L &&
                    null == R &&
                    (n = (0, r.jsx)(l.Vj, {
                        className: I.icon,
                        guild: A,
                        size: l.Vj.Sizes.SMALL
                    })),
                (i = A.name),
                null != R &&
                    ((i = R.name),
                    (s = (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(l.DK, {
                                className: I.appIn,
                                children: E.NW.string(E.t['3gg9fH'])
                            }),
                            (0, r.jsxs)('div', {
                                className: I.guildContainer,
                                children: [
                                    (0, r.jsx)(l.Vj, {
                                        guild: A,
                                        size: l.Vj.Sizes.SMALL
                                    }),
                                    (0, r.jsx)(a.Text, {
                                        tag: 'span',
                                        variant: 'text-lg/normal',
                                        color: 'header-primary',
                                        className: I.appGuildName,
                                        children: A.name
                                    })
                                ]
                            })
                        ]
                    })));
        else if (null != Z) {
            if (null == w) throw Error('no inviter in group DM invite');
            let e = b.ZP.getFormattedName(w);
            null != Z.name && '' !== Z.name
                ? ((D = E.NW.formatToPlainString(E.t['5u47vb'], { username: e })),
                  (i = Z.name),
                  null != Z.icon &&
                      (n = (0, r.jsx)(l.MC, {
                          channel: Z,
                          size: a.EFr.SIZE_32
                      })))
                : ((D = E.NW.string(E.t.OsdY8P)), (i = e));
        } else if (null != w) {
            let e = b.ZP.getFormattedName(w, !0);
            (i = E.NW.formatToPlainString(E.t['4aF92d'], { username: e })),
                (k = !0),
                (s =
                    null != O
                        ? null
                        : (0, r.jsx)(l.DK, {
                              className: I.directInviteSubTitle,
                              children: y ? E.NW.format(E.t['6r4JiY'], { username: e }) : E.NW.format(E.t.Quj7HR, { username: e })
                          }));
        }
        return (0, r.jsxs)('div', {
            className: I.container,
            children: [
                (0, r.jsx)(S, {
                    application: R,
                    guild: A,
                    user: L ? w : null,
                    compact: k
                }),
                null != O
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsx)(l.DK, { children: E.NW.string(E.t.mDFGFh) }), (0, r.jsx)(l.Dx, { children: O })]
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(l.DK, { children: D }),
                              (0, r.jsxs)(l.Dx, {
                                  className: I.title,
                                  children: [
                                      null != A
                                          ? (0, r.jsx)(u.Z, {
                                                guild: A,
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
                s,
                null != R || k || (null == c || null == (t = c.guild) ? void 0 : t.id) === N.fQ
                    ? null
                    : (0, r.jsx)(l.EJ, {
                          className: I.activityCount,
                          online: c.approximate_presence_count,
                          total: c.approximate_member_count,
                          flat: C
                      }),
                T ? (0, r.jsx)(p.R, {}) : (0, r.jsx)(l.jQ, { user: P })
            ]
        });
    };
