n.d(t, { Ay: () => j });
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(311907),
    o = n(990078),
    E = n(397927),
    u = n(686956),
    c = n(966327),
    _ = n(429913),
    d = n(47167),
    g = n(769015),
    A = n(967144),
    T = n(576622),
    I = n(734057),
    N = n(696451),
    h = n(351906),
    m = n(287809),
    S = n(509402),
    G = n(562153),
    O = n(266047),
    C = n(221950),
    R = n(11541),
    L = n(985018),
    D = n(745483);
let f = r.memo(function () {
        return (0, l.jsx)(o.m, {
            "data-pending-richtooltip-migration": !0,
            text: L.intl.string(L.t["vu/MiQ"]),
            children: (0, l.jsx)(E.Text, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: D.IV,
                children: L.intl.string(L.t.yobFdm),
            }),
        });
    }),
    x = r.memo(function () {
        return (0, l.jsx)(o.m, {
            text: L.intl.string(L.t.OrCp9h),
            children: (0, l.jsx)(E.Text, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: D.IV,
                children: L.intl.string(L.t["4upToT"]),
            }),
        });
    }),
    M = {
        [R.UP.UNSPECIFIED]: {
            type: R.UP.UNSPECIFIED,
            getJoinTypeLabel: () => L.intl.string(L.t.DvMBkS),
            icon: null,
            hasTooltip: !1,
        },
        [R.UP.BOT]: {
            type: R.UP.BOT,
            getJoinTypeLabel: () => L.intl.string(L.t.HumZAi),
            icon: (0, l.jsx)(E.CnV, { size: "custom", color: "currentColor", className: D.XY, height: 12, width: 12 }),
            hasTooltip: !0,
        },
        [R.UP.INTEGRATION]: {
            type: R.UP.INTEGRATION,
            getJoinTypeLabel: () => L.intl.string(L.t.gmCUFw),
            icon: (0, l.jsx)(E.XC7, { size: "custom", color: "currentColor", height: 12, width: 12 }),
            hasTooltip: !1,
        },
        [R.UP.DISCOVERY]: {
            type: R.UP.DISCOVERY,
            getJoinTypeLabel: () => L.intl.string(L.t["Ql/e9Y"]),
            icon: (0, l.jsx)(E.QGJ, { size: "custom", color: "currentColor", height: 12, width: 12 }),
            hasTooltip: !1,
        },
        [R.UP.HUB]: {
            type: R.UP.HUB,
            getJoinTypeLabel: () => L.intl.string(L.t.Op8B3O),
            icon: (0, l.jsx)(E.Pfh, { size: "custom", color: "currentColor", height: 12, width: 12 }),
            hasTooltip: !1,
        },
        [R.UP.INVITE]: {
            type: R.UP.INVITE,
            getJoinTypeLabel: (e) => e,
            icon: (0, l.jsx)(E.qYV, { size: "custom", color: "currentColor", height: 12, width: 12 }),
            hasTooltip: !0,
        },
        [R.UP.VANITY_URL]: {
            type: R.UP.VANITY_URL,
            getJoinTypeLabel: (e) => e,
            icon: (0, l.jsx)(E.qYV, { size: "custom", color: "currentColor", height: 12, width: 12 }),
            hasTooltip: !1,
        },
        [R.UP.MANUAL_MEMBER_VERIFICATION]: {
            type: R.UP.MANUAL_MEMBER_VERIFICATION,
            getJoinTypeLabel: (e) =>
                null != e ? L.intl.formatToPlainString(L.t["VHLp+u"], { code: e }) : L.intl.string(L.t.vdu7oS),
            icon: (0, l.jsx)(S.A, { height: 12, width: 12 }),
            hasTooltip: !0,
        },
        [R.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL]: {
            type: R.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL,
            getJoinTypeLabel: () => L.intl.string(L.t["9/ZreX"]),
            icon: (0, l.jsx)(E._xR, { size: "custom", color: "currentColor", height: 12, width: 12 }),
            hasTooltip: !0,
        },
    };
function p(e) {
    let { guildId: t, inviterUser: n, joinSourceType: a, className: o, onClickInviter: u } = e,
        _ = (0, s.bG)([N.Ay], () => (null == n ? null : N.Ay.getMember(t, n.id)), [n, t]),
        d = (0, A.gn)(_?.guildId, _?.userId, _?.colorStrings ?? null),
        g = r.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), null != n && u?.(n);
            },
            [n, u],
        );
    return null == n
        ? null
        : (0, l.jsxs)("div", {
              className: i()(D.u6, o),
              children: [
                  (0, l.jsx)(E.Text, {
                      variant: "text-xs/medium",
                      children: a !== R.UP.BOT ? L.intl.string(L.t.azhY2u) : L.intl.string(L.t["2ByN2n"]),
                  }),
                  (0, l.jsxs)(E.DUT, {
                      className: i()(D.kp, null != u && D.vk),
                      onClick: g,
                      children: [
                          (0, l.jsx)(c.A, { user: n, size: E._3J.SIZE_16 }),
                          (0, l.jsx)(E.Text, {
                              variant: "text-xs/medium",
                              children: (0, l.jsx)(E.gyj, {
                                  name: G.Ay.getName(t, null, n),
                                  colorString: _?.colorString ?? null,
                                  colorStrings: d,
                              }),
                          }),
                      ],
                  }),
              ],
          });
}
function U(e) {
    let { channel: t, className: n } = e,
        r = (0, d.Ay)(t, !0);
    return (0, l.jsx)("div", {
        className: i()(D.kp, n),
        children: (0, l.jsx)(E.Text, {
            variant: "text-xs/medium",
            children: L.intl.format(L.t["2VQq2p"], { channelName: r ?? L.intl.string(L.t.zLZPmk) }),
        }),
    });
}
function k(e) {
    let { children: t, hasTooltip: n, guildId: a, inviterUser: i, joinSourceType: E, joinSourceChannelId: u } = e,
        c = (0, s.bG)([I.A], () => I.A.getChannel(u)),
        _ = (0, d.Ay)(c, !0),
        g = !!n && (E === R.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL || null != i),
        A = r.useMemo(
            () =>
                E === R.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL
                    ? (0, l.jsx)(U, { channel: c })
                    : (0, l.jsx)(p, { guildId: a, inviterUser: i, joinSourceType: E }),
            [E, a, i, c],
        );
    if (!g) return t;
    let T =
        E === R.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL
            ? L.intl.formatToPlainString(L.t["2VQq2p"], { channelName: _ ?? L.intl.string(L.t.zLZPmk) })
            : E === R.UP.BOT
              ? L.intl.string(L.t["2ByN2n"])
              : L.intl.string(L.t.azhY2u);
    return (0, l.jsx)(o.m, { "aria-label": T, __unsupportedReactNodeAsText: A, children: t });
}
function b(e) {
    let { type: t } = e,
        n = (0, R.eN)(t);
    return null == n
        ? null
        : (0, l.jsx)("div", { className: D.c5, style: { width: 12, height: 12, backgroundImage: n } });
}
function F(e) {
    let {
            sourceInviteCode: t,
            joinSourceType: n,
            joinSourceApplicationId: a,
            integrationType: o,
            joinSourceChannelId: u,
            showJoinMethodContextAsFooter: c,
            guildId: d,
            inviterUser: A,
            onClickInviter: T,
            ...N
        } = e,
        h = null != n ? M[n] : null,
        m = n === R.UP.INTEGRATION && null != o,
        S = (0, _.h)(a),
        G = (0, s.bG)([I.A], () => I.A.getChannel(u)),
        O = r.useCallback(
            (e) => {
                switch ((e.stopPropagation(), e.preventDefault(), !0)) {
                    case null == t && null == n:
                    case null == n:
                        return;
                    case n === R.UP.INVITE && null != t:
                        return void (0, C.Ld)(d, {
                            selectedSourceInviteCode: t?.trim() ?? void 0,
                            selectedJoinSourceType: n,
                        });
                    default:
                        return void (0, C.Ld)(d, {
                            selectedSourceInviteCode: null,
                            selectedJoinSourceType: n ?? void 0,
                        });
                }
            },
            [d, n, t],
        );
    switch (!0) {
        case null == h:
        case null == n:
        case n === R.UP.UNSPECIFIED:
            return (0, l.jsx)(f, { ...N });
        case null != o && m:
            return (0, l.jsxs)(E.DUT, {
                className: D.B$,
                ...N,
                "aria-label": (0, R.v8)(o),
                role: "button",
                tabIndex: 0,
                onClick: O,
                children: [
                    (0, l.jsx)(b, { type: o }),
                    (0, l.jsx)(E.Text, { variant: "text-sm/medium", children: (0, R.v8)(o) }),
                ],
            });
        case n === R.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL && null != S:
            return (0, l.jsxs)("div", {
                className: i()(c && D.TS),
                children: [
                    (0, l.jsxs)(E.DUT, {
                        className: D.SH,
                        ...N,
                        "aria-label": h?.getJoinTypeLabel(t ?? void 0),
                        role: "button",
                        tabIndex: 0,
                        onClick: O,
                        children: [
                            (0, l.jsx)(g.A, { game: S, size: g.M.XXSMALL }),
                            (0, l.jsx)(E.Text, { variant: "text-sm/medium", className: D.YL, children: S.name }),
                        ],
                    }),
                    c && (0, l.jsx)(U, { channel: G }),
                ],
            });
        case null != h:
            return (0, l.jsxs)("div", {
                className: i()(c && D.TS),
                children: [
                    (0, l.jsxs)(E.DUT, {
                        className: D.B$,
                        ...N,
                        "aria-label": h?.getJoinTypeLabel(t ?? void 0),
                        role: "button",
                        tabIndex: 0,
                        onClick: O,
                        children: [
                            h?.icon,
                            (0, l.jsx)(E.Text, {
                                variant: "text-sm/medium",
                                children: h?.getJoinTypeLabel(t ?? void 0),
                            }),
                        ],
                    }),
                    c &&
                        (0, l.jsx)(p, {
                            guildId: d,
                            inviterUser: A,
                            joinSourceType: n,
                            className: D.nz,
                            onClickInviter: T,
                        }),
                ],
            });
        default:
            return (0, l.jsx)(f, { ...N });
    }
}
let j = r.memo(function (e) {
    let { userId: t, guildId: n, showJoinMethodContextAsFooter: a, onClickInviter: i } = e,
        o = (0, s.bG)([O.A], () => O.A.getEnhancedMember(n, t), [n, t]),
        E = o?.inviterId ?? null,
        c = (0, s.bG)([m.default], () => m.default.getUser(E), [E]);
    r.useEffect(() => {
        null != E && (u.A.requestMembersById(n, [E]), (0, T.A)(E, void 0, { guildId: n }));
    }, [n, E]);
    let _ = (0, s.bG)([h.A], () => h.A.hideInstantInvites, []);
    if (null == o) return (0, l.jsx)(f, {});
    let {
            sourceInviteCode: d,
            joinSourceType: g,
            joinSourceChannelId: A,
            joinSourceApplicationId: I,
            integrationType: N,
        } = o,
        S = null != g ? M[g] : null,
        G = S?.hasTooltip ?? !1;
    return (g === R.UP.INVITE || g === R.UP.VANITY_URL || (g === R.UP.MANUAL_MEMBER_VERIFICATION && null != d)) && _
        ? (0, l.jsx)(x, {})
        : (0, l.jsx)(k, {
              hasTooltip: G && !a,
              inviterUser: c ?? null,
              guildId: n,
              joinSourceType: g,
              joinSourceChannelId: A,
              children: (0, l.jsx)(F, {
                  sourceInviteCode: d,
                  joinSourceType: g,
                  joinSourceApplicationId: I,
                  joinSourceChannelId: A,
                  integrationType: N,
                  showJoinMethodContextAsFooter: a,
                  inviterUser: c ?? null,
                  guildId: n,
                  onClickInviter: i,
              }),
          });
});
