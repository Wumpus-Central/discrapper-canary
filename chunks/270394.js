n.d(t, { Z: () => B }), n(789020);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(512722),
    o = n.n(s),
    d = n(392711),
    c = n.n(d),
    u = n(533800),
    m = n(399606),
    h = n(692547),
    x = n(481060),
    p = n(447543),
    g = n(225433),
    f = n(129861),
    b = n(493544),
    v = n(700582),
    _ = n(410030),
    j = n(933557),
    N = n(346486),
    C = n(600164),
    I = n(666657),
    Z = n(487419),
    T = n(664452),
    E = n(560114),
    S = n(699516),
    y = n(594174),
    A = n(630388),
    k = n(965638),
    R = n(981631),
    L = n(388032),
    O = n(170465),
    w = n(684309),
    P = n(232186);
let D = {
    INVITER: 3,
    INVITE_CODE: 3,
    USES: 1,
    EXPIRES: 2
};
function M(e) {
    var t;
    let { invite: n, showChannel: l = !1, inviteDisabled: a = !1, hide: s = !1 } = e,
        o = n.uses;
    return (
        n.maxUses > 0 && (o = ''.concat(n.uses, '/').concat(n.maxUses)),
        (0, i.jsxs)(C.Z, {
            className: r()(O.inviteSettingsInviteRow, w.card, { [O.inviteDisabledRow]: a }),
            children: [
                (0, i.jsxs)(C.Z, {
                    grow: D.INVITER,
                    basis: 0,
                    align: C.Z.Align.CENTER,
                    className: r()(O.text),
                    children: [
                        null != n.inviter &&
                            (0, i.jsx)(v.Z, {
                                user: n.inviter,
                                size: x.EFr.SIZE_24,
                                className: O.avatar
                            }),
                        (0, i.jsxs)('div', {
                            children: [
                                null != n.inviter &&
                                    (0, i.jsx)(f.Z, {
                                        discriminatorClass: O.discriminator,
                                        user: n.inviter
                                    }),
                                l &&
                                    (0, i.jsx)(x.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        children: (0, j.F6)(n.channel, y.default, S.Z, !0)
                                    })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(C.Z, {
                    grow: D.INVITE_CODE,
                    shrink: 1,
                    basis: 0,
                    align: C.Z.Align.CENTER,
                    className: O.text,
                    children: (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(x.Text, {
                                className: O.inviteCode,
                                variant: 'text-sm/normal',
                                children: s ? '...' : n.code
                            }),
                            !s && (0, A.yE)(null !== (t = n.flags) && void 0 !== t ? t : 0, u.$.IS_APPLICATION_BYPASS)
                                ? (0, i.jsxs)('div', {
                                      className: O.bypass,
                                      children: [
                                          (0, i.jsx)(x.Text, {
                                              className: O.text,
                                              variant: 'text-xs/normal',
                                              color: 'text-muted',
                                              children: L.intl.string(L.t['1i1bUl'])
                                          }),
                                          (0, i.jsx)(x.ua7, {
                                              text: L.intl.string(L.t['jvd/LC']),
                                              children: (e) =>
                                                  (0, i.jsx)(x.d3s, {
                                                      size: 'xxs',
                                                      color: 'currentColor',
                                                      ...e,
                                                      className: O.infoIcon
                                                  })
                                          })
                                      ]
                                  })
                                : null
                        ]
                    })
                }),
                (0, i.jsx)(C.Z, {
                    grow: D.USES,
                    basis: 0,
                    align: C.Z.Align.CENTER,
                    className: r()(O.text),
                    children: (0, i.jsx)(x.Text, {
                        className: O.uses,
                        variant: 'text-sm/normal',
                        children: o
                    })
                }),
                (0, i.jsx)(C.Z, {
                    grow: D.EXPIRES,
                    basis: 0,
                    align: C.Z.Align.CENTER,
                    className: r()(O.text, O.countdownColumn),
                    children: (0, i.jsx)(x.Text, {
                        className: O.countdown,
                        variant: 'text-sm/normal',
                        children: (0, i.jsx)(N.Z, { deadline: n.getExpiresAt() })
                    })
                }),
                (0, i.jsx)(g.Z, {
                    className: O.revokeInvite,
                    onClick: () => {
                        p.Z.revokeInvite(n);
                    }
                })
            ]
        })
    );
}
function B(e) {
    let { invites: t, guild: a, hide: r, channel: s = null, showChannel: d = !1, loading: u = !1, canCreateInvites: p = !1 } = e;
    o()(null != a, 'guild is required');
    let g = (0, k.M)(a),
        f = (0, m.e7)([Z.Z], () => Z.Z.getGuildIncident(a.id)),
        v = a.hasFeature(R.oNc.INVITES_DISABLED) || ((null == f ? void 0 : f.invitesDisabledUntil) != null && new Date(f.invitesDisabledUntil) > new Date()),
        j = (0, _.ZP)(),
        N = l.useMemo(
            () =>
                null == t || u
                    ? []
                    : c()(t)
                          .sortBy((e) => {
                              var t, n;
                              return (null !== (n = null === (t = e.inviter) || void 0 === t ? void 0 : t.username) && void 0 !== n ? n : '').toLowerCase();
                          })
                          .value(),
            [t, u]
        ),
        S = () => {
            (0, x.ZDy)(
                async () => (e) =>
                    (0, i.jsx)(E.default, {
                        ...e,
                        channel: s,
                        guild: a,
                        source: R.t4x.SETTINGS_INVITE
                    })
            );
        },
        y = () => {
            let e = { source: I.Zu.GUILD_SETTINGS };
            (0, x.ZDy)(
                async () => (t) =>
                    (0, i.jsx)(T.default, {
                        ...t,
                        guildId: a.id,
                        analyticsData: e
                    })
            );
        };
    return (0, i.jsx)(b.Xi, {
        sections: [Math.max(1, N.length)],
        renderSection: () => {
            let e;
            return (
                (e =
                    0 !== N.length || u
                        ? (0, i.jsxs)(C.Z, {
                              children: [
                                  (0, i.jsx)(C.Z.Child, {
                                      grow: D.INVITER,
                                      basis: 0,
                                      className: P.marginReset,
                                      children: (0, i.jsx)(x.vwX, { children: L.intl.string(L.t.EgHyKy) })
                                  }),
                                  (0, i.jsx)(C.Z.Child, {
                                      basis: 0,
                                      grow: D.INVITE_CODE,
                                      className: P.marginReset,
                                      children: (0, i.jsx)(x.vwX, { children: L.intl.string(L.t.LBlFEB) })
                                  }),
                                  (0, i.jsx)(C.Z.Child, {
                                      grow: D.USES,
                                      basis: 0,
                                      children: (0, i.jsx)(x.vwX, { children: L.intl.string(L.t.erWrmJ) })
                                  }),
                                  (0, i.jsx)(C.Z.Child, {
                                      grow: D.EXPIRES,
                                      basis: 0,
                                      children: (0, i.jsx)(x.vwX, { children: L.intl.string(L.t['1aM27e']) })
                                  })
                              ]
                          })
                        : (0, i.jsxs)(x.ubH, {
                              theme: j,
                              children: [
                                  (0, i.jsx)(x.oxh, {
                                      darkSrc: n(914814),
                                      lightSrc: n(370392),
                                      width: 256,
                                      height: 130
                                  }),
                                  (0, i.jsx)(x.OZU, {
                                      note: L.intl.string(L.t.F53CAQ),
                                      children: L.intl.string(L.t['+nLJkZ'])
                                  })
                              ]
                          })),
                (0, i.jsx)(
                    x.hjN,
                    {
                        className: O.headerSection,
                        children: (0, i.jsxs)(x.y5t, {
                            component: (0, i.jsx)(x.vwX, {
                                tag: x.RB0.H1,
                                children: L.intl.string(L.t['9F90iY'])
                            }),
                            children: [
                                (0, i.jsx)(x.R94, {
                                    className: P.marginBottom20,
                                    type: x.geA.DESCRIPTION,
                                    children: p ? L.intl.format(L.t['97VdNj'], { onCreateInvite: S }) : L.intl.string(L.t.WDw38P)
                                }),
                                (0, i.jsxs)('div', {
                                    className: O.inviteDisabledContainer,
                                    children: [
                                        (0, i.jsx)(x.zxk, {
                                            size: x.zxk.Sizes.SMALL,
                                            color: v ? x.zxk.Colors.BRAND : x.zxk.Colors.RED,
                                            disabled: !g,
                                            onClick: y,
                                            children: v ? L.intl.string(L.t['/dbw3N']) : L.intl.string(L.t.Uwsjn5)
                                        }),
                                        v &&
                                            (0, i.jsxs)('div', {
                                                className: O.inviteDisabledTip,
                                                children: [
                                                    (0, i.jsx)(x.P4T, {
                                                        size: 'custom',
                                                        width: 20,
                                                        height: 20,
                                                        color: h.Z.unsafe_rawColors.YELLOW_300.css
                                                    }),
                                                    (0, i.jsx)(x.Text, {
                                                        variant: 'text-sm/normal',
                                                        children: L.intl.string(L.t['2LLbj4'])
                                                    })
                                                ]
                                            })
                                    ]
                                }),
                                (0, i.jsx)(x.$i$, { className: O.headerDivider }),
                                e
                            ]
                        })
                    },
                    'header'
                )
            );
        },
        renderRow: (e) => {
            let { section: t, row: n } = e;
            if (0 === N.length && 0 === n && u)
                return (0, i.jsx)(
                    x.$jN,
                    {
                        className: P.marginTop20,
                        type: x.$jN.Type.SPINNING_CIRCLE
                    },
                    'spinner'
                );
            if (t > 0) return null;
            let l = N[n];
            return null == l
                ? null
                : (0, i.jsx)(
                      M,
                      {
                          hide: r,
                          invite: l,
                          showChannel: d,
                          inviteDisabled: v
                      },
                      l.code
                  );
        },
        rowHeight: (e, t) => (e > 0 ? 0 : 0 === N.length && 0 === t && u ? 62 : null != N[t] ? 62 : 0),
        sectionHeight: () => (0 !== N.length || u ? 120 : 344)
    });
}
