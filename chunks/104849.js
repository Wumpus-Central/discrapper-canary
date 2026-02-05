n.d(t, { default: () => R });
var l = n(627968),
    i = n(64700),
    a = n(311907),
    r = n(397927),
    d = n(442433),
    o = n(847767),
    u = n(358367),
    s = n(212245),
    c = n(793574),
    A = n(688810),
    E = n(50268),
    _ = n(346247),
    g = n(504049),
    M = n(696451),
    O = n(977997),
    I = n(291247),
    S = n(239211),
    m = n(399476),
    T = n(301541),
    y = n(252726),
    N = n(103629),
    C = n(521819),
    f = n(243949),
    p = n(180798),
    b = n(652215),
    D = n(985018);
let R = (0, u.A)(
    (0, o.A)(
        function (e) {
            let {
                    user: t,
                    guildId: n,
                    channelId: o,
                    context: u,
                    onSelect: b,
                    moderationAlertId: R,
                    analyticsLocation: h,
                    analyticsLocations: U,
                    onCloseContextMenu: L,
                    showTransferOwnershipItem: G,
                } = e,
                { analyticsLocations: x } = (0, A.Ay)(c.A.CONTEXT_MENU),
                j = (0, s.p)(),
                v = U?.[0] ?? x[0],
                B = (0, g.$9)(n, { location: v, targetUserId: t.id }),
                P = (0, a.bG)([O.A], () => O.A.getUserVoiceChannelId(n, t.id) ?? void 0, [n, t.id]),
                w = i.useCallback(() => {
                    B(g.Nj.COPY_ID);
                }, [B]),
                V = (0, a.bG)([M.Ay], () => M.Ay.isMember(n, t.id), [n, t.id]),
                k = (0, f.A)({ userId: t.id, guildId: n, sourceAnalyticsLocations: U }),
                W = (0, T.A)(t.id, u),
                F = (0, _.A)({
                    guildId: n,
                    userId: t.id,
                    analyticsLocation: h ?? j.location,
                    analyticsLocations: [v],
                    context: u,
                }),
                K = (0, S.A)({ user: t, guildId: n, location: v, channelId: o }),
                H = (0, m.A)({ user: t, guildId: n, location: v, channelId: o }),
                Y = (0, I.A)(t, n, o ?? P, v),
                X = (0, N.A)(o, R),
                q = (0, C.A)(t, n),
                Q = (0, p.A)(t.id, n, !1, v),
                Z = (0, E.A)({ id: t.id, label: D.intl.string(D.t["/AXYnE"]), onSuccess: w }),
                $ = (0, y.A)(t, n),
                z = !!t?.isNonUserBot();
            return (0, l.jsxs)(r.W1t, {
                "data-menu-migrated": !0,
                navId: "user-context",
                onClose: () => {
                    (0, d.Z_)(), L?.();
                },
                "aria-label": D.intl.string(D.t.liqwPJ),
                onSelect: b,
                children: [
                    !z &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)(r.rXV, { children: [k, W] }),
                                (0, l.jsxs)(r.rXV, { children: [F, H, K] }),
                                V && (0, l.jsxs)(r.rXV, { children: [Q, Y, $] }),
                                null != R ? X : null,
                                G && null != q ? (0, l.jsx)(r.rXV, { children: q }) : null,
                            ],
                        }),
                    (0, l.jsx)(r.rXV, { children: Z }),
                ],
            });
        },
        { object: b.ZSU.CONTEXT_MENU },
    ),
    [c.A.CONTEXT_MENU, c.A.GUILD_MODERATION_USER_MENU],
);
