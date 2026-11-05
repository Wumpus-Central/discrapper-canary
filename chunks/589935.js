var l = n(477900),
    r = n(582128),
    a = n(503698),
    i = n.n(a),
    s = n(855986),
    E = n(866665),
    u = n(834730),
    o = n(430392),
    c = n(39619),
    _ = n(836480),
    d = n(101277),
    A = n(173936),
    g = n(687966),
    I = n(939249),
    T = n(778712),
    N = n(463930),
    G = n(778858),
    O = n(966327),
    S = n(429913),
    m = n(47167),
    D = n(769015),
    R = n(967144),
    h = n(917445),
    L = n(734057),
    C = n(696451),
    M = n(351906),
    U = n(287809),
    f = n(509402),
    x = n(562153),
    p = n(406318),
    k = n(221950),
    F = n(11541),
    P = n(792996),
    b = n(113525);
let j = r.memo(function () {
        return (0, l.jsx)(E.m, {
            "data-pending-richtooltip-migration": !0,
            text: P.intl.string(P.t["vu/MiQ"]),
            children: (0, l.jsx)(u.E, {
                variant: "body-sm/medium",
                color: "text-muted",
                className: b.IV,
                children: P.intl.string(P.t.yobFdm),
            }),
        });
    }),
    y = r.memo(function () {
        return (0, l.jsx)(E.m, {
            text: P.intl.string(P.t.OrCp9h),
            children: (0, l.jsx)(u.E, {
                variant: "body-sm/medium",
                color: "text-muted",
                className: b.IV,
                children: P.intl.string(P.t["4upToT"]),
            }),
        });
    }),
    v = {
        [F.UP.UNSPECIFIED]: {
            type: F.UP.UNSPECIFIED,
            getJoinTypeLabel: () => P.intl.string(P.t.DvMBkS),
            icon: null,
            hasTooltip: !1,
        },
        [F.UP.BOT]: {
            type: F.UP.BOT,
            getJoinTypeLabel: () => P.intl.string(P.t.HumZAi),
            icon: (0, l.jsx)(o.RobotIcon, {
                size: "custom",
                color: "currentColor",
                className: b.XY,
                height: 12,
                width: 12,
            }),
            hasTooltip: !0,
        },
        [F.UP.INTEGRATION]: {
            type: F.UP.INTEGRATION,
            getJoinTypeLabel: () => P.intl.string(P.t.gmCUFw),
            icon: (0, l.jsx)(c.WebhookIcon, { size: "custom", color: "currentColor", height: 12, width: 12 }),
            hasTooltip: !1,
        },
        [F.UP.DISCOVERY]: {
            type: F.UP.DISCOVERY,
            getJoinTypeLabel: () => P.intl.string(P.t["Ql/e9Y"]),
            icon: (0, l.jsx)(_.CompassIcon, { size: "custom", color: "currentColor", height: 12, width: 12 }),
            hasTooltip: !1,
        },
        [F.UP.HUB]: {
            type: F.UP.HUB,
            getJoinTypeLabel: () => P.intl.string(P.t.Op8B3O),
            icon: (0, l.jsx)(d.HubIcon, { size: "custom", color: "currentColor", height: 12, width: 12 }),
            hasTooltip: !1,
        },
        [F.UP.INVITE]: {
            type: F.UP.INVITE,
            getJoinTypeLabel: (e) => e,
            icon: (0, l.jsx)(A.LinkIcon, { size: "custom", color: "currentColor", height: 12, width: 12 }),
            hasTooltip: !0,
        },
        [F.UP.VANITY_URL]: {
            type: F.UP.VANITY_URL,
            getJoinTypeLabel: (e) => e,
            icon: (0, l.jsx)(A.LinkIcon, { size: "custom", color: "currentColor", height: 12, width: 12 }),
            hasTooltip: !1,
        },
        [F.UP.MANUAL_MEMBER_VERIFICATION]: {
            type: F.UP.MANUAL_MEMBER_VERIFICATION,
            getJoinTypeLabel: (e) =>
                null != e ? P.intl.formatToPlainString(P.t["VHLp+u"], { code: e }) : P.intl.string(P.t.vdu7oS),
            icon: (0, l.jsx)(f.A, { height: 12, width: 12 }),
            hasTooltip: !0,
        },
        [F.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL]: {
            type: F.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL,
            getJoinTypeLabel: () => P.intl.string(P.t["9/ZreX"]),
            icon: (0, l.jsx)(g.GameControllerIcon, { size: "custom", color: "currentColor", height: 12, width: 12 }),
            hasTooltip: !0,
        },
    };
function X(e) {
    let { guildId: t, inviterUser: n, joinSourceType: a, className: E, onClickInviter: o } = e,
        c = (0, s.bG)([C.Ay], () => (null == n ? null : C.Ay.getMember(t, n.id)), [n, t]),
        _ = (0, R.gn)(c?.guildId, c?.userId, c?.colorStrings ?? null),
        d = r.useCallback(
            (e) => {
                (e.stopPropagation(), e.preventDefault(), null != n && o?.(n));
            },
            [n, o],
        );
    return null == n
        ? null
        : (0, l.jsxs)("div", {
              className: i()(b.u6, E),
              children: [
                  (0, l.jsx)(u.E, {
                      variant: "body-xs/medium",
                      children: a !== F.UP.BOT ? P.intl.string(P.t.azhY2u) : P.intl.string(P.t["2ByN2n"]),
                  }),
                  (0, l.jsxs)(I.D, {
                      className: i()(b.kp, null != o && b.vk),
                      onClick: d,
                      tabIndex: null != o ? 0 : -1,
                      children: [
                          (0, l.jsx)(O.A, { user: n, size: T._3.SIZE_16 }),
                          (0, l.jsx)(u.E, {
                              variant: "body-xs/medium",
                              children: (0, l.jsx)(N.g, {
                                  name: x.Ay.getName(t, null, n),
                                  colorString: c?.colorString ?? null,
                                  colorStrings: _,
                              }),
                          }),
                      ],
                  }),
              ],
          });
}
function B(e) {
    let { channel: t, className: n } = e,
        r = (0, m.Ay)(t, !0);
    return (0, l.jsx)("div", {
        className: i()(b.kp, n),
        children: (0, l.jsx)(u.E, {
            variant: "body-xs/medium",
            children: P.intl.format(P.t["2VQq2p"], { channelName: r ?? P.intl.string(P.t.zLZPmk) }),
        }),
    });
}
function V(e) {
    let { children: t, hasTooltip: n, guildId: a, inviterUser: i, joinSourceType: u, joinSourceChannelId: o } = e,
        c = (0, s.bG)([L.A], () => L.A.getChannel(o)),
        _ = !!n && (u === F.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL || null != i),
        d = r.useMemo(
            () =>
                u === F.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL
                    ? (0, l.jsx)(B, { channel: c })
                    : (0, l.jsx)(X, { guildId: a, inviterUser: i, joinSourceType: u }),
            [u, a, i, c],
        );
    return _ ? (0, l.jsx)(E.m, { __unsupportedReactNodeAsText: d, children: t }) : t;
}
function H(e) {
    let { type: t } = e,
        n = (0, F.eN)(t);
    return null == n
        ? null
        : (0, l.jsx)("div", { className: b.c5, style: { width: 12, height: 12, backgroundImage: n } });
}
function w(e) {
    let {
            sourceInviteCode: t,
            joinSourceType: n,
            joinSourceApplicationId: a,
            integrationType: E,
            joinSourceChannelId: o,
            showJoinMethodContextAsFooter: c,
            guildId: _,
            inviterUser: d,
            onClickInviter: A,
            ...g
        } = e,
        T = null != n ? v[n] : null,
        N = n === F.UP.INTEGRATION && null != E,
        G = (0, S.h)(a),
        O = (0, s.bG)([L.A], () => L.A.getChannel(o)),
        m = r.useCallback(
            (e) => {
                switch ((e.stopPropagation(), e.preventDefault(), !0)) {
                    case null == t && null == n:
                    case null == n:
                        return;
                    case n === F.UP.INVITE && null != t:
                        return void (0, k.Ld)(_, {
                            selectedSourceInviteCode: t?.trim() ?? void 0,
                            selectedJoinSourceType: n,
                        });
                    default:
                        return void (0, k.Ld)(_, {
                            selectedSourceInviteCode: null,
                            selectedJoinSourceType: n ?? void 0,
                        });
                }
            },
            [_, n, t],
        );
    switch (!0) {
        case null == T:
        case null == n:
        case n === F.UP.UNSPECIFIED:
            return (0, l.jsx)(j, { ...g });
        case null != E && N:
            return (0, l.jsxs)(I.D, {
                className: b.B$,
                ...g,
                "aria-label": (0, F.v8)(E),
                role: "button",
                tabIndex: 0,
                onClick: m,
                children: [
                    (0, l.jsx)(H, { type: E }),
                    (0, l.jsx)(u.E, { variant: "body-sm/medium", children: (0, F.v8)(E) }),
                ],
            });
        case n === F.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL && null != G:
            return (0, l.jsxs)("div", {
                className: i()(c && b.TS),
                children: [
                    (0, l.jsxs)(I.D, {
                        className: b.SH,
                        ...g,
                        "aria-label": T?.getJoinTypeLabel(t ?? void 0),
                        role: "button",
                        tabIndex: 0,
                        onClick: m,
                        children: [
                            (0, l.jsx)(D.A, { game: G, size: D.M.XXSMALL }),
                            (0, l.jsx)(u.E, { variant: "body-sm/medium", className: b.YL, children: G.name }),
                        ],
                    }),
                    c && (0, l.jsx)(B, { channel: O }),
                ],
            });
        case null != T:
            return (0, l.jsxs)("div", {
                className: i()(c && b.TS),
                children: [
                    (0, l.jsxs)(I.D, {
                        className: b.B$,
                        ...g,
                        "aria-label": T?.getJoinTypeLabel(t ?? void 0),
                        role: "button",
                        tabIndex: 0,
                        onClick: m,
                        children: [
                            T?.icon,
                            (0, l.jsx)(u.E, { variant: "body-sm/medium", children: T?.getJoinTypeLabel(t ?? void 0) }),
                        ],
                    }),
                    c &&
                        (0, l.jsx)(X, {
                            guildId: _,
                            inviterUser: d,
                            joinSourceType: n,
                            className: b.nz,
                            onClickInviter: A,
                        }),
                ],
            });
        default:
            return (0, l.jsx)(j, { ...g });
    }
}
let W = r.memo(function (e) {
    let { userId: t, guildId: n, showJoinMethodContextAsFooter: a, onClickInviter: i } = e,
        E = (0, s.bG)([p.A], () => p.A.getEnhancedMember(n, t), [n, t]),
        u = E?.inviterId ?? null,
        o = (0, s.bG)([U.default], () => U.default.getUser(u), [u]);
    r.useEffect(() => {
        null != u && (G.A.requestMembersById(n, [u]), (0, h.A)(u, void 0, { guildId: n }));
    }, [n, u]);
    let c = (0, s.bG)([M.A], () => M.A.hideInstantInvites, []);
    if (null == E) return (0, l.jsx)(j, {});
    let {
            sourceInviteCode: _,
            joinSourceType: d,
            joinSourceChannelId: A,
            joinSourceApplicationId: g,
            integrationType: I,
        } = E,
        T = null != d ? v[d] : null,
        N = T?.hasTooltip ?? !1;
    return (d === F.UP.INVITE || d === F.UP.VANITY_URL || (d === F.UP.MANUAL_MEMBER_VERIFICATION && null != _)) && c
        ? (0, l.jsx)(y, {})
        : (0, l.jsx)(V, {
              hasTooltip: N && !a,
              inviterUser: o ?? null,
              guildId: n,
              joinSourceType: d,
              joinSourceChannelId: A,
              children: (0, l.jsx)(w, {
                  sourceInviteCode: _,
                  joinSourceType: d,
                  joinSourceApplicationId: g,
                  joinSourceChannelId: A,
                  integrationType: I,
                  showJoinMethodContextAsFooter: a,
                  inviterUser: o ?? null,
                  guildId: n,
                  onClickInviter: i,
              }),
          });
});
n.d(t, {}, { Ay: W });
