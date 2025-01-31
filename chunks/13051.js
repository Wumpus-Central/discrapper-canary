n.d(t, { Z: () => y }), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(913527),
    o = n.n(s),
    d = n(951284),
    c = n(442837),
    u = n(481060),
    m = n(139387),
    h = n(726542),
    x = n(600164),
    p = n(339085),
    g = n(434404),
    f = n(598077),
    b = n(430824),
    v = n(246946),
    _ = n(259580),
    j = n(531087),
    N = n(768581),
    C = n(709054),
    I = n(486199),
    Z = n(981631),
    T = n(388032),
    E = n(563949),
    S = n(232186);
function y(e) {
    let t,
        { guild: n, integration: a, editedIntegration: s, isExpanded: y, onToggleExpand: A, onDisable: k, onEnable: R } = e,
        L = (0, c.e7)([b.Z], () => b.Z.getRoles(n.id)),
        [O, w] = l.useState(!1),
        P = (0, c.e7)([v.Z], () => v.Z.hidePersonalInformation),
        D = l.useCallback(() => {
            w(!0), R(a);
        }, [a, R]),
        M = l.useCallback(() => {
            a.syncing ||
                (0, u.h7j)((e) => {
                    let t = 0 === a.expire_behavior ? T.intl.string(T.t['6kpw4u']) : T.intl.string(T.t.fQUQIC);
                    return (0, i.jsx)(u.ConfirmModal, {
                        ...e,
                        header: T.intl.string(T.t.emx3lJ),
                        confirmText: t,
                        cancelText: T.intl.string(T.t['ETE/oK']),
                        onConfirm: () => k(a),
                        children: (0, i.jsx)(u.Text, {
                            variant: 'text-md/normal',
                            children: a.type === d.b.YOUTUBE ? T.intl.string(T.t.anKQWV) : T.intl.string(T.t['BW/xtr'])
                        })
                    });
                });
        }, [a, k]),
        B = l.useCallback(() => {
            g.Z.syncIntegration(n.id, a.id);
        }, [n.id, a.id]),
        U = l.useCallback(() => {
            null != a.role_id && (g.Z.setSection(Z.pNK.ROLES), g.Z.selectRole(a.role_id));
        }, [a.role_id]),
        {
            serviceName: W,
            channelURL: z,
            expireBehaviorLabel: H,
            syncLabel: G,
            subscribersText: F
        } = l.useMemo(() => {
            var e, t, n, i, l;
            let r =
                null !==
                    (n =
                        null === (t = h.Z.get(a.type)) || void 0 === t
                            ? void 0
                            : null === (e = t.getPlatformUserUrl) || void 0 === e
                              ? void 0
                              : e.call(t, {
                                    id: a.account.id,
                                    name: a.account.name
                                })) && void 0 !== n
                    ? n
                    : '';
            switch (a.type) {
                case d.b.YOUTUBE:
                    return {
                        serviceName: T.intl.string(T.t.aS6cKy),
                        expireBehaviorLabel: T.intl.string(T.t.A5MiqK),
                        syncLabel: T.intl.string(T.t['7vHKVV']),
                        subscribersText: T.intl.formatToPlainString(T.t['7lNtcX'], { subscribers: null !== (i = a.subscriber_count) && void 0 !== i ? i : 0 }),
                        channelURL: r
                    };
                case d.b.TWITCH:
                default:
                    return {
                        serviceName: T.intl.string(T.t.q4pBGx),
                        expireBehaviorLabel: T.intl.string(T.t['S/WCrK']),
                        syncLabel: T.intl.string(T.t['0jbPKy']),
                        subscribersText: T.intl.formatToPlainString(T.t.RdUTrq, { subscribers: null !== (l = a.subscriber_count) && void 0 !== l ? l : 0 }),
                        channelURL: r
                    };
            }
        }, [a.account, a.subscriber_count, a.type]),
        { roleLink: V, syncDescriptionText: K } = l.useMemo(() => {
            let e, t;
            let n = null != a.role_id ? L[a.role_id] : null;
            e =
                null != n
                    ? (0, i.jsx)(u.eee, {
                          onClick: U,
                          children: n.name
                      })
                    : T.intl.string(T.t.PoWNfX);
            let l = h.Z.get(a.type);
            return {
                roleLink: e,
                syncDescriptionText:
                    a.revoked && null != l
                        ? T.intl.formatToPlainString(T.t.G16Wjo, {
                              user: a.user,
                              platformName: l.name
                          })
                        : T.intl.formatToPlainString(T.t.unl3AA, { datetime: o()(a.synced_at).calendar() })
            };
        }, [L, U, a.revoked, a.role_id, a.synced_at, a.type, a.user]),
        q = l.useMemo(() => {
            let e = p.ZP.getGuildEmoji(n.id),
                t = Object.values(L)
                    .filter((e) => null != e.tags && e.tags.integration_id === a.id)
                    .map((e) => e.id);
            return a.enable_emoticons ? e.sort((e, t) => e.name.localeCompare(t.name)).filter((e) => null != a.role_id && (null == e ? void 0 : e.roles.some((e) => t.includes(e)))) : [];
        }, [n.id, L, a.enable_emoticons, a.id, a.role_id]);
    if (
        (l.useEffect(() => {
            (null == s ? void 0 : s.id) === a.id && (null == s ? void 0 : s.enabled) === !0 && w(!1);
        }, [s, a.id]),
        a.enabled && null != a.user)
    )
        t = [
            {
                icon: u.T39,
                text: P
                    ? T.intl.formatToPlainString(T.t.gcdJ8P, { timestamp: C.default.extractTimestamp(a.id) })
                    : T.intl.formatToPlainString(T.t.Nu9sam, {
                          user: null != a.user ? new f.Z(a.user).tag : null,
                          timestamp: C.default.extractTimestamp(a.id)
                      })
            }
        ];
    else {
        let e = new URL(z);
        t = [
            {
                text: T.intl.format(T.t.BegylZ, {
                    serviceName: W,
                    accountUrl: z,
                    accountUrlText: e.hostname + e.pathname
                })
            }
        ];
    }
    let Y = (0, i.jsxs)(x.Z, {
            className: E.header,
            align: x.Z.Align.CENTER,
            children: [
                (0, i.jsx)(I.Z, {
                    name: ''.concat(a.name),
                    detailsClassName: E.description,
                    details: t
                }),
                a.enabled
                    ? (0, i.jsx)(x.Z.Child, {
                          shrink: 0,
                          grow: 0,
                          children: (0, i.jsx)(_.Z, {
                              className: E.expandIcon,
                              expanded: y && !O,
                              'aria-hidden': !0
                          })
                      })
                    : (0, i.jsx)(x.Z.Child, {
                          shrink: 0,
                          grow: 0,
                          children: (0, i.jsx)(u.zxk, {
                              size: u.zxk.Sizes.SMALL,
                              color: u.zxk.Colors.PRIMARY,
                              onClick: D,
                              disabled: O,
                              children: O
                                  ? (0, i.jsx)(j.Z, {
                                        width: 24,
                                        height: 24
                                    })
                                  : (0, i.jsx)(i.Fragment, { children: T.intl.string(T.t['7sCN8v']) })
                          })
                      })
            ]
        }),
        X = null;
    return (
        y &&
            !O &&
            null != s &&
            (X = (0, i.jsxs)(x.Z, {
                className: E.body,
                direction: x.Z.Direction.VERTICAL,
                children: [
                    (0, i.jsx)(u.$i$, { className: E.topDivider }),
                    (function (e) {
                        let { integration: t, labelText: n, subscribersText: l, descriptionText: a, roleLink: r, onSync: s } = e;
                        return (0, i.jsxs)(x.Z, {
                            children: [
                                (0, i.jsxs)(x.Z.Child, {
                                    basis: '50%',
                                    children: [
                                        (0, i.jsx)(u.vwX, {
                                            className: S.marginBottom8,
                                            children: T.intl.string(T.t.eBtNBQ)
                                        }),
                                        (0, i.jsx)(u.Text, {
                                            className: E.syncedRole,
                                            color: 'header-primary',
                                            variant: 'text-sm/normal',
                                            children: r
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(x.Z.Child, {
                                    basis: '50%',
                                    children: [
                                        (0, i.jsx)(u.vwX, {
                                            className: S.marginBottom8,
                                            children: n
                                        }),
                                        (0, i.jsxs)(x.Z, {
                                            justify: x.Z.Justify.BETWEEN,
                                            children: [
                                                (0, i.jsxs)(x.Z, {
                                                    direction: x.Z.Direction.VERTICAL,
                                                    children: [
                                                        (0, i.jsx)(u.Text, {
                                                            color: 'header-primary',
                                                            variant: 'text-sm/normal',
                                                            children: l
                                                        }),
                                                        (0, i.jsx)(u.Text, {
                                                            color: 'header-secondary',
                                                            variant: 'text-xs/normal',
                                                            children: a
                                                        })
                                                    ]
                                                }),
                                                (0, i.jsx)(u.zxk, {
                                                    size: u.zxk.Sizes.SMALL,
                                                    look: u.zxk.Looks.FILLED,
                                                    color: u.zxk.Colors.PRIMARY,
                                                    disabled: t.syncing || t.revoked,
                                                    onClick: s,
                                                    children: t.syncing
                                                        ? (0, i.jsx)(j.Z, {
                                                              width: 24,
                                                              height: 24
                                                          })
                                                        : (0, i.jsx)(i.Fragment, { children: T.intl.string(T.t.BkuOOz) })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        });
                    })({
                        integration: s,
                        labelText: G,
                        subscribersText: F,
                        descriptionText: K,
                        roleLink: V,
                        onSync: B
                    }),
                    (0, i.jsx)(u.$i$, { className: E.midDivider }),
                    (function (e) {
                        let { integration: t, labelText: n, onBehaviorChange: l, onGracePeriodChange: a } = e;
                        return (0, i.jsxs)(x.Z, {
                            children: [
                                (0, i.jsxs)(x.Z.Child, {
                                    basis: '50%',
                                    children: [
                                        (0, i.jsx)(u.vwX, {
                                            className: S.marginBottom8,
                                            children: n
                                        }),
                                        (0, i.jsx)(u.q4e, {
                                            placeholder: n,
                                            value: ''.concat(t.expire_behavior),
                                            options: [
                                                {
                                                    value: '0',
                                                    label: T.intl.string(T.t['6kpw4u'])
                                                },
                                                {
                                                    value: '1',
                                                    label: T.intl.string(T.t.fQUQIC)
                                                }
                                            ],
                                            isDisabled: t.syncing,
                                            onChange: (e) => l(parseInt(e))
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(x.Z.Child, {
                                    basis: '50%',
                                    children: [
                                        (0, i.jsx)(u.vwX, {
                                            className: S.marginBottom8,
                                            children: T.intl.string(T.t.uiXMo6)
                                        }),
                                        (0, i.jsx)(u.q4e, {
                                            placeholder: T.intl.string(T.t.uiXMo6),
                                            maxVisibleItems: 5,
                                            value: ''.concat(t.expire_grace_period),
                                            options: [1, 3, 7, 14, 30].map((e) => ({
                                                value: ''.concat(e),
                                                label: T.intl.formatToPlainString(T.t.eGjmy8, { days: e })
                                            })),
                                            onChange: (e) => a(parseInt(e)),
                                            isDisabled: t.syncing
                                        })
                                    ]
                                })
                            ]
                        });
                    })({
                        integration: s,
                        labelText: H,
                        onBehaviorChange: function (e) {
                            m.Z.updateIntegration({ expireBehavior: e });
                        },
                        onGracePeriodChange: function (e) {
                            m.Z.updateIntegration({ expireGracePeriod: e });
                        }
                    }),
                    a.type === d.b.TWITCH
                        ? (function (e) {
                              let { integration: t, emojis: n, onToggle: l } = e;
                              return (0, i.jsxs)(x.Z, {
                                  direction: x.Z.Direction.VERTICAL,
                                  children: [
                                      (0, i.jsx)(u.XZJ, {
                                          type: u.XZJ.Types.INVERTED,
                                          className: r()(S.marginTop20, S.marginBottom8),
                                          value: t.enable_emoticons,
                                          disabled: t.syncing,
                                          onChange: (e) => {
                                              let { currentTarget: t } = e;
                                              return l(t.checked);
                                          },
                                          children: (0, i.jsx)(u.R94, { children: T.intl.string(T.t['7r4OKi']) })
                                      }),
                                      (0, i.jsx)(x.Z, {
                                          wrap: x.Z.Wrap.WRAP,
                                          className: E.__invalid_twitchEmojis,
                                          children: n.map((e, t) =>
                                              (0, i.jsx)(
                                                  u.ua7,
                                                  {
                                                      text: e.name,
                                                      children: (t) =>
                                                          (0, i.jsx)(
                                                              'img',
                                                              {
                                                                  alt: T.intl.formatToPlainString(T.t.n6ZZn5, { name: e.name }),
                                                                  draggable: !1,
                                                                  className: r()(E.emoji, 'emoji', 'jumboable'),
                                                                  src: N.ZP.getEmojiURL({
                                                                      id: e.id,
                                                                      animated: e.animated,
                                                                      size: 28
                                                                  }),
                                                                  ...t
                                                              },
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
                              integration: s,
                              emojis: q,
                              onToggle: function (e) {
                                  m.Z.updateIntegration({ enableEmoticons: e });
                              }
                          })
                        : null,
                    (0, i.jsx)(u.$i$, { className: E.bottomDivider }),
                    (0, i.jsx)(x.Z, {
                        children: (0, i.jsx)(u.zxk, {
                            className: E.disableButton,
                            size: u.zxk.Sizes.SMALL,
                            color: u.zxk.Colors.RED,
                            look: u.zxk.Looks.LINK,
                            onClick: M,
                            children: T.intl.string(T.t.M6q6eX)
                        })
                    })
                ]
            })),
        (0, i.jsx)(u.Zbd, {
            editable: !0,
            className: E.card,
            children: (0, i.jsxs)(x.Z, {
                direction: x.Z.Direction.VERTICAL,
                children: [
                    a.enabled
                        ? (0, i.jsx)(u.P3F, {
                              className: E.expandableHeader,
                              'aria-expanded': y && !O,
                              onClick: A,
                              children: Y
                          })
                        : Y,
                    X
                ]
            })
        })
    );
}
