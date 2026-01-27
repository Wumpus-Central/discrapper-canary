n.d(t, {
    default: () => T,
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(397927),
    o = n(442433),
    u = n(847767),
    c = n(358367),
    s = n(212245),
    d = n(793574),
    A = n(688810),
    O = n(50268),
    b = n(346247),
    E = n(504049),
    g = n(696451),
    y = n(977997),
    f = n(291247),
    p = n(239211),
    _ = n(399476),
    m = n(301541),
    S = n(252726),
    M = n(103629),
    j = n(521819),
    I = n(243949),
    v = n(180798),
    h = n(652215),
    D = n(985018);
let T = (0, c.A)(
    (0, u.A)(
        function (e) {
            var t;
            let {
                    user: n,
                    guildId: u,
                    channelId: c,
                    context: h,
                    onSelect: T,
                    moderationAlertId: N,
                    analyticsLocation: C,
                    analyticsLocations: P,
                    onCloseContextMenu: R,
                    showTransferOwnershipItem: U,
                } = e,
                { analyticsLocations: L } = (0, A.Ay)(d.A.CONTEXT_MENU),
                w = (0, s.p)(),
                G = null != (t = null == P ? void 0 : P[0]) ? t : L[0],
                x = (0, E.$9)(u, {
                    location: G,
                    targetUserId: n.id,
                }),
                B = (0, i.bG)([y.A], () => {
                    var e;
                    return null != (e = y.A.getUserVoiceChannelId(u, n.id)) ? e : void 0;
                }, [u, n.id]),
                k = l.useCallback(() => {
                    x(E.Nj.COPY_ID);
                }, [x]),
                V = (0, i.bG)([g.Ay], () => g.Ay.isMember(u, n.id), [u, n.id]),
                W = (0, I.A)({
                    userId: n.id,
                    guildId: u,
                    sourceAnalyticsLocations: P,
                }),
                F = (0, m.A)(n.id, h),
                K = (0, b.A)({
                    guildId: u,
                    userId: n.id,
                    analyticsLocation: null != C ? C : w.location,
                    analyticsLocations: [G],
                    context: h,
                }),
                H = (0, p.A)({
                    user: n,
                    guildId: u,
                    location: G,
                    channelId: c,
                }),
                Y = (0, _.A)({
                    user: n,
                    guildId: u,
                    location: G,
                    channelId: c,
                }),
                X = (0, f.A)(n, u, null != c ? c : B, G),
                q = (0, M.A)(c, N),
                Q = (0, j.A)(n, u),
                Z = (0, v.A)(n.id, u, !1, G),
                $ = (0, O.A)({
                    id: n.id,
                    label: D.intl.string(D.t["/AXYnE"]),
                    onSuccess: k,
                }),
                z = (0, S.A)(n, u),
                J = !!(null == n ? void 0 : n.isNonUserBot());
            return (0, r.jsxs)(a.W1t, {
                "data-menu-migrated": !0,
                navId: "user-context",
                onClose: () => {
                    (0, o.Z_)(), null == R || R();
                },
                "aria-label": D.intl.string(D.t.liqwPJ),
                onSelect: T,
                children: [
                    !J &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)(a.rXV, {
                                    children: [W, F],
                                }),
                                (0, r.jsxs)(a.rXV, {
                                    children: [K, Y, H],
                                }),
                                V &&
                                    (0, r.jsxs)(a.rXV, {
                                        children: [Z, X, z],
                                    }),
                                null != N ? q : null,
                                U && null != Q
                                    ? (0, r.jsx)(a.rXV, {
                                          children: Q,
                                      })
                                    : null,
                            ],
                        }),
                    (0, r.jsx)(a.rXV, {
                        children: $,
                    }),
                ],
            });
        },
        {
            object: h.ZSU.CONTEXT_MENU,
        },
    ),
    [d.A.CONTEXT_MENU, d.A.GUILD_MODERATION_USER_MENU],
);
