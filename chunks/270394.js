n.d(t, { Z: () => U }), n(789020), n(47120);
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
    N = n(933557),
    O = n(346486),
    v = n(600164),
    y = n(666657),
    _ = n(664452),
    C = n(560114),
    I = n(699516),
    S = n(594174),
    E = n(630388),
    P = n(965638),
    w = n(757539),
    T = n(981631),
    Z = n(388032),
    W = n(541056),
    k = n(588866),
    A = n(20493);
function D(e) {
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
function R(e, t) {
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
let L = {
        INVITER: 3,
        INVITE_CODE: 3,
        USES: 1,
        EXPIRES: 2
    },
    M = {
        HEADER: 0,
        ACTIONS_V1: 1,
        ACTIONS_V2: 2,
        TABLE: 3
    };
function B(e) {
    var t;
    let { invite: n, showChannel: i = !1, inviteDisabled: l = !1, hide: a = !1 } = e,
        s = n.uses;
    return (
        n.maxUses > 0 && (s = ''.concat(n.uses, '/').concat(n.maxUses)),
        (0, r.jsxs)(v.Z, {
            className: o()(W.inviteSettingsInviteRow, k.card, { [W.inviteDisabledRow]: l }),
            children: [
                (0, r.jsxs)(v.Z, {
                    grow: L.INVITER,
                    basis: 0,
                    align: v.Z.Align.CENTER,
                    className: W.text,
                    children: [
                        null != n.inviter &&
                            (0, r.jsx)(x.Z, {
                                user: n.inviter,
                                size: m.EFr.SIZE_24,
                                className: W.avatar
                            }),
                        (0, r.jsxs)('div', {
                            children: [
                                null != n.inviter &&
                                    (0, r.jsx)(f.Z, {
                                        discriminatorClass: W.discriminator,
                                        user: n.inviter
                                    }),
                                i &&
                                    (0, r.jsx)(m.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        children: (0, N.F6)(n.channel, S.default, I.Z, !0)
                                    })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)(v.Z, {
                    grow: L.INVITE_CODE,
                    shrink: 1,
                    basis: 0,
                    align: v.Z.Align.CENTER,
                    className: W.text,
                    children: (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(m.Text, {
                                className: W.inviteCode,
                                variant: 'text-sm/normal',
                                children: a ? '...' : n.code
                            }),
                            !a && (0, E.yE)(null != (t = n.flags) ? t : 0, u.$.IS_APPLICATION_BYPASS)
                                ? (0, r.jsxs)('div', {
                                      className: W.bypass,
                                      children: [
                                          (0, r.jsx)(m.Text, {
                                              className: W.text,
                                              variant: 'text-xs/normal',
                                              color: 'text-muted',
                                              children: Z.NW.string(Z.t['1i1bUl'])
                                          }),
                                          (0, r.jsx)(m.ua7, {
                                              text: Z.NW.string(Z.t['jvd/LC']),
                                              children: (e) =>
                                                  (0, r.jsx)(
                                                      m.d3s,
                                                      R(
                                                          D(
                                                              {
                                                                  size: 'xxs',
                                                                  color: 'currentColor'
                                                              },
                                                              e
                                                          ),
                                                          { className: W.infoIcon }
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
                    grow: L.USES,
                    basis: 0,
                    align: v.Z.Align.CENTER,
                    className: W.text,
                    children: (0, r.jsx)(m.Text, {
                        className: W.uses,
                        variant: 'text-sm/normal',
                        children: s
                    })
                }),
                (0, r.jsx)(v.Z, {
                    grow: L.EXPIRES,
                    basis: 0,
                    align: v.Z.Align.CENTER,
                    className: o()(W.text, W.countdownColumn),
                    children: (0, r.jsx)(m.Text, {
                        className: W.countdown,
                        variant: 'text-sm/normal',
                        children: (0, r.jsx)(O.Z, { deadline: n.getExpiresAt() })
                    })
                }),
                (0, r.jsx)(g.Z, {
                    className: W.revokeInvite,
                    onClick: () => {
                        b.ZP.revokeInvite(n);
                    }
                })
            ]
        })
    );
}
function U(e) {
    let { invites: t, guild: l, hide: o, canCreateInvites: a, withV2Actions: c, channel: u = null, showChannel: b = !1, loading: g = !1 } = e;
    s()(null != l, 'guild is required');
    let f = (0, j.ZP)(),
        x = (0, P.MQ)(l),
        N = (0, P.O4)(l),
        O = i.useMemo(
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
                        C.default,
                        R(D({}, e), {
                            channel: u,
                            guild: l,
                            source: T.t4x.SETTINGS_INVITE
                        })
                    )
            );
        },
        [S, E] = i.useState(62),
        k = () => {
            let e = { source: y.Zu.GUILD_SETTINGS };
            (0, m.ZDy)(
                async () => (t) =>
                    (0, r.jsx)(
                        _.default,
                        R(D({}, t), {
                            guildId: l.id,
                            analyticsData: e
                        })
                    )
            );
        };
    return (0, r.jsx)(h.Xi, {
        sections: [1, +!c, +!!c, Math.max(1, O.length)],
        renderSection: (e) => {
            let { section: t } = e;
            if (t === M.TABLE)
                if (0 === O.length && !g)
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
                                    note: Z.NW.string(Z.t.F53CAQ),
                                    children: Z.NW.string(Z.t['+nLJkZ'])
                                })
                            ]
                        })
                    });
                else
                    return (0, r.jsxs)(v.Z, {
                        children: [
                            (0, r.jsx)(v.Z.Child, {
                                grow: L.INVITER,
                                basis: 0,
                                className: A.marginReset,
                                children: (0, r.jsx)(m.vwX, { children: Z.NW.string(Z.t.EgHyKy) })
                            }),
                            (0, r.jsx)(v.Z.Child, {
                                basis: 0,
                                grow: L.INVITE_CODE,
                                className: A.marginReset,
                                children: (0, r.jsx)(m.vwX, { children: Z.NW.string(Z.t.LBlFEB) })
                            }),
                            (0, r.jsx)(v.Z.Child, {
                                grow: L.USES,
                                basis: 0,
                                children: (0, r.jsx)(m.vwX, { children: Z.NW.string(Z.t.erWrmJ) })
                            }),
                            (0, r.jsx)(v.Z.Child, {
                                grow: L.EXPIRES,
                                basis: 0,
                                children: (0, r.jsx)(m.vwX, { children: Z.NW.string(Z.t['1aM27e']) })
                            })
                        ]
                    });
            return null;
        },
        renderRow: (e) => {
            let { section: t, row: n } = e;
            if (t === M.HEADER)
                return (0, r.jsx)(m.X6q, {
                    variant: 'heading-lg/semibold',
                    color: 'header-primary',
                    className: W.header,
                    children: Z.NW.string(Z.t['9F90iY'])
                });
            if (t === M.ACTIONS_V1)
                return (0, r.jsxs)(
                    m.hjN,
                    {
                        className: W.actions,
                        children: [
                            (0, r.jsx)(m.R94, {
                                className: A.marginBottom20,
                                type: m.geA.DESCRIPTION,
                                children: !0 === a ? Z.NW.format(Z.t['97VdNj'], { onCreateInvite: I }) : Z.NW.string(Z.t.WDw38P)
                            }),
                            (0, r.jsxs)('div', {
                                className: W.inviteDisabledContainer,
                                children: [
                                    (0, r.jsx)(m.zxk, {
                                        size: m.zxk.Sizes.SMALL,
                                        color: N ? m.zxk.Colors.BRAND : m.zxk.Colors.RED,
                                        disabled: !x,
                                        onClick: k,
                                        children: N ? Z.NW.string(Z.t['/dbw3N']) : Z.NW.string(Z.t.Uwsjn5)
                                    }),
                                    N &&
                                        (0, r.jsxs)('div', {
                                            className: W.inviteDisabledTip,
                                            children: [
                                                (0, r.jsx)(m.P4T, {
                                                    size: 'custom',
                                                    width: 20,
                                                    height: 20,
                                                    color: p.Z.unsafe_rawColors.YELLOW_300.css
                                                }),
                                                (0, r.jsx)(m.Text, {
                                                    variant: 'text-sm/normal',
                                                    children: Z.NW.string(Z.t['2LLbj4'])
                                                })
                                            ]
                                        })
                                ]
                            }),
                            (0, r.jsx)(m.$i$, { className: W.headerDivider })
                        ]
                    },
                    'header'
                );
            if (t === M.ACTIONS_V2)
                return (0, r.jsx)(w.Y, {
                    hasInvites: O.length > 0,
                    setHeight: E,
                    onShowDisableInvites: k,
                    onShowInviteModal: I,
                    hasInviteDisabledPermission: x,
                    invitesDisabled: N,
                    canCreateInvites: a
                });
            if (t === M.TABLE) {
                if (0 === O.length && 0 === n && g)
                    return (0, r.jsx)(
                        m.$jN,
                        {
                            className: A.marginTop20,
                            type: m.$jN.Type.SPINNING_CIRCLE
                        },
                        'spinner'
                    );
                let e = O[n];
                return null == e
                    ? null
                    : (0, r.jsx)(
                          B,
                          {
                              hide: o,
                              invite: e,
                              showChannel: b,
                              inviteDisabled: N
                          },
                          e.code
                      );
            }
        },
        rowHeight: (e, t) => (e === M.HEADER ? 64 : e === M.ACTIONS_V1 ? 109 : e === M.ACTIONS_V2 ? S : e === M.TABLE ? (0 === O.length && 0 === t && g ? 62 : 62 * (null != O[t])) : 0),
        sectionHeight: (e) => (e === M.TABLE ? (0 !== O.length || g ? 28 : 240) : 0)
    });
}
