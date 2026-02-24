"use strict";
n.d(t, { A: () => T });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(942381),
    l = n(612324),
    u = n(311907),
    c = n(990078),
    d = n(397927),
    _ = n(151271),
    f = n(617617),
    p = n(234320),
    h = n(545428),
    m = n(652215),
    E = n(698279),
    g = n(985018),
    A = n(111314);
function I(e, t) {
    let { disabled: n, type: s, channel: I } = e,
        [T, S] = i.useState(!1),
        y = i.useRef(null),
        v = (0, l.A)(t, y),
        N = (0, u.bG)(
            [f.A],
            () => T && Object.values(f.A.frecencyWithoutFetchingLatest.favoriteGifs?.gifs ?? {}).length <= 2,
        ),
        [C, b, R, O] = (0, _.RQ)((e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], o.x),
        D = i.useRef(0),
        L = i.useCallback(() => {
            S(!0),
                clearTimeout(D.current),
                (D.current = setTimeout(() => {
                    S(!1), (D.current = 0);
                }, 2e3));
        }, []);
    (0, p.Vo)({ event: m.jej.FAVORITE_GIF, handler: L });
    let w = i.useCallback(() => {
        (0, _.r$)(E.kx.GIF, s, I.id);
    }, [s, I.id]);
    if (n) return null;
    let x = C === E.kx.GIF && b === s && O === I.id;
    return (0, r.jsx)(c.m, {
        text: g.intl.string(N ? g.t.mE2e8A : g.t.nffuyb),
        shouldShow: N,
        forceOpen: N,
        children: (0, r.jsx)("div", {
            ref: v,
            className: a()(E.VQ, A.UD),
            children: (0, r.jsx)(h.A, {
                className: A.x6,
                onClick: () => {
                    w();
                },
                isActive: x,
                pulse: T,
                "aria-label": g.intl.string(g.t.PtVpk2),
                "aria-expanded": x,
                "aria-haspopup": "dialog",
                "aria-controls": R,
                children: (0, r.jsx)(d.VaI, {
                    eventTargetRef: y,
                    dataBinding: { fill: "currentColor" },
                    className: d.d5l.refresh_sm,
                }),
            }),
        }),
    });
}
let T = i.memo(i.forwardRef(I));
