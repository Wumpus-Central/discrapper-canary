n.d(t, {
    Ay: () => k,
}),
    n(733351);
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(311907),
    o = n(990078),
    c = n(397927),
    u = n(686956),
    E = n(966327),
    d = n(429913),
    _ = n(47167),
    g = n(769015),
    A = n(967144),
    T = n(576622),
    f = n(734057),
    h = n(696451),
    I = n(351906),
    O = n(287809),
    N = n(509402),
    m = n(562153),
    S = n(266047),
    p = n(221950),
    b = n(11541),
    G = n(985018),
    R = n(745483);

function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
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
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let x = r.memo(function () {
        return (0, l.jsx)(o.m, {
            "data-pending-richtooltip-migration": !0,
            text: G.intl.string(G.t["vu/MiQ"]),
            children: (0, l.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: R.IV,
                children: G.intl.string(G.t.yobFdm),
            }),
        });
    }),
    C = r.memo(function () {
        return (0, l.jsx)(o.m, {
            text: G.intl.string(G.t.OrCp9h),
            children: (0, l.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: R.IV,
                children: G.intl.string(G.t["4upToT"]),
            }),
        });
    }),
    M = {
        [b.UP.UNSPECIFIED]: {
            type: b.UP.UNSPECIFIED,
            getJoinTypeLabel: () => G.intl.string(G.t.DvMBkS),
            icon: null,
            hasTooltip: !1,
        },
        [b.UP.BOT]: {
            type: b.UP.BOT,
            getJoinTypeLabel: () => G.intl.string(G.t.HumZAi),
            icon: (0, l.jsx)(c.CnV, {
                size: "custom",
                color: "currentColor",
                className: R.XY,
                height: 12,
                width: 12,
            }),
            hasTooltip: !0,
        },
        [b.UP.INTEGRATION]: {
            type: b.UP.INTEGRATION,
            getJoinTypeLabel: () => G.intl.string(G.t.gmCUFw),
            icon: (0, l.jsx)(c.XC7, {
                size: "custom",
                color: "currentColor",
                height: 12,
                width: 12,
            }),
            hasTooltip: !1,
        },
        [b.UP.DISCOVERY]: {
            type: b.UP.DISCOVERY,
            getJoinTypeLabel: () => G.intl.string(G.t["Ql/e9Y"]),
            icon: (0, l.jsx)(c.QGJ, {
                size: "custom",
                color: "currentColor",
                height: 12,
                width: 12,
            }),
            hasTooltip: !1,
        },
        [b.UP.HUB]: {
            type: b.UP.HUB,
            getJoinTypeLabel: () => G.intl.string(G.t.Op8B3O),
            icon: (0, l.jsx)(c.Pfh, {
                size: "custom",
                color: "currentColor",
                height: 12,
                width: 12,
            }),
            hasTooltip: !1,
        },
        [b.UP.INVITE]: {
            type: b.UP.INVITE,
            getJoinTypeLabel: (e) => e,
            icon: (0, l.jsx)(c.qYV, {
                size: "custom",
                color: "currentColor",
                height: 12,
                width: 12,
            }),
            hasTooltip: !0,
        },
        [b.UP.VANITY_URL]: {
            type: b.UP.VANITY_URL,
            getJoinTypeLabel: (e) => e,
            icon: (0, l.jsx)(c.qYV, {
                size: "custom",
                color: "currentColor",
                height: 12,
                width: 12,
            }),
            hasTooltip: !1,
        },
        [b.UP.MANUAL_MEMBER_VERIFICATION]: {
            type: b.UP.MANUAL_MEMBER_VERIFICATION,
            getJoinTypeLabel: (e) =>
                null != e
                    ? G.intl.formatToPlainString(G.t["VHLp+u"], {
                          code: e,
                      })
                    : G.intl.string(G.t.vdu7oS),
            icon: (0, l.jsx)(N.A, {
                height: 12,
                width: 12,
            }),
            hasTooltip: !0,
        },
        [b.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL]: {
            type: b.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL,
            getJoinTypeLabel: () => G.intl.string(G.t["9/ZreX"]),
            icon: (0, l.jsx)(c._xR, {
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
    let { guildId: a, inviterUser: o, joinSourceType: u, className: d, onClickInviter: _ } = e,
        g = (0, s.bG)([h.Ay], () => (null == o ? null : h.Ay.getMember(a, o.id)), [o, a]),
        T = (0, A.gn)(
            null == g ? void 0 : g.guildId,
            null == g ? void 0 : g.userId,
            null != (t = null == g ? void 0 : g.colorStrings) ? t : null,
        ),
        f = r.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), null != o && (null == _ || _(o));
            },
            [o, _],
        );
    return null == o
        ? null
        : (0, l.jsxs)("div", {
              className: i()(R.u6, d),
              children: [
                  (0, l.jsx)(c.Text, {
                      variant: "text-xs/medium",
                      children: u !== b.UP.BOT ? G.intl.string(G.t.azhY2u) : G.intl.string(G.t["2ByN2n"]),
                  }),
                  (0, l.jsxs)(c.DUT, {
                      className: i()(R.kp, null != _ && R.vk),
                      onClick: f,
                      children: [
                          (0, l.jsx)(E.A, {
                              user: o,
                              size: c._3J.SIZE_16,
                          }),
                          (0, l.jsx)(c.Text, {
                              variant: "text-xs/medium",
                              children: (0, l.jsx)(c.gyj, {
                                  name: m.Ay.getName(a, null, o),
                                  colorString: null != (n = null == g ? void 0 : g.colorString) ? n : null,
                                  colorStrings: T,
                              }),
                          }),
                      ],
                  }),
              ],
          });
}

function j(e) {
    let { channel: t, className: n } = e,
        r = (0, _.Ay)(t, !0);
    return (0, l.jsx)("div", {
        className: i()(R.kp, n),
        children: (0, l.jsx)(c.Text, {
            variant: "text-xs/medium",
            children: G.intl.format(G.t["2VQq2p"], {
                channelName: null != r ? r : G.intl.string(G.t.zLZPmk),
            }),
        }),
    });
}

function U(e) {
    let { children: t, hasTooltip: n, guildId: a, inviterUser: i, joinSourceType: c, joinSourceChannelId: u } = e,
        E = (0, s.bG)([f.A], () => f.A.getChannel(u)),
        d = (0, _.Ay)(E, !0),
        g = !!n && (c === b.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL || null != i),
        A = r.useMemo(
            () =>
                c === b.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL
                    ? (0, l.jsx)(j, {
                          channel: E,
                      })
                    : (0, l.jsx)(v, {
                          guildId: a,
                          inviterUser: i,
                          joinSourceType: c,
                      }),
            [c, a, i, E],
        );
    if (!g) return t;
    let T =
        c === b.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL
            ? G.intl.formatToPlainString(G.t["2VQq2p"], {
                  channelName: null != d ? d : G.intl.string(G.t.zLZPmk),
              })
            : c === b.UP.BOT
              ? G.intl.string(G.t["2ByN2n"])
              : G.intl.string(G.t.azhY2u);
    return (0, l.jsx)(o.m, {
        "aria-label": T,
        __unsupportedReactNodeAsText: A,
        children: t,
    });
}

function y(e) {
    let { type: t } = e,
        n = (0, b.eN)(t);
    return null == n
        ? null
        : (0, l.jsx)("div", {
              className: R.c5,
              style: {
                  width: 12,
                  height: 12,
                  backgroundImage: n,
              },
          });
}

function P(e) {
    let {
            sourceInviteCode: t,
            joinSourceType: n,
            joinSourceApplicationId: a,
            integrationType: o,
            joinSourceChannelId: u,
            showJoinMethodContextAsFooter: E,
            guildId: _,
            inviterUser: A,
            onClickInviter: T,
        } = e,
        h = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                r,
                a = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++)
                    (l = n[r]),
                        !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (a[l] = e[l]);
                return a;
            }
            if (
                ((a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        l,
                        r = {},
                        a = Object.getOwnPropertyNames(e);
                    for (l = 0; l < a.length; l++)
                        (n = a[l]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                    return r;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                    (l = n[r]),
                        !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (a[l] = e[l]);
            return a;
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
        ]),
        I = null != n ? M[n] : null,
        O = n === b.UP.INTEGRATION && null != o,
        N = (0, d.h)(a),
        m = (0, s.bG)([f.A], () => f.A.getChannel(u)),
        S = r.useCallback(
            (e) => {
                switch ((e.stopPropagation(), e.preventDefault(), !0)) {
                    case null == t && null == n:
                    case null == n:
                        return;
                    case n === b.UP.INVITE && null != t:
                        var l;
                        (0, p.Ld)(_, {
                            selectedSourceInviteCode: null != (l = null == t ? void 0 : t.trim()) ? l : void 0,
                            selectedJoinSourceType: n,
                        });
                        return;
                    default:
                        return void (0, p.Ld)(_, {
                            selectedSourceInviteCode: null,
                            selectedJoinSourceType: null != n ? n : void 0,
                        });
                }
            },
            [_, n, t],
        );
    switch (!0) {
        case null == I:
        case null == n:
        case n === b.UP.UNSPECIFIED:
            return (0, l.jsx)(x, D({}, h));
        case null != o && O:
            return (0, l.jsxs)(
                c.DUT,
                L(
                    D(
                        {
                            className: R.B$,
                        },
                        h,
                    ),
                    {
                        "aria-label": (0, b.v8)(o),
                        role: "button",
                        tabIndex: 0,
                        onClick: S,
                        children: [
                            (0, l.jsx)(y, {
                                type: o,
                            }),
                            (0, l.jsx)(c.Text, {
                                variant: "text-sm/medium",
                                children: (0, b.v8)(o),
                            }),
                        ],
                    },
                ),
            );
        case n === b.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL && null != N:
            return (0, l.jsxs)("div", {
                className: i()(E && R.TS),
                children: [
                    (0, l.jsxs)(
                        c.DUT,
                        L(
                            D(
                                {
                                    className: R.SH,
                                },
                                h,
                            ),
                            {
                                "aria-label": null == I ? void 0 : I.getJoinTypeLabel(null != t ? t : void 0),
                                role: "button",
                                tabIndex: 0,
                                onClick: S,
                                children: [
                                    (0, l.jsx)(g.A, {
                                        game: N,
                                        size: g.M.XXSMALL,
                                    }),
                                    (0, l.jsx)(c.Text, {
                                        variant: "text-sm/medium",
                                        className: R.YL,
                                        children: N.name,
                                    }),
                                ],
                            },
                        ),
                    ),
                    E &&
                        (0, l.jsx)(j, {
                            channel: m,
                        }),
                ],
            });
        case null != I:
            return (0, l.jsxs)("div", {
                className: i()(E && R.TS),
                children: [
                    (0, l.jsxs)(
                        c.DUT,
                        L(
                            D(
                                {
                                    className: R.B$,
                                },
                                h,
                            ),
                            {
                                "aria-label": null == I ? void 0 : I.getJoinTypeLabel(null != t ? t : void 0),
                                role: "button",
                                tabIndex: 0,
                                onClick: S,
                                children: [
                                    null == I ? void 0 : I.icon,
                                    (0, l.jsx)(c.Text, {
                                        variant: "text-sm/medium",
                                        children: null == I ? void 0 : I.getJoinTypeLabel(null != t ? t : void 0),
                                    }),
                                ],
                            },
                        ),
                    ),
                    E &&
                        (0, l.jsx)(v, {
                            guildId: _,
                            inviterUser: A,
                            joinSourceType: n,
                            className: R.nz,
                            onClickInviter: T,
                        }),
                ],
            });
        default:
            return (0, l.jsx)(x, D({}, h));
    }
}
let k = r.memo(function (e) {
    var t, n;
    let { userId: a, guildId: i, showJoinMethodContextAsFooter: o, onClickInviter: c } = e,
        E = (0, s.bG)([S.A], () => S.A.getEnhancedMember(i, a), [i, a]),
        d = null != (t = null == E ? void 0 : E.inviterId) ? t : null,
        _ = (0, s.bG)([O.default], () => O.default.getUser(d), [d]);
    r.useEffect(() => {
        null != d &&
            (u.A.requestMembersById(i, [d]),
            (0, T.A)(d, void 0, {
                guildId: i,
            }));
    }, [i, d]);
    let g = (0, s.bG)([I.A], () => I.A.hideInstantInvites, []);
    if (null == E) return (0, l.jsx)(x, {});
    let {
            sourceInviteCode: A,
            joinSourceType: f,
            joinSourceChannelId: h,
            joinSourceApplicationId: N,
            integrationType: m,
        } = E,
        p = null != f ? M[f] : null,
        G = null != (n = null == p ? void 0 : p.hasTooltip) && n;
    return (f === b.UP.INVITE || f === b.UP.VANITY_URL || (f === b.UP.MANUAL_MEMBER_VERIFICATION && null != A)) && g
        ? (0, l.jsx)(C, {})
        : (0, l.jsx)(U, {
              hasTooltip: G && !o,
              inviterUser: null != _ ? _ : null,
              guildId: i,
              joinSourceType: f,
              joinSourceChannelId: h,
              children: (0, l.jsx)(P, {
                  sourceInviteCode: A,
                  joinSourceType: f,
                  joinSourceApplicationId: N,
                  joinSourceChannelId: h,
                  integrationType: m,
                  showJoinMethodContextAsFooter: o,
                  inviterUser: null != _ ? _ : null,
                  guildId: i,
                  onClickInviter: c,
              }),
          });
});
