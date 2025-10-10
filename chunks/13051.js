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
    Z = n(388032),
    T = n(516941),
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
        F = r.useCallback(() => {
            l.syncing ||
                (0, f.h7j)((e) => {
                    if (!G && l.expire_behavior === c.l.KICK)
                        return (0, i.jsx)(
                            f.ConfirmModal,
                            D(A({}, e), {
                                header: Z.intl.string(Z.t.emx3lJ),
                                confirmText: Z.intl.string(Z.t.BddRzc),
                                confirmButtonColor: m.Tt.BRAND,
                                children: (0, i.jsx)(f.Text, {
                                    variant: "text-md/normal",
                                    children:
                                        l.type === u.b.YOUTUBE ? Z.intl.string(Z.t.pDCiER) : Z.intl.string(Z.t.sQqHFh),
                                }),
                            }),
                        );
                    let t =
                        l.expire_behavior === c.l.REMOVE_ROLE
                            ? Z.intl.string(Z.t["6kpw4u"])
                            : Z.intl.string(Z.t.fQUQIC);
                    return (0, i.jsx)(
                        f.ConfirmModal,
                        D(A({}, e), {
                            header: Z.intl.string(Z.t.emx3lJ),
                            confirmText: t,
                            cancelText: Z.intl.string(Z.t["ETE/oK"]),
                            onConfirm: () => M(l),
                            children: (0, i.jsx)(f.Text, {
                                variant: "text-md/normal",
                                children:
                                    l.type === u.b.YOUTUBE ? Z.intl.string(Z.t.anKQWV) : Z.intl.string(Z.t["BW/xtr"]),
                            }),
                        }),
                    );
                });
        }, [l, M, G]),
        K = r.useCallback(() => {
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
                        serviceName: Z.intl.string(Z.t.aS6cKy),
                        expireBehaviorLabel: Z.intl.string(Z.t.A5MiqK),
                        syncLabel: Z.intl.string(Z.t["7vHKVV"]),
                        subscribersText: Z.intl.formatToPlainString(Z.t["7lNtcX"], {
                            subscribers: null != (i = l.subscriber_count) ? i : 0,
                        }),
                        channelURL: a,
                    };
                case u.b.TWITCH:
                default:
                    return {
                        serviceName: Z.intl.string(Z.t.q4pBGx),
                        expireBehaviorLabel: Z.intl.string(Z.t["S/WCrK"]),
                        syncLabel: Z.intl.string(Z.t["0jbPKy"]),
                        subscribersText: Z.intl.formatToPlainString(Z.t.RdUTrq, {
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
                    : Z.intl.string(Z.t.PoWNfX);
            let t = x.Z.get(l.type);
            return {
                roleLink: e,
                syncDescriptionText:
                    l.revoked && null != t
                        ? Z.intl.formatToPlainString(Z.t.G16Wjo, {
                              user: l.user,
                              platformName: t.name,
                          })
                        : Z.intl.formatToPlainString(Z.t.unl3AA, { datetime: s()(l.synced_at).calendar() }),
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
                    ? Z.intl.formatToPlainString(Z.t.gcdJ8P, { timestamp: P.default.extractTimestamp(l.id) })
                    : Z.intl.formatToPlainString(Z.t.Nu9sam, {
                          user: null != l.user ? new y.Z(l.user).tag : null,
                          timestamp: P.default.extractTimestamp(l.id),
                      }),
            },
        ];
    else {
        let e = new URL(Y);
        t = [
            {
                text: Z.intl.format(Z.t.BegylZ, {
                    serviceName: V,
                    accountUrl: Y,
                    accountUrlText: e.hostname + e.pathname,
                }),
            },
        ];
    }
    let er = (0, i.jsxs)(j.Z, {
            className: T.header,
            align: j.Z.Align.CENTER,
            children: [
                (0, i.jsx)(I.Z, {
                    name: "".concat(l.name),
                    detailsClassName: T.description,
                    details: t,
                }),
                l.enabled
                    ? (0, i.jsx)(j.Z.Child, {
                          shrink: 0,
                          grow: 0,
                          children: (0, i.jsx)(S.Z, {
                              className: T.expandIcon,
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
                                    "aria-label": Z.intl.string(Z.t["7sCN8v"]),
                                })
                              : (0, i.jsx)(f.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    onClick: z,
                                    text: Z.intl.string(Z.t["7sCN8v"]),
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
                className: T.body,
                direction: j.Z.Direction.VERTICAL,
                children: [
                    (0, i.jsx)(f.izJ, { className: T.topDivider }),
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
                                        (0, i.jsx)(f.vwX, {
                                            className: k.marginBottom8,
                                            children: Z.intl.string(Z.t.eBtNBQ),
                                        }),
                                        (0, i.jsx)(f.Text, {
                                            className: T.syncedRole,
                                            color: "header-primary",
                                            variant: "text-sm/normal",
                                            children: a,
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)(j.Z.Child, {
                                    basis: "50%",
                                    children: [
                                        (0, i.jsx)(f.vwX, {
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
                                                          "aria-label": Z.intl.string(Z.t.BkuOOz),
                                                          disabled: !0,
                                                      })
                                                    : (0, i.jsx)(f.zxk, {
                                                          size: "sm",
                                                          variant: "primary",
                                                          text: Z.intl.string(Z.t.BkuOOz),
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
                        onSync: K,
                    }),
                    (0, i.jsx)(f.izJ, { className: T.midDivider }),
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
                                                label: Z.intl.string(Z.t["6kpw4u"]),
                                            },
                                            {
                                                value: c.l.KICK.toString(),
                                                label: Z.intl.string(Z.t.fQUQIC),
                                            },
                                        ],
                                        isDisabled: t.syncing,
                                        onChange: (e) => r(parseInt(e)),
                                    }),
                                }),
                                (0, i.jsx)(j.Z.Child, {
                                    basis: "50%",
                                    children: (0, i.jsx)(f.q4e, {
                                        label: Z.intl.string(Z.t.uiXMo6),
                                        placeholder: Z.intl.string(Z.t.uiXMo6),
                                        maxVisibleItems: 5,
                                        value: "".concat(t.expire_grace_period),
                                        options: Object.values(d.W)
                                            .filter(Number.isInteger)
                                            .map((e) => ({
                                                value: "".concat(e),
                                                label: Z.intl.formatToPlainString(Z.t.eGjmy8, { days: e }),
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
                            className: T.kickPermissionWarning,
                            color: "text-danger",
                            variant: "text-sm/normal",
                            children: Z.intl.string(Z.t.mThMlJ),
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
                                          label: Z.intl.string(Z.t["7r4OKi"]),
                                      }),
                                      (0, i.jsx)(j.Z, {
                                          wrap: j.Z.Wrap.WRAP,
                                          className: T.__invalid_twitchEmojis,
                                          children: n.map((e, t) =>
                                              (0, i.jsx)(
                                                  b.u,
                                                  {
                                                      text: e.name,
                                                      children: (0, i.jsx)(
                                                          "img",
                                                          {
                                                              alt: Z.intl.formatToPlainString(Z.t.n6ZZn5, {
                                                                  name: e.name,
                                                              }),
                                                              draggable: !1,
                                                              className: a()(T.emoji, "emoji", "jumboable"),
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
                    (0, i.jsx)(f.izJ, { className: T.bottomDivider }),
                    (0, i.jsx)(j.Z, {
                        children: (0, i.jsx)(f.zxk, {
                            size: "sm",
                            variant: "critical-secondary",
                            text: Z.intl.string(Z.t.M6q6eX),
                            onClick: F,
                        }),
                    }),
                ],
            })),
        (0, i.jsx)(f.Zbd, {
            editable: !0,
            className: T.card,
            children: (0, i.jsxs)(j.Z, {
                direction: j.Z.Direction.VERTICAL,
                children: [
                    l.enabled
                        ? (0, i.jsx)(f.P3F, {
                              className: T.expandableHeader,
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
