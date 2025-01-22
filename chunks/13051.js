n.d(t, {
    Z: function () {
        return y;
    }
}),
    n(47120),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(913527),
    s = n.n(o),
    d = n(951284),
    c = n(442837),
    u = n(481060),
    m = n(139387),
    h = n(726542),
    p = n(600164),
    g = n(339085),
    x = n(434404),
    f = n(598077),
    v = n(430824),
    b = n(246946),
    C = n(259580),
    I = n(531087),
    N = n(768581),
    j = n(709054),
    T = n(486199),
    _ = n(981631),
    Z = n(388032),
    E = n(563949),
    S = n(232186);
function y(e) {
    let t,
        { guild: n, integration: r, editedIntegration: o, isExpanded: y, onToggleExpand: A, onDisable: L, onEnable: R } = e,
        k = (0, c.e7)([v.Z], () => v.Z.getRoles(n.id)),
        [O, w] = l.useState(!1),
        M = (0, c.e7)([b.Z], () => b.Z.hidePersonalInformation),
        P = l.useCallback(() => {
            w(!0), R(r);
        }, [r, R]),
        B = l.useCallback(() => {
            !r.syncing &&
                (0, u.openModal)((e) => {
                    let t = 0 === r.expire_behavior ? Z.intl.string(Z.t['6kpw4u']) : Z.intl.string(Z.t.fQUQIC);
                    return (0, i.jsx)(u.ConfirmModal, {
                        ...e,
                        header: Z.intl.string(Z.t.emx3lJ),
                        confirmText: t,
                        cancelText: Z.intl.string(Z.t['ETE/oK']),
                        onConfirm: () => L(r),
                        children: (0, i.jsx)(u.Text, {
                            variant: 'text-md/normal',
                            children: r.type === d.b.YOUTUBE ? Z.intl.string(Z.t.anKQWV) : Z.intl.string(Z.t['BW/xtr'])
                        })
                    });
                });
        }, [r, L]),
        D = l.useCallback(() => {
            x.Z.syncIntegration(n.id, r.id);
        }, [n.id, r.id]),
        U = l.useCallback(() => {
            null != r.role_id && (x.Z.setSection(_.pNK.ROLES), x.Z.selectRole(r.role_id));
        }, [r.role_id]),
        {
            serviceName: F,
            channelURL: W,
            expireBehaviorLabel: H,
            syncLabel: G,
            subscribersText: z
        } = l.useMemo(() => {
            var e, t, n, i, l;
            let a =
                null !==
                    (n =
                        null === (t = h.Z.get(r.type)) || void 0 === t
                            ? void 0
                            : null === (e = t.getPlatformUserUrl) || void 0 === e
                              ? void 0
                              : e.call(t, {
                                    id: r.account.id,
                                    name: r.account.name
                                })) && void 0 !== n
                    ? n
                    : '';
            switch (r.type) {
                case d.b.YOUTUBE:
                    return {
                        serviceName: Z.intl.string(Z.t.aS6cKy),
                        expireBehaviorLabel: Z.intl.string(Z.t.A5MiqK),
                        syncLabel: Z.intl.string(Z.t['7vHKVV']),
                        subscribersText: Z.intl.formatToPlainString(Z.t['7lNtcX'], { subscribers: null !== (i = r.subscriber_count) && void 0 !== i ? i : 0 }),
                        channelURL: a
                    };
                case d.b.TWITCH:
                default:
                    return {
                        serviceName: Z.intl.string(Z.t.q4pBGx),
                        expireBehaviorLabel: Z.intl.string(Z.t['S/WCrK']),
                        syncLabel: Z.intl.string(Z.t['0jbPKy']),
                        subscribersText: Z.intl.formatToPlainString(Z.t.RdUTrq, { subscribers: null !== (l = r.subscriber_count) && void 0 !== l ? l : 0 }),
                        channelURL: a
                    };
            }
        }, [r.account, r.subscriber_count, r.type]),
        { roleLink: V, syncDescriptionText: K } = l.useMemo(() => {
            let e, t;
            let n = null != r.role_id ? k[r.role_id] : null;
            e =
                null != n
                    ? (0, i.jsx)(u.Anchor, {
                          onClick: U,
                          children: n.name
                      })
                    : Z.intl.string(Z.t.PoWNfX);
            let l = h.Z.get(r.type);
            return {
                roleLink: e,
                syncDescriptionText: (t =
                    r.revoked && null != l
                        ? Z.intl.formatToPlainString(Z.t.G16Wjo, {
                              user: r.user,
                              platformName: l.name
                          })
                        : Z.intl.formatToPlainString(Z.t.unl3AA, { datetime: s()(r.synced_at).calendar() }))
            };
        }, [k, U, r.revoked, r.role_id, r.synced_at, r.type, r.user]),
        q = l.useMemo(() => {
            let e = g.ZP.getGuildEmoji(n.id),
                t = Object.values(k)
                    .filter((e) => null != e.tags && e.tags.integration_id === r.id)
                    .map((e) => e.id);
            return r.enable_emoticons ? e.sort((e, t) => e.name.localeCompare(t.name)).filter((e) => null != r.role_id && (null == e ? void 0 : e.roles.some((e) => t.includes(e)))) : [];
        }, [n.id, k, r.enable_emoticons, r.id, r.role_id]);
    if (
        (l.useEffect(() => {
            (null == o ? void 0 : o.id) === r.id && (null == o ? void 0 : o.enabled) === !0 && w(!1);
        }, [o, r.id]),
        r.enabled && null != r.user)
    )
        t = [
            {
                icon: u.ClockIcon,
                text: M
                    ? Z.intl.formatToPlainString(Z.t.gcdJ8P, { timestamp: j.default.extractTimestamp(r.id) })
                    : Z.intl.formatToPlainString(Z.t.Nu9sam, {
                          user: null != r.user ? new f.Z(r.user).tag : null,
                          timestamp: j.default.extractTimestamp(r.id)
                      })
            }
        ];
    else {
        let e = new URL(W);
        t = [
            {
                text: Z.intl.format(Z.t.BegylZ, {
                    serviceName: F,
                    accountUrl: W,
                    accountUrlText: e.hostname + e.pathname
                })
            }
        ];
    }
    let Y = (0, i.jsxs)(p.Z, {
            className: E.header,
            align: p.Z.Align.CENTER,
            children: [
                (0, i.jsx)(T.Z, {
                    name: ''.concat(r.name),
                    detailsClassName: E.description,
                    details: t
                }),
                r.enabled
                    ? (0, i.jsx)(p.Z.Child, {
                          shrink: 0,
                          grow: 0,
                          children: (0, i.jsx)(C.Z, {
                              className: E.expandIcon,
                              expanded: y && !O,
                              'aria-hidden': !0
                          })
                      })
                    : (0, i.jsx)(p.Z.Child, {
                          shrink: 0,
                          grow: 0,
                          children: (0, i.jsx)(u.Button, {
                              size: u.Button.Sizes.SMALL,
                              color: u.Button.Colors.PRIMARY,
                              onClick: P,
                              disabled: O,
                              children: O
                                  ? (0, i.jsx)(I.Z, {
                                        width: 24,
                                        height: 24
                                    })
                                  : (0, i.jsx)(i.Fragment, { children: Z.intl.string(Z.t['7sCN8v']) })
                          })
                      })
            ]
        }),
        J = null;
    return (
        y &&
            !O &&
            null != o &&
            (J = (0, i.jsxs)(p.Z, {
                className: E.body,
                direction: p.Z.Direction.VERTICAL,
                children: [
                    (0, i.jsx)(u.FormDivider, { className: E.topDivider }),
                    (function (e) {
                        let { integration: t, labelText: n, subscribersText: l, descriptionText: r, roleLink: a, onSync: o } = e;
                        return (0, i.jsxs)(p.Z, {
                            children: [
                                (0, i.jsxs)(p.Z.Child, {
                                    basis: '50%',
                                    children: [
                                        (0, i.jsx)(u.FormTitle, {
                                            className: S.marginBottom8,
                                            children: Z.intl.string(Z.t.eBtNBQ)
                                        }),
                                        (0, i.jsx)(u.Text, {
                                            className: E.syncedRole,
                                            color: 'header-primary',
                                            variant: 'text-sm/normal',
                                            children: a
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(p.Z.Child, {
                                    basis: '50%',
                                    children: [
                                        (0, i.jsx)(u.FormTitle, {
                                            className: S.marginBottom8,
                                            children: n
                                        }),
                                        (0, i.jsxs)(p.Z, {
                                            justify: p.Z.Justify.BETWEEN,
                                            children: [
                                                (0, i.jsxs)(p.Z, {
                                                    direction: p.Z.Direction.VERTICAL,
                                                    children: [
                                                        (0, i.jsx)(u.Text, {
                                                            color: 'header-primary',
                                                            variant: 'text-sm/normal',
                                                            children: l
                                                        }),
                                                        (0, i.jsx)(u.Text, {
                                                            color: 'header-secondary',
                                                            variant: 'text-xs/normal',
                                                            children: r
                                                        })
                                                    ]
                                                }),
                                                (0, i.jsx)(u.Button, {
                                                    size: u.Button.Sizes.SMALL,
                                                    look: u.Button.Looks.FILLED,
                                                    color: u.Button.Colors.PRIMARY,
                                                    disabled: t.syncing || t.revoked,
                                                    onClick: o,
                                                    children: t.syncing
                                                        ? (0, i.jsx)(I.Z, {
                                                              width: 24,
                                                              height: 24
                                                          })
                                                        : (0, i.jsx)(i.Fragment, { children: Z.intl.string(Z.t.BkuOOz) })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        });
                    })({
                        integration: o,
                        labelText: G,
                        subscribersText: z,
                        descriptionText: K,
                        roleLink: V,
                        onSync: D
                    }),
                    (0, i.jsx)(u.FormDivider, { className: E.midDivider }),
                    (function (e) {
                        let { integration: t, labelText: n, onBehaviorChange: l, onGracePeriodChange: r } = e;
                        return (0, i.jsxs)(p.Z, {
                            children: [
                                (0, i.jsxs)(p.Z.Child, {
                                    basis: '50%',
                                    children: [
                                        (0, i.jsx)(u.FormTitle, {
                                            className: S.marginBottom8,
                                            children: n
                                        }),
                                        (0, i.jsx)(u.SingleSelect, {
                                            placeholder: n,
                                            value: ''.concat(t.expire_behavior),
                                            options: [
                                                {
                                                    value: '0',
                                                    label: Z.intl.string(Z.t['6kpw4u'])
                                                },
                                                {
                                                    value: '1',
                                                    label: Z.intl.string(Z.t.fQUQIC)
                                                }
                                            ],
                                            isDisabled: t.syncing,
                                            onChange: (e) => l(parseInt(e))
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(p.Z.Child, {
                                    basis: '50%',
                                    children: [
                                        (0, i.jsx)(u.FormTitle, {
                                            className: S.marginBottom8,
                                            children: Z.intl.string(Z.t.uiXMo6)
                                        }),
                                        (0, i.jsx)(u.SingleSelect, {
                                            placeholder: Z.intl.string(Z.t.uiXMo6),
                                            maxVisibleItems: 5,
                                            value: ''.concat(t.expire_grace_period),
                                            options: [1, 3, 7, 14, 30].map((e) => ({
                                                value: ''.concat(e),
                                                label: Z.intl.formatToPlainString(Z.t.eGjmy8, { days: e })
                                            })),
                                            onChange: (e) => r(parseInt(e)),
                                            isDisabled: t.syncing
                                        })
                                    ]
                                })
                            ]
                        });
                    })({
                        integration: o,
                        labelText: H,
                        onBehaviorChange: function (e) {
                            m.Z.updateIntegration({ expireBehavior: e });
                        },
                        onGracePeriodChange: function (e) {
                            m.Z.updateIntegration({ expireGracePeriod: e });
                        }
                    }),
                    r.type === d.b.TWITCH
                        ? (function (e) {
                              let { integration: t, emojis: n, onToggle: l } = e;
                              return (0, i.jsxs)(p.Z, {
                                  direction: p.Z.Direction.VERTICAL,
                                  children: [
                                      (0, i.jsx)(u.Checkbox, {
                                          type: u.Checkbox.Types.INVERTED,
                                          className: a()(S.marginTop20, S.marginBottom8),
                                          value: t.enable_emoticons,
                                          disabled: t.syncing,
                                          onChange: (e) => {
                                              let { currentTarget: t } = e;
                                              return l(t.checked);
                                          },
                                          children: (0, i.jsx)(u.FormText, { children: Z.intl.string(Z.t['7r4OKi']) })
                                      }),
                                      (0, i.jsx)(p.Z, {
                                          wrap: p.Z.Wrap.WRAP,
                                          className: E.__invalid_twitchEmojis,
                                          children: n.map((e, t) =>
                                              (0, i.jsx)(
                                                  u.Tooltip,
                                                  {
                                                      text: e.name,
                                                      children: (t) =>
                                                          (0, i.jsx)(
                                                              'img',
                                                              {
                                                                  alt: Z.intl.formatToPlainString(Z.t.n6ZZn5, { name: e.name }),
                                                                  draggable: !1,
                                                                  className: a()(E.emoji, 'emoji', 'jumboable'),
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
                              integration: o,
                              emojis: q,
                              onToggle: function (e) {
                                  m.Z.updateIntegration({ enableEmoticons: e });
                              }
                          })
                        : null,
                    (0, i.jsx)(u.FormDivider, { className: E.bottomDivider }),
                    (0, i.jsx)(p.Z, {
                        children: (0, i.jsx)(u.Button, {
                            className: E.disableButton,
                            size: u.Button.Sizes.SMALL,
                            color: u.Button.Colors.RED,
                            look: u.Button.Looks.LINK,
                            onClick: B,
                            children: Z.intl.string(Z.t.M6q6eX)
                        })
                    })
                ]
            })),
        (0, i.jsx)(u.Card, {
            editable: !0,
            className: E.card,
            children: (0, i.jsxs)(p.Z, {
                direction: p.Z.Direction.VERTICAL,
                children: [
                    r.enabled
                        ? (0, i.jsx)(u.Clickable, {
                              className: E.expandableHeader,
                              'aria-expanded': y && !O,
                              onClick: A,
                              children: Y
                          })
                        : Y,
                    J
                ]
            })
        })
    );
}
