"use strict";
n.d(t, { A: () => A });
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
    E = n(698279),
    m = n(985018),
    g = n(266599);
let A = i.memo(
    i.forwardRef(function (e, t) {
        let { disabled: n, type: s, channel: A } = e,
            [I, T] = i.useState(!1),
            S = (0, l.bG)(
                [_.A],
                () => I && Object.values(_.A.frecencyWithoutFetchingLatest.favoriteGifs?.gifs ?? {}).length <= 2,
            ),
            [y, N, v, C] = (0, d.RQ)((e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], o.x),
            O = i.useRef(0),
            R = i.useCallback(() => {
                T(!0),
                    clearTimeout(O.current),
                    (O.current = setTimeout(() => {
                        T(!1), (O.current = 0);
                    }, 2e3));
            }, []);
        (0, f.Vo)({ event: h.jej.FAVORITE_GIF, handler: R });
        let b = i.useCallback(() => {
                (0, d.r$)(E.kx.GIF, s, A.id);
            }, [s, A.id]),
            { Component: D, events: L, play: w } = (0, u.V)();
        if (n) return null;
        let M = y === E.kx.GIF && N === s && C === A.id;
        return (0, r.jsx)(c.m, {
            text: m.intl.string(S ? m.t.mE2e8A : m.t.nffuyb),
            shouldShow: S,
            forceOpen: S,
            children: (0, r.jsx)("div", {
                ref: t,
                className: a()(E.VQ, g.UD),
                children: (0, r.jsx)(p.A, {
                    className: g.x6,
                    onMouseEnter: L.onMouseEnter,
                    onMouseLeave: L.onMouseLeave,
                    onClick: () => {
                        b(), w();
                    },
                    isActive: M,
                    pulse: I,
                    "aria-label": m.intl.string(m.t.PtVpk2),
                    "aria-expanded": M,
                    "aria-haspopup": "dialog",
                    "aria-controls": v,
                    children: (0, r.jsx)(D, { size: "refresh_sm", color: "currentColor" }),
                }),
            }),
        });
    }),
);
