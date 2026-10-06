n.d(t, { Ay: () => W });
var l = n(477900),
    r = n(582128),
    a = n(503698),
    i = n.n(a),
    s = n(17928),
    E = n(866665),
    u = n(834730),
    o = n(430392),
    _ = n(39619),
    c = n(836480),
    d = n(101277),
    A = n(173936),
    g = n(687966),
    T = n(939249),
    I = n(778712),
    N = n(463930),
    G = n(66834),
    O = n(966327),
    S = n(429913),
    m = n(47167),
    D = n(769015),
    R = n(967144),
    L = n(903209),
    h = n(734057),
    C = n(696451),
    M = n(351906),
    U = n(287809),
    x = n(509402),
    f = n(562153),
    p = n(151781),
    P = n(221950),
    F = n(11541),
    k = n(375708),
    j = n(113525);
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
        [F.UP.UNSPECIFIED]: {
            type: F.UP.UNSPECIFIED,
            getJoinTypeLabel: () => k.intl.string(k.t.DvMBkS),
            icon: null,
            hasTooltip: !1,
        },
        [F.UP.BOT]: {
            type: F.UP.BOT,
            getJoinTypeLabel: () => k.intl.string(k.t.HumZAi),
            icon: (0, l.jsx)(o.RobotIcon, {
                size: "custom",
                color: "currentColor",
                className: j.XY,
                height: 12,
                width: 12,
            }),
            hasTooltip: !0,
        },
        [F.UP.INTEGRATION]: {
            type: F.UP.INTEGRATION,
            getJoinTypeLabel: () => k.intl.string(k.t.gmCUFw),
            icon: (0, l.jsx)(_.X, { size: "custom", color: "currentColor", height: 12, width: 12 }),
            hasTooltip: !1,
        },
        [F.UP.DISCOVERY]: {
            type: F.UP.DISCOVERY,
            getJoinTypeLabel: () => k.intl.string(k.t["Ql/e9Y"]),
            icon: (0, l.jsx)(c.CompassIcon, { size: "custom", color: "currentColor", height: 12, width: 12 }),
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
                null != e ? k.intl.formatToPlainString(k.t["VHLp+u"], { code: e }) : k.intl.string(k.t.vdu7oS),
            icon: (0, l.jsx)(x.A, { height: 12, width: 12 }),
            hasTooltip: !0,
        },
        [F.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL]: {
            type: F.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL,
            getJoinTypeLabel: () => k.intl.string(k.t["9/ZreX"]),
            icon: (0, l.jsx)(g.GameControllerIcon, { size: "custom", color: "currentColor", height: 12, width: 12 }),
            hasTooltip: !0,
        },
    };
function y(e) {
    let { guildId: t, inviterUser: n, joinSourceType: a, className: E, onClickInviter: o } = e,
        _ = (0, s.bG)([C.Ay], () => (null == n ? null : C.Ay.getMember(t, n.id)), [n, t]),
        c = (0, R.gn)(_?.guildId, _?.userId, _?.colorStrings ?? null),
        d = r.useCallback(
            (e) => {
                (e.stopPropagation(), e.preventDefault(), null != n && o?.(n));
            },
            [n, o],
        );
    return null == n
        ? null
        : (0, l.jsxs)("div", {
              className: i()(j.u6, E),
              children: [
                  (0, l.jsx)(u.E, {
                      variant: "text-xs/medium",
                      children: a !== F.UP.BOT ? k.intl.string(k.t.azhY2u) : k.intl.string(k.t["2ByN2n"]),
                  }),
                  (0, l.jsxs)(T.D, {
                      className: i()(j.kp, null != o && j.vk),
                      onClick: d,
                      tabIndex: null != o ? 0 : -1,
                      children: [
                          (0, l.jsx)(O.A, { user: n, size: I._3.SIZE_16 }),
                          (0, l.jsx)(u.E, {
                              variant: "text-xs/medium",
                              children: (0, l.jsx)(N.g, {
                                  name: f.Ay.getName(t, null, n),
                                  colorString: _?.colorString ?? null,
                                  colorStrings: c,
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
        className: i()(j.kp, n),
        children: (0, l.jsx)(u.E, {
            variant: "text-xs/medium",
            children: k.intl.format(k.t["2VQq2p"], { channelName: r ?? k.intl.string(k.t.zLZPmk) }),
        }),
    });
}
function V(e) {
    let { children: t, hasTooltip: n, guildId: a, inviterUser: i, joinSourceType: u, joinSourceChannelId: o } = e,
        _ = (0, s.bG)([h.A], () => h.A.getChannel(o)),
        c = !!n && (u === F.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL || null != i),
        d = r.useMemo(
            () =>
                u === F.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL
                    ? (0, l.jsx)(B, { channel: _ })
                    : (0, l.jsx)(y, { guildId: a, inviterUser: i, joinSourceType: u }),
            [u, a, i, _],
        );
    return c ? (0, l.jsx)(E.m, { __unsupportedReactNodeAsText: d, children: t }) : t;
}
function H(e) {
    let { type: t } = e,
        n = (0, F.eN)(t);
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
            joinSourceChannelId: o,
            showJoinMethodContextAsFooter: _,
            guildId: c,
            inviterUser: d,
            onClickInviter: A,
            ...g
        } = e,
        I = null != n ? b[n] : null,
        N = n === F.UP.INTEGRATION && null != E,
        G = (0, S.h)(a),
        O = (0, s.bG)([h.A], () => h.A.getChannel(o)),
        m = r.useCallback(
            (e) => {
                switch ((e.stopPropagation(), e.preventDefault(), !0)) {
                    case null == t && null == n:
                    case null == n:
                        return;
                    case n === F.UP.INVITE && null != t:
                        return void (0, P.Ld)(c, {
                            selectedSourceInviteCode: t?.trim() ?? void 0,
                            selectedJoinSourceType: n,
                        });
                    default:
                        return void (0, P.Ld)(c, {
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
            return (0, l.jsx)(v, { ...g });
        case null != E && N:
            return (0, l.jsxs)(T.D, {
                className: j.B$,
                ...g,
                "aria-label": (0, F.v8)(E),
                role: "button",
                tabIndex: 0,
                onClick: m,
                children: [
                    (0, l.jsx)(H, { type: E }),
                    (0, l.jsx)(u.E, { variant: "text-sm/medium", children: (0, F.v8)(E) }),
                ],
            });
        case n === F.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL && null != G:
            return (0, l.jsxs)("div", {
                className: i()(_ && j.TS),
                children: [
                    (0, l.jsxs)(T.D, {
                        className: j.SH,
                        ...g,
                        "aria-label": I?.getJoinTypeLabel(t ?? void 0),
                        role: "button",
                        tabIndex: 0,
                        onClick: m,
                        children: [
                            (0, l.jsx)(D.A, { game: G, size: D.M.XXSMALL }),
                            (0, l.jsx)(u.E, { variant: "text-sm/medium", className: j.YL, children: G.name }),
                        ],
                    }),
                    _ && (0, l.jsx)(B, { channel: O }),
                ],
            });
        case null != I:
            return (0, l.jsxs)("div", {
                className: i()(_ && j.TS),
                children: [
                    (0, l.jsxs)(T.D, {
                        className: j.B$,
                        ...g,
                        "aria-label": I?.getJoinTypeLabel(t ?? void 0),
                        role: "button",
                        tabIndex: 0,
                        onClick: m,
                        children: [
                            I?.icon,
                            (0, l.jsx)(u.E, { variant: "text-sm/medium", children: I?.getJoinTypeLabel(t ?? void 0) }),
                        ],
                    }),
                    _ &&
                        (0, l.jsx)(y, {
                            guildId: c,
                            inviterUser: d,
                            joinSourceType: n,
                            className: j.nz,
                            onClickInviter: A,
                        }),
                ],
            });
        default:
            return (0, l.jsx)(v, { ...g });
    }
}
let W = r.memo(function (e) {
    let { userId: t, guildId: n, showJoinMethodContextAsFooter: a, onClickInviter: i } = e,
        E = (0, s.bG)([p.A], () => p.A.getEnhancedMember(n, t), [n, t]),
        u = E?.inviterId ?? null,
        o = (0, s.bG)([U.default], () => U.default.getUser(u), [u]);
    r.useEffect(() => {
        null != u && (G.A.requestMembersById(n, [u]), (0, L.A)(u, void 0, { guildId: n }));
    }, [n, u]);
    let _ = (0, s.bG)([M.A], () => M.A.hideInstantInvites, []);
    if (null == E) return (0, l.jsx)(v, {});
    let {
            sourceInviteCode: c,
            joinSourceType: d,
            joinSourceChannelId: A,
            joinSourceApplicationId: g,
            integrationType: T,
        } = E,
        I = null != d ? b[d] : null,
        N = I?.hasTooltip ?? !1;
    return (d === F.UP.INVITE || d === F.UP.VANITY_URL || (d === F.UP.MANUAL_MEMBER_VERIFICATION && null != c)) && _
        ? (0, l.jsx)(X, {})
        : (0, l.jsx)(V, {
              hasTooltip: N && !a,
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
                  showJoinMethodContextAsFooter: a,
                  inviterUser: o ?? null,
                  guildId: n,
                  onClickInviter: i,
              }),
          });
});
