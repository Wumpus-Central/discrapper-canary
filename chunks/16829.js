n.d(t, { ZP: () => k }), n(781311);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    s = n.n(i),
    a = n(442837),
    o = n(28664),
    u = n(481060),
    c = n(749210),
    E = n(700582),
    d = n(835473),
    _ = n(933557),
    A = n(925329),
    T = n(884902),
    I = n(484459),
    m = n(592125),
    g = n(271383),
    N = n(246946),
    h = n(594174),
    O = n(785195),
    f = n(5192),
    R = n(893966),
    S = n(527379),
    p = n(327999),
    C = n(388032),
    D = n(303572);
function U(e) {
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
let M = l.memo(function () {
        return (0, r.jsx)(o.u, {
            "data-pending-richtooltip-migration": !0,
            text: C.intl.string(C.t["vu/MiQ"]),
            children: (0, r.jsx)(u.Text, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: D.unknownInvite,
                children: C.intl.string(C.t.yobFdm),
            }),
        });
    }),
    x = l.memo(function () {
        return (0, r.jsx)(o.u, {
            text: C.intl.string(C.t.OrCp9h),
            children: (0, r.jsx)(u.Text, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: D.unknownInvite,
                children: C.intl.string(C.t["4upToT"]),
            }),
        });
    }),
    b = {
        [p.gq.UNSPECIFIED]: {
            type: p.gq.UNSPECIFIED,
            getJoinTypeLabel: () => C.intl.string(C.t.DvMBkS),
            icon: null,
            hasTooltip: !1,
        },
        [p.gq.BOT]: {
            type: p.gq.BOT,
            getJoinTypeLabel: () => C.intl.string(C.t.HumZAi),
            icon: (0, r.jsx)(u.wGt, {
                size: "custom",
                color: "currentColor",
                className: D.robot,
                height: 12,
                width: 12,
            }),
            hasTooltip: !0,
        },
        [p.gq.INTEGRATION]: {
            type: p.gq.INTEGRATION,
            getJoinTypeLabel: () => C.intl.string(C.t.gmCUFw),
            icon: (0, r.jsx)(u.tYf, {
                size: "custom",
                color: "currentColor",
                height: 12,
                width: 12,
            }),
            hasTooltip: !1,
        },
        [p.gq.DISCOVERY]: {
            type: p.gq.DISCOVERY,
            getJoinTypeLabel: () => C.intl.string(C.t["Ql/e9Y"]),
            icon: (0, r.jsx)(u.Jmo, {
                size: "custom",
                color: "currentColor",
                height: 12,
                width: 12,
            }),
            hasTooltip: !1,
        },
        [p.gq.HUB]: {
            type: p.gq.HUB,
            getJoinTypeLabel: () => C.intl.string(C.t.Op8B3O),
            icon: (0, r.jsx)(u.aVH, {
                size: "custom",
                color: "currentColor",
                height: 12,
                width: 12,
            }),
            hasTooltip: !1,
        },
        [p.gq.INVITE]: {
            type: p.gq.INVITE,
            getJoinTypeLabel: (e) => e,
            icon: (0, r.jsx)(u.xPt, {
                size: "custom",
                color: "currentColor",
                height: 12,
                width: 12,
            }),
            hasTooltip: !0,
        },
        [p.gq.VANITY_URL]: {
            type: p.gq.VANITY_URL,
            getJoinTypeLabel: (e) => e,
            icon: (0, r.jsx)(u.xPt, {
                size: "custom",
                color: "currentColor",
                height: 12,
                width: 12,
            }),
            hasTooltip: !1,
        },
        [p.gq.MANUAL_MEMBER_VERIFICATION]: {
            type: p.gq.MANUAL_MEMBER_VERIFICATION,
            getJoinTypeLabel: (e) =>
                null != e ? C.intl.formatToPlainString(C.t["VHLp+u"], { code: e }) : C.intl.string(C.t.vdu7oS),
            icon: (0, r.jsx)(O.Z, {
                height: 12,
                width: 12,
            }),
            hasTooltip: !0,
        },
        [p.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL]: {
            type: p.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL,
            getJoinTypeLabel: () => C.intl.string(C.t["9/ZreX"]),
            icon: (0, r.jsx)(u.iWm, {
                size: "custom",
                color: "currentColor",
                height: 12,
                width: 12,
            }),
            hasTooltip: !0,
        },
    };
function v(e) {
    var t, n;
    let { guildId: i, inviterUser: o, joinSourceType: c, className: d, onClickInviter: _ } = e,
        A = (0, a.e7)([g.ZP], () => (null == o ? null : g.ZP.getMember(i, o.id)), [o, i]),
        I = (0, T.X7)(
            null == A ? void 0 : A.guildId,
            null == A ? void 0 : A.userId,
            null != (t = null == A ? void 0 : A.colorStrings) ? t : null,
        ),
        m = l.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), null != o && (null == _ || _(o));
            },
            [o, _],
        );
    return null == o
        ? null
        : (0, r.jsxs)("div", {
              className: s()(D.inviterTooltipContainer, d),
              children: [
                  (0, r.jsx)(u.Text, {
                      variant: "text-xs/medium",
                      children: c !== p.gq.BOT ? C.intl.string(C.t.azhY2u) : C.intl.string(C.t["2ByN2n"]),
                  }),
                  (0, r.jsxs)(u.P3F, {
                      className: s()(D.inviterUserContainer, null != _ && D.clickable),
                      onClick: m,
                      children: [
                          (0, r.jsx)(E.Z, {
                              user: o,
                              size: u.EFr.SIZE_16,
                          }),
                          (0, r.jsx)(u.Text, {
                              variant: "text-xs/medium",
                              children: (0, r.jsx)(u.PUh, {
                                  name: f.ZP.getName(i, null, o),
                                  colorString: null != (n = null == A ? void 0 : A.colorString) ? n : null,
                                  colorStrings: I,
                              }),
                          }),
                      ],
                  }),
              ],
          });
}
function P(e) {
    let { channel: t, className: n } = e,
        l = (0, _.ZP)(t, !0);
    return (0, r.jsx)("div", {
        className: s()(D.inviterUserContainer, n),
        children: (0, r.jsx)(u.Text, {
            variant: "text-xs/medium",
            children: C.intl.format(C.t["2VQq2p"], { channelName: null != l ? l : C.intl.string(C.t.zLZPmk) }),
        }),
    });
}
function j(e) {
    let { children: t, hasTooltip: n, guildId: i, inviterUser: s, joinSourceType: u, joinSourceChannelId: c } = e,
        E = (0, a.e7)([m.Z], () => m.Z.getChannel(c)),
        d = (0, _.ZP)(E, !0),
        A = !!n && (u === p.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL || null != s),
        T = l.useMemo(
            () =>
                u === p.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL
                    ? (0, r.jsx)(P, { channel: E })
                    : (0, r.jsx)(v, {
                          guildId: i,
                          inviterUser: s,
                          joinSourceType: u,
                      }),
            [u, i, s, E],
        );
    if (!A) return t;
    let I =
        u === p.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL
            ? C.intl.formatToPlainString(C.t["2VQq2p"], { channelName: null != d ? d : C.intl.string(C.t.zLZPmk) })
            : u === p.gq.BOT
              ? C.intl.string(C.t["2ByN2n"])
              : C.intl.string(C.t.azhY2u);
    return (0, r.jsx)(o.u, {
        "aria-label": I,
        __unsupportedReactNodeAsText: T,
        children: t,
    });
}
function y(e) {
    let { type: t } = e,
        n = (0, p.Ph)(t);
    return null == n
        ? null
        : (0, r.jsx)("div", {
              className: D.integrationIcon,
              style: {
                  width: 12,
                  height: 12,
                  backgroundImage: n,
              },
          });
}
function G(e) {
    var {
            sourceInviteCode: t,
            joinSourceType: n,
            joinSourceApplicationId: i,
            integrationType: o,
            joinSourceChannelId: c,
            showJoinMethodContextAsFooter: E,
            guildId: _,
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
    let N = null != n ? b[n] : null,
        h = n === p.gq.INTEGRATION && null != o,
        O = (0, d.q)(i),
        f = (0, a.e7)([m.Z], () => m.Z.getChannel(c)),
        R = l.useCallback(
            (e) => {
                switch ((e.stopPropagation(), e.preventDefault(), !0)) {
                    case null == t && null == n:
                    case null == n:
                        return;
                    case n === p.gq.INVITE && null != t:
                        var r;
                        (0, S.Dr)(_, {
                            selectedSourceInviteCode: null != (r = null == t ? void 0 : t.trim()) ? r : void 0,
                            selectedJoinSourceType: n,
                        });
                        return;
                    default:
                        return void (0, S.Dr)(_, {
                            selectedSourceInviteCode: null,
                            selectedJoinSourceType: null != n ? n : void 0,
                        });
                }
            },
            [_, n, t],
        );
    switch (!0) {
        case null == N:
        case null == n:
        case n === p.gq.UNSPECIFIED:
            return (0, r.jsx)(M, U({}, g));
        case null != o && h:
            return (0, r.jsxs)(
                u.P3F,
                L(U({ className: D.inviteContainer }, g), {
                    "aria-label": (0, p.MS)(o),
                    role: "button",
                    tabIndex: 0,
                    onClick: R,
                    children: [
                        (0, r.jsx)(y, { type: o }),
                        (0, r.jsx)(u.Text, {
                            variant: "text-sm/medium",
                            children: (0, p.MS)(o),
                        }),
                    ],
                }),
            );
        case n === p.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL && null != O:
            return (0, r.jsxs)("div", {
                className: s()(E && D.footerAlignment),
                children: [
                    (0, r.jsxs)(
                        u.P3F,
                        L(U({ className: D.linkedChannelContainer }, g), {
                            "aria-label": null == N ? void 0 : N.getJoinTypeLabel(null != t ? t : void 0),
                            role: "button",
                            tabIndex: 0,
                            onClick: R,
                            children: [
                                (0, r.jsx)(A.Z, {
                                    game: O,
                                    size: A.A.XXSMALL,
                                }),
                                (0, r.jsx)(u.Text, {
                                    variant: "text-sm/medium",
                                    className: D.linkedChannelApplicationName,
                                    children: O.name,
                                }),
                            ],
                        }),
                    ),
                    E && (0, r.jsx)(P, { channel: f }),
                ],
            });
        case null != N:
            return (0, r.jsxs)("div", {
                className: s()(E && D.footerAlignment),
                children: [
                    (0, r.jsxs)(
                        u.P3F,
                        L(U({ className: D.inviteContainer }, g), {
                            "aria-label": null == N ? void 0 : N.getJoinTypeLabel(null != t ? t : void 0),
                            role: "button",
                            tabIndex: 0,
                            onClick: R,
                            children: [
                                null == N ? void 0 : N.icon,
                                (0, r.jsx)(u.Text, {
                                    variant: "text-sm/medium",
                                    children: null == N ? void 0 : N.getJoinTypeLabel(null != t ? t : void 0),
                                }),
                            ],
                        }),
                    ),
                    E &&
                        (0, r.jsx)(v, {
                            guildId: _,
                            inviterUser: T,
                            joinSourceType: n,
                            className: D.inviterFooter,
                            onClickInviter: I,
                        }),
                ],
            });
        default:
            return (0, r.jsx)(M, U({}, g));
    }
}
let k = l.memo(function (e) {
    var t, n;
    let { userId: i, guildId: s, showJoinMethodContextAsFooter: o, onClickInviter: u } = e,
        E = (0, a.e7)([R.Z], () => R.Z.getEnhancedMember(s, i), [s, i]),
        d = null != (t = null == E ? void 0 : E.inviterId) ? t : null,
        _ = (0, a.e7)([h.default], () => h.default.getUser(d), [d]);
    l.useEffect(() => {
        null != d && (c.Z.requestMembersById(s, [d]), (0, I.Z)(d, void 0, { guildId: s }));
    }, [s, d]);
    let A = (0, a.e7)([N.Z], () => N.Z.hideInstantInvites, []);
    if (null == E) return (0, r.jsx)(M, {});
    let {
            sourceInviteCode: T,
            joinSourceType: m,
            joinSourceChannelId: g,
            joinSourceApplicationId: O,
            integrationType: f,
        } = E,
        S = null != m ? b[m] : null,
        C = null != (n = null == S ? void 0 : S.hasTooltip) && n;
    return (m === p.gq.INVITE || m === p.gq.VANITY_URL || (m === p.gq.MANUAL_MEMBER_VERIFICATION && null != T)) && A
        ? (0, r.jsx)(x, {})
        : (0, r.jsx)(j, {
              hasTooltip: C && !o,
              inviterUser: null != _ ? _ : null,
              guildId: s,
              joinSourceType: m,
              joinSourceChannelId: g,
              children: (0, r.jsx)(G, {
                  sourceInviteCode: T,
                  joinSourceType: m,
                  joinSourceApplicationId: O,
                  joinSourceChannelId: g,
                  integrationType: f,
                  showJoinMethodContextAsFooter: o,
                  inviterUser: null != _ ? _ : null,
                  guildId: s,
                  onClickInviter: u,
              }),
          });
});
