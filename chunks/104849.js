n.d(t, { default: () => L });
var l = n(627968),
    i = n(64700),
    r = n(311907),
    a = n(861672),
    o = n(477782),
    d = n(442433),
    u = n(847767),
    s = n(358367),
    c = n(212245),
    A = n(793574),
    E = n(688810),
    _ = n(50268),
    g = n(346247),
    I = n(504049),
    S = n(696451),
    f = n(977997),
    M = n(291247),
    y = n(239211),
    O = n(399476),
    N = n(301541),
    h = n(252726),
    R = n(103629),
    p = n(521819),
    m = n(243949),
    T = n(180798),
    b = n(652215),
    U = n(985018);
let L = (0, s.A)(
    (0, u.A)(
        function (e) {
            let {
                    user: t,
                    guildId: n,
                    channelId: u,
                    context: s,
                    onSelect: b,
                    moderationAlertId: L,
                    analyticsLocation: C,
                    analyticsLocations: G,
                    onCloseContextMenu: D,
                    showTransferOwnershipItem: v,
                } = e,
                { analyticsLocations: x } = (0, E.Ay)(A.A.CONTEXT_MENU),
                P = (0, c.p)(),
                B = G?.[0] ?? x[0],
                j = (0, I.$9)(n, { location: B, targetUserId: t.id }),
                w = (0, r.bG)([f.A], () => f.A.getUserVoiceChannelId(n, t.id) ?? void 0, [n, t.id]),
                F = i.useCallback(() => {
                    j(I.Nj.COPY_ID);
                }, [j]),
                k = (0, r.bG)([S.Ay], () => S.Ay.isMember(n, t.id), [n, t.id]),
                V = (0, m.A)({ userId: t.id, guildId: n, sourceAnalyticsLocations: G }),
                K = (0, N.A)(t.id, s),
                W = (0, g.A)({
                    guildId: n,
                    userId: t.id,
                    analyticsLocation: C ?? P.location,
                    analyticsLocations: [B],
                    context: s,
                }),
                H = (0, y.A)({ user: t, guildId: n, location: B, channelId: u }),
                Y = (0, O.A)({ user: t, guildId: n, location: B, channelId: u }),
                z = (0, M.A)(t, n, u ?? w, B),
                X = (0, R.A)(u, L),
                q = (0, p.A)(t, n),
                J = (0, T.A)(t.id, n, !1, B),
                Q = (0, _.A)({ id: t.id, label: U.intl.string(U.t["/AXYnE"]), onSuccess: F }),
                Z = (0, h.A)(t, n),
                $ = !!t?.isNonUserBot();
            return (0, l.jsxs)(a.W, {
                "data-menu-migrated": !0,
                navId: "user-context",
                onClose: () => {
                    (0, d.Z_)(), D?.();
                },
                "aria-label": U.intl.string(U.t.liqwPJ),
                onSelect: b,
                children: [
                    !$ &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)(o.rX, { children: [V, K] }),
                                (0, l.jsxs)(o.rX, { children: [W, Y, H] }),
                                k && (0, l.jsxs)(o.rX, { children: [J, z, Z] }),
                                null != L ? X : null,
                                v && null != q ? (0, l.jsx)(o.rX, { children: q }) : null,
                            ],
                        }),
                    (0, l.jsx)(o.rX, { children: Q }),
                ],
            });
        },
        { object: b.ZSU.CONTEXT_MENU },
    ),
    [A.A.CONTEXT_MENU, A.A.GUILD_MODERATION_USER_MENU],
);
