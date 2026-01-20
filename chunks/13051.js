n.d(t, { Z: () => D }), n(388685), n(642613), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(953529);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(913527),
    s = n.n(o),
    c = n(13107),
    d = n(400284),
    u = n(951284),
    m = n(442837),
    b = n(693789),
    p = n(28664),
    g = n(481060),
    f = n(139387),
    h = n(726542),
    x = n(600164),
    j = n(339085),
    v = n(434404),
    O = n(598077),
    y = n(485386),
    C = n(496675),
    N = n(246946),
    S = n(259580),
    I = n(768581),
    T = n(709054),
    E = n(486199),
    Z = n(981631),
    w = n(388032),
    P = n(162816),
    _ = n(478411);
function k(e) {
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
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function D(e) {
    let t,
        {
            guild: n,
            integration: l,
            editedIntegration: o,
            isExpanded: D,
            onToggleExpand: R,
            onDisable: L,
            onEnable: M,
        } = e,
        [U, W] = r.useState(!1),
        B = (0, m.e7)([N.Z], () => N.Z.hidePersonalInformation),
        H = (0, m.e7)([C.Z], () => C.Z.can(Z.Plq.KICK_MEMBERS, n)),
        G = r.useCallback(() => {
            W(!0), M(l);
        }, [l, M]),
        F = r.useCallback(() => {
            l.syncing ||
                (0, g.h7j)((e) => {
                    if (!H && l.expire_behavior === c.l.KICK)
                        return (0, i.jsx)(
                            g.VoidConfirmModal,
                            A(k({}, e), {
                                header: w.intl.string(w.t.emx3lN),
                                confirmText: w.intl.string(w.t.BddRzS),
                                confirmButtonColor: b.Tt.BRAND,
                                children: (0, i.jsx)(g.Text, {
                                    variant: "text-md/normal",
                                    children:
                                        l.type === u.b.YOUTUBE ? w.intl.string(w.t.pDCiEf) : w.intl.string(w.t.sQqHFk),
                                }),
                            }),
                        );
                    let t =
                        l.expire_behavior === c.l.REMOVE_ROLE
                            ? w.intl.string(w.t["6kpw4i"])
                            : w.intl.string(w.t.fQUQIJ);
                    return (0, i.jsx)(
                        g.VoidConfirmModal,
                        A(k({}, e), {
                            header: w.intl.string(w.t.emx3lN),
                            confirmText: t,
                            cancelText: w.intl.string(w.t["ETE/oC"]),
                            onConfirm: () => L(l),
                            children: (0, i.jsx)(g.Text, {
                                variant: "text-md/normal",
                                children:
                                    l.type === u.b.YOUTUBE ? w.intl.string(w.t.anKQWU) : w.intl.string(w.t["BW/xtn"]),
                            }),
                        }),
                    );
                });
        }, [l, L, H]),
        K = r.useCallback(() => {
            v.Z.syncIntegration(n.id, l.id);
        }, [n.id, l.id]),
        z = r.useCallback(() => {
            null != l.role_id && (v.Z.setSection(Z.pNK.ROLES), v.Z.selectRole(l.role_id));
        }, [l.role_id]),
        {
            serviceName: V,
            channelURL: q,
            expireBehaviorLabel: Y,
            syncLabel: J,
            subscribersText: Q,
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
                        serviceName: w.intl.string(w.t.aS6cK4),
                        expireBehaviorLabel: w.intl.string(w.t.A5MiqO),
                        syncLabel: w.intl.string(w.t["7vHKVe"]),
                        subscribersText: w.intl.formatToPlainString(w.t["7lNtce"], {
                            subscribers: null != (i = l.subscriber_count) ? i : 0,
                        }),
                        channelURL: a,
                    };
                case u.b.TWITCH:
                default:
                    return {
                        serviceName: w.intl.string(w.t.q4pBG3),
                        expireBehaviorLabel: w.intl.string(w.t["S/WCrG"]),
                        syncLabel: w.intl.string(w.t["0jbPK4"]),
                        subscribersText: w.intl.formatToPlainString(w.t.RdUTrl, {
                            subscribers: null != (r = l.subscriber_count) ? r : 0,
                        }),
                        channelURL: a,
                    };
            }
        }, [l.account, l.subscriber_count, l.type]),
        X = (0, m.e7)([y.Z], () => (null != l.role_id ? y.Z.getRole(n.id, l.role_id) : void 0)),
        { roleLink: $, syncDescriptionText: ee } = r.useMemo(() => {
            let e;
            e =
                null != X
                    ? (0, i.jsx)(g.eee, {
                          onClick: z,
                          children: X.name,
                      })
                    : w.intl.string(w.t.PoWNfe);
            let t = h.Z.get(l.type);
            return {
                roleLink: e,
                syncDescriptionText:
                    l.revoked && null != t
                        ? w.intl.formatToPlainString(w.t.G16Wji, {
                              user: l.user,
                              platformName: t.name,
                          })
                        : w.intl.formatToPlainString(w.t.unl3AP, { datetime: s()(l.synced_at).calendar() }),
            };
        }, [X, z, l.revoked, l.synced_at, l.type, l.user]),
        et = (0, m.e7)([y.Z], () => y.Z.getSortedRoles(n.id)),
        en = r.useMemo(() => {
            let e = j.ZP.getGuildEmoji(n.id),
                t = et.filter((e) => null != e.tags && e.tags.integration_id === l.id).map((e) => e.id);
            return l.enable_emoticons
                ? e
                      .filter((e) => null != l.role_id && (null == e ? void 0 : e.roles.some((e) => t.includes(e))))
                      .sort((e, t) => e.name.localeCompare(t.name))
                : [];
        }, [n.id, et, l.enable_emoticons, l.id, l.role_id]);
    if (
        (r.useEffect(() => {
            (null == o ? void 0 : o.id) === l.id && (null == o ? void 0 : o.enabled) === !0 && W(!1);
        }, [o, l.id]),
        l.enabled && null != l.user)
    )
        t = [
            {
                icon: g.T39,
                text: B
                    ? w.intl.formatToPlainString(w.t.gcdJ8J, { timestamp: T.default.extractTimestamp(l.id) })
                    : w.intl.formatToPlainString(w.t.Nu9sat, {
                          user: null != l.user ? new O.Z(l.user).tag : null,
                          timestamp: T.default.extractTimestamp(l.id),
                      }),
            },
        ];
    else {
        let e = new URL(q);
        t = [
            {
                text: w.intl.format(w.t.BegylZ, {
                    serviceName: V,
                    accountUrl: q,
                    accountUrlText: e.hostname + e.pathname,
                }),
            },
        ];
    }
    let ei = (0, i.jsxs)(x.Z, {
            className: P.header,
            align: x.Z.Align.CENTER,
            children: [
                (0, i.jsx)(E.Z, {
                    name: "".concat(l.name),
                    detailsClassName: P.description,
                    details: t,
                }),
                l.enabled
                    ? (0, i.jsx)(x.Z.Child, {
                          shrink: 0,
                          grow: 0,
                          children: (0, i.jsx)(S.Z, {
                              className: P.expandIcon,
                              expanded: D && !U,
                              "aria-hidden": !0,
                          }),
                      })
                    : (0, i.jsx)(x.Z.Child, {
                          shrink: 0,
                          grow: 0,
                          children: U
                              ? (0, i.jsx)(g.hU, {
                                    variant: "primary",
                                    size: "sm",
                                    disabled: !0,
                                    icon: g.DuK,
                                    "aria-label": w.intl.string(w.t["7sCN8m"]),
                                })
                              : (0, i.jsx)(g.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    onClick: G,
                                    text: w.intl.string(w.t["7sCN8m"]),
                                }),
                      }),
            ],
        }),
        er = null;
    return (
        D &&
            !U &&
            null != o &&
            (er = (0, i.jsxs)(x.Z, {
                className: P.body,
                direction: x.Z.Direction.VERTICAL,
                children: [
                    (0, i.jsx)(g.izJ, { className: P.topDivider }),
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
                                        (0, i.jsx)(g.Heading, {
                                            variant: "heading-md/semibold",
                                            className: _.marginBottom8,
                                            children: w.intl.string(w.t.eBtNBa),
                                        }),
                                        (0, i.jsx)(g.Text, {
                                            className: P.syncedRole,
                                            color: "text-strong",
                                            variant: "text-sm/normal",
                                            children: a,
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)(x.Z.Child, {
                                    basis: "50%",
                                    children: [
                                        (0, i.jsx)(g.Heading, {
                                            variant: "heading-sm/semibold",
                                            className: _.marginBottom8,
                                            children: n,
                                        }),
                                        (0, i.jsxs)(x.Z, {
                                            justify: x.Z.Justify.BETWEEN,
                                            children: [
                                                (0, i.jsxs)(x.Z, {
                                                    direction: x.Z.Direction.VERTICAL,
                                                    children: [
                                                        (0, i.jsx)(g.Text, {
                                                            color: "text-strong",
                                                            variant: "text-sm/normal",
                                                            children: r,
                                                        }),
                                                        (0, i.jsx)(g.Text, {
                                                            color: "text-default",
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
                                                          "aria-label": w.intl.string(w.t.BkuOO6),
                                                          disabled: !0,
                                                      })
                                                    : (0, i.jsx)(g.Button, {
                                                          size: "sm",
                                                          variant: "primary",
                                                          text: w.intl.string(w.t.BkuOO6),
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
                        labelText: J,
                        subscribersText: Q,
                        descriptionText: ee,
                        roleLink: $,
                        onSync: K,
                    }),
                    (0, i.jsx)(g.izJ, { className: P.midDivider }),
                    (function (e) {
                        let { integration: t, labelText: n, onBehaviorChange: r, onGracePeriodChange: l } = e;
                        return (0, i.jsxs)(x.Z, {
                            children: [
                                (0, i.jsx)(x.Z.Child, {
                                    basis: "50%",
                                    children: (0, i.jsx)(g.PhF, {
                                        selectionMode: "single",
                                        label: n,
                                        placeholder: n,
                                        value: "".concat(t.expire_behavior),
                                        options: [
                                            {
                                                id: "remove-role",
                                                value: c.l.REMOVE_ROLE.toString(),
                                                label: w.intl.string(w.t["6kpw4i"]),
                                            },
                                            {
                                                id: "kick",
                                                value: c.l.KICK.toString(),
                                                label: w.intl.string(w.t.fQUQIJ),
                                            },
                                        ],
                                        disabled: t.syncing,
                                        onSelectionChange: (e) => r(parseInt(e)),
                                    }),
                                }),
                                (0, i.jsx)(x.Z.Child, {
                                    basis: "50%",
                                    children: (0, i.jsx)(g.PhF, {
                                        selectionMode: "single",
                                        label: w.intl.string(w.t.uiXMow),
                                        placeholder: w.intl.string(w.t.uiXMow),
                                        maxOptionsVisible: 5,
                                        value: "".concat(t.expire_grace_period),
                                        options: Object.values(d.W)
                                            .filter(Number.isInteger)
                                            .map((e) => ({
                                                id: "".concat(e),
                                                value: "".concat(e),
                                                label: w.intl.formatToPlainString(w.t.eGjmy5, { days: e }),
                                            })),
                                        onSelectionChange: (e) => l(parseInt(e)),
                                        disabled: t.syncing,
                                    }),
                                }),
                            ],
                        });
                    })({
                        integration: o,
                        labelText: Y,
                        onBehaviorChange: function (e) {
                            f.Z.updateIntegration({ expireBehavior: e });
                        },
                        onGracePeriodChange: function (e) {
                            f.Z.updateIntegration({ expireGracePeriod: e });
                        },
                    }),
                    !H &&
                        o.expire_behavior === c.l.KICK &&
                        (0, i.jsx)(g.Text, {
                            className: P.kickPermissionWarning,
                            color: "text-feedback-critical",
                            variant: "text-sm/normal",
                            children: w.intl.string(w.t.mThMlB),
                        }),
                    l.type === u.b.TWITCH
                        ? (function (e) {
                              let { integration: t, emojis: n, onToggle: r } = e;
                              return (0, i.jsxs)(x.Z, {
                                  direction: x.Z.Direction.VERTICAL,
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: a()(_.marginTop20, _.marginBottom8),
                                          children: (0, i.jsx)(g.Checkbox, {
                                              checked: !!t.enable_emoticons,
                                              disabled: t.syncing,
                                              onChange: (e) => r(e),
                                              label: w.intl.string(w.t["7r4OKg"]),
                                          }),
                                      }),
                                      (0, i.jsx)(x.Z, {
                                          wrap: x.Z.Wrap.WRAP,
                                          className: P.__invalid_twitchEmojis,
                                          children: n.map((e, t) =>
                                              (0, i.jsx)(
                                                  p.u,
                                                  {
                                                      text: e.name,
                                                      children: (0, i.jsx)(
                                                          "img",
                                                          {
                                                              alt: w.intl.formatToPlainString(w.t.n6ZZn4, {
                                                                  name: e.name,
                                                              }),
                                                              draggable: !1,
                                                              className: a()(P.emoji, "emoji", "jumboable"),
                                                              src: I.ZP.getEmojiURL({
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
                              emojis: en,
                              onToggle: function (e) {
                                  f.Z.updateIntegration({ enableEmoticons: e });
                              },
                          })
                        : null,
                    (0, i.jsx)(g.izJ, { className: P.bottomDivider }),
                    (0, i.jsx)(x.Z, {
                        children: (0, i.jsx)(g.Button, {
                            size: "sm",
                            variant: "critical-secondary",
                            text: w.intl.string(w.t.M6q6eX),
                            onClick: F,
                        }),
                    }),
                ],
            })),
        (0, i.jsx)(g.Zbd, {
            editable: !0,
            className: P.card,
            children: (0, i.jsxs)(x.Z, {
                direction: x.Z.Direction.VERTICAL,
                children: [
                    l.enabled
                        ? (0, i.jsx)(g.P3F, {
                              className: P.expandableHeader,
                              "aria-expanded": D && !U,
                              onClick: R,
                              children: ei,
                          })
                        : ei,
                    er,
                ],
            }),
        })
    );
}
