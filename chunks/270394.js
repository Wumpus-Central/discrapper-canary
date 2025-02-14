n.d(t, { Z: () => B }), n(789020), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(512722),
    o = n.n(s),
    d = n(392711),
    c = n.n(d),
    u = n(533800),
    m = n(692547),
    h = n(481060),
    x = n(447543),
    g = n(225433),
    p = n(129861),
    f = n(493544),
    b = n(700582),
    v = n(410030),
    _ = n(933557),
    N = n(346486),
    j = n(600164),
    C = n(666657),
    I = n(664452),
    Z = n(560114),
    T = n(699516),
    E = n(594174),
    S = n(630388),
    y = n(965638),
    A = n(757539),
    k = n(981631),
    R = n(388032),
    L = n(494181),
    O = n(730533),
    w = n(483938);
let P = {
        INVITER: 3,
        INVITE_CODE: 3,
        USES: 1,
        EXPIRES: 2
    },
    D = {
        HEADER: 0,
        ACTIONS_V1: 1,
        ACTIONS_V2: 2,
        TABLE: 3
    };
function M(e) {
    var t;
    let { invite: n, showChannel: l = !1, inviteDisabled: a = !1, hide: s = !1 } = e,
        o = n.uses;
    return (
        n.maxUses > 0 && (o = ''.concat(n.uses, '/').concat(n.maxUses)),
        (0, i.jsxs)(j.Z, {
            className: r()(L.inviteSettingsInviteRow, O.card, { [L.inviteDisabledRow]: a }),
            children: [
                (0, i.jsxs)(j.Z, {
                    grow: P.INVITER,
                    basis: 0,
                    align: j.Z.Align.CENTER,
                    className: r()(L.text),
                    children: [
                        null != n.inviter &&
                            (0, i.jsx)(b.Z, {
                                user: n.inviter,
                                size: h.EFr.SIZE_24,
                                className: L.avatar
                            }),
                        (0, i.jsxs)('div', {
                            children: [
                                null != n.inviter &&
                                    (0, i.jsx)(p.Z, {
                                        discriminatorClass: L.discriminator,
                                        user: n.inviter
                                    }),
                                l &&
                                    (0, i.jsx)(h.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        children: (0, _.F6)(n.channel, E.default, T.Z, !0)
                                    })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(j.Z, {
                    grow: P.INVITE_CODE,
                    shrink: 1,
                    basis: 0,
                    align: j.Z.Align.CENTER,
                    className: L.text,
                    children: (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(h.Text, {
                                className: L.inviteCode,
                                variant: 'text-sm/normal',
                                children: s ? '...' : n.code
                            }),
                            !s && (0, S.yE)(null !== (t = n.flags) && void 0 !== t ? t : 0, u.$.IS_APPLICATION_BYPASS)
                                ? (0, i.jsxs)('div', {
                                      className: L.bypass,
                                      children: [
                                          (0, i.jsx)(h.Text, {
                                              className: L.text,
                                              variant: 'text-xs/normal',
                                              color: 'text-muted',
                                              children: R.intl.string(R.t['1i1bUl'])
                                          }),
                                          (0, i.jsx)(h.ua7, {
                                              text: R.intl.string(R.t['jvd/LC']),
                                              children: (e) =>
                                                  (0, i.jsx)(h.d3s, {
                                                      size: 'xxs',
                                                      color: 'currentColor',
                                                      ...e,
                                                      className: L.infoIcon
                                                  })
                                          })
                                      ]
                                  })
                                : null
                        ]
                    })
                }),
                (0, i.jsx)(j.Z, {
                    grow: P.USES,
                    basis: 0,
                    align: j.Z.Align.CENTER,
                    className: r()(L.text),
                    children: (0, i.jsx)(h.Text, {
                        className: L.uses,
                        variant: 'text-sm/normal',
                        children: o
                    })
                }),
                (0, i.jsx)(j.Z, {
                    grow: P.EXPIRES,
                    basis: 0,
                    align: j.Z.Align.CENTER,
                    className: r()(L.text, L.countdownColumn),
                    children: (0, i.jsx)(h.Text, {
                        className: L.countdown,
                        variant: 'text-sm/normal',
                        children: (0, i.jsx)(N.Z, { deadline: n.getExpiresAt() })
                    })
                }),
                (0, i.jsx)(g.Z, {
                    className: L.revokeInvite,
                    onClick: () => {
                        x.Z.revokeInvite(n);
                    }
                })
            ]
        })
    );
}
function B(e) {
    let { invites: t, guild: a, hide: r, canCreateInvites: s, withV2Actions: d, channel: u = null, showChannel: x = !1, loading: g = !1 } = e;
    o()(null != a, 'guild is required');
    let p = (0, v.ZP)(),
        b = (0, y.MQ)(a),
        _ = (0, y.O4)(a),
        N = l.useMemo(
            () =>
                null == t || g
                    ? []
                    : c()(t)
                          .sortBy((e) => {
                              var t, n;
                              return (null !== (n = null === (t = e.inviter) || void 0 === t ? void 0 : t.username) && void 0 !== n ? n : '').toLowerCase();
                          })
                          .value(),
            [t, g]
        ),
        T = () => {
            (0, h.ZDy)(
                async () => (e) =>
                    (0, i.jsx)(Z.default, {
                        ...e,
                        channel: u,
                        guild: a,
                        source: k.t4x.SETTINGS_INVITE
                    })
            );
        },
        [E, S] = l.useState(62),
        O = () => {
            let e = { source: C.Zu.GUILD_SETTINGS };
            (0, h.ZDy)(
                async () => (t) =>
                    (0, i.jsx)(I.default, {
                        ...t,
                        guildId: a.id,
                        analyticsData: e
                    })
            );
        };
    return (0, i.jsx)(f.Xi, {
        sections: [1, d ? 0 : 1, d ? 1 : 0, Math.max(1, N.length)],
        renderSection: (e) => {
            let { section: t } = e;
            return t === D.TABLE
                ? 0 !== N.length || g
                    ? (0, i.jsxs)(j.Z, {
                          children: [
                              (0, i.jsx)(j.Z.Child, {
                                  grow: P.INVITER,
                                  basis: 0,
                                  className: w.marginReset,
                                  children: (0, i.jsx)(h.vwX, { children: R.intl.string(R.t.EgHyKy) })
                              }),
                              (0, i.jsx)(j.Z.Child, {
                                  basis: 0,
                                  grow: P.INVITE_CODE,
                                  className: w.marginReset,
                                  children: (0, i.jsx)(h.vwX, { children: R.intl.string(R.t.LBlFEB) })
                              }),
                              (0, i.jsx)(j.Z.Child, {
                                  grow: P.USES,
                                  basis: 0,
                                  children: (0, i.jsx)(h.vwX, { children: R.intl.string(R.t.erWrmJ) })
                              }),
                              (0, i.jsx)(j.Z.Child, {
                                  grow: P.EXPIRES,
                                  basis: 0,
                                  children: (0, i.jsx)(h.vwX, { children: R.intl.string(R.t['1aM27e']) })
                              })
                          ]
                      })
                    : (0, i.jsx)('div', {
                          children: (0, i.jsxs)(h.ubH, {
                              theme: p,
                              children: [
                                  (0, i.jsx)(h.oxh, {
                                      darkSrc: n(914814),
                                      lightSrc: n(370392),
                                      width: 256,
                                      height: 130
                                  }),
                                  (0, i.jsx)(h.OZU, {
                                      note: R.intl.string(R.t.F53CAQ),
                                      children: R.intl.string(R.t['+nLJkZ'])
                                  })
                              ]
                          })
                      })
                : null;
        },
        renderRow: (e) => {
            let { section: t, row: n } = e;
            if (t === D.HEADER)
                return (0, i.jsx)(h.X6q, {
                    variant: 'heading-lg/semibold',
                    color: 'header-primary',
                    className: L.header,
                    children: R.intl.string(R.t['9F90iY'])
                });
            if (t === D.ACTIONS_V1)
                return (0, i.jsxs)(
                    h.hjN,
                    {
                        className: L.actions,
                        children: [
                            (0, i.jsx)(h.R94, {
                                className: w.marginBottom20,
                                type: h.geA.DESCRIPTION,
                                children: !0 === s ? R.intl.format(R.t['97VdNj'], { onCreateInvite: T }) : R.intl.string(R.t.WDw38P)
                            }),
                            (0, i.jsxs)('div', {
                                className: L.inviteDisabledContainer,
                                children: [
                                    (0, i.jsx)(h.zxk, {
                                        size: h.zxk.Sizes.SMALL,
                                        color: _ ? h.zxk.Colors.BRAND : h.zxk.Colors.RED,
                                        disabled: !b,
                                        onClick: O,
                                        children: _ ? R.intl.string(R.t['/dbw3N']) : R.intl.string(R.t.Uwsjn5)
                                    }),
                                    _ &&
                                        (0, i.jsxs)('div', {
                                            className: L.inviteDisabledTip,
                                            children: [
                                                (0, i.jsx)(h.P4T, {
                                                    size: 'custom',
                                                    width: 20,
                                                    height: 20,
                                                    color: m.Z.unsafe_rawColors.YELLOW_300.css
                                                }),
                                                (0, i.jsx)(h.Text, {
                                                    variant: 'text-sm/normal',
                                                    children: R.intl.string(R.t['2LLbj4'])
                                                })
                                            ]
                                        })
                                ]
                            }),
                            (0, i.jsx)(h.$i$, { className: L.headerDivider })
                        ]
                    },
                    'header'
                );
            if (t === D.ACTIONS_V2)
                return (0, i.jsx)(A.Y, {
                    hasInvites: N.length > 0,
                    setHeight: S,
                    onShowDisableInvites: O,
                    onShowInviteModal: T,
                    hasInviteDisabledPermission: b,
                    invitesDisabled: _,
                    canCreateInvites: s
                });
            if (t === D.TABLE) {
                if (0 === N.length && 0 === n && g)
                    return (0, i.jsx)(
                        h.$jN,
                        {
                            className: w.marginTop20,
                            type: h.$jN.Type.SPINNING_CIRCLE
                        },
                        'spinner'
                    );
                let e = N[n];
                return null == e
                    ? null
                    : (0, i.jsx)(
                          M,
                          {
                              hide: r,
                              invite: e,
                              showChannel: x,
                              inviteDisabled: _
                          },
                          e.code
                      );
            }
        },
        rowHeight: (e, t) => (e === D.HEADER ? 64 : e === D.ACTIONS_V1 ? 109 : e === D.ACTIONS_V2 ? E : e === D.TABLE ? (0 === N.length && 0 === t && g ? 62 : null != N[t] ? 62 : 0) : 0),
        sectionHeight: (e) => (e === D.TABLE ? (0 !== N.length || g ? 28 : 240) : 0)
    });
}
