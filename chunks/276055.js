"use strict";
n.d(t, { A: () => A, l: () => g });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(442433),
    l = n(485947),
    u = n(708197),
    c = n(435738),
    d = n(38055),
    _ = n(495744),
    f = n(652215),
    p = n(985018),
    h = n(792039),
    m = n(701939);
function g(e) {
    return e?.id === _.C;
}
function E(e) {
    let { title: t, onToggleExpand: _, expanded: g, expandedCount: E } = e,
        A = (0, a.bG)([c.A], () => c.A.hidden),
        I = i.useCallback((e) => {
            (0, o.L3)(e, async () => {
                let { MemberListContentSettingsMenu: e } = await Promise.resolve().then(n.bind(n, 38055));
                return () => (0, r.jsx)(e, { closePopout: o.Z_ });
            });
        }, []),
        T = () => {
            let e;
            return E <= 3 && !A
                ? null
                : ((e = A
                      ? (0, r.jsx)(s.tN5, { className: h.wT })
                      : g
                        ? (0, r.jsx)(s.abt, { className: h.wT })
                        : (0, r.jsx)(s._BQ, { className: h.wT })),
                  (0, r.jsx)(s.vN3, { children: (0, r.jsx)("div", { tabIndex: 0, className: h.wT, children: e }) }));
        };
    return (0, r.jsxs)(l.A, {
        className: m.lL,
        children: [
            (0, r.jsx)(s.AC4, { children: p.intl.format(p.t.Uaqbke, { title: t, count: E }) }),
            (0, r.jsxs)(s.DUT, {
                onClick: (e) => {
                    if (e.currentTarget === e.target || e.currentTarget.contains(e.target))
                        return A ? (0, u.Il)() : E > 3 ? _() : (0, f.tEg)();
                },
                onContextMenu: I,
                tag: "span",
                "aria-hidden": !0,
                className: h.N1,
                children: [
                    (0, r.jsxs)("div", {
                        className: h.wx,
                        children: [(0, r.jsxs)("span", { children: [t, " — ", E] }), (0, r.jsx)(d.A, {})],
                    }),
                    T(),
                ],
            }),
        ],
    });
}
let A = i.memo(E);
