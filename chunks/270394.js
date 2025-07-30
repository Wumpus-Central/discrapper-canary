(n.d(t, { Z: () => X }), n(997841), n(388685));
var i = n(255367),
    r = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(512722),
    s = n.n(a),
    c = n(392711),
    d = n.n(c),
    u = n(533800),
    p = n(442837),
    m = n(692547),
    b = n(755721),
    g = n(481060),
    f = n(447543),
    h = n(240872),
    x = n(225433),
    j = n(129861),
    v = n(493544),
    O = n(700582),
    y = n(410030),
    _ = n(835473),
    C = n(933557),
    N = n(346486),
    S = n(600164),
    Z = n(925329),
    I = n(666657),
    E = n(664452),
    w = n(560114),
    T = n(685929),
    P = n(592125),
    k = n(699516),
    A = n(594174),
    D = n(630388),
    R = n(965638),
    L = n(757539),
    M = n(981631),
    B = n(388032),
    U = n(541056),
    W = n(588866),
    H = n(20493);
function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let F = {
        INVITER: 3,
        INVITE_CODE: 3,
        USES: 1,
        EXPIRES: 2
    },
    V = {
        HEADER: 0,
        ACTIONS_V1: 1,
        ACTIONS_V2: 2,
        TABLE: 3
    };
function K(e) {
    let { isDisabled: t, inviter: n, showChannel: r, channel: l, inviteSource: a, inviteSourceTrailingContent: s, uses: c, expiresAt: d, onRevokeInvite: u } = e;
    return (0, i.jsxs)(S.Z, {
        className: o()(U.inviteSettingsInviteRow, W.card, { [U.inviteDisabledRow]: t }),
        children: [
            (0, i.jsxs)(S.Z, {
                grow: F.INVITER,
                basis: 0,
                align: S.Z.Align.CENTER,
                className: U.text,
                children: [
                    null != n &&
                        (0, i.jsx)(O.Z, {
                            user: n,
                            size: g.EFr.SIZE_24,
                            className: U.avatar
                        }),
                    (0, i.jsxs)('div', {
                        children: [
                            null != n &&
                                (0, i.jsx)(j.Z, {
                                    discriminatorClass: U.discriminator,
                                    user: n
                                }),
                            r &&
                                null != l &&
                                (0, i.jsx)(g.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'header-secondary',
                                    children: (0, C.F6)(l, A.default, k.Z, !0)
                                })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(S.Z, {
                grow: F.INVITE_CODE,
                shrink: 1,
                basis: 0,
                align: S.Z.Align.CENTER,
                className: U.text,
                children: (0, i.jsxs)('div', {
                    className: U.inviteSourceContainer,
                    children: [a, s]
                })
            }),
            (0, i.jsx)(S.Z, {
                grow: F.USES,
                basis: 0,
                align: S.Z.Align.CENTER,
                className: U.text,
                children: (0, i.jsx)(g.Text, {
                    className: U.uses,
                    variant: 'text-sm/normal',
                    children: c
                })
            }),
            (0, i.jsx)(S.Z, {
                grow: F.EXPIRES,
                basis: 0,
                align: S.Z.Align.CENTER,
                className: o()(U.text, U.countdownColumn),
                children: (0, i.jsx)(g.Text, {
                    className: U.countdown,
                    variant: 'text-sm/normal',
                    children: d
                })
            }),
            (0, i.jsx)(x.Z, {
                className: U.revokeInvite,
                onClick: u
            })
        ]
    });
}
function q(e) {
    var t;
    let { invite: n, showChannel: r = !1, inviteDisabled: l = !1, hide: o = !1 } = e,
        a = n.uses;
    return (
        n.maxUses > 0 && (a = ''.concat(n.uses, '/').concat(n.maxUses)),
        (0, i.jsx)(K, {
            isDisabled: l,
            inviter: n.inviter,
            showChannel: r,
            channel: n.channel,
            inviteSource: (0, i.jsx)(g.Text, {
                className: U.inviteCode,
                variant: 'text-sm/normal',
                children: o ? '...' : n.code
            }),
            inviteSourceTrailingContent:
                !o && (0, D.yE)(null != (t = n.flags) ? t : 0, u.$.IS_APPLICATION_BYPASS)
                    ? (0, i.jsxs)('div', {
                          className: U.bypass,
                          children: [
                              (0, i.jsx)(g.Text, {
                                  className: U.text,
                                  variant: 'text-xs/normal',
                                  color: 'text-muted',
                                  children: B.intl.string(B.t['1i1bUl'])
                              }),
                              (0, i.jsx)(g.ua7, {
                                  text: B.intl.string(B.t['jvd/LC']),
                                  children: (e) =>
                                      (0, i.jsx)(
                                          g.d3s,
                                          z(
                                              G(
                                                  {
                                                      size: 'xxs',
                                                      color: 'currentColor'
                                                  },
                                                  e
                                              ),
                                              { className: U.infoIcon }
                                          )
                                      )
                              })
                          ]
                      })
                    : null,
            uses: a,
            expiresAt: (0, i.jsx)(N.Z, { deadline: n.getExpiresAt() }),
            onRevokeInvite: () => {
                f.ZP.revokeInvite(n);
            }
        })
    );
}
function Y(e) {
    let { applicationId: t, channel: r, showChannel: l = !1, inviteDisabled: o = !1 } = e,
        a = (0, _.q)(t),
        s = (0, p.e7)([A.default], () => {
            var e;
            return A.default.getUser(null == (e = r.linkedLobby) ? void 0 : e.linked_by);
        }),
        c = (0, T.Y)(r);
    return (0, i.jsx)(K, {
        isDisabled: o,
        inviter: s,
        showChannel: l,
        channel: r,
        inviteSource: (0, i.jsxs)('div', {
            className: U.linkedChannelJoinSource,
            children: [
                (0, i.jsx)(Z.Z, {
                    game: a,
                    size: Z.Z.Sizes.XXSMALL
                }),
                (0, i.jsx)(g.Text, {
                    className: U.linkedChannelJoinSourceText,
                    variant: 'text-sm/normal',
                    children: null == a ? void 0 : a.name
                })
            ]
        }),
        uses: B.intl.string(B.t.jHpxws),
        expiresAt: B.intl.string(B.t.PqEzn5),
        onRevokeInvite: () => {
            if (!c || null == a)
                return void h.Z.show({
                    title: B.intl.string(B.t.JmUENj),
                    body: B.intl.string(B.t.SrvsMD)
                });
            (0, g.ZDy)(async () => {
                let { default: e } = await n.e('30019').then(n.bind(n, 719498));
                return (t) =>
                    (0, i.jsx)(
                        e,
                        z(G({}, t), {
                            channel: r,
                            application: a
                        })
                    );
            });
        }
    });
}
function X(e) {
    let { invites: t, guild: l, hide: o, canCreateInvites: a, withV2Actions: c, channel: u = null, showChannel: f = !1, loading: h = !1 } = e;
    s()(null != l, 'guild is required');
    let x = (0, y.ZP)(),
        j = (0, R.MQ)(l),
        O = (0, R.O4)(l),
        _ = r.useMemo(
            () =>
                null == t || h
                    ? []
                    : d()(t)
                          .sortBy((e) => {
                              var t, n;
                              return (null != (n = null == (t = e.inviter) ? void 0 : t.username) ? n : '').toLowerCase();
                          })
                          .value(),
            [t, h]
        ),
        C = (0, p.Wu)([P.Z], () => P.Z.getSortedLinkedChannelsForGuild(l.id).filter((e) => null == u || e.id === u.id)),
        N = r.useMemo(
            () =>
                h
                    ? []
                    : [
                          ..._.map((e) => ({
                              type: 'invite',
                              data: e
                          })),
                          ...C.map((e) => ({
                              type: 'channel',
                              data: e
                          }))
                      ],
            [_, C, h]
        ),
        Z = () => {
            (0, g.ZDy)(
                async () => (e) =>
                    (0, i.jsx)(
                        w.default,
                        z(G({}, e), {
                            channel: u,
                            guild: l,
                            source: M.t4x.SETTINGS_INVITE
                        })
                    )
            );
        },
        [T, k] = r.useState(62),
        A = () => {
            let e = { source: I.Zu.GUILD_SETTINGS };
            (0, g.ZDy)(
                async () => (t) =>
                    (0, i.jsx)(
                        E.default,
                        z(G({}, t), {
                            guildId: l.id,
                            analyticsData: e
                        })
                    )
            );
        };
    return (0, i.jsx)(v.Xi, {
        sections: [1, +!c, +!!c, Math.max(1, N.length)],
        renderSection: (e) => {
            let { section: t } = e;
            if (t === V.TABLE)
                if (0 === N.length && !h)
                    return (0, i.jsx)(
                        'div',
                        {
                            children: (0, i.jsxs)(g.ubH, {
                                theme: x,
                                children: [
                                    (0, i.jsx)(g.oxh, {
                                        darkSrc: n(914814),
                                        lightSrc: n(370392),
                                        width: 256,
                                        height: 130
                                    }),
                                    (0, i.jsx)(g.OZU, {
                                        note: B.intl.string(B.t.F53CAQ),
                                        children: B.intl.string(B.t['+nLJkZ'])
                                    })
                                ]
                            })
                        },
                        'empty-state'
                    );
                else
                    return (0, i.jsxs)(
                        S.Z,
                        {
                            children: [
                                (0, i.jsx)(S.Z.Child, {
                                    grow: F.INVITER,
                                    basis: 0,
                                    className: H.marginReset,
                                    children: (0, i.jsx)(g.vwX, { children: B.intl.string(B.t.EgHyKy) })
                                }),
                                (0, i.jsx)(S.Z.Child, {
                                    basis: 0,
                                    grow: F.INVITE_CODE,
                                    className: H.marginReset,
                                    children: (0, i.jsx)(g.vwX, { children: C.length > 0 ? B.intl.string(B.t.l7VISU) : B.intl.string(B.t.LBlFEB) })
                                }),
                                (0, i.jsx)(S.Z.Child, {
                                    grow: F.USES,
                                    basis: 0,
                                    children: (0, i.jsx)(g.vwX, { children: B.intl.string(B.t.erWrmJ) })
                                }),
                                (0, i.jsx)(S.Z.Child, {
                                    grow: F.EXPIRES,
                                    basis: 0,
                                    children: (0, i.jsx)(g.vwX, { children: B.intl.string(B.t['1aM27e']) })
                                })
                            ]
                        },
                        'table-header'
                    );
            return null;
        },
        renderRow: (e) => {
            let { section: t, row: n } = e;
            if (t === V.HEADER)
                return (0, i.jsx)(g.X6q, {
                    variant: 'heading-lg/semibold',
                    color: 'header-primary',
                    className: U.header,
                    children: B.intl.string(B.t['9F90iY'])
                });
            if (t === V.ACTIONS_V1)
                return (0, i.jsxs)(
                    g.hjN,
                    {
                        className: U.actions,
                        children: [
                            (0, i.jsx)(g.R94, {
                                className: H.marginBottom20,
                                type: g.geA.DESCRIPTION,
                                children: !0 === a ? B.intl.format(B.t['97VdNj'], { onCreateInvite: Z }) : B.intl.string(B.t.WDw38P)
                            }),
                            (0, i.jsxs)('div', {
                                className: U.inviteDisabledContainer,
                                children: [
                                    (0, i.jsx)(b.zx, {
                                        size: b.zx.Sizes.SMALL,
                                        color: O ? b.zx.Colors.BRAND : b.zx.Colors.RED,
                                        disabled: !j,
                                        onClick: A,
                                        children: O ? B.intl.string(B.t['/dbw3N']) : B.intl.string(B.t.Uwsjn5)
                                    }),
                                    O &&
                                        (0, i.jsxs)('div', {
                                            className: U.inviteDisabledTip,
                                            children: [
                                                (0, i.jsx)(g.Mgn, {
                                                    size: 'custom',
                                                    width: 20,
                                                    height: 20,
                                                    color: m.Z.unsafe_rawColors.YELLOW_300.css
                                                }),
                                                (0, i.jsx)(g.Text, {
                                                    variant: 'text-sm/normal',
                                                    children: B.intl.string(B.t['2LLbj4'])
                                                })
                                            ]
                                        })
                                ]
                            }),
                            (0, i.jsx)(g.$i$, { className: U.headerDivider })
                        ]
                    },
                    'header'
                );
            if (t === V.ACTIONS_V2)
                return (0, i.jsx)(
                    L.Y,
                    {
                        hasInvites: _.length > 0,
                        setHeight: k,
                        onShowDisableInvites: A,
                        onShowInviteModal: Z,
                        hasInviteDisabledPermission: j,
                        invitesDisabled: O,
                        canCreateInvites: a
                    },
                    'actions-v2'
                );
            if (t === V.TABLE) {
                if (0 === N.length && 0 === n && h)
                    return (0, i.jsx)(
                        g.$jN,
                        {
                            className: H.marginTop20,
                            type: g.$jN.Type.SPINNING_CIRCLE
                        },
                        'spinner'
                    );
                let e = N[n];
                switch (null == e ? void 0 : e.type) {
                    case 'invite':
                        return (0, i.jsx)(
                            q,
                            {
                                hide: o,
                                invite: e.data,
                                showChannel: f,
                                inviteDisabled: O
                            },
                            e.data.code
                        );
                    case 'channel':
                        var r;
                        return (0, i.jsx)(
                            Y,
                            {
                                applicationId: null == (r = e.data.linkedLobby) ? void 0 : r.application_id,
                                channel: e.data,
                                showChannel: f,
                                inviteDisabled: O
                            },
                            e.data.id
                        );
                    default:
                        return null;
                }
            }
        },
        rowHeight: (e, t) => (e === V.HEADER ? 64 : e === V.ACTIONS_V1 ? 109 : e === V.ACTIONS_V2 ? T : e === V.TABLE ? (0 === N.length && 0 === t && h ? 62 : 62 * (null != N[t])) : 0),
        sectionHeight: (e) => (e === V.TABLE ? (0 !== N.length || h ? 28 : 240) : 0)
    });
}
