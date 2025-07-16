(n.d(t, { Z: () => P }), n(388685), n(642613), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(953529));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(913527),
    s = n.n(a),
    c = n(951284),
    d = n(442837),
    u = n(755721),
    p = n(481060),
    m = n(139387),
    b = n(726542),
    g = n(600164),
    f = n(339085),
    h = n(434404),
    x = n(598077),
    j = n(485386),
    O = n(246946),
    v = n(259580),
    y = n(531087),
    _ = n(768581),
    C = n(709054),
    N = n(486199),
    E = n(981631),
    I = n(388032),
    S = n(796920),
    T = n(20493);
function w(e) {
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
function P(e) {
    let t,
        { guild: n, integration: l, editedIntegration: a, isExpanded: P, onToggleExpand: Z, onDisable: A, onEnable: k } = e,
        D = (0, d.e7)([j.Z], () => j.Z.getRoles(n.id)),
        [R, L] = i.useState(!1),
        M = (0, d.e7)([O.Z], () => O.Z.hidePersonalInformation),
        B = i.useCallback(() => {
            (L(!0), k(l));
        }, [l, k]),
        U = i.useCallback(() => {
            l.syncing ||
                (0, p.h7j)((e) => {
                    var t, n;
                    let i = 0 === l.expire_behavior ? I.intl.string(I.t['6kpw4u']) : I.intl.string(I.t.fQUQIC);
                    return (0, r.jsx)(
                        p.ConfirmModal,
                        ((t = w({}, e)),
                        (n = n =
                            {
                                header: I.intl.string(I.t.emx3lJ),
                                confirmText: i,
                                cancelText: I.intl.string(I.t['ETE/oK']),
                                onConfirm: () => A(l),
                                children: (0, r.jsx)(p.Text, {
                                    variant: 'text-md/normal',
                                    children: l.type === c.b.YOUTUBE ? I.intl.string(I.t.anKQWV) : I.intl.string(I.t['BW/xtr'])
                                })
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(n)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                              }),
                        t)
                    );
                });
        }, [l, A]),
        W = i.useCallback(() => {
            h.Z.syncIntegration(n.id, l.id);
        }, [n.id, l.id]),
        H = i.useCallback(() => {
            null != l.role_id && (h.Z.setSection(E.pNK.ROLES), h.Z.selectRole(l.role_id));
        }, [l.role_id]),
        {
            serviceName: G,
            channelURL: z,
            expireBehaviorLabel: F,
            syncLabel: V,
            subscribersText: K
        } = i.useMemo(() => {
            var e, t, n, r, i;
            let o =
                null !=
                (n =
                    null == (t = b.Z.get(l.type)) || null == (e = t.getPlatformUserUrl)
                        ? void 0
                        : e.call(t, {
                              id: l.account.id,
                              name: l.account.name
                          }))
                    ? n
                    : '';
            switch (l.type) {
                case c.b.YOUTUBE:
                    return {
                        serviceName: I.intl.string(I.t.aS6cKy),
                        expireBehaviorLabel: I.intl.string(I.t.A5MiqK),
                        syncLabel: I.intl.string(I.t['7vHKVV']),
                        subscribersText: I.intl.formatToPlainString(I.t['7lNtcX'], { subscribers: null != (r = l.subscriber_count) ? r : 0 }),
                        channelURL: o
                    };
                case c.b.TWITCH:
                default:
                    return {
                        serviceName: I.intl.string(I.t.q4pBGx),
                        expireBehaviorLabel: I.intl.string(I.t['S/WCrK']),
                        syncLabel: I.intl.string(I.t['0jbPKy']),
                        subscribersText: I.intl.formatToPlainString(I.t.RdUTrq, { subscribers: null != (i = l.subscriber_count) ? i : 0 }),
                        channelURL: o
                    };
            }
        }, [l.account, l.subscriber_count, l.type]),
        { roleLink: q, syncDescriptionText: Y } = i.useMemo(() => {
            let e,
                t,
                n = null != l.role_id ? D[l.role_id] : null;
            e =
                null != n
                    ? (0, r.jsx)(p.eee, {
                          onClick: H,
                          children: n.name
                      })
                    : I.intl.string(I.t.PoWNfX);
            let i = b.Z.get(l.type);
            return {
                roleLink: e,
                syncDescriptionText:
                    l.revoked && null != i
                        ? I.intl.formatToPlainString(I.t.G16Wjo, {
                              user: l.user,
                              platformName: i.name
                          })
                        : I.intl.formatToPlainString(I.t.unl3AA, { datetime: s()(l.synced_at).calendar() })
            };
        }, [D, H, l.revoked, l.role_id, l.synced_at, l.type, l.user]),
        X = i.useMemo(() => {
            let e = f.ZP.getGuildEmoji(n.id),
                t = Object.values(D)
                    .filter((e) => null != e.tags && e.tags.integration_id === l.id)
                    .map((e) => e.id);
            return l.enable_emoticons ? e.sort((e, t) => e.name.localeCompare(t.name)).filter((e) => null != l.role_id && (null == e ? void 0 : e.roles.some((e) => t.includes(e)))) : [];
        }, [n.id, D, l.enable_emoticons, l.id, l.role_id]);
    if (
        (i.useEffect(() => {
            (null == a ? void 0 : a.id) === l.id && (null == a ? void 0 : a.enabled) === !0 && L(!1);
        }, [a, l.id]),
        l.enabled && null != l.user)
    )
        t = [
            {
                icon: p.T39,
                text: M
                    ? I.intl.formatToPlainString(I.t.gcdJ8P, { timestamp: C.default.extractTimestamp(l.id) })
                    : I.intl.formatToPlainString(I.t.Nu9sam, {
                          user: null != l.user ? new x.Z(l.user).tag : null,
                          timestamp: C.default.extractTimestamp(l.id)
                      })
            }
        ];
    else {
        let e = new URL(z);
        t = [
            {
                text: I.intl.format(I.t.BegylZ, {
                    serviceName: G,
                    accountUrl: z,
                    accountUrlText: e.hostname + e.pathname
                })
            }
        ];
    }
    let $ = (0, r.jsxs)(g.Z, {
            className: S.header,
            align: g.Z.Align.CENTER,
            children: [
                (0, r.jsx)(N.Z, {
                    name: ''.concat(l.name),
                    detailsClassName: S.description,
                    details: t
                }),
                l.enabled
                    ? (0, r.jsx)(g.Z.Child, {
                          shrink: 0,
                          grow: 0,
                          children: (0, r.jsx)(v.Z, {
                              className: S.expandIcon,
                              expanded: P && !R,
                              'aria-hidden': !0
                          })
                      })
                    : (0, r.jsx)(g.Z.Child, {
                          shrink: 0,
                          grow: 0,
                          children: (0, r.jsx)(u.zx, {
                              size: u.zx.Sizes.SMALL,
                              color: u.zx.Colors.PRIMARY,
                              onClick: B,
                              disabled: R,
                              children: R
                                  ? (0, r.jsx)(y.Z, {
                                        width: 24,
                                        height: 24
                                    })
                                  : (0, r.jsx)(r.Fragment, { children: I.intl.string(I.t['7sCN8v']) })
                          })
                      })
            ]
        }),
        J = null;
    return (
        P &&
            !R &&
            null != a &&
            (J = (0, r.jsxs)(g.Z, {
                className: S.body,
                direction: g.Z.Direction.VERTICAL,
                children: [
                    (0, r.jsx)(p.$i$, { className: S.topDivider }),
                    (function (e) {
                        let { integration: t, labelText: n, subscribersText: i, descriptionText: l, roleLink: o, onSync: a } = e;
                        return (0, r.jsxs)(g.Z, {
                            children: [
                                (0, r.jsxs)(g.Z.Child, {
                                    basis: '50%',
                                    children: [
                                        (0, r.jsx)(p.vwX, {
                                            className: T.marginBottom8,
                                            children: I.intl.string(I.t.eBtNBQ)
                                        }),
                                        (0, r.jsx)(p.Text, {
                                            className: S.syncedRole,
                                            color: 'header-primary',
                                            variant: 'text-sm/normal',
                                            children: o
                                        })
                                    ]
                                }),
                                (0, r.jsxs)(g.Z.Child, {
                                    basis: '50%',
                                    children: [
                                        (0, r.jsx)(p.vwX, {
                                            className: T.marginBottom8,
                                            children: n
                                        }),
                                        (0, r.jsxs)(g.Z, {
                                            justify: g.Z.Justify.BETWEEN,
                                            children: [
                                                (0, r.jsxs)(g.Z, {
                                                    direction: g.Z.Direction.VERTICAL,
                                                    children: [
                                                        (0, r.jsx)(p.Text, {
                                                            color: 'header-primary',
                                                            variant: 'text-sm/normal',
                                                            children: i
                                                        }),
                                                        (0, r.jsx)(p.Text, {
                                                            color: 'header-secondary',
                                                            variant: 'text-xs/normal',
                                                            children: l
                                                        })
                                                    ]
                                                }),
                                                (0, r.jsx)(u.zx, {
                                                    size: u.zx.Sizes.SMALL,
                                                    look: u.zx.Looks.FILLED,
                                                    color: u.zx.Colors.PRIMARY,
                                                    disabled: t.syncing || t.revoked,
                                                    onClick: a
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        });
                    })({
                        integration: a,
                        labelText: V,
                        subscribersText: K,
                        descriptionText: Y,
                        roleLink: q,
                        onSync: W
                    }),
                    (0, r.jsx)(p.$i$, { className: S.midDivider }),
                    (function (e) {
                        let { integration: t, labelText: n, onBehaviorChange: i, onGracePeriodChange: l } = e;
                        return (0, r.jsxs)(g.Z, {
                            children: [
                                (0, r.jsxs)(g.Z.Child, {
                                    basis: '50%',
                                    children: [
                                        (0, r.jsx)(p.vwX, {
                                            className: T.marginBottom8,
                                            children: n
                                        }),
                                        (0, r.jsx)(p.q4e, {
                                            placeholder: n,
                                            value: ''.concat(t.expire_behavior),
                                            options: [
                                                {
                                                    value: '0',
                                                    label: I.intl.string(I.t['6kpw4u'])
                                                },
                                                {
                                                    value: '1',
                                                    label: I.intl.string(I.t.fQUQIC)
                                                }
                                            ],
                                            isDisabled: t.syncing,
                                            onChange: (e) => i(parseInt(e))
                                        })
                                    ]
                                }),
                                (0, r.jsxs)(g.Z.Child, {
                                    basis: '50%',
                                    children: [
                                        (0, r.jsx)(p.vwX, {
                                            className: T.marginBottom8,
                                            children: I.intl.string(I.t.uiXMo6)
                                        }),
                                        (0, r.jsx)(p.q4e, {
                                            placeholder: I.intl.string(I.t.uiXMo6),
                                            maxVisibleItems: 5,
                                            value: ''.concat(t.expire_grace_period),
                                            options: [1, 3, 7, 14, 30].map((e) => ({
                                                value: ''.concat(e),
                                                label: I.intl.formatToPlainString(I.t.eGjmy8, { days: e })
                                            })),
                                            onChange: (e) => l(parseInt(e)),
                                            isDisabled: t.syncing
                                        })
                                    ]
                                })
                            ]
                        });
                    })({
                        integration: a,
                        labelText: F,
                        onBehaviorChange: function (e) {
                            m.Z.updateIntegration({ expireBehavior: e });
                        },
                        onGracePeriodChange: function (e) {
                            m.Z.updateIntegration({ expireGracePeriod: e });
                        }
                    }),
                    l.type === c.b.TWITCH
                        ? (function (e) {
                              let { integration: t, emojis: n, onToggle: i } = e;
                              return (0, r.jsxs)(g.Z, {
                                  direction: g.Z.Direction.VERTICAL,
                                  children: [
                                      (0, r.jsx)(p.XZJ, {
                                          type: p.XZJ.Types.INVERTED,
                                          className: o()(T.marginTop20, T.marginBottom8),
                                          value: t.enable_emoticons,
                                          disabled: t.syncing,
                                          onChange: (e) => {
                                              let { currentTarget: t } = e;
                                              return i(t.checked);
                                          },
                                          children: (0, r.jsx)(p.R94, { children: I.intl.string(I.t['7r4OKi']) })
                                      }),
                                      (0, r.jsx)(g.Z, {
                                          wrap: g.Z.Wrap.WRAP,
                                          className: S.__invalid_twitchEmojis,
                                          children: n.map((e, t) =>
                                              (0, r.jsx)(
                                                  p.ua7,
                                                  {
                                                      text: e.name,
                                                      children: (t) =>
                                                          (0, r.jsx)(
                                                              'img',
                                                              w(
                                                                  {
                                                                      alt: I.intl.formatToPlainString(I.t.n6ZZn5, { name: e.name }),
                                                                      draggable: !1,
                                                                      className: o()(S.emoji, 'emoji', 'jumboable'),
                                                                      src: _.ZP.getEmojiURL({
                                                                          id: e.id,
                                                                          animated: e.animated,
                                                                          size: 28
                                                                      })
                                                                  },
                                                                  t
                                                              ),
                                                              e.name
                                                          )
                                                  },
                                                  t
                                              )
                                          )
                                      })
                                  ]
                              });
                          })({
                              integration: a,
                              emojis: X,
                              onToggle: function (e) {
                                  m.Z.updateIntegration({ enableEmoticons: e });
                              }
                          })
                        : null,
                    (0, r.jsx)(p.$i$, { className: S.bottomDivider }),
                    (0, r.jsx)(g.Z, {
                        children: (0, r.jsx)(u.zx, {
                            className: S.disableButton,
                            size: u.zx.Sizes.SMALL,
                            color: u.zx.Colors.RED,
                            look: u.zx.Looks.LINK,
                            onClick: U,
                            children: I.intl.string(I.t.M6q6eX)
                        })
                    })
                ]
            })),
        (0, r.jsx)(p.Zbd, {
            editable: !0,
            className: S.card,
            children: (0, r.jsxs)(g.Z, {
                direction: g.Z.Direction.VERTICAL,
                children: [
                    l.enabled
                        ? (0, r.jsx)(p.P3F, {
                              className: S.expandableHeader,
                              'aria-expanded': P && !R,
                              onClick: Z,
                              children: $
                          })
                        : $,
                    J
                ]
            })
        })
    );
}
