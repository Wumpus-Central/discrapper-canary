n.d(t, { ZP: () => w }), n(781311);
var r = n(255367),
    l = n(73800),
    s = n(120356),
    i = n.n(s),
    a = n(442837),
    o = n(481060),
    u = n(749210),
    c = n(700582),
    E = n(835473),
    d = n(933557),
    _ = n(925329),
    A = n(884902),
    T = n(484459),
    m = n(592125),
    I = n(271383),
    g = n(246946),
    f = n(594174),
    N = n(785195),
    h = n(5192),
    O = n(893966),
    p = n(527379),
    R = n(327999),
    S = n(388032),
    C = n(615133);
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
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
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let b = l.memo(function () {
        return (0, r.jsx)(o.ua7, {
            text: S.intl.string(S.t["vu/MiY"]),
            children: (e) =>
                (0, r.jsx)(
                    o.Text,
                    D(v({}, e), {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        className: C.unknownInvite,
                        children: S.intl.string(S.t.yobFdn),
                    }),
                ),
        });
    }),
    L = l.memo(function () {
        return (0, r.jsx)(o.ua7, {
            text: S.intl.string(S.t.OrCp9v),
            children: (e) =>
                (0, r.jsx)(
                    o.Text,
                    D(v({}, e), {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        className: C.unknownInvite,
                        children: S.intl.string(S.t["4upToa"]),
                    }),
                ),
        });
    }),
    x = {
        [R.gq.UNSPECIFIED]: {
            type: R.gq.UNSPECIFIED,
            getJoinTypeLabel: () => S.intl.string(S.t.DvMBkZ),
            icon: null,
            hasTooltip: !1,
        },
        [R.gq.BOT]: {
            type: R.gq.BOT,
            getJoinTypeLabel: () => S.intl.string(S.t.HumZAg),
            icon: (0, r.jsx)(o.wGt, {
                size: "custom",
                color: "currentColor",
                className: C.robot,
                height: 12,
                width: 12,
            }),
            hasTooltip: !0,
        },
        [R.gq.INTEGRATION]: {
            type: R.gq.INTEGRATION,
            getJoinTypeLabel: () => S.intl.string(S.t.gmCUFx),
            icon: (0, r.jsx)(o.tYf, {
                size: "custom",
                color: "currentColor",
                height: 12,
                width: 12,
            }),
            hasTooltip: !1,
        },
        [R.gq.DISCOVERY]: {
            type: R.gq.DISCOVERY,
            getJoinTypeLabel: () => S.intl.string(S.t["Ql/e9f"]),
            icon: (0, r.jsx)(o.Jmo, {
                size: "custom",
                color: "currentColor",
                height: 12,
                width: 12,
            }),
            hasTooltip: !1,
        },
        [R.gq.HUB]: {
            type: R.gq.HUB,
            getJoinTypeLabel: () => S.intl.string(S.t.Op8B3N),
            icon: (0, r.jsx)(o.aVH, {
                size: "custom",
                color: "currentColor",
                height: 12,
                width: 12,
            }),
            hasTooltip: !1,
        },
        [R.gq.INVITE]: {
            type: R.gq.INVITE,
            getJoinTypeLabel: (e) => e,
            icon: (0, r.jsx)(o.xPt, {
                size: "custom",
                color: "currentColor",
                height: 12,
                width: 12,
            }),
            hasTooltip: !0,
        },
        [R.gq.VANITY_URL]: {
            type: R.gq.VANITY_URL,
            getJoinTypeLabel: (e) => e,
            icon: (0, r.jsx)(o.xPt, {
                size: "custom",
                color: "currentColor",
                height: 12,
                width: 12,
            }),
            hasTooltip: !1,
        },
        [R.gq.MANUAL_MEMBER_VERIFICATION]: {
            type: R.gq.MANUAL_MEMBER_VERIFICATION,
            getJoinTypeLabel: (e) =>
                null != e ? S.intl.formatToPlainString(S.t["VHLp+v"], { code: e }) : S.intl.string(S.t.vdu7oa),
            icon: (0, r.jsx)(N.Z, {
                height: 12,
                width: 12,
            }),
            hasTooltip: !0,
        },
        [R.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL]: {
            type: R.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL,
            getJoinTypeLabel: () => S.intl.string(S.t["9/ZreX"]),
            icon: (0, r.jsx)(o.iWm, {
                size: "custom",
                color: "currentColor",
                height: 12,
                width: 12,
            }),
            hasTooltip: !0,
        },
    };
function U(e) {
    var t, n;
    let { guildId: s, inviterUser: u, joinSourceType: E, className: d, onClickInviter: _ } = e,
        T = (0, a.e7)([I.ZP], () => (null == u ? null : I.ZP.getMember(s, u.id)), [u, s]),
        m = (0, A.X7)(
            null == T ? void 0 : T.guildId,
            null == T ? void 0 : T.userId,
            null != (t = null == T ? void 0 : T.colorStrings) ? t : null,
        ),
        g = l.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), null != u && (null == _ || _(u));
            },
            [u, _],
        );
    return null == u
        ? null
        : (0, r.jsxs)("div", {
              className: i()(C.inviterTooltipContainer, d),
              children: [
                  (0, r.jsx)(o.Text, {
                      variant: "text-xs/medium",
                      children: E !== R.gq.BOT ? S.intl.string(S.t.azhY2t) : S.intl.string(S.t["2ByN2t"]),
                  }),
                  (0, r.jsxs)(o.P3F, {
                      className: i()(C.inviterUserContainer, null != _ && C.clickable),
                      onClick: g,
                      children: [
                          (0, r.jsx)(c.Z, {
                              user: u,
                              size: o.EFr.SIZE_16,
                          }),
                          (0, r.jsx)(o.Text, {
                              variant: "text-xs/medium",
                              children: (0, r.jsx)(o.PUh, {
                                  name: h.ZP.getName(s, null, u),
                                  colorString: null != (n = null == T ? void 0 : T.colorString) ? n : null,
                                  colorStrings: m,
                              }),
                          }),
                      ],
                  }),
              ],
          });
}
function M(e) {
    let { channel: t, className: n } = e,
        l = (0, d.ZP)(t, !0);
    return (0, r.jsx)("div", {
        className: i()(C.inviterUserContainer, n),
        children: (0, r.jsx)(o.Text, {
            variant: "text-xs/medium",
            children: S.intl.format(S.t["2VQq2t"], { channelName: null != l ? l : S.intl.string(S.t.zLZPmp) }),
        }),
    });
}
function P(e) {
    let { children: t, hasTooltip: n, guildId: s, inviterUser: i, joinSourceType: u, joinSourceChannelId: c } = e,
        E = (0, a.e7)([m.Z], () => m.Z.getChannel(c)),
        _ = (0, d.ZP)(E, !0),
        A = !!n && (u === R.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL || null != i),
        T = l.useMemo(
            () =>
                u === R.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL
                    ? (0, r.jsx)(M, { channel: E })
                    : (0, r.jsx)(U, {
                          guildId: s,
                          inviterUser: i,
                          joinSourceType: u,
                      }),
            [u, s, i, E],
        );
    if (!A) return (0, r.jsx)(r.Fragment, { children: t({}) });
    let I =
        u === R.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL
            ? S.intl.formatToPlainString(S.t["2VQq2t"], { channelName: null != _ ? _ : S.intl.string(S.t.zLZPmp) })
            : u === R.gq.BOT
              ? S.intl.string(S.t["2ByN2t"])
              : S.intl.string(S.t.azhY2t);
    return (0, r.jsx)(o.ua7, {
        "aria-label": I,
        allowOverflow: !0,
        text: T,
        children: (e) => (0, r.jsx)(r.Fragment, { children: t(e) }),
    });
}
function j(e) {
    let { type: t } = e,
        n = (0, R.Ph)(t);
    return null == n
        ? null
        : (0, r.jsx)("div", {
              className: C.integrationIcon,
              style: {
                  width: 12,
                  height: 12,
                  backgroundImage: n,
              },
          });
}
function y(e) {
    var {
            sourceInviteCode: t,
            joinSourceType: n,
            joinSourceApplicationId: s,
            integrationType: u,
            joinSourceChannelId: c,
            showJoinMethodContextAsFooter: d,
            guildId: A,
            inviterUser: T,
            onClickInviter: I,
        } = e,
        g = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++)
                    (n = s[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, [
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
    let f = null != n ? x[n] : null,
        N = n === R.gq.INTEGRATION && null != u,
        h = (0, E.q)(s),
        O = (0, a.e7)([m.Z], () => m.Z.getChannel(c)),
        S = l.useCallback(
            (e) => {
                switch ((e.stopPropagation(), e.preventDefault(), !0)) {
                    case null == t && null == n:
                    case null == n:
                        return;
                    case n === R.gq.INVITE && null != t:
                        var r;
                        (0, p.Dr)(A, {
                            selectedSourceInviteCode: null != (r = null == t ? void 0 : t.trim()) ? r : void 0,
                            selectedJoinSourceType: n,
                        });
                        return;
                    default:
                        return void (0, p.Dr)(A, {
                            selectedSourceInviteCode: null,
                            selectedJoinSourceType: null != n ? n : void 0,
                        });
                }
            },
            [A, n, t],
        );
    switch (!0) {
        case null == f:
        case null == n:
        case n === R.gq.UNSPECIFIED:
            return (0, r.jsx)(b, v({}, g));
        case null != u && N:
            return (0, r.jsxs)(
                o.P3F,
                D(v({ className: C.inviteContainer }, g), {
                    "aria-label": (0, R.MS)(u),
                    role: "button",
                    tabIndex: 0,
                    onClick: S,
                    children: [
                        (0, r.jsx)(j, { type: u }),
                        (0, r.jsx)(o.Text, {
                            variant: "text-sm/medium",
                            children: (0, R.MS)(u),
                        }),
                    ],
                }),
            );
        case n === R.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL && null != h:
            return (0, r.jsxs)("div", {
                className: i()(d && C.footerAlignment),
                children: [
                    (0, r.jsxs)(
                        o.P3F,
                        D(v({ className: C.linkedChannelContainer }, g), {
                            "aria-label": null == f ? void 0 : f.getJoinTypeLabel(null != t ? t : void 0),
                            role: "button",
                            tabIndex: 0,
                            onClick: S,
                            children: [
                                (0, r.jsx)(_.Z, {
                                    game: h,
                                    size: _.Z.Sizes.XXSMALL,
                                }),
                                (0, r.jsx)(o.Text, {
                                    variant: "text-sm/medium",
                                    className: C.linkedChannelApplicationName,
                                    children: h.name,
                                }),
                            ],
                        }),
                    ),
                    d && (0, r.jsx)(M, { channel: O }),
                ],
            });
        case null != f:
            return (0, r.jsxs)("div", {
                className: i()(d && C.footerAlignment),
                children: [
                    (0, r.jsxs)(
                        o.P3F,
                        D(v({ className: C.inviteContainer }, g), {
                            "aria-label": null == f ? void 0 : f.getJoinTypeLabel(null != t ? t : void 0),
                            role: "button",
                            tabIndex: 0,
                            onClick: S,
                            children: [
                                null == f ? void 0 : f.icon,
                                (0, r.jsx)(o.Text, {
                                    variant: "text-sm/medium",
                                    children: null == f ? void 0 : f.getJoinTypeLabel(null != t ? t : void 0),
                                }),
                            ],
                        }),
                    ),
                    d &&
                        (0, r.jsx)(U, {
                            guildId: A,
                            inviterUser: T,
                            joinSourceType: n,
                            className: C.inviterFooter,
                            onClickInviter: I,
                        }),
                ],
            });
        default:
            return (0, r.jsx)(b, v({}, g));
    }
}
let w = l.memo(function (e) {
    var t, n;
    let { userId: s, guildId: i, showJoinMethodContextAsFooter: o, onClickInviter: c } = e,
        E = (0, a.e7)([O.Z], () => O.Z.getEnhancedMember(i, s), [i, s]),
        d = null != (t = null == E ? void 0 : E.inviterId) ? t : null,
        _ = (0, a.e7)([f.default], () => f.default.getUser(d), [d]);
    l.useEffect(() => {
        null != d && (u.Z.requestMembersById(i, [d]), (0, T.Z)(d, void 0, { guildId: i }));
    }, [i, d]);
    let A = (0, a.e7)([g.Z], () => g.Z.hideInstantInvites, []);
    if (null == E) return (0, r.jsx)(b, {});
    let {
            sourceInviteCode: m,
            joinSourceType: I,
            joinSourceChannelId: N,
            joinSourceApplicationId: h,
            integrationType: p,
        } = E,
        S = null != I ? x[I] : null,
        C = null != (n = null == S ? void 0 : S.hasTooltip) && n;
    return (I === R.gq.INVITE || I === R.gq.VANITY_URL || (I === R.gq.MANUAL_MEMBER_VERIFICATION && null != m)) && A
        ? (0, r.jsx)(L, {})
        : (0, r.jsx)(P, {
              hasTooltip: C && !o,
              inviterUser: null != _ ? _ : null,
              guildId: i,
              joinSourceType: I,
              joinSourceChannelId: N,
              children: (e) =>
                  (0, r.jsx)(
                      y,
                      v(
                          {
                              sourceInviteCode: m,
                              joinSourceType: I,
                              joinSourceApplicationId: h,
                              joinSourceChannelId: N,
                              integrationType: p,
                              showJoinMethodContextAsFooter: o,
                              inviterUser: null != _ ? _ : null,
                              guildId: i,
                              onClickInviter: c,
                          },
                          e,
                      ),
                  ),
          });
});
