n.d(t, { Ay: () => W });
var l = n(627968),
    a = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(17928),
    E = n(990078),
    _ = n(834730),
    o = n(430392),
    u = n(39619),
    c = n(836480),
    d = n(101277),
    A = n(173936),
    g = n(687966),
    T = n(939249),
    I = n(778712),
    N = n(463930),
    G = n(686956),
    O = n(966327),
    m = n(429913),
    S = n(47167),
    R = n(137177),
    D = n(967144),
    h = n(576622),
    L = n(734057),
    C = n(696451),
    M = n(351906),
    f = n(287809),
    x = n(509402),
    U = n(562153),
    p = n(151781),
    b = n(221950),
    F = n(11541),
    k = n(985018),
    P = n(334046);
let j = a.memo(function () {
        return (0, l.jsx)(E.m, {
            "data-pending-richtooltip-migration": !0,
            text: k.intl.string(k.t["vu/MiQ"]),
            children: (0, l.jsx)(_.E, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: P.IV,
                children: k.intl.string(k.t.yobFdm),
            }),
        });
    }),
    v = a.memo(function () {
        return (0, l.jsx)(E.m, {
            text: k.intl.string(k.t.OrCp9h),
            children: (0, l.jsx)(_.E, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: P.IV,
                children: k.intl.string(k.t["4upToT"]),
            }),
        });
    }),
    X = {
        [F.UP.UNSPECIFIED]: {
            type: F.UP.UNSPECIFIED,
            getJoinTypeLabel: () => k.intl.string(k.t.DvMBkS),
            icon: null,
            hasTooltip: !1,
        },
        [F.UP.BOT]: {
            type: F.UP.BOT,
            getJoinTypeLabel: () => k.intl.string(k.t.HumZAi),
            icon: (0, l.jsx)(o.C, { size: "custom", color: "currentColor", className: P.XY, height: 12, width: 12 }),
            hasTooltip: !0,
        },
        [F.UP.INTEGRATION]: {
            type: F.UP.INTEGRATION,
            getJoinTypeLabel: () => k.intl.string(k.t.gmCUFw),
            icon: (0, l.jsx)(u.X, { size: "custom", color: "currentColor", height: 12, width: 12 }),
            hasTooltip: !1,
        },
        [F.UP.DISCOVERY]: {
            type: F.UP.DISCOVERY,
            getJoinTypeLabel: () => k.intl.string(k.t["Ql/e9Y"]),
            icon: (0, l.jsx)(c.Q, { size: "custom", color: "currentColor", height: 12, width: 12 }),
            hasTooltip: !1,
        },
        [F.UP.HUB]: {
            type: F.UP.HUB,
            getJoinTypeLabel: () => k.intl.string(k.t.Op8B3O),
            icon: (0, l.jsx)(d.P, { size: "custom", color: "currentColor", height: 12, width: 12 }),
            hasTooltip: !1,
        },
        [F.UP.INVITE]: {
            type: F.UP.INVITE,
            getJoinTypeLabel: (e) => e,
            icon: (0, l.jsx)(A.q, { size: "custom", color: "currentColor", height: 12, width: 12 }),
            hasTooltip: !0,
        },
        [F.UP.VANITY_URL]: {
            type: F.UP.VANITY_URL,
            getJoinTypeLabel: (e) => e,
            icon: (0, l.jsx)(A.q, { size: "custom", color: "currentColor", height: 12, width: 12 }),
            hasTooltip: !1,
        },
        [F.UP.MANUAL_MEMBER_VERIFICATION]: {
            type: F.UP.MANUAL_MEMBER_VERIFICATION,
            getJoinTypeLabel: (e) =>
                null != e ? k.intl.formatToPlainString(k.t["VHLp+u"], { code: e }) : k.intl.string(k.t.vdu7oS),
            icon: (0, l.jsx)(x.A, { height: 12, width: 12 }),
            hasTooltip: !0,
        },
        [F.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL]: {
            type: F.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL,
            getJoinTypeLabel: () => k.intl.string(k.t["9/ZreX"]),
            icon: (0, l.jsx)(g._, { size: "custom", color: "currentColor", height: 12, width: 12 }),
            hasTooltip: !0,
        },
    };
function B(e) {
    let { guildId: t, inviterUser: n, joinSourceType: r, className: E, onClickInviter: o } = e,
        u = (0, s.bG)([C.Ay], () => (null == n ? null : C.Ay.getMember(t, n.id)), [n, t]),
        c = (0, D.gn)(u?.guildId, u?.userId, u?.colorStrings ?? null),
        d = a.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), null != n && o?.(n);
            },
            [n, o],
        );
    return null == n
        ? null
        : (0, l.jsxs)("div", {
              className: i()(P.u6, E),
              children: [
                  (0, l.jsx)(_.E, {
                      variant: "text-xs/medium",
                      children: r !== F.UP.BOT ? k.intl.string(k.t.azhY2u) : k.intl.string(k.t["2ByN2n"]),
                  }),
                  (0, l.jsxs)(T.D, {
                      className: i()(P.kp, null != o && P.vk),
                      onClick: d,
                      children: [
                          (0, l.jsx)(O.A, { user: n, size: I._3.SIZE_16 }),
                          (0, l.jsx)(_.E, {
                              variant: "text-xs/medium",
                              children: (0, l.jsx)(N.g, {
                                  name: U.Ay.getName(t, null, n),
                                  colorString: u?.colorString ?? null,
                                  colorStrings: c,
                              }),
                          }),
                      ],
                  }),
              ],
          });
}
function y(e) {
    let { channel: t, className: n } = e,
        a = (0, S.Ay)(t, !0);
    return (0, l.jsx)("div", {
        className: i()(P.kp, n),
        children: (0, l.jsx)(_.E, {
            variant: "text-xs/medium",
            children: k.intl.format(k.t["2VQq2p"], { channelName: a ?? k.intl.string(k.t.zLZPmk) }),
        }),
    });
}
function V(e) {
    let { children: t, hasTooltip: n, guildId: r, inviterUser: i, joinSourceType: _, joinSourceChannelId: o } = e,
        u = (0, s.bG)([L.A], () => L.A.getChannel(o)),
        c = (0, S.Ay)(u, !0),
        d = !!n && (_ === F.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL || null != i),
        A = a.useMemo(
            () =>
                _ === F.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL
                    ? (0, l.jsx)(y, { channel: u })
                    : (0, l.jsx)(B, { guildId: r, inviterUser: i, joinSourceType: _ }),
            [_, r, i, u],
        );
    if (!d) return t;
    let g =
        _ === F.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL
            ? k.intl.formatToPlainString(k.t["2VQq2p"], { channelName: c ?? k.intl.string(k.t.zLZPmk) })
            : _ === F.UP.BOT
              ? k.intl.string(k.t["2ByN2n"])
              : k.intl.string(k.t.azhY2u);
    return (0, l.jsx)(E.m, { "aria-label": g, __unsupportedReactNodeAsText: A, children: t });
}
function H(e) {
    let { type: t } = e,
        n = (0, F.eN)(t);
    return null == n
        ? null
        : (0, l.jsx)("div", { className: P.c5, style: { width: 12, height: 12, backgroundImage: n } });
}
function w(e) {
    let {
            sourceInviteCode: t,
            joinSourceType: n,
            joinSourceApplicationId: r,
            integrationType: E,
            joinSourceChannelId: o,
            showJoinMethodContextAsFooter: u,
            guildId: c,
            inviterUser: d,
            onClickInviter: A,
            ...g
        } = e,
        I = null != n ? X[n] : null,
        N = n === F.UP.INTEGRATION && null != E,
        G = (0, m.h)(r),
        O = (0, s.bG)([L.A], () => L.A.getChannel(o)),
        S = a.useCallback(
            (e) => {
                switch ((e.stopPropagation(), e.preventDefault(), !0)) {
                    case null == t && null == n:
                    case null == n:
                        return;
                    case n === F.UP.INVITE && null != t:
                        return void (0, b.Ld)(c, {
                            selectedSourceInviteCode: t?.trim() ?? void 0,
                            selectedJoinSourceType: n,
                        });
                    default:
                        return void (0, b.Ld)(c, {
                            selectedSourceInviteCode: null,
                            selectedJoinSourceType: n ?? void 0,
                        });
                }
            },
            [c, n, t],
        );
    switch (!0) {
        case null == I:
        case null == n:
        case n === F.UP.UNSPECIFIED:
            return (0, l.jsx)(j, { ...g });
        case null != E && N:
            return (0, l.jsxs)(T.D, {
                className: P.B$,
                ...g,
                "aria-label": (0, F.v8)(E),
                role: "button",
                tabIndex: 0,
                onClick: S,
                children: [
                    (0, l.jsx)(H, { type: E }),
                    (0, l.jsx)(_.E, { variant: "text-sm/medium", children: (0, F.v8)(E) }),
                ],
            });
        case n === F.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL && null != G:
            return (0, l.jsxs)("div", {
                className: i()(u && P.TS),
                children: [
                    (0, l.jsxs)(T.D, {
                        className: P.SH,
                        ...g,
                        "aria-label": I?.getJoinTypeLabel(t ?? void 0),
                        role: "button",
                        tabIndex: 0,
                        onClick: S,
                        children: [
                            (0, l.jsx)(R.A, { game: G, size: R.M.XXSMALL }),
                            (0, l.jsx)(_.E, { variant: "text-sm/medium", className: P.YL, children: G.name }),
                        ],
                    }),
                    u && (0, l.jsx)(y, { channel: O }),
                ],
            });
        case null != I:
            return (0, l.jsxs)("div", {
                className: i()(u && P.TS),
                children: [
                    (0, l.jsxs)(T.D, {
                        className: P.B$,
                        ...g,
                        "aria-label": I?.getJoinTypeLabel(t ?? void 0),
                        role: "button",
                        tabIndex: 0,
                        onClick: S,
                        children: [
                            I?.icon,
                            (0, l.jsx)(_.E, { variant: "text-sm/medium", children: I?.getJoinTypeLabel(t ?? void 0) }),
                        ],
                    }),
                    u &&
                        (0, l.jsx)(B, {
                            guildId: c,
                            inviterUser: d,
                            joinSourceType: n,
                            className: P.nz,
                            onClickInviter: A,
                        }),
                ],
            });
        default:
            return (0, l.jsx)(j, { ...g });
    }
}
let W = a.memo(function (e) {
    let { userId: t, guildId: n, showJoinMethodContextAsFooter: r, onClickInviter: i } = e,
        E = (0, s.bG)([p.A], () => p.A.getEnhancedMember(n, t), [n, t]),
        _ = E?.inviterId ?? null,
        o = (0, s.bG)([f.default], () => f.default.getUser(_), [_]);
    a.useEffect(() => {
        null != _ && (G.A.requestMembersById(n, [_]), (0, h.A)(_, void 0, { guildId: n }));
    }, [n, _]);
    let u = (0, s.bG)([M.A], () => M.A.hideInstantInvites, []);
    if (null == E) return (0, l.jsx)(j, {});
    let {
            sourceInviteCode: c,
            joinSourceType: d,
            joinSourceChannelId: A,
            joinSourceApplicationId: g,
            integrationType: T,
        } = E,
        I = null != d ? X[d] : null,
        N = I?.hasTooltip ?? !1;
    return (d === F.UP.INVITE || d === F.UP.VANITY_URL || (d === F.UP.MANUAL_MEMBER_VERIFICATION && null != c)) && u
        ? (0, l.jsx)(v, {})
        : (0, l.jsx)(V, {
              hasTooltip: N && !r,
              inviterUser: o ?? null,
              guildId: n,
              joinSourceType: d,
              joinSourceChannelId: A,
              children: (0, l.jsx)(w, {
                  sourceInviteCode: c,
                  joinSourceType: d,
                  joinSourceApplicationId: g,
                  joinSourceChannelId: A,
                  integrationType: T,
                  showJoinMethodContextAsFooter: r,
                  inviterUser: o ?? null,
                  guildId: n,
                  onClickInviter: i,
              }),
          });
});
