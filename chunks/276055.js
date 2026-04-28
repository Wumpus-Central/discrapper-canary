"use strict";
n.d(t, { A: () => v, l: () => I });
var l = n(627968),
    i = n(64700),
    s = n(17928),
    a = n(900797),
    r = n(847374),
    o = n(320448),
    c = n(187322),
    u = n(140735),
    d = n(939249),
    h = n(442433),
    m = n(485947),
    p = n(180170),
    f = n(435738),
    g = n(38055),
    _ = n(495744),
    x = n(652215),
    C = n(985018),
    A = n(933928),
    E = n(540808);
function I(e) {
    return e?.id === _.C;
}
let v = i.memo(function (e) {
    let t,
        { title: _, onToggleExpand: I, expanded: v, expandedCount: y } = e,
        b = (0, s.bG)([f.A], () => f.A.hidden),
        S = i.useCallback((e) => {
            (0, h.L3)(e, async () => {
                let { MemberListContentSettingsMenu: e } = await Promise.resolve().then(n.bind(n, 38055));
                return () => (0, l.jsx)(e, { closePopout: h.Z_ });
            });
        }, []);
    return (0, l.jsxs)(m.A, {
        className: E.lL,
        children: [
            (0, l.jsx)(u.A, { children: C.intl.format(C.t.Uaqbke, { title: _, count: y }) }),
            (0, l.jsxs)(d.D, {
                onClick: (e) => {
                    if (e.currentTarget === e.target || e.currentTarget.contains(e.target))
                        return b ? (0, p.Il)() : y > 3 ? I() : (0, x.tEg)();
                },
                onContextMenu: S,
                tag: "span",
                "aria-hidden": !0,
                className: A.N1,
                children: [
                    (0, l.jsxs)("div", {
                        className: A.wx,
                        children: [(0, l.jsxs)("span", { children: [_, " — ", y] }), (0, l.jsx)(g.A, {})],
                    }),
                    y <= 3 && !b
                        ? null
                        : ((t = b
                              ? (0, l.jsx)(a.t, { className: A.wT })
                              : v
                                ? (0, l.jsx)(r.a, { className: A.wT })
                                : (0, l.jsx)(o._, { className: A.wT })),
                          (0, l.jsx)(c.vN, {
                              children: (0, l.jsx)("div", { tabIndex: 0, className: A.wT, children: t }),
                          })),
                ],
            }),
        ],
    });
});
