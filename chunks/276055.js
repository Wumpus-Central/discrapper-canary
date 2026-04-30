"use strict";
n.d(t, { A: () => v, l: () => y });
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
    x = n(495744),
    C = n(652215),
    A = n(985018),
    E = n(933928),
    I = n(540808);
function y(e) {
    return e?.id === x.C;
}
let v = i.memo(function (e) {
    let t,
        { title: x, onToggleExpand: y, expanded: v, expandedCount: S } = e,
        N = (0, s.bG)([f.A], () => f.A.hidden),
        j = i.useCallback((e) => {
            (0, h.L3)(e, async () => {
                let { MemberListContentSettingsMenu: e } = await Promise.resolve().then(n.bind(n, 38055));
                return () => (0, l.jsx)(e, { closePopout: h.Z_ });
            });
        }, []);
    return (0, l.jsxs)(m.A, {
        className: I.lL,
        children: [
            (0, l.jsx)(u.A, { children: A.intl.format(A.t.Uaqbke, { title: x, count: S }) }),
            (0, l.jsxs)(d.D, {
                onClick: (e) => {
                    if (e.currentTarget === e.target || e.currentTarget.contains(e.target))
                        return N ? (0, p.Il)() : S > 3 ? y() : (0, C.tEg)();
                },
                onContextMenu: j,
                tag: "span",
                "aria-hidden": !0,
                className: E.N1,
                children: [
                    (0, l.jsxs)("div", {
                        className: E.wx,
                        children: [(0, l.jsxs)("span", { children: [x, " — ", S] }), (0, l.jsx)(g.A, {})],
                    }),
                    S <= 3 && !N
                        ? null
                        : ((t = N
                              ? (0, l.jsx)(a.t, { className: E.wT })
                              : v
                                ? (0, l.jsx)(r.a, { className: E.wT })
                                : (0, l.jsx)(o._, { className: E.wT })),
                          (0, l.jsx)(c.vN, {
                              children: (0, l.jsx)("div", { tabIndex: 0, className: E.wT, children: t }),
                          })),
                ],
            }),
        ],
    });
});
