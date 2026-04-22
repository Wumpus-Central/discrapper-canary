"use strict";
n.d(t, { A: () => A });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(942381),
    o = n(311907),
    c = n(3203),
    u = n(990078),
    d = n(151271),
    h = n(617617),
    m = n(234320),
    p = n(545428),
    f = n(652215),
    g = n(698279),
    _ = n(985018),
    x = n(266599);
let A = l.memo(
    l.forwardRef(function (e, t) {
        let { disabled: n, type: s, channel: A } = e,
            [C, E] = l.useState(!1),
            I = (0, o.bG)(
                [h.A],
                () => C && Object.values(h.A.frecencyWithoutFetchingLatest.favoriteGifs?.gifs ?? {}).length <= 2,
            ),
            [v, y, S, b] = (0, d.RQ)((e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], a.x),
            N = l.useRef(0),
            T = l.useCallback(() => {
                E(!0),
                    clearTimeout(N.current),
                    (N.current = setTimeout(() => {
                        E(!1), (N.current = 0);
                    }, 2e3));
            }, []);
        (0, m.Vo)({ event: f.jej.FAVORITE_GIF, handler: T });
        let j = l.useCallback(() => {
                (0, d.r$)(g.kx.GIF, s, A.id);
            }, [s, A.id]),
            { Component: R, events: w, play: L } = (0, c.V)();
        if (n) return null;
        let M = v === g.kx.GIF && y === s && b === A.id;
        return (0, i.jsx)(u.m, {
            text: _.intl.string(I ? _.t.mE2e8A : _.t.nffuyb),
            shouldShow: I,
            forceOpen: I,
            children: (0, i.jsx)("div", {
                ref: t,
                className: r()(g.VQ, x.UD),
                children: (0, i.jsx)(p.A, {
                    className: x.x6,
                    onMouseEnter: w.onMouseEnter,
                    onMouseLeave: w.onMouseLeave,
                    onClick: () => {
                        j(), L();
                    },
                    isActive: M,
                    pulse: C,
                    "aria-label": _.intl.string(_.t.PtVpk2),
                    "aria-expanded": M,
                    "aria-haspopup": "dialog",
                    "aria-controls": S,
                    children: (0, i.jsx)(R, { size: "refresh_sm", color: "currentColor" }),
                }),
            }),
        });
    }),
);
