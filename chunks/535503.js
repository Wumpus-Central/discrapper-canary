r.d(i, { default: () => v });
var e = r(627968);
r(64700);
var t = r(980707),
    l = r(477782),
    s = r(442433),
    d = r(847767),
    c = r(358367),
    a = r(468389),
    A = r(793574),
    o = r(50268),
    u = r(844065),
    h = r(803664),
    j = r(29293),
    x = r(291247),
    X = r(239211),
    g = r(373397),
    E = r(399476),
    _ = r(889460),
    p = r(267102),
    b = r(652215),
    f = r(375708);
function C(n) {
    let { label: i, onAction: r } = n,
        t = (0, p.aL)();
    return (0, e.jsx)(l.Dr, {
        id: "user-profile-overlay",
        label: i ?? f.intl.string(f.t.LYju5J),
        action: () => {
            r?.(), t.dispatch(b.jej.POPOUT_CLOSE);
        },
    });
}
var N = r(198229),
    U = r(972432),
    O = r(77544);
function T(n) {
    let {
            user: i,
            guildId: r,
            channelId: d,
            mediaEngineContext: c,
            onSelect: A,
            onShowProfile: p,
            onWatchStream: b,
            appContext: T,
        } = n,
        m = C({
            onAction: function () {
                p?.();
            },
        }),
        v = (0, g.A)({ user: i, context: T }),
        I = (0, j.A)({ user: i, appContext: T }),
        S = (0, O.A)(i.id, b),
        k = (0, U.A)(i.id),
        w = (0, N.A)(i.id, c),
        L = (0, _.A)({ user: i }),
        P = (0, a.A)(null, i),
        Y = (0, h.A)({ user: i, appContext: T }),
        J = (0, X.A)({ user: i, appContext: T }),
        M = (0, E.A)({ user: i, appContext: T }),
        Z = (0, o.A)({ id: i.id, label: f.intl.string(f.t["/AXYnE"]) }),
        q = (0, u.A)(i),
        B = (0, x.A)(i, r, d),
        F = i.isNonUserBot();
    return (0, e.jsxs)(t.W, {
        "data-menu-migrated-auto": !0,
        navId: "user-context",
        onClose: s.Z_,
        "aria-label": f.intl.string(f.t.liqwPJ),
        onSelect: A,
        children: [
            !F &&
                (0, e.jsxs)(e.Fragment, {
                    children: [
                        (0, e.jsx)(l.rX, { children: q }),
                        (0, e.jsxs)(l.rX, { children: [m, v, I, S] }),
                        (0, e.jsx)(l.rX, { children: k }),
                        (0, e.jsx)(l.rX, { children: P }),
                        (0, e.jsxs)(l.rX, { children: [w, L, Y, M, J] }),
                        (0, e.jsx)(l.rX, { children: B }),
                    ],
                }),
            (0, e.jsx)(l.rX, { children: Z }),
        ],
    });
}
function m(n) {
    let { user: i, mediaEngineContext: r, onSelect: d, onShowProfile: c, onWatchStream: A, appContext: x } = n,
        p = C({
            onAction: function () {
                c?.();
            },
        }),
        b = (0, g.A)({ user: i, context: x }),
        T = (0, j.A)({ user: i, appContext: x }),
        m = (0, O.A)(i.id, A),
        v = (0, U.A)(i.id),
        I = (0, N.A)(i.id, r),
        S = (0, _.A)({ user: i }),
        k = (0, a.A)(null, i),
        w = (0, h.A)({ user: i, appContext: x }),
        L = (0, X.A)({ user: i, appContext: x }),
        P = (0, E.A)({ user: i, appContext: x }),
        Y = (0, o.A)({ id: i.id, label: f.intl.string(f.t["/AXYnE"]) }),
        J = (0, u.A)(i),
        M = i.isNonUserBot();
    return (0, e.jsxs)(t.W, {
        "data-menu-migrated-auto": !0,
        navId: "user-context",
        onClose: s.Z_,
        "aria-label": f.intl.string(f.t.liqwPJ),
        onSelect: d,
        children: [
            !M &&
                (0, e.jsxs)(e.Fragment, {
                    children: [
                        (0, e.jsx)(l.rX, { children: J }),
                        (0, e.jsxs)(l.rX, { children: [p, b, T, m] }),
                        (0, e.jsx)(l.rX, { children: v }),
                        (0, e.jsx)(l.rX, { children: k }),
                        (0, e.jsxs)(l.rX, { children: [I, S, w, P, L] }),
                    ],
                }),
            (0, e.jsx)(l.rX, { children: Y }),
        ],
    });
}
let v = (0, c.A)(
    (0, d.A)(
        function (n) {
            let { guildId: i, channelId: r, ...t } = n;
            return null != i && null != r
                ? (0, e.jsx)(T, { ...t, guildId: i, channelId: r })
                : (0, e.jsx)(m, { ...t, guildId: i, channelId: r });
        },
        { object: b.ZSU.CONTEXT_MENU },
    ),
    [A.A.CONTEXT_MENU, A.A.USER_OVERLAY_CONTEXT_MENU],
);
