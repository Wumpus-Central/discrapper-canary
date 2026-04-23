n.d(t, { default: () => p });
var i = n(627968);
n(64700);
var l = n(550079),
    a = n(477782),
    r = n(442433),
    d = n(847767),
    o = n(358367),
    s = n(468389),
    u = n(793574),
    c = n(823104),
    A = n(50268),
    g = n(844065),
    f = n(803664),
    E = n(29293),
    b = n(696582),
    x = n(239211),
    m = n(707378),
    C = n(399476),
    I = n(889460),
    h = n(267102),
    S = n(652215),
    v = n(985018);
function _(e) {
    let { label: t, onAction: n } = e,
        l = (0, h.aL)();
    return (0, i.jsx)(a.Dr, {
        id: "user-profile-overlay",
        label: t ?? v.intl.string(v.t.LYju5J),
        action: () => {
            n?.(), l.dispatch(S.jej.POPOUT_CLOSE);
        },
    });
}
var M = n(198229),
    D = n(972432),
    N = n(77544);
function j(e) {
    let {
            user: t,
            guildId: n,
            channelId: d,
            mediaEngineContext: o,
            onSelect: u,
            onShowProfile: h,
            onWatchStream: S,
            appContext: j,
        } = e,
        y = _({
            onAction: () => {
                h?.();
            },
        }),
        p = (0, m.A)({ user: t, context: j }),
        G = (0, c.D)({ userId: t.id }),
        L = (0, E.A)({ user: t, appContext: j }),
        T = (0, N.A)(t.id, S),
        U = (0, D.A)(t.id),
        O = (0, M.A)(t.id, o),
        P = (0, I.A)({ user: t }),
        B = (0, s.A)(null, t),
        V = (0, f.A)({ user: t, appContext: j }),
        R = (0, x.A)({ user: t, appContext: j }),
        k = (0, C.A)({ user: t, appContext: j }),
        F = (0, A.A)({ id: t.id, label: v.intl.string(v.t["/AXYnE"]) }),
        w = (0, g.A)(t),
        K = (0, b.A)(t, n, d),
        X = t.isNonUserBot();
    return (0, i.jsxs)(l.W, {
        "data-menu-migrated-auto": !0,
        navId: "user-context",
        onClose: r.Z_,
        "aria-label": v.intl.string(v.t.liqwPJ),
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
function y(e) {
    let { user: t, mediaEngineContext: n, onSelect: d, onShowProfile: o, onWatchStream: u, appContext: c } = e,
        b = _({
            onAction: () => {
                o?.();
            },
        }),
        h = (0, m.A)({ user: t, context: c }),
        S = (0, E.A)({ user: t, appContext: c }),
        j = (0, N.A)(t.id, u),
        y = (0, D.A)(t.id),
        p = (0, M.A)(t.id, n),
        G = (0, I.A)({ user: t }),
        L = (0, s.A)(null, t),
        T = (0, f.A)({ user: t, appContext: c }),
        U = (0, x.A)({ user: t, appContext: c }),
        O = (0, C.A)({ user: t, appContext: c }),
        P = (0, A.A)({ id: t.id, label: v.intl.string(v.t["/AXYnE"]) }),
        B = (0, g.A)(t),
        V = t.isNonUserBot();
    return (0, i.jsxs)(l.W, {
        "data-menu-migrated-auto": !0,
        navId: "user-context",
        onClose: r.Z_,
        "aria-label": v.intl.string(v.t.liqwPJ),
        onSelect: d,
        children: [
            !V &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(a.rX, { children: B }),
                        (0, i.jsxs)(a.rX, { children: [b, h, S, j] }),
                        (0, i.jsx)(a.rX, { children: y }),
                        (0, i.jsx)(a.rX, { children: L }),
                        (0, i.jsxs)(a.rX, { children: [p, G, T, O, U] }),
                    ],
                }),
            (0, i.jsx)(a.rX, { children: P }),
        ],
    });
}
let p = (0, o.A)(
    (0, d.A)(
        function (e) {
            let { guildId: t, channelId: n, ...l } = e;
            return null != t && null != n
                ? (0, i.jsx)(j, { ...l, guildId: t, channelId: n })
                : (0, i.jsx)(y, { ...l, guildId: t, channelId: n });
        },
        { object: S.ZSU.CONTEXT_MENU },
    ),
    [u.A.CONTEXT_MENU, u.A.USER_OVERLAY_CONTEXT_MENU],
);
