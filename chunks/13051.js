n.d(t, { Z: () => T }), n(388685), n(642613), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(953529);
var i = n(255367),
    r = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(913527),
    s = n.n(o),
    c = n(951284),
    d = n(442837),
    u = n(481060),
    p = n(139387),
    m = n(726542),
    b = n(600164),
    g = n(339085),
    f = n(434404),
    h = n(598077),
    x = n(485386),
    j = n(246946),
    v = n(259580),
    y = n(768581),
    O = n(709054),
    _ = n(486199),
    C = n(981631),
    N = n(388032),
    Z = n(516941),
    S = n(197571);
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function T(e) {
    let t,
        {
            guild: n,
            integration: l,
            editedIntegration: o,
            isExpanded: T,
            onToggleExpand: I,
            onDisable: P,
            onEnable: E,
        } = e,
        [k, A] = r.useState(!1),
        D = (0, d.e7)([j.Z], () => j.Z.hidePersonalInformation),
        R = r.useCallback(() => {
            A(!0), E(l);
        }, [l, E]),
        L = r.useCallback(() => {
            l.syncing ||
                (0, u.h7j)((e) => {
                    var t, n;
                    let r = 0 === l.expire_behavior ? N.intl.string(N.t["6kpw4u"]) : N.intl.string(N.t.fQUQIC);
                    return (0, i.jsx)(
                        u.ConfirmModal,
                        ((t = w({}, e)),
                        (n = n =
                            {
                                header: N.intl.string(N.t.emx3lJ),
                                confirmText: r,
                                cancelText: N.intl.string(N.t["ETE/oK"]),
                                onConfirm: () => P(l),
                                children: (0, i.jsx)(u.Text, {
                                    variant: "text-md/normal",
                                    children:
                                        l.type === c.b.YOUTUBE
                                            ? N.intl.string(N.t.anKQWV)
                                            : N.intl.string(N.t["BW/xtr"]),
                                }),
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
                        t),
                    );
                });
        }, [l, P]),
        M = r.useCallback(() => {
            f.Z.syncIntegration(n.id, l.id);
        }, [n.id, l.id]),
        B = r.useCallback(() => {
            null != l.role_id && (f.Z.setSection(C.pNK.ROLES), f.Z.selectRole(l.role_id));
        }, [l.role_id]),
        {
            serviceName: W,
            channelURL: U,
            expireBehaviorLabel: H,
            syncLabel: G,
            subscribersText: z,
        } = r.useMemo(() => {
            var e, t, n, i, r;
            let a =
                null !=
                (n =
                    null == (t = m.Z.get(l.type)) || null == (e = t.getPlatformUserUrl)
                        ? void 0
                        : e.call(t, {
                              id: l.account.id,
                              name: l.account.name,
                          }))
                    ? n
                    : "";
            switch (l.type) {
                case c.b.YOUTUBE:
                    return {
                        serviceName: N.intl.string(N.t.aS6cKy),
                        expireBehaviorLabel: N.intl.string(N.t.A5MiqK),
                        syncLabel: N.intl.string(N.t["7vHKVV"]),
                        subscribersText: N.intl.formatToPlainString(N.t["7lNtcX"], {
                            subscribers: null != (i = l.subscriber_count) ? i : 0,
                        }),
                        channelURL: a,
                    };
                case c.b.TWITCH:
                default:
                    return {
                        serviceName: N.intl.string(N.t.q4pBGx),
                        expireBehaviorLabel: N.intl.string(N.t["S/WCrK"]),
                        syncLabel: N.intl.string(N.t["0jbPKy"]),
                        subscribersText: N.intl.formatToPlainString(N.t.RdUTrq, {
                            subscribers: null != (r = l.subscriber_count) ? r : 0,
                        }),
                        channelURL: a,
                    };
            }
        }, [l.account, l.subscriber_count, l.type]),
        F = (0, d.e7)([x.Z], () => (null != l.role_id ? x.Z.getRole(n.id, l.role_id) : void 0)),
        { roleLink: K, syncDescriptionText: V } = r.useMemo(() => {
            let e;
            e =
                null != F
                    ? (0, i.jsx)(u.eee, {
                          onClick: B,
                          children: F.name,
                      })
                    : N.intl.string(N.t.PoWNfX);
            let t = m.Z.get(l.type);
            return {
                roleLink: e,
                syncDescriptionText:
                    l.revoked && null != t
                        ? N.intl.formatToPlainString(N.t.G16Wjo, {
                              user: l.user,
                              platformName: t.name,
                          })
                        : N.intl.formatToPlainString(N.t.unl3AA, { datetime: s()(l.synced_at).calendar() }),
            };
        }, [F, B, l.revoked, l.synced_at, l.type, l.user]),
        q = (0, d.e7)([x.Z], () => x.Z.getSortedRoles(n.id)),
        Y = r.useMemo(() => {
            let e = g.ZP.getGuildEmoji(n.id),
                t = q.filter((e) => null != e.tags && e.tags.integration_id === l.id).map((e) => e.id);
            return l.enable_emoticons
                ? e
                      .sort((e, t) => e.name.localeCompare(t.name))
                      .filter((e) => null != l.role_id && (null == e ? void 0 : e.roles.some((e) => t.includes(e))))
                : [];
        }, [n.id, q, l.enable_emoticons, l.id, l.role_id]);
    if (
        (r.useEffect(() => {
            (null == o ? void 0 : o.id) === l.id && (null == o ? void 0 : o.enabled) === !0 && A(!1);
        }, [o, l.id]),
        l.enabled && null != l.user)
    )
        t = [
            {
                icon: u.T39,
                text: D
                    ? N.intl.formatToPlainString(N.t.gcdJ8P, { timestamp: O.default.extractTimestamp(l.id) })
                    : N.intl.formatToPlainString(N.t.Nu9sam, {
                          user: null != l.user ? new h.Z(l.user).tag : null,
                          timestamp: O.default.extractTimestamp(l.id),
                      }),
            },
        ];
    else {
        let e = new URL(U);
        t = [
            {
                text: N.intl.format(N.t.BegylZ, {
                    serviceName: W,
                    accountUrl: U,
                    accountUrlText: e.hostname + e.pathname,
                }),
            },
        ];
    }
    let $ = (0, i.jsxs)(b.Z, {
            className: Z.header,
            align: b.Z.Align.CENTER,
            children: [
                (0, i.jsx)(_.Z, {
                    name: "".concat(l.name),
                    detailsClassName: Z.description,
                    details: t,
                }),
                l.enabled
                    ? (0, i.jsx)(b.Z.Child, {
                          shrink: 0,
                          grow: 0,
                          children: (0, i.jsx)(v.Z, {
                              className: Z.expandIcon,
                              expanded: T && !k,
                              "aria-hidden": !0,
                          }),
                      })
                    : (0, i.jsx)(b.Z.Child, {
                          shrink: 0,
                          grow: 0,
                          children: k
                              ? (0, i.jsx)(u.hU, {
                                    variant: "primary",
                                    size: "sm",
                                    disabled: !0,
                                    icon: u.DuK,
                                    "aria-label": N.intl.string(N.t["7sCN8v"]),
                                })
                              : (0, i.jsx)(u.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    onClick: R,
                                    text: N.intl.string(N.t["7sCN8v"]),
                                }),
                      }),
            ],
        }),
        J = null;
    return (
        T &&
            !k &&
            null != o &&
            (J = (0, i.jsxs)(b.Z, {
                className: Z.body,
                direction: b.Z.Direction.VERTICAL,
                children: [
                    (0, i.jsx)(u.$i$, { className: Z.topDivider }),
                    (function (e) {
                        let {
                            integration: t,
                            labelText: n,
                            subscribersText: r,
                            descriptionText: l,
                            roleLink: a,
                            onSync: o,
                        } = e;
                        return (0, i.jsxs)(b.Z, {
                            children: [
                                (0, i.jsxs)(b.Z.Child, {
                                    basis: "50%",
                                    children: [
                                        (0, i.jsx)(u.vwX, {
                                            className: S.marginBottom8,
                                            children: N.intl.string(N.t.eBtNBQ),
                                        }),
                                        (0, i.jsx)(u.Text, {
                                            className: Z.syncedRole,
                                            color: "header-primary",
                                            variant: "text-sm/normal",
                                            children: a,
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)(b.Z.Child, {
                                    basis: "50%",
                                    children: [
                                        (0, i.jsx)(u.vwX, {
                                            className: S.marginBottom8,
                                            children: n,
                                        }),
                                        (0, i.jsxs)(b.Z, {
                                            justify: b.Z.Justify.BETWEEN,
                                            children: [
                                                (0, i.jsxs)(b.Z, {
                                                    direction: b.Z.Direction.VERTICAL,
                                                    children: [
                                                        (0, i.jsx)(u.Text, {
                                                            color: "header-primary",
                                                            variant: "text-sm/normal",
                                                            children: r,
                                                        }),
                                                        (0, i.jsx)(u.Text, {
                                                            color: "header-secondary",
                                                            variant: "text-xs/normal",
                                                            children: l,
                                                        }),
                                                    ],
                                                }),
                                                t.syncing
                                                    ? (0, i.jsx)(u.hU, {
                                                          size: "sm",
                                                          variant: "primary",
                                                          icon: u.DuK,
                                                          "aria-label": N.intl.string(N.t.BkuOOz),
                                                          disabled: !0,
                                                      })
                                                    : (0, i.jsx)(u.zxk, {
                                                          size: "sm",
                                                          variant: "primary",
                                                          text: N.intl.string(N.t.BkuOOz),
                                                          disabled: t.revoked,
                                                          onClick: o,
                                                      }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        });
                    })({
                        integration: o,
                        labelText: G,
                        subscribersText: z,
                        descriptionText: V,
                        roleLink: K,
                        onSync: M,
                    }),
                    (0, i.jsx)(u.$i$, { className: Z.midDivider }),
                    (function (e) {
                        let { integration: t, labelText: n, onBehaviorChange: r, onGracePeriodChange: l } = e;
                        return (0, i.jsxs)(b.Z, {
                            children: [
                                (0, i.jsxs)(b.Z.Child, {
                                    basis: "50%",
                                    children: [
                                        (0, i.jsx)(u.vwX, {
                                            className: S.marginBottom8,
                                            children: n,
                                        }),
                                        (0, i.jsx)(u.q4e, {
                                            placeholder: n,
                                            value: "".concat(t.expire_behavior),
                                            options: [
                                                {
                                                    value: "0",
                                                    label: N.intl.string(N.t["6kpw4u"]),
                                                },
                                                {
                                                    value: "1",
                                                    label: N.intl.string(N.t.fQUQIC),
                                                },
                                            ],
                                            isDisabled: t.syncing,
                                            onChange: (e) => r(parseInt(e)),
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)(b.Z.Child, {
                                    basis: "50%",
                                    children: [
                                        (0, i.jsx)(u.vwX, {
                                            className: S.marginBottom8,
                                            children: N.intl.string(N.t.uiXMo6),
                                        }),
                                        (0, i.jsx)(u.q4e, {
                                            placeholder: N.intl.string(N.t.uiXMo6),
                                            maxVisibleItems: 5,
                                            value: "".concat(t.expire_grace_period),
                                            options: [1, 3, 7, 14, 30].map((e) => ({
                                                value: "".concat(e),
                                                label: N.intl.formatToPlainString(N.t.eGjmy8, { days: e }),
                                            })),
                                            onChange: (e) => l(parseInt(e)),
                                            isDisabled: t.syncing,
                                        }),
                                    ],
                                }),
                            ],
                        });
                    })({
                        integration: o,
                        labelText: H,
                        onBehaviorChange: function (e) {
                            p.Z.updateIntegration({ expireBehavior: e });
                        },
                        onGracePeriodChange: function (e) {
                            p.Z.updateIntegration({ expireGracePeriod: e });
                        },
                    }),
                    l.type === c.b.TWITCH
                        ? (function (e) {
                              let { integration: t, emojis: n, onToggle: r } = e;
                              return (0, i.jsxs)(b.Z, {
                                  direction: b.Z.Direction.VERTICAL,
                                  children: [
                                      (0, i.jsx)(u.XZJ, {
                                          type: u.XZJ.Types.INVERTED,
                                          className: a()(S.marginTop20, S.marginBottom8),
                                          value: t.enable_emoticons,
                                          disabled: t.syncing,
                                          onChange: (e) => {
                                              let { currentTarget: t } = e;
                                              return r(t.checked);
                                          },
                                          children: (0, i.jsx)(u.R94, { children: N.intl.string(N.t["7r4OKi"]) }),
                                      }),
                                      (0, i.jsx)(b.Z, {
                                          wrap: b.Z.Wrap.WRAP,
                                          className: Z.__invalid_twitchEmojis,
                                          children: n.map((e, t) =>
                                              (0, i.jsx)(
                                                  u.ua7,
                                                  {
                                                      text: e.name,
                                                      children: (t) =>
                                                          (0, i.jsx)(
                                                              "img",
                                                              w(
                                                                  {
                                                                      alt: N.intl.formatToPlainString(N.t.n6ZZn5, {
                                                                          name: e.name,
                                                                      }),
                                                                      draggable: !1,
                                                                      className: a()(Z.emoji, "emoji", "jumboable"),
                                                                      src: y.ZP.getEmojiURL({
                                                                          id: e.id,
                                                                          animated: e.animated,
                                                                          size: 28,
                                                                      }),
                                                                  },
                                                                  t,
                                                              ),
                                                              e.name,
                                                          ),
                                                  },
                                                  t,
                                              ),
                                          ),
                                      }),
                                  ],
                              });
                          })({
                              integration: o,
                              emojis: Y,
                              onToggle: function (e) {
                                  p.Z.updateIntegration({ enableEmoticons: e });
                              },
                          })
                        : null,
                    (0, i.jsx)(u.$i$, { className: Z.bottomDivider }),
                    (0, i.jsx)(b.Z, {
                        children: (0, i.jsx)(u.zxk, {
                            size: "sm",
                            variant: "critical-secondary",
                            text: N.intl.string(N.t.M6q6eX),
                            onClick: L,
                        }),
                    }),
                ],
            })),
        (0, i.jsx)(u.Zbd, {
            editable: !0,
            className: Z.card,
            children: (0, i.jsxs)(b.Z, {
                direction: b.Z.Direction.VERTICAL,
                children: [
                    l.enabled
                        ? (0, i.jsx)(u.P3F, {
                              className: Z.expandableHeader,
                              "aria-expanded": T && !k,
                              onClick: I,
                              children: $,
                          })
                        : $,
                    J,
                ],
            }),
        })
    );
}
