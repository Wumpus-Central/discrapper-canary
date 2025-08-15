t.d(e, { ZP: () => N }), t(781311);
var n = t(951288),
    r = t(647438),
    l = t(120356),
    i = t.n(l),
    a = t(442837),
    s = t(481060),
    o = t(749210),
    g = t(700582),
    c = t(835473),
    f = t(933557),
    v = t(925329),
    u = t(884902),
    h = t(484459),
    d = t(592125),
    E = t(271383),
    C = t(246946),
    B = t(594174),
    w = t(785195),
    D = t(5192),
    M = t(893966),
    p = t(527379),
    I = t(327999),
    H = t(388032),
    b = t(303572);
function O(A) {
    for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (A) {
                    return Object.getOwnPropertyDescriptor(t, A).enumerable;
                }),
            )),
            n.forEach(function (e) {
                var n;
                (n = t[e]),
                    e in A
                        ? Object.defineProperty(A, e, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (A[e] = n);
            });
    }
    return A;
}
function Q(A, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(e))
            : (function (A, e) {
                  var t = Object.keys(A);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(A);
                      t.push.apply(t, n);
                  }
                  return t;
              })(Object(e)).forEach(function (t) {
                  Object.defineProperty(A, t, Object.getOwnPropertyDescriptor(e, t));
              }),
        A
    );
}
let P = r.memo(function () {
        return (0, n.jsx)(s.ua7, {
            text: H.intl.string(H.t["vu/MiY"]),
            children: (A) =>
                (0, n.jsx)(
                    s.Text,
                    Q(O({}, A), {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        className: b.unknownInvite,
                        children: H.intl.string(H.t.yobFdn),
                    }),
                ),
        });
    }),
    j = r.memo(function () {
        return (0, n.jsx)(s.ua7, {
            text: H.intl.string(H.t.OrCp9v),
            children: (A) =>
                (0, n.jsx)(
                    s.Text,
                    Q(O({}, A), {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        className: b.unknownInvite,
                        children: H.intl.string(H.t["4upToa"]),
                    }),
                ),
        });
    }),
    V = {
        [I.gq.UNSPECIFIED]: {
            type: I.gq.UNSPECIFIED,
            getJoinTypeLabel: () => H.intl.string(H.t.DvMBkZ),
            icon: null,
            hasTooltip: !1,
        },
        [I.gq.BOT]: {
            type: I.gq.BOT,
            getJoinTypeLabel: () => H.intl.string(H.t.HumZAg),
            icon: (0, n.jsx)(s.wGt, {
                size: "custom",
                color: "currentColor",
                className: b.robot,
                height: 12,
                width: 12,
            }),
            hasTooltip: !0,
        },
        [I.gq.INTEGRATION]: {
            type: I.gq.INTEGRATION,
            getJoinTypeLabel: () => H.intl.string(H.t.gmCUFx),
            icon: (0, n.jsx)(s.tYf, {
                size: "custom",
                color: "currentColor",
                height: 12,
                width: 12,
            }),
            hasTooltip: !1,
        },
        [I.gq.DISCOVERY]: {
            type: I.gq.DISCOVERY,
            getJoinTypeLabel: () => H.intl.string(H.t["Ql/e9f"]),
            icon: (0, n.jsx)(s.Jmo, {
                size: "custom",
                color: "currentColor",
                height: 12,
                width: 12,
            }),
            hasTooltip: !1,
        },
        [I.gq.HUB]: {
            type: I.gq.HUB,
            getJoinTypeLabel: () => H.intl.string(H.t.Op8B3N),
            icon: (0, n.jsx)(s.aVH, {
                size: "custom",
                color: "currentColor",
                height: 12,
                width: 12,
            }),
            hasTooltip: !1,
        },
        [I.gq.INVITE]: {
            type: I.gq.INVITE,
            getJoinTypeLabel: (A) => A,
            icon: (0, n.jsx)(s.xPt, {
                size: "custom",
                color: "currentColor",
                height: 12,
                width: 12,
            }),
            hasTooltip: !0,
        },
        [I.gq.VANITY_URL]: {
            type: I.gq.VANITY_URL,
            getJoinTypeLabel: (A) => A,
            icon: (0, n.jsx)(s.xPt, {
                size: "custom",
                color: "currentColor",
                height: 12,
                width: 12,
            }),
            hasTooltip: !1,
        },
        [I.gq.MANUAL_MEMBER_VERIFICATION]: {
            type: I.gq.MANUAL_MEMBER_VERIFICATION,
            getJoinTypeLabel: (A) =>
                null != A ? H.intl.formatToPlainString(H.t["VHLp+v"], { code: A }) : H.intl.string(H.t.vdu7oa),
            icon: (0, n.jsx)(w.Z, {
                height: 12,
                width: 12,
            }),
            hasTooltip: !0,
        },
        [I.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL]: {
            type: I.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL,
            getJoinTypeLabel: () => H.intl.string(H.t["9/ZreX"]),
            icon: (0, n.jsx)(s.iWm, {
                size: "custom",
                color: "currentColor",
                height: 12,
                width: 12,
            }),
            hasTooltip: !0,
        },
    };
function m(A) {
    var e, t;
    let { guildId: l, inviterUser: o, joinSourceType: c, className: f, onClickInviter: v } = A,
        h = (0, a.e7)([E.ZP], () => (null == o ? null : E.ZP.getMember(l, o.id)), [o, l]),
        d = (0, u.X7)(
            null == h ? void 0 : h.guildId,
            null == h ? void 0 : h.userId,
            null != (e = null == h ? void 0 : h.colorStrings) ? e : null,
        ),
        C = r.useCallback(
            (A) => {
                A.stopPropagation(), A.preventDefault(), null != o && (null == v || v(o));
            },
            [o, v],
        );
    return null == o
        ? null
        : (0, n.jsxs)("div", {
              className: i()(b.inviterTooltipContainer, f),
              children: [
                  (0, n.jsx)(s.Text, {
                      variant: "text-xs/medium",
                      children: c !== I.gq.BOT ? H.intl.string(H.t.azhY2t) : H.intl.string(H.t["2ByN2t"]),
                  }),
                  (0, n.jsxs)(s.P3F, {
                      className: i()(b.inviterUserContainer, null != v && b.clickable),
                      onClick: C,
                      children: [
                          (0, n.jsx)(g.Z, {
                              user: o,
                              size: s.EFr.SIZE_16,
                          }),
                          (0, n.jsx)(s.Text, {
                              variant: "text-xs/medium",
                              children: (0, n.jsx)(s.PUh, {
                                  name: D.ZP.getName(l, null, o),
                                  colorString: null != (t = null == h ? void 0 : h.colorString) ? t : null,
                                  colorStrings: d,
                              }),
                          }),
                      ],
                  }),
              ],
          });
}
function T(A) {
    let { channel: e, className: t } = A,
        r = (0, f.ZP)(e, !0);
    return (0, n.jsx)("div", {
        className: i()(b.inviterUserContainer, t),
        children: (0, n.jsx)(s.Text, {
            variant: "text-xs/medium",
            children: H.intl.format(H.t["2VQq2t"], { channelName: null != r ? r : H.intl.string(H.t.zLZPmp) }),
        }),
    });
}
function y(A) {
    let { children: e, hasTooltip: t, guildId: l, inviterUser: i, joinSourceType: o, joinSourceChannelId: g } = A,
        c = (0, a.e7)([d.Z], () => d.Z.getChannel(g)),
        v = (0, f.ZP)(c, !0),
        u = !!t && (o === I.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL || null != i),
        h = r.useMemo(
            () =>
                o === I.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL
                    ? (0, n.jsx)(T, { channel: c })
                    : (0, n.jsx)(m, {
                          guildId: l,
                          inviterUser: i,
                          joinSourceType: o,
                      }),
            [o, l, i, c],
        );
    if (!u) return (0, n.jsx)(n.Fragment, { children: e({}) });
    let E =
        o === I.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL
            ? H.intl.formatToPlainString(H.t["2VQq2t"], { channelName: null != v ? v : H.intl.string(H.t.zLZPmp) })
            : o === I.gq.BOT
              ? H.intl.string(H.t["2ByN2t"])
              : H.intl.string(H.t.azhY2t);
    return (0, n.jsx)(s.ua7, {
        "aria-label": E,
        allowOverflow: !0,
        text: h,
        children: (A) => (0, n.jsx)(n.Fragment, { children: e(A) }),
    });
}
function L(A) {
    let { type: e } = A,
        t = (0, I.Ph)(e);
    return null == t
        ? null
        : (0, n.jsx)("div", {
              className: b.integrationIcon,
              style: {
                  width: 12,
                  height: 12,
                  backgroundImage: t,
              },
          });
}
function x(A) {
    var {
            sourceInviteCode: e,
            joinSourceType: t,
            joinSourceApplicationId: l,
            integrationType: o,
            joinSourceChannelId: g,
            showJoinMethodContextAsFooter: f,
            guildId: u,
            inviterUser: h,
            onClickInviter: E,
        } = A,
        C = (function (A, e) {
            if (null == A) return {};
            var t,
                n,
                r = (function (A, e) {
                    if (null == A) return {};
                    var t,
                        n,
                        r = {},
                        l = Object.keys(A);
                    for (n = 0; n < l.length; n++) (t = l[n]), e.indexOf(t) >= 0 || (r[t] = A[t]);
                    return r;
                })(A, e);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(A);
                for (n = 0; n < l.length; n++)
                    (t = l[n]),
                        !(e.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(A, t) && (r[t] = A[t]);
            }
            return r;
        })(A, [
            "sourceInviteCode",
            "joinSourceType",
            "joinSourceApplicationId",
            "integrationType",
            "joinSourceChannelId",
            "showJoinMethodContextAsFooter",
            "guildId",
            "inviterUser",
            "onClickInviter",
        ]);
    let B = null != t ? V[t] : null,
        w = t === I.gq.INTEGRATION && null != o,
        D = (0, c.q)(l),
        M = (0, a.e7)([d.Z], () => d.Z.getChannel(g)),
        H = r.useCallback(
            (A) => {
                switch ((A.stopPropagation(), A.preventDefault(), !0)) {
                    case null == e && null == t:
                    case null == t:
                        return;
                    case t === I.gq.INVITE && null != e:
                        var n;
                        (0, p.Dr)(u, {
                            selectedSourceInviteCode: null != (n = null == e ? void 0 : e.trim()) ? n : void 0,
                            selectedJoinSourceType: t,
                        });
                        return;
                    default:
                        return void (0, p.Dr)(u, {
                            selectedSourceInviteCode: null,
                            selectedJoinSourceType: null != t ? t : void 0,
                        });
                }
            },
            [u, t, e],
        );
    switch (!0) {
        case null == B:
        case null == t:
        case t === I.gq.UNSPECIFIED:
            return (0, n.jsx)(P, O({}, C));
        case null != o && w:
            return (0, n.jsxs)(
                s.P3F,
                Q(O({ className: b.inviteContainer }, C), {
                    "aria-label": (0, I.MS)(o),
                    role: "button",
                    tabIndex: 0,
                    onClick: H,
                    children: [
                        (0, n.jsx)(L, { type: o }),
                        (0, n.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            children: (0, I.MS)(o),
                        }),
                    ],
                }),
            );
        case t === I.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL && null != D:
            return (0, n.jsxs)("div", {
                className: i()(f && b.footerAlignment),
                children: [
                    (0, n.jsxs)(
                        s.P3F,
                        Q(O({ className: b.linkedChannelContainer }, C), {
                            "aria-label": null == B ? void 0 : B.getJoinTypeLabel(null != e ? e : void 0),
                            role: "button",
                            tabIndex: 0,
                            onClick: H,
                            children: [
                                (0, n.jsx)(v.Z, {
                                    game: D,
                                    size: v.Z.Sizes.XXSMALL,
                                }),
                                (0, n.jsx)(s.Text, {
                                    variant: "text-sm/medium",
                                    className: b.linkedChannelApplicationName,
                                    children: D.name,
                                }),
                            ],
                        }),
                    ),
                    f && (0, n.jsx)(T, { channel: M }),
                ],
            });
        case null != B:
            return (0, n.jsxs)("div", {
                className: i()(f && b.footerAlignment),
                children: [
                    (0, n.jsxs)(
                        s.P3F,
                        Q(O({ className: b.inviteContainer }, C), {
                            "aria-label": null == B ? void 0 : B.getJoinTypeLabel(null != e ? e : void 0),
                            role: "button",
                            tabIndex: 0,
                            onClick: H,
                            children: [
                                null == B ? void 0 : B.icon,
                                (0, n.jsx)(s.Text, {
                                    variant: "text-sm/medium",
                                    children: null == B ? void 0 : B.getJoinTypeLabel(null != e ? e : void 0),
                                }),
                            ],
                        }),
                    ),
                    f &&
                        (0, n.jsx)(m, {
                            guildId: u,
                            inviterUser: h,
                            joinSourceType: t,
                            className: b.inviterFooter,
                            onClickInviter: E,
                        }),
                ],
            });
        default:
            return (0, n.jsx)(P, O({}, C));
    }
}
let N = r.memo(function (A) {
    var e, t;
    let { userId: l, guildId: i, showJoinMethodContextAsFooter: s, onClickInviter: g } = A,
        c = (0, a.e7)([M.Z], () => M.Z.getEnhancedMember(i, l), [i, l]),
        f = null != (e = null == c ? void 0 : c.inviterId) ? e : null,
        v = (0, a.e7)([B.default], () => B.default.getUser(f), [f]);
    r.useEffect(() => {
        null != f && (o.Z.requestMembersById(i, [f]), (0, h.Z)(f, void 0, { guildId: i }));
    }, [i, f]);
    let u = (0, a.e7)([C.Z], () => C.Z.hideInstantInvites, []);
    if (null == c) return (0, n.jsx)(P, {});
    let {
            sourceInviteCode: d,
            joinSourceType: E,
            joinSourceChannelId: w,
            joinSourceApplicationId: D,
            integrationType: p,
        } = c,
        H = null != E ? V[E] : null,
        b = null != (t = null == H ? void 0 : H.hasTooltip) && t;
    return (E === I.gq.INVITE || E === I.gq.VANITY_URL || (E === I.gq.MANUAL_MEMBER_VERIFICATION && null != d)) && u
        ? (0, n.jsx)(j, {})
        : (0, n.jsx)(y, {
              hasTooltip: b && !s,
              inviterUser: null != v ? v : null,
              guildId: i,
              joinSourceType: E,
              joinSourceChannelId: w,
              children: (A) =>
                  (0, n.jsx)(
                      x,
                      O(
                          {
                              sourceInviteCode: d,
                              joinSourceType: E,
                              joinSourceApplicationId: D,
                              joinSourceChannelId: w,
                              integrationType: p,
                              showJoinMethodContextAsFooter: s,
                              inviterUser: null != v ? v : null,
                              guildId: i,
                              onClickInviter: g,
                          },
                          A,
                      ),
                  ),
          });
});
