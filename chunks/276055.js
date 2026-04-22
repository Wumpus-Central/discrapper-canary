"use strict";
n.d(t, { A: () => v, l: () => I });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(900797),
    a = n(847374),
    o = n(320448),
    c = n(187322),
    u = n(140735),
    d = n(939249),
    h = n(442433),
    m = n(485947),
    p = n(708197),
    f = n(435738),
    g = n(38055),
    _ = n(495744),
    x = n(652215),
    A = n(985018),
    C = n(933928),
    E = n(540808);
function I(e) {
    return e?.id === _.C;
}
let v = l.memo(function (e) {
    let t,
        { title: _, onToggleExpand: I, expanded: v, expandedCount: y } = e,
        S = (0, s.bG)([f.A], () => f.A.hidden),
        b = l.useCallback((e) => {
            (0, h.L3)(e, async () => {
                let { MemberListContentSettingsMenu: e } = await Promise.resolve().then(n.bind(n, 38055));
                return () => (0, i.jsx)(e, { closePopout: h.Z_ });
            });
        }, []);
    return (0, i.jsxs)(m.A, {
        className: E.lL,
        children: [
            (0, i.jsx)(u.A, { children: A.intl.format(A.t.Uaqbke, { title: _, count: y }) }),
            (0, i.jsxs)(d.D, {
                onClick: (e) => {
                    if (e.currentTarget === e.target || e.currentTarget.contains(e.target))
                        return S ? (0, p.Il)() : y > 3 ? I() : (0, x.tEg)();
                },
                onContextMenu: b,
                tag: "span",
                "aria-hidden": !0,
                className: C.N1,
                children: [
                    (0, i.jsxs)("div", {
                        className: C.wx,
                        children: [(0, i.jsxs)("span", { children: [_, " — ", y] }), (0, i.jsx)(g.A, {})],
                    }),
                    y <= 3 && !S
                        ? null
                        : ((t = S
                              ? (0, i.jsx)(r.t, { className: C.wT })
                              : v
                                ? (0, i.jsx)(a.a, { className: C.wT })
                                : (0, i.jsx)(o._, { className: C.wT })),
                          (0, i.jsx)(c.vN, {
                              children: (0, i.jsx)("div", { tabIndex: 0, className: C.wT, children: t }),
                          })),
                ],
            }),
        ],
    });
});
