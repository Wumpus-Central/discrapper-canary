n.d(t, { Z: () => R }), n(388685), n(642613), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(953529);
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
    m = n(693789),
    b = n(28664),
    g = n(755721),
    f = n(481060),
    h = n(139387),
    x = n(726542),
    j = n(600164),
    v = n(339085),
    O = n(434404),
    y = n(598077),
    _ = n(485386),
    C = n(496675),
    N = n(246946),
    S = n(259580),
    w = n(768581),
    P = n(709054),
    I = n(486199),
    E = n(981631),
    T = n(388032),
    Z = n(516941),
    k = n(197571);
function A(e) {
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
function D(e, t) {
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
function R(e) {
    let t,
        {
            guild: n,
            integration: l,
            editedIntegration: o,
            isExpanded: R,
            onToggleExpand: L,
            onDisable: M,
            onEnable: U,
        } = e,
        [B, W] = r.useState(!1),
        H = (0, p.e7)([N.Z], () => N.Z.hidePersonalInformation),
        G = (0, p.e7)([C.Z], () => C.Z.can(E.Plq.KICK_MEMBERS, n)),
        z = r.useCallback(() => {
            W(!0), U(l);
        }, [l, U]),
        K = r.useCallback(() => {
            l.syncing ||
                (0, f.h7j)((e) => {
                    if (!G && l.expire_behavior === c.l.KICK)
                        return (0, i.jsx)(
                            f.ConfirmModal,
                            D(A({}, e), {
                                header: T.intl.string(T.t.emx3lJ),
                                confirmText: T.intl.string(T.t.BddRzc),
                                confirmButtonColor: m.Tt.BRAND,
                                children: (0, i.jsx)(f.Text, {
                                    variant: "text-md/normal",
                                    children:
                                        l.type === u.b.YOUTUBE ? T.intl.string(T.t.pDCiER) : T.intl.string(T.t.sQqHFh),
                                }),
                            }),
                        );
                    let t =
                        l.expire_behavior === c.l.REMOVE_ROLE
                            ? T.intl.string(T.t["6kpw4u"])
                            : T.intl.string(T.t.fQUQIC);
                    return (0, i.jsx)(
                        f.ConfirmModal,
                        D(A({}, e), {
                            header: T.intl.string(T.t.emx3lJ),
                            confirmText: t,
                            cancelText: T.intl.string(T.t["ETE/oK"]),
                            onConfirm: () => M(l),
                            children: (0, i.jsx)(f.Text, {
                                variant: "text-md/normal",
                                children:
                                    l.type === u.b.YOUTUBE ? T.intl.string(T.t.anKQWV) : T.intl.string(T.t["BW/xtr"]),
                            }),
                        }),
                    );
                });
        }, [l, M, G]),
        F = r.useCallback(() => {
            O.Z.syncIntegration(n.id, l.id);
        }, [n.id, l.id]),
        q = r.useCallback(() => {
            null != l.role_id && (O.Z.setSection(E.pNK.ROLES), O.Z.selectRole(l.role_id));
        }, [l.role_id]),
        {
            serviceName: V,
            channelURL: Y,
            expireBehaviorLabel: J,
            syncLabel: X,
            subscribersText: Q,
        } = r.useMemo(() => {
            var e, t, n, i, r;
            let a =
                null !=
                (n =
                    null == (t = x.Z.get(l.type)) || null == (e = t.getPlatformUserUrl)
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
                        serviceName: T.intl.string(T.t.aS6cKy),
                        expireBehaviorLabel: T.intl.string(T.t.A5MiqK),
                        syncLabel: T.intl.string(T.t["7vHKVV"]),
                        subscribersText: T.intl.formatToPlainString(T.t["7lNtcX"], {
                            subscribers: null != (i = l.subscriber_count) ? i : 0,
                        }),
                        channelURL: a,
                    };
                case u.b.TWITCH:
                default:
                    return {
                        serviceName: T.intl.string(T.t.q4pBGx),
                        expireBehaviorLabel: T.intl.string(T.t["S/WCrK"]),
                        syncLabel: T.intl.string(T.t["0jbPKy"]),
                        subscribersText: T.intl.formatToPlainString(T.t.RdUTrq, {
                            subscribers: null != (r = l.subscriber_count) ? r : 0,
                        }),
                        channelURL: a,
                    };
            }
        }, [l.account, l.subscriber_count, l.type]),
        $ = (0, p.e7)([_.Z], () => (null != l.role_id ? _.Z.getRole(n.id, l.role_id) : void 0)),
        { roleLink: ee, syncDescriptionText: et } = r.useMemo(() => {
            let e;
            e =
                null != $
                    ? (0, i.jsx)(f.eee, {
                          onClick: q,
                          children: $.name,
                      })
                    : T.intl.string(T.t.PoWNfX);
            let t = x.Z.get(l.type);
            return {
                roleLink: e,
                syncDescriptionText:
                    l.revoked && null != t
                        ? T.intl.formatToPlainString(T.t.G16Wjo, {
                              user: l.user,
                              platformName: t.name,
                          })
                        : T.intl.formatToPlainString(T.t.unl3AA, { datetime: s()(l.synced_at).calendar() }),
            };
        }, [$, q, l.revoked, l.synced_at, l.type, l.user]),
        en = (0, p.e7)([_.Z], () => _.Z.getSortedRoles(n.id)),
        ei = r.useMemo(() => {
            let e = v.ZP.getGuildEmoji(n.id),
                t = en.filter((e) => null != e.tags && e.tags.integration_id === l.id).map((e) => e.id);
            return l.enable_emoticons
                ? e
                      .filter((e) => null != l.role_id && (null == e ? void 0 : e.roles.some((e) => t.includes(e))))
                      .sort((e, t) => e.name.localeCompare(t.name))
                : [];
        }, [n.id, en, l.enable_emoticons, l.id, l.role_id]);
    if (
        (r.useEffect(() => {
            (null == o ? void 0 : o.id) === l.id && (null == o ? void 0 : o.enabled) === !0 && W(!1);
        }, [o, l.id]),
        l.enabled && null != l.user)
    )
        t = [
            {
                icon: f.T39,
                text: H
                    ? T.intl.formatToPlainString(T.t.gcdJ8P, { timestamp: P.default.extractTimestamp(l.id) })
                    : T.intl.formatToPlainString(T.t.Nu9sam, {
                          user: null != l.user ? new y.Z(l.user).tag : null,
                          timestamp: P.default.extractTimestamp(l.id),
                      }),
            },
        ];
    else {
        let e = new URL(Y);
        t = [
            {
                text: T.intl.format(T.t.BegylZ, {
                    serviceName: V,
                    accountUrl: Y,
                    accountUrlText: e.hostname + e.pathname,
                }),
            },
        ];
    }
    let er = (0, i.jsxs)(j.Z, {
            className: Z.header,
            align: j.Z.Align.CENTER,
            children: [
                (0, i.jsx)(I.Z, {
                    name: "".concat(l.name),
                    detailsClassName: Z.description,
                    details: t,
                }),
                l.enabled
                    ? (0, i.jsx)(j.Z.Child, {
                          shrink: 0,
                          grow: 0,
                          children: (0, i.jsx)(S.Z, {
                              className: Z.expandIcon,
                              expanded: R && !B,
                              "aria-hidden": !0,
                          }),
                      })
                    : (0, i.jsx)(j.Z.Child, {
                          shrink: 0,
                          grow: 0,
                          children: B
                              ? (0, i.jsx)(f.hU, {
                                    variant: "primary",
                                    size: "sm",
                                    disabled: !0,
                                    icon: f.DuK,
                                    "aria-label": T.intl.string(T.t["7sCN8v"]),
                                })
                              : (0, i.jsx)(f.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    onClick: z,
                                    text: T.intl.string(T.t["7sCN8v"]),
                                }),
                      }),
            ],
        }),
        el = null;
    return (
        R &&
            !B &&
            null != o &&
            (el = (0, i.jsxs)(j.Z, {
                className: Z.body,
                direction: j.Z.Direction.VERTICAL,
                children: [
                    (0, i.jsx)(f.izJ, { className: Z.topDivider }),
                    (function (e) {
                        let {
                            integration: t,
                            labelText: n,
                            subscribersText: r,
                            descriptionText: l,
                            roleLink: a,
                            onSync: o,
                        } = e;
                        return (0, i.jsxs)(j.Z, {
                            children: [
                                (0, i.jsxs)(j.Z.Child, {
                                    basis: "50%",
                                    children: [
                                        (0, i.jsx)(f.X6q, {
                                            variant: "heading-md/semibold",
                                            className: k.marginBottom8,
                                            children: T.intl.string(T.t.eBtNBQ),
                                        }),
                                        (0, i.jsx)(f.Text, {
                                            className: Z.syncedRole,
                                            color: "header-primary",
                                            variant: "text-sm/normal",
                                            children: a,
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)(j.Z.Child, {
                                    basis: "50%",
                                    children: [
                                        (0, i.jsx)(f.X6q, {
                                            variant: "heading-sm/semibold",
                                            className: k.marginBottom8,
                                            children: n,
                                        }),
                                        (0, i.jsxs)(j.Z, {
                                            justify: j.Z.Justify.BETWEEN,
                                            children: [
                                                (0, i.jsxs)(j.Z, {
                                                    direction: j.Z.Direction.VERTICAL,
                                                    children: [
                                                        (0, i.jsx)(f.Text, {
                                                            color: "header-primary",
                                                            variant: "text-sm/normal",
                                                            children: r,
                                                        }),
                                                        (0, i.jsx)(f.Text, {
                                                            color: "header-secondary",
                                                            variant: "text-xs/normal",
                                                            children: l,
                                                        }),
                                                    ],
                                                }),
                                                t.syncing
                                                    ? (0, i.jsx)(f.hU, {
                                                          size: "sm",
                                                          variant: "primary",
                                                          icon: f.DuK,
                                                          "aria-label": T.intl.string(T.t.BkuOOz),
                                                          disabled: !0,
                                                      })
                                                    : (0, i.jsx)(f.zxk, {
                                                          size: "sm",
                                                          variant: "primary",
                                                          text: T.intl.string(T.t.BkuOOz),
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
                        labelText: X,
                        subscribersText: Q,
                        descriptionText: et,
                        roleLink: ee,
                        onSync: F,
                    }),
                    (0, i.jsx)(f.izJ, { className: Z.midDivider }),
                    (function (e) {
                        let { integration: t, labelText: n, onBehaviorChange: r, onGracePeriodChange: l } = e;
                        return (0, i.jsxs)(j.Z, {
                            children: [
                                (0, i.jsx)(j.Z.Child, {
                                    basis: "50%",
                                    children: (0, i.jsx)(f.q4e, {
                                        label: n,
                                        placeholder: n,
                                        value: "".concat(t.expire_behavior),
                                        options: [
                                            {
                                                value: c.l.REMOVE_ROLE.toString(),
                                                label: T.intl.string(T.t["6kpw4u"]),
                                            },
                                            {
                                                value: c.l.KICK.toString(),
                                                label: T.intl.string(T.t.fQUQIC),
                                            },
                                        ],
                                        isDisabled: t.syncing,
                                        onChange: (e) => r(parseInt(e)),
                                    }),
                                }),
                                (0, i.jsx)(j.Z.Child, {
                                    basis: "50%",
                                    children: (0, i.jsx)(f.q4e, {
                                        label: T.intl.string(T.t.uiXMo6),
                                        placeholder: T.intl.string(T.t.uiXMo6),
                                        maxVisibleItems: 5,
                                        value: "".concat(t.expire_grace_period),
                                        options: Object.values(d.W)
                                            .filter(Number.isInteger)
                                            .map((e) => ({
                                                value: "".concat(e),
                                                label: T.intl.formatToPlainString(T.t.eGjmy8, { days: e }),
                                            })),
                                        onChange: (e) => l(parseInt(e)),
                                        isDisabled: t.syncing,
                                    }),
                                }),
                            ],
                        });
                    })({
                        integration: o,
                        labelText: J,
                        onBehaviorChange: function (e) {
                            h.Z.updateIntegration({ expireBehavior: e });
                        },
                        onGracePeriodChange: function (e) {
                            h.Z.updateIntegration({ expireGracePeriod: e });
                        },
                    }),
                    !G &&
                        o.expire_behavior === c.l.KICK &&
                        (0, i.jsx)(f.Text, {
                            className: Z.kickPermissionWarning,
                            color: "text-danger",
                            variant: "text-sm/normal",
                            children: T.intl.string(T.t.mThMlJ),
                        }),
                    l.type === u.b.TWITCH
                        ? (function (e) {
                              let { integration: t, emojis: n, onToggle: r } = e;
                              return (0, i.jsxs)(j.Z, {
                                  direction: j.Z.Direction.VERTICAL,
                                  children: [
                                      (0, i.jsx)(g.VL, {
                                          className: a()(k.marginTop20, k.marginBottom8),
                                          checked: t.enable_emoticons,
                                          disabled: t.syncing,
                                          onChange: (e) => r(e),
                                          label: T.intl.string(T.t["7r4OKi"]),
                                      }),
                                      (0, i.jsx)(j.Z, {
                                          wrap: j.Z.Wrap.WRAP,
                                          className: Z.__invalid_twitchEmojis,
                                          children: n.map((e, t) =>
                                              (0, i.jsx)(
                                                  b.u,
                                                  {
                                                      text: e.name,
                                                      children: (0, i.jsx)(
                                                          "img",
                                                          {
                                                              alt: T.intl.formatToPlainString(T.t.n6ZZn5, {
                                                                  name: e.name,
                                                              }),
                                                              draggable: !1,
                                                              className: a()(Z.emoji, "emoji", "jumboable"),
                                                              src: w.ZP.getEmojiURL({
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
                              emojis: ei,
                              onToggle: function (e) {
                                  h.Z.updateIntegration({ enableEmoticons: e });
                              },
                          })
                        : null,
                    (0, i.jsx)(f.izJ, { className: Z.bottomDivider }),
                    (0, i.jsx)(j.Z, {
                        children: (0, i.jsx)(f.zxk, {
                            size: "sm",
                            variant: "critical-secondary",
                            text: T.intl.string(T.t.M6q6eX),
                            onClick: K,
                        }),
                    }),
                ],
            })),
        (0, i.jsx)(f.Zbd, {
            editable: !0,
            className: Z.card,
            children: (0, i.jsxs)(j.Z, {
                direction: j.Z.Direction.VERTICAL,
                children: [
                    l.enabled
                        ? (0, i.jsx)(f.P3F, {
                              className: Z.expandableHeader,
                              "aria-expanded": R && !B,
                              onClick: L,
                              children: er,
                          })
                        : er,
                    el,
                ],
            }),
        })
    );
}
