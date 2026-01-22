n.d(t, { default: () => I });
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
    b = n(50268),
    f = n(346247),
    O = n(504049),
    g = n(696451),
    y = n(977997),
    p = n(291247),
    E = n(239211),
    j = n(399476),
    m = n(301541),
    v = n(252726),
    _ = n(103629),
    h = n(521819),
    S = n(243949),
    M = n(180798),
    P = n(652215),
    C = n(985018);
let I = (0, c.A)(
    (0, u.A)(
        function (e) {
            var t;
            let {
                    user: n,
                    guildId: u,
                    channelId: c,
                    context: P,
                    onSelect: I,
                    moderationAlertId: D,
                    analyticsLocation: x,
                    analyticsLocations: T,
                    onCloseContextMenu: N,
                    showTransferOwnershipItem: w,
                } = e,
                { analyticsLocations: G } = (0, A.Ay)(d.A.CONTEXT_MENU),
                R = (0, s.p)(),
                U = null != (t = null == T ? void 0 : T[0]) ? t : G[0],
                B = (0, O.$9)(u, {
                    location: U,
                    targetUserId: n.id,
                }),
                L = (0, i.bG)([y.A], () => {
                    var e;
                    return null != (e = y.A.getUserVoiceChannelId(u, n.id)) ? e : void 0;
                }, [u, n.id]),
                k = l.useCallback(() => {
                    B(O.Nj.COPY_ID);
                }, [B]),
                V = (0, i.bG)([g.Ay], () => g.Ay.isMember(u, n.id), [u, n.id]),
                F = (0, S.A)({
                    userId: n.id,
                    guildId: u,
                    sourceAnalyticsLocations: T,
                }),
                H = (0, m.A)(n.id, P),
                Y = (0, f.A)({
                    guildId: u,
                    userId: n.id,
                    analyticsLocation: null != x ? x : R.location,
                    analyticsLocations: [U],
                    context: P,
                }),
                K = (0, E.A)({
                    user: n,
                    guildId: u,
                    location: U,
                    channelId: c,
                }),
                W = (0, j.A)({
                    user: n,
                    guildId: u,
                    location: U,
                    channelId: c,
                }),
                X = (0, p.A)(n, u, null != c ? c : L, U),
                Z = (0, _.A)(c, D),
                $ = (0, h.A)(n, u),
                q = (0, M.A)(n.id, u, !1, U),
                z = (0, b.A)({
                    id: n.id,
                    label: C.intl.string(C.t["/AXYnE"]),
                    onSuccess: k,
                }),
                Q = (0, v.A)(n, u),
                J = !!(null == n ? void 0 : n.isNonUserBot());
            return (0, r.jsxs)(a.W1t, {
                navId: "user-context",
                onClose: () => {
                    (0, o.Z_)(), null == N || N();
                },
                "aria-label": C.intl.string(C.t.liqwPJ),
                onSelect: I,
                children: [
                    !J &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)(a.rXV, {
                                    children: [F, H],
                                }),
                                (0, r.jsxs)(a.rXV, {
                                    children: [Y, W, K],
                                }),
                                V &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(a.rXV, { children: X }),
                                            (0, r.jsxs)(a.rXV, {
                                                children: [q, Q],
                                            }),
                                        ],
                                    }),
                                null != D ? Z : null,
                                w && null != $ ? (0, r.jsx)(a.rXV, { children: $ }) : null,
                            ],
                        }),
                    (0, r.jsx)(a.rXV, { children: z }),
                ],
            });
        },
        { object: P.ZSU.CONTEXT_MENU },
    ),
    [d.A.CONTEXT_MENU, d.A.GUILD_MODERATION_USER_MENU],
);
