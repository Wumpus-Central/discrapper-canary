n.d(t, { Z: () => Z }), n(388685), n(642613), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(953529);
var i = n(951288),
    r = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(913527),
    s = n.n(o),
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
    y = n(259580),
    O = n(768581),
    _ = n(709054),
    C = n(486199),
    N = n(981631),
    w = n(388032),
    S = n(88270),
    I = n(10198);
function P(e) {
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
function Z(e) {
    let t,
        {
            guild: n,
            integration: l,
            editedIntegration: o,
            isExpanded: Z,
            onToggleExpand: T,
            onDisable: E,
            onEnable: k,
        } = e,
        [A, D] = r.useState(!1),
        R = (0, d.e7)([v.Z], () => v.Z.hidePersonalInformation),
        L = r.useCallback(() => {
            D(!0), k(l);
        }, [l, k]),
        M = r.useCallback(() => {
            l.syncing ||
                (0, p.h7j)((e) => {
                    var t, n;
                    let r = 0 === l.expire_behavior ? w.intl.string(w.t["6kpw4u"]) : w.intl.string(w.t.fQUQIC);
                    return (0, i.jsx)(
                        p.ConfirmModal,
                        ((t = P({}, e)),
                        (n = n =
                            {
                                header: w.intl.string(w.t.emx3lJ),
                                confirmText: r,
                                cancelText: w.intl.string(w.t["ETE/oK"]),
                                onConfirm: () => E(l),
                                children: (0, i.jsx)(p.Text, {
                                    variant: "text-md/normal",
                                    children:
                                        l.type === c.b.YOUTUBE
                                            ? w.intl.string(w.t.anKQWV)
                                            : w.intl.string(w.t["BW/xtr"]),
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
        }, [l, E]),
        B = r.useCallback(() => {
            h.Z.syncIntegration(n.id, l.id);
        }, [n.id, l.id]),
        U = r.useCallback(() => {
            null != l.role_id && (h.Z.setSection(N.pNK.ROLES), h.Z.selectRole(l.role_id));
        }, [l.role_id]),
        {
            serviceName: W,
            channelURL: H,
            expireBehaviorLabel: G,
            syncLabel: F,
            subscribersText: z,
        } = r.useMemo(() => {
            var e, t, n, i, r;
            let a =
                null !=
                (n =
                    null == (t = b.Z.get(l.type)) || null == (e = t.getPlatformUserUrl)
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
                        serviceName: w.intl.string(w.t.aS6cKy),
                        expireBehaviorLabel: w.intl.string(w.t.A5MiqK),
                        syncLabel: w.intl.string(w.t["7vHKVV"]),
                        subscribersText: w.intl.formatToPlainString(w.t["7lNtcX"], {
                            subscribers: null != (i = l.subscriber_count) ? i : 0,
                        }),
                        channelURL: a,
                    };
                case c.b.TWITCH:
                default:
                    return {
                        serviceName: w.intl.string(w.t.q4pBGx),
                        expireBehaviorLabel: w.intl.string(w.t["S/WCrK"]),
                        syncLabel: w.intl.string(w.t["0jbPKy"]),
                        subscribersText: w.intl.formatToPlainString(w.t.RdUTrq, {
                            subscribers: null != (r = l.subscriber_count) ? r : 0,
                        }),
                        channelURL: a,
                    };
            }
        }, [l.account, l.subscriber_count, l.type]),
        q = (0, d.e7)([j.Z], () => (null != l.role_id ? j.Z.getRole(n.id, l.role_id) : void 0)),
        { roleLink: K, syncDescriptionText: V } = r.useMemo(() => {
            let e;
            e =
                null != q
                    ? (0, i.jsx)(p.eee, {
                          onClick: U,
                          children: q.name,
                      })
                    : w.intl.string(w.t.PoWNfX);
            let t = b.Z.get(l.type);
            return {
                roleLink: e,
                syncDescriptionText:
                    l.revoked && null != t
                        ? w.intl.formatToPlainString(w.t.G16Wjo, {
                              user: l.user,
                              platformName: t.name,
                          })
                        : w.intl.formatToPlainString(w.t.unl3AA, { datetime: s()(l.synced_at).calendar() }),
            };
        }, [q, U, l.revoked, l.synced_at, l.type, l.user]),
        Y = (0, d.e7)([j.Z], () => j.Z.getSortedRoles(n.id)),
        $ = r.useMemo(() => {
            let e = f.ZP.getGuildEmoji(n.id),
                t = Y.filter((e) => null != e.tags && e.tags.integration_id === l.id).map((e) => e.id);
            return l.enable_emoticons
                ? e
                      .filter((e) => null != l.role_id && (null == e ? void 0 : e.roles.some((e) => t.includes(e))))
                      .sort((e, t) => e.name.localeCompare(t.name))
                : [];
        }, [n.id, Y, l.enable_emoticons, l.id, l.role_id]);
    if (
        (r.useEffect(() => {
            (null == o ? void 0 : o.id) === l.id && (null == o ? void 0 : o.enabled) === !0 && D(!1);
        }, [o, l.id]),
        l.enabled && null != l.user)
    )
        t = [
            {
                icon: p.T39,
                text: R
                    ? w.intl.formatToPlainString(w.t.gcdJ8P, { timestamp: _.default.extractTimestamp(l.id) })
                    : w.intl.formatToPlainString(w.t.Nu9sam, {
                          user: null != l.user ? new x.Z(l.user).tag : null,
                          timestamp: _.default.extractTimestamp(l.id),
                      }),
            },
        ];
    else {
        let e = new URL(H);
        t = [
            {
                text: w.intl.format(w.t.BegylZ, {
                    serviceName: W,
                    accountUrl: H,
                    accountUrlText: e.hostname + e.pathname,
                }),
            },
        ];
    }
    let X = (0, i.jsxs)(g.Z, {
            className: S.header,
            align: g.Z.Align.CENTER,
            children: [
                (0, i.jsx)(C.Z, {
                    name: "".concat(l.name),
                    detailsClassName: S.description,
                    details: t,
                }),
                l.enabled
                    ? (0, i.jsx)(g.Z.Child, {
                          shrink: 0,
                          grow: 0,
                          children: (0, i.jsx)(y.Z, {
                              className: S.expandIcon,
                              expanded: Z && !A,
                              "aria-hidden": !0,
                          }),
                      })
                    : (0, i.jsx)(g.Z.Child, {
                          shrink: 0,
                          grow: 0,
                          children: A
                              ? (0, i.jsx)(p.hU, {
                                    variant: "primary",
                                    size: "sm",
                                    disabled: !0,
                                    icon: p.DuK,
                                    "aria-label": w.intl.string(w.t["7sCN8v"]),
                                })
                              : (0, i.jsx)(p.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    onClick: L,
                                    text: w.intl.string(w.t["7sCN8v"]),
                                }),
                      }),
            ],
        }),
        J = null;
    return (
        Z &&
            !A &&
            null != o &&
            (J = (0, i.jsxs)(g.Z, {
                className: S.body,
                direction: g.Z.Direction.VERTICAL,
                children: [
                    (0, i.jsx)(p.$i$, { className: S.topDivider }),
                    (function (e) {
                        let {
                            integration: t,
                            labelText: n,
                            subscribersText: r,
                            descriptionText: l,
                            roleLink: a,
                            onSync: o,
                        } = e;
                        return (0, i.jsxs)(g.Z, {
                            children: [
                                (0, i.jsxs)(g.Z.Child, {
                                    basis: "50%",
                                    children: [
                                        (0, i.jsx)(p.vwX, {
                                            className: I.marginBottom8,
                                            children: w.intl.string(w.t.eBtNBQ),
                                        }),
                                        (0, i.jsx)(p.Text, {
                                            className: S.syncedRole,
                                            color: "header-primary",
                                            variant: "text-sm/normal",
                                            children: a,
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)(g.Z.Child, {
                                    basis: "50%",
                                    children: [
                                        (0, i.jsx)(p.vwX, {
                                            className: I.marginBottom8,
                                            children: n,
                                        }),
                                        (0, i.jsxs)(g.Z, {
                                            justify: g.Z.Justify.BETWEEN,
                                            children: [
                                                (0, i.jsxs)(g.Z, {
                                                    direction: g.Z.Direction.VERTICAL,
                                                    children: [
                                                        (0, i.jsx)(p.Text, {
                                                            color: "header-primary",
                                                            variant: "text-sm/normal",
                                                            children: r,
                                                        }),
                                                        (0, i.jsx)(p.Text, {
                                                            color: "header-secondary",
                                                            variant: "text-xs/normal",
                                                            children: l,
                                                        }),
                                                    ],
                                                }),
                                                t.syncing
                                                    ? (0, i.jsx)(p.hU, {
                                                          size: "sm",
                                                          variant: "primary",
                                                          icon: p.DuK,
                                                          "aria-label": w.intl.string(w.t.BkuOOz),
                                                          disabled: !0,
                                                      })
                                                    : (0, i.jsx)(p.zxk, {
                                                          size: "sm",
                                                          variant: "primary",
                                                          text: w.intl.string(w.t.BkuOOz),
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
                        labelText: F,
                        subscribersText: z,
                        descriptionText: V,
                        roleLink: K,
                        onSync: B,
                    }),
                    (0, i.jsx)(p.$i$, { className: S.midDivider }),
                    (function (e) {
                        let { integration: t, labelText: n, onBehaviorChange: r, onGracePeriodChange: l } = e;
                        return (0, i.jsxs)(g.Z, {
                            children: [
                                (0, i.jsxs)(g.Z.Child, {
                                    basis: "50%",
                                    children: [
                                        (0, i.jsx)(p.vwX, {
                                            className: I.marginBottom8,
                                            children: n,
                                        }),
                                        (0, i.jsx)(p.q4e, {
                                            placeholder: n,
                                            value: "".concat(t.expire_behavior),
                                            options: [
                                                {
                                                    value: "0",
                                                    label: w.intl.string(w.t["6kpw4u"]),
                                                },
                                                {
                                                    value: "1",
                                                    label: w.intl.string(w.t.fQUQIC),
                                                },
                                            ],
                                            isDisabled: t.syncing,
                                            onChange: (e) => r(parseInt(e)),
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)(g.Z.Child, {
                                    basis: "50%",
                                    children: [
                                        (0, i.jsx)(p.vwX, {
                                            className: I.marginBottom8,
                                            children: w.intl.string(w.t.uiXMo6),
                                        }),
                                        (0, i.jsx)(p.q4e, {
                                            placeholder: w.intl.string(w.t.uiXMo6),
                                            maxVisibleItems: 5,
                                            value: "".concat(t.expire_grace_period),
                                            options: [1, 3, 7, 14, 30].map((e) => ({
                                                value: "".concat(e),
                                                label: w.intl.formatToPlainString(w.t.eGjmy8, { days: e }),
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
                        labelText: G,
                        onBehaviorChange: function (e) {
                            m.Z.updateIntegration({ expireBehavior: e });
                        },
                        onGracePeriodChange: function (e) {
                            m.Z.updateIntegration({ expireGracePeriod: e });
                        },
                    }),
                    l.type === c.b.TWITCH
                        ? (function (e) {
                              let { integration: t, emojis: n, onToggle: r } = e;
                              return (0, i.jsxs)(g.Z, {
                                  direction: g.Z.Direction.VERTICAL,
                                  children: [
                                      (0, i.jsx)(u.$q, {
                                          type: u.M0.INVERTED,
                                          className: a()(I.marginTop20, I.marginBottom8),
                                          value: t.enable_emoticons,
                                          disabled: t.syncing,
                                          onChange: (e) => {
                                              let { currentTarget: t } = e;
                                              return r(t.checked);
                                          },
                                          children: (0, i.jsx)(p.R94, { children: w.intl.string(w.t["7r4OKi"]) }),
                                      }),
                                      (0, i.jsx)(g.Z, {
                                          wrap: g.Z.Wrap.WRAP,
                                          className: S.__invalid_twitchEmojis,
                                          children: n.map((e, t) =>
                                              (0, i.jsx)(
                                                  p.ua7,
                                                  {
                                                      text: e.name,
                                                      children: (t) =>
                                                          (0, i.jsx)(
                                                              "img",
                                                              P(
                                                                  {
                                                                      alt: w.intl.formatToPlainString(w.t.n6ZZn5, {
                                                                          name: e.name,
                                                                      }),
                                                                      draggable: !1,
                                                                      className: a()(S.emoji, "emoji", "jumboable"),
                                                                      src: O.ZP.getEmojiURL({
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
                              emojis: $,
                              onToggle: function (e) {
                                  m.Z.updateIntegration({ enableEmoticons: e });
                              },
                          })
                        : null,
                    (0, i.jsx)(p.$i$, { className: S.bottomDivider }),
                    (0, i.jsx)(g.Z, {
                        children: (0, i.jsx)(p.zxk, {
                            size: "sm",
                            variant: "critical-secondary",
                            text: w.intl.string(w.t.M6q6eX),
                            onClick: M,
                        }),
                    }),
                ],
            })),
        (0, i.jsx)(p.Zbd, {
            editable: !0,
            className: S.card,
            children: (0, i.jsxs)(g.Z, {
                direction: g.Z.Direction.VERTICAL,
                children: [
                    l.enabled
                        ? (0, i.jsx)(p.P3F, {
                              className: S.expandableHeader,
                              "aria-expanded": Z && !A,
                              onClick: T,
                              children: X,
                          })
                        : X,
                    J,
                ],
            }),
        })
    );
}
