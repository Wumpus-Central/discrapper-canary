e.d(r, { default: () => v });
var i = e(627968);
e(64700);
var l = e(980707),
    t = e(477782),
    s = e(442433),
    d = e(847767),
    c = e(358367),
    a = e(468389),
    A = e(793574),
    o = e(50268),
    u = e(844065),
    h = e(803664),
    j = e(29293),
    x = e(696582),
    X = e(239211),
    g = e(707378),
    E = e(399476),
    _ = e(889460),
    p = e(267102),
    b = e(652215),
    C = e(375708);
function N(n) {
    let { label: r, onAction: e } = n,
        l = (0, p.aL)();
    return (0, i.jsx)(t.Dr, {
        id: "user-profile-overlay",
        label: r ?? C.intl.string(C.t.LYju5J),
        action: () => {
            e?.(), l.dispatch(b.jej.POPOUT_CLOSE);
        },
    });
}
var U = e(198229),
    O = e(972432),
    T = e(77544);
function f(n) {
    let {
            user: r,
            guildId: e,
            channelId: d,
            mediaEngineContext: c,
            onSelect: A,
            onShowProfile: p,
            onWatchStream: b,
            appContext: f,
        } = n,
        m = N({
            onAction: () => {
                p?.();
            },
        }),
        v = (0, g.A)({ user: r, context: f }),
        I = (0, j.A)({ user: r, appContext: f }),
        S = (0, T.A)(r.id, b),
        k = (0, O.A)(r.id),
        w = (0, U.A)(r.id, c),
        L = (0, _.A)({ user: r }),
        P = (0, a.A)(null, r),
        Y = (0, h.A)({ user: r, appContext: f }),
        J = (0, X.A)({ user: r, appContext: f }),
        M = (0, E.A)({ user: r, appContext: f }),
        Z = (0, o.A)({ id: r.id, label: C.intl.string(C.t["/AXYnE"]) }),
        q = (0, u.A)(r),
        B = (0, x.A)(r, e, d),
        F = r.isNonUserBot();
    return (0, i.jsxs)(l.W, {
        "data-menu-migrated-auto": !0,
        navId: "user-context",
        onClose: s.Z_,
        "aria-label": C.intl.string(C.t.liqwPJ),
        onSelect: A,
        children: [
            !F &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(t.rX, { children: q }),
                        (0, i.jsxs)(t.rX, { children: [m, v, I, S] }),
                        (0, i.jsx)(t.rX, { children: k }),
                        (0, i.jsx)(t.rX, { children: P }),
                        (0, i.jsxs)(t.rX, { children: [w, L, Y, M, J] }),
                        (0, i.jsx)(t.rX, { children: B }),
                    ],
                }),
            (0, i.jsx)(t.rX, { children: Z }),
        ],
    });
}
function m(n) {
    let { user: r, mediaEngineContext: e, onSelect: d, onShowProfile: c, onWatchStream: A, appContext: x } = n,
        p = N({
            onAction: () => {
                c?.();
            },
        }),
        b = (0, g.A)({ user: r, context: x }),
        f = (0, j.A)({ user: r, appContext: x }),
        m = (0, T.A)(r.id, A),
        v = (0, O.A)(r.id),
        I = (0, U.A)(r.id, e),
        S = (0, _.A)({ user: r }),
        k = (0, a.A)(null, r),
        w = (0, h.A)({ user: r, appContext: x }),
        L = (0, X.A)({ user: r, appContext: x }),
        P = (0, E.A)({ user: r, appContext: x }),
        Y = (0, o.A)({ id: r.id, label: C.intl.string(C.t["/AXYnE"]) }),
        J = (0, u.A)(r),
        M = r.isNonUserBot();
    return (0, i.jsxs)(l.W, {
        "data-menu-migrated-auto": !0,
        navId: "user-context",
        onClose: s.Z_,
        "aria-label": C.intl.string(C.t.liqwPJ),
        onSelect: d,
        children: [
            !M &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(t.rX, { children: J }),
                        (0, i.jsxs)(t.rX, { children: [p, b, f, m] }),
                        (0, i.jsx)(t.rX, { children: v }),
                        (0, i.jsx)(t.rX, { children: k }),
                        (0, i.jsxs)(t.rX, { children: [I, S, w, P, L] }),
                    ],
                }),
            (0, i.jsx)(t.rX, { children: Y }),
        ],
    });
}
let v = (0, c.A)(
    (0, d.A)(
        function (n) {
            let { guildId: r, channelId: e, ...l } = n;
            return null != r && null != e
                ? (0, i.jsx)(f, { ...l, guildId: r, channelId: e })
                : (0, i.jsx)(m, { ...l, guildId: r, channelId: e });
        },
        { object: b.ZSU.CONTEXT_MENU },
    ),
    [A.A.CONTEXT_MENU, A.A.USER_OVERLAY_CONTEXT_MENU],
);
