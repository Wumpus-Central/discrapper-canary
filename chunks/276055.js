"use strict";
n.d(t, { A: () => y, l: () => S });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(900797),
    o = n(847374),
    l = n(320448),
    u = n(187322),
    c = n(140735),
    d = n(939249),
    _ = n(442433),
    f = n(485947),
    p = n(708197),
    h = n(435738),
    E = n(38055),
    m = n(495744),
    g = n(652215),
    A = n(985018),
    I = n(933928),
    T = n(540808);
function S(e) {
    return e?.id === m.C;
}
let y = i.memo(function (e) {
    let t,
        { title: m, onToggleExpand: S, expanded: y, expandedCount: N } = e,
        v = (0, s.bG)([h.A], () => h.A.hidden),
        C = i.useCallback((e) => {
            (0, _.L3)(e, async () => {
                let { MemberListContentSettingsMenu: e } = await Promise.resolve().then(n.bind(n, 38055));
                return () => (0, r.jsx)(e, { closePopout: _.Z_ });
            });
        }, []);
    return (0, r.jsxs)(f.A, {
        className: T.lL,
        children: [
            (0, r.jsx)(c.A, { children: A.intl.format(A.t.Uaqbke, { title: m, count: N }) }),
            (0, r.jsxs)(d.D, {
                onClick: (e) => {
                    if (e.currentTarget === e.target || e.currentTarget.contains(e.target))
                        return v ? (0, p.Il)() : N > 3 ? S() : (0, g.tEg)();
                },
                onContextMenu: C,
                tag: "span",
                "aria-hidden": !0,
                className: I.N1,
                children: [
                    (0, r.jsxs)("div", {
                        className: I.wx,
                        children: [(0, r.jsxs)("span", { children: [m, " — ", N] }), (0, r.jsx)(E.A, {})],
                    }),
                    N <= 3 && !v
                        ? null
                        : ((t = v
                              ? (0, r.jsx)(a.t, { className: I.wT })
                              : y
                                ? (0, r.jsx)(o.a, { className: I.wT })
                                : (0, r.jsx)(l._, { className: I.wT })),
                          (0, r.jsx)(u.vN, {
                              children: (0, r.jsx)("div", { tabIndex: 0, className: I.wT, children: t }),
                          })),
                ],
            }),
        ],
    });
});
