n.d(t, { H: () => L }), n(47120), n(998459);
var l = n(200651),
    i = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(91192),
    o = n(442837),
    d = n(692547),
    u = n(481060),
    c = n(247272),
    h = n(700582),
    g = n(630810),
    m = n(724757),
    v = n(933557),
    x = n(266076),
    p = n(565138),
    N = n(810123),
    I = n(448486),
    f = n(427679),
    j = n(751771),
    S = n(158776),
    b = n(699516),
    E = n(246946),
    C = n(971130),
    y = n(51144),
    _ = n(264229),
    T = n(366980),
    Z = n(981631),
    P = n(388032),
    w = n(996092);
function O(e) {
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
function k(e, t) {
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
function A(e) {
    let { icon: t, label: n, subLabel: i, onClick: r, isSelected: s, disabled: a } = e;
    return (0, l.jsxs)(u.P3F, {
        'aria-disabled': a,
        className: w.recipientRow,
        onClick: r,
        children: [
            (0, l.jsx)('div', {
                className: w.recipientAsset,
                children: t
            }),
            (0, l.jsxs)('div', {
                className: w.recipientLabels,
                children: [
                    (0, l.jsx)(u.Text, {
                        className: w.recipientLabel,
                        variant: 'text-md/medium',
                        lineClamp: 1,
                        children: n
                    }),
                    void 0 !== i
                        ? (0, l.jsx)(u.Text, {
                              className: w.recipientSublabel,
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
                value: s,
                className: w.checkbox
            })
        ]
    });
}
function R(e) {
    let { user: t, onToggle: n, isSelected: r, disabled: s } = e,
        a = y.ZP.useName(t),
        d = y.ZP.useUserTag(t, { decoration: 'never' }),
        c = (0, o.e7)([b.Z], () => b.Z.getNickname(t.id)),
        g = (0, o.e7)([S.Z], () => S.Z.getStatus(t.id)),
        m = i.useCallback(() => n(t.id), [n, t.id]);
    return (0, l.jsx)(A, {
        icon: (0, l.jsx)(h.Z, {
            'aria-hidden': !0,
            size: u.EFr.SIZE_32,
            user: t,
            status: g
        }),
        label: null != c ? c : a,
        subLabel: d,
        onClick: m,
        isSelected: r,
        disabled: s
    });
}
function M(e) {
    var t, n;
    let { channel: r, onToggle: s, isSelected: a, disabled: o } = e,
        d = i.useCallback(() => s(r.id), [s, r.id]),
        c = null !== (t = (0, v.ZP)(r)) && void 0 !== t ? t : '',
        h = null !== (n = (0, I._)(r)) && void 0 !== n ? n : '';
    return (0, l.jsx)(A, {
        icon: (0, l.jsx)(x.Z, {
            'aria-hidden': !0,
            size: u.EFr.SIZE_32,
            channel: r,
            experimentLocation: 'instant_invite_modal'
        }),
        label: c,
        subLabel: h,
        onClick: d,
        isSelected: a,
        disabled: o
    });
}
function W(e) {
    let { rows: t, onToggle: n, selection: r, scrollerRef: s, disabled: o } = e,
        d = i.useMemo(() => [t.length], [t.length]),
        c = (0, m.Z)('instant_invite_modal', s),
        h = i.useCallback(
            (e) => {
                var i, s;
                let a,
                    { section: d, row: u } = e;
                if (d > 0) return;
                let c = t[u];
                switch (c.type) {
                    case C.bm.FRIEND:
                    case C.bm.DM:
                        let h = c.item;
                        return (
                            (a = null !== (i = r.includes(h.id)) && void 0 !== i && i),
                            (0, l.jsx)(
                                R,
                                {
                                    user: h,
                                    isSelected: a,
                                    onToggle: n,
                                    disabled: o
                                },
                                h.id
                            )
                        );
                    case C.bm.GROUP_DM:
                    case C.bm.CHANNEL:
                        let g = c.item;
                        return (
                            (a = null !== (s = r.includes(g.id)) && void 0 !== s && s),
                            (0, l.jsx)(
                                M,
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
            [t, r, n, o]
        ),
        g = i.useCallback(() => 56, []);
    return 0 === t.length
        ? (0, l.jsx)(u.OZU, { children: P.NW.string(P.t.ojoWgY) })
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
                                          r = Object.keys(e);
                                      for (l = 0; l < r.length; l++) (n = r[l]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                      return i;
                                  })(e, t);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  for (l = 0; l < r.length; l++) (n = r[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                              }
                              return i;
                          })(e, ['ref']);
                      return (0, l.jsx)(
                          u.YAO,
                          k(
                              O(
                                  {
                                      className: w.recipientList,
                                      style: { '--custom-recipient-row-height': ''.concat(56, 'px') },
                                      scrollerRef: (e) => {
                                          null !== e && ((s.current = e), (t.current = e.getScrollerNode()));
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
function L(e) {
    let { transitionState: t, onClose: n, rows: r, invite: a, canCreateInvites: h, canShowVanityURL: m, guild: v, inviteChannel: x, generateInviteLink: I } = e,
        [S, b] = i.useState(''),
        y = i.useRef(null),
        A = i.useRef(null),
        [R, M] = i.useState(!1),
        [L, U] = i.useState(!1),
        D = (0, o.e7)([E.Z], () => E.Z.hideInstantInvites),
        z = (0, o.e7)(
            [f.Z],
            () => {
                var e;
                return null !== (e = f.Z.getStageInstanceByChannel(null == x ? void 0 : x.id)) && void 0 !== e ? e : null;
            },
            [x]
        ),
        B = i.useCallback(
            (e) => {
                var t;
                null === (t = A.current) || void 0 === t || t.scrollTo({ to: 0 }), b(e), (0, c.C)(e);
            },
            [b]
        ),
        V = i.useCallback(() => {
            B('');
        }, [B]),
        [F, G] = i.useState([]),
        H = i.useCallback((e) => {
            G((t) => {
                let n = t.findIndex((t) => t === e);
                if (-1 === n) return b(''), [e, ...t];
                let l = [...t];
                return l.splice(n, 1), l;
            });
        }, []),
        q = i.useMemo(() => {
            let e;
            return null === (e = m && void 0 !== v.vanityURLCode ? v.vanityURLCode : (null == z ? void 0 : z.invite_code) !== void 0 ? z.invite_code : null !== a ? a.code : null) ? null : (0, _.tV)({ baseCode: e });
        }, [m, v, z, a]),
        Y = i.useCallback(async () => {
            if (L || null === q) return;
            U(!0);
            let e = r
                .filter((e) => F.includes(e.item.id))
                .map((e) => {
                    var t;
                    let n;
                    let l = Z.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
                        i = null !== (t = j.Z.getSelectedInviteMetadata(e)) && void 0 !== t ? t : null;
                    switch (e.type) {
                        case C.bm.FRIEND:
                        case C.bm.DM:
                            n = {
                                type: g.m.USER,
                                user: e.item,
                                inviteKey: q,
                                location: l,
                                suggested: i
                            };
                            break;
                        case C.bm.CHANNEL:
                            n = {
                                type: g.m.CHANNEL,
                                channel: e.item,
                                inviteKey: q,
                                location: l,
                                suggested: i
                            };
                            break;
                        case C.bm.GROUP_DM:
                            n = {
                                type: g.m.GROUP_DM,
                                channel: e.item,
                                inviteKey: q,
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
                U(!1), n();
            }
        }, [L, U, F, q, r, n]);
    if (
        (i.useEffect(() => {
            !m && h && I();
        }, [x, m, h, I]),
        null === q)
    )
        return;
    let K = (0, T.Z)(q),
        X = D ? P.NW.string(P.t['6HzNgY']) : K;
    return (0, l.jsxs)(u.Y0X, {
        className: s()(w.modal, { [w.disabled]: L }),
        transitionState: t,
        children: [
            (0, l.jsxs)(u.xBx, {
                className: w.header,
                children: [
                    (0, l.jsxs)('div', {
                        className: w.titleLine,
                        children: [
                            (0, l.jsx)('div', {
                                className: w.title,
                                children: (0, l.jsxs)(u.X6q, {
                                    variant: 'heading-lg/semibold',
                                    children: [P.NW.string(P.t.BN75l5), (0, l.jsx)('span', { children: null === a && 'No Invite Key' }), (0, l.jsx)('span', { children: null === a && 'No Invite' })]
                                })
                            }),
                            (0, l.jsx)(u.olH, {
                                className: w.closeButton,
                                onClick: () => void 0
                            })
                        ]
                    }),
                    (0, l.jsx)(u.E1j, {
                        ref: y,
                        size: u.E1j.Sizes.MEDIUM,
                        query: S,
                        onChange: B,
                        onClear: V,
                        placeholder: P.NW.string(P.t['5h0QOD']),
                        'aria-label': P.NW.string(P.t['5h0QOD']),
                        autoFocus: !0
                    })
                ]
            }),
            (0, l.jsx)(u.hzk, {
                className: s()(w.body, { [w.empty]: 0 === r.length }),
                children: (0, l.jsx)(W, {
                    rows: r,
                    onToggle: H,
                    scrollerRef: A,
                    selection: F,
                    disabled: L
                })
            }),
            (0, l.jsxs)(u.mzw, {
                className: w.footer,
                children: [
                    (0, l.jsxs)('div', {
                        className: w.guildRow,
                        children: [
                            (0, l.jsx)('div', {
                                className: w.guildAsset,
                                children:
                                    null === x
                                        ? (0, l.jsx)(p.Z, {
                                              guild: v,
                                              iconSize: 32
                                          })
                                        : (0, l.jsx)(N.Z, {
                                              size: N.E.SMALL_32,
                                              guild: v,
                                              channel: x
                                          })
                            }),
                            (0, l.jsxs)('div', {
                                className: w.guildContent,
                                children: [
                                    (0, l.jsx)(u.X6q, {
                                        variant: 'heading-md/semibold',
                                        color: 'header-secondary',
                                        children: v.name
                                    }),
                                    (0, l.jsxs)('div', {
                                        className: w.guildCount,
                                        children: [
                                            (0, l.jsx)(u.Text, {
                                                variant: 'text-xs/medium',
                                                color: 'header-muted',
                                                children: '32 members'
                                            }),
                                            (0, l.jsx)(u.Text, {
                                                variant: 'text-xs/medium',
                                                color: 'header-muted',
                                                children: '19 online'
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, l.jsx)(u.ua7, {
                                position: 'top',
                                text: '\uD83D\uDEA7',
                                children: (e) =>
                                    (0, l.jsx)(
                                        u.zxk,
                                        k(
                                            O(
                                                {
                                                    size: u.zxk.Sizes.ICON,
                                                    look: u.zxk.Looks.BLANK,
                                                    className: w.settingsButton
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
                        className: w.buttonRow,
                        children: [
                            (0, l.jsx)(u.ua7, {
                                position: 'top',
                                'aria-label': X,
                                text: (0, l.jsx)(u.Text, {
                                    variant: 'text-sm/medium',
                                    children: X
                                }),
                                children: (e) =>
                                    (0, l.jsx)(
                                        u.zxk,
                                        k(
                                            O(
                                                {
                                                    className: w.button,
                                                    innerClassName: w.buttonInner,
                                                    color: u.zxk.Colors.PRIMARY
                                                },
                                                e
                                            ),
                                            {
                                                onClick: () => {
                                                    var t;
                                                    null == e || null === (t = e.onClick) || void 0 === t || t.call(e), M(!0);
                                                },
                                                children: R
                                                    ? (0, l.jsxs)(l.Fragment, {
                                                          children: [
                                                              (0, l.jsx)(u.dz2, {
                                                                  size: 'xs',
                                                                  color: 'currentColor'
                                                              }),
                                                              (0, l.jsx)('span', { children: P.NW.string(P.t.WqhZsr) })
                                                          ]
                                                      })
                                                    : (0, l.jsxs)(l.Fragment, {
                                                          children: [
                                                              (0, l.jsx)(u.xPt, {
                                                                  size: 'xs',
                                                                  color: 'currentColor'
                                                              }),
                                                              (0, l.jsx)('span', { children: P.NW.string(P.t.WqhZsr) })
                                                          ]
                                                      })
                                            }
                                        )
                                    )
                            }),
                            (0, l.jsxs)(u.zxk, {
                                className: w.button,
                                innerClassName: w.buttonInner,
                                onClick: Y,
                                disabled: L,
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
            })
        ]
    });
}
