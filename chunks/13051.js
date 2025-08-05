(n.d(t, { Z: () => P }), n(388685), n(642613), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(953529));
var i = n(255367),
    r = n(73800),
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
    v = n(246946),
    O = n(259580),
    y = n(531087),
    _ = n(768581),
    C = n(709054),
    N = n(486199),
    S = n(981631),
    I = n(388032),
    w = n(796920),
    Z = n(20493);
function E(e) {
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
function P(e) {
    let t,
        { guild: n, integration: l, editedIntegration: a, isExpanded: P, onToggleExpand: T, onDisable: k, onEnable: A } = e,
        [R, D] = r.useState(!1),
        L = (0, d.e7)([v.Z], () => v.Z.hidePersonalInformation),
        M = r.useCallback(() => {
            (D(!0), A(l));
        }, [l, A]),
        B = r.useCallback(() => {
            l.syncing ||
                (0, p.h7j)((e) => {
                    var t, n;
                    let r = 0 === l.expire_behavior ? I.intl.string(I.t['6kpw4u']) : I.intl.string(I.t.fQUQIC);
                    return (0, i.jsx)(
                        p.ConfirmModal,
                        ((t = E({}, e)),
                        (n = n =
                            {
                                header: I.intl.string(I.t.emx3lJ),
                                confirmText: r,
                                cancelText: I.intl.string(I.t['ETE/oK']),
                                onConfirm: () => k(l),
                                children: (0, i.jsx)(p.Text, {
                                    variant: 'text-md/normal',
                                    children: l.type === c.b.YOUTUBE ? I.intl.string(I.t.anKQWV) : I.intl.string(I.t['BW/xtr'])
                                })
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(n)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                              }),
                        t)
                    );
                });
        }, [l, k]),
        U = r.useCallback(() => {
            h.Z.syncIntegration(n.id, l.id);
        }, [n.id, l.id]),
        W = r.useCallback(() => {
            null != l.role_id && (h.Z.setSection(S.pNK.ROLES), h.Z.selectRole(l.role_id));
        }, [l.role_id]),
        {
            serviceName: H,
            channelURL: G,
            expireBehaviorLabel: z,
            syncLabel: F,
            subscribersText: V
        } = r.useMemo(() => {
            var e, t, n, i, r;
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
                        subscribersText: I.intl.formatToPlainString(I.t['7lNtcX'], { subscribers: null != (i = l.subscriber_count) ? i : 0 }),
                        channelURL: o
                    };
                case c.b.TWITCH:
                default:
                    return {
                        serviceName: I.intl.string(I.t.q4pBGx),
                        expireBehaviorLabel: I.intl.string(I.t['S/WCrK']),
                        syncLabel: I.intl.string(I.t['0jbPKy']),
                        subscribersText: I.intl.formatToPlainString(I.t.RdUTrq, { subscribers: null != (r = l.subscriber_count) ? r : 0 }),
                        channelURL: o
                    };
            }
        }, [l.account, l.subscriber_count, l.type]),
        K = (0, d.e7)([j.Z], () => (null != l.role_id ? j.Z.getRole(n.id, l.role_id) : void 0)),
        { roleLink: q, syncDescriptionText: Y } = r.useMemo(() => {
            let e, t;
            e =
                null != K
                    ? (0, i.jsx)(p.eee, {
                          onClick: W,
                          children: K.name
                      })
                    : I.intl.string(I.t.PoWNfX);
            let n = b.Z.get(l.type);
            return {
                roleLink: e,
                syncDescriptionText:
                    l.revoked && null != n
                        ? I.intl.formatToPlainString(I.t.G16Wjo, {
                              user: l.user,
                              platformName: n.name
                          })
                        : I.intl.formatToPlainString(I.t.unl3AA, { datetime: s()(l.synced_at).calendar() })
            };
        }, [K, W, l.revoked, l.synced_at, l.type, l.user]),
        X = (0, d.e7)([j.Z], () => j.Z.getSortedRoles(n.id)),
        $ = r.useMemo(() => {
            let e = f.ZP.getGuildEmoji(n.id),
                t = X.filter((e) => null != e.tags && e.tags.integration_id === l.id).map((e) => e.id);
            return l.enable_emoticons ? e.sort((e, t) => e.name.localeCompare(t.name)).filter((e) => null != l.role_id && (null == e ? void 0 : e.roles.some((e) => t.includes(e)))) : [];
        }, [n.id, X, l.enable_emoticons, l.id, l.role_id]);
    if (
        (r.useEffect(() => {
            (null == a ? void 0 : a.id) === l.id && (null == a ? void 0 : a.enabled) === !0 && D(!1);
        }, [a, l.id]),
        l.enabled && null != l.user)
    )
        t = [
            {
                icon: p.T39,
                text: L
                    ? I.intl.formatToPlainString(I.t.gcdJ8P, { timestamp: C.default.extractTimestamp(l.id) })
                    : I.intl.formatToPlainString(I.t.Nu9sam, {
                          user: null != l.user ? new x.Z(l.user).tag : null,
                          timestamp: C.default.extractTimestamp(l.id)
                      })
            }
        ];
    else {
        let e = new URL(G);
        t = [
            {
                text: I.intl.format(I.t.BegylZ, {
                    serviceName: H,
                    accountUrl: G,
                    accountUrlText: e.hostname + e.pathname
                })
            }
        ];
    }
    let J = (0, i.jsxs)(g.Z, {
            className: w.header,
            align: g.Z.Align.CENTER,
            children: [
                (0, i.jsx)(N.Z, {
                    name: ''.concat(l.name),
                    detailsClassName: w.description,
                    details: t
                }),
                l.enabled
                    ? (0, i.jsx)(g.Z.Child, {
                          shrink: 0,
                          grow: 0,
                          children: (0, i.jsx)(O.Z, {
                              className: w.expandIcon,
                              expanded: P && !R,
                              'aria-hidden': !0
                          })
                      })
                    : (0, i.jsx)(g.Z.Child, {
                          shrink: 0,
                          grow: 0,
                          children: (0, i.jsx)(u.zx, {
                              size: u.zx.Sizes.SMALL,
                              color: u.zx.Colors.PRIMARY,
                              onClick: M,
                              disabled: R,
                              children: R
                                  ? (0, i.jsx)(y.Z, {
                                        width: 24,
                                        height: 24
                                    })
                                  : (0, i.jsx)(i.Fragment, { children: I.intl.string(I.t['7sCN8v']) })
                          })
                      })
            ]
        }),
        Q = null;
    return (
        P &&
            !R &&
            null != a &&
            (Q = (0, i.jsxs)(g.Z, {
                className: w.body,
                direction: g.Z.Direction.VERTICAL,
                children: [
                    (0, i.jsx)(p.$i$, { className: w.topDivider }),
                    (function (e) {
                        let { integration: t, labelText: n, subscribersText: r, descriptionText: l, roleLink: o, onSync: a } = e;
                        return (0, i.jsxs)(g.Z, {
                            children: [
                                (0, i.jsxs)(g.Z.Child, {
                                    basis: '50%',
                                    children: [
                                        (0, i.jsx)(p.vwX, {
                                            className: Z.marginBottom8,
                                            children: I.intl.string(I.t.eBtNBQ)
                                        }),
                                        (0, i.jsx)(p.Text, {
                                            className: w.syncedRole,
                                            color: 'header-primary',
                                            variant: 'text-sm/normal',
                                            children: o
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(g.Z.Child, {
                                    basis: '50%',
                                    children: [
                                        (0, i.jsx)(p.vwX, {
                                            className: Z.marginBottom8,
                                            children: n
                                        }),
                                        (0, i.jsxs)(g.Z, {
                                            justify: g.Z.Justify.BETWEEN,
                                            children: [
                                                (0, i.jsxs)(g.Z, {
                                                    direction: g.Z.Direction.VERTICAL,
                                                    children: [
                                                        (0, i.jsx)(p.Text, {
                                                            color: 'header-primary',
                                                            variant: 'text-sm/normal',
                                                            children: r
                                                        }),
                                                        (0, i.jsx)(p.Text, {
                                                            color: 'header-secondary',
                                                            variant: 'text-xs/normal',
                                                            children: l
                                                        })
                                                    ]
                                                }),
                                                (0, i.jsx)(u.zx, {
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
                        labelText: F,
                        subscribersText: V,
                        descriptionText: Y,
                        roleLink: q,
                        onSync: U
                    }),
                    (0, i.jsx)(p.$i$, { className: w.midDivider }),
                    (function (e) {
                        let { integration: t, labelText: n, onBehaviorChange: r, onGracePeriodChange: l } = e;
                        return (0, i.jsxs)(g.Z, {
                            children: [
                                (0, i.jsxs)(g.Z.Child, {
                                    basis: '50%',
                                    children: [
                                        (0, i.jsx)(p.vwX, {
                                            className: Z.marginBottom8,
                                            children: n
                                        }),
                                        (0, i.jsx)(p.q4e, {
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
                                            onChange: (e) => r(parseInt(e))
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(g.Z.Child, {
                                    basis: '50%',
                                    children: [
                                        (0, i.jsx)(p.vwX, {
                                            className: Z.marginBottom8,
                                            children: I.intl.string(I.t.uiXMo6)
                                        }),
                                        (0, i.jsx)(p.q4e, {
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
                        labelText: z,
                        onBehaviorChange: function (e) {
                            m.Z.updateIntegration({ expireBehavior: e });
                        },
                        onGracePeriodChange: function (e) {
                            m.Z.updateIntegration({ expireGracePeriod: e });
                        }
                    }),
                    l.type === c.b.TWITCH
                        ? (function (e) {
                              let { integration: t, emojis: n, onToggle: r } = e;
                              return (0, i.jsxs)(g.Z, {
                                  direction: g.Z.Direction.VERTICAL,
                                  children: [
                                      (0, i.jsx)(p.XZJ, {
                                          type: p.XZJ.Types.INVERTED,
                                          className: o()(Z.marginTop20, Z.marginBottom8),
                                          value: t.enable_emoticons,
                                          disabled: t.syncing,
                                          onChange: (e) => {
                                              let { currentTarget: t } = e;
                                              return r(t.checked);
                                          },
                                          children: (0, i.jsx)(p.R94, { children: I.intl.string(I.t['7r4OKi']) })
                                      }),
                                      (0, i.jsx)(g.Z, {
                                          wrap: g.Z.Wrap.WRAP,
                                          className: w.__invalid_twitchEmojis,
                                          children: n.map((e, t) =>
                                              (0, i.jsx)(
                                                  p.ua7,
                                                  {
                                                      text: e.name,
                                                      children: (t) =>
                                                          (0, i.jsx)(
                                                              'img',
                                                              E(
                                                                  {
                                                                      alt: I.intl.formatToPlainString(I.t.n6ZZn5, { name: e.name }),
                                                                      draggable: !1,
                                                                      className: o()(w.emoji, 'emoji', 'jumboable'),
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
                              emojis: $,
                              onToggle: function (e) {
                                  m.Z.updateIntegration({ enableEmoticons: e });
                              }
                          })
                        : null,
                    (0, i.jsx)(p.$i$, { className: w.bottomDivider }),
                    (0, i.jsx)(g.Z, {
                        children: (0, i.jsx)(u.zx, {
                            className: w.disableButton,
                            size: u.zx.Sizes.SMALL,
                            color: u.zx.Colors.RED,
                            look: u.zx.Looks.LINK,
                            onClick: B,
                            children: I.intl.string(I.t.M6q6eX)
                        })
                    })
                ]
            })),
        (0, i.jsx)(p.Zbd, {
            editable: !0,
            className: w.card,
            children: (0, i.jsxs)(g.Z, {
                direction: g.Z.Direction.VERTICAL,
                children: [
                    l.enabled
                        ? (0, i.jsx)(p.P3F, {
                              className: w.expandableHeader,
                              'aria-expanded': P && !R,
                              onClick: T,
                              children: J
                          })
                        : J,
                    Q
                ]
            })
        })
    );
}
