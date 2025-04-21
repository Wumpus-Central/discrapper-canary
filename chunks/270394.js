n.d(t, { Z: () => W }), n(997841), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(512722),
    s = n.n(a),
    c = n(392711),
    d = n.n(c),
    u = n(533800),
    p = n(692547),
    m = n(481060),
    b = n(447543),
    g = n(225433),
    f = n(129861),
    h = n(493544),
    x = n(700582),
    j = n(410030),
    O = n(933557),
    y = n(346486),
    v = n(600164),
    _ = n(666657),
    C = n(664452),
    N = n(560114),
    I = n(699516),
    S = n(594174),
    E = n(630388),
    P = n(965638),
    w = n(757539),
    T = n(981631),
    Z = n(388032),
    k = n(541056),
    A = n(588866),
    D = n(20493);
function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let M = {
        INVITER: 3,
        INVITE_CODE: 3,
        USES: 1,
        EXPIRES: 2
    },
    B = {
        HEADER: 0,
        ACTIONS_V1: 1,
        ACTIONS_V2: 2,
        TABLE: 3
    };
function U(e) {
    var t;
    let { invite: n, showChannel: i = !1, inviteDisabled: l = !1, hide: a = !1 } = e,
        s = n.uses;
    return (
        n.maxUses > 0 && (s = ''.concat(n.uses, '/').concat(n.maxUses)),
        (0, r.jsxs)(v.Z, {
            className: o()(k.inviteSettingsInviteRow, A.card, { [k.inviteDisabledRow]: l }),
            children: [
                (0, r.jsxs)(v.Z, {
                    grow: M.INVITER,
                    basis: 0,
                    align: v.Z.Align.CENTER,
                    className: k.text,
                    children: [
                        null != n.inviter &&
                            (0, r.jsx)(x.Z, {
                                user: n.inviter,
                                size: m.EFr.SIZE_24,
                                className: k.avatar
                            }),
                        (0, r.jsxs)('div', {
                            children: [
                                null != n.inviter &&
                                    (0, r.jsx)(f.Z, {
                                        discriminatorClass: k.discriminator,
                                        user: n.inviter
                                    }),
                                i &&
                                    (0, r.jsx)(m.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        children: (0, O.F6)(n.channel, S.default, I.Z, !0)
                                    })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)(v.Z, {
                    grow: M.INVITE_CODE,
                    shrink: 1,
                    basis: 0,
                    align: v.Z.Align.CENTER,
                    className: k.text,
                    children: (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(m.Text, {
                                className: k.inviteCode,
                                variant: 'text-sm/normal',
                                children: a ? '...' : n.code
                            }),
                            !a && (0, E.yE)(null != (t = n.flags) ? t : 0, u.$.IS_APPLICATION_BYPASS)
                                ? (0, r.jsxs)('div', {
                                      className: k.bypass,
                                      children: [
                                          (0, r.jsx)(m.Text, {
                                              className: k.text,
                                              variant: 'text-xs/normal',
                                              color: 'text-muted',
                                              children: Z.intl.string(Z.t['1i1bUl'])
                                          }),
                                          (0, r.jsx)(m.ua7, {
                                              text: Z.intl.string(Z.t['jvd/LC']),
                                              children: (e) =>
                                                  (0, r.jsx)(
                                                      m.d3s,
                                                      L(
                                                          R(
                                                              {
                                                                  size: 'xxs',
                                                                  color: 'currentColor'
                                                              },
                                                              e
                                                          ),
                                                          { className: k.infoIcon }
                                                      )
                                                  )
                                          })
                                      ]
                                  })
                                : null
                        ]
                    })
                }),
                (0, r.jsx)(v.Z, {
                    grow: M.USES,
                    basis: 0,
                    align: v.Z.Align.CENTER,
                    className: k.text,
                    children: (0, r.jsx)(m.Text, {
                        className: k.uses,
                        variant: 'text-sm/normal',
                        children: s
                    })
                }),
                (0, r.jsx)(v.Z, {
                    grow: M.EXPIRES,
                    basis: 0,
                    align: v.Z.Align.CENTER,
                    className: o()(k.text, k.countdownColumn),
                    children: (0, r.jsx)(m.Text, {
                        className: k.countdown,
                        variant: 'text-sm/normal',
                        children: (0, r.jsx)(y.Z, { deadline: n.getExpiresAt() })
                    })
                }),
                (0, r.jsx)(g.Z, {
                    className: k.revokeInvite,
                    onClick: () => {
                        b.ZP.revokeInvite(n);
                    }
                })
            ]
        })
    );
}
function W(e) {
    let { invites: t, guild: l, hide: o, canCreateInvites: a, withV2Actions: c, channel: u = null, showChannel: b = !1, loading: g = !1 } = e;
    s()(null != l, 'guild is required');
    let f = (0, j.ZP)(),
        x = (0, P.MQ)(l),
        O = (0, P.O4)(l),
        y = i.useMemo(
            () =>
                null == t || g
                    ? []
                    : d()(t)
                          .sortBy((e) => {
                              var t, n;
                              return (null != (n = null == (t = e.inviter) ? void 0 : t.username) ? n : '').toLowerCase();
                          })
                          .value(),
            [t, g]
        ),
        I = () => {
            (0, m.ZDy)(
                async () => (e) =>
                    (0, r.jsx)(
                        N.default,
                        L(R({}, e), {
                            channel: u,
                            guild: l,
                            source: T.t4x.SETTINGS_INVITE
                        })
                    )
            );
        },
        [S, E] = i.useState(62),
        A = () => {
            let e = { source: _.Zu.GUILD_SETTINGS };
            (0, m.ZDy)(
                async () => (t) =>
                    (0, r.jsx)(
                        C.default,
                        L(R({}, t), {
                            guildId: l.id,
                            analyticsData: e
                        })
                    )
            );
        };
    return (0, r.jsx)(h.Xi, {
        sections: [1, +!c, +!!c, Math.max(1, y.length)],
        renderSection: (e) => {
            let { section: t } = e;
            if (t === B.TABLE)
                if (0 === y.length && !g)
                    return (0, r.jsx)('div', {
                        children: (0, r.jsxs)(m.ubH, {
                            theme: f,
                            children: [
                                (0, r.jsx)(m.oxh, {
                                    darkSrc: n(914814),
                                    lightSrc: n(370392),
                                    width: 256,
                                    height: 130
                                }),
                                (0, r.jsx)(m.OZU, {
                                    note: Z.intl.string(Z.t.F53CAQ),
                                    children: Z.intl.string(Z.t['+nLJkZ'])
                                })
                            ]
                        })
                    });
                else
                    return (0, r.jsxs)(v.Z, {
                        children: [
                            (0, r.jsx)(v.Z.Child, {
                                grow: M.INVITER,
                                basis: 0,
                                className: D.marginReset,
                                children: (0, r.jsx)(m.vwX, { children: Z.intl.string(Z.t.EgHyKy) })
                            }),
                            (0, r.jsx)(v.Z.Child, {
                                basis: 0,
                                grow: M.INVITE_CODE,
                                className: D.marginReset,
                                children: (0, r.jsx)(m.vwX, { children: Z.intl.string(Z.t.LBlFEB) })
                            }),
                            (0, r.jsx)(v.Z.Child, {
                                grow: M.USES,
                                basis: 0,
                                children: (0, r.jsx)(m.vwX, { children: Z.intl.string(Z.t.erWrmJ) })
                            }),
                            (0, r.jsx)(v.Z.Child, {
                                grow: M.EXPIRES,
                                basis: 0,
                                children: (0, r.jsx)(m.vwX, { children: Z.intl.string(Z.t['1aM27e']) })
                            })
                        ]
                    });
            return null;
        },
        renderRow: (e) => {
            let { section: t, row: n } = e;
            if (t === B.HEADER)
                return (0, r.jsx)(m.X6q, {
                    variant: 'heading-lg/semibold',
                    color: 'header-primary',
                    className: k.header,
                    children: Z.intl.string(Z.t['9F90iY'])
                });
            if (t === B.ACTIONS_V1)
                return (0, r.jsxs)(
                    m.hjN,
                    {
                        className: k.actions,
                        children: [
                            (0, r.jsx)(m.R94, {
                                className: D.marginBottom20,
                                type: m.geA.DESCRIPTION,
                                children: !0 === a ? Z.intl.format(Z.t['97VdNj'], { onCreateInvite: I }) : Z.intl.string(Z.t.WDw38P)
                            }),
                            (0, r.jsxs)('div', {
                                className: k.inviteDisabledContainer,
                                children: [
                                    (0, r.jsx)(m.zxk, {
                                        size: m.zxk.Sizes.SMALL,
                                        color: O ? m.zxk.Colors.BRAND : m.zxk.Colors.RED,
                                        disabled: !x,
                                        onClick: A,
                                        children: O ? Z.intl.string(Z.t['/dbw3N']) : Z.intl.string(Z.t.Uwsjn5)
                                    }),
                                    O &&
                                        (0, r.jsxs)('div', {
                                            className: k.inviteDisabledTip,
                                            children: [
                                                (0, r.jsx)(m.P4T, {
                                                    size: 'custom',
                                                    width: 20,
                                                    height: 20,
                                                    color: p.Z.unsafe_rawColors.YELLOW_300.css
                                                }),
                                                (0, r.jsx)(m.Text, {
                                                    variant: 'text-sm/normal',
                                                    children: Z.intl.string(Z.t['2LLbj4'])
                                                })
                                            ]
                                        })
                                ]
                            }),
                            (0, r.jsx)(m.$i$, { className: k.headerDivider })
                        ]
                    },
                    'header'
                );
            if (t === B.ACTIONS_V2)
                return (0, r.jsx)(w.Y, {
                    hasInvites: y.length > 0,
                    setHeight: E,
                    onShowDisableInvites: A,
                    onShowInviteModal: I,
                    hasInviteDisabledPermission: x,
                    invitesDisabled: O,
                    canCreateInvites: a
                });
            if (t === B.TABLE) {
                if (0 === y.length && 0 === n && g)
                    return (0, r.jsx)(
                        m.$jN,
                        {
                            className: D.marginTop20,
                            type: m.$jN.Type.SPINNING_CIRCLE
                        },
                        'spinner'
                    );
                let e = y[n];
                return null == e
                    ? null
                    : (0, r.jsx)(
                          U,
                          {
                              hide: o,
                              invite: e,
                              showChannel: b,
                              inviteDisabled: O
                          },
                          e.code
                      );
            }
        },
        rowHeight: (e, t) => (e === B.HEADER ? 64 : e === B.ACTIONS_V1 ? 109 : e === B.ACTIONS_V2 ? S : e === B.TABLE ? (0 === y.length && 0 === t && g ? 62 : 62 * (null != y[t])) : 0),
        sectionHeight: (e) => (e === B.TABLE ? (0 !== y.length || g ? 28 : 240) : 0)
    });
}
