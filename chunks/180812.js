n.d(t, { default: () => j });
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(442433),
    r = n(847767),
    d = n(358367),
    s = n(468389),
    o = n(793574),
    u = n(50268),
    c = n(222311),
    A = n(803664),
    g = n(29293),
    E = n(291247),
    _ = n(239211),
    m = n(707378),
    b = n(399476),
    f = n(889460),
    h = n(443439),
    M = n(198229),
    S = n(972432),
    I = n(77544),
    x = n(652215),
    C = n(985018);
function D(e) {
    let {
            user: t,
            guildId: n,
            channelId: r,
            mediaEngineContext: d,
            onSelect: o,
            onShowProfile: x,
            onWatchStream: D,
            appContext: T,
        } = e,
        j = (0, h.A)({
            onAction: () => {
                x?.();
            },
        }),
        v = (0, m.A)({ user: t, context: T }),
        p = (0, g.A)({ user: t, appContext: T }),
        O = (0, I.A)(t.id, D),
        U = (0, S.A)(t.id),
        N = (0, M.A)(t.id, d),
        L = (0, f.A)({ user: t }),
        y = (0, s.A)(null, t),
        V = (0, A.A)({ user: t, appContext: T }),
        G = (0, _.A)({ user: t, appContext: T }),
        R = (0, b.A)({ user: t, appContext: T }),
        B = (0, u.A)({ id: t.id, label: C.intl.string(C.t["/AXYnE"]) }),
        k = (0, c.A)(t),
        P = (0, E.A)(t, n, r),
        F = t.isNonUserBot();
    return (0, i.jsxs)(l.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "user-context",
        onClose: a.Z_,
        "aria-label": C.intl.string(C.t.liqwPJ),
        onSelect: o,
        children: [
            !F &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(l.rXV, { children: k }),
                        (0, i.jsxs)(l.rXV, { children: [j, v, p, O] }),
                        (0, i.jsx)(l.rXV, { children: U }),
                        (0, i.jsx)(l.rXV, { children: y }),
                        (0, i.jsxs)(l.rXV, { children: [N, L, V, R, G] }),
                        (0, i.jsx)(l.rXV, { children: P }),
                    ],
                }),
            (0, i.jsx)(l.rXV, { children: B }),
        ],
    });
}
function T(e) {
    let { user: t, mediaEngineContext: n, onSelect: r, onShowProfile: d, onWatchStream: o, appContext: E } = e,
        x = (0, h.A)({
            onAction: () => {
                d?.();
            },
        }),
        D = (0, m.A)({ user: t, context: E }),
        T = (0, g.A)({ user: t, appContext: E }),
        j = (0, I.A)(t.id, o),
        v = (0, S.A)(t.id),
        p = (0, M.A)(t.id, n),
        O = (0, f.A)({ user: t }),
        U = (0, s.A)(null, t),
        N = (0, A.A)({ user: t, appContext: E }),
        L = (0, _.A)({ user: t, appContext: E }),
        y = (0, b.A)({ user: t, appContext: E }),
        V = (0, u.A)({ id: t.id, label: C.intl.string(C.t["/AXYnE"]) }),
        G = (0, c.A)(t),
        R = t.isNonUserBot();
    return (0, i.jsxs)(l.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "user-context",
        onClose: a.Z_,
        "aria-label": C.intl.string(C.t.liqwPJ),
        onSelect: r,
        children: [
            !R &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(l.rXV, { children: G }),
                        (0, i.jsxs)(l.rXV, { children: [x, D, T, j] }),
                        (0, i.jsx)(l.rXV, { children: v }),
                        (0, i.jsx)(l.rXV, { children: U }),
                        (0, i.jsxs)(l.rXV, { children: [p, O, N, y, L] }),
                    ],
                }),
            (0, i.jsx)(l.rXV, { children: V }),
        ],
    });
}
let j = (0, d.A)(
    (0, r.A)(
        function (e) {
            let { guildId: t, channelId: n, ...l } = e;
            return null != t && null != n
                ? (0, i.jsx)(D, { ...l, guildId: t, channelId: n })
                : (0, i.jsx)(T, { ...l, guildId: t, channelId: n });
        },
        { object: x.ZSU.CONTEXT_MENU },
    ),
    [o.A.CONTEXT_MENU, o.A.USER_OVERLAY_CONTEXT_MENU],
);
