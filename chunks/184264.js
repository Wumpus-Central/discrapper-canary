n.d(t, {
    A: () => b,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(942381),
    l = n(311907),
    c = n(3203),
    u = n(990078),
    d = n(151271),
    f = n(617617),
    p = n(234320),
    _ = n(545428),
    h = n(652215),
    m = n(698279),
    g = n(985018),
    E = n(111314);

function y(e, t) {
    let { disabled: n, type: a, channel: y } = e,
        [b, O] = i.useState(!1),
        v = (0, l.bG)([f.A], () => {
            var e, t;
            return (
                b &&
                Object.values(
                    null != (e = null == (t = f.A.frecencyWithoutFetchingLatest.favoriteGifs) ? void 0 : t.gifs)
                        ? e
                        : {},
                ).length <= 2
            );
        }),
        [A, I, S, T] = (0, d.RQ)((e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], s.x),
        C = i.useRef(0),
        N = i.useCallback(() => {
            O(!0),
                clearTimeout(C.current),
                (C.current = setTimeout(() => {
                    O(!1), (C.current = 0);
                }, 2e3));
        }, []);
    (0, p.Vo)({
        event: h.jej.FAVORITE_GIF,
        handler: N,
    });
    let w = i.useCallback(() => {
            (0, d.r$)(m.kx.GIF, a, y.id);
        }, [a, y.id]),
        { Component: R, events: P, play: D } = (0, c.V)();
    if (n) return null;
    let L = A === m.kx.GIF && I === a && T === y.id;
    return (0, r.jsx)(u.m, {
        text: g.intl.string(v ? g.t.mE2e8A : g.t.nffuyb),
        shouldShow: v,
        forceOpen: v,
        children: (0, r.jsx)("div", {
            ref: t,
            className: o()(m.VQ, E.UD),
            children: (0, r.jsx)(_.A, {
                className: E.x6,
                onMouseEnter: P.onMouseEnter,
                onMouseLeave: P.onMouseLeave,
                onClick: () => {
                    w(), D();
                },
                isActive: L,
                pulse: b,
                "aria-label": g.intl.string(g.t.PtVpk2),
                "aria-expanded": L,
                "aria-haspopup": "dialog",
                "aria-controls": S,
                children: (0, r.jsx)(R, {
                    size: "refresh_sm",
                    color: "currentColor",
                }),
            }),
        }),
    });
}
let b = i.memo(i.forwardRef(y));
