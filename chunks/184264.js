"use strict";
n.d(t, { A: () => I });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
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
    E = n(985018),
    g = n(111314);
function A(e, t) {
    let { disabled: n, type: s, channel: A } = e,
        [I, T] = i.useState(!1),
        S = (0, l.bG)(
            [_.A],
            () => I && Object.values(_.A.frecencyWithoutFetchingLatest.favoriteGifs?.gifs ?? {}).length <= 2,
        ),
        [y, v, N, C] = (0, d.RQ)((e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], o.x),
        b = i.useRef(0),
        R = i.useCallback(() => {
            T(!0),
                clearTimeout(b.current),
                (b.current = setTimeout(() => {
                    T(!1), (b.current = 0);
                }, 2e3));
        }, []);
    (0, f.Vo)({ event: h.jej.FAVORITE_GIF, handler: R });
    let O = i.useCallback(() => {
            (0, d.r$)(m.kx.GIF, s, A.id);
        }, [s, A.id]),
        { Component: D, events: L, play: w } = (0, u.V)();
    if (n) return null;
    let x = y === m.kx.GIF && v === s && C === A.id;
    return (0, r.jsx)(c.m, {
        text: E.intl.string(S ? E.t.mE2e8A : E.t.nffuyb),
        shouldShow: S,
        forceOpen: S,
        children: (0, r.jsx)("div", {
            ref: t,
            className: a()(m.VQ, g.UD),
            children: (0, r.jsx)(p.A, {
                className: g.x6,
                onMouseEnter: L.onMouseEnter,
                onMouseLeave: L.onMouseLeave,
                onClick: () => {
                    O(), w();
                },
                isActive: x,
                pulse: I,
                "aria-label": E.intl.string(E.t.PtVpk2),
                "aria-expanded": x,
                "aria-haspopup": "dialog",
                "aria-controls": N,
                children: (0, r.jsx)(D, { size: "refresh_sm", color: "currentColor" }),
            }),
        }),
    });
}
let I = i.memo(i.forwardRef(A));
