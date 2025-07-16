(n.d(t, { Z: () => H }), n(997841), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(512722),
    s = n.n(a),
    c = n(392711),
    d = n.n(c),
    u = n(533800),
    p = n(692547),
    m = n(755721),
    b = n(481060),
    g = n(447543),
    f = n(225433),
    h = n(129861),
    x = n(493544),
    j = n(700582),
    O = n(410030),
    v = n(933557),
    y = n(346486),
    _ = n(600164),
    C = n(666657),
    N = n(664452),
    E = n(560114),
    I = n(699516),
    S = n(594174),
    T = n(630388),
    w = n(965638),
    P = n(757539),
    Z = n(981631),
    A = n(388032),
    k = n(541056),
    D = n(588866),
    R = n(20493);
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function M(e, t) {
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
let B = {
        INVITER: 3,
        INVITE_CODE: 3,
        USES: 1,
        EXPIRES: 2
    },
    U = {
        HEADER: 0,
        ACTIONS_V1: 1,
        ACTIONS_V2: 2,
        TABLE: 3
    };
function W(e) {
    var t;
    let { invite: n, showChannel: i = !1, inviteDisabled: l = !1, hide: a = !1 } = e,
        s = n.uses;
    return (
        n.maxUses > 0 && (s = ''.concat(n.uses, '/').concat(n.maxUses)),
        (0, r.jsxs)(_.Z, {
            className: o()(k.inviteSettingsInviteRow, D.card, { [k.inviteDisabledRow]: l }),
            children: [
                (0, r.jsxs)(_.Z, {
                    grow: B.INVITER,
                    basis: 0,
                    align: _.Z.Align.CENTER,
                    className: k.text,
                    children: [
                        null != n.inviter &&
                            (0, r.jsx)(j.Z, {
                                user: n.inviter,
                                size: b.EFr.SIZE_24,
                                className: k.avatar
                            }),
                        (0, r.jsxs)('div', {
                            children: [
                                null != n.inviter &&
                                    (0, r.jsx)(h.Z, {
                                        discriminatorClass: k.discriminator,
                                        user: n.inviter
                                    }),
                                i &&
                                    (0, r.jsx)(b.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        children: (0, v.F6)(n.channel, S.default, I.Z, !0)
                                    })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)(_.Z, {
                    grow: B.INVITE_CODE,
                    shrink: 1,
                    basis: 0,
                    align: _.Z.Align.CENTER,
                    className: k.text,
                    children: (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(b.Text, {
                                className: k.inviteCode,
                                variant: 'text-sm/normal',
                                children: a ? '...' : n.code
                            }),
                            !a && (0, T.yE)(null != (t = n.flags) ? t : 0, u.$.IS_APPLICATION_BYPASS)
                                ? (0, r.jsxs)('div', {
                                      className: k.bypass,
                                      children: [
                                          (0, r.jsx)(b.Text, {
                                              className: k.text,
                                              variant: 'text-xs/normal',
                                              color: 'text-muted',
                                              children: A.intl.string(A.t['1i1bUl'])
                                          }),
                                          (0, r.jsx)(b.ua7, {
                                              text: A.intl.string(A.t['jvd/LC']),
                                              children: (e) =>
                                                  (0, r.jsx)(
                                                      b.d3s,
                                                      M(
                                                          L(
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
                (0, r.jsx)(_.Z, {
                    grow: B.USES,
                    basis: 0,
                    align: _.Z.Align.CENTER,
                    className: k.text,
                    children: (0, r.jsx)(b.Text, {
                        className: k.uses,
                        variant: 'text-sm/normal',
                        children: s
                    })
                }),
                (0, r.jsx)(_.Z, {
                    grow: B.EXPIRES,
                    basis: 0,
                    align: _.Z.Align.CENTER,
                    className: o()(k.text, k.countdownColumn),
                    children: (0, r.jsx)(b.Text, {
                        className: k.countdown,
                        variant: 'text-sm/normal',
                        children: (0, r.jsx)(y.Z, { deadline: n.getExpiresAt() })
                    })
                }),
                (0, r.jsx)(f.Z, {
                    className: k.revokeInvite,
                    onClick: () => {
                        g.ZP.revokeInvite(n);
                    }
                })
            ]
        })
    );
}
function H(e) {
    let { invites: t, guild: l, hide: o, canCreateInvites: a, withV2Actions: c, channel: u = null, showChannel: g = !1, loading: f = !1 } = e;
    s()(null != l, 'guild is required');
    let h = (0, O.ZP)(),
        j = (0, w.MQ)(l),
        v = (0, w.O4)(l),
        y = i.useMemo(
            () =>
                null == t || f
                    ? []
                    : d()(t)
                          .sortBy((e) => {
                              var t, n;
                              return (null != (n = null == (t = e.inviter) ? void 0 : t.username) ? n : '').toLowerCase();
                          })
                          .value(),
            [t, f]
        ),
        I = () => {
            (0, b.ZDy)(
                async () => (e) =>
                    (0, r.jsx)(
                        E.default,
                        M(L({}, e), {
                            channel: u,
                            guild: l,
                            source: Z.t4x.SETTINGS_INVITE
                        })
                    )
            );
        },
        [S, T] = i.useState(62),
        D = () => {
            let e = { source: C.Zu.GUILD_SETTINGS };
            (0, b.ZDy)(
                async () => (t) =>
                    (0, r.jsx)(
                        N.default,
                        M(L({}, t), {
                            guildId: l.id,
                            analyticsData: e
                        })
                    )
            );
        };
    return (0, r.jsx)(x.Xi, {
        sections: [1, +!c, +!!c, Math.max(1, y.length)],
        renderSection: (e) => {
            let { section: t } = e;
            if (t === U.TABLE)
                if (0 === y.length && !f)
                    return (0, r.jsx)('div', {
                        children: (0, r.jsxs)(b.ubH, {
                            theme: h,
                            children: [
                                (0, r.jsx)(b.oxh, {
                                    darkSrc: n(914814),
                                    lightSrc: n(370392),
                                    width: 256,
                                    height: 130
                                }),
                                (0, r.jsx)(b.OZU, {
                                    note: A.intl.string(A.t.F53CAQ),
                                    children: A.intl.string(A.t['+nLJkZ'])
                                })
                            ]
                        })
                    });
                else
                    return (0, r.jsxs)(_.Z, {
                        children: [
                            (0, r.jsx)(_.Z.Child, {
                                grow: B.INVITER,
                                basis: 0,
                                className: R.marginReset,
                                children: (0, r.jsx)(b.vwX, { children: A.intl.string(A.t.EgHyKy) })
                            }),
                            (0, r.jsx)(_.Z.Child, {
                                basis: 0,
                                grow: B.INVITE_CODE,
                                className: R.marginReset,
                                children: (0, r.jsx)(b.vwX, { children: A.intl.string(A.t.LBlFEB) })
                            }),
                            (0, r.jsx)(_.Z.Child, {
                                grow: B.USES,
                                basis: 0,
                                children: (0, r.jsx)(b.vwX, { children: A.intl.string(A.t.erWrmJ) })
                            }),
                            (0, r.jsx)(_.Z.Child, {
                                grow: B.EXPIRES,
                                basis: 0,
                                children: (0, r.jsx)(b.vwX, { children: A.intl.string(A.t['1aM27e']) })
                            })
                        ]
                    });
            return null;
        },
        renderRow: (e) => {
            let { section: t, row: n } = e;
            if (t === U.HEADER)
                return (0, r.jsx)(b.X6q, {
                    variant: 'heading-lg/semibold',
                    color: 'header-primary',
                    className: k.header,
                    children: A.intl.string(A.t['9F90iY'])
                });
            if (t === U.ACTIONS_V1)
                return (0, r.jsxs)(
                    b.hjN,
                    {
                        className: k.actions,
                        children: [
                            (0, r.jsx)(b.R94, {
                                className: R.marginBottom20,
                                type: b.geA.DESCRIPTION,
                                children: !0 === a ? A.intl.format(A.t['97VdNj'], { onCreateInvite: I }) : A.intl.string(A.t.WDw38P)
                            }),
                            (0, r.jsxs)('div', {
                                className: k.inviteDisabledContainer,
                                children: [
                                    (0, r.jsx)(m.zx, {
                                        size: m.zx.Sizes.SMALL,
                                        color: v ? m.zx.Colors.BRAND : m.zx.Colors.RED,
                                        disabled: !j,
                                        onClick: D,
                                        children: v ? A.intl.string(A.t['/dbw3N']) : A.intl.string(A.t.Uwsjn5)
                                    }),
                                    v &&
                                        (0, r.jsxs)('div', {
                                            className: k.inviteDisabledTip,
                                            children: [
                                                (0, r.jsx)(b.P4T, {
                                                    size: 'custom',
                                                    width: 20,
                                                    height: 20,
                                                    color: p.Z.unsafe_rawColors.YELLOW_300.css
                                                }),
                                                (0, r.jsx)(b.Text, {
                                                    variant: 'text-sm/normal',
                                                    children: A.intl.string(A.t['2LLbj4'])
                                                })
                                            ]
                                        })
                                ]
                            }),
                            (0, r.jsx)(b.$i$, { className: k.headerDivider })
                        ]
                    },
                    'header'
                );
            if (t === U.ACTIONS_V2)
                return (0, r.jsx)(P.Y, {
                    hasInvites: y.length > 0,
                    setHeight: T,
                    onShowDisableInvites: D,
                    onShowInviteModal: I,
                    hasInviteDisabledPermission: j,
                    invitesDisabled: v,
                    canCreateInvites: a
                });
            if (t === U.TABLE) {
                if (0 === y.length && 0 === n && f)
                    return (0, r.jsx)(
                        b.$jN,
                        {
                            className: R.marginTop20,
                            type: b.$jN.Type.SPINNING_CIRCLE
                        },
                        'spinner'
                    );
                let e = y[n];
                return null == e
                    ? null
                    : (0, r.jsx)(
                          W,
                          {
                              hide: o,
                              invite: e,
                              showChannel: g,
                              inviteDisabled: v
                          },
                          e.code
                      );
            }
        },
        rowHeight: (e, t) => (e === U.HEADER ? 64 : e === U.ACTIONS_V1 ? 109 : e === U.ACTIONS_V2 ? S : e === U.TABLE ? (0 === y.length && 0 === t && f ? 62 : 62 * (null != y[t])) : 0),
        sectionHeight: (e) => (e === U.TABLE ? (0 !== y.length || f ? 28 : 240) : 0)
    });
}
