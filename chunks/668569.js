e.d(i, { default: () => m });
var r = e(477900);
e(582128);
var s = e(980707),
    t = e(477782),
    d = e(442433),
    l = e(820284),
    c = e(468389),
    A = e(793574),
    a = e(688810),
    o = e(50268),
    h = e(844065),
    u = e(803664),
    x = e(29293),
    j = e(509302),
    E = e(497600),
    X = e(239211),
    p = e(373397),
    N = e(399476),
    _ = e(889460),
    C = e(301541),
    U = e(460597),
    b = e(198229),
    T = e(243949),
    f = e(972432),
    g = e(77544),
    k = e(652215),
    v = e(660183);
function I(n) {
    let {
            user: i,
            guildId: e,
            channelId: l,
            showMediaItems: A = !1,
            mediaEngineContext: a,
            onSelect: I,
            onInteraction: m,
            appContext: w = k.BRT.APP,
        } = n,
        M = (0, T.A)({ userId: i.id, guildId: e, channelId: l }),
        P = (0, C.A)(i.id, w),
        R = (0, p.A)({ user: i }),
        S = (0, E.A)({ user: i, guildId: e, channelId: l, context: w }),
        y = (0, x.A)({ user: i }),
        B = (0, g.A)(i.id),
        O = (0, f.A)(i.id),
        Z = (0, b.A)(i.id, a),
        q = (0, _.A)({ user: i }),
        F = (0, c.A)(null, i),
        G = (0, u.A)({ user: i }),
        J = (0, j.A)({ user: i }),
        L = (0, U.A)({ user: i }),
        W = (0, X.A)({ user: i }),
        Y = (0, N.A)({ user: i }),
        z = (0, o.A)({ id: i.id, label: v.intl.string(v.t["/AXYnE"]) }),
        D = (0, h.A)(i),
        H = i.isNonUserBot();
    return (0, r.jsxs)(s.W, {
        "data-menu-migrated": !0,
        navId: "user-context",
        onClose: d.Z_,
        "aria-label": v.intl.string(v.t.liqwPJ),
        onSelect: I,
        onInteraction: m,
        children: [
            !H &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(t.rX, { children: D }),
                        (0, r.jsxs)(t.rX, { children: [M, P, R, S, y, B] }),
                        A && (0, r.jsx)(t.rX, { children: O }),
                        (0, r.jsx)(t.rX, { children: F }),
                        (0, r.jsxs)(t.rX, { children: [A && Z, q, G, J, L, Y, W] }),
                    ],
                }),
            (0, r.jsx)(t.rX, { children: z }),
        ],
    });
}
function m(n) {
    let { analyticsLocations: i } = (0, a.Ay)(n.analyticsLocations ?? [], A.A.CONTEXT_MENU, A.A.USER_GENERIC_MENU);
    return (0, r.jsx)(a.f5, {
        value: i,
        children: (0, r.jsx)(l.A, { object: k.ZSU.CONTEXT_MENU, children: (0, r.jsx)(I, { ...n }) }),
    });
}
