n.d(t, { default: () => M });
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(442433),
    r = n(847767),
    d = n(358367),
    s = n(468389),
    o = n(793574),
    u = n(465424),
    c = n(50268),
    A = n(222311),
    g = n(803664),
    m = n(29293),
    b = n(291247),
    f = n(239211),
    x = n(707378),
    h = n(399476),
    E = n(889460),
    j = n(443439),
    C = n(198229),
    I = n(972432),
    S = n(77544),
    v = n(652215),
    p = n(985018);
function _(e) {
    let {
            user: t,
            guildId: n,
            channelId: r,
            mediaEngineContext: d,
            onSelect: o,
            onShowProfile: v,
            onWatchStream: _,
            appContext: D,
        } = e,
        M = (0, j.A)({
            onAction: () => {
                v?.();
            },
        }),
        y = (0, x.A)({ user: t, context: D }),
        T = (0, u.D)({ userId: t.id }),
        V = (0, m.A)({ user: t, appContext: D }),
        N = (0, S.A)(t.id, _),
        U = (0, I.A)(t.id),
        L = (0, C.A)(t.id, d),
        G = (0, E.A)({ user: t }),
        O = (0, s.A)(null, t),
        B = (0, g.A)({ user: t, appContext: D }),
        k = (0, f.A)({ user: t, appContext: D }),
        P = (0, h.A)({ user: t, appContext: D }),
        R = (0, c.A)({ id: t.id, label: p.intl.string(p.t["/AXYnE"]) }),
        w = (0, A.A)(t),
        F = (0, b.A)(t, n, r),
        X = t.isNonUserBot();
    return (0, i.jsxs)(l.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "user-context",
        onClose: a.Z_,
        "aria-label": p.intl.string(p.t.liqwPJ),
        onSelect: o,
        children: [
            !X &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(l.rXV, { children: w }),
                        (0, i.jsxs)(l.rXV, { children: [M, T, y, V, N] }),
                        (0, i.jsx)(l.rXV, { children: U }),
                        (0, i.jsx)(l.rXV, { children: O }),
                        (0, i.jsxs)(l.rXV, { children: [L, G, B, P, k] }),
                        (0, i.jsx)(l.rXV, { children: F }),
                    ],
                }),
            (0, i.jsx)(l.rXV, { children: R }),
        ],
    });
}
function D(e) {
    let { user: t, mediaEngineContext: n, onSelect: r, onShowProfile: d, onWatchStream: o, appContext: u } = e,
        b = (0, j.A)({
            onAction: () => {
                d?.();
            },
        }),
        v = (0, x.A)({ user: t, context: u }),
        _ = (0, m.A)({ user: t, appContext: u }),
        D = (0, S.A)(t.id, o),
        M = (0, I.A)(t.id),
        y = (0, C.A)(t.id, n),
        T = (0, E.A)({ user: t }),
        V = (0, s.A)(null, t),
        N = (0, g.A)({ user: t, appContext: u }),
        U = (0, f.A)({ user: t, appContext: u }),
        L = (0, h.A)({ user: t, appContext: u }),
        G = (0, c.A)({ id: t.id, label: p.intl.string(p.t["/AXYnE"]) }),
        O = (0, A.A)(t),
        B = t.isNonUserBot();
    return (0, i.jsxs)(l.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "user-context",
        onClose: a.Z_,
        "aria-label": p.intl.string(p.t.liqwPJ),
        onSelect: r,
        children: [
            !B &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(l.rXV, { children: O }),
                        (0, i.jsxs)(l.rXV, { children: [b, v, _, D] }),
                        (0, i.jsx)(l.rXV, { children: M }),
                        (0, i.jsx)(l.rXV, { children: V }),
                        (0, i.jsxs)(l.rXV, { children: [y, T, N, L, U] }),
                    ],
                }),
            (0, i.jsx)(l.rXV, { children: G }),
        ],
    });
}
let M = (0, d.A)(
    (0, r.A)(
        function (e) {
            let { guildId: t, channelId: n, ...l } = e;
            return null != t && null != n
                ? (0, i.jsx)(_, { ...l, guildId: t, channelId: n })
                : (0, i.jsx)(D, { ...l, guildId: t, channelId: n });
        },
        { object: v.ZSU.CONTEXT_MENU },
    ),
    [o.A.CONTEXT_MENU, o.A.USER_OVERLAY_CONTEXT_MENU],
);
