n.d(t, { Ay: () => Y });
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(17928),
    E = n(990078),
    u = n(834730),
    _ = n(430392),
    c = n(39619),
    o = n(836480),
    A = n(101277),
    d = n(173936),
    T = n(687966),
    g = n(939249),
    I = n(778712),
    N = n(463930),
    G = n(66834),
    O = n(966327),
    S = n(429913),
    D = n(47167),
    R = n(137177),
    m = n(967144),
    L = n(903209),
    h = n(734057),
    C = n(696451),
    M = n(351906),
    U = n(287809),
    x = n(509402),
    f = n(562153),
    p = n(151781),
    F = n(221950),
    P = n(11541),
    k = n(375708),
    j = n(334046);
let v = r.memo(function () {
        return (0, l.jsx)(E.m, {
            "data-pending-richtooltip-migration": !0,
            text: k.intl.string(k.t["vu/MiQ"]),
            children: (0, l.jsx)(u.E, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: j.IV,
                children: k.intl.string(k.t.yobFdm),
            }),
        });
    }),
    X = r.memo(function () {
        return (0, l.jsx)(E.m, {
            text: k.intl.string(k.t.OrCp9h),
            children: (0, l.jsx)(u.E, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: j.IV,
                children: k.intl.string(k.t["4upToT"]),
            }),
        });
    }),
    b = {
        [P.UP.UNSPECIFIED]: {
            type: P.UP.UNSPECIFIED,
            getJoinTypeLabel: () => k.intl.string(k.t.DvMBkS),
            icon: null,
            hasTooltip: !1,
        },
        [P.UP.BOT]: {
            type: P.UP.BOT,
            getJoinTypeLabel: () => k.intl.string(k.t.HumZAi),
            icon: (0, l.jsx)(_.C, { size: "custom", color: "currentColor", className: j.XY, height: 12, width: 12 }),
            hasTooltip: !0,
        },
        [P.UP.INTEGRATION]: {
            type: P.UP.INTEGRATION,
            getJoinTypeLabel: () => k.intl.string(k.t.gmCUFw),
            icon: (0, l.jsx)(c.X, { size: "custom", color: "currentColor", height: 12, width: 12 }),
            hasTooltip: !1,
        },
        [P.UP.DISCOVERY]: {
            type: P.UP.DISCOVERY,
            getJoinTypeLabel: () => k.intl.string(k.t["Ql/e9Y"]),
            icon: (0, l.jsx)(o.Q, { size: "custom", color: "currentColor", height: 12, width: 12 }),
            hasTooltip: !1,
        },
        [P.UP.HUB]: {
            type: P.UP.HUB,
            getJoinTypeLabel: () => k.intl.string(k.t.Op8B3O),
            icon: (0, l.jsx)(A.P, { size: "custom", color: "currentColor", height: 12, width: 12 }),
            hasTooltip: !1,
        },
        [P.UP.INVITE]: {
            type: P.UP.INVITE,
            getJoinTypeLabel: (e) => e,
            icon: (0, l.jsx)(d.q, { size: "custom", color: "currentColor", height: 12, width: 12 }),
            hasTooltip: !0,
        },
        [P.UP.VANITY_URL]: {
            type: P.UP.VANITY_URL,
            getJoinTypeLabel: (e) => e,
            icon: (0, l.jsx)(d.q, { size: "custom", color: "currentColor", height: 12, width: 12 }),
            hasTooltip: !1,
        },
        [P.UP.MANUAL_MEMBER_VERIFICATION]: {
            type: P.UP.MANUAL_MEMBER_VERIFICATION,
            getJoinTypeLabel: (e) =>
                null != e ? k.intl.formatToPlainString(k.t["VHLp+u"], { code: e }) : k.intl.string(k.t.vdu7oS),
            icon: (0, l.jsx)(x.A, { height: 12, width: 12 }),
            hasTooltip: !0,
        },
        [P.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL]: {
            type: P.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL,
            getJoinTypeLabel: () => k.intl.string(k.t["9/ZreX"]),
            icon: (0, l.jsx)(T._, { size: "custom", color: "currentColor", height: 12, width: 12 }),
            hasTooltip: !0,
        },
    };
function B(e) {
    let { guildId: t, inviterUser: n, joinSourceType: a, className: E, onClickInviter: _ } = e,
        c = (0, s.bG)([C.Ay], () => (null == n ? null : C.Ay.getMember(t, n.id)), [n, t]),
        o = (0, m.gn)(c?.guildId, c?.userId, c?.colorStrings ?? null),
        A = r.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), null != n && _?.(n);
            },
            [n, _],
        );
    return null == n
        ? null
        : (0, l.jsxs)("div", {
              className: i()(j.u6, E),
              children: [
                  (0, l.jsx)(u.E, {
                      variant: "text-xs/medium",
                      children: a !== P.UP.BOT ? k.intl.string(k.t.azhY2u) : k.intl.string(k.t["2ByN2n"]),
                  }),
                  (0, l.jsxs)(g.D, {
                      className: i()(j.kp, null != _ && j.vk),
                      onClick: A,
                      children: [
                          (0, l.jsx)(O.A, { user: n, size: I._3.SIZE_16 }),
                          (0, l.jsx)(u.E, {
                              variant: "text-xs/medium",
                              children: (0, l.jsx)(N.g, {
                                  name: f.Ay.getName(t, null, n),
                                  colorString: c?.colorString ?? null,
                                  colorStrings: o,
                              }),
                          }),
                      ],
                  }),
              ],
          });
}
function y(e) {
    let { channel: t, className: n } = e,
        r = (0, D.Ay)(t, !0);
    return (0, l.jsx)("div", {
        className: i()(j.kp, n),
        children: (0, l.jsx)(u.E, {
            variant: "text-xs/medium",
            children: k.intl.format(k.t["2VQq2p"], { channelName: r ?? k.intl.string(k.t.zLZPmk) }),
        }),
    });
}
function V(e) {
    let { children: t, hasTooltip: n, guildId: a, inviterUser: i, joinSourceType: u, joinSourceChannelId: _ } = e,
        c = (0, s.bG)([h.A], () => h.A.getChannel(_)),
        o = (0, D.Ay)(c, !0),
        A = !!n && (u === P.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL || null != i),
        d = r.useMemo(
            () =>
                u === P.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL
                    ? (0, l.jsx)(y, { channel: c })
                    : (0, l.jsx)(B, { guildId: a, inviterUser: i, joinSourceType: u }),
            [u, a, i, c],
        );
    if (!A) return t;
    let T =
        u === P.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL
            ? k.intl.formatToPlainString(k.t["2VQq2p"], { channelName: o ?? k.intl.string(k.t.zLZPmk) })
            : u === P.UP.BOT
              ? k.intl.string(k.t["2ByN2n"])
              : k.intl.string(k.t.azhY2u);
    return (0, l.jsx)(E.m, { "aria-label": T, __unsupportedReactNodeAsText: d, children: t });
}
function H(e) {
    let { type: t } = e,
        n = (0, P.eN)(t);
    return null == n
        ? null
        : (0, l.jsx)("div", { className: j.c5, style: { width: 12, height: 12, backgroundImage: n } });
}
function w(e) {
    let {
            sourceInviteCode: t,
            joinSourceType: n,
            joinSourceApplicationId: a,
            integrationType: E,
            joinSourceChannelId: _,
            showJoinMethodContextAsFooter: c,
            guildId: o,
            inviterUser: A,
            onClickInviter: d,
            ...T
        } = e,
        I = null != n ? b[n] : null,
        N = n === P.UP.INTEGRATION && null != E,
        G = (0, S.h)(a),
        O = (0, s.bG)([h.A], () => h.A.getChannel(_)),
        D = r.useCallback(
            (e) => {
                switch ((e.stopPropagation(), e.preventDefault(), !0)) {
                    case null == t && null == n:
                    case null == n:
                        return;
                    case n === P.UP.INVITE && null != t:
                        return void (0, F.Ld)(o, {
                            selectedSourceInviteCode: t?.trim() ?? void 0,
                            selectedJoinSourceType: n,
                        });
                    default:
                        return void (0, F.Ld)(o, {
                            selectedSourceInviteCode: null,
                            selectedJoinSourceType: n ?? void 0,
                        });
                }
            },
            [o, n, t],
        );
    switch (!0) {
        case null == I:
        case null == n:
        case n === P.UP.UNSPECIFIED:
            return (0, l.jsx)(v, { ...T });
        case null != E && N:
            return (0, l.jsxs)(g.D, {
                className: j.B$,
                ...T,
                "aria-label": (0, P.v8)(E),
                role: "button",
                tabIndex: 0,
                onClick: D,
                children: [
                    (0, l.jsx)(H, { type: E }),
                    (0, l.jsx)(u.E, { variant: "text-sm/medium", children: (0, P.v8)(E) }),
                ],
            });
        case n === P.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL && null != G:
            return (0, l.jsxs)("div", {
                className: i()(c && j.TS),
                children: [
                    (0, l.jsxs)(g.D, {
                        className: j.SH,
                        ...T,
                        "aria-label": I?.getJoinTypeLabel(t ?? void 0),
                        role: "button",
                        tabIndex: 0,
                        onClick: D,
                        children: [
                            (0, l.jsx)(R.A, { game: G, size: R.M.XXSMALL }),
                            (0, l.jsx)(u.E, { variant: "text-sm/medium", className: j.YL, children: G.name }),
                        ],
                    }),
                    c && (0, l.jsx)(y, { channel: O }),
                ],
            });
        case null != I:
            return (0, l.jsxs)("div", {
                className: i()(c && j.TS),
                children: [
                    (0, l.jsxs)(g.D, {
                        className: j.B$,
                        ...T,
                        "aria-label": I?.getJoinTypeLabel(t ?? void 0),
                        role: "button",
                        tabIndex: 0,
                        onClick: D,
                        children: [
                            I?.icon,
                            (0, l.jsx)(u.E, { variant: "text-sm/medium", children: I?.getJoinTypeLabel(t ?? void 0) }),
                        ],
                    }),
                    c &&
                        (0, l.jsx)(B, {
                            guildId: o,
                            inviterUser: A,
                            joinSourceType: n,
                            className: j.nz,
                            onClickInviter: d,
                        }),
                ],
            });
        default:
            return (0, l.jsx)(v, { ...T });
    }
}
let Y = r.memo(function (e) {
    let { userId: t, guildId: n, showJoinMethodContextAsFooter: a, onClickInviter: i } = e,
        E = (0, s.bG)([p.A], () => p.A.getEnhancedMember(n, t), [n, t]),
        u = E?.inviterId ?? null,
        _ = (0, s.bG)([U.default], () => U.default.getUser(u), [u]);
    r.useEffect(() => {
        null != u && (G.A.requestMembersById(n, [u]), (0, L.A)(u, void 0, { guildId: n }));
    }, [n, u]);
    let c = (0, s.bG)([M.A], () => M.A.hideInstantInvites, []);
    if (null == E) return (0, l.jsx)(v, {});
    let {
            sourceInviteCode: o,
            joinSourceType: A,
            joinSourceChannelId: d,
            joinSourceApplicationId: T,
            integrationType: g,
        } = E,
        I = null != A ? b[A] : null,
        N = I?.hasTooltip ?? !1;
    return (A === P.UP.INVITE || A === P.UP.VANITY_URL || (A === P.UP.MANUAL_MEMBER_VERIFICATION && null != o)) && c
        ? (0, l.jsx)(X, {})
        : (0, l.jsx)(V, {
              hasTooltip: N && !a,
              inviterUser: _ ?? null,
              guildId: n,
              joinSourceType: A,
              joinSourceChannelId: d,
              children: (0, l.jsx)(w, {
                  sourceInviteCode: o,
                  joinSourceType: A,
                  joinSourceApplicationId: T,
                  joinSourceChannelId: d,
                  integrationType: g,
                  showJoinMethodContextAsFooter: a,
                  inviterUser: _ ?? null,
                  guildId: n,
                  onClickInviter: i,
              }),
          });
});
