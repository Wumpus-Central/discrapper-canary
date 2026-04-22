n.d(t, { default: () => y });
var i = n(627968);
n(64700);
var l = n(861672),
    a = n(477782),
    r = n(442433),
    d = n(847767),
    o = n(358367),
    s = n(468389),
    u = n(793574),
    c = n(465424),
    A = n(50268),
    g = n(222311),
    f = n(803664),
    E = n(29293),
    b = n(291247),
    x = n(239211),
    m = n(707378),
    C = n(399476),
    I = n(889460),
    h = n(443439),
    S = n(198229),
    v = n(972432),
    _ = n(77544),
    M = n(652215),
    D = n(985018);
function j(e) {
    let {
            user: t,
            guildId: n,
            channelId: d,
            mediaEngineContext: o,
            onSelect: u,
            onShowProfile: M,
            onWatchStream: j,
            appContext: N,
        } = e,
        y = (0, h.A)({
            onAction: () => {
                M?.();
            },
        }),
        p = (0, m.A)({ user: t, context: N }),
        G = (0, c.D)({ userId: t.id }),
        L = (0, E.A)({ user: t, appContext: N }),
        T = (0, _.A)(t.id, j),
        U = (0, v.A)(t.id),
        O = (0, S.A)(t.id, o),
        P = (0, I.A)({ user: t }),
        B = (0, s.A)(null, t),
        V = (0, f.A)({ user: t, appContext: N }),
        R = (0, x.A)({ user: t, appContext: N }),
        k = (0, C.A)({ user: t, appContext: N }),
        F = (0, A.A)({ id: t.id, label: D.intl.string(D.t["/AXYnE"]) }),
        w = (0, g.A)(t),
        K = (0, b.A)(t, n, d),
        X = t.isNonUserBot();
    return (0, i.jsxs)(l.W, {
        "data-menu-migrated-auto": !0,
        navId: "user-context",
        onClose: r.Z_,
        "aria-label": D.intl.string(D.t.liqwPJ),
        onSelect: u,
        children: [
            !X &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(a.rX, { children: w }),
                        (0, i.jsxs)(a.rX, { children: [y, G, p, L, T] }),
                        (0, i.jsx)(a.rX, { children: U }),
                        (0, i.jsx)(a.rX, { children: B }),
                        (0, i.jsxs)(a.rX, { children: [O, P, V, k, R] }),
                        (0, i.jsx)(a.rX, { children: K }),
                    ],
                }),
            (0, i.jsx)(a.rX, { children: F }),
        ],
    });
}
function N(e) {
    let { user: t, mediaEngineContext: n, onSelect: d, onShowProfile: o, onWatchStream: u, appContext: c } = e,
        b = (0, h.A)({
            onAction: () => {
                o?.();
            },
        }),
        M = (0, m.A)({ user: t, context: c }),
        j = (0, E.A)({ user: t, appContext: c }),
        N = (0, _.A)(t.id, u),
        y = (0, v.A)(t.id),
        p = (0, S.A)(t.id, n),
        G = (0, I.A)({ user: t }),
        L = (0, s.A)(null, t),
        T = (0, f.A)({ user: t, appContext: c }),
        U = (0, x.A)({ user: t, appContext: c }),
        O = (0, C.A)({ user: t, appContext: c }),
        P = (0, A.A)({ id: t.id, label: D.intl.string(D.t["/AXYnE"]) }),
        B = (0, g.A)(t),
        V = t.isNonUserBot();
    return (0, i.jsxs)(l.W, {
        "data-menu-migrated-auto": !0,
        navId: "user-context",
        onClose: r.Z_,
        "aria-label": D.intl.string(D.t.liqwPJ),
        onSelect: d,
        children: [
            !V &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(a.rX, { children: B }),
                        (0, i.jsxs)(a.rX, { children: [b, M, j, N] }),
                        (0, i.jsx)(a.rX, { children: y }),
                        (0, i.jsx)(a.rX, { children: L }),
                        (0, i.jsxs)(a.rX, { children: [p, G, T, O, U] }),
                    ],
                }),
            (0, i.jsx)(a.rX, { children: P }),
        ],
    });
}
let y = (0, o.A)(
    (0, d.A)(
        function (e) {
            let { guildId: t, channelId: n, ...l } = e;
            return null != t && null != n
                ? (0, i.jsx)(j, { ...l, guildId: t, channelId: n })
                : (0, i.jsx)(N, { ...l, guildId: t, channelId: n });
        },
        { object: M.ZSU.CONTEXT_MENU },
    ),
    [u.A.CONTEXT_MENU, u.A.USER_OVERLAY_CONTEXT_MENU],
);
