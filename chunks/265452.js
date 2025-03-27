n.d(t, { H: () => H }), n(47120), n(998459);
var l = n(200651),
    i = n(192379),
    s = n(120356),
    r = n.n(s),
    a = n(91192),
    o = n(442837),
    d = n(692547),
    u = n(481060),
    c = n(247272),
    h = n(700582),
    g = n(630810),
    m = n(724757),
    v = n(933557),
    x = n(471445),
    p = n(114487),
    N = n(266076),
    I = n(65361),
    f = n(448486),
    j = n(427679),
    S = n(592125),
    C = n(984933),
    b = n(751771),
    E = n(158776),
    y = n(699516),
    T = n(944486),
    _ = n(246946),
    Z = n(934415),
    P = n(971130),
    w = n(51144),
    O = n(264229),
    k = n(366980),
    A = n(981631),
    R = n(176505),
    M = n(388032),
    W = n(996092);
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function U(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function D(e) {
    let { icon: t, label: n, subLabel: i, onClick: s, isSelected: r, disabled: a } = e;
    return (0, l.jsxs)(u.P3F, {
        'aria-disabled': a,
        className: W.recipientRow,
        onClick: s,
        children: [
            (0, l.jsx)('div', {
                className: W.recipientAsset,
                children: t
            }),
            (0, l.jsxs)('div', {
                className: W.recipientLabels,
                children: [
                    (0, l.jsx)(u.Text, {
                        className: W.recipientLabel,
                        variant: 'text-md/medium',
                        lineClamp: 1,
                        children: n
                    }),
                    void 0 !== i
                        ? (0, l.jsx)(u.Text, {
                              className: W.recipientSublabel,
                              variant: 'text-xs/normal',
                              color: 'text-muted',
                              children: i
                          })
                        : null
                ]
            }),
            (0, l.jsx)(u.XZJ, {
                type: u.XZJ.Types.INVERTED,
                displayOnly: !0,
                size: 24,
                value: r,
                className: W.checkbox
            })
        ]
    });
}
function z(e) {
    let { user: t, onToggle: n, isSelected: s, disabled: r } = e,
        a = w.ZP.useName(t),
        d = w.ZP.useUserTag(t, { decoration: 'never' }),
        [c, g] = (0, o.Wu)([y.Z, E.Z], () => [y.Z.getNickname(t.id), E.Z.getStatus(t.id)], [t]),
        m = i.useCallback(() => n(t.id), [n, t.id]);
    return (0, l.jsx)(D, {
        icon: (0, l.jsx)(h.Z, {
            'aria-hidden': !0,
            size: u.EFr.SIZE_32,
            user: t,
            status: g
        }),
        label: null != c ? c : a,
        subLabel: d,
        onClick: m,
        isSelected: s,
        disabled: r
    });
}
function B(e) {
    var t, n;
    let { channel: s, onToggle: r, isSelected: a, disabled: o } = e,
        d = i.useCallback(() => r(s.id), [r, s.id]),
        c = null !== (t = (0, v.ZP)(s)) && void 0 !== t ? t : '',
        h = null !== (n = (0, f._)(s)) && void 0 !== n ? n : '';
    return (0, l.jsx)(D, {
        icon: (0, l.jsx)(N.Z, {
            'aria-hidden': !0,
            size: u.EFr.SIZE_32,
            channel: s,
            experimentLocation: 'instant_invite_modal'
        }),
        label: c,
        subLabel: h,
        onClick: d,
        isSelected: a,
        disabled: o
    });
}
function V(e) {
    let { rows: t, onToggle: n, selection: s, scrollerRef: r, disabled: o } = e,
        d = i.useMemo(() => [t.length], [t.length]),
        c = (0, m.Z)('instant_invite_modal', r),
        h = i.useCallback(
            (e) => {
                var i, r;
                let a,
                    { section: d, row: u } = e;
                if (d > 0) return;
                let c = t[u];
                switch (c.type) {
                    case P.bm.FRIEND:
                    case P.bm.DM:
                        let h = c.item;
                        return (
                            (a = null !== (i = s.includes(h.id)) && void 0 !== i && i),
                            (0, l.jsx)(
                                z,
                                {
                                    user: h,
                                    isSelected: a,
                                    onToggle: n,
                                    disabled: o
                                },
                                h.id
                            )
                        );
                    case P.bm.GROUP_DM:
                    case P.bm.CHANNEL:
                        let g = c.item;
                        return (
                            (a = null !== (r = s.includes(g.id)) && void 0 !== r && r),
                            (0, l.jsx)(
                                B,
                                {
                                    channel: g,
                                    isSelected: a,
                                    onToggle: n,
                                    disabled: o
                                },
                                g.id
                            )
                        );
                    default:
                        return null;
                }
            },
            [t, s, n, o]
        ),
        g = i.useCallback(() => 56, []);
    return 0 === t.length
        ? (0, l.jsx)(u.OZU, { children: M.NW.string(M.t.ojoWgY) })
        : (0, l.jsx)(a.bG, {
              navigator: c,
              children: (0, l.jsx)(a.SJ, {
                  children: (e) => {
                      var { ref: t } = e,
                          n = (function (e, t) {
                              if (null == e) return {};
                              var n,
                                  l,
                                  i = (function (e, t) {
                                      if (null == e) return {};
                                      var n,
                                          l,
                                          i = {},
                                          s = Object.keys(e);
                                      for (l = 0; l < s.length; l++) (n = s[l]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                      return i;
                                  })(e, t);
                              if (Object.getOwnPropertySymbols) {
                                  var s = Object.getOwnPropertySymbols(e);
                                  for (l = 0; l < s.length; l++) (n = s[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                              }
                              return i;
                          })(e, ['ref']);
                      return (0, l.jsx)(
                          u.YAO,
                          U(
                              L(
                                  {
                                      className: W.recipientList,
                                      style: { '--custom-recipient-row-height': ''.concat(56, 'px') },
                                      scrollerRef: (e) => {
                                          null !== e && ((r.current = e), (t.current = e.getScrollerNode()));
                                      }
                                  },
                                  n
                              ),
                              {
                                  sections: d,
                                  sectionHeight: 0,
                                  renderRow: h,
                                  rowHeight: g
                              }
                          )
                      );
                  }
              })
          });
}
function F(e) {
    let { channel: t, guild: n, inviteTarget: s } = e,
        { guildProfile: r, fetchGuildProfile: a } = (0, I.u)(n.id);
    i.useEffect(() => {
        a();
    }, [a]);
    let o = (0, x.KS)(t, n),
        d = null,
        c = null;
    if (null !== t) {
        d = null == t ? void 0 : t.name;
        let e = (0, Z.a5)({ type: s.type });
        c = (0, l.jsxs)(u.Text, {
            className: W.inviteTargetContent,
            variant: 'text-xs/medium',
            color: 'header-muted',
            children: [
                (0, l.jsx)('span', { children: e }),
                (0, l.jsx)('span', {
                    'aria-hidden': !0,
                    children: '\u2022'
                }),
                (0, l.jsx)('span', { children: n.name })
            ]
        });
    } else
        (d = n.name),
            (c =
                null === r
                    ? null
                    : (0, l.jsxs)('div', {
                          className: W.guildPresence,
                          children: [
                              (0, l.jsxs)('div', {
                                  className: W.onlineCount,
                                  children: [
                                      (0, l.jsx)('div', { className: W.dot }),
                                      (0, l.jsx)(u.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'header-muted',
                                          children: M.NW.format(M.t['LC+S+v'], { membersOnline: r.onlineCount })
                                      })
                                  ]
                              }),
                              (0, l.jsxs)('div', {
                                  className: W.memberCount,
                                  children: [
                                      (0, l.jsx)('div', { className: W.dot }),
                                      (0, l.jsx)(u.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'header-muted',
                                          children: M.NW.format(M.t.zRl6XV, { count: r.memberCount })
                                      })
                                  ]
                              })
                          ]
                      }));
    return (0, l.jsxs)('div', {
        className: W.inviteTarget,
        children: [
            (0, l.jsxs)('div', {
                className: W.inviteTargetHeading,
                children: [
                    null !== o &&
                        (0, l.jsx)(o, {
                            className: W.inviteTargetIcon,
                            size: 'xs'
                        }),
                    (0, l.jsx)(u.X6q, {
                        variant: 'heading-md/semibold',
                        color: 'header-secondary',
                        lineClamp: 1,
                        children: d
                    })
                ]
            }),
            c
        ]
    });
}
function G(e) {
    let { guild: t, channel: n, inviteTarget: s, handleSendInvite: r, inviteKey: a, sending: c } = e,
        [h] = (0, o.Wu)([_.Z], () => [_.Z.hideInstantInvites]),
        [g, m] = i.useState(!1),
        v = (0, k.Z)(a),
        x = h ? M.NW.string(M.t['6HzNgY']) : v;
    return (0, l.jsxs)(u.mzw, {
        className: W.footer,
        children: [
            (0, l.jsxs)('div', {
                className: W.guildRow,
                children: [
                    (0, l.jsx)('div', {
                        className: W.guildAsset,
                        children: (0, l.jsx)(p.b, {
                            guildId: t.id,
                            guildName: t.name,
                            guildIcon: t.icon,
                            iconSize: 32
                        })
                    }),
                    (0, l.jsx)(F, {
                        guild: t,
                        channel: n,
                        inviteTarget: s,
                        isStreamerMode: h
                    }),
                    (0, l.jsx)(u.ua7, {
                        position: 'top',
                        text: '\uD83D\uDEA7',
                        children: (e) =>
                            (0, l.jsx)(
                                u.zxk,
                                U(
                                    L(
                                        {
                                            size: u.zxk.Sizes.ICON,
                                            look: u.zxk.Looks.BLANK,
                                            className: W.settingsButton
                                        },
                                        e
                                    ),
                                    {
                                        onClick: () => {
                                            var t;
                                            null == e || null === (t = e.onClick) || void 0 === t || t.call(e);
                                        },
                                        children: (0, l.jsx)(u.ewm, {
                                            size: 'md',
                                            color: d.Z.colors.ICON_PRIMARY.css
                                        })
                                    }
                                )
                            )
                    })
                ]
            }),
            (0, l.jsxs)('div', {
                className: W.buttonRow,
                children: [
                    (0, l.jsx)(u.ua7, {
                        position: 'top',
                        'aria-label': x,
                        text: (0, l.jsx)(u.Text, {
                            variant: 'text-sm/medium',
                            children: x
                        }),
                        children: (e) =>
                            (0, l.jsx)(
                                u.zxk,
                                U(
                                    L(
                                        {
                                            className: W.button,
                                            innerClassName: W.buttonInner,
                                            color: u.zxk.Colors.PRIMARY
                                        },
                                        e
                                    ),
                                    {
                                        onClick: () => {
                                            var t;
                                            null == e || null === (t = e.onClick) || void 0 === t || t.call(e), m(!0);
                                        },
                                        children: g
                                            ? (0, l.jsxs)(l.Fragment, {
                                                  children: [
                                                      (0, l.jsx)(u.dz2, {
                                                          size: 'xs',
                                                          color: 'currentColor'
                                                      }),
                                                      (0, l.jsx)('span', { children: M.NW.string(M.t.WqhZsr) })
                                                  ]
                                              })
                                            : (0, l.jsxs)(l.Fragment, {
                                                  children: [
                                                      (0, l.jsx)(u.xPt, {
                                                          size: 'xs',
                                                          color: 'currentColor'
                                                      }),
                                                      (0, l.jsx)('span', { children: M.NW.string(M.t.WqhZsr) })
                                                  ]
                                              })
                                    }
                                )
                            )
                    }),
                    (0, l.jsxs)(u.zxk, {
                        className: W.button,
                        innerClassName: W.buttonInner,
                        onClick: () => r(),
                        disabled: c,
                        children: [
                            (0, l.jsx)('span', { children: 'Send Invite' }),
                            (0, l.jsx)(u.Uuj, {
                                size: 'xs',
                                color: 'currentColor'
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function H(e) {
    let { transitionState: t, onClose: n, rows: s, invite: a, canCreateInvites: d, canShowVanityURL: h, guild: m, channel: v, generateInviteLink: x } = e,
        [p, N] = i.useState(''),
        I = i.useRef(null),
        f = i.useRef(null),
        [E, y] = i.useState(!1),
        _ = i.useCallback(
            (e) => {
                var t;
                null === (t = f.current) || void 0 === t || t.scrollTo({ to: 0 }), N(e), (0, c.C)(e);
            },
            [N]
        ),
        Z = i.useCallback(() => {
            _('');
        }, [_]),
        [w, k] = i.useState([]),
        L = i.useCallback((e) => {
            k((t) => {
                let n = t.findIndex((t) => t === e);
                if (-1 === n) return N(''), [e, ...t];
                let l = [...t];
                return l.splice(n, 1), l;
            });
        }, []),
        U = (0, o.e7)(
            [T.Z, S.Z, C.ZP],
            () => {
                var e;
                if (null != v) return v;
                let t = T.Z.getChannelId(),
                    n = null == t || (0, R.AB)(t) ? null : S.Z.getChannel(t);
                return (null == n ? void 0 : n.isThread()) && (n = S.Z.getChannel(n.parent_id)), null !== (e = null != n ? n : C.ZP.getDefaultChannel(m.id, !0, A.Plq.CREATE_INSTANT_INVITE)) && void 0 !== e ? e : null;
            },
            [m.id, v]
        ),
        D = (0, o.e7)(
            [j.Z],
            () => {
                var e;
                return null !== (e = j.Z.getStageInstanceByChannel(null == U ? void 0 : U.id)) && void 0 !== e ? e : null;
            },
            [U]
        ),
        z = i.useMemo(() => {
            let e;
            return null === (e = h && void 0 !== m.vanityURLCode ? m.vanityURLCode : (null == D ? void 0 : D.invite_code) !== void 0 ? D.invite_code : null !== a ? a.code : null) ? null : (0, O.tV)({ baseCode: e });
        }, [h, m, D, a]),
        B = i.useCallback(async () => {
            if (E || null === z) return;
            y(!0);
            let e = s
                .filter((e) => w.includes(e.item.id))
                .map((e) => {
                    var t;
                    let n;
                    let l = A.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
                        i = null !== (t = b.Z.getSelectedInviteMetadata(e)) && void 0 !== t ? t : null;
                    switch (e.type) {
                        case P.bm.FRIEND:
                        case P.bm.DM:
                            n = {
                                type: g.m.USER,
                                user: e.item,
                                inviteKey: z,
                                location: l,
                                suggested: i
                            };
                            break;
                        case P.bm.CHANNEL:
                            n = {
                                type: g.m.CHANNEL,
                                channel: e.item,
                                inviteKey: z,
                                location: l,
                                suggested: i
                            };
                            break;
                        case P.bm.GROUP_DM:
                            n = {
                                type: g.m.GROUP_DM,
                                channel: e.item,
                                inviteKey: z,
                                location: l,
                                suggested: i
                            };
                            break;
                        default:
                            return Promise.resolve();
                    }
                    return new Promise((e, t) => {
                        g.Z.enqueue(n, (n) => {
                            n ? e() : t();
                        });
                    });
                });
            try {
                await Promise.allSettled(e);
            } catch (e) {
            } finally {
                y(!1), n();
            }
        }, [E, y, w, z, s, n]);
    if (
        (i.useEffect(() => {
            !h && d && x();
        }, [U, h, d, x]),
        null !== z && null !== U)
    )
        return (0, l.jsxs)(u.Y0X, {
            className: r()(W.modal, { [W.disabled]: E }),
            transitionState: t,
            children: [
                (0, l.jsxs)(u.xBx, {
                    className: W.header,
                    children: [
                        (0, l.jsxs)('div', {
                            className: W.titleLine,
                            children: [
                                (0, l.jsx)('div', {
                                    className: W.title,
                                    children: (0, l.jsxs)(u.X6q, {
                                        variant: 'heading-lg/semibold',
                                        children: [M.NW.string(M.t.BN75l5), (0, l.jsx)('span', { children: null === a && 'No Invite Key' }), (0, l.jsx)('span', { children: null === a && 'No Invite' })]
                                    })
                                }),
                                (0, l.jsx)(u.olH, {
                                    className: W.closeButton,
                                    onClick: n
                                })
                            ]
                        }),
                        (0, l.jsx)(u.E1j, {
                            ref: I,
                            size: u.E1j.Sizes.MEDIUM,
                            query: p,
                            onChange: _,
                            onClear: Z,
                            placeholder: M.NW.string(M.t['5h0QOD']),
                            'aria-label': M.NW.string(M.t['5h0QOD']),
                            autoFocus: !0
                        })
                    ]
                }),
                (0, l.jsx)(u.hzk, {
                    className: r()(W.body, { [W.empty]: 0 === s.length }),
                    children: (0, l.jsx)(V, {
                        rows: s,
                        onToggle: L,
                        scrollerRef: f,
                        selection: w,
                        disabled: E
                    })
                }),
                (0, l.jsx)(G, {
                    guild: m,
                    channel: v,
                    handleSendInvite: B,
                    sending: E,
                    inviteTarget: U,
                    inviteKey: z
                })
            ]
        });
}
