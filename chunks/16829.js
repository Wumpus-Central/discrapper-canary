n.d(t, { ZP: () => w }), n(781311);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    s = n.n(i),
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
    N = n(594174),
    h = n(785195),
    f = n(5192),
    O = n(893966),
    p = n(527379),
    R = n(327999),
    S = n(388032),
    C = n(303572);
function D(e) {
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
function L(e, t) {
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
let U = l.memo(function () {
        return (0, r.jsx)(o.ua7, {
            text: S.intl.string(S.t["vu/MiY"]),
            children: (e) =>
                (0, r.jsx)(
                    o.Text,
                    L(D({}, e), {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        className: C.unknownInvite,
                        children: S.intl.string(S.t.yobFdn),
                    }),
                ),
        });
    }),
    M = l.memo(function () {
        return (0, r.jsx)(o.ua7, {
            text: S.intl.string(S.t.OrCp9v),
            children: (e) =>
                (0, r.jsx)(
                    o.Text,
                    L(D({}, e), {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        className: C.unknownInvite,
                        children: S.intl.string(S.t["4upToa"]),
                    }),
                ),
        });
    }),
    v = {
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
            icon: (0, r.jsx)(h.Z, {
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
function b(e) {
    var t, n;
    let { guildId: i, inviterUser: u, joinSourceType: E, className: d, onClickInviter: _ } = e,
        T = (0, a.e7)([I.ZP], () => (null == u ? null : I.ZP.getMember(i, u.id)), [u, i]),
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
              className: s()(C.inviterTooltipContainer, d),
              children: [
                  (0, r.jsx)(o.Text, {
                      variant: "text-xs/medium",
                      children: E !== R.gq.BOT ? S.intl.string(S.t.azhY2t) : S.intl.string(S.t["2ByN2t"]),
                  }),
                  (0, r.jsxs)(o.P3F, {
                      className: s()(C.inviterUserContainer, null != _ && C.clickable),
                      onClick: g,
                      children: [
                          (0, r.jsx)(c.Z, {
                              user: u,
                              size: o.EFr.SIZE_16,
                          }),
                          (0, r.jsx)(o.Text, {
                              variant: "text-xs/medium",
                              children: (0, r.jsx)(o.PUh, {
                                  name: f.ZP.getName(i, null, u),
                                  colorString: null != (n = null == T ? void 0 : T.colorString) ? n : null,
                                  colorStrings: m,
                              }),
                          }),
                      ],
                  }),
              ],
          });
}
function x(e) {
    let { channel: t, className: n } = e,
        l = (0, d.ZP)(t, !0);
    return (0, r.jsx)("div", {
        className: s()(C.inviterUserContainer, n),
        children: (0, r.jsx)(o.Text, {
            variant: "text-xs/medium",
            children: S.intl.format(S.t["2VQq2t"], { channelName: null != l ? l : S.intl.string(S.t.zLZPmp) }),
        }),
    });
}
function P(e) {
    let { children: t, hasTooltip: n, guildId: i, inviterUser: s, joinSourceType: u, joinSourceChannelId: c } = e,
        E = (0, a.e7)([m.Z], () => m.Z.getChannel(c)),
        _ = (0, d.ZP)(E, !0),
        A = !!n && (u === R.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL || null != s),
        T = l.useMemo(
            () =>
                u === R.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL
                    ? (0, r.jsx)(x, { channel: E })
                    : (0, r.jsx)(b, {
                          guildId: i,
                          inviterUser: s,
                          joinSourceType: u,
                      }),
            [u, i, s, E],
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
            joinSourceApplicationId: i,
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
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
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
    let N = null != n ? v[n] : null,
        h = n === R.gq.INTEGRATION && null != u,
        f = (0, E.q)(i),
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
        case null == N:
        case null == n:
        case n === R.gq.UNSPECIFIED:
            return (0, r.jsx)(U, D({}, g));
        case null != u && h:
            return (0, r.jsxs)(
                o.P3F,
                L(D({ className: C.inviteContainer }, g), {
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
        case n === R.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL && null != f:
            return (0, r.jsxs)("div", {
                className: s()(d && C.footerAlignment),
                children: [
                    (0, r.jsxs)(
                        o.P3F,
                        L(D({ className: C.linkedChannelContainer }, g), {
                            "aria-label": null == N ? void 0 : N.getJoinTypeLabel(null != t ? t : void 0),
                            role: "button",
                            tabIndex: 0,
                            onClick: S,
                            children: [
                                (0, r.jsx)(_.Z, {
                                    game: f,
                                    size: _.Z.Sizes.XXSMALL,
                                }),
                                (0, r.jsx)(o.Text, {
                                    variant: "text-sm/medium",
                                    className: C.linkedChannelApplicationName,
                                    children: f.name,
                                }),
                            ],
                        }),
                    ),
                    d && (0, r.jsx)(x, { channel: O }),
                ],
            });
        case null != N:
            return (0, r.jsxs)("div", {
                className: s()(d && C.footerAlignment),
                children: [
                    (0, r.jsxs)(
                        o.P3F,
                        L(D({ className: C.inviteContainer }, g), {
                            "aria-label": null == N ? void 0 : N.getJoinTypeLabel(null != t ? t : void 0),
                            role: "button",
                            tabIndex: 0,
                            onClick: S,
                            children: [
                                null == N ? void 0 : N.icon,
                                (0, r.jsx)(o.Text, {
                                    variant: "text-sm/medium",
                                    children: null == N ? void 0 : N.getJoinTypeLabel(null != t ? t : void 0),
                                }),
                            ],
                        }),
                    ),
                    d &&
                        (0, r.jsx)(b, {
                            guildId: A,
                            inviterUser: T,
                            joinSourceType: n,
                            className: C.inviterFooter,
                            onClickInviter: I,
                        }),
                ],
            });
        default:
            return (0, r.jsx)(U, D({}, g));
    }
}
let w = l.memo(function (e) {
    var t, n;
    let { userId: i, guildId: s, showJoinMethodContextAsFooter: o, onClickInviter: c } = e,
        E = (0, a.e7)([O.Z], () => O.Z.getEnhancedMember(s, i), [s, i]),
        d = null != (t = null == E ? void 0 : E.inviterId) ? t : null,
        _ = (0, a.e7)([N.default], () => N.default.getUser(d), [d]);
    l.useEffect(() => {
        null != d && (u.Z.requestMembersById(s, [d]), (0, T.Z)(d, void 0, { guildId: s }));
    }, [s, d]);
    let A = (0, a.e7)([g.Z], () => g.Z.hideInstantInvites, []);
    if (null == E) return (0, r.jsx)(U, {});
    let {
            sourceInviteCode: m,
            joinSourceType: I,
            joinSourceChannelId: h,
            joinSourceApplicationId: f,
            integrationType: p,
        } = E,
        S = null != I ? v[I] : null,
        C = null != (n = null == S ? void 0 : S.hasTooltip) && n;
    return (I === R.gq.INVITE || I === R.gq.VANITY_URL || (I === R.gq.MANUAL_MEMBER_VERIFICATION && null != m)) && A
        ? (0, r.jsx)(M, {})
        : (0, r.jsx)(P, {
              hasTooltip: C && !o,
              inviterUser: null != _ ? _ : null,
              guildId: s,
              joinSourceType: I,
              joinSourceChannelId: h,
              children: (e) =>
                  (0, r.jsx)(
                      y,
                      D(
                          {
                              sourceInviteCode: m,
                              joinSourceType: I,
                              joinSourceApplicationId: f,
                              joinSourceChannelId: h,
                              integrationType: p,
                              showJoinMethodContextAsFooter: o,
                              inviterUser: null != _ ? _ : null,
                              guildId: s,
                              onClickInviter: c,
                          },
                          e,
                      ),
                  ),
          });
});
