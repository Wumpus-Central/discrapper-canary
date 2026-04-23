"use strict";
n.d(t, { A: () => N, l: () => S });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(900797),
    o = n(847374),
    l = n(320448),
    d = n(187322),
    _ = n(140735),
    u = n(939249),
    c = n(442433),
    E = n(485947),
    h = n(180170),
    m = n(435738),
    f = n(38055),
    g = n(495744),
    p = n(652215),
    A = n(985018),
    I = n(933928),
    T = n(540808);
function S(e) {
    return e?.id === g.C;
}
let N = r.memo(function (e) {
    let t,
        { title: g, onToggleExpand: S, expanded: N, expandedCount: C } = e,
        R = (0, s.bG)([m.A], () => m.A.hidden),
        O = r.useCallback((e) => {
            (0, c.L3)(e, async () => {
                let { MemberListContentSettingsMenu: e } = await Promise.resolve().then(n.bind(n, 38055));
                return () => (0, i.jsx)(e, { closePopout: c.Z_ });
            });
        }, []);
    return (0, i.jsxs)(E.A, {
        className: T.lL,
        children: [
            (0, i.jsx)(_.A, { children: A.intl.format(A.t.Uaqbke, { title: g, count: C }) }),
            (0, i.jsxs)(u.D, {
                onClick: (e) => {
                    if (e.currentTarget === e.target || e.currentTarget.contains(e.target))
                        return R ? (0, h.Il)() : C > 3 ? S() : (0, p.tEg)();
                },
                onContextMenu: O,
                tag: "span",
                "aria-hidden": !0,
                className: I.N1,
                children: [
                    (0, i.jsxs)("div", {
                        className: I.wx,
                        children: [(0, i.jsxs)("span", { children: [g, " — ", C] }), (0, i.jsx)(f.A, {})],
                    }),
                    C <= 3 && !R
                        ? null
                        : ((t = R
                              ? (0, i.jsx)(a.t, { className: I.wT })
                              : N
                                ? (0, i.jsx)(o.a, { className: I.wT })
                                : (0, i.jsx)(l._, { className: I.wT })),
                          (0, i.jsx)(d.vN, {
                              children: (0, i.jsx)("div", { tabIndex: 0, className: I.wT, children: t }),
                          })),
                ],
            }),
        ],
    });
});
