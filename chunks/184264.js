n.d(t, { A: () => v }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(942381),
    l = n(311907),
    c = n(3203),
    u = n(990078),
    d = n(332779),
    f = n(151271),
    p = n(617617),
    _ = n(234320),
    h = n(184761),
    m = n(355622),
    g = n(545428),
    E = n(652215),
    b = n(698279),
    y = n(985018),
    O = n(111314);
function A(e, t) {
    let { disabled: n, type: a, channel: A } = e,
        [v, S] = i.useState(!1),
        I = (0, l.bG)([p.A], () => {
            var e, t;
            return (
                v &&
                Object.values(
                    null != (e = null == (t = p.A.frecencyWithoutFetchingLatest.favoriteGifs) ? void 0 : t.gifs)
                        ? e
                        : {},
                ).length <= 2
            );
        }),
        [T, C, N, R] = (0, f.RQ)((e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], o.x),
        w = i.useRef(0),
        P = i.useCallback(() => {
            S(!0),
                clearTimeout(w.current),
                (w.current = setTimeout(() => {
                    S(!1), (w.current = 0);
                }, 2000));
        }, []);
    (0, _.Vo)({
        event: E.jej.FAVORITE_GIF,
        handler: P,
    });
    let D = i.useCallback(() => {
            (0, f.r$)(b.kx.GIF, a, A.id);
        }, [a, A.id]),
        { Component: x, events: L, play: j } = (0, c.V)(),
        M = (0, h.p)(d.T),
        k = a === m.oU.NORMAL ? M : void 0;
    if (n) return null;
    let U = T === b.kx.GIF && C === a && R === A.id;
    return (0, r.jsx)(u.m, {
        keyboardShortcut: I ? void 0 : k,
        text: y.intl.string(I ? y.t.mE2e8A : y.t.nffuyb),
        shouldShow: I || null != k,
        forceOpen: I,
        children: (0, r.jsx)("div", {
            ref: t,
            className: s()(b.VQ, O.UD),
            children: (0, r.jsx)(g.A, {
                className: O.x6,
                onMouseEnter: L.onMouseEnter,
                onMouseLeave: L.onMouseLeave,
                onClick: () => {
                    D(), j();
                },
                isActive: U,
                pulse: v,
                "aria-label": y.intl.string(y.t.PtVpk2),
                "aria-expanded": U,
                "aria-haspopup": "dialog",
                "aria-controls": N,
                children: (0, r.jsx)(x, {
                    size: "refresh_sm",
                    color: "currentColor",
                }),
            }),
        }),
    });
}
let v = i.memo(i.forwardRef(A));
