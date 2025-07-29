(n.d(t, { Z: () => Z }), n(388685), n(642613), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(953529));
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
    v = n(246946),
    O = n(259580),
    y = n(531087),
    _ = n(768581),
    C = n(709054),
    N = n(486199),
    S = n(981631),
    E = n(388032),
    I = n(796920),
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
function Z(e) {
    let t,
        { guild: n, integration: l, editedIntegration: a, isExpanded: Z, onToggleExpand: P, onDisable: A, onEnable: k } = e,
        [D, R] = i.useState(!1),
        L = (0, d.e7)([v.Z], () => v.Z.hidePersonalInformation),
        M = i.useCallback(() => {
            (R(!0), k(l));
        }, [l, k]),
        B = i.useCallback(() => {
            l.syncing ||
                (0, p.h7j)((e) => {
                    var t, n;
                    let i = 0 === l.expire_behavior ? E.intl.string(E.t['6kpw4u']) : E.intl.string(E.t.fQUQIC);
                    return (0, r.jsx)(
                        p.ConfirmModal,
                        ((t = w({}, e)),
                        (n = n =
                            {
                                header: E.intl.string(E.t.emx3lJ),
                                confirmText: i,
                                cancelText: E.intl.string(E.t['ETE/oK']),
                                onConfirm: () => A(l),
                                children: (0, r.jsx)(p.Text, {
                                    variant: 'text-md/normal',
                                    children: l.type === c.b.YOUTUBE ? E.intl.string(E.t.anKQWV) : E.intl.string(E.t['BW/xtr'])
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
        U = i.useCallback(() => {
            h.Z.syncIntegration(n.id, l.id);
        }, [n.id, l.id]),
        W = i.useCallback(() => {
            null != l.role_id && (h.Z.setSection(S.pNK.ROLES), h.Z.selectRole(l.role_id));
        }, [l.role_id]),
        {
            serviceName: H,
            channelURL: G,
            expireBehaviorLabel: z,
            syncLabel: F,
            subscribersText: V
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
                        serviceName: E.intl.string(E.t.aS6cKy),
                        expireBehaviorLabel: E.intl.string(E.t.A5MiqK),
                        syncLabel: E.intl.string(E.t['7vHKVV']),
                        subscribersText: E.intl.formatToPlainString(E.t['7lNtcX'], { subscribers: null != (r = l.subscriber_count) ? r : 0 }),
                        channelURL: o
                    };
                case c.b.TWITCH:
                default:
                    return {
                        serviceName: E.intl.string(E.t.q4pBGx),
                        expireBehaviorLabel: E.intl.string(E.t['S/WCrK']),
                        syncLabel: E.intl.string(E.t['0jbPKy']),
                        subscribersText: E.intl.formatToPlainString(E.t.RdUTrq, { subscribers: null != (i = l.subscriber_count) ? i : 0 }),
                        channelURL: o
                    };
            }
        }, [l.account, l.subscriber_count, l.type]),
        K = (0, d.e7)([j.Z], () => (null != l.role_id ? j.Z.getRole(n.id, l.role_id) : void 0)),
        { roleLink: q, syncDescriptionText: Y } = i.useMemo(() => {
            let e, t;
            e =
                null != K
                    ? (0, r.jsx)(p.eee, {
                          onClick: W,
                          children: K.name
                      })
                    : E.intl.string(E.t.PoWNfX);
            let n = b.Z.get(l.type);
            return {
                roleLink: e,
                syncDescriptionText:
                    l.revoked && null != n
                        ? E.intl.formatToPlainString(E.t.G16Wjo, {
                              user: l.user,
                              platformName: n.name
                          })
                        : E.intl.formatToPlainString(E.t.unl3AA, { datetime: s()(l.synced_at).calendar() })
            };
        }, [K, W, l.revoked, l.synced_at, l.type, l.user]),
        X = (0, d.e7)([j.Z], () => j.Z.getSortedRoles(n.id)),
        J = i.useMemo(() => {
            let e = f.ZP.getGuildEmoji(n.id),
                t = X.filter((e) => null != e.tags && e.tags.integration_id === l.id).map((e) => e.id);
            return l.enable_emoticons ? e.sort((e, t) => e.name.localeCompare(t.name)).filter((e) => null != l.role_id && (null == e ? void 0 : e.roles.some((e) => t.includes(e)))) : [];
        }, [n.id, X, l.enable_emoticons, l.id, l.role_id]);
    if (
        (i.useEffect(() => {
            (null == a ? void 0 : a.id) === l.id && (null == a ? void 0 : a.enabled) === !0 && R(!1);
        }, [a, l.id]),
        l.enabled && null != l.user)
    )
        t = [
            {
                icon: p.T39,
                text: L
                    ? E.intl.formatToPlainString(E.t.gcdJ8P, { timestamp: C.default.extractTimestamp(l.id) })
                    : E.intl.formatToPlainString(E.t.Nu9sam, {
                          user: null != l.user ? new x.Z(l.user).tag : null,
                          timestamp: C.default.extractTimestamp(l.id)
                      })
            }
        ];
    else {
        let e = new URL(G);
        t = [
            {
                text: E.intl.format(E.t.BegylZ, {
                    serviceName: H,
                    accountUrl: G,
                    accountUrlText: e.hostname + e.pathname
                })
            }
        ];
    }
    let $ = (0, r.jsxs)(g.Z, {
            className: I.header,
            align: g.Z.Align.CENTER,
            children: [
                (0, r.jsx)(N.Z, {
                    name: ''.concat(l.name),
                    detailsClassName: I.description,
                    details: t
                }),
                l.enabled
                    ? (0, r.jsx)(g.Z.Child, {
                          shrink: 0,
                          grow: 0,
                          children: (0, r.jsx)(O.Z, {
                              className: I.expandIcon,
                              expanded: Z && !D,
                              'aria-hidden': !0
                          })
                      })
                    : (0, r.jsx)(g.Z.Child, {
                          shrink: 0,
                          grow: 0,
                          children: (0, r.jsx)(u.zx, {
                              size: u.zx.Sizes.SMALL,
                              color: u.zx.Colors.PRIMARY,
                              onClick: M,
                              disabled: D,
                              children: D
                                  ? (0, r.jsx)(y.Z, {
                                        width: 24,
                                        height: 24
                                    })
                                  : (0, r.jsx)(r.Fragment, { children: E.intl.string(E.t['7sCN8v']) })
                          })
                      })
            ]
        }),
        Q = null;
    return (
        Z &&
            !D &&
            null != a &&
            (Q = (0, r.jsxs)(g.Z, {
                className: I.body,
                direction: g.Z.Direction.VERTICAL,
                children: [
                    (0, r.jsx)(p.$i$, { className: I.topDivider }),
                    (function (e) {
                        let { integration: t, labelText: n, subscribersText: i, descriptionText: l, roleLink: o, onSync: a } = e;
                        return (0, r.jsxs)(g.Z, {
                            children: [
                                (0, r.jsxs)(g.Z.Child, {
                                    basis: '50%',
                                    children: [
                                        (0, r.jsx)(p.vwX, {
                                            className: T.marginBottom8,
                                            children: E.intl.string(E.t.eBtNBQ)
                                        }),
                                        (0, r.jsx)(p.Text, {
                                            className: I.syncedRole,
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
                        labelText: F,
                        subscribersText: V,
                        descriptionText: Y,
                        roleLink: q,
                        onSync: U
                    }),
                    (0, r.jsx)(p.$i$, { className: I.midDivider }),
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
                                                    label: E.intl.string(E.t['6kpw4u'])
                                                },
                                                {
                                                    value: '1',
                                                    label: E.intl.string(E.t.fQUQIC)
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
                                            children: E.intl.string(E.t.uiXMo6)
                                        }),
                                        (0, r.jsx)(p.q4e, {
                                            placeholder: E.intl.string(E.t.uiXMo6),
                                            maxVisibleItems: 5,
                                            value: ''.concat(t.expire_grace_period),
                                            options: [1, 3, 7, 14, 30].map((e) => ({
                                                value: ''.concat(e),
                                                label: E.intl.formatToPlainString(E.t.eGjmy8, { days: e })
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
                                          children: (0, r.jsx)(p.R94, { children: E.intl.string(E.t['7r4OKi']) })
                                      }),
                                      (0, r.jsx)(g.Z, {
                                          wrap: g.Z.Wrap.WRAP,
                                          className: I.__invalid_twitchEmojis,
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
                                                                      alt: E.intl.formatToPlainString(E.t.n6ZZn5, { name: e.name }),
                                                                      draggable: !1,
                                                                      className: o()(I.emoji, 'emoji', 'jumboable'),
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
                              emojis: J,
                              onToggle: function (e) {
                                  m.Z.updateIntegration({ enableEmoticons: e });
                              }
                          })
                        : null,
                    (0, r.jsx)(p.$i$, { className: I.bottomDivider }),
                    (0, r.jsx)(g.Z, {
                        children: (0, r.jsx)(u.zx, {
                            className: I.disableButton,
                            size: u.zx.Sizes.SMALL,
                            color: u.zx.Colors.RED,
                            look: u.zx.Looks.LINK,
                            onClick: B,
                            children: E.intl.string(E.t.M6q6eX)
                        })
                    })
                ]
            })),
        (0, r.jsx)(p.Zbd, {
            editable: !0,
            className: I.card,
            children: (0, r.jsxs)(g.Z, {
                direction: g.Z.Direction.VERTICAL,
                children: [
                    l.enabled
                        ? (0, r.jsx)(p.P3F, {
                              className: I.expandableHeader,
                              'aria-expanded': Z && !D,
                              onClick: P,
                              children: $
                          })
                        : $,
                    Q
                ]
            })
        })
    );
}
