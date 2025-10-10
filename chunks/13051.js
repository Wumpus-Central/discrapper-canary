n.d(t, { Z: () => T }), n(388685), n(642613), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(953529);
var i = n(951288),
    r = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(913527),
    s = n.n(o),
    c = n(13107),
    d = n(400284),
    u = n(951284),
    p = n(442837),
    m = n(28664),
    b = n(755721),
    g = n(481060),
    f = n(139387),
    h = n(726542),
    x = n(600164),
    j = n(339085),
    v = n(434404),
    O = n(598077),
    y = n(485386),
    _ = n(246946),
    C = n(259580),
    N = n(768581),
    S = n(709054),
    w = n(486199),
    P = n(981631),
    I = n(388032),
    E = n(516941),
    Z = n(197571);
function T(e) {
    let t,
        {
            guild: n,
            integration: l,
            editedIntegration: o,
            isExpanded: T,
            onToggleExpand: k,
            onDisable: A,
            onEnable: D,
        } = e,
        [R, L] = r.useState(!1),
        M = (0, p.e7)([_.Z], () => _.Z.hidePersonalInformation),
        U = r.useCallback(() => {
            L(!0), D(l);
        }, [l, D]),
        B = r.useCallback(() => {
            l.syncing ||
                (0, g.h7j)((e) => {
                    var t, n;
                    let r =
                        l.expire_behavior === c.l.REMOVE_ROLE
                            ? I.intl.string(I.t["6kpw4u"])
                            : I.intl.string(I.t.fQUQIC);
                    return (0, i.jsx)(
                        g.ConfirmModal,
                        ((t = (function (e) {
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
                        })({}, e)),
                        (n = n =
                            {
                                header: I.intl.string(I.t.emx3lJ),
                                confirmText: r,
                                cancelText: I.intl.string(I.t["ETE/oK"]),
                                onConfirm: () => A(l),
                                children: (0, i.jsx)(g.Text, {
                                    variant: "text-md/normal",
                                    children:
                                        l.type === u.b.YOUTUBE
                                            ? I.intl.string(I.t.anKQWV)
                                            : I.intl.string(I.t["BW/xtr"]),
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
        }, [l, A]),
        W = r.useCallback(() => {
            v.Z.syncIntegration(n.id, l.id);
        }, [n.id, l.id]),
        H = r.useCallback(() => {
            null != l.role_id && (v.Z.setSection(P.pNK.ROLES), v.Z.selectRole(l.role_id));
        }, [l.role_id]),
        {
            serviceName: G,
            channelURL: z,
            expireBehaviorLabel: F,
            syncLabel: K,
            subscribersText: q,
        } = r.useMemo(() => {
            var e, t, n, i, r;
            let a =
                null !=
                (n =
                    null == (t = h.Z.get(l.type)) || null == (e = t.getPlatformUserUrl)
                        ? void 0
                        : e.call(t, {
                              id: l.account.id,
                              name: l.account.name,
                          }))
                    ? n
                    : "";
            switch (l.type) {
                case u.b.YOUTUBE:
                    return {
                        serviceName: I.intl.string(I.t.aS6cKy),
                        expireBehaviorLabel: I.intl.string(I.t.A5MiqK),
                        syncLabel: I.intl.string(I.t["7vHKVV"]),
                        subscribersText: I.intl.formatToPlainString(I.t["7lNtcX"], {
                            subscribers: null != (i = l.subscriber_count) ? i : 0,
                        }),
                        channelURL: a,
                    };
                case u.b.TWITCH:
                default:
                    return {
                        serviceName: I.intl.string(I.t.q4pBGx),
                        expireBehaviorLabel: I.intl.string(I.t["S/WCrK"]),
                        syncLabel: I.intl.string(I.t["0jbPKy"]),
                        subscribersText: I.intl.formatToPlainString(I.t.RdUTrq, {
                            subscribers: null != (r = l.subscriber_count) ? r : 0,
                        }),
                        channelURL: a,
                    };
            }
        }, [l.account, l.subscriber_count, l.type]),
        V = (0, p.e7)([y.Z], () => (null != l.role_id ? y.Z.getRole(n.id, l.role_id) : void 0)),
        { roleLink: Y, syncDescriptionText: J } = r.useMemo(() => {
            let e;
            e =
                null != V
                    ? (0, i.jsx)(g.eee, {
                          onClick: H,
                          children: V.name,
                      })
                    : I.intl.string(I.t.PoWNfX);
            let t = h.Z.get(l.type);
            return {
                roleLink: e,
                syncDescriptionText:
                    l.revoked && null != t
                        ? I.intl.formatToPlainString(I.t.G16Wjo, {
                              user: l.user,
                              platformName: t.name,
                          })
                        : I.intl.formatToPlainString(I.t.unl3AA, { datetime: s()(l.synced_at).calendar() }),
            };
        }, [V, H, l.revoked, l.synced_at, l.type, l.user]),
        X = (0, p.e7)([y.Z], () => y.Z.getSortedRoles(n.id)),
        Q = r.useMemo(() => {
            let e = j.ZP.getGuildEmoji(n.id),
                t = X.filter((e) => null != e.tags && e.tags.integration_id === l.id).map((e) => e.id);
            return l.enable_emoticons
                ? e
                      .filter((e) => null != l.role_id && (null == e ? void 0 : e.roles.some((e) => t.includes(e))))
                      .sort((e, t) => e.name.localeCompare(t.name))
                : [];
        }, [n.id, X, l.enable_emoticons, l.id, l.role_id]);
    if (
        (r.useEffect(() => {
            (null == o ? void 0 : o.id) === l.id && (null == o ? void 0 : o.enabled) === !0 && L(!1);
        }, [o, l.id]),
        l.enabled && null != l.user)
    )
        t = [
            {
                icon: g.T39,
                text: M
                    ? I.intl.formatToPlainString(I.t.gcdJ8P, { timestamp: S.default.extractTimestamp(l.id) })
                    : I.intl.formatToPlainString(I.t.Nu9sam, {
                          user: null != l.user ? new O.Z(l.user).tag : null,
                          timestamp: S.default.extractTimestamp(l.id),
                      }),
            },
        ];
    else {
        let e = new URL(z);
        t = [
            {
                text: I.intl.format(I.t.BegylZ, {
                    serviceName: G,
                    accountUrl: z,
                    accountUrlText: e.hostname + e.pathname,
                }),
            },
        ];
    }
    let $ = (0, i.jsxs)(x.Z, {
            className: E.header,
            align: x.Z.Align.CENTER,
            children: [
                (0, i.jsx)(w.Z, {
                    name: "".concat(l.name),
                    detailsClassName: E.description,
                    details: t,
                }),
                l.enabled
                    ? (0, i.jsx)(x.Z.Child, {
                          shrink: 0,
                          grow: 0,
                          children: (0, i.jsx)(C.Z, {
                              className: E.expandIcon,
                              expanded: T && !R,
                              "aria-hidden": !0,
                          }),
                      })
                    : (0, i.jsx)(x.Z.Child, {
                          shrink: 0,
                          grow: 0,
                          children: R
                              ? (0, i.jsx)(g.hU, {
                                    variant: "primary",
                                    size: "sm",
                                    disabled: !0,
                                    icon: g.DuK,
                                    "aria-label": I.intl.string(I.t["7sCN8v"]),
                                })
                              : (0, i.jsx)(g.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    onClick: U,
                                    text: I.intl.string(I.t["7sCN8v"]),
                                }),
                      }),
            ],
        }),
        ee = null;
    return (
        T &&
            !R &&
            null != o &&
            (ee = (0, i.jsxs)(x.Z, {
                className: E.body,
                direction: x.Z.Direction.VERTICAL,
                children: [
                    (0, i.jsx)(g.izJ, { className: E.topDivider }),
                    (function (e) {
                        let {
                            integration: t,
                            labelText: n,
                            subscribersText: r,
                            descriptionText: l,
                            roleLink: a,
                            onSync: o,
                        } = e;
                        return (0, i.jsxs)(x.Z, {
                            children: [
                                (0, i.jsxs)(x.Z.Child, {
                                    basis: "50%",
                                    children: [
                                        (0, i.jsx)(g.vwX, {
                                            className: Z.marginBottom8,
                                            children: I.intl.string(I.t.eBtNBQ),
                                        }),
                                        (0, i.jsx)(g.Text, {
                                            className: E.syncedRole,
                                            color: "header-primary",
                                            variant: "text-sm/normal",
                                            children: a,
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)(x.Z.Child, {
                                    basis: "50%",
                                    children: [
                                        (0, i.jsx)(g.vwX, {
                                            className: Z.marginBottom8,
                                            children: n,
                                        }),
                                        (0, i.jsxs)(x.Z, {
                                            justify: x.Z.Justify.BETWEEN,
                                            children: [
                                                (0, i.jsxs)(x.Z, {
                                                    direction: x.Z.Direction.VERTICAL,
                                                    children: [
                                                        (0, i.jsx)(g.Text, {
                                                            color: "header-primary",
                                                            variant: "text-sm/normal",
                                                            children: r,
                                                        }),
                                                        (0, i.jsx)(g.Text, {
                                                            color: "header-secondary",
                                                            variant: "text-xs/normal",
                                                            children: l,
                                                        }),
                                                    ],
                                                }),
                                                t.syncing
                                                    ? (0, i.jsx)(g.hU, {
                                                          size: "sm",
                                                          variant: "primary",
                                                          icon: g.DuK,
                                                          "aria-label": I.intl.string(I.t.BkuOOz),
                                                          disabled: !0,
                                                      })
                                                    : (0, i.jsx)(g.zxk, {
                                                          size: "sm",
                                                          variant: "primary",
                                                          text: I.intl.string(I.t.BkuOOz),
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
                        labelText: K,
                        subscribersText: q,
                        descriptionText: J,
                        roleLink: Y,
                        onSync: W,
                    }),
                    (0, i.jsx)(g.izJ, { className: E.midDivider }),
                    (function (e) {
                        let { integration: t, labelText: n, onBehaviorChange: r, onGracePeriodChange: l } = e;
                        return (0, i.jsxs)(x.Z, {
                            children: [
                                (0, i.jsx)(x.Z.Child, {
                                    basis: "50%",
                                    children: (0, i.jsx)(g.q4e, {
                                        label: n,
                                        placeholder: n,
                                        value: "".concat(t.expire_behavior),
                                        options: [
                                            {
                                                value: c.l.REMOVE_ROLE.toString(),
                                                label: I.intl.string(I.t["6kpw4u"]),
                                            },
                                            {
                                                value: c.l.KICK.toString(),
                                                label: I.intl.string(I.t.fQUQIC),
                                            },
                                        ],
                                        isDisabled: t.syncing,
                                        onChange: (e) => r(parseInt(e)),
                                    }),
                                }),
                                (0, i.jsx)(x.Z.Child, {
                                    basis: "50%",
                                    children: (0, i.jsx)(g.q4e, {
                                        label: I.intl.string(I.t.uiXMo6),
                                        placeholder: I.intl.string(I.t.uiXMo6),
                                        maxVisibleItems: 5,
                                        value: "".concat(t.expire_grace_period),
                                        options: Object.values(d.W)
                                            .filter(Number.isInteger)
                                            .map((e) => ({
                                                value: "".concat(e),
                                                label: I.intl.formatToPlainString(I.t.eGjmy8, { days: e }),
                                            })),
                                        onChange: (e) => l(parseInt(e)),
                                        isDisabled: t.syncing,
                                    }),
                                }),
                            ],
                        });
                    })({
                        integration: o,
                        labelText: F,
                        onBehaviorChange: function (e) {
                            f.Z.updateIntegration({ expireBehavior: e });
                        },
                        onGracePeriodChange: function (e) {
                            f.Z.updateIntegration({ expireGracePeriod: e });
                        },
                    }),
                    l.type === u.b.TWITCH
                        ? (function (e) {
                              let { integration: t, emojis: n, onToggle: r } = e;
                              return (0, i.jsxs)(x.Z, {
                                  direction: x.Z.Direction.VERTICAL,
                                  children: [
                                      (0, i.jsx)(b.VL, {
                                          className: a()(Z.marginTop20, Z.marginBottom8),
                                          checked: t.enable_emoticons,
                                          disabled: t.syncing,
                                          onChange: (e) => r(e),
                                          label: I.intl.string(I.t["7r4OKi"]),
                                      }),
                                      (0, i.jsx)(x.Z, {
                                          wrap: x.Z.Wrap.WRAP,
                                          className: E.__invalid_twitchEmojis,
                                          children: n.map((e, t) =>
                                              (0, i.jsx)(
                                                  m.u,
                                                  {
                                                      text: e.name,
                                                      children: (0, i.jsx)(
                                                          "img",
                                                          {
                                                              alt: I.intl.formatToPlainString(I.t.n6ZZn5, {
                                                                  name: e.name,
                                                              }),
                                                              draggable: !1,
                                                              className: a()(E.emoji, "emoji", "jumboable"),
                                                              src: N.ZP.getEmojiURL({
                                                                  id: e.id,
                                                                  animated: e.animated,
                                                                  size: 28,
                                                              }),
                                                          },
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
                              emojis: Q,
                              onToggle: function (e) {
                                  f.Z.updateIntegration({ enableEmoticons: e });
                              },
                          })
                        : null,
                    (0, i.jsx)(g.izJ, { className: E.bottomDivider }),
                    (0, i.jsx)(x.Z, {
                        children: (0, i.jsx)(g.zxk, {
                            size: "sm",
                            variant: "critical-secondary",
                            text: I.intl.string(I.t.M6q6eX),
                            onClick: B,
                        }),
                    }),
                ],
            })),
        (0, i.jsx)(g.Zbd, {
            editable: !0,
            className: E.card,
            children: (0, i.jsxs)(x.Z, {
                direction: x.Z.Direction.VERTICAL,
                children: [
                    l.enabled
                        ? (0, i.jsx)(g.P3F, {
                              className: E.expandableHeader,
                              "aria-expanded": T && !R,
                              onClick: k,
                              children: $,
                          })
                        : $,
                    ee,
                ],
            }),
        })
    );
}
