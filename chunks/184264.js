"use strict";
n.d(t, { A: () => I });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(942381),
    l = n(311907),
    u = n(3203),
    c = n(990078),
    d = n(151271),
    _ = n(617617),
    f = n(234320),
    p = n(545428),
    h = n(652215),
    m = n(698279),
    g = n(985018),
    E = n(111314);
function A(e, t) {
    let { disabled: n, type: a, channel: A } = e,
        [I, T] = i.useState(!1),
        y = (0, l.bG)(
            [_.A],
            () => I && Object.values(_.A.frecencyWithoutFetchingLatest.favoriteGifs?.gifs ?? {}).length <= 2,
        ),
        [S, v, C, b] = (0, d.RQ)((e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], o.x),
        N = i.useRef(0),
        R = i.useCallback(() => {
            T(!0),
                clearTimeout(N.current),
                (N.current = setTimeout(() => {
                    T(!1), (N.current = 0);
                }, 2e3));
        }, []);
    (0, f.Vo)({ event: h.jej.FAVORITE_GIF, handler: R });
    let O = i.useCallback(() => {
            (0, d.r$)(m.kx.GIF, a, A.id);
        }, [a, A.id]),
        { Component: D, events: L, play: w } = (0, u.V)();
    if (n) return null;
    let x = S === m.kx.GIF && v === a && b === A.id;
    return (0, r.jsx)(c.m, {
        text: g.intl.string(y ? g.t.mE2e8A : g.t.nffuyb),
        shouldShow: y,
        forceOpen: y,
        children: (0, r.jsx)("div", {
            ref: t,
            className: s()(m.VQ, E.UD),
            children: (0, r.jsx)(p.A, {
                className: E.x6,
                onMouseEnter: L.onMouseEnter,
                onMouseLeave: L.onMouseLeave,
                onClick: () => {
                    O(), w();
                },
                isActive: x,
                pulse: I,
                "aria-label": g.intl.string(g.t.PtVpk2),
                "aria-expanded": x,
                "aria-haspopup": "dialog",
                "aria-controls": C,
                children: (0, r.jsx)(D, { size: "refresh_sm", color: "currentColor" }),
            }),
        }),
    });
}
let I = i.memo(i.forwardRef(A));
